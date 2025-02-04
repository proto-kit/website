---
title: NodeInformationObject
---

[**@proto-kit/api**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/api](../README.md) / NodeInformationObject

# Class: NodeInformationObject

Defined in: [api/src/graphql/modules/NodeStatusResolver.ts:10](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/modules/NodeStatusResolver.ts#L10)

## Constructors

### new NodeInformationObject()

> **new NodeInformationObject**(`blockHeight`, `batchHeight`): [`NodeInformationObject`](NodeInformationObject.md)

Defined in: [api/src/graphql/modules/NodeStatusResolver.ts:21](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/modules/NodeStatusResolver.ts#L21)

#### Parameters

##### blockHeight

`number`

##### batchHeight

`number`

#### Returns

[`NodeInformationObject`](NodeInformationObject.md)

## Properties

### batchHeight

> **batchHeight**: `number`

Defined in: [api/src/graphql/modules/NodeStatusResolver.ts:19](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/modules/NodeStatusResolver.ts#L19)

***

### blockHeight

> **blockHeight**: `number`

Defined in: [api/src/graphql/modules/NodeStatusResolver.ts:16](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/modules/NodeStatusResolver.ts#L16)

## Methods

### fromServiceLayerModel()

> `static` **fromServiceLayerModel**(`status`): [`NodeInformationObject`](NodeInformationObject.md)

Defined in: [api/src/graphql/modules/NodeStatusResolver.ts:11](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/modules/NodeStatusResolver.ts#L11)

#### Parameters

##### status

[`NodeInformation`](../interfaces/NodeInformation.md)

#### Returns

[`NodeInformationObject`](NodeInformationObject.md)
