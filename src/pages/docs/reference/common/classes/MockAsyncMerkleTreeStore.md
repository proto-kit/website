---
title: MockAsyncMerkleTreeStore
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / MockAsyncMerkleTreeStore

# Class: MockAsyncMerkleTreeStore

Defined in: [packages/common/src/trees/MockAsyncMerkleStore.ts:5](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/trees/MockAsyncMerkleStore.ts#L5)

## Constructors

### new MockAsyncMerkleTreeStore()

> **new MockAsyncMerkleTreeStore**(): [`MockAsyncMerkleTreeStore`](MockAsyncMerkleTreeStore.md)

#### Returns

[`MockAsyncMerkleTreeStore`](MockAsyncMerkleTreeStore.md)

## Properties

### store

> `readonly` **store**: [`InMemoryMerkleTreeStorage`](InMemoryMerkleTreeStorage.md)

Defined in: [packages/common/src/trees/MockAsyncMerkleStore.ts:6](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/trees/MockAsyncMerkleStore.ts#L6)

## Methods

### commit()

> **commit**(): `void`

Defined in: [packages/common/src/trees/MockAsyncMerkleStore.ts:8](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/trees/MockAsyncMerkleStore.ts#L8)

#### Returns

`void`

***

### getNodeAsync()

> **getNodeAsync**(`key`, `level`): `Promise`\<`undefined` \| `bigint`\>

Defined in: [packages/common/src/trees/MockAsyncMerkleStore.ts:16](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/trees/MockAsyncMerkleStore.ts#L16)

#### Parameters

##### key

`bigint`

##### level

`number`

#### Returns

`Promise`\<`undefined` \| `bigint`\>

***

### openTransaction()

> **openTransaction**(): `void`

Defined in: [packages/common/src/trees/MockAsyncMerkleStore.ts:12](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/trees/MockAsyncMerkleStore.ts#L12)

#### Returns

`void`

***

### setNodeAsync()

> **setNodeAsync**(`key`, `level`, `value`): `Promise`\<`void`\>

Defined in: [packages/common/src/trees/MockAsyncMerkleStore.ts:23](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/trees/MockAsyncMerkleStore.ts#L23)

#### Parameters

##### key

`bigint`

##### level

`number`

##### value

`bigint`

#### Returns

`Promise`\<`void`\>
