---
title: MessageStorage
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / MessageStorage

# Interface: MessageStorage

Defined in: [packages/sequencer/src/storage/repositories/MessageStorage.ts:6](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/storage/repositories/MessageStorage.ts#L6)

Interface to store Messages previously fetched by a IncomingMessageadapter

## Properties

### getMessages()

> **getMessages**: (`fromMessagesHash`) => `Promise`\<[`PendingTransaction`](../classes/PendingTransaction.md)[]\>

Defined in: [packages/sequencer/src/storage/repositories/MessageStorage.ts:12](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/storage/repositories/MessageStorage.ts#L12)

#### Parameters

##### fromMessagesHash

`string`

#### Returns

`Promise`\<[`PendingTransaction`](../classes/PendingTransaction.md)[]\>

***

### pushMessages()

> **pushMessages**: (`fromMessagesHash`, `toMessagesHash`, `messages`) => `Promise`\<`void`\>

Defined in: [packages/sequencer/src/storage/repositories/MessageStorage.ts:7](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/storage/repositories/MessageStorage.ts#L7)

#### Parameters

##### fromMessagesHash

`string`

##### toMessagesHash

`string`

##### messages

[`PendingTransaction`](../classes/PendingTransaction.md)[]

#### Returns

`Promise`\<`void`\>
