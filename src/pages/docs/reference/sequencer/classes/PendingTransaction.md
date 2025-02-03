---
title: PendingTransaction
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / PendingTransaction

# Class: PendingTransaction

Defined in: [packages/sequencer/src/mempool/PendingTransaction.ts:123](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/mempool/PendingTransaction.ts#L123)

## Extends

- [`UnsignedTransaction`](UnsignedTransaction.md)

## Constructors

### new PendingTransaction()

> **new PendingTransaction**(`data`): [`PendingTransaction`](PendingTransaction.md)

Defined in: [packages/sequencer/src/mempool/PendingTransaction.ts:140](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/mempool/PendingTransaction.ts#L140)

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

###### signature

`Signature`

#### Returns

[`PendingTransaction`](PendingTransaction.md)

#### Overrides

[`UnsignedTransaction`](UnsignedTransaction.md).[`constructor`](UnsignedTransaction.md#constructors)

## Properties

### argsFields

> **argsFields**: `Field`[]

Defined in: [packages/sequencer/src/mempool/PendingTransaction.ts:37](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/mempool/PendingTransaction.ts#L37)

#### Inherited from

[`UnsignedTransaction`](UnsignedTransaction.md).[`argsFields`](UnsignedTransaction.md#argsfields-1)

***

### auxiliaryData

> **auxiliaryData**: `string`[]

Defined in: [packages/sequencer/src/mempool/PendingTransaction.ts:39](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/mempool/PendingTransaction.ts#L39)

Used to transport non-provable data, mainly proof data for now
These values will not be part of the signature message or transaction hash

#### Inherited from

[`UnsignedTransaction`](UnsignedTransaction.md).[`auxiliaryData`](UnsignedTransaction.md#auxiliarydata-1)

***

### isMessage

> **isMessage**: `boolean`

Defined in: [packages/sequencer/src/mempool/PendingTransaction.ts:41](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/mempool/PendingTransaction.ts#L41)

#### Inherited from

[`UnsignedTransaction`](UnsignedTransaction.md).[`isMessage`](UnsignedTransaction.md#ismessage-1)

***

### methodId

> **methodId**: `Field`

Defined in: [packages/sequencer/src/mempool/PendingTransaction.ts:31](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/mempool/PendingTransaction.ts#L31)

#### Inherited from

[`UnsignedTransaction`](UnsignedTransaction.md).[`methodId`](UnsignedTransaction.md#methodid-1)

***

### nonce

> **nonce**: `UInt64`

Defined in: [packages/sequencer/src/mempool/PendingTransaction.ts:33](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/mempool/PendingTransaction.ts#L33)

#### Inherited from

[`UnsignedTransaction`](UnsignedTransaction.md).[`nonce`](UnsignedTransaction.md#nonce-1)

***

### sender

> **sender**: `PublicKey`

Defined in: [packages/sequencer/src/mempool/PendingTransaction.ts:35](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/mempool/PendingTransaction.ts#L35)

#### Inherited from

[`UnsignedTransaction`](UnsignedTransaction.md).[`sender`](UnsignedTransaction.md#sender-1)

***

### signature

> **signature**: `Signature`

Defined in: [packages/sequencer/src/mempool/PendingTransaction.ts:138](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/mempool/PendingTransaction.ts#L138)

## Methods

### argsHash()

> **argsHash**(): `Field`

Defined in: [packages/sequencer/src/mempool/PendingTransaction.ts:59](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/mempool/PendingTransaction.ts#L59)

#### Returns

`Field`

#### Inherited from

[`UnsignedTransaction`](UnsignedTransaction.md).[`argsHash`](UnsignedTransaction.md#argshash)

***

### getSignatureData()

> **getSignatureData**(): `Field`[]

Defined in: [packages/sequencer/src/mempool/PendingTransaction.ts:72](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/mempool/PendingTransaction.ts#L72)

#### Returns

`Field`[]

#### Inherited from

[`UnsignedTransaction`](UnsignedTransaction.md).[`getSignatureData`](UnsignedTransaction.md#getsignaturedata)

***

### hash()

> **hash**(): `Field`

Defined in: [packages/sequencer/src/mempool/PendingTransaction.ts:63](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/mempool/PendingTransaction.ts#L63)

#### Returns

`Field`

#### Inherited from

[`UnsignedTransaction`](UnsignedTransaction.md).[`hash`](UnsignedTransaction.md#hash)

***

### sign()

> **sign**(`privateKey`): [`PendingTransaction`](PendingTransaction.md)

Defined in: [packages/sequencer/src/mempool/PendingTransaction.ts:80](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/mempool/PendingTransaction.ts#L80)

#### Parameters

##### privateKey

`PrivateKey`

#### Returns

[`PendingTransaction`](PendingTransaction.md)

#### Inherited from

[`UnsignedTransaction`](UnsignedTransaction.md).[`sign`](UnsignedTransaction.md#sign)

***

### signed()

> **signed**(`signature`): [`PendingTransaction`](PendingTransaction.md)

Defined in: [packages/sequencer/src/mempool/PendingTransaction.ts:95](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/mempool/PendingTransaction.ts#L95)

#### Parameters

##### signature

`Signature`

#### Returns

[`PendingTransaction`](PendingTransaction.md)

#### Inherited from

[`UnsignedTransaction`](UnsignedTransaction.md).[`signed`](UnsignedTransaction.md#signed)

***

### toJSON()

> **toJSON**(): `PendingTransactionJSONType`

Defined in: [packages/sequencer/src/mempool/PendingTransaction.ts:153](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/mempool/PendingTransaction.ts#L153)

#### Returns

`PendingTransactionJSONType`

***

### toProtocolTransaction()

> **toProtocolTransaction**(): [`SignedTransaction`](../../protocol/classes/SignedTransaction.md)

Defined in: [packages/sequencer/src/mempool/PendingTransaction.ts:171](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/mempool/PendingTransaction.ts#L171)

#### Returns

[`SignedTransaction`](../../protocol/classes/SignedTransaction.md)

***

### toRuntimeTransaction()

> **toRuntimeTransaction**(): [`RuntimeTransaction`](../../protocol/classes/RuntimeTransaction.md)

Defined in: [packages/sequencer/src/mempool/PendingTransaction.ts:85](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/mempool/PendingTransaction.ts#L85)

#### Returns

[`RuntimeTransaction`](../../protocol/classes/RuntimeTransaction.md)

#### Inherited from

[`UnsignedTransaction`](UnsignedTransaction.md).[`toRuntimeTransaction`](UnsignedTransaction.md#toruntimetransaction)

***

### fromJSON()

> `static` **fromJSON**(`object`): [`PendingTransaction`](PendingTransaction.md)

Defined in: [packages/sequencer/src/mempool/PendingTransaction.ts:124](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/mempool/PendingTransaction.ts#L124)

#### Parameters

##### object

`PendingTransactionJSONType`

#### Returns

[`PendingTransaction`](PendingTransaction.md)
