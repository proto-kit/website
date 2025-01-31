---
title: AbstractMerkleTree
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / AbstractMerkleTree

# Interface: AbstractMerkleTree

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:41](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/trees/RollupMerkleTree.ts#L41)

## Extended by

- [`RollupMerkleTree`](../classes/RollupMerkleTree.md)
- [`FeeTree`](../../library/classes/FeeTree.md)
- [`BlockHashMerkleTree`](../../protocol/classes/BlockHashMerkleTree.md)
- [`TokenBridgeTree`](../../protocol/classes/TokenBridgeTree.md)
- [`VKTree`](../../protocol/classes/VKTree.md)

## Properties

### leafCount

> `readonly` **leafCount**: `bigint`

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:43](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/trees/RollupMerkleTree.ts#L43)

***

### store

> **store**: [`MerkleTreeStore`](MerkleTreeStore.md)

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:42](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/trees/RollupMerkleTree.ts#L42)

## Methods

### assertIndexRange()

> **assertIndexRange**(`index`): `void`

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:45](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/trees/RollupMerkleTree.ts#L45)

#### Parameters

##### index

`bigint`

#### Returns

`void`

***

### fill()

> **fill**(`leaves`): `void`

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:81](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/trees/RollupMerkleTree.ts#L81)

Fills all leaves of the tree.

#### Parameters

##### leaves

`Field`[]

Values to fill the leaves with.

#### Returns

`void`

***

### getNode()

> **getNode**(`level`, `index`): `Field`

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:53](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/trees/RollupMerkleTree.ts#L53)

Returns a node which lives at a given index and level.

#### Parameters

##### level

`number`

Level of the node.

##### index

`bigint`

Index of the node.

#### Returns

`Field`

The data of the node.

***

### getRoot()

> **getRoot**(): `Field`

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:59](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/trees/RollupMerkleTree.ts#L59)

Returns the root of the [Merkle Tree](https://en.wikipedia.org/wiki/Merkle_tree).

#### Returns

`Field`

The root of the Merkle Tree.

***

### getWitness()

> **getWitness**(`index`): [`AbstractMerkleWitness`](AbstractMerkleWitness.md)

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:75](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/trees/RollupMerkleTree.ts#L75)

Returns the witness (also known as
[Merkle Proof or Merkle Witness](https://computersciencewiki.org/index.php/Merkle_proof))
for the leaf at the given index.

#### Parameters

##### index

`bigint`

Position of the leaf node.

#### Returns

[`AbstractMerkleWitness`](AbstractMerkleWitness.md)

The witness that belongs to the leaf.

***

### setLeaf()

> **setLeaf**(`index`, `leaf`): `void`

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:66](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/trees/RollupMerkleTree.ts#L66)

Sets the value of a leaf node at a given index to a given value.

#### Parameters

##### index

`bigint`

Position of the leaf node.

##### leaf

`Field`

New value.

#### Returns

`void`
