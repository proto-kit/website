---
title: GeneratedResolverFactoryGraphqlModule
---

[**@proto-kit/indexer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/indexer](../README.md) / GeneratedResolverFactoryGraphqlModule

# Class: GeneratedResolverFactoryGraphqlModule

Defined in: [indexer/src/api/GeneratedResolverFactoryGraphqlModule.ts:83](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/indexer/src/api/GeneratedResolverFactoryGraphqlModule.ts#L83)

Used by various module sub-types that may need to be configured

## Extends

- [`ResolverFactoryGraphqlModule`](../../api/classes/ResolverFactoryGraphqlModule.md)

## Constructors

### new GeneratedResolverFactoryGraphqlModule()

> **new GeneratedResolverFactoryGraphqlModule**(`graphqlServer`): [`GeneratedResolverFactoryGraphqlModule`](GeneratedResolverFactoryGraphqlModule.md)

Defined in: [indexer/src/api/GeneratedResolverFactoryGraphqlModule.ts:84](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/indexer/src/api/GeneratedResolverFactoryGraphqlModule.ts#L84)

#### Parameters

##### graphqlServer

[`GraphqlServer`](../../api/classes/GraphqlServer.md)

#### Returns

[`GeneratedResolverFactoryGraphqlModule`](GeneratedResolverFactoryGraphqlModule.md)

#### Overrides

[`ResolverFactoryGraphqlModule`](../../api/classes/ResolverFactoryGraphqlModule.md).[`constructor`](../../api/classes/ResolverFactoryGraphqlModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`NoConfig`](../../common/type-aliases/NoConfig.md)

Defined in: common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`ResolverFactoryGraphqlModule`](../../api/classes/ResolverFactoryGraphqlModule.md).[`currentConfig`](../../api/classes/ResolverFactoryGraphqlModule.md#currentconfig)

***

### graphqlServer

> **graphqlServer**: [`GraphqlServer`](../../api/classes/GraphqlServer.md)

Defined in: [indexer/src/api/GeneratedResolverFactoryGraphqlModule.ts:85](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/indexer/src/api/GeneratedResolverFactoryGraphqlModule.ts#L85)

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

[`ResolverFactoryGraphqlModule`](../../api/classes/ResolverFactoryGraphqlModule.md).[`config`](../../api/classes/ResolverFactoryGraphqlModule.md#config)

## Methods

### create()

> **create**(`childContainerProvider`): `void`

Defined in: common/dist/config/ConfigurableModule.d.ts:20

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../../common/interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Inherited from

[`ResolverFactoryGraphqlModule`](../../api/classes/ResolverFactoryGraphqlModule.md).[`create`](../../api/classes/ResolverFactoryGraphqlModule.md#create)

***

### initializePrismaClient()

> **initializePrismaClient**(): `Promise`\<`PrismaClient`\<`never`\>\>

Defined in: [indexer/src/api/GeneratedResolverFactoryGraphqlModule.ts:90](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/indexer/src/api/GeneratedResolverFactoryGraphqlModule.ts#L90)

#### Returns

`Promise`\<`PrismaClient`\<`never`\>\>

***

### resolvers()

> **resolvers**(): `Promise`\<`NonEmptyArray`\<`Function`\>\>

Defined in: [indexer/src/api/GeneratedResolverFactoryGraphqlModule.ts:101](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/indexer/src/api/GeneratedResolverFactoryGraphqlModule.ts#L101)

#### Returns

`Promise`\<`NonEmptyArray`\<`Function`\>\>

#### Overrides

[`ResolverFactoryGraphqlModule`](../../api/classes/ResolverFactoryGraphqlModule.md).[`resolvers`](../../api/classes/ResolverFactoryGraphqlModule.md#resolvers)
