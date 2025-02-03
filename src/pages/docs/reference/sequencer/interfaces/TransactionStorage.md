---
title: TransactionStorage
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / TransactionStorage

# Interface: TransactionStorage

Defined in: [packages/sequencer/src/storage/repositories/TransactionStorage.ts:3](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/repositories/TransactionStorage.ts#L3)

## Properties

### findTransaction()

> **findTransaction**: (`hash`) => `Promise`\<`undefined` \| \{ `batch`: `number`; `block`: `string`; `transaction`: [`PendingTransaction`](../classes/PendingTransaction.md); \}\>

Defined in: [packages/sequencer/src/storage/repositories/TransactionStorage.ts:15](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/repositories/TransactionStorage.ts#L15)

Finds a transaction by its hash.
It returns both pending transaction and already included transactions
In case the transaction has been included, it also returns the block hash
and batch number where applicable.

#### Parameters

##### hash

`string`

#### Returns

`Promise`\<`undefined` \| \{ `batch`: `number`; `block`: `string`; `transaction`: [`PendingTransaction`](../classes/PendingTransaction.md); \}\>

***

### getPendingUserTransactions()

> **getPendingUserTransactions**: () => `Promise`\<[`PendingTransaction`](../classes/PendingTransaction.md)[]\>

Defined in: [packages/sequencer/src/storage/repositories/TransactionStorage.ts:6](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/repositories/TransactionStorage.ts#L6)

#### Returns

`Promise`\<[`PendingTransaction`](../classes/PendingTransaction.md)[]\>

***

### pushUserTransaction()

> **pushUserTransaction**: (`tx`) => `Promise`\<`boolean`\>

Defined in: [packages/sequencer/src/storage/repositories/TransactionStorage.ts:4](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/repositories/TransactionStorage.ts#L4)

#### Parameters

##### tx

[`PendingTransaction`](../classes/PendingTransaction.md)

#### Returns

`Promise`\<`boolean`\>
