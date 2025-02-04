---
title: ResolverFactoryGraphqlModule
---

[**@proto-kit/processor**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/processor](../README.md) / ResolverFactoryGraphqlModule

# Class: ResolverFactoryGraphqlModule\<PrismaClient\>

Defined in: [packages/processor/src/api/ResolverFactoryGraphqlModule.ts:49](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/processor/src/api/ResolverFactoryGraphqlModule.ts#L49)

Used by various module sub-types that may need to be configured

## Extends

- [`ResolverFactoryGraphqlModule`](../../api/classes/ResolverFactoryGraphqlModule.md)

## Type Parameters

• **PrismaClient** *extends* `BasePrismaClient`

## Constructors

### new ResolverFactoryGraphqlModule()

> **new ResolverFactoryGraphqlModule**\<`PrismaClient`\>(`graphqlServer`): [`ResolverFactoryGraphqlModule`](ResolverFactoryGraphqlModule.md)\<`PrismaClient`\>

Defined in: [packages/processor/src/api/ResolverFactoryGraphqlModule.ts:64](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/processor/src/api/ResolverFactoryGraphqlModule.ts#L64)

#### Parameters

##### graphqlServer

[`GraphqlServer`](../../api/classes/GraphqlServer.md)

#### Returns

[`ResolverFactoryGraphqlModule`](ResolverFactoryGraphqlModule.md)\<`PrismaClient`\>

#### Overrides

[`ResolverFactoryGraphqlModule`](../../api/classes/ResolverFactoryGraphqlModule.md).[`constructor`](../../api/classes/ResolverFactoryGraphqlModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`NoConfig`](../../common/type-aliases/NoConfig.md)

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`ResolverFactoryGraphqlModule`](../../api/classes/ResolverFactoryGraphqlModule.md).[`currentConfig`](../../api/classes/ResolverFactoryGraphqlModule.md#currentconfig)

***

### database

> **database**: `undefined` \| `PrismaDatabaseConnection`\<`PrismaClient`\>

Defined in: [packages/processor/src/api/ResolverFactoryGraphqlModule.ts:62](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/processor/src/api/ResolverFactoryGraphqlModule.ts#L62)

***

### graphqlServer

> **graphqlServer**: [`GraphqlServer`](../../api/classes/GraphqlServer.md)

Defined in: [packages/processor/src/api/ResolverFactoryGraphqlModule.ts:64](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/processor/src/api/ResolverFactoryGraphqlModule.ts#L64)

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

[`ResolverFactoryGraphqlModule`](../../api/classes/ResolverFactoryGraphqlModule.md).[`config`](../../api/classes/ResolverFactoryGraphqlModule.md#config)

## Methods

### create()

> **create**(`childContainerProvider`): `void`

Defined in: [packages/processor/src/api/ResolverFactoryGraphqlModule.ts:68](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/processor/src/api/ResolverFactoryGraphqlModule.ts#L68)

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../../common/interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Overrides

[`ResolverFactoryGraphqlModule`](../../api/classes/ResolverFactoryGraphqlModule.md).[`create`](../../api/classes/ResolverFactoryGraphqlModule.md#create)

***

### resolvers()

> **resolvers**(): `Promise`\<`NonEmptyArray`\<`Function`\>\>

Defined in: [packages/processor/src/api/ResolverFactoryGraphqlModule.ts:77](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/processor/src/api/ResolverFactoryGraphqlModule.ts#L77)

#### Returns

`Promise`\<`NonEmptyArray`\<`Function`\>\>

#### Overrides

[`ResolverFactoryGraphqlModule`](../../api/classes/ResolverFactoryGraphqlModule.md).[`resolvers`](../../api/classes/ResolverFactoryGraphqlModule.md#resolvers)

***

### from()

> `static` **from**\<`PrismaClient`\>(`resolvers`): [`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`ResolverFactoryGraphqlModule`](ResolverFactoryGraphqlModule.md)\<`PrismaClient`\>\>

Defined in: [packages/processor/src/api/ResolverFactoryGraphqlModule.ts:52](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/processor/src/api/ResolverFactoryGraphqlModule.ts#L52)

#### Type Parameters

• **PrismaClient** *extends* `BasePrismaClient`

#### Parameters

##### resolvers

`NonEmptyArray`\<`Function`\>

#### Returns

[`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`ResolverFactoryGraphqlModule`](ResolverFactoryGraphqlModule.md)\<`PrismaClient`\>\>
