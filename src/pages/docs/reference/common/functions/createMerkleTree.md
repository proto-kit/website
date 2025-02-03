---
title: createMerkleTree
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / createMerkleTree

# Function: createMerkleTree()

> **createMerkleTree**(`height`): [`AbstractMerkleTreeClass`](../interfaces/AbstractMerkleTreeClass.md)

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:116](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/trees/RollupMerkleTree.ts#L116)

A [Merkle Tree](https://en.wikipedia.org/wiki/Merkle_tree) is a binary tree in
which every leaf is the cryptography hash of a piece of data,
and every node is the hash of the concatenation of its two child nodes.

A Merkle Tree allows developers to easily and securely verify
the integrity of large amounts of data.

Take a look at our [documentation](https://docs.minaprotocol.com/en/zkapps)
on how to use Merkle Trees in combination with zkApps and
zero knowledge programming!

Levels are indexed from leaves (level 0) to root (level N - 1).

This function takes a height as argument and returns a class
that implements a merkletree with that specified height.

It also holds the Witness class under tree.WITNESS

## Parameters

### height

`number`

## Returns

[`AbstractMerkleTreeClass`](../interfaces/AbstractMerkleTreeClass.md)
