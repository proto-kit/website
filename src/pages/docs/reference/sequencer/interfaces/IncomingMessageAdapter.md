---
title: IncomingMessageAdapter
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / IncomingMessageAdapter

# Interface: IncomingMessageAdapter

Defined in: [packages/sequencer/src/settlement/messages/IncomingMessageAdapter.ts:11](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/settlement/messages/IncomingMessageAdapter.ts#L11)

An interface provided by the BaseLayer via DependencyFactory,
which implements a function that allows us to retrieve
unconsumed incoming messages from the BaseLayer
(Dispatched Deposit Actions for example)

## Properties

### getPendingMessages()

> **getPendingMessages**: (`address`, `params`) => `Promise`\<\{ `from`: `string`; `messages`: [`PendingTransaction`](../classes/PendingTransaction.md)[]; `to`: `string`; \}\>

Defined in: [packages/sequencer/src/settlement/messages/IncomingMessageAdapter.ts:12](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/settlement/messages/IncomingMessageAdapter.ts#L12)

#### Parameters

##### address

`PublicKey`

##### params

###### fromActionHash

`string`

###### fromL1BlockHeight

`number`

###### toActionHash

`string`

#### Returns

`Promise`\<\{ `from`: `string`; `messages`: [`PendingTransaction`](../classes/PendingTransaction.md)[]; `to`: `string`; \}\>
