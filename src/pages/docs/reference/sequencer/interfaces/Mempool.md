---
title: Mempool
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / Mempool

# Interface: Mempool\<Events\>

Defined in: [packages/sequencer/src/mempool/Mempool.ts:9](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/mempool/Mempool.ts#L9)

## Extends

- [`EventEmittingComponent`](../../common/interfaces/EventEmittingComponent.md)\<`Events`\>

## Type Parameters

• **Events** *extends* [`MempoolEvents`](../type-aliases/MempoolEvents.md) = [`MempoolEvents`](../type-aliases/MempoolEvents.md)

## Properties

### add()

> **add**: (`tx`) => `Promise`\<`boolean`\>

Defined in: [packages/sequencer/src/mempool/Mempool.ts:15](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/mempool/Mempool.ts#L15)

Add a transaction to the mempool

#### Parameters

##### tx

[`PendingTransaction`](../classes/PendingTransaction.md)

#### Returns

`Promise`\<`boolean`\>

The new commitment to the mempool

***

### events

> **events**: [`EventEmitter`](../../common/classes/EventEmitter.md)\<`Events`\>

Defined in: packages/common/dist/events/EventEmittingComponent.d.ts:4

#### Inherited from

[`EventEmittingComponent`](../../common/interfaces/EventEmittingComponent.md).[`events`](../../common/interfaces/EventEmittingComponent.md#events)

***

### getTxs()

> **getTxs**: (`limit`?) => `Promise`\<[`PendingTransaction`](../classes/PendingTransaction.md)[]\>

Defined in: [packages/sequencer/src/mempool/Mempool.ts:20](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/mempool/Mempool.ts#L20)

Retrieve all transactions that are currently in the mempool

#### Parameters

##### limit?

`number`

#### Returns

`Promise`\<[`PendingTransaction`](../classes/PendingTransaction.md)[]\>
