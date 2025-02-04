---
title: InMemoryAsyncMerkleTreeStore
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / InMemoryAsyncMerkleTreeStore

# Class: InMemoryAsyncMerkleTreeStore

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryAsyncMerkleTreeStore.ts:9](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/storage/inmemory/InMemoryAsyncMerkleTreeStore.ts#L9)

## Implements

- [`AsyncMerkleTreeStore`](../interfaces/AsyncMerkleTreeStore.md)

## Constructors

### new InMemoryAsyncMerkleTreeStore()

> **new InMemoryAsyncMerkleTreeStore**(): [`InMemoryAsyncMerkleTreeStore`](InMemoryAsyncMerkleTreeStore.md)

#### Returns

[`InMemoryAsyncMerkleTreeStore`](InMemoryAsyncMerkleTreeStore.md)

## Methods

### commit()

> **commit**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryAsyncMerkleTreeStore.ts:18](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/storage/inmemory/InMemoryAsyncMerkleTreeStore.ts#L18)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`AsyncMerkleTreeStore`](../interfaces/AsyncMerkleTreeStore.md).[`commit`](../interfaces/AsyncMerkleTreeStore.md#commit)

***

### getNodesAsync()

> **getNodesAsync**(`nodes`): `Promise`\<(`undefined` \| `bigint`)[]\>

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryAsyncMerkleTreeStore.ts:26](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/storage/inmemory/InMemoryAsyncMerkleTreeStore.ts#L26)

#### Parameters

##### nodes

[`MerkleTreeNodeQuery`](../interfaces/MerkleTreeNodeQuery.md)[]

#### Returns

`Promise`\<(`undefined` \| `bigint`)[]\>

#### Implementation of

[`AsyncMerkleTreeStore`](../interfaces/AsyncMerkleTreeStore.md).[`getNodesAsync`](../interfaces/AsyncMerkleTreeStore.md#getnodesasync)

***

### openTransaction()

> **openTransaction**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryAsyncMerkleTreeStore.ts:22](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/storage/inmemory/InMemoryAsyncMerkleTreeStore.ts#L22)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`AsyncMerkleTreeStore`](../interfaces/AsyncMerkleTreeStore.md).[`openTransaction`](../interfaces/AsyncMerkleTreeStore.md#opentransaction)

***

### writeNodes()

> **writeNodes**(`nodes`): `void`

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryAsyncMerkleTreeStore.ts:12](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/storage/inmemory/InMemoryAsyncMerkleTreeStore.ts#L12)

#### Parameters

##### nodes

[`MerkleTreeNode`](../interfaces/MerkleTreeNode.md)[]

#### Returns

`void`

#### Implementation of

[`AsyncMerkleTreeStore`](../interfaces/AsyncMerkleTreeStore.md).[`writeNodes`](../interfaces/AsyncMerkleTreeStore.md#writenodes)
