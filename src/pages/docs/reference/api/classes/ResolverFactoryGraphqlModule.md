---
title: ResolverFactoryGraphqlModule
---

[**@proto-kit/api**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/api](../README.md) / ResolverFactoryGraphqlModule

# Class: `abstract` ResolverFactoryGraphqlModule\<Config\>

Defined in: [api/src/graphql/GraphqlModule.ts:30](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/api/src/graphql/GraphqlModule.ts#L30)

Used by various module sub-types that may need to be configured

## Extends

- [`GraphqlModule`](GraphqlModule.md)\<`Config`\>

## Extended by

- [`GeneratedResolverFactoryGraphqlModule`](../../indexer/classes/GeneratedResolverFactoryGraphqlModule.md)
- [`ResolverFactoryGraphqlModule`](../../processor/classes/ResolverFactoryGraphqlModule.md)

## Type Parameters

• **Config** = [`NoConfig`](../../common/type-aliases/NoConfig.md)

## Constructors

### new ResolverFactoryGraphqlModule()

> **new ResolverFactoryGraphqlModule**\<`Config`\>(): [`ResolverFactoryGraphqlModule`](ResolverFactoryGraphqlModule.md)\<`Config`\>

Defined in: [api/src/graphql/GraphqlModule.ts:11](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/api/src/graphql/GraphqlModule.ts#L11)

#### Returns

[`ResolverFactoryGraphqlModule`](ResolverFactoryGraphqlModule.md)\<`Config`\>

#### Inherited from

[`GraphqlModule`](GraphqlModule.md).[`constructor`](GraphqlModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| `Config`

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

***

### resolvers()

> `abstract` **resolvers**(): `Promise`\<`NonEmptyArray`\<`Function`\>\>

Defined in: [api/src/graphql/GraphqlModule.ts:33](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/api/src/graphql/GraphqlModule.ts#L33)

#### Returns

`Promise`\<`NonEmptyArray`\<`Function`\>\>
