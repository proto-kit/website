---
title: RollupMerkleTree
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / RollupMerkleTree

# Class: RollupMerkleTree

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:344](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/trees/RollupMerkleTree.ts#L344)

## Extends

- [`AbstractMerkleTree`](../interfaces/AbstractMerkleTree.md)

## Constructors

### new RollupMerkleTree()

> **new RollupMerkleTree**(`store`): [`RollupMerkleTree`](RollupMerkleTree.md)

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:85](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/trees/RollupMerkleTree.ts#L85)

#### Parameters

##### store

[`MerkleTreeStore`](../interfaces/MerkleTreeStore.md)

#### Returns

[`RollupMerkleTree`](RollupMerkleTree.md)

#### Inherited from

`createMerkleTree(256).constructor`

## Properties

### leafCount

> `readonly` **leafCount**: `bigint`

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:43](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/trees/RollupMerkleTree.ts#L43)

#### Inherited from

[`AbstractMerkleTree`](../interfaces/AbstractMerkleTree.md).[`leafCount`](../interfaces/AbstractMerkleTree.md#leafcount)

***

### store

> **store**: [`MerkleTreeStore`](../interfaces/MerkleTreeStore.md)

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:42](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/trees/RollupMerkleTree.ts#L42)

#### Inherited from

[`AbstractMerkleTree`](../interfaces/AbstractMerkleTree.md).[`store`](../interfaces/AbstractMerkleTree.md#store)

***

### EMPTY\_ROOT

> `static` **EMPTY\_ROOT**: `bigint`

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:92](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/trees/RollupMerkleTree.ts#L92)

#### Inherited from

`createMerkleTree(256).EMPTY_ROOT`

***

### HEIGHT

> `static` **HEIGHT**: `number`

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:90](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/trees/RollupMerkleTree.ts#L90)

#### Inherited from

`createMerkleTree(256).HEIGHT`

***

### WITNESS

> `static` **WITNESS**: [`TypedClass`](../type-aliases/TypedClass.md)\<[`AbstractMerkleWitness`](../interfaces/AbstractMerkleWitness.md)\> & *typeof* `StructTemplate` & `object`

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:87](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/trees/RollupMerkleTree.ts#L87)

#### Type declaration

##### dummy()

> **dummy**: () => [`AbstractMerkleWitness`](../interfaces/AbstractMerkleWitness.md)

###### Returns

[`AbstractMerkleWitness`](../interfaces/AbstractMerkleWitness.md)

#### Inherited from

`createMerkleTree(256).WITNESS`

## Accessors

### leafCount

#### Get Signature

> **get** `static` **leafCount**(): `bigint`

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:94](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/trees/RollupMerkleTree.ts#L94)

##### Returns

`bigint`

#### Inherited from

`createMerkleTree(256).leafCount`

## Methods

### assertIndexRange()

> **assertIndexRange**(`index`): `void`

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:45](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/trees/RollupMerkleTree.ts#L45)

#### Parameters

##### index

`bigint`

#### Returns

`void`

#### Inherited from

[`AbstractMerkleTree`](../interfaces/AbstractMerkleTree.md).[`assertIndexRange`](../interfaces/AbstractMerkleTree.md#assertindexrange)

***

### fill()

> **fill**(`leaves`): `void`

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:81](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/trees/RollupMerkleTree.ts#L81)

Fills all leaves of the tree.

#### Parameters

##### leaves

`Field`[]

Values to fill the leaves with.

#### Returns

`void`

#### Inherited from

[`AbstractMerkleTree`](../interfaces/AbstractMerkleTree.md).[`fill`](../interfaces/AbstractMerkleTree.md#fill)

***

### getNode()

> **getNode**(`level`, `index`): `Field`

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:53](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/trees/RollupMerkleTree.ts#L53)

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

#### Inherited from

[`AbstractMerkleTree`](../interfaces/AbstractMerkleTree.md).[`getNode`](../interfaces/AbstractMerkleTree.md#getnode)

***

### getRoot()

> **getRoot**(): `Field`

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:59](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/trees/RollupMerkleTree.ts#L59)

Returns the root of the [Merkle Tree](https://en.wikipedia.org/wiki/Merkle_tree).

#### Returns

`Field`

The root of the Merkle Tree.

#### Inherited from

[`AbstractMerkleTree`](../interfaces/AbstractMerkleTree.md).[`getRoot`](../interfaces/AbstractMerkleTree.md#getroot)

***

### getWitness()

> **getWitness**(`index`): [`AbstractMerkleWitness`](../interfaces/AbstractMerkleWitness.md)

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:75](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/trees/RollupMerkleTree.ts#L75)

Returns the witness (also known as
[Merkle Proof or Merkle Witness](https://computersciencewiki.org/index.php/Merkle_proof))
for the leaf at the given index.

#### Parameters

##### index

`bigint`

Position of the leaf node.

#### Returns

[`AbstractMerkleWitness`](../interfaces/AbstractMerkleWitness.md)

The witness that belongs to the leaf.

#### Inherited from

[`AbstractMerkleTree`](../interfaces/AbstractMerkleTree.md).[`getWitness`](../interfaces/AbstractMerkleTree.md#getwitness)

***

### setLeaf()

> **setLeaf**(`index`, `leaf`): `void`

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:66](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/trees/RollupMerkleTree.ts#L66)

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

#### Inherited from

[`AbstractMerkleTree`](../interfaces/AbstractMerkleTree.md).[`setLeaf`](../interfaces/AbstractMerkleTree.md#setleaf)
