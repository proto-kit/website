---
title: MinaIncomingMessageAdapter
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / MinaIncomingMessageAdapter

# Class: MinaIncomingMessageAdapter

Defined in: [packages/sequencer/src/settlement/messages/MinaIncomingMessageAdapter.ts:34](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/settlement/messages/MinaIncomingMessageAdapter.ts#L34)

IncomingMessageAdapter implementation for a Mina Baselayer
based on decoding L1-dispatched actions

## Implements

- [`IncomingMessageAdapter`](../interfaces/IncomingMessageAdapter.md)

## Constructors

### new MinaIncomingMessageAdapter()

> **new MinaIncomingMessageAdapter**(`baseLayer`, `runtime`, `protocol`): [`MinaIncomingMessageAdapter`](MinaIncomingMessageAdapter.md)

Defined in: [packages/sequencer/src/settlement/messages/MinaIncomingMessageAdapter.ts:35](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/settlement/messages/MinaIncomingMessageAdapter.ts#L35)

#### Parameters

##### baseLayer

[`MinaBaseLayer`](MinaBaseLayer.md)

##### runtime

[`Runtime`](../../module/classes/Runtime.md)\<[`RuntimeModulesRecord`](../../module/type-aliases/RuntimeModulesRecord.md)\>

##### protocol

[`Protocol`](../../protocol/classes/Protocol.md)\<`any`\>

#### Returns

[`MinaIncomingMessageAdapter`](MinaIncomingMessageAdapter.md)

## Methods

### getPendingMessages()

> **getPendingMessages**(`address`, `params`): `Promise`\<\{ `from`: `string`; `messages`: [`PendingTransaction`](PendingTransaction.md)[]; `to`: `string`; \}\>

Defined in: [packages/sequencer/src/settlement/messages/MinaIncomingMessageAdapter.ts:99](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/settlement/messages/MinaIncomingMessageAdapter.ts#L99)

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

`Promise`\<\{ `from`: `string`; `messages`: [`PendingTransaction`](PendingTransaction.md)[]; `to`: `string`; \}\>

#### Implementation of

[`IncomingMessageAdapter`](../interfaces/IncomingMessageAdapter.md).[`getPendingMessages`](../interfaces/IncomingMessageAdapter.md#getpendingmessages)
