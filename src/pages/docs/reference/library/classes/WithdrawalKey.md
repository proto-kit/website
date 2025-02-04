---
title: WithdrawalKey
---

[**@proto-kit/library**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/library](../README.md) / WithdrawalKey

# Class: WithdrawalKey

Defined in: [packages/library/src/runtime/Withdrawals.ts:15](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/library/src/runtime/Withdrawals.ts#L15)

## Extends

- `object`

## Constructors

### new WithdrawalKey()

> **new WithdrawalKey**(`value`): [`WithdrawalKey`](WithdrawalKey.md)

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### index

`Field` = `Field`

###### tokenId

`Field` = `Field`

#### Returns

[`WithdrawalKey`](WithdrawalKey.md)

#### Inherited from

`Struct({ index: Field, tokenId: Field, }).constructor`

## Properties

### index

> **index**: `Field` = `Field`

Defined in: [packages/library/src/runtime/Withdrawals.ts:16](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/library/src/runtime/Withdrawals.ts#L16)

#### Inherited from

`Struct({ index: Field, tokenId: Field, }).index`

***

### tokenId

> **tokenId**: `Field` = `Field`

Defined in: [packages/library/src/runtime/Withdrawals.ts:17](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/library/src/runtime/Withdrawals.ts#L17)

#### Inherited from

`Struct({ index: Field, tokenId: Field, }).tokenId`

***

### \_isStruct

> `static` **\_isStruct**: `true`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:104

#### Inherited from

`Struct({ index: Field, tokenId: Field, })._isStruct`

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

###### index

`Field` = `Field`

###### tokenId

`Field` = `Field`

#### Returns

`void`

#### Inherited from

`Struct({ index: Field, tokenId: Field, }).check`

***

### empty()

> `static` **empty**: () => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:113

#### Returns

`object`

##### index

> **index**: `Field` = `Field`

##### tokenId

> **tokenId**: `Field` = `Field`

#### Inherited from

`Struct({ index: Field, tokenId: Field, }).empty`

***

### fromFields()

> `static` **fromFields**: (`fields`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:78

#### Parameters

##### fields

`Field`[]

#### Returns

`object`

##### index

> **index**: `Field` = `Field`

##### tokenId

> **tokenId**: `Field` = `Field`

#### Inherited from

`Struct({ index: Field, tokenId: Field, }).fromFields`

***

### fromJSON()

> `static` **fromJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:112

#### Parameters

##### x

###### index

`string` = `Field`

###### tokenId

`string` = `Field`

#### Returns

`object`

##### index

> **index**: `Field` = `Field`

##### tokenId

> **tokenId**: `Field` = `Field`

#### Inherited from

`Struct({ index: Field, tokenId: Field, }).fromJSON`

***

### fromValue

> `static` **fromValue**: (`x`) => `object` & (`value`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:68

Convert provable type from a normal JS type.

#### Inherited from

`Struct({ index: Field, tokenId: Field, }).fromValue`

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

###### index

`Field` = `Field`

###### tokenId

`Field` = `Field`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

`Struct({ index: Field, tokenId: Field, }).toAuxiliary`

***

### toFields()

> `static` **toFields**: (`value`) => `Field`[]

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:24

A function that takes `value`, an element of type `T`, as argument and returns
an array of Field elements that make up the provable data of `value`.

#### Parameters

##### value

the element of type `T` to generate the Field array from.

###### index

`Field` = `Field`

###### tokenId

`Field` = `Field`

#### Returns

`Field`[]

A Field array describing how this `T` element is made up of Field elements.

#### Inherited from

`Struct({ index: Field, tokenId: Field, }).toFields`

***

### toInput()

> `static` **toInput**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:107

#### Parameters

##### x

###### index

`Field` = `Field`

###### tokenId

`Field` = `Field`

#### Returns

`object`

##### fields?

> `optional` **fields**: `Field`[]

##### packed?

> `optional` **packed**: \[`Field`, `number`\][]

#### Inherited from

`Struct({ index: Field, tokenId: Field, }).toInput`

***

### toJSON()

> `static` **toJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:111

#### Parameters

##### x

###### index

`Field` = `Field`

###### tokenId

`Field` = `Field`

#### Returns

`object`

##### index

> **index**: `string` = `Field`

##### tokenId

> **tokenId**: `string` = `Field`

#### Inherited from

`Struct({ index: Field, tokenId: Field, }).toJSON`

***

### toValue()

> `static` **toValue**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:64

Convert provable type to a normal JS type.

#### Parameters

##### x

###### index

`Field` = `Field`

###### tokenId

`Field` = `Field`

#### Returns

`object`

##### index

> **index**: `bigint` = `Field`

##### tokenId

> **tokenId**: `bigint` = `Field`

#### Inherited from

`Struct({ index: Field, tokenId: Field, }).toValue`

## Methods

### sizeInFields()

> `static` **sizeInFields**(): `number`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:51

Return the size of the `T` type in terms of Field type, as Field is the primitive type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of Field type.

#### Inherited from

`Struct({ index: Field, tokenId: Field, }).sizeInFields`
