import { Runtime } from "@proto-kit/module";
import { Protocol } from "@proto-kit/protocol";
import {
  Sequencer,
  AppChain,
  InMemoryDatabase,
  PrivateMempool,
  TimedBlockTrigger,
  WorkerModule,
  VanillaTaskWorkerModules,
  LocalTaskQueue,
  LocalSequencerCoreModule,
} from "@proto-kit/sequencer";
import { VanillaGraphqlModules, GraphqlSequencerModule } from "@proto-kit/api";
import {
  BlockStorageNetworkStateModule,
  InMemoryTransactionSender,
  StateServiceQueryModule,
} from "@proto-kit/sdk";
import { Startable } from "@proto-kit/common";

import protocol from "../../../protocol";
import runtime from "../../../runtime";

//group appchain-def-1
const appChain = AppChain.from({
  Runtime: Runtime.from(runtime.modules),
  Protocol: Protocol.from(protocol.modules),
  Sequencer: Sequencer.from({
    //group appchain-def-1
    WorkerModule: WorkerModule.from(
      VanillaTaskWorkerModules.withoutSettlement()
    ),
    TaskQueue: LocalTaskQueue,
    LocalSequencerCoreModule,
    //group appchain-def-2
    Database: InMemoryDatabase,
    Mempool: PrivateMempool,
    //group appchain-def-2
    Graphql: GraphqlSequencerModule.from(VanillaGraphqlModules.with({})),
    BlockTrigger: TimedBlockTrigger,
  }),
  // appchain modules
  TransactionSender: InMemoryTransactionSender,
  QueryTransportModule: StateServiceQueryModule,
  NetworkStateTransportModule: BlockStorageNetworkStateModule,
});

//group appchain-conf-1
export default async (): Promise<Startable> => {
  appChain.configure({
    Runtime: runtime.config,
    Protocol: protocol.config,
    Sequencer: {
      //group appchain-conf-1
      Graphql: {
        ...VanillaGraphqlModules.defaultConfig(),
        containerConfig: {
          port: Number(process.env.PROTOKIT_GRAPHQL_PORT),
          host: process.env.PROTOKIT_GRAPHQL_HOST ?? "localhost",
          graphiql: true,
        },
      },
      //group appchain-conf-2
      Database: {},
      Mempool: {
        targetBlockSize: 20,
      },
      //group appchain-conf-2
      LocalSequencerCoreModule: {
        SequencerStartupModule: {},
        BlockProducerModule: {},
      },
      BlockTrigger: {
        blockInterval: 5000,
        produceEmptyBlocks: true,
        settlementTokenConfig: {},
      },
      WorkerModule: VanillaTaskWorkerModules.defaultConfig(),
      TaskQueue: {},
    },
    // appchain modules configuration
    QueryTransportModule: {},
    NetworkStateTransportModule: {},
    TransactionSender: {},
  });
  //group appchain-conf-3

  return appChain;
};
//group appchain-conf-3
