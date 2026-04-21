import {
  AppChain,
  BridgingModule,
  ConstantFeeStrategy,
  InMemoryMinaSigner,
  MinaBaseLayer,
  Sequencer,
  SettlementModule,
  TimedBlockTrigger,
} from "@proto-kit/sequencer";
import { Runtime } from "@proto-kit/module";
import { Protocol, SettlementContractModule } from "@proto-kit/protocol";
import { PrivateKey, PublicKey } from "o1js";
import { Balances } from "@proto-kit/library";

// group modules
const appChain = AppChain.from({
  Runtime: Runtime.from({
    Balances,
  }),
  Protocol: Protocol.from({
    ...Protocol.defaultModules(),
    SettlementContractModule: SettlementContractModule.from(
      SettlementContractModule.settlementOnly()
    ),
  }),
  Sequencer: Sequencer.from({
    BlockTrigger: TimedBlockTrigger,
    // ...
    BaseLayer: MinaBaseLayer,
    FeeStrategy: ConstantFeeStrategy,
    SettlementModule,
    SettlementSigner: InMemoryMinaSigner,
  }),
});
// group modules

appChain.configure({
  Runtime: {
    Balances: {},
  },
  // group protocol-conf
  Protocol: {
    ...Protocol.defaultConfig(),
    SettlementContractModule: {
      SettlementContract: {},
    },
  },
  // group protocol-conf
  Sequencer: {
    // group interval-conf
    BlockTrigger: {
      blockInterval: 20000,
      settlementInterval: 600000, // 10 minutes
      settlementTokenConfig: {},
    },
    // group interval-conf
    // group network-conf
    BaseLayer: {
      network: {
        type: "lightnet", // Could be "local" | "lightnet" | "remote"
        graphql: "http://localhost:8083/graphql",
        archive: "http://localhost:8085/graphql",
        accountManager: "http://localhost:8084",
      },
    },
    // group network-conf
    // group key-conf
    SettlementModule: {
      addresses: {
        SettlementContract: PublicKey.fromBase58(""),
      },
    },
    SettlementSigner: {
      feepayer: PrivateKey.fromBase58(""),
      contractKeys: [
        // Contract private keys go here
      ],
    },
    // group key-conf
    // group fee-conf
    FeeStrategy: {
      fee: 0.1 * 1e9, // 0.1 MINA
    },
    // group fee-conf
  },
});
