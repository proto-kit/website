---
title: SequencerModule
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / SequencerModule

# Class: `abstract` SequencerModule\<Config\>

Defined in: [packages/sequencer/src/sequencer/builder/SequencerModule.ts:15](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/sequencer/builder/SequencerModule.ts#L15)

Lifecycle of a SequencerModule

start(): Executed to execute any logic required to start the module

## Extends

- [`ConfigurableModule`](../../common/classes/ConfigurableModule.md)\<`Config`\>

## Extended by

- [`PrivateMempool`](PrivateMempool.md)
- [`AbstractTaskQueue`](AbstractTaskQueue.md)
- [`MinaBaseLayer`](MinaBaseLayer.md)
- [`NoopBaseLayer`](NoopBaseLayer.md)
- [`BlockTriggerBase`](BlockTriggerBase.md)
- [`BatchProducerModule`](BatchProducerModule.md)
- [`BlockProducerModule`](BlockProducerModule.md)
- [`SequencerStartupModule`](SequencerStartupModule.md)
- [`InMemoryDatabase`](InMemoryDatabase.md)
- [`DatabasePruneModule`](DatabasePruneModule.md)
- [`SettlementModule`](SettlementModule.md)
- [`WithdrawalQueue`](WithdrawalQueue.md)
- [`GraphqlServer`](../../api/classes/GraphqlServer.md)
- [`IndexerNotifier`](../../indexer/classes/IndexerNotifier.md)
- [`PrismaDatabaseConnection`](../../persistance/classes/PrismaDatabaseConnection.md)
- [`PrismaRedisDatabase`](../../persistance/classes/PrismaRedisDatabase.md)
- [`RedisConnectionModule`](../../persistance/classes/RedisConnectionModule.md)

## Type Parameters

• **Config** = [`NoConfig`](../../common/type-aliases/NoConfig.md)

## Constructors

### new SequencerModule()

> **new SequencerModule**\<`Config`\>(): [`SequencerModule`](SequencerModule.md)\<`Config`\>

#### Returns

[`SequencerModule`](SequencerModule.md)\<`Config`\>

#### Inherited from

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md).[`constructor`](../../common/classes/ConfigurableModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| `Config`

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md).[`currentConfig`](../../common/classes/ConfigurableModule.md#currentconfig)

***

### presets

> `static` **presets**: [`Presets`](../../common/type-aliases/Presets.md)\<`unknown`\> = `{}`

Defined in: [packages/sequencer/src/sequencer/builder/SequencerModule.ts:18](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/sequencer/builder/SequencerModule.ts#L18)

## Accessors

### config

#### Get Signature

> **get** **config**(): `Config`

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:18

##### Returns

`Config`

#### Set Signature

> **set** **config**(`config`): `void`

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:19

##### Parameters

###### config

`Config`

##### Returns

`void`

#### Inherited from

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md).[`config`](../../common/classes/ConfigurableModule.md#config)

## Methods

### create()

> **create**(`childContainerProvider`): `void`

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:20

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../../common/interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Inherited from

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md).[`create`](../../common/classes/ConfigurableModule.md#create)

***

### start()

> `abstract` **start**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/sequencer/builder/SequencerModule.ts:26](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/sequencer/builder/SequencerModule.ts#L26)

Start the module and all it's functionality.
The returned Promise has to resolve after initialization,
since it will block in the sequencer init.
That means that you mustn't await server.start() for example.

#### Returns

`Promise`\<`void`\>
