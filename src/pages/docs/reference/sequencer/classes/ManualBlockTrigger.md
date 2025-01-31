---
title: ManualBlockTrigger
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / ManualBlockTrigger

# Class: ManualBlockTrigger

Defined in: [packages/sequencer/src/protocol/production/trigger/ManualBlockTrigger.ts:17](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/production/trigger/ManualBlockTrigger.ts#L17)

A BlockTrigger is the primary method to start the production of a block and
all associated processes.

## Extends

- [`BlockTriggerBase`](BlockTriggerBase.md)

## Implements

- [`BlockTrigger`](../interfaces/BlockTrigger.md)

## Constructors

### new ManualBlockTrigger()

> **new ManualBlockTrigger**(`batchProducerModule`, `blockProducerModule`, `settlementModule`, `blockQueue`, `batchStorage`, `settlementStorage`): [`ManualBlockTrigger`](ManualBlockTrigger.md)

Defined in: [packages/sequencer/src/protocol/production/trigger/ManualBlockTrigger.ts:21](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/production/trigger/ManualBlockTrigger.ts#L21)

#### Parameters

##### batchProducerModule

[`BatchProducerModule`](BatchProducerModule.md)

##### blockProducerModule

[`BlockProducerModule`](BlockProducerModule.md)

##### settlementModule

`undefined` | [`SettlementModule`](SettlementModule.md)

##### blockQueue

[`BlockQueue`](../interfaces/BlockQueue.md)

##### batchStorage

[`BatchStorage`](../interfaces/BatchStorage.md)

##### settlementStorage

`undefined` | [`SettlementStorage`](../interfaces/SettlementStorage.md)

#### Returns

[`ManualBlockTrigger`](ManualBlockTrigger.md)

#### Overrides

[`BlockTriggerBase`](BlockTriggerBase.md).[`constructor`](BlockTriggerBase.md#constructors)

## Properties

### batchProducerModule

> `protected` `readonly` **batchProducerModule**: `undefined` \| [`BatchProducerModule`](BatchProducerModule.md)

Defined in: [packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts:46](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts#L46)

#### Inherited from

[`BlockTriggerBase`](BlockTriggerBase.md).[`batchProducerModule`](BlockTriggerBase.md#batchproducermodule-1)

***

### batchQueue

> `protected` `readonly` **batchQueue**: [`BatchStorage`](../interfaces/BatchStorage.md)

Defined in: [packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts:49](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts#L49)

#### Inherited from

[`BlockTriggerBase`](BlockTriggerBase.md).[`batchQueue`](BlockTriggerBase.md#batchqueue-1)

***

### blockProducerModule

> `protected` `readonly` **blockProducerModule**: [`BlockProducerModule`](BlockProducerModule.md)

Defined in: [packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts:45](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts#L45)

#### Inherited from

[`BlockTriggerBase`](BlockTriggerBase.md).[`blockProducerModule`](BlockTriggerBase.md#blockproducermodule-1)

***

### blockQueue

> `protected` `readonly` **blockQueue**: [`BlockQueue`](../interfaces/BlockQueue.md)

Defined in: [packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts:48](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts#L48)

#### Inherited from

[`BlockTriggerBase`](BlockTriggerBase.md).[`blockQueue`](BlockTriggerBase.md#blockqueue-1)

***

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`NoConfig`](../../common/type-aliases/NoConfig.md)

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`BlockTriggerBase`](BlockTriggerBase.md).[`currentConfig`](BlockTriggerBase.md#currentconfig)

***

### events

> `readonly` **events**: [`EventEmitter`](../../common/classes/EventEmitter.md)\<[`BlockEvents`](../type-aliases/BlockEvents.md)\>

Defined in: [packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts:42](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts#L42)

#### Inherited from

[`BlockTriggerBase`](BlockTriggerBase.md).[`events`](BlockTriggerBase.md#events)

***

### settlementModule

> `protected` `readonly` **settlementModule**: `undefined` \| [`SettlementModule`](SettlementModule.md)

Defined in: [packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts:47](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts#L47)

#### Inherited from

[`BlockTriggerBase`](BlockTriggerBase.md).[`settlementModule`](BlockTriggerBase.md#settlementmodule-1)

***

### settlementStorage

> `protected` `readonly` **settlementStorage**: `undefined` \| [`SettlementStorage`](../interfaces/SettlementStorage.md)

Defined in: [packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts:50](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts#L50)

#### Inherited from

[`BlockTriggerBase`](BlockTriggerBase.md).[`settlementStorage`](BlockTriggerBase.md#settlementstorage-1)

***

### presets

> `static` **presets**: [`Presets`](../../common/type-aliases/Presets.md)\<`unknown`\> = `{}`

Defined in: [packages/sequencer/src/sequencer/builder/SequencerModule.ts:18](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/sequencer/builder/SequencerModule.ts#L18)

#### Inherited from

[`BlockTriggerBase`](BlockTriggerBase.md).[`presets`](BlockTriggerBase.md#presets)

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

[`BlockTriggerBase`](BlockTriggerBase.md).[`config`](BlockTriggerBase.md#config)

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

[`BlockTriggerBase`](BlockTriggerBase.md).[`create`](BlockTriggerBase.md#create)

***

### produceBatch()

> **produceBatch**(): `Promise`\<`undefined` \| [`SettleableBatch`](../interfaces/SettleableBatch.md)\>

Defined in: [packages/sequencer/src/protocol/production/trigger/ManualBlockTrigger.ts:57](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/production/trigger/ManualBlockTrigger.ts#L57)

#### Returns

`Promise`\<`undefined` \| [`SettleableBatch`](../interfaces/SettleableBatch.md)\>

#### Overrides

[`BlockTriggerBase`](BlockTriggerBase.md).[`produceBatch`](BlockTriggerBase.md#producebatch)

***

### produceBlock()

> **produceBlock**(): `Promise`\<`undefined` \| [`Block`](../interfaces/Block.md)\>

Defined in: [packages/sequencer/src/protocol/production/trigger/ManualBlockTrigger.ts:65](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/production/trigger/ManualBlockTrigger.ts#L65)

#### Returns

`Promise`\<`undefined` \| [`Block`](../interfaces/Block.md)\>

#### Overrides

[`BlockTriggerBase`](BlockTriggerBase.md).[`produceBlock`](BlockTriggerBase.md#produceblock)

***

### produceBlockAndBatch()

> **produceBlockAndBatch**(): `Promise`\<\[`undefined` \| [`Block`](../interfaces/Block.md), `undefined` \| [`SettleableBatch`](../interfaces/SettleableBatch.md)\]\>

Defined in: [packages/sequencer/src/protocol/production/trigger/ManualBlockTrigger.ts:50](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/production/trigger/ManualBlockTrigger.ts#L50)

Produces both an unproven block and immediately produce a
settlement block proof

#### Returns

`Promise`\<\[`undefined` \| [`Block`](../interfaces/Block.md), `undefined` \| [`SettleableBatch`](../interfaces/SettleableBatch.md)\]\>

***

### produceBlockWithResult()

> **produceBlockWithResult**(): `Promise`\<`undefined` \| [`BlockWithResult`](../interfaces/BlockWithResult.md)\>

Defined in: [packages/sequencer/src/protocol/production/trigger/ManualBlockTrigger.ts:69](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/production/trigger/ManualBlockTrigger.ts#L69)

#### Returns

`Promise`\<`undefined` \| [`BlockWithResult`](../interfaces/BlockWithResult.md)\>

#### Overrides

[`BlockTriggerBase`](BlockTriggerBase.md).[`produceBlockWithResult`](BlockTriggerBase.md#produceblockwithresult)

***

### settle()

> **settle**(`batch`): `Promise`\<`undefined` \| [`Settlement`](../interfaces/Settlement.md)\>

Defined in: [packages/sequencer/src/protocol/production/trigger/ManualBlockTrigger.ts:61](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/production/trigger/ManualBlockTrigger.ts#L61)

#### Parameters

##### batch

[`SettleableBatch`](../interfaces/SettleableBatch.md)

#### Returns

`Promise`\<`undefined` \| [`Settlement`](../interfaces/Settlement.md)\>

#### Overrides

[`BlockTriggerBase`](BlockTriggerBase.md).[`settle`](BlockTriggerBase.md#settle)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts:112](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/production/trigger/BlockTrigger.ts#L112)

Start the module and all it's functionality.
The returned Promise has to resolve after initialization,
since it will block in the sequencer init.
That means that you mustn't await server.start() for example.

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`BlockTriggerBase`](BlockTriggerBase.md).[`start`](BlockTriggerBase.md#start)
