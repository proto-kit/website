---
title: Withdrawal
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / Withdrawal

# Class: Withdrawal

Defined in: [packages/protocol/src/settlement/messages/Withdrawal.ts:4](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/messages/Withdrawal.ts#L4)

## Extends

- `object`

## Constructors

### new Withdrawal()

> **new Withdrawal**(`value`): [`Withdrawal`](Withdrawal.md)

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### address

`PublicKey` = `PublicKey`

###### amount

`UInt64` = `UInt64`

###### tokenId

`Field` = `Field`

#### Returns

[`Withdrawal`](Withdrawal.md)

#### Inherited from

`Struct({ tokenId: Field, address: PublicKey, amount: UInt64, }).constructor`

## Properties

### address

> **address**: `PublicKey` = `PublicKey`

Defined in: [packages/protocol/src/settlement/messages/Withdrawal.ts:6](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/messages/Withdrawal.ts#L6)

#### Inherited from

`Struct({ tokenId: Field, address: PublicKey, amount: UInt64, }).address`

***

### amount

> **amount**: `UInt64` = `UInt64`

Defined in: [packages/protocol/src/settlement/messages/Withdrawal.ts:7](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/messages/Withdrawal.ts#L7)

#### Inherited from

`Struct({ tokenId: Field, address: PublicKey, amount: UInt64, }).amount`

***

### tokenId

> **tokenId**: `Field` = `Field`

Defined in: [packages/protocol/src/settlement/messages/Withdrawal.ts:5](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/messages/Withdrawal.ts#L5)

#### Inherited from

`Struct({ tokenId: Field, address: PublicKey, amount: UInt64, }).tokenId`

***

### \_isStruct

> `static` **\_isStruct**: `true`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:104

#### Inherited from

`Struct({ tokenId: Field, address: PublicKey, amount: UInt64, })._isStruct`

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

###### address

`PublicKey` = `PublicKey`

###### amount

`UInt64` = `UInt64`

###### tokenId

`Field` = `Field`

#### Returns

`void`

#### Inherited from

`Struct({ tokenId: Field, address: PublicKey, amount: UInt64, }).check`

***

### empty()

> `static` **empty**: () => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:113

#### Returns

`object`

##### address

> **address**: `PublicKey` = `PublicKey`

##### amount

> **amount**: `UInt64` = `UInt64`

##### tokenId

> **tokenId**: `Field` = `Field`

#### Inherited from

`Struct({ tokenId: Field, address: PublicKey, amount: UInt64, }).empty`

***

### fromFields()

> `static` **fromFields**: (`fields`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:78

#### Parameters

##### fields

`Field`[]

#### Returns

`object`

##### address

> **address**: `PublicKey` = `PublicKey`

##### amount

> **amount**: `UInt64` = `UInt64`

##### tokenId

> **tokenId**: `Field` = `Field`

#### Inherited from

`Struct({ tokenId: Field, address: PublicKey, amount: UInt64, }).fromFields`

***

### fromJSON()

> `static` **fromJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:112

#### Parameters

##### x

###### address

`string` = `PublicKey`

###### amount

`string` = `UInt64`

###### tokenId

`string` = `Field`

#### Returns

`object`

##### address

> **address**: `PublicKey` = `PublicKey`

##### amount

> **amount**: `UInt64` = `UInt64`

##### tokenId

> **tokenId**: `Field` = `Field`

#### Inherited from

`Struct({ tokenId: Field, address: PublicKey, amount: UInt64, }).fromJSON`

***

### fromValue

> `static` **fromValue**: (`x`) => `object` & (`value`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:68

Convert provable type from a normal JS type.

#### Inherited from

`Struct({ tokenId: Field, address: PublicKey, amount: UInt64, }).fromValue`

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

###### address

`PublicKey` = `PublicKey`

###### amount

`UInt64` = `UInt64`

###### tokenId

`Field` = `Field`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

`Struct({ tokenId: Field, address: PublicKey, amount: UInt64, }).toAuxiliary`

***

### toFields()

> `static` **toFields**: (`value`) => `Field`[]

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:24

A function that takes `value`, an element of type `T`, as argument and returns
an array of Field elements that make up the provable data of `value`.

#### Parameters

##### value

the element of type `T` to generate the Field array from.

###### address

`PublicKey` = `PublicKey`

###### amount

`UInt64` = `UInt64`

###### tokenId

`Field` = `Field`

#### Returns

`Field`[]

A Field array describing how this `T` element is made up of Field elements.

#### Inherited from

`Struct({ tokenId: Field, address: PublicKey, amount: UInt64, }).toFields`

***

### toInput()

> `static` **toInput**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:107

#### Parameters

##### x

###### address

`PublicKey` = `PublicKey`

###### amount

`UInt64` = `UInt64`

###### tokenId

`Field` = `Field`

#### Returns

`object`

##### fields?

> `optional` **fields**: `Field`[]

##### packed?

> `optional` **packed**: \[`Field`, `number`\][]

#### Inherited from

`Struct({ tokenId: Field, address: PublicKey, amount: UInt64, }).toInput`

***

### toJSON()

> `static` **toJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:111

#### Parameters

##### x

###### address

`PublicKey` = `PublicKey`

###### amount

`UInt64` = `UInt64`

###### tokenId

`Field` = `Field`

#### Returns

`object`

##### address

> **address**: `string` = `PublicKey`

##### amount

> **amount**: `string` = `UInt64`

##### tokenId

> **tokenId**: `string` = `Field`

#### Inherited from

`Struct({ tokenId: Field, address: PublicKey, amount: UInt64, }).toJSON`

***

### toValue()

> `static` **toValue**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:64

Convert provable type to a normal JS type.

#### Parameters

##### x

###### address

`PublicKey` = `PublicKey`

###### amount

`UInt64` = `UInt64`

###### tokenId

`Field` = `Field`

#### Returns

`object`

##### address

> **address**: `object` = `PublicKey`

###### address.isOdd

> **address.isOdd**: `boolean`

###### address.x

> **address.x**: `bigint`

##### amount

> **amount**: `bigint` = `UInt64`

##### tokenId

> **tokenId**: `bigint` = `Field`

#### Inherited from

`Struct({ tokenId: Field, address: PublicKey, amount: UInt64, }).toValue`

## Methods

### dummy()

> `static` **dummy**(): [`Withdrawal`](Withdrawal.md)

Defined in: [packages/protocol/src/settlement/messages/Withdrawal.ts:9](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/messages/Withdrawal.ts#L9)

#### Returns

[`Withdrawal`](Withdrawal.md)

***

### sizeInFields()

> `static` **sizeInFields**(): `number`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:51

Return the size of the `T` type in terms of Field type, as Field is the primitive type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of Field type.

#### Inherited from

`Struct({ tokenId: Field, address: PublicKey, amount: UInt64, }).sizeInFields`
