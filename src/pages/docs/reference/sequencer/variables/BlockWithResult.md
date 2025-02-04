---
title: BlockWithResult
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / BlockWithResult

# Variable: BlockWithResult

> **BlockWithResult**: `object`

Defined in: [packages/sequencer/src/storage/model/Block.ts:59](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/storage/model/Block.ts#L59)

## Type declaration

### createEmpty()

> **createEmpty**: () => `object`

#### Returns

`object`

##### block

> **block**: `object`

###### block.fromBlockHashRoot

> **block.fromBlockHashRoot**: `Field`

###### block.fromEternalTransactionsHash

> **block.fromEternalTransactionsHash**: `Field`

###### block.fromMessagesHash

> **block.fromMessagesHash**: `Field`

###### block.hash

> **block.hash**: `Field`

###### block.height

> **block.height**: `Field`

###### block.networkState

> **block.networkState**: `object`

###### block.networkState.before

> **block.networkState.before**: [`NetworkState`](../../protocol/classes/NetworkState.md)

###### block.networkState.during

> **block.networkState.during**: [`NetworkState`](../../protocol/classes/NetworkState.md)

###### block.previousBlockHash

> **block.previousBlockHash**: `undefined` = `undefined`

###### block.toEternalTransactionsHash

> **block.toEternalTransactionsHash**: `Field`

###### block.toMessagesHash

> **block.toMessagesHash**: `Field` = `ACTIONS_EMPTY_HASH`

###### block.transactions

> **block.transactions**: `never`[] = `[]`

###### block.transactionsHash

> **block.transactionsHash**: `Field`

##### result

> **result**: `object`

###### result.afterNetworkState

> **result.afterNetworkState**: [`NetworkState`](../../protocol/classes/NetworkState.md)

###### result.blockHash

> **result.blockHash**: `bigint` = `0n`

###### result.blockHashRoot

> **result.blockHashRoot**: `bigint` = `BlockHashMerkleTree.EMPTY_ROOT`

###### result.blockHashWitness

> **result.blockHashWitness**: [`AbstractMerkleWitness`](../../common/interfaces/AbstractMerkleWitness.md)

###### result.blockStateTransitions

> **result.blockStateTransitions**: `never`[] = `[]`

###### result.stateRoot

> **result.stateRoot**: `bigint` = `RollupMerkleTree.EMPTY_ROOT`
