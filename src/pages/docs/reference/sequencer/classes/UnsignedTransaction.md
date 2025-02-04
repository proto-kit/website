---
title: UnsignedTransaction
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / UnsignedTransaction

# Class: UnsignedTransaction

Defined in: [packages/sequencer/src/mempool/PendingTransaction.ts:30](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/mempool/PendingTransaction.ts#L30)

## Extended by

- [`PendingTransaction`](PendingTransaction.md)

## Implements

- [`UnsignedTransactionBody`](../type-aliases/UnsignedTransactionBody.md)

## Constructors

### new UnsignedTransaction()

> **new UnsignedTransaction**(`data`): [`UnsignedTransaction`](UnsignedTransaction.md)

Defined in: [packages/sequencer/src/mempool/PendingTransaction.ts:43](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/mempool/PendingTransaction.ts#L43)

#### Parameters

##### data

###### argsFields

`Field`[]

###### auxiliaryData

`string`[]

###### isMessage

`boolean`

###### methodId

`Field`

###### nonce

`UInt64`

###### sender

`PublicKey`

#### Returns

[`UnsignedTransaction`](UnsignedTransaction.md)

## Properties

### argsFields

> **argsFields**: `Field`[]

Defined in: [packages/sequencer/src/mempool/PendingTransaction.ts:37](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/mempool/PendingTransaction.ts#L37)

#### Implementation of

`UnsignedTransactionBody.argsFields`

***

### auxiliaryData

> **auxiliaryData**: `string`[]

Defined in: [packages/sequencer/src/mempool/PendingTransaction.ts:39](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/mempool/PendingTransaction.ts#L39)

Used to transport non-provable data, mainly proof data for now
These values will not be part of the signature message or transaction hash

#### Implementation of

`UnsignedTransactionBody.auxiliaryData`

***

### isMessage

> **isMessage**: `boolean`

Defined in: [packages/sequencer/src/mempool/PendingTransaction.ts:41](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/mempool/PendingTransaction.ts#L41)

#### Implementation of

`UnsignedTransactionBody.isMessage`

***

### methodId

> **methodId**: `Field`

Defined in: [packages/sequencer/src/mempool/PendingTransaction.ts:31](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/mempool/PendingTransaction.ts#L31)

#### Implementation of

`UnsignedTransactionBody.methodId`

***

### nonce

> **nonce**: `UInt64`

Defined in: [packages/sequencer/src/mempool/PendingTransaction.ts:33](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/mempool/PendingTransaction.ts#L33)

#### Implementation of

`UnsignedTransactionBody.nonce`

***

### sender

> **sender**: `PublicKey`

Defined in: [packages/sequencer/src/mempool/PendingTransaction.ts:35](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/mempool/PendingTransaction.ts#L35)

#### Implementation of

`UnsignedTransactionBody.sender`

## Methods

### argsHash()

> **argsHash**(): `Field`

Defined in: [packages/sequencer/src/mempool/PendingTransaction.ts:59](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/mempool/PendingTransaction.ts#L59)

#### Returns

`Field`

***

### getSignatureData()

> **getSignatureData**(): `Field`[]

Defined in: [packages/sequencer/src/mempool/PendingTransaction.ts:72](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/mempool/PendingTransaction.ts#L72)

#### Returns

`Field`[]

***

### hash()

> **hash**(): `Field`

Defined in: [packages/sequencer/src/mempool/PendingTransaction.ts:63](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/mempool/PendingTransaction.ts#L63)

#### Returns

`Field`

***

### sign()

> **sign**(`privateKey`): [`PendingTransaction`](PendingTransaction.md)

Defined in: [packages/sequencer/src/mempool/PendingTransaction.ts:80](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/mempool/PendingTransaction.ts#L80)

#### Parameters

##### privateKey

`PrivateKey`

#### Returns

[`PendingTransaction`](PendingTransaction.md)

***

### signed()

> **signed**(`signature`): [`PendingTransaction`](PendingTransaction.md)

Defined in: [packages/sequencer/src/mempool/PendingTransaction.ts:95](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/mempool/PendingTransaction.ts#L95)

#### Parameters

##### signature

`Signature`

#### Returns

[`PendingTransaction`](PendingTransaction.md)

***

### toRuntimeTransaction()

> **toRuntimeTransaction**(): [`RuntimeTransaction`](../../protocol/classes/RuntimeTransaction.md)

Defined in: [packages/sequencer/src/mempool/PendingTransaction.ts:85](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/mempool/PendingTransaction.ts#L85)

#### Returns

[`RuntimeTransaction`](../../protocol/classes/RuntimeTransaction.md)
