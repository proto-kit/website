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
import { PublicKey } from "o1js";
import { Balances } from "@proto-kit/library";

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
