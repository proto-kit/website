---
title: NodeStatusResolver
---

[**@proto-kit/api**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/api](../README.md) / NodeStatusResolver

# Class: NodeStatusResolver

Defined in: [api/src/graphql/modules/NodeStatusResolver.ts:28](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/modules/NodeStatusResolver.ts#L28)

Used by various module sub-types that may need to be configured

## Extends

- [`GraphqlModule`](GraphqlModule.md)

## Constructors

### new NodeStatusResolver()

> **new NodeStatusResolver**(`nodeStatusService`): [`NodeStatusResolver`](NodeStatusResolver.md)

Defined in: [api/src/graphql/modules/NodeStatusResolver.ts:29](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/modules/NodeStatusResolver.ts#L29)

#### Parameters

##### nodeStatusService

[`NodeStatusService`](NodeStatusService.md)

#### Returns

[`NodeStatusResolver`](NodeStatusResolver.md)

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

> **node**(): `Promise`\<[`NodeInformationObject`](NodeInformationObject.md)\>

Defined in: [api/src/graphql/modules/NodeStatusResolver.ts:36](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/modules/NodeStatusResolver.ts#L36)

#### Returns

`Promise`\<[`NodeInformationObject`](NodeInformationObject.md)\>
