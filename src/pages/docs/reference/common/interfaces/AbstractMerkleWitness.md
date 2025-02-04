---
title: AbstractMerkleWitness
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / AbstractMerkleWitness

# Interface: AbstractMerkleWitness

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:14](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/trees/RollupMerkleTree.ts#L14)

## Extends

- `StructTemplate`

## Properties

### isLeft

> **isLeft**: `Bool`[]

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:11](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/trees/RollupMerkleTree.ts#L11)

#### Inherited from

`StructTemplate.isLeft`

***

### path

> **path**: `Field`[]

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:10](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/trees/RollupMerkleTree.ts#L10)

#### Inherited from

`StructTemplate.path`

## Methods

### calculateIndex()

> **calculateIndex**(): `Field`

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:28](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/trees/RollupMerkleTree.ts#L28)

Calculates the index of the leaf node that belongs to this Witness.

#### Returns

`Field`

Index of the leaf.

***

### calculateRoot()

> **calculateRoot**(`hash`): `Field`

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:22](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/trees/RollupMerkleTree.ts#L22)

Calculates a root depending on the leaf value.

#### Parameters

##### hash

`Field`

#### Returns

`Field`

The calculated root.

***

### checkMembership()

> **checkMembership**(`root`, `key`, `value`): `Bool`

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:30](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/trees/RollupMerkleTree.ts#L30)

#### Parameters

##### root

`Field`

##### key

`Field`

##### value

`Field`

#### Returns

`Bool`

***

### checkMembershipGetRoots()

> **checkMembershipGetRoots**(`root`, `key`, `value`): \[`Bool`, `Field`, `Field`\]

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:32](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/trees/RollupMerkleTree.ts#L32)

#### Parameters

##### root

`Field`

##### key

`Field`

##### value

`Field`

#### Returns

\[`Bool`, `Field`, `Field`\]

***

### height()

> **height**(): `number`

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:15](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/trees/RollupMerkleTree.ts#L15)

#### Returns

`number`

***

### toShortenedEntries()

> **toShortenedEntries**(): `string`[]

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:38](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/trees/RollupMerkleTree.ts#L38)

#### Returns

`string`[]
