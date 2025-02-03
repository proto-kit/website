---
title: WithdrawalEvent
---

[**@proto-kit/library**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/library](../README.md) / WithdrawalEvent

# Class: WithdrawalEvent

Defined in: [packages/library/src/runtime/Withdrawals.ts:20](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/library/src/runtime/Withdrawals.ts#L20)

## Extends

- `object`

## Constructors

### new WithdrawalEvent()

> **new WithdrawalEvent**(`value`): [`WithdrawalEvent`](WithdrawalEvent.md)

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### key

[`WithdrawalKey`](WithdrawalKey.md) = `WithdrawalKey`

###### value

[`Withdrawal`](../../protocol/classes/Withdrawal.md) = `Withdrawal`

#### Returns

[`WithdrawalEvent`](WithdrawalEvent.md)

#### Inherited from

`Struct({ key: WithdrawalKey, value: Withdrawal, }).constructor`

## Properties

### key

> **key**: [`WithdrawalKey`](WithdrawalKey.md) = `WithdrawalKey`

Defined in: [packages/library/src/runtime/Withdrawals.ts:21](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/library/src/runtime/Withdrawals.ts#L21)

#### Inherited from

`Struct({ key: WithdrawalKey, value: Withdrawal, }).key`

***

### value

> **value**: [`Withdrawal`](../../protocol/classes/Withdrawal.md) = `Withdrawal`

Defined in: [packages/library/src/runtime/Withdrawals.ts:22](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/library/src/runtime/Withdrawals.ts#L22)

#### Inherited from

`Struct({ key: WithdrawalKey, value: Withdrawal, }).value`

***

### \_isStruct

> `static` **\_isStruct**: `true`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:104

#### Inherited from

`Struct({ key: WithdrawalKey, value: Withdrawal, })._isStruct`

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

###### key

[`WithdrawalKey`](WithdrawalKey.md) = `WithdrawalKey`

###### value

[`Withdrawal`](../../protocol/classes/Withdrawal.md) = `Withdrawal`

#### Returns

`void`

#### Inherited from

`Struct({ key: WithdrawalKey, value: Withdrawal, }).check`

***

### empty()

> `static` **empty**: () => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:113

#### Returns

`object`

##### key

> **key**: [`WithdrawalKey`](WithdrawalKey.md) = `WithdrawalKey`

##### value

> **value**: [`Withdrawal`](../../protocol/classes/Withdrawal.md) = `Withdrawal`

#### Inherited from

`Struct({ key: WithdrawalKey, value: Withdrawal, }).empty`

***

### fromFields()

> `static` **fromFields**: (`fields`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:78

#### Parameters

##### fields

`Field`[]

#### Returns

`object`

##### key

> **key**: [`WithdrawalKey`](WithdrawalKey.md) = `WithdrawalKey`

##### value

> **value**: [`Withdrawal`](../../protocol/classes/Withdrawal.md) = `Withdrawal`

#### Inherited from

`Struct({ key: WithdrawalKey, value: Withdrawal, }).fromFields`

***

### fromJSON()

> `static` **fromJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:112

#### Parameters

##### x

###### key

\{ `index`: `string`; `tokenId`: `string`; \} = `WithdrawalKey`

###### key.index

`string` = `Field`

###### key.tokenId

`string` = `Field`

###### value

\{ `address`: `string`; `amount`: `string`; `tokenId`: `string`; \} = `Withdrawal`

###### value.address

`string`

###### value.amount

`string`

###### value.tokenId

`string`

#### Returns

`object`

##### key

> **key**: [`WithdrawalKey`](WithdrawalKey.md) = `WithdrawalKey`

##### value

> **value**: [`Withdrawal`](../../protocol/classes/Withdrawal.md) = `Withdrawal`

#### Inherited from

`Struct({ key: WithdrawalKey, value: Withdrawal, }).fromJSON`

***

### fromValue

> `static` **fromValue**: (`x`) => `object` & (`value`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:68

Convert provable type from a normal JS type.

#### Inherited from

`Struct({ key: WithdrawalKey, value: Withdrawal, }).fromValue`

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

###### key

[`WithdrawalKey`](WithdrawalKey.md) = `WithdrawalKey`

###### value

[`Withdrawal`](../../protocol/classes/Withdrawal.md) = `Withdrawal`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

`Struct({ key: WithdrawalKey, value: Withdrawal, }).toAuxiliary`

***

### toFields()

> `static` **toFields**: (`value`) => `Field`[]

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:24

A function that takes `value`, an element of type `T`, as argument and returns
an array of Field elements that make up the provable data of `value`.

#### Parameters

##### value

the element of type `T` to generate the Field array from.

###### key

[`WithdrawalKey`](WithdrawalKey.md) = `WithdrawalKey`

###### value

[`Withdrawal`](../../protocol/classes/Withdrawal.md) = `Withdrawal`

#### Returns

`Field`[]

A Field array describing how this `T` element is made up of Field elements.

#### Inherited from

`Struct({ key: WithdrawalKey, value: Withdrawal, }).toFields`

***

### toInput()

> `static` **toInput**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:107

#### Parameters

##### x

###### key

[`WithdrawalKey`](WithdrawalKey.md) = `WithdrawalKey`

###### value

[`Withdrawal`](../../protocol/classes/Withdrawal.md) = `Withdrawal`

#### Returns

`object`

##### fields?

> `optional` **fields**: `Field`[]

##### packed?

> `optional` **packed**: \[`Field`, `number`\][]

#### Inherited from

`Struct({ key: WithdrawalKey, value: Withdrawal, }).toInput`

***

### toJSON()

> `static` **toJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:111

#### Parameters

##### x

###### key

[`WithdrawalKey`](WithdrawalKey.md) = `WithdrawalKey`

###### value

[`Withdrawal`](../../protocol/classes/Withdrawal.md) = `Withdrawal`

#### Returns

`object`

##### key

> **key**: `object` = `WithdrawalKey`

###### key.index

> **key.index**: `string` = `Field`

###### key.tokenId

> **key.tokenId**: `string` = `Field`

##### value

> **value**: `object` = `Withdrawal`

###### value.address

> **value.address**: `string`

###### value.amount

> **value.amount**: `string`

###### value.tokenId

> **value.tokenId**: `string`

#### Inherited from

`Struct({ key: WithdrawalKey, value: Withdrawal, }).toJSON`

***

### toValue()

> `static` **toValue**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:64

Convert provable type to a normal JS type.

#### Parameters

##### x

###### key

[`WithdrawalKey`](WithdrawalKey.md) = `WithdrawalKey`

###### value

[`Withdrawal`](../../protocol/classes/Withdrawal.md) = `Withdrawal`

#### Returns

`object`

##### key

> **key**: `object` = `WithdrawalKey`

###### key.index

> **key.index**: `bigint` = `Field`

###### key.tokenId

> **key.tokenId**: `bigint` = `Field`

##### value

> **value**: `object` = `Withdrawal`

###### value.address

> **value.address**: `object`

###### value.address.isOdd

> **value.address.isOdd**: `boolean`

###### value.address.x

> **value.address.x**: `bigint`

###### value.amount

> **value.amount**: `bigint`

###### value.tokenId

> **value.tokenId**: `bigint`

#### Inherited from

`Struct({ key: WithdrawalKey, value: Withdrawal, }).toValue`

## Methods

### sizeInFields()

> `static` **sizeInFields**(): `number`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:51

Return the size of the `T` type in terms of Field type, as Field is the primitive type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of Field type.

#### Inherited from

`Struct({ key: WithdrawalKey, value: Withdrawal, }).sizeInFields`
