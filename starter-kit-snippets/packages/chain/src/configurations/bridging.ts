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
import { Balances } from "@proto-kit/library";
import { FungibleToken } from "mina-fungible-token";

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
