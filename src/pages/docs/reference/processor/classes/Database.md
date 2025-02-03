---
title: Database
---

[**@proto-kit/processor**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/processor](../README.md) / Database

# Class: Database\<PrismaClient\>

Defined in: [packages/processor/src/storage/Database.ts:11](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/processor/src/storage/Database.ts#L11)

This is an abstract class for creating DependencyFactories, a pattern
to bundle multiple smaller services into one and register them into the
injection context.

This can for example be a StorageDependencyFactory that creates dependencies
like StateService, MerkleWitnessService, etc. So in general, services that
are not ConfigurableModules, but still are their own logical unit.

DependencyFactories are designed to only be used statically for sets of
deps that are necessary for the sequencer to work.

## Extends

- [`ProcessorModule`](ProcessorModule.md)\<[`NoConfig`](../../common/type-aliases/NoConfig.md)\>

## Type Parameters

• **PrismaClient** *extends* `BasePrismaClient`

## Implements

- `PrismaDatabaseConnection`\<`PrismaClient`\>
- [`DependencyFactory`](../../common/interfaces/DependencyFactory.md)

## Constructors

### new Database()

> **new Database**\<`PrismaClient`\>(`prismaClient`): [`Database`](Database.md)\<`PrismaClient`\>

Defined in: [packages/processor/src/storage/Database.ts:15](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/processor/src/storage/Database.ts#L15)

#### Parameters

##### prismaClient

`PrismaClient`

#### Returns

[`Database`](Database.md)\<`PrismaClient`\>

#### Overrides

[`ProcessorModule`](ProcessorModule.md).[`constructor`](ProcessorModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`NoConfig`](../../common/type-aliases/NoConfig.md)

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`ProcessorModule`](ProcessorModule.md).[`currentConfig`](ProcessorModule.md#currentconfig)

***

### prismaClient

> **prismaClient**: `PrismaClient`

Defined in: [packages/processor/src/storage/Database.ts:15](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/processor/src/storage/Database.ts#L15)

#### Implementation of

`PrismaDatabaseConnection.prismaClient`

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

### dependencies()

> **dependencies**(): `object`

Defined in: [packages/processor/src/storage/Database.ts:29](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/processor/src/storage/Database.ts#L29)

#### Returns

`object`

##### BlockStorage

> **BlockStorage**: `object`

###### BlockStorage.useClass

> **BlockStorage.useClass**: *typeof* `BlockStorage` = `BlockStorage`

#### Implementation of

[`DependencyFactory`](../../common/interfaces/DependencyFactory.md).[`dependencies`](../../common/interfaces/DependencyFactory.md#dependencies)

***

### pruneDatabase()

> **pruneDatabase**(): `Promise`\<`void`\>

Defined in: [packages/processor/src/storage/Database.ts:37](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/processor/src/storage/Database.ts#L37)

#### Returns

`Promise`\<`void`\>

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/processor/src/storage/Database.ts:50](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/processor/src/storage/Database.ts#L50)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`ProcessorModule`](ProcessorModule.md).[`start`](ProcessorModule.md#start)

***

### from()

> `static` **from**\<`PrismaClient`\>(`prismaClient`): [`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`Database`](Database.md)\<`PrismaClient`\>\>

Defined in: [packages/processor/src/storage/Database.ts:19](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/processor/src/storage/Database.ts#L19)

#### Type Parameters

• **PrismaClient** *extends* `BasePrismaClient`

#### Parameters

##### prismaClient

`PrismaClient`

#### Returns

[`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`Database`](Database.md)\<`PrismaClient`\>\>
