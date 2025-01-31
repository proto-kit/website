---
title: PrismaTransactionStorage
---

[**@proto-kit/persistance**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/persistance](../README.md) / PrismaTransactionStorage

# Class: PrismaTransactionStorage

Defined in: [packages/persistance/src/services/prisma/PrismaTransactionStorage.ts:9](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/PrismaTransactionStorage.ts#L9)

## Implements

- [`TransactionStorage`](../../sequencer/interfaces/TransactionStorage.md)

## Constructors

### new PrismaTransactionStorage()

> **new PrismaTransactionStorage**(`connection`, `transactionMapper`): [`PrismaTransactionStorage`](PrismaTransactionStorage.md)

Defined in: [packages/persistance/src/services/prisma/PrismaTransactionStorage.ts:10](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/PrismaTransactionStorage.ts#L10)

#### Parameters

##### connection

[`PrismaConnection`](../interfaces/PrismaConnection.md)

##### transactionMapper

[`TransactionMapper`](TransactionMapper.md)

#### Returns

[`PrismaTransactionStorage`](PrismaTransactionStorage.md)

## Methods

### findTransaction()

> **findTransaction**(`hash`): `Promise`\<`undefined` \| \{ `batch`: `number`; `block`: `string`; `transaction`: [`PendingTransaction`](../../sequencer/classes/PendingTransaction.md); \}\>

Defined in: [packages/persistance/src/services/prisma/PrismaTransactionStorage.ts:42](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/PrismaTransactionStorage.ts#L42)

Finds a transaction by its hash.
It returns both pending transaction and already included transactions
In case the transaction has been included, it also returns the block hash
and batch number where applicable.

#### Parameters

##### hash

`string`

#### Returns

`Promise`\<`undefined` \| \{ `batch`: `number`; `block`: `string`; `transaction`: [`PendingTransaction`](../../sequencer/classes/PendingTransaction.md); \}\>

#### Implementation of

[`TransactionStorage`](../../sequencer/interfaces/TransactionStorage.md).[`findTransaction`](../../sequencer/interfaces/TransactionStorage.md#findtransaction)

***

### getPendingUserTransactions()

> **getPendingUserTransactions**(): `Promise`\<[`PendingTransaction`](../../sequencer/classes/PendingTransaction.md)[]\>

Defined in: [packages/persistance/src/services/prisma/PrismaTransactionStorage.ts:15](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/PrismaTransactionStorage.ts#L15)

#### Returns

`Promise`\<[`PendingTransaction`](../../sequencer/classes/PendingTransaction.md)[]\>

#### Implementation of

[`TransactionStorage`](../../sequencer/interfaces/TransactionStorage.md).[`getPendingUserTransactions`](../../sequencer/interfaces/TransactionStorage.md#getpendingusertransactions)

***

### pushUserTransaction()

> **pushUserTransaction**(`tx`): `Promise`\<`boolean`\>

Defined in: [packages/persistance/src/services/prisma/PrismaTransactionStorage.ts:31](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/PrismaTransactionStorage.ts#L31)

#### Parameters

##### tx

[`PendingTransaction`](../../sequencer/classes/PendingTransaction.md)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`TransactionStorage`](../../sequencer/interfaces/TransactionStorage.md).[`pushUserTransaction`](../../sequencer/interfaces/TransactionStorage.md#pushusertransaction)
