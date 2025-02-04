---
title: QueryGetterStateMap
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / QueryGetterStateMap

# Interface: QueryGetterStateMap\<Key, Value\>

Defined in: [packages/sequencer/src/helpers/query/QueryBuilderFactory.ts:30](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/helpers/query/QueryBuilderFactory.ts#L30)

## Type Parameters

• **Key**

• **Value**

## Properties

### get()

> **get**: (`key`) => `Promise`\<`undefined` \| `Value`\>

Defined in: [packages/sequencer/src/helpers/query/QueryBuilderFactory.ts:31](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/helpers/query/QueryBuilderFactory.ts#L31)

#### Parameters

##### key

`Key`

#### Returns

`Promise`\<`undefined` \| `Value`\>

***

### merkleWitness()

> **merkleWitness**: (`key`) => `Promise`\<`undefined` \| [`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md)\>

Defined in: [packages/sequencer/src/helpers/query/QueryBuilderFactory.ts:33](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/helpers/query/QueryBuilderFactory.ts#L33)

#### Parameters

##### key

`Key`

#### Returns

`Promise`\<`undefined` \| [`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md)\>

***

### path()

> **path**: (`key`) => `string`

Defined in: [packages/sequencer/src/helpers/query/QueryBuilderFactory.ts:32](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/helpers/query/QueryBuilderFactory.ts#L32)

#### Parameters

##### key

`Key`

#### Returns

`string`
