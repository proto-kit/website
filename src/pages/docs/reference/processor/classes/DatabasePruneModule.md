---
title: DatabasePruneModule
---

[**@proto-kit/processor**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/processor](../README.md) / DatabasePruneModule

# Class: DatabasePruneModule

Defined in: [packages/processor/src/storage/DatabasePruneModule.ts:14](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/processor/src/storage/DatabasePruneModule.ts#L14)

Used by various module sub-types that may need to be configured

## Extends

- [`ProcessorModule`](ProcessorModule.md)\<[`DatabasePruneModuleConfig`](../interfaces/DatabasePruneModuleConfig.md)\>

## Constructors

### new DatabasePruneModule()

> **new DatabasePruneModule**(`database`): [`DatabasePruneModule`](DatabasePruneModule.md)

Defined in: [packages/processor/src/storage/DatabasePruneModule.ts:15](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/processor/src/storage/DatabasePruneModule.ts#L15)

#### Parameters

##### database

[`Database`](Database.md)\<`BasePrismaClient`\>

#### Returns

[`DatabasePruneModule`](DatabasePruneModule.md)

#### Overrides

[`ProcessorModule`](ProcessorModule.md).[`constructor`](ProcessorModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`DatabasePruneModuleConfig`](../interfaces/DatabasePruneModuleConfig.md)

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`ProcessorModule`](ProcessorModule.md).[`currentConfig`](ProcessorModule.md#currentconfig)

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

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/processor/src/storage/DatabasePruneModule.ts:21](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/processor/src/storage/DatabasePruneModule.ts#L21)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`ProcessorModule`](ProcessorModule.md).[`start`](ProcessorModule.md#start)
