---
title: AppChainTransaction
---

[**@proto-kit/sdk**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sdk](../README.md) / AppChainTransaction

# Class: AppChainTransaction

Defined in: [sdk/src/transaction/AppChainTransaction.ts:6](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/transaction/AppChainTransaction.ts#L6)

## Constructors

### new AppChainTransaction()

> **new AppChainTransaction**(`signer`, `transactionSender`): [`AppChainTransaction`](AppChainTransaction.md)

Defined in: [sdk/src/transaction/AppChainTransaction.ts:9](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/transaction/AppChainTransaction.ts#L9)

#### Parameters

##### signer

[`Signer`](../interfaces/Signer.md)

##### transactionSender

[`TransactionSender`](../interfaces/TransactionSender.md)

#### Returns

[`AppChainTransaction`](AppChainTransaction.md)

## Properties

### signer

> **signer**: [`Signer`](../interfaces/Signer.md)

Defined in: [sdk/src/transaction/AppChainTransaction.ts:10](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/transaction/AppChainTransaction.ts#L10)

***

### transaction?

> `optional` **transaction**: [`PendingTransaction`](../../sequencer/classes/PendingTransaction.md) \| [`UnsignedTransaction`](../../sequencer/classes/UnsignedTransaction.md)

Defined in: [sdk/src/transaction/AppChainTransaction.ts:7](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/transaction/AppChainTransaction.ts#L7)

***

### transactionSender

> **transactionSender**: [`TransactionSender`](../interfaces/TransactionSender.md)

Defined in: [sdk/src/transaction/AppChainTransaction.ts:11](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/transaction/AppChainTransaction.ts#L11)

## Methods

### hasPendingTransaction()

> **hasPendingTransaction**(`transaction`?): `asserts transaction is PendingTransaction`

Defined in: [sdk/src/transaction/AppChainTransaction.ts:27](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/transaction/AppChainTransaction.ts#L27)

#### Parameters

##### transaction?

[`PendingTransaction`](../../sequencer/classes/PendingTransaction.md) | [`UnsignedTransaction`](../../sequencer/classes/UnsignedTransaction.md)

#### Returns

`asserts transaction is PendingTransaction`

***

### hasUnsignedTransaction()

> **hasUnsignedTransaction**(`transaction`?): `asserts transaction is UnsignedTransaction`

Defined in: [sdk/src/transaction/AppChainTransaction.ts:18](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/transaction/AppChainTransaction.ts#L18)

#### Parameters

##### transaction?

[`PendingTransaction`](../../sequencer/classes/PendingTransaction.md) | [`UnsignedTransaction`](../../sequencer/classes/UnsignedTransaction.md)

#### Returns

`asserts transaction is UnsignedTransaction`

***

### send()

> **send**(): `Promise`\<`void`\>

Defined in: [sdk/src/transaction/AppChainTransaction.ts:48](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/transaction/AppChainTransaction.ts#L48)

#### Returns

`Promise`\<`void`\>

***

### sign()

> **sign**(): `Promise`\<`void`\>

Defined in: [sdk/src/transaction/AppChainTransaction.ts:36](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/transaction/AppChainTransaction.ts#L36)

#### Returns

`Promise`\<`void`\>

***

### withUnsignedTransaction()

> **withUnsignedTransaction**(`unsignedTransaction`): `void`

Defined in: [sdk/src/transaction/AppChainTransaction.ts:14](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/transaction/AppChainTransaction.ts#L14)

#### Parameters

##### unsignedTransaction

[`UnsignedTransaction`](../../sequencer/classes/UnsignedTransaction.md)

#### Returns

`void`
