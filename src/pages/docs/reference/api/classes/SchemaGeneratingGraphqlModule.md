---
title: SchemaGeneratingGraphqlModule
---

[**@proto-kit/api**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/api](../README.md) / SchemaGeneratingGraphqlModule

# Class: `abstract` SchemaGeneratingGraphqlModule\<Config\>

Defined in: [api/src/graphql/GraphqlModule.ts:24](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/api/src/graphql/GraphqlModule.ts#L24)

Used by various module sub-types that may need to be configured

## Extends

- [`GraphqlModule`](GraphqlModule.md)\<`Config`\>

## Extended by

- [`QueryGraphqlModule`](QueryGraphqlModule.md)

## Type Parameters

• **Config** = [`NoConfig`](../../common/type-aliases/NoConfig.md)

## Constructors

### new SchemaGeneratingGraphqlModule()

> **new SchemaGeneratingGraphqlModule**\<`Config`\>(): [`SchemaGeneratingGraphqlModule`](SchemaGeneratingGraphqlModule.md)\<`Config`\>

Defined in: [api/src/graphql/GraphqlModule.ts:11](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/api/src/graphql/GraphqlModule.ts#L11)

#### Returns

[`SchemaGeneratingGraphqlModule`](SchemaGeneratingGraphqlModule.md)\<`Config`\>

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

### generateSchema()

> `abstract` **generateSchema**(): `GraphQLSchema`

Defined in: [api/src/graphql/GraphqlModule.ts:27](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/api/src/graphql/GraphqlModule.ts#L27)

#### Returns

`GraphQLSchema`
