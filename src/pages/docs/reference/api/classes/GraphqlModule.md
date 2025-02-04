---
title: GraphqlModule
---

[**@proto-kit/api**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/api](../README.md) / GraphqlModule

# Class: `abstract` GraphqlModule\<Config\>

Defined in: [api/src/graphql/GraphqlModule.ts:8](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/GraphqlModule.ts#L8)

Used by various module sub-types that may need to be configured

## Extends

- [`ConfigurableModule`](../../common/classes/ConfigurableModule.md)\<`Config`\>

## Extended by

- [`MempoolResolver`](MempoolResolver.md)
- [`BatchStorageResolver`](BatchStorageResolver.md)
- [`BlockResolver`](BlockResolver.md)
- [`SchemaGeneratingGraphqlModule`](SchemaGeneratingGraphqlModule.md)
- [`ResolverFactoryGraphqlModule`](ResolverFactoryGraphqlModule.md)
- [`NodeStatusResolver`](NodeStatusResolver.md)
- [`AdvancedNodeStatusResolver`](AdvancedNodeStatusResolver.md)
- [`MerkleWitnessResolver`](MerkleWitnessResolver.md)

## Type Parameters

• **Config** = [`NoConfig`](../../common/type-aliases/NoConfig.md)

## Constructors

### new GraphqlModule()

> **new GraphqlModule**\<`Config`\>(): [`GraphqlModule`](GraphqlModule.md)\<`Config`\>

Defined in: [api/src/graphql/GraphqlModule.ts:11](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/GraphqlModule.ts#L11)

#### Returns

[`GraphqlModule`](GraphqlModule.md)\<`Config`\>

#### Overrides

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md).[`constructor`](../../common/classes/ConfigurableModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| `Config`

Defined in: common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md).[`currentConfig`](../../common/classes/ConfigurableModule.md#currentconfig)

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

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md).[`config`](../../common/classes/ConfigurableModule.md#config)

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

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md).[`create`](../../common/classes/ConfigurableModule.md#create)
