import {
  AppChain,
  BridgingModule,
  MinaTransactionSender,
  Sequencer,
  SettlementModule,
} from "@proto-kit/sequencer";
import { Runtime } from "@proto-kit/module";
import {
  DispatchSmartContract,
  Protocol,
  SettlementContractModule,
} from "@proto-kit/protocol";
import {
  AccountUpdate,
  Mina,
  PrivateKey,
  PublicKey,
  TokenId,
  UInt64,
} from "o1js";
import { Balances, UInt64 as ProtokitUInt64 } from "@proto-kit/library";
import { FungibleToken } from "mina-fungible-token";
import { ClientAppChain } from "@proto-kit/sdk";
import { Withdrawals } from "../runtime/modules/withdrawals";

const appChain = AppChain.from({
  Runtime: Runtime.from({
    Balances,
  }),
  // group protocol-modules
  Protocol: Protocol.from({
    ...Protocol.defaultModules(),
    SettlementContractModule: SettlementContractModule.from(
      SettlementContractModule.settlementAndBridging()
    ),
  }),
  // group protocol-modules
  // group sequencer-modules
  Sequencer: Sequencer.from({
    // ...
    BridgingModule,
  }),
  // group sequencer-modules
});

appChain.configure({
  Runtime: {
    Balances: {},
  },
  // group protocol-conf
  Protocol: {
    ...Protocol.defaultConfig(),
    SettlementContractModule: {
      SettlementContract: {},
      BridgeContract: {},
      DispatchContract: {
        incomingMessagesMethods: {
          deposit: "Balances.deposit",
        },
      },
    },
  },
  // group protocol-conf
  Sequencer: {
    // group bridging-conf
    BridgingModule: {
      addresses: {
        DispatchContract: PublicKey.fromBase58(""),
      },
    },
    // group bridging-conf
  },
});

// ------- Deposit ---------

// group deposit-framework
// Inputs
const tokenId = TokenId.default;
const fromPrivateKey = PrivateKey.fromBase58("");
const toPublicKey = PublicKey.fromBase58("");
const amount = 100 * 1e9; // 100 MINA
const fee = 0.1 * 1e9; // 0.1 MINA

const bridgeContractKey = PrivateKey.fromBase58("");
const isCustomToken = false;
const tokenOwnerPrivateKey = PrivateKey.fromBase58("");

// Prepare modules and other inputs
const settlementModule = appChain.sequencer.resolveOrFail(
  "SettlementModule",
  SettlementModule
);
const bridgingModule = appChain.sequencer.resolveOrFail(
  "BridgingModule",
  BridgingModule
);
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const dispatch = bridgingModule.getDispatchContract() as DispatchSmartContract;

const attestation = await bridgingModule.getDepositContractAttestation(tokenId);

// Forge L1 transaction
const tx = await Mina.transaction(
  {
    memo: "User deposit",
    sender: fromPrivateKey.toPublicKey(),
    fee,
  },
  async () => {
    const au = AccountUpdate.createSigned(
      fromPrivateKey.toPublicKey(),
      tokenId
    );
    au.balance.subInPlace(UInt64.from(amount));

    await dispatch.deposit(
      UInt64.from(amount),
      tokenId,
      bridgeContractKey.toPublicKey(),
      attestation,
      toPublicKey
    );

    if (isCustomToken) {
      await new FungibleToken(
        tokenOwnerPrivateKey.toPublicKey()
      )!.approveAccountUpdates([au, dispatch.self]);
    }
  }
);

// Sign, prove and send transaction
settlementModule.utils.signTransaction(tx, {
  signingPublicKeys: [fromPrivateKey.toPublicKey()],
  preventNoncePreconditionFor: [dispatch.address],
  signingWithSignatureCheck: [tokenOwnerPrivateKey.toPublicKey()],
});

const { hash } = await appChain.sequencer
  .resolveOrFail("TransactionSender", MinaTransactionSender)
  .proveAndSendTransaction(tx, "included");

console.log(`Deposit completed! L1 tx hash: ${hash}`);
// group deposit-framework

// ------- Withdrawals ---------

const clientAppChain = ClientAppChain.from({
  Runtime: Runtime.from({
    Balances,
    Withdrawals,
  }),
  Protocol: Protocol.from({
    ...Protocol.defaultModules(),
    SettlementContractModule: SettlementContractModule.from(
      SettlementContractModule.settlementAndBridging()
    ),
  }),
  Sequencer: Sequencer.from({
    BridgingModule,
  }),
});

// group withdraw-framework
// Inputs for the withdrawal
const withdrawTokenId = TokenId.default;
const l2SenderPrivateKey = PrivateKey.fromBase58("");
const l1RecipientPrivateKey = PrivateKey.fromBase58("");
const withdrawAmount = 100 * 1e9; // 100 MINA
const l1Fee = 0.1 * 1e9; // 0.1 MINA

// Resolve modules
const settlementModuleWd = clientAppChain.sequencer.resolveOrFail(
  "SettlementModule",
  SettlementModule
);
const bridgingModuleWd = clientAppChain.sequencer.resolveOrFail(
  "BridgingModule",
  BridgingModule
);
const bridgeContract =
  await bridgingModuleWd.getBridgeContract(withdrawTokenId);

// Step 1 — Withdraw on the L2
// Sends an L2 transaction to the `Withdrawals` runtime module that burns
// the balance on the appchain and enqueues a withdrawal message.
const l2Tx = await clientAppChain.transaction(
  l2SenderPrivateKey.toPublicKey(),
  async () => {
    const withdrawals = clientAppChain.runtime.resolve("Withdrawals");
    await withdrawals.withdraw(
      l1RecipientPrivateKey.toPublicKey(),
      ProtokitUInt64.from(withdrawAmount),
      withdrawTokenId
    );
  }
);
await l2Tx.sign();
await l2Tx.send();

// IMPORTANT!
// Always wait here until the Sequencer has settled and unrolled the withdrawal action onto the L1!

// Step 2 — Redeem on the L1
// After the withdrawal has been unrolled onto the L1 (the recipient now holds
// the bridge's custom token), redeem it for the real tokens.
const redeemTx = await Mina.transaction(
  {
    sender: l1RecipientPrivateKey.toPublicKey(),
    fee: l1Fee,
  },
  async () => {
    const au = AccountUpdate.createSigned(
      l1RecipientPrivateKey.toPublicKey(),
      tokenId
    );
    au.balance.addInPlace(UInt64.from(amount));

    await bridgeContract.redeem(au);

    if (isCustomToken) {
      await new FungibleToken(
        tokenOwnerPrivateKey.toPublicKey()
      )!.approveAccountUpdate(bridgeContract.self);
    }
  }
);

settlementModuleWd.utils.signTransaction(redeemTx, {
  signingPublicKeys: [l1RecipientPrivateKey.toPublicKey()],
});

const { hash: redeemHash } = await appChain.sequencer
  .resolveOrFail("TransactionSender", MinaTransactionSender)
  .proveAndSendTransaction(redeemTx, "included");

console.log(`Withdrawal redeemed! L1 tx hash: ${redeemHash}`);
// group withdraw-framework
