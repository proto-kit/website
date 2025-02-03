---
title: TransactionObject
---

[**@proto-kit/api**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/api](../README.md) / TransactionObject

# Class: TransactionObject

Defined in: [api/src/graphql/modules/MempoolResolver.ts:39](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/api/src/graphql/modules/MempoolResolver.ts#L39)

## Constructors

### new TransactionObject()

> **new TransactionObject**(`hash`, `methodId`, `sender`, `nonce`, `signature`, `argsFields`, `auxiliaryData`, `isMessage`): [`TransactionObject`](TransactionObject.md)

Defined in: [api/src/graphql/modules/MempoolResolver.ts:88](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/api/src/graphql/modules/MempoolResolver.ts#L88)

#### Parameters

##### hash

`string`

##### methodId

`string`

##### sender

`string`

##### nonce

`string`

##### signature

[`Signature`](Signature.md)

##### argsFields

`string`[]

##### auxiliaryData

`string`[]

##### isMessage

`boolean`

#### Returns

[`TransactionObject`](TransactionObject.md)

## Properties

### argsFields

> **argsFields**: `string`[]

Defined in: [api/src/graphql/modules/MempoolResolver.ts:80](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/api/src/graphql/modules/MempoolResolver.ts#L80)

***

### auxiliaryData

> **auxiliaryData**: `string`[]

Defined in: [api/src/graphql/modules/MempoolResolver.ts:83](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/api/src/graphql/modules/MempoolResolver.ts#L83)

***

### hash

> **hash**: `string`

Defined in: [api/src/graphql/modules/MempoolResolver.ts:63](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/api/src/graphql/modules/MempoolResolver.ts#L63)

***

### isMessage

> **isMessage**: `boolean`

Defined in: [api/src/graphql/modules/MempoolResolver.ts:86](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/api/src/graphql/modules/MempoolResolver.ts#L86)

***

### methodId

> **methodId**: `string`

Defined in: [api/src/graphql/modules/MempoolResolver.ts:67](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/api/src/graphql/modules/MempoolResolver.ts#L67)

***

### nonce

> **nonce**: `string`

Defined in: [api/src/graphql/modules/MempoolResolver.ts:74](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/api/src/graphql/modules/MempoolResolver.ts#L74)

***

### sender

> **sender**: `string`

Defined in: [api/src/graphql/modules/MempoolResolver.ts:70](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/api/src/graphql/modules/MempoolResolver.ts#L70)

***

### signature

> **signature**: [`Signature`](Signature.md)

Defined in: [api/src/graphql/modules/MempoolResolver.ts:77](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/api/src/graphql/modules/MempoolResolver.ts#L77)

## Methods

### fromServiceLayerModel()

> `static` **fromServiceLayerModel**(`pt`): [`TransactionObject`](TransactionObject.md)

Defined in: [api/src/graphql/modules/MempoolResolver.ts:40](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/api/src/graphql/modules/MempoolResolver.ts#L40)

#### Parameters

##### pt

[`PendingTransaction`](../../sequencer/classes/PendingTransaction.md)

#### Returns

[`TransactionObject`](TransactionObject.md)
