---
title: SyncCachedMerkleTreeStore
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / SyncCachedMerkleTreeStore

# Class: SyncCachedMerkleTreeStore

Defined in: [packages/sequencer/src/state/merkle/SyncCachedMerkleTreeStore.ts:7](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/state/merkle/SyncCachedMerkleTreeStore.ts#L7)

## Extends

- [`InMemoryMerkleTreeStorage`](../../common/classes/InMemoryMerkleTreeStorage.md)

## Constructors

### new SyncCachedMerkleTreeStore()

> **new SyncCachedMerkleTreeStore**(`parent`): [`SyncCachedMerkleTreeStore`](SyncCachedMerkleTreeStore.md)

Defined in: [packages/sequencer/src/state/merkle/SyncCachedMerkleTreeStore.ts:8](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/state/merkle/SyncCachedMerkleTreeStore.ts#L8)

#### Parameters

##### parent

[`MerkleTreeStore`](../../common/interfaces/MerkleTreeStore.md)

#### Returns

[`SyncCachedMerkleTreeStore`](SyncCachedMerkleTreeStore.md)

#### Overrides

[`InMemoryMerkleTreeStorage`](../../common/classes/InMemoryMerkleTreeStorage.md).[`constructor`](../../common/classes/InMemoryMerkleTreeStorage.md#constructors)

## Properties

### nodes

> `protected` **nodes**: `object`

Defined in: packages/common/dist/trees/InMemoryMerkleTreeStorage.d.ts:3

#### Index Signature

\[`key`: `number`\]: `object`

#### Inherited from

[`InMemoryMerkleTreeStorage`](../../common/classes/InMemoryMerkleTreeStorage.md).[`nodes`](../../common/classes/InMemoryMerkleTreeStorage.md#nodes)

## Methods

### getNode()

> **getNode**(`key`, `level`): `undefined` \| `bigint`

Defined in: [packages/sequencer/src/state/merkle/SyncCachedMerkleTreeStore.ts:12](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/state/merkle/SyncCachedMerkleTreeStore.ts#L12)

#### Parameters

##### key

`bigint`

##### level

`number`

#### Returns

`undefined` \| `bigint`

#### Overrides

[`InMemoryMerkleTreeStorage`](../../common/classes/InMemoryMerkleTreeStorage.md).[`getNode`](../../common/classes/InMemoryMerkleTreeStorage.md#getnode)

***

### mergeIntoParent()

> **mergeIntoParent**(): `void`

Defined in: [packages/sequencer/src/state/merkle/SyncCachedMerkleTreeStore.ts:20](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/state/merkle/SyncCachedMerkleTreeStore.ts#L20)

#### Returns

`void`

***

### setNode()

> **setNode**(`key`, `level`, `value`): `void`

Defined in: [packages/sequencer/src/state/merkle/SyncCachedMerkleTreeStore.ts:16](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/state/merkle/SyncCachedMerkleTreeStore.ts#L16)

#### Parameters

##### key

`bigint`

##### level

`number`

##### value

`bigint`

#### Returns

`void`

#### Overrides

[`InMemoryMerkleTreeStorage`](../../common/classes/InMemoryMerkleTreeStorage.md).[`setNode`](../../common/classes/InMemoryMerkleTreeStorage.md#setnode)
