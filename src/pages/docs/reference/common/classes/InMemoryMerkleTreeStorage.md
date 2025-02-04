---
title: InMemoryMerkleTreeStorage
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / InMemoryMerkleTreeStorage

# Class: InMemoryMerkleTreeStorage

Defined in: [packages/common/src/trees/InMemoryMerkleTreeStorage.ts:3](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/trees/InMemoryMerkleTreeStorage.ts#L3)

## Extended by

- [`CachedMerkleTreeStore`](../../sequencer/classes/CachedMerkleTreeStore.md)
- [`SyncCachedMerkleTreeStore`](../../sequencer/classes/SyncCachedMerkleTreeStore.md)

## Implements

- [`MerkleTreeStore`](../interfaces/MerkleTreeStore.md)

## Constructors

### new InMemoryMerkleTreeStorage()

> **new InMemoryMerkleTreeStorage**(): [`InMemoryMerkleTreeStorage`](InMemoryMerkleTreeStorage.md)

#### Returns

[`InMemoryMerkleTreeStorage`](InMemoryMerkleTreeStorage.md)

## Properties

### nodes

> `protected` **nodes**: `object` = `{}`

Defined in: [packages/common/src/trees/InMemoryMerkleTreeStorage.ts:4](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/trees/InMemoryMerkleTreeStorage.ts#L4)

#### Index Signature

\[`key`: `number`\]: `object`

## Methods

### getNode()

> **getNode**(`key`, `level`): `undefined` \| `bigint`

Defined in: [packages/common/src/trees/InMemoryMerkleTreeStorage.ts:10](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/trees/InMemoryMerkleTreeStorage.ts#L10)

#### Parameters

##### key

`bigint`

##### level

`number`

#### Returns

`undefined` \| `bigint`

#### Implementation of

[`MerkleTreeStore`](../interfaces/MerkleTreeStore.md).[`getNode`](../interfaces/MerkleTreeStore.md#getnode)

***

### setNode()

> **setNode**(`key`, `level`, `value`): `void`

Defined in: [packages/common/src/trees/InMemoryMerkleTreeStorage.ts:14](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/trees/InMemoryMerkleTreeStorage.ts#L14)

#### Parameters

##### key

`bigint`

##### level

`number`

##### value

`bigint`

#### Returns

`void`

#### Implementation of

[`MerkleTreeStore`](../interfaces/MerkleTreeStore.md).[`setNode`](../interfaces/MerkleTreeStore.md#setnode)
