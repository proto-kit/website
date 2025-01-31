---
title: InMemoryMessageStorage
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / InMemoryMessageStorage

# Class: InMemoryMessageStorage

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryMessageStorage.ts:7](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/storage/inmemory/InMemoryMessageStorage.ts#L7)

Interface to store Messages previously fetched by a IncomingMessageadapter

## Implements

- [`MessageStorage`](../interfaces/MessageStorage.md)

## Constructors

### new InMemoryMessageStorage()

> **new InMemoryMessageStorage**(): [`InMemoryMessageStorage`](InMemoryMessageStorage.md)

#### Returns

[`InMemoryMessageStorage`](InMemoryMessageStorage.md)

## Methods

### getMessages()

> **getMessages**(`fromMessagesHash`): `Promise`\<[`PendingTransaction`](PendingTransaction.md)[]\>

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryMessageStorage.ts:10](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/storage/inmemory/InMemoryMessageStorage.ts#L10)

#### Parameters

##### fromMessagesHash

`string`

#### Returns

`Promise`\<[`PendingTransaction`](PendingTransaction.md)[]\>

#### Implementation of

[`MessageStorage`](../interfaces/MessageStorage.md).[`getMessages`](../interfaces/MessageStorage.md#getmessages)

***

### pushMessages()

> **pushMessages**(`fromMessagesHash`, `toMessagesHash`, `messages`): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryMessageStorage.ts:16](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/storage/inmemory/InMemoryMessageStorage.ts#L16)

#### Parameters

##### fromMessagesHash

`string`

##### toMessagesHash

`string`

##### messages

[`PendingTransaction`](PendingTransaction.md)[]

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`MessageStorage`](../interfaces/MessageStorage.md).[`pushMessages`](../interfaces/MessageStorage.md#pushmessages)
