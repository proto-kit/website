---
title: AbstractMerkleTreeClass
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / AbstractMerkleTreeClass

# Interface: AbstractMerkleTreeClass

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:84](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/trees/RollupMerkleTree.ts#L84)

## Constructors

### new AbstractMerkleTreeClass()

> **new AbstractMerkleTreeClass**(`store`): [`AbstractMerkleTree`](AbstractMerkleTree.md)

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:85](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/trees/RollupMerkleTree.ts#L85)

#### Parameters

##### store

[`MerkleTreeStore`](MerkleTreeStore.md)

#### Returns

[`AbstractMerkleTree`](AbstractMerkleTree.md)

## Properties

### EMPTY\_ROOT

> **EMPTY\_ROOT**: `bigint`

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:92](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/trees/RollupMerkleTree.ts#L92)

***

### HEIGHT

> **HEIGHT**: `number`

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:90](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/trees/RollupMerkleTree.ts#L90)

***

### WITNESS

> **WITNESS**: [`TypedClass`](../type-aliases/TypedClass.md)\<[`AbstractMerkleWitness`](AbstractMerkleWitness.md)\> & *typeof* `StructTemplate` & `object`

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:87](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/trees/RollupMerkleTree.ts#L87)

#### Type declaration

##### dummy()

> **dummy**: () => [`AbstractMerkleWitness`](AbstractMerkleWitness.md)

###### Returns

[`AbstractMerkleWitness`](AbstractMerkleWitness.md)

## Accessors

### leafCount

#### Get Signature

> **get** **leafCount**(): `bigint`

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:94](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/trees/RollupMerkleTree.ts#L94)

##### Returns

`bigint`
