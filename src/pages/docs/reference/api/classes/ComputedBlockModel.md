---
title: ComputedBlockModel
---

[**@proto-kit/api**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/api](../README.md) / ComputedBlockModel

# Class: ComputedBlockModel

Defined in: [api/src/graphql/modules/BatchStorageResolver.ts:15](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/api/src/graphql/modules/BatchStorageResolver.ts#L15)

## Constructors

### new ComputedBlockModel()

> **new ComputedBlockModel**(`blocks`, `proof`): [`ComputedBlockModel`](ComputedBlockModel.md)

Defined in: [api/src/graphql/modules/BatchStorageResolver.ts:34](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/api/src/graphql/modules/BatchStorageResolver.ts#L34)

#### Parameters

##### blocks

[`BlockModel`](BlockModel.md)[]

##### proof

`string`

#### Returns

[`ComputedBlockModel`](ComputedBlockModel.md)

## Properties

### blocks

> **blocks**: [`BlockModel`](BlockModel.md)[]

Defined in: [api/src/graphql/modules/BatchStorageResolver.ts:29](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/api/src/graphql/modules/BatchStorageResolver.ts#L29)

***

### proof

> **proof**: `string`

Defined in: [api/src/graphql/modules/BatchStorageResolver.ts:32](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/api/src/graphql/modules/BatchStorageResolver.ts#L32)

## Methods

### fromServiceLayerModel()

> `static` **fromServiceLayerModel**(`__namedParameters`, `blocks`): [`ComputedBlockModel`](ComputedBlockModel.md)

Defined in: [api/src/graphql/modules/BatchStorageResolver.ts:16](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/api/src/graphql/modules/BatchStorageResolver.ts#L16)

#### Parameters

##### \_\_namedParameters

[`Batch`](../../sequencer/interfaces/Batch.md)

##### blocks

(`undefined` \| [`BlockModel`](BlockModel.md))[]

#### Returns

[`ComputedBlockModel`](ComputedBlockModel.md)
