---
title: InMemoryTransactionStorage
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / InMemoryTransactionStorage

# Class: InMemoryTransactionStorage

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryTransactionStorage.ts:14](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/storage/inmemory/InMemoryTransactionStorage.ts#L14)

## Implements

- [`TransactionStorage`](../interfaces/TransactionStorage.md)

## Constructors

### new InMemoryTransactionStorage()

> **new InMemoryTransactionStorage**(`blockStorage`, `batchStorage`): [`InMemoryTransactionStorage`](InMemoryTransactionStorage.md)

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryTransactionStorage.ts:19](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/storage/inmemory/InMemoryTransactionStorage.ts#L19)

#### Parameters

##### blockStorage

[`BlockStorage`](../interfaces/BlockStorage.md) & [`HistoricalBlockStorage`](../interfaces/HistoricalBlockStorage.md)

##### batchStorage

[`InMemoryBatchStorage`](InMemoryBatchStorage.md)

#### Returns

[`InMemoryTransactionStorage`](InMemoryTransactionStorage.md)

## Methods

### findTransaction()

> **findTransaction**(`hash`): `Promise`\<`undefined` \| \{ `batch`: `number`; `block`: `string`; `transaction`: [`PendingTransaction`](PendingTransaction.md); \}\>

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryTransactionStorage.ts:73](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/storage/inmemory/InMemoryTransactionStorage.ts#L73)

Finds a transaction by its hash.
It returns both pending transaction and already included transactions
In case the transaction has been included, it also returns the block hash
and batch number where applicable.

#### Parameters

##### hash

`string`

#### Returns

`Promise`\<`undefined` \| \{ `batch`: `number`; `block`: `string`; `transaction`: [`PendingTransaction`](PendingTransaction.md); \}\>

#### Implementation of

[`TransactionStorage`](../interfaces/TransactionStorage.md).[`findTransaction`](../interfaces/TransactionStorage.md#findtransaction)

***

### getPendingUserTransactions()

> **getPendingUserTransactions**(): `Promise`\<[`PendingTransaction`](PendingTransaction.md)[]\>

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryTransactionStorage.ts:25](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/storage/inmemory/InMemoryTransactionStorage.ts#L25)

#### Returns

`Promise`\<[`PendingTransaction`](PendingTransaction.md)[]\>

#### Implementation of

[`TransactionStorage`](../interfaces/TransactionStorage.md).[`getPendingUserTransactions`](../interfaces/TransactionStorage.md#getpendingusertransactions)

***

### pushUserTransaction()

> **pushUserTransaction**(`tx`): `Promise`\<`boolean`\>

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryTransactionStorage.ts:46](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/storage/inmemory/InMemoryTransactionStorage.ts#L46)

#### Parameters

##### tx

[`PendingTransaction`](PendingTransaction.md)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`TransactionStorage`](../interfaces/TransactionStorage.md).[`pushUserTransaction`](../interfaces/TransactionStorage.md#pushusertransaction)
