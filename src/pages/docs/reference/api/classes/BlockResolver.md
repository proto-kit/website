---
title: BlockResolver
---

[**@proto-kit/api**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/api](../README.md) / BlockResolver

# Class: BlockResolver

Defined in: [api/src/graphql/modules/BlockResolver.ts:62](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/modules/BlockResolver.ts#L62)

Used by various module sub-types that may need to be configured

## Extends

- [`GraphqlModule`](GraphqlModule.md)\<`object`\>

## Constructors

### new BlockResolver()

> **new BlockResolver**(`blockStorage`): [`BlockResolver`](BlockResolver.md)

Defined in: [api/src/graphql/modules/BlockResolver.ts:63](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/modules/BlockResolver.ts#L63)

#### Parameters

##### blockStorage

[`HistoricalBlockStorage`](../../sequencer/interfaces/HistoricalBlockStorage.md) & [`BlockStorage`](../../sequencer/interfaces/BlockStorage.md)

#### Returns

[`BlockResolver`](BlockResolver.md)

#### Overrides

[`GraphqlModule`](GraphqlModule.md).[`constructor`](GraphqlModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| `object`

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

### block()

> **block**(`height`, `hash`): `Promise`\<`undefined` \| [`BlockModel`](BlockModel.md)\>

Defined in: [api/src/graphql/modules/BlockResolver.ts:75](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/modules/BlockResolver.ts#L75)

#### Parameters

##### height

`undefined` | `number`

##### hash

`undefined` | `string`

#### Returns

`Promise`\<`undefined` \| [`BlockModel`](BlockModel.md)\>

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
