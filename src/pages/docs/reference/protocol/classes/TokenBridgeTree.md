---
title: TokenBridgeTree
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / TokenBridgeTree

# Class: TokenBridgeTree

Defined in: [packages/protocol/src/settlement/contracts/TokenBridgeTree.ts:15](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/contracts/TokenBridgeTree.ts#L15)

Merkle tree that contains all the deployed token bridges as a mapping of
tokenId => PublicKey

It should be used as an append-only tree with incremental indizes - this allows
us to reduce the height of it

## Extends

- [`AbstractMerkleTree`](../../common/interfaces/AbstractMerkleTree.md)

## Constructors

### new TokenBridgeTree()

> **new TokenBridgeTree**(`store`): [`TokenBridgeTree`](TokenBridgeTree.md)

Defined in: packages/common/dist/trees/RollupMerkleTree.d.ts:113

#### Parameters

##### store

[`MerkleTreeStore`](../../common/interfaces/MerkleTreeStore.md)

#### Returns

[`TokenBridgeTree`](TokenBridgeTree.md)

#### Inherited from

`createMerkleTree(256).constructor`

## Properties

### indizes

> **indizes**: `Record`\<`string`, `bigint`\> = `{}`

Defined in: [packages/protocol/src/settlement/contracts/TokenBridgeTree.ts:16](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/contracts/TokenBridgeTree.ts#L16)

***

### leafCount

> `readonly` **leafCount**: `bigint`

Defined in: packages/common/dist/trees/RollupMerkleTree.d.ts:78

#### Inherited from

[`AbstractMerkleTree`](../../common/interfaces/AbstractMerkleTree.md).[`leafCount`](../../common/interfaces/AbstractMerkleTree.md#leafcount)

***

### store

> **store**: [`MerkleTreeStore`](../../common/interfaces/MerkleTreeStore.md)

Defined in: packages/common/dist/trees/RollupMerkleTree.d.ts:77

#### Inherited from

[`AbstractMerkleTree`](../../common/interfaces/AbstractMerkleTree.md).[`store`](../../common/interfaces/AbstractMerkleTree.md#store)

***

### EMPTY\_ROOT

> `static` **EMPTY\_ROOT**: `bigint`

Defined in: packages/common/dist/trees/RollupMerkleTree.d.ts:118

#### Inherited from

`createMerkleTree(256).EMPTY_ROOT`

***

### HEIGHT

> `static` **HEIGHT**: `number`

Defined in: packages/common/dist/trees/RollupMerkleTree.d.ts:117

#### Inherited from

`createMerkleTree(256).HEIGHT`

***

### WITNESS

> `static` **WITNESS**: [`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`AbstractMerkleWitness`](../../common/interfaces/AbstractMerkleWitness.md)\> & *typeof* `StructTemplate` & `object`

Defined in: packages/common/dist/trees/RollupMerkleTree.d.ts:114

#### Type declaration

##### dummy()

> **dummy**: () => [`AbstractMerkleWitness`](../../common/interfaces/AbstractMerkleWitness.md)

###### Returns

[`AbstractMerkleWitness`](../../common/interfaces/AbstractMerkleWitness.md)

#### Inherited from

`createMerkleTree(256).WITNESS`

## Accessors

### leafCount

#### Get Signature

> **get** `static` **leafCount**(): `bigint`

Defined in: packages/common/dist/trees/RollupMerkleTree.d.ts:119

##### Returns

`bigint`

#### Inherited from

`createMerkleTree(256).leafCount`

## Methods

### assertIndexRange()

> **assertIndexRange**(`index`): `void`

Defined in: packages/common/dist/trees/RollupMerkleTree.d.ts:79

#### Parameters

##### index

`bigint`

#### Returns

`void`

#### Inherited from

[`AbstractMerkleTree`](../../common/interfaces/AbstractMerkleTree.md).[`assertIndexRange`](../../common/interfaces/AbstractMerkleTree.md#assertindexrange)

***

### fill()

> **fill**(`leaves`): `void`

Defined in: packages/common/dist/trees/RollupMerkleTree.d.ts:110

Fills all leaves of the tree.

#### Parameters

##### leaves

`Field`[]

Values to fill the leaves with.

#### Returns

`void`

#### Inherited from

[`AbstractMerkleTree`](../../common/interfaces/AbstractMerkleTree.md).[`fill`](../../common/interfaces/AbstractMerkleTree.md#fill)

***

### getIndex()

> **getIndex**(`tokenId`): `bigint`

Defined in: [packages/protocol/src/settlement/contracts/TokenBridgeTree.ts:49](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/contracts/TokenBridgeTree.ts#L49)

#### Parameters

##### tokenId

`Field`

#### Returns

`bigint`

***

### getNode()

> **getNode**(`level`, `index`): `Field`

Defined in: packages/common/dist/trees/RollupMerkleTree.d.ts:86

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

[`AbstractMerkleTree`](../../common/interfaces/AbstractMerkleTree.md).[`getNode`](../../common/interfaces/AbstractMerkleTree.md#getnode)

***

### getRoot()

> **getRoot**(): `Field`

Defined in: packages/common/dist/trees/RollupMerkleTree.d.ts:91

Returns the root of the [Merkle Tree](https://en.wikipedia.org/wiki/Merkle_tree).

#### Returns

`Field`

The root of the Merkle Tree.

#### Inherited from

[`AbstractMerkleTree`](../../common/interfaces/AbstractMerkleTree.md).[`getRoot`](../../common/interfaces/AbstractMerkleTree.md#getroot)

***

### getWitness()

> **getWitness**(`index`): [`AbstractMerkleWitness`](../../common/interfaces/AbstractMerkleWitness.md)

Defined in: packages/common/dist/trees/RollupMerkleTree.d.ts:105

Returns the witness (also known as
[Merkle Proof or Merkle Witness](https://computersciencewiki.org/index.php/Merkle_proof))
for the leaf at the given index.

#### Parameters

##### index

`bigint`

Position of the leaf node.

#### Returns

[`AbstractMerkleWitness`](../../common/interfaces/AbstractMerkleWitness.md)

The witness that belongs to the leaf.

#### Inherited from

[`AbstractMerkleTree`](../../common/interfaces/AbstractMerkleTree.md).[`getWitness`](../../common/interfaces/AbstractMerkleTree.md#getwitness)

***

### setLeaf()

> **setLeaf**(`index`, `leaf`): `void`

Defined in: packages/common/dist/trees/RollupMerkleTree.d.ts:97

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

[`AbstractMerkleTree`](../../common/interfaces/AbstractMerkleTree.md).[`setLeaf`](../../common/interfaces/AbstractMerkleTree.md#setleaf)

***

### buildTreeFromEvents()

> `static` **buildTreeFromEvents**(`contract`): `Promise`\<[`TokenBridgeTree`](TokenBridgeTree.md)\>

Defined in: [packages/protocol/src/settlement/contracts/TokenBridgeTree.ts:22](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/contracts/TokenBridgeTree.ts#L22)

Initializes and fills the tree based on all on-chain events that have been
emitted by every emit

#### Parameters

##### contract

`SmartContract` & `object`

#### Returns

`Promise`\<[`TokenBridgeTree`](TokenBridgeTree.md)\>
