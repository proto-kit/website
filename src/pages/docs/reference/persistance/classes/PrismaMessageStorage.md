---
title: PrismaMessageStorage
---

[**@proto-kit/persistance**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/persistance](../README.md) / PrismaMessageStorage

# Class: PrismaMessageStorage

Defined in: [packages/persistance/src/services/prisma/PrismaMessageStorage.ts:9](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/persistance/src/services/prisma/PrismaMessageStorage.ts#L9)

Interface to store Messages previously fetched by a IncomingMessageadapter

## Implements

- [`MessageStorage`](../../sequencer/interfaces/MessageStorage.md)

## Constructors

### new PrismaMessageStorage()

> **new PrismaMessageStorage**(`connection`, `transactionMapper`): [`PrismaMessageStorage`](PrismaMessageStorage.md)

Defined in: [packages/persistance/src/services/prisma/PrismaMessageStorage.ts:10](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/persistance/src/services/prisma/PrismaMessageStorage.ts#L10)

#### Parameters

##### connection

[`PrismaConnection`](../interfaces/PrismaConnection.md)

##### transactionMapper

[`TransactionMapper`](TransactionMapper.md)

#### Returns

[`PrismaMessageStorage`](PrismaMessageStorage.md)

## Methods

### getMessages()

> **getMessages**(`fromMessageHash`): `Promise`\<[`PendingTransaction`](../../sequencer/classes/PendingTransaction.md)[]\>

Defined in: [packages/persistance/src/services/prisma/PrismaMessageStorage.ts:15](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/persistance/src/services/prisma/PrismaMessageStorage.ts#L15)

#### Parameters

##### fromMessageHash

`string`

#### Returns

`Promise`\<[`PendingTransaction`](../../sequencer/classes/PendingTransaction.md)[]\>

#### Implementation of

[`MessageStorage`](../../sequencer/interfaces/MessageStorage.md).[`getMessages`](../../sequencer/interfaces/MessageStorage.md#getmessages)

***

### pushMessages()

> **pushMessages**(`fromMessageHash`, `toMessageHash`, `messages`): `Promise`\<`void`\>

Defined in: [packages/persistance/src/services/prisma/PrismaMessageStorage.ts:44](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/persistance/src/services/prisma/PrismaMessageStorage.ts#L44)

#### Parameters

##### fromMessageHash

`string`

##### toMessageHash

`string`

##### messages

[`PendingTransaction`](../../sequencer/classes/PendingTransaction.md)[]

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`MessageStorage`](../../sequencer/interfaces/MessageStorage.md).[`pushMessages`](../../sequencer/interfaces/MessageStorage.md#pushmessages)
