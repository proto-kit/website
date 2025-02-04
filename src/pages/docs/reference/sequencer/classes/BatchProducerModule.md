---
title: BatchProducerModule
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / BatchProducerModule

# Class: BatchProducerModule

Defined in: [packages/sequencer/src/protocol/production/BatchProducerModule.ts:74](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/BatchProducerModule.ts#L74)

The BatchProducerModule has the resposiblity to oversee the block production
and combine all necessary parts for that to happen. The flow roughly follows
the following steps:

1. BlockTrigger triggers and executes the startup function
2.

## Extends

- [`SequencerModule`](SequencerModule.md)

## Constructors

### new BatchProducerModule()

> **new BatchProducerModule**(`asyncStateService`, `merkleStore`, `batchStorage`, `blockTreeStore`, `database`, `traceService`, `blockFlowService`, `blockProofSerializer`, `verificationKeyService`): [`BatchProducerModule`](BatchProducerModule.md)

Defined in: [packages/sequencer/src/protocol/production/BatchProducerModule.ts:77](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/BatchProducerModule.ts#L77)

#### Parameters

##### asyncStateService

[`AsyncStateService`](../interfaces/AsyncStateService.md)

##### merkleStore

[`AsyncMerkleTreeStore`](../interfaces/AsyncMerkleTreeStore.md)

##### batchStorage

[`BatchStorage`](../interfaces/BatchStorage.md)

##### blockTreeStore

[`AsyncMerkleTreeStore`](../interfaces/AsyncMerkleTreeStore.md)

##### database

[`Database`](../interfaces/Database.md)

##### traceService

[`TransactionTraceService`](TransactionTraceService.md)

##### blockFlowService

[`BlockTaskFlowService`](BlockTaskFlowService.md)

##### blockProofSerializer

[`BlockProofSerializer`](BlockProofSerializer.md)

##### verificationKeyService

`VerificationKeyService`

#### Returns

[`BatchProducerModule`](BatchProducerModule.md)

#### Overrides

[`SequencerModule`](SequencerModule.md).[`constructor`](SequencerModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`NoConfig`](../../common/type-aliases/NoConfig.md)

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`SequencerModule`](SequencerModule.md).[`currentConfig`](SequencerModule.md#currentconfig)

***

### presets

> `static` **presets**: [`Presets`](../../common/type-aliases/Presets.md)\<`unknown`\> = `{}`

Defined in: [packages/sequencer/src/sequencer/builder/SequencerModule.ts:18](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/sequencer/builder/SequencerModule.ts#L18)

#### Inherited from

[`SequencerModule`](SequencerModule.md).[`presets`](SequencerModule.md#presets)

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

[`SequencerModule`](SequencerModule.md).[`config`](SequencerModule.md#config)

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

[`SequencerModule`](SequencerModule.md).[`create`](SequencerModule.md#create)

***

### createBatch()

> **createBatch**(`blocks`): `Promise`\<`undefined` \| [`SettleableBatch`](../interfaces/SettleableBatch.md)\>

Defined in: [packages/sequencer/src/protocol/production/BatchProducerModule.ts:108](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/BatchProducerModule.ts#L108)

Main function to call when wanting to create a new block based on the
transactions that are present in the mempool. This function should also
be the one called by BlockTriggers

#### Parameters

##### blocks

[`BlockWithPreviousResult`](../interfaces/BlockWithPreviousResult.md)[]

#### Returns

`Promise`\<`undefined` \| [`SettleableBatch`](../interfaces/SettleableBatch.md)\>

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/protocol/production/BatchProducerModule.ts:132](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/BatchProducerModule.ts#L132)

Start the module and all it's functionality.
The returned Promise has to resolve after initialization,
since it will block in the sequencer init.
That means that you mustn't await server.start() for example.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`SequencerModule`](SequencerModule.md).[`start`](SequencerModule.md#start)
