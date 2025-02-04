---
title: BlockModel
---

[**@proto-kit/api**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/api](../README.md) / BlockModel

# Class: BlockModel

Defined in: [api/src/graphql/modules/BlockResolver.ts:14](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/modules/BlockResolver.ts#L14)

## Properties

### hash

> **hash**: `string`

Defined in: [api/src/graphql/modules/BlockResolver.ts:32](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/modules/BlockResolver.ts#L32)

***

### height

> **height**: `number`

Defined in: [api/src/graphql/modules/BlockResolver.ts:38](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/modules/BlockResolver.ts#L38)

***

### previousBlockHash

> **previousBlockHash**: `undefined` \| `string`

Defined in: [api/src/graphql/modules/BlockResolver.ts:35](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/modules/BlockResolver.ts#L35)

***

### transactionsHash

> **transactionsHash**: `string`

Defined in: [api/src/graphql/modules/BlockResolver.ts:44](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/modules/BlockResolver.ts#L44)

***

### txs

> **txs**: `BatchTransactionModel`[]

Defined in: [api/src/graphql/modules/BlockResolver.ts:41](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/modules/BlockResolver.ts#L41)

## Methods

### fromServiceLayerModel()

> `static` **fromServiceLayerModel**(`block`): [`BlockModel`](BlockModel.md)

Defined in: [api/src/graphql/modules/BlockResolver.ts:15](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/modules/BlockResolver.ts#L15)

#### Parameters

##### block

[`Block`](../../sequencer/interfaces/Block.md)

#### Returns

[`BlockModel`](BlockModel.md)
