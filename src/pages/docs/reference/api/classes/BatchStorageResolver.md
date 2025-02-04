---
title: BatchStorageResolver
---

[**@proto-kit/api**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/api](../README.md) / BatchStorageResolver

# Class: BatchStorageResolver

Defined in: [api/src/graphql/modules/BatchStorageResolver.ts:41](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/modules/BatchStorageResolver.ts#L41)

Used by various module sub-types that may need to be configured

## Extends

- [`GraphqlModule`](GraphqlModule.md)

## Constructors

### new BatchStorageResolver()

> **new BatchStorageResolver**(`batchStorage`, `blockResolver`): [`BatchStorageResolver`](BatchStorageResolver.md)

Defined in: [api/src/graphql/modules/BatchStorageResolver.ts:43](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/modules/BatchStorageResolver.ts#L43)

#### Parameters

##### batchStorage

[`BatchStorage`](../../sequencer/interfaces/BatchStorage.md) & [`HistoricalBatchStorage`](../../sequencer/interfaces/HistoricalBatchStorage.md)

##### blockResolver

[`BlockResolver`](BlockResolver.md)

#### Returns

[`BatchStorageResolver`](BatchStorageResolver.md)

#### Overrides

[`GraphqlModule`](GraphqlModule.md).[`constructor`](GraphqlModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`NoConfig`](../../common/type-aliases/NoConfig.md)

Defined in: common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`GraphqlModule`](GraphqlModule.md).[`currentConfig`](GraphqlModule.md#currentconfig)

## Accessors

### config

#### Get Signature

> **get** **config**(): `Config`

Defined in: common/dist/config/ConfigurableModule.d.ts:18

##### Returns

`Config`

#### Set Signature

> **set** **config**(`config`): `void`

Defined in: common/dist/config/ConfigurableModule.d.ts:19

##### Parameters

###### config

`Config`

##### Returns

`void`

#### Inherited from

[`GraphqlModule`](GraphqlModule.md).[`config`](GraphqlModule.md#config)

## Methods

### batches()

> **batches**(`height`): `Promise`\<`undefined` \| [`ComputedBlockModel`](ComputedBlockModel.md)\>

Defined in: [api/src/graphql/modules/BatchStorageResolver.ts:56](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/modules/BatchStorageResolver.ts#L56)

#### Parameters

##### height

`undefined` | `number`

#### Returns

`Promise`\<`undefined` \| [`ComputedBlockModel`](ComputedBlockModel.md)\>

***

### create()

> **create**(`childContainerProvider`): `void`

Defined in: common/dist/config/ConfigurableModule.d.ts:20

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../../common/interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Inherited from

[`GraphqlModule`](GraphqlModule.md).[`create`](GraphqlModule.md#create)
