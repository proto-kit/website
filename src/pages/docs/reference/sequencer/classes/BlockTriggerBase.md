---
title: BlockTriggerBase
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / BlockTriggerBase

# Class: BlockTriggerBase\<Config, Events\>

Defined in: [packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts:35](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts#L35)

A BlockTrigger is the primary method to start the production of a block and
all associated processes.

## Extends

- [`SequencerModule`](SequencerModule.md)\<`Config`\>

## Extended by

- [`ManualBlockTrigger`](ManualBlockTrigger.md)
- [`TimedBlockTrigger`](TimedBlockTrigger.md)

## Type Parameters

• **Config** = [`NoConfig`](../../common/type-aliases/NoConfig.md)

• **Events** *extends* [`BlockEvents`](../type-aliases/BlockEvents.md) = [`BlockEvents`](../type-aliases/BlockEvents.md)

## Implements

- [`BlockTrigger`](../interfaces/BlockTrigger.md)
- [`EventEmittingComponent`](../../common/interfaces/EventEmittingComponent.md)\<`Events`\>

## Constructors

### new BlockTriggerBase()

> **new BlockTriggerBase**\<`Config`, `Events`\>(`blockProducerModule`, `batchProducerModule`, `settlementModule`, `blockQueue`, `batchQueue`, `settlementStorage`): [`BlockTriggerBase`](BlockTriggerBase.md)\<`Config`, `Events`\>

Defined in: [packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts:44](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts#L44)

#### Parameters

##### blockProducerModule

[`BlockProducerModule`](BlockProducerModule.md)

##### batchProducerModule

`undefined` | [`BatchProducerModule`](BatchProducerModule.md)

##### settlementModule

`undefined` | [`SettlementModule`](SettlementModule.md)

##### blockQueue

[`BlockQueue`](../interfaces/BlockQueue.md)

##### batchQueue

[`BatchStorage`](../interfaces/BatchStorage.md)

##### settlementStorage

`undefined` | [`SettlementStorage`](../interfaces/SettlementStorage.md)

#### Returns

[`BlockTriggerBase`](BlockTriggerBase.md)\<`Config`, `Events`\>

#### Overrides

[`SequencerModule`](SequencerModule.md).[`constructor`](SequencerModule.md#constructors)

## Properties

### batchProducerModule

> `protected` `readonly` **batchProducerModule**: `undefined` \| [`BatchProducerModule`](BatchProducerModule.md)

Defined in: [packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts:46](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts#L46)

***

### batchQueue

> `protected` `readonly` **batchQueue**: [`BatchStorage`](../interfaces/BatchStorage.md)

Defined in: [packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts:49](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts#L49)

***

### blockProducerModule

> `protected` `readonly` **blockProducerModule**: [`BlockProducerModule`](BlockProducerModule.md)

Defined in: [packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts:45](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts#L45)

***

### blockQueue

> `protected` `readonly` **blockQueue**: [`BlockQueue`](../interfaces/BlockQueue.md)

Defined in: [packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts:48](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts#L48)

***

### currentConfig

> `protected` **currentConfig**: `undefined` \| `Config`

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`SequencerModule`](SequencerModule.md).[`currentConfig`](SequencerModule.md#currentconfig)

***

### events

> `readonly` **events**: [`EventEmitter`](../../common/classes/EventEmitter.md)\<`Events`\>

Defined in: [packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts:42](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts#L42)

#### Implementation of

[`EventEmittingComponent`](../../common/interfaces/EventEmittingComponent.md).[`events`](../../common/interfaces/EventEmittingComponent.md#events)

***

### settlementModule

> `protected` `readonly` **settlementModule**: `undefined` \| [`SettlementModule`](SettlementModule.md)

Defined in: [packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts:47](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts#L47)

***

### settlementStorage

> `protected` `readonly` **settlementStorage**: `undefined` \| [`SettlementStorage`](../interfaces/SettlementStorage.md)

Defined in: [packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts:50](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts#L50)

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

### produceBatch()

> `protected` **produceBatch**(): `Promise`\<`undefined` \| [`SettleableBatch`](../interfaces/SettleableBatch.md)\>

Defined in: [packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts:55](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts#L55)

#### Returns

`Promise`\<`undefined` \| [`SettleableBatch`](../interfaces/SettleableBatch.md)\>

***

### produceBlock()

> `protected` **produceBlock**(): `Promise`\<`undefined` \| [`Block`](../interfaces/Block.md)\>

Defined in: [packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts:89](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts#L89)

#### Returns

`Promise`\<`undefined` \| [`Block`](../interfaces/Block.md)\>

***

### produceBlockWithResult()

> `protected` **produceBlockWithResult**(): `Promise`\<`undefined` \| [`BlockWithResult`](../interfaces/BlockWithResult.md)\>

Defined in: [packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts:68](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts#L68)

#### Returns

`Promise`\<`undefined` \| [`BlockWithResult`](../interfaces/BlockWithResult.md)\>

***

### settle()

> `protected` **settle**(`batch`): `Promise`\<`undefined` \| [`Settlement`](../interfaces/Settlement.md)\>

Defined in: [packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts:95](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts#L95)

#### Parameters

##### batch

[`SettleableBatch`](../interfaces/SettleableBatch.md)

#### Returns

`Promise`\<`undefined` \| [`Settlement`](../interfaces/Settlement.md)\>

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts:112](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts#L112)

Start the module and all it's functionality.
The returned Promise has to resolve after initialization,
since it will block in the sequencer init.
That means that you mustn't await server.start() for example.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`SequencerModule`](SequencerModule.md).[`start`](SequencerModule.md#start)
