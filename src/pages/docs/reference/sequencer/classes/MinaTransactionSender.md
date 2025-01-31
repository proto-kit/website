---
title: MinaTransactionSender
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / MinaTransactionSender

# Class: MinaTransactionSender

Defined in: [packages/sequencer/src/settlement/transactions/MinaTransactionSender.ts:29](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/settlement/transactions/MinaTransactionSender.ts#L29)

## Constructors

### new MinaTransactionSender()

> **new MinaTransactionSender**(`creator`, `provingTask`, `simulator`, `baseLayer`): [`MinaTransactionSender`](MinaTransactionSender.md)

Defined in: [packages/sequencer/src/settlement/transactions/MinaTransactionSender.ts:39](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/settlement/transactions/MinaTransactionSender.ts#L39)

#### Parameters

##### creator

[`FlowCreator`](FlowCreator.md)

##### provingTask

[`SettlementProvingTask`](SettlementProvingTask.md)

##### simulator

[`MinaTransactionSimulator`](MinaTransactionSimulator.md)

##### baseLayer

[`MinaBaseLayer`](MinaBaseLayer.md)

#### Returns

[`MinaTransactionSender`](MinaTransactionSender.md)

## Methods

### proveAndSendTransaction()

> **proveAndSendTransaction**(`transaction`, `waitOnStatus`): `Promise`\<[`EventListenable`](../../common/type-aliases/EventListenable.md)\<[`TxEvents`](../interfaces/TxEvents.md)\>\>

Defined in: [packages/sequencer/src/settlement/transactions/MinaTransactionSender.ts:116](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/settlement/transactions/MinaTransactionSender.ts#L116)

#### Parameters

##### transaction

`Transaction`\<`false`, `true`\>

##### waitOnStatus

`"sent"` | `"included"` | `"none"`

#### Returns

`Promise`\<[`EventListenable`](../../common/type-aliases/EventListenable.md)\<[`TxEvents`](../interfaces/TxEvents.md)\>\>
