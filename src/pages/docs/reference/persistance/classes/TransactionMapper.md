---
title: TransactionMapper
---

[**@proto-kit/persistance**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/persistance](../README.md) / TransactionMapper

# Class: TransactionMapper

Defined in: [packages/persistance/src/services/prisma/mappers/TransactionMapper.ts:19](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/persistance/src/services/prisma/mappers/TransactionMapper.ts#L19)

## Implements

- `ObjectMapper`\<[`PendingTransaction`](../../sequencer/classes/PendingTransaction.md), `DBTransaction`\>

## Constructors

### new TransactionMapper()

> **new TransactionMapper**(): [`TransactionMapper`](TransactionMapper.md)

#### Returns

[`TransactionMapper`](TransactionMapper.md)

## Methods

### mapIn()

> **mapIn**(`input`): [`PendingTransaction`](../../sequencer/classes/PendingTransaction.md)

Defined in: [packages/persistance/src/services/prisma/mappers/TransactionMapper.ts:22](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/persistance/src/services/prisma/mappers/TransactionMapper.ts#L22)

#### Parameters

##### input

###### argsFields

`string`[]

###### auxiliaryData

`string`[]

###### hash

`string`

###### isMessage

`boolean`

###### methodId

`string`

###### nonce

`string`

###### sender

`string`

###### signature_r

`string`

###### signature_s

`string`

#### Returns

[`PendingTransaction`](../../sequencer/classes/PendingTransaction.md)

#### Implementation of

`ObjectMapper.mapIn`

***

### mapOut()

> **mapOut**(`input`): `object`

Defined in: [packages/persistance/src/services/prisma/mappers/TransactionMapper.ts:32](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/persistance/src/services/prisma/mappers/TransactionMapper.ts#L32)

#### Parameters

##### input

[`PendingTransaction`](../../sequencer/classes/PendingTransaction.md)

#### Returns

`object`

##### argsFields

> **argsFields**: `string`[]

##### auxiliaryData

> **auxiliaryData**: `string`[]

##### hash

> **hash**: `string`

##### isMessage

> **isMessage**: `boolean`

##### methodId

> **methodId**: `string`

##### nonce

> **nonce**: `string`

##### sender

> **sender**: `string`

##### signature\_r

> **signature\_r**: `string`

##### signature\_s

> **signature\_s**: `string`

#### Implementation of

`ObjectMapper.mapOut`
