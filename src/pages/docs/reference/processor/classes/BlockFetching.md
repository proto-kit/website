---
title: BlockFetching
---

[**@proto-kit/processor**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/processor](../README.md) / BlockFetching

# Class: BlockFetching

Defined in: [packages/processor/src/indexer/BlockFetching.ts:36](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/processor/src/indexer/BlockFetching.ts#L36)

Used by various module sub-types that may need to be configured

## Extends

- [`ProcessorModule`](ProcessorModule.md)\<[`BlockFetchingConfig`](../interfaces/BlockFetchingConfig.md)\>

## Constructors

### new BlockFetching()

> **new BlockFetching**(`blockMapper`, `blockResultMapper`, `transactionResultMapper`): [`BlockFetching`](BlockFetching.md)

Defined in: [packages/processor/src/indexer/BlockFetching.ts:37](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/processor/src/indexer/BlockFetching.ts#L37)

#### Parameters

##### blockMapper

[`BlockMapper`](../../persistance/classes/BlockMapper.md)

##### blockResultMapper

[`BlockResultMapper`](../../persistance/classes/BlockResultMapper.md)

##### transactionResultMapper

[`TransactionExecutionResultMapper`](../../persistance/classes/TransactionExecutionResultMapper.md)

#### Returns

[`BlockFetching`](BlockFetching.md)

#### Overrides

[`ProcessorModule`](ProcessorModule.md).[`constructor`](ProcessorModule.md#constructors)

## Properties

### blockMapper

> **blockMapper**: [`BlockMapper`](../../persistance/classes/BlockMapper.md)

Defined in: [packages/processor/src/indexer/BlockFetching.ts:38](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/processor/src/indexer/BlockFetching.ts#L38)

***

### blockResultMapper

> **blockResultMapper**: [`BlockResultMapper`](../../persistance/classes/BlockResultMapper.md)

Defined in: [packages/processor/src/indexer/BlockFetching.ts:39](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/processor/src/indexer/BlockFetching.ts#L39)

***

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`BlockFetchingConfig`](../interfaces/BlockFetchingConfig.md)

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`ProcessorModule`](ProcessorModule.md).[`currentConfig`](ProcessorModule.md#currentconfig)

***

### transactionResultMapper

> **transactionResultMapper**: [`TransactionExecutionResultMapper`](../../persistance/classes/TransactionExecutionResultMapper.md)

Defined in: [packages/processor/src/indexer/BlockFetching.ts:40](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/processor/src/indexer/BlockFetching.ts#L40)

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

[`ProcessorModule`](ProcessorModule.md).[`config`](ProcessorModule.md#config)

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

[`ProcessorModule`](ProcessorModule.md).[`create`](ProcessorModule.md#create)

***

### fetchBlock()

> **fetchBlock**(`height`): `Promise`\<`undefined` \| [`BlockWithResult`](../../sequencer/interfaces/BlockWithResult.md)\>

Defined in: [packages/processor/src/indexer/BlockFetching.ts:45](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/processor/src/indexer/BlockFetching.ts#L45)

#### Parameters

##### height

`number`

#### Returns

`Promise`\<`undefined` \| [`BlockWithResult`](../../sequencer/interfaces/BlockWithResult.md)\>

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/processor/src/indexer/BlockFetching.ts:146](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/processor/src/indexer/BlockFetching.ts#L146)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`ProcessorModule`](ProcessorModule.md).[`start`](ProcessorModule.md#start)
