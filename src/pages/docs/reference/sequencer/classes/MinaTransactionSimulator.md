---
title: MinaTransactionSimulator
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / MinaTransactionSimulator

# Class: MinaTransactionSimulator

Defined in: [packages/sequencer/src/settlement/transactions/MinaTransactionSimulator.ts:32](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/settlement/transactions/MinaTransactionSimulator.ts#L32)

Custom variant of the ocaml ledger implementation that applies account updates
to a ledger state. It isn't feature complete and is mainly used to update the
o1js internal account cache to create batched transactions

## Constructors

### new MinaTransactionSimulator()

> **new MinaTransactionSimulator**(`baseLayer`): [`MinaTransactionSimulator`](MinaTransactionSimulator.md)

Defined in: [packages/sequencer/src/settlement/transactions/MinaTransactionSimulator.ts:37](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/settlement/transactions/MinaTransactionSimulator.ts#L37)

#### Parameters

##### baseLayer

[`MinaBaseLayer`](MinaBaseLayer.md)

#### Returns

[`MinaTransactionSimulator`](MinaTransactionSimulator.md)

## Methods

### apply()

> **apply**(`account`, `au`): `void`

Defined in: [packages/sequencer/src/settlement/transactions/MinaTransactionSimulator.ts:247](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/settlement/transactions/MinaTransactionSimulator.ts#L247)

#### Parameters

##### account

`Account`

##### au

`AccountUpdate`

#### Returns

`void`

***

### applyFeepayer()

> **applyFeepayer**(`account`, `feepayer`): `void`

Defined in: [packages/sequencer/src/settlement/transactions/MinaTransactionSimulator.ts:242](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/settlement/transactions/MinaTransactionSimulator.ts#L242)

#### Parameters

##### account

`Account`

##### feepayer

`FeePayerUnsigned`

#### Returns

`void`

***

### applyTransaction()

> **applyTransaction**(`tx`): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/settlement/transactions/MinaTransactionSimulator.ts:86](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/settlement/transactions/MinaTransactionSimulator.ts#L86)

#### Parameters

##### tx

`Transaction`\<`boolean`, `boolean`\>

#### Returns

`Promise`\<`void`\>

***

### checkFeePayer()

> **checkFeePayer**(`account`, `feepayer`): `boolean`

Defined in: [packages/sequencer/src/settlement/transactions/MinaTransactionSimulator.ts:199](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/settlement/transactions/MinaTransactionSimulator.ts#L199)

#### Parameters

##### account

`Account`

##### feepayer

`FeePayerUnsigned`

#### Returns

`boolean`

***

### checkPreconditions()

> **checkPreconditions**(`account`, `au`): `string`[]

Defined in: [packages/sequencer/src/settlement/transactions/MinaTransactionSimulator.ts:206](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/settlement/transactions/MinaTransactionSimulator.ts#L206)

#### Parameters

##### account

`Account`

##### au

`AccountUpdate`

#### Returns

`string`[]

***

### getAccount()

> **getAccount**(`publicKey`, `tokenId`?): `Promise`\<`Account`\>

Defined in: [packages/sequencer/src/settlement/transactions/MinaTransactionSimulator.ts:142](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/settlement/transactions/MinaTransactionSimulator.ts#L142)

#### Parameters

##### publicKey

`PublicKey`

##### tokenId?

`Field`

#### Returns

`Promise`\<`Account`\>

***

### getAccounts()

> **getAccounts**(`tx`): `Promise`\<`Account`[]\>

Defined in: [packages/sequencer/src/settlement/transactions/MinaTransactionSimulator.ts:80](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/settlement/transactions/MinaTransactionSimulator.ts#L80)

#### Parameters

##### tx

`Transaction`\<`boolean`, `boolean`\>

#### Returns

`Promise`\<`Account`[]\>

***

### reloadAccount()

> **reloadAccount**(`publicKey`, `tokenId`?): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/settlement/transactions/MinaTransactionSimulator.ts:163](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/settlement/transactions/MinaTransactionSimulator.ts#L163)

#### Parameters

##### publicKey

`PublicKey`

##### tokenId?

`Field`

#### Returns

`Promise`\<`void`\>
