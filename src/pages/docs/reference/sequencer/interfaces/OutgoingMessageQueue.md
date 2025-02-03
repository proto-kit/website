---
title: OutgoingMessageQueue
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / OutgoingMessageQueue

# Interface: OutgoingMessageQueue

Defined in: [packages/sequencer/src/settlement/messages/WithdrawalQueue.ts:37](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/settlement/messages/WithdrawalQueue.ts#L37)

This interface allows the SettlementModule to retrieve information about
pending L2-dispatched (outgoing) messages that it can then use to roll
them up on the L1 contract.

In the future, this interface should be flexibly typed so that the
outgoing message type is not limited to Withdrawals

## Properties

### length()

> **length**: () => `number`

Defined in: [packages/sequencer/src/settlement/messages/WithdrawalQueue.ts:40](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/settlement/messages/WithdrawalQueue.ts#L40)

#### Returns

`number`

***

### peek()

> **peek**: (`num`) => [`OutgoingMessage`](OutgoingMessage.md)\<[`Withdrawal`](../../protocol/classes/Withdrawal.md)\>[]

Defined in: [packages/sequencer/src/settlement/messages/WithdrawalQueue.ts:38](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/settlement/messages/WithdrawalQueue.ts#L38)

#### Parameters

##### num

`number`

#### Returns

[`OutgoingMessage`](OutgoingMessage.md)\<[`Withdrawal`](../../protocol/classes/Withdrawal.md)\>[]

***

### pop()

> **pop**: (`num`) => [`OutgoingMessage`](OutgoingMessage.md)\<[`Withdrawal`](../../protocol/classes/Withdrawal.md)\>[]

Defined in: [packages/sequencer/src/settlement/messages/WithdrawalQueue.ts:39](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/settlement/messages/WithdrawalQueue.ts#L39)

#### Parameters

##### num

`number`

#### Returns

[`OutgoingMessage`](OutgoingMessage.md)\<[`Withdrawal`](../../protocol/classes/Withdrawal.md)\>[]
