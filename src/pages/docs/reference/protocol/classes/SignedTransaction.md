---
title: SignedTransaction
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / SignedTransaction

# Class: SignedTransaction

Defined in: [packages/protocol/src/model/transaction/SignedTransaction.ts:5](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/transaction/SignedTransaction.ts#L5)

## Extends

- `object`

## Constructors

### new SignedTransaction()

> **new SignedTransaction**(`value`): [`SignedTransaction`](SignedTransaction.md)

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### signature

`Signature` = `Signature`

###### transaction

[`RuntimeTransaction`](RuntimeTransaction.md) = `RuntimeTransaction`

#### Returns

[`SignedTransaction`](SignedTransaction.md)

#### Inherited from

`Struct({ transaction: RuntimeTransaction, signature: Signature, }).constructor`

## Properties

### signature

> **signature**: `Signature` = `Signature`

Defined in: [packages/protocol/src/model/transaction/SignedTransaction.ts:7](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/transaction/SignedTransaction.ts#L7)

#### Inherited from

`Struct({ transaction: RuntimeTransaction, signature: Signature, }).signature`

***

### transaction

> **transaction**: [`RuntimeTransaction`](RuntimeTransaction.md) = `RuntimeTransaction`

Defined in: [packages/protocol/src/model/transaction/SignedTransaction.ts:6](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/transaction/SignedTransaction.ts#L6)

#### Inherited from

`Struct({ transaction: RuntimeTransaction, signature: Signature, }).transaction`

***

### \_isStruct

> `static` **\_isStruct**: `true`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:104

#### Inherited from

`Struct({ transaction: RuntimeTransaction, signature: Signature, })._isStruct`

***

### check()

> `static` **check**: (`value`) => `void`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:60

Add assertions to the proof to check if `value` is a valid member of type `T`.
This function does not return anything, instead it creates any number of assertions to prove that `value` is a valid member of the type `T`.

For instance, calling check function on the type Bool asserts that the value of the element is either 1 or 0.

#### Parameters

##### value

the element of type `T` to put assertions on.

###### signature

`Signature` = `Signature`

###### transaction

[`RuntimeTransaction`](RuntimeTransaction.md) = `RuntimeTransaction`

#### Returns

`void`

#### Inherited from

`Struct({ transaction: RuntimeTransaction, signature: Signature, }).check`

***

### empty()

> `static` **empty**: () => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:113

#### Returns

`object`

##### signature

> **signature**: `Signature` = `Signature`

##### transaction

> **transaction**: [`RuntimeTransaction`](RuntimeTransaction.md) = `RuntimeTransaction`

#### Inherited from

`Struct({ transaction: RuntimeTransaction, signature: Signature, }).empty`

***

### fromFields()

> `static` **fromFields**: (`fields`, `aux`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:45

A function that returns an element of type `T` from the given provable and "auxiliary" data.

This function is the reverse operation of calling [toFields](SignedTransaction.md#tofields) and toAuxilary methods on an element of type `T`.

#### Parameters

##### fields

`Field`[]

an array of Field elements describing the provable data of the new `T` element.

##### aux

`any`[]

an array of any type describing the "auxiliary" data of the new `T` element, optional.

#### Returns

`object`

An element of type `T` generated from the given provable and "auxiliary" data.

##### signature

> **signature**: `Signature` = `Signature`

##### transaction

> **transaction**: [`RuntimeTransaction`](RuntimeTransaction.md) = `RuntimeTransaction`

#### Inherited from

`Struct({ transaction: RuntimeTransaction, signature: Signature, }).fromFields`

***

### fromJSON()

> `static` **fromJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:112

#### Parameters

##### x

###### signature

`any` = `Signature`

###### transaction

\{ `argsHash`: `string`; `methodId`: `string`; `nonce`: \{ `isSome`: `boolean`; `value`: `any`; \}; `sender`: \{ `isSome`: `boolean`; `value`: `any`; \}; \} = `RuntimeTransaction`

###### transaction.argsHash

`string` = `Field`

###### transaction.methodId

`string` = `Field`

###### transaction.nonce

\{ `isSome`: `boolean`; `value`: `any`; \} = `UInt64Option`

###### transaction.nonce.isSome

`boolean` = `Bool`

###### transaction.nonce.value

`any` = `valueType`

###### transaction.sender

\{ `isSome`: `boolean`; `value`: `any`; \} = `PublicKeyOption`

###### transaction.sender.isSome

`boolean` = `Bool`

###### transaction.sender.value

`any` = `valueType`

#### Returns

`object`

##### signature

> **signature**: `Signature` = `Signature`

##### transaction

> **transaction**: [`RuntimeTransaction`](RuntimeTransaction.md) = `RuntimeTransaction`

#### Inherited from

`Struct({ transaction: RuntimeTransaction, signature: Signature, }).fromJSON`

***

### fromValue

> `static` **fromValue**: (`x`) => `object` & (`value`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:68

Convert provable type from a normal JS type.

#### Inherited from

`Struct({ transaction: RuntimeTransaction, signature: Signature, }).fromValue`

***

### toAuxiliary()

> `static` **toAuxiliary**: (`value`?) => `any`[]

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:34

A function that takes `value` (optional), an element of type `T`, as argument and
returns an array of any type that make up the "auxiliary" (non-provable) data of `value`.

#### Parameters

##### value?

the element of type `T` to generate the auxiliary data array from, optional.
If not provided, a default value for auxiliary data is returned.

###### signature

`Signature` = `Signature`

###### transaction

[`RuntimeTransaction`](RuntimeTransaction.md) = `RuntimeTransaction`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

`Struct({ transaction: RuntimeTransaction, signature: Signature, }).toAuxiliary`

***

### toFields()

> `static` **toFields**: (`value`) => `Field`[]

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:24

A function that takes `value`, an element of type `T`, as argument and returns
an array of Field elements that make up the provable data of `value`.

#### Parameters

##### value

the element of type `T` to generate the Field array from.

###### signature

`Signature` = `Signature`

###### transaction

[`RuntimeTransaction`](RuntimeTransaction.md) = `RuntimeTransaction`

#### Returns

`Field`[]

A Field array describing how this `T` element is made up of Field elements.

#### Inherited from

`Struct({ transaction: RuntimeTransaction, signature: Signature, }).toFields`

***

### toInput()

> `static` **toInput**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:107

#### Parameters

##### x

###### signature

`Signature` = `Signature`

###### transaction

[`RuntimeTransaction`](RuntimeTransaction.md) = `RuntimeTransaction`

#### Returns

`object`

##### fields?

> `optional` **fields**: `Field`[]

##### packed?

> `optional` **packed**: \[`Field`, `number`\][]

#### Inherited from

`Struct({ transaction: RuntimeTransaction, signature: Signature, }).toInput`

***

### toJSON()

> `static` **toJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:111

#### Parameters

##### x

###### signature

`Signature` = `Signature`

###### transaction

[`RuntimeTransaction`](RuntimeTransaction.md) = `RuntimeTransaction`

#### Returns

`object`

##### signature

> **signature**: `any` = `Signature`

##### transaction

> **transaction**: `object` = `RuntimeTransaction`

###### transaction.argsHash

> **transaction.argsHash**: `string` = `Field`

###### transaction.methodId

> **transaction.methodId**: `string` = `Field`

###### transaction.nonce

> **transaction.nonce**: `object` = `UInt64Option`

###### transaction.nonce.isSome

> **transaction.nonce.isSome**: `boolean` = `Bool`

###### transaction.nonce.value

> **transaction.nonce.value**: `any` = `valueType`

###### transaction.sender

> **transaction.sender**: `object` = `PublicKeyOption`

###### transaction.sender.isSome

> **transaction.sender.isSome**: `boolean` = `Bool`

###### transaction.sender.value

> **transaction.sender.value**: `any` = `valueType`

#### Inherited from

`Struct({ transaction: RuntimeTransaction, signature: Signature, }).toJSON`

***

### toValue()

> `static` **toValue**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:64

Convert provable type to a normal JS type.

#### Parameters

##### x

###### signature

`Signature` = `Signature`

###### transaction

[`RuntimeTransaction`](RuntimeTransaction.md) = `RuntimeTransaction`

#### Returns

`object`

##### signature

> **signature**: `any` = `Signature`

##### transaction

> **transaction**: `object` = `RuntimeTransaction`

###### transaction.argsHash

> **transaction.argsHash**: `bigint` = `Field`

###### transaction.methodId

> **transaction.methodId**: `bigint` = `Field`

###### transaction.nonce

> **transaction.nonce**: `object` = `UInt64Option`

###### transaction.nonce.isSome

> **transaction.nonce.isSome**: `boolean` = `Bool`

###### transaction.nonce.value

> **transaction.nonce.value**: `any` = `valueType`

###### transaction.sender

> **transaction.sender**: `object` = `PublicKeyOption`

###### transaction.sender.isSome

> **transaction.sender.isSome**: `boolean` = `Bool`

###### transaction.sender.value

> **transaction.sender.value**: `any` = `valueType`

#### Inherited from

`Struct({ transaction: RuntimeTransaction, signature: Signature, }).toValue`

## Methods

### getSignatureData()

> **getSignatureData**(): `Field`[]

Defined in: [packages/protocol/src/model/transaction/SignedTransaction.ts:32](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/transaction/SignedTransaction.ts#L32)

#### Returns

`Field`[]

***

### hash()

> **hash**(): `Field`

Defined in: [packages/protocol/src/model/transaction/SignedTransaction.ts:28](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/transaction/SignedTransaction.ts#L28)

#### Returns

`Field`

***

### validateSignature()

> **validateSignature**(): `Bool`

Defined in: [packages/protocol/src/model/transaction/SignedTransaction.ts:41](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/transaction/SignedTransaction.ts#L41)

#### Returns

`Bool`

***

### dummy()

> `static` **dummy**(): [`SignedTransaction`](SignedTransaction.md)

Defined in: [packages/protocol/src/model/transaction/SignedTransaction.ts:17](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/transaction/SignedTransaction.ts#L17)

#### Returns

[`SignedTransaction`](SignedTransaction.md)

***

### getSignatureData()

> `static` **getSignatureData**(`args`): `Field`[]

Defined in: [packages/protocol/src/model/transaction/SignedTransaction.ts:9](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/transaction/SignedTransaction.ts#L9)

#### Parameters

##### args

###### argsHash

`Field`

###### methodId

`Field`

###### nonce

`UInt64`

#### Returns

`Field`[]

***

### sizeInFields()

> `static` **sizeInFields**(): `number`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:51

Return the size of the `T` type in terms of Field type, as Field is the primitive type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of Field type.

#### Inherited from

`Struct({ transaction: RuntimeTransaction, signature: Signature, }).sizeInFields`
