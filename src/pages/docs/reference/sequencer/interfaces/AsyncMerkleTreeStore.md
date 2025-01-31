---
title: AsyncMerkleTreeStore
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / AsyncMerkleTreeStore

# Interface: AsyncMerkleTreeStore

Defined in: [packages/sequencer/src/state/async/AsyncMerkleTreeStore.ts:10](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/state/async/AsyncMerkleTreeStore.ts#L10)

## Properties

### commit()

> **commit**: () => `Promise`\<`void`\>

Defined in: [packages/sequencer/src/state/async/AsyncMerkleTreeStore.ts:13](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/state/async/AsyncMerkleTreeStore.ts#L13)

#### Returns

`Promise`\<`void`\>

***

### getNodesAsync()

> **getNodesAsync**: (`nodes`) => `Promise`\<(`undefined` \| `bigint`)[]\>

Defined in: [packages/sequencer/src/state/async/AsyncMerkleTreeStore.ts:17](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/state/async/AsyncMerkleTreeStore.ts#L17)

#### Parameters

##### nodes

[`MerkleTreeNodeQuery`](MerkleTreeNodeQuery.md)[]

#### Returns

`Promise`\<(`undefined` \| `bigint`)[]\>

***

### openTransaction()

> **openTransaction**: () => `Promise`\<`void`\>

Defined in: [packages/sequencer/src/state/async/AsyncMerkleTreeStore.ts:11](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/state/async/AsyncMerkleTreeStore.ts#L11)

#### Returns

`Promise`\<`void`\>

***

### writeNodes()

> **writeNodes**: (`nodes`) => `void`

Defined in: [packages/sequencer/src/state/async/AsyncMerkleTreeStore.ts:15](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/state/async/AsyncMerkleTreeStore.ts#L15)

#### Parameters

##### nodes

[`MerkleTreeNode`](MerkleTreeNode.md)[]

#### Returns

`void`
