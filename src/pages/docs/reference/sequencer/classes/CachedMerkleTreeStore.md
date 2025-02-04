---
title: CachedMerkleTreeStore
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / CachedMerkleTreeStore

# Class: CachedMerkleTreeStore

Defined in: [packages/sequencer/src/state/merkle/CachedMerkleTreeStore.ts:14](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/state/merkle/CachedMerkleTreeStore.ts#L14)

## Extends

- [`InMemoryMerkleTreeStorage`](../../common/classes/InMemoryMerkleTreeStorage.md)

## Implements

- [`AsyncMerkleTreeStore`](../interfaces/AsyncMerkleTreeStore.md)

## Constructors

### new CachedMerkleTreeStore()

> **new CachedMerkleTreeStore**(`parent`): [`CachedMerkleTreeStore`](CachedMerkleTreeStore.md)

Defined in: [packages/sequencer/src/state/merkle/CachedMerkleTreeStore.ts:32](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/state/merkle/CachedMerkleTreeStore.ts#L32)

#### Parameters

##### parent

[`AsyncMerkleTreeStore`](../interfaces/AsyncMerkleTreeStore.md)

#### Returns

[`CachedMerkleTreeStore`](CachedMerkleTreeStore.md)

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

### commit()

> **commit**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/state/merkle/CachedMerkleTreeStore.ts:28](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/state/merkle/CachedMerkleTreeStore.ts#L28)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`AsyncMerkleTreeStore`](../interfaces/AsyncMerkleTreeStore.md).[`commit`](../interfaces/AsyncMerkleTreeStore.md#commit)

***

### getNode()

> **getNode**(`key`, `level`): `undefined` \| `bigint`

Defined in: [packages/sequencer/src/state/merkle/CachedMerkleTreeStore.ts:36](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/state/merkle/CachedMerkleTreeStore.ts#L36)

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

### getNodesAsync()

> **getNodesAsync**(`nodes`): `Promise`\<(`undefined` \| `bigint`)[]\>

Defined in: [packages/sequencer/src/state/merkle/CachedMerkleTreeStore.ts:148](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/state/merkle/CachedMerkleTreeStore.ts#L148)

#### Parameters

##### nodes

[`MerkleTreeNodeQuery`](../interfaces/MerkleTreeNodeQuery.md)[]

#### Returns

`Promise`\<(`undefined` \| `bigint`)[]\>

#### Implementation of

[`AsyncMerkleTreeStore`](../interfaces/AsyncMerkleTreeStore.md).[`getNodesAsync`](../interfaces/AsyncMerkleTreeStore.md#getnodesasync)

***

### getWrittenNodes()

> **getWrittenNodes**(): `object`

Defined in: [packages/sequencer/src/state/merkle/CachedMerkleTreeStore.ts:45](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/state/merkle/CachedMerkleTreeStore.ts#L45)

#### Returns

`object`

***

### mergeIntoParent()

> **mergeIntoParent**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/state/merkle/CachedMerkleTreeStore.ts:112](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/state/merkle/CachedMerkleTreeStore.ts#L112)

#### Returns

`Promise`\<`void`\>

***

### openTransaction()

> **openTransaction**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/state/merkle/CachedMerkleTreeStore.ts:24](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/state/merkle/CachedMerkleTreeStore.ts#L24)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`AsyncMerkleTreeStore`](../interfaces/AsyncMerkleTreeStore.md).[`openTransaction`](../interfaces/AsyncMerkleTreeStore.md#opentransaction)

***

### preloadKey()

> **preloadKey**(`index`): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/state/merkle/CachedMerkleTreeStore.ts:108](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/state/merkle/CachedMerkleTreeStore.ts#L108)

#### Parameters

##### index

`bigint`

#### Returns

`Promise`\<`void`\>

***

### preloadKeys()

> **preloadKeys**(`keys`): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/state/merkle/CachedMerkleTreeStore.ts:94](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/state/merkle/CachedMerkleTreeStore.ts#L94)

#### Parameters

##### keys

`bigint`[]

#### Returns

`Promise`\<`void`\>

***

### resetWrittenNodes()

> **resetWrittenNodes**(): `void`

Defined in: [packages/sequencer/src/state/merkle/CachedMerkleTreeStore.ts:53](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/state/merkle/CachedMerkleTreeStore.ts#L53)

#### Returns

`void`

***

### setNode()

> **setNode**(`key`, `level`, `value`): `void`

Defined in: [packages/sequencer/src/state/merkle/CachedMerkleTreeStore.ts:40](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/state/merkle/CachedMerkleTreeStore.ts#L40)

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

***

### setNodeAsync()

> **setNodeAsync**(`key`, `level`, `value`): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/state/merkle/CachedMerkleTreeStore.ts:140](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/state/merkle/CachedMerkleTreeStore.ts#L140)

#### Parameters

##### key

`bigint`

##### level

`number`

##### value

`bigint`

#### Returns

`Promise`\<`void`\>

***

### writeNodes()

> **writeNodes**(`nodes`): `void`

Defined in: [packages/sequencer/src/state/merkle/CachedMerkleTreeStore.ts:176](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/state/merkle/CachedMerkleTreeStore.ts#L176)

#### Parameters

##### nodes

[`MerkleTreeNode`](../interfaces/MerkleTreeNode.md)[]

#### Returns

`void`

#### Implementation of

[`AsyncMerkleTreeStore`](../interfaces/AsyncMerkleTreeStore.md).[`writeNodes`](../interfaces/AsyncMerkleTreeStore.md#writenodes)
