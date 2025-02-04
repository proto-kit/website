---
title: AdvancedNodeStatusResolver
---

[**@proto-kit/api**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/api](../README.md) / AdvancedNodeStatusResolver

# Class: AdvancedNodeStatusResolver

Defined in: [api/src/graphql/modules/AdvancedNodeStatusResolver.ts:74](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/modules/AdvancedNodeStatusResolver.ts#L74)

Used by various module sub-types that may need to be configured

## Extends

- [`GraphqlModule`](GraphqlModule.md)

## Constructors

### new AdvancedNodeStatusResolver()

> **new AdvancedNodeStatusResolver**(`nodeStatusService`): [`AdvancedNodeStatusResolver`](AdvancedNodeStatusResolver.md)

Defined in: [api/src/graphql/modules/AdvancedNodeStatusResolver.ts:75](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/modules/AdvancedNodeStatusResolver.ts#L75)

#### Parameters

##### nodeStatusService

[`NodeStatusService`](NodeStatusService.md)

#### Returns

[`AdvancedNodeStatusResolver`](AdvancedNodeStatusResolver.md)

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

### node()

> **node**(): `Promise`\<[`NodeStatusObject`](NodeStatusObject.md)\>

Defined in: [api/src/graphql/modules/AdvancedNodeStatusResolver.ts:83](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/modules/AdvancedNodeStatusResolver.ts#L83)

#### Returns

`Promise`\<[`NodeStatusObject`](NodeStatusObject.md)\>
