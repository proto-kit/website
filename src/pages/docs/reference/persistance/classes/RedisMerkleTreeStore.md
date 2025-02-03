---
title: RedisMerkleTreeStore
---

[**@proto-kit/persistance**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/persistance](../README.md) / RedisMerkleTreeStore

# Class: RedisMerkleTreeStore

Defined in: [packages/persistance/src/services/redis/RedisMerkleTreeStore.ts:10](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/persistance/src/services/redis/RedisMerkleTreeStore.ts#L10)

## Implements

- [`AsyncMerkleTreeStore`](../../sequencer/interfaces/AsyncMerkleTreeStore.md)

## Constructors

### new RedisMerkleTreeStore()

> **new RedisMerkleTreeStore**(`connection`, `mask`): [`RedisMerkleTreeStore`](RedisMerkleTreeStore.md)

Defined in: [packages/persistance/src/services/redis/RedisMerkleTreeStore.ts:13](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/persistance/src/services/redis/RedisMerkleTreeStore.ts#L13)

#### Parameters

##### connection

[`RedisConnection`](../interfaces/RedisConnection.md)

##### mask

`string` = `"base"`

#### Returns

[`RedisMerkleTreeStore`](RedisMerkleTreeStore.md)

## Methods

### commit()

> **commit**(): `Promise`\<`void`\>

Defined in: [packages/persistance/src/services/redis/RedisMerkleTreeStore.ts:26](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/persistance/src/services/redis/RedisMerkleTreeStore.ts#L26)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`AsyncMerkleTreeStore`](../../sequencer/interfaces/AsyncMerkleTreeStore.md).[`commit`](../../sequencer/interfaces/AsyncMerkleTreeStore.md#commit)

***

### getNodesAsync()

> **getNodesAsync**(`nodes`): `Promise`\<(`undefined` \| `bigint`)[]\>

Defined in: [packages/persistance/src/services/redis/RedisMerkleTreeStore.ts:48](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/persistance/src/services/redis/RedisMerkleTreeStore.ts#L48)

#### Parameters

##### nodes

[`MerkleTreeNodeQuery`](../../sequencer/interfaces/MerkleTreeNodeQuery.md)[]

#### Returns

`Promise`\<(`undefined` \| `bigint`)[]\>

#### Implementation of

[`AsyncMerkleTreeStore`](../../sequencer/interfaces/AsyncMerkleTreeStore.md).[`getNodesAsync`](../../sequencer/interfaces/AsyncMerkleTreeStore.md#getnodesasync)

***

### openTransaction()

> **openTransaction**(): `Promise`\<`void`\>

Defined in: [packages/persistance/src/services/redis/RedisMerkleTreeStore.ts:22](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/persistance/src/services/redis/RedisMerkleTreeStore.ts#L22)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`AsyncMerkleTreeStore`](../../sequencer/interfaces/AsyncMerkleTreeStore.md).[`openTransaction`](../../sequencer/interfaces/AsyncMerkleTreeStore.md#opentransaction)

***

### writeNodes()

> **writeNodes**(`nodes`): `void`

Defined in: [packages/persistance/src/services/redis/RedisMerkleTreeStore.ts:62](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/persistance/src/services/redis/RedisMerkleTreeStore.ts#L62)

#### Parameters

##### nodes

[`MerkleTreeNode`](../../sequencer/interfaces/MerkleTreeNode.md)[]

#### Returns

`void`

#### Implementation of

[`AsyncMerkleTreeStore`](../../sequencer/interfaces/AsyncMerkleTreeStore.md).[`writeNodes`](../../sequencer/interfaces/AsyncMerkleTreeStore.md#writenodes)
