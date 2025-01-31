---
title: NodeInformationObject
---

[**@proto-kit/api**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/api](../README.md) / NodeInformationObject

# Class: NodeInformationObject

Defined in: [api/src/graphql/modules/NodeStatusResolver.ts:10](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/api/src/graphql/modules/NodeStatusResolver.ts#L10)

## Constructors

### new NodeInformationObject()

> **new NodeInformationObject**(`blockHeight`, `batchHeight`): [`NodeInformationObject`](NodeInformationObject.md)

Defined in: [api/src/graphql/modules/NodeStatusResolver.ts:21](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/api/src/graphql/modules/NodeStatusResolver.ts#L21)

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

Defined in: [api/src/graphql/modules/NodeStatusResolver.ts:19](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/api/src/graphql/modules/NodeStatusResolver.ts#L19)

***

### blockHeight

> **blockHeight**: `number`

Defined in: [api/src/graphql/modules/NodeStatusResolver.ts:16](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/api/src/graphql/modules/NodeStatusResolver.ts#L16)

## Methods

### fromServiceLayerModel()

> `static` **fromServiceLayerModel**(`status`): [`NodeInformationObject`](NodeInformationObject.md)

Defined in: [api/src/graphql/modules/NodeStatusResolver.ts:11](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/api/src/graphql/modules/NodeStatusResolver.ts#L11)

#### Parameters

##### status

[`NodeInformation`](../interfaces/NodeInformation.md)

#### Returns

[`NodeInformationObject`](NodeInformationObject.md)
