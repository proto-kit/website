---
title: QueryGetterState
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / QueryGetterState

# Interface: QueryGetterState\<Value\>

Defined in: [packages/sequencer/src/helpers/query/QueryBuilderFactory.ts:24](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/helpers/query/QueryBuilderFactory.ts#L24)

## Type Parameters

• **Value**

## Properties

### get()

> **get**: () => `Promise`\<`undefined` \| `Value`\>

Defined in: [packages/sequencer/src/helpers/query/QueryBuilderFactory.ts:25](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/helpers/query/QueryBuilderFactory.ts#L25)

#### Returns

`Promise`\<`undefined` \| `Value`\>

***

### merkleWitness()

> **merkleWitness**: () => `Promise`\<`undefined` \| [`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md)\>

Defined in: [packages/sequencer/src/helpers/query/QueryBuilderFactory.ts:27](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/helpers/query/QueryBuilderFactory.ts#L27)

#### Returns

`Promise`\<`undefined` \| [`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md)\>

***

### path()

> **path**: () => `string`

Defined in: [packages/sequencer/src/helpers/query/QueryBuilderFactory.ts:26](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/helpers/query/QueryBuilderFactory.ts#L26)

#### Returns

`string`
