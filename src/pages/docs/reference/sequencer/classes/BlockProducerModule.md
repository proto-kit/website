---
title: BlockProducerModule
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / BlockProducerModule

# Class: BlockProducerModule

Defined in: [packages/sequencer/src/protocol/production/sequencing/BlockProducerModule.ts:39](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/sequencing/BlockProducerModule.ts#L39)

Lifecycle of a SequencerModule

start(): Executed to execute any logic required to start the module

## Extends

- [`SequencerModule`](SequencerModule.md)\<[`BlockConfig`](../interfaces/BlockConfig.md)\>

## Constructors

### new BlockProducerModule()

> **new BlockProducerModule**(`mempool`, `messageStorage`, `unprovenStateService`, `unprovenMerkleStore`, `blockQueue`, `blockTreeStore`, `productionService`, `resultService`, `methodIdResolver`, `runtime`, `database`): [`BlockProducerModule`](BlockProducerModule.md)

Defined in: [packages/sequencer/src/protocol/production/sequencing/BlockProducerModule.ts:42](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/sequencing/BlockProducerModule.ts#L42)

#### Parameters

##### mempool

[`Mempool`](../interfaces/Mempool.md)

##### messageStorage

[`MessageStorage`](../interfaces/MessageStorage.md)

##### unprovenStateService

[`AsyncStateService`](../interfaces/AsyncStateService.md)

##### unprovenMerkleStore

[`AsyncMerkleTreeStore`](../interfaces/AsyncMerkleTreeStore.md)

##### blockQueue

[`BlockQueue`](../interfaces/BlockQueue.md)

##### blockTreeStore

[`AsyncMerkleTreeStore`](../interfaces/AsyncMerkleTreeStore.md)

##### productionService

`BlockProductionService`

##### resultService

`BlockResultService`

##### methodIdResolver

[`MethodIdResolver`](../../module/classes/MethodIdResolver.md)

##### runtime

[`Runtime`](../../module/classes/Runtime.md)\<[`RuntimeModulesRecord`](../../module/type-aliases/RuntimeModulesRecord.md)\>

##### database

[`Database`](../interfaces/Database.md)

#### Returns

[`BlockProducerModule`](BlockProducerModule.md)

#### Overrides

[`SequencerModule`](SequencerModule.md).[`constructor`](SequencerModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`BlockConfig`](../interfaces/BlockConfig.md)

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

### blockResultCompleteCheck()

> **blockResultCompleteCheck**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/protocol/production/sequencing/BlockProducerModule.ts:236](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/sequencing/BlockProducerModule.ts#L236)

#### Returns

`Promise`\<`void`\>

***

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

### generateMetadata()

> **generateMetadata**(`block`): `Promise`\<[`BlockResult`](../interfaces/BlockResult.md)\>

Defined in: [packages/sequencer/src/protocol/production/sequencing/BlockProducerModule.ts:110](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/sequencing/BlockProducerModule.ts#L110)

#### Parameters

##### block

[`Block`](../interfaces/Block.md)

#### Returns

`Promise`\<[`BlockResult`](../interfaces/BlockResult.md)\>

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/protocol/production/sequencing/BlockProducerModule.ts:251](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/sequencing/BlockProducerModule.ts#L251)

Start the module and all it's functionality.
The returned Promise has to resolve after initialization,
since it will block in the sequencer init.
That means that you mustn't await server.start() for example.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`SequencerModule`](SequencerModule.md).[`start`](SequencerModule.md#start)

***

### tryProduceBlock()

> **tryProduceBlock**(): `Promise`\<`undefined` \| [`Block`](../interfaces/Block.md)\>

Defined in: [packages/sequencer/src/protocol/production/sequencing/BlockProducerModule.ts:128](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/sequencing/BlockProducerModule.ts#L128)

#### Returns

`Promise`\<`undefined` \| [`Block`](../interfaces/Block.md)\>
