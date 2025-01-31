---
title: BlockProverState
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / BlockProverState

# Interface: BlockProverState

Defined in: [packages/protocol/src/prover/block/BlockProver.ts:98](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/prover/block/BlockProver.ts#L98)

## Properties

### blockHashRoot

> **blockHashRoot**: `Field`

Defined in: [packages/protocol/src/prover/block/BlockProver.ts:120](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/prover/block/BlockProver.ts#L120)

The root of the merkle tree encoding all block hashes,
see `BlockHashMerkleTree`

***

### eternalTransactionsHash

> **eternalTransactionsHash**: `Field`

Defined in: [packages/protocol/src/prover/block/BlockProver.ts:127](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/prover/block/BlockProver.ts#L127)

A variant of the transactionsHash that is never reset.
Thought for usage in the sequence state mempool.
In comparison, transactionsHash restarts at 0 for every new block

***

### incomingMessagesHash

> **incomingMessagesHash**: `Field`

Defined in: [packages/protocol/src/prover/block/BlockProver.ts:129](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/prover/block/BlockProver.ts#L129)

***

### networkStateHash

> **networkStateHash**: `Field`

Defined in: [packages/protocol/src/prover/block/BlockProver.ts:114](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/prover/block/BlockProver.ts#L114)

The network state which gives access to values such as blockHeight
This value is the same for the whole batch (L2 block)

***

### stateRoot

> **stateRoot**: `Field`

Defined in: [packages/protocol/src/prover/block/BlockProver.ts:102](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/prover/block/BlockProver.ts#L102)

The current state root of the block prover

***

### transactionsHash

> **transactionsHash**: `Field`

Defined in: [packages/protocol/src/prover/block/BlockProver.ts:108](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/prover/block/BlockProver.ts#L108)

The current commitment of the transaction-list which
will at the end equal the bundle hash
