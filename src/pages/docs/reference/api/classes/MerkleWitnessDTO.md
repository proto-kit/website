---
title: MerkleWitnessDTO
---

[**@proto-kit/api**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/api](../README.md) / MerkleWitnessDTO

# Class: MerkleWitnessDTO

Defined in: [api/src/graphql/modules/MerkleWitnessResolver.ts:13](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/modules/MerkleWitnessResolver.ts#L13)

## Constructors

### new MerkleWitnessDTO()

> **new MerkleWitnessDTO**(`siblings`, `isLefts`): [`MerkleWitnessDTO`](MerkleWitnessDTO.md)

Defined in: [api/src/graphql/modules/MerkleWitnessResolver.ts:20](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/modules/MerkleWitnessResolver.ts#L20)

#### Parameters

##### siblings

`string`[]

##### isLefts

`boolean`[]

#### Returns

[`MerkleWitnessDTO`](MerkleWitnessDTO.md)

## Properties

### isLefts

> **isLefts**: `boolean`[]

Defined in: [api/src/graphql/modules/MerkleWitnessResolver.ts:31](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/modules/MerkleWitnessResolver.ts#L31)

***

### siblings

> **siblings**: `string`[]

Defined in: [api/src/graphql/modules/MerkleWitnessResolver.ts:27](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/modules/MerkleWitnessResolver.ts#L27)

## Methods

### fromServiceLayerObject()

> `static` **fromServiceLayerObject**(`witness`): [`MerkleWitnessDTO`](MerkleWitnessDTO.md)

Defined in: [api/src/graphql/modules/MerkleWitnessResolver.ts:14](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/modules/MerkleWitnessResolver.ts#L14)

#### Parameters

##### witness

[`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md)

#### Returns

[`MerkleWitnessDTO`](MerkleWitnessDTO.md)
