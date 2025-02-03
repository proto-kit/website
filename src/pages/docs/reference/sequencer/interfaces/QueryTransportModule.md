---
title: QueryTransportModule
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / QueryTransportModule

# Interface: QueryTransportModule

Defined in: [packages/sequencer/src/helpers/query/QueryTransportModule.ts:4](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/helpers/query/QueryTransportModule.ts#L4)

## Properties

### get()

> **get**: (`key`) => `Promise`\<`undefined` \| `Field`[]\>

Defined in: [packages/sequencer/src/helpers/query/QueryTransportModule.ts:5](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/helpers/query/QueryTransportModule.ts#L5)

#### Parameters

##### key

`Field`

#### Returns

`Promise`\<`undefined` \| `Field`[]\>

***

### merkleWitness()

> **merkleWitness**: (`key`) => `Promise`\<`undefined` \| [`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md)\>

Defined in: [packages/sequencer/src/helpers/query/QueryTransportModule.ts:6](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/helpers/query/QueryTransportModule.ts#L6)

#### Parameters

##### key

`Field`

#### Returns

`Promise`\<`undefined` \| [`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md)\>
