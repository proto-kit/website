@runtimeModule()
export class Balances extends RuntimeModule<Config> {
  // ...
  @runtimeMessage()
  public async deposit(deposit: Deposit) {
    await this.mint(deposit.tokenId, deposit.address, deposit.amount);
  }
}

appchain.configure({
  // ...
  Protocol: {
    // ...
    SettlementContractModule: {
      SettlementContract: {},
      BridgeContract: {},
      DispatchContract: {
        incomingMessagesMethods: {
          deposit: "Balances.deposit",
        },
      },
    }
  }
});

      metrics: {
        enabled: true
        prometheus: {
          host: "prometheus",
          port: 4320,
          appendTimestamp: true,
        },
        nodeScrapeInterval: 10, // interval in seconds
      },
      tracing: {
        enabled: true
        otlp: {
          url: "http://otel-collector:4317"
        },
      },


const appchain = AppChain.from({
  ...,
  Protocol: Protocol.from({
    ...VanillaProtocolModules.mandatoryModules({}),
    SettlementContractModule: SettlementContractModule.with({
      FungibleToken: FungibleTokenContractModule,
      FungibleTokenAdmin: FungibleTokenAdminContractModule,
    }),
    WithdrawalMessageProcessor,
  }),
  Sequencer: {
    ...
    BaseLayer: MinaBaseLayer,
    SettlementModule: SettlementModule,
    ...
    LocalTaskWorkerModule: VanillaTaskWorkerModules.defaultConfig(),
  }
})

