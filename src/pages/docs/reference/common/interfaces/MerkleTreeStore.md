---
title: MerkleTreeStore
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / MerkleTreeStore

# Interface: MerkleTreeStore

Defined in: [packages/common/src/trees/MerkleTreeStore.ts:1](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/trees/MerkleTreeStore.ts#L1)

## Properties

### getNode()

> **getNode**: (`key`, `level`) => `undefined` \| `bigint`

Defined in: [packages/common/src/trees/MerkleTreeStore.ts:4](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/trees/MerkleTreeStore.ts#L4)

#### Parameters

##### key

`bigint`

##### level

`number`

#### Returns

`undefined` \| `bigint`

***

### setNode()

> **setNode**: (`key`, `level`, `value`) => `void`

Defined in: [packages/common/src/trees/MerkleTreeStore.ts:2](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/trees/MerkleTreeStore.ts#L2)

#### Parameters

##### key

`bigint`

##### level

`number`

##### value

`bigint`

#### Returns

`void`
