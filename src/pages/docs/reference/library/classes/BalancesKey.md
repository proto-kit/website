---
title: BalancesKey
---

[**@proto-kit/library**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/library](../README.md) / BalancesKey

# Class: BalancesKey

Defined in: [packages/library/src/runtime/Balances.ts:19](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/library/src/runtime/Balances.ts#L19)

## Extends

- `object`

## Constructors

### new BalancesKey()

> **new BalancesKey**(`value`): [`BalancesKey`](BalancesKey.md)

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### address

`PublicKey` = `PublicKey`

###### tokenId

[`TokenId`](TokenId.md) = `TokenId`

#### Returns

[`BalancesKey`](BalancesKey.md)

#### Inherited from

`Struct({ tokenId: TokenId, address: PublicKey, }).constructor`

## Properties

### address

> **address**: `PublicKey` = `PublicKey`

Defined in: [packages/library/src/runtime/Balances.ts:21](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/library/src/runtime/Balances.ts#L21)

#### Inherited from

`Struct({ tokenId: TokenId, address: PublicKey, }).address`

***

### tokenId

> **tokenId**: [`TokenId`](TokenId.md) = `TokenId`

Defined in: [packages/library/src/runtime/Balances.ts:20](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/library/src/runtime/Balances.ts#L20)

#### Inherited from

`Struct({ tokenId: TokenId, address: PublicKey, }).tokenId`

***

### \_isStruct

> `static` **\_isStruct**: `true`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:104

#### Inherited from

`Struct({ tokenId: TokenId, address: PublicKey, })._isStruct`

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

###### tokenId

[`TokenId`](TokenId.md) = `TokenId`

#### Returns

`void`

#### Inherited from

`Struct({ tokenId: TokenId, address: PublicKey, }).check`

***

### empty()

> `static` **empty**: () => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:113

#### Returns

`object`

##### address

> **address**: `PublicKey` = `PublicKey`

##### tokenId

> **tokenId**: [`TokenId`](TokenId.md) = `TokenId`

#### Inherited from

`Struct({ tokenId: TokenId, address: PublicKey, }).empty`

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

##### tokenId

> **tokenId**: [`TokenId`](TokenId.md) = `TokenId`

#### Inherited from

`Struct({ tokenId: TokenId, address: PublicKey, }).fromFields`

***

### fromJSON()

> `static` **fromJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:112

#### Parameters

##### x

###### address

`string` = `PublicKey`

###### tokenId

`string` = `TokenId`

#### Returns

`object`

##### address

> **address**: `PublicKey` = `PublicKey`

##### tokenId

> **tokenId**: [`TokenId`](TokenId.md) = `TokenId`

#### Inherited from

`Struct({ tokenId: TokenId, address: PublicKey, }).fromJSON`

***

### fromValue

> `static` **fromValue**: (`x`) => `object` & (`value`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:68

Convert provable type from a normal JS type.

#### Inherited from

`Struct({ tokenId: TokenId, address: PublicKey, }).fromValue`

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

###### tokenId

[`TokenId`](TokenId.md) = `TokenId`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

`Struct({ tokenId: TokenId, address: PublicKey, }).toAuxiliary`

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

###### tokenId

[`TokenId`](TokenId.md) = `TokenId`

#### Returns

`Field`[]

A Field array describing how this `T` element is made up of Field elements.

#### Inherited from

`Struct({ tokenId: TokenId, address: PublicKey, }).toFields`

***

### toInput()

> `static` **toInput**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:107

#### Parameters

##### x

###### address

`PublicKey` = `PublicKey`

###### tokenId

[`TokenId`](TokenId.md) = `TokenId`

#### Returns

`object`

##### fields?

> `optional` **fields**: `Field`[]

##### packed?

> `optional` **packed**: \[`Field`, `number`\][]

#### Inherited from

`Struct({ tokenId: TokenId, address: PublicKey, }).toInput`

***

### toJSON()

> `static` **toJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:111

#### Parameters

##### x

###### address

`PublicKey` = `PublicKey`

###### tokenId

[`TokenId`](TokenId.md) = `TokenId`

#### Returns

`object`

##### address

> **address**: `string` = `PublicKey`

##### tokenId

> **tokenId**: `string` = `TokenId`

#### Inherited from

`Struct({ tokenId: TokenId, address: PublicKey, }).toJSON`

***

### toValue()

> `static` **toValue**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:64

Convert provable type to a normal JS type.

#### Parameters

##### x

###### address

`PublicKey` = `PublicKey`

###### tokenId

[`TokenId`](TokenId.md) = `TokenId`

#### Returns

`object`

##### address

> **address**: `object` = `PublicKey`

###### address.isOdd

> **address.isOdd**: `boolean`

###### address.x

> **address.x**: `bigint`

##### tokenId

> **tokenId**: `bigint` = `TokenId`

#### Inherited from

`Struct({ tokenId: TokenId, address: PublicKey, }).toValue`

## Methods

### from()

> `static` **from**(`tokenId`, `address`): [`BalancesKey`](BalancesKey.md)

Defined in: [packages/library/src/runtime/Balances.ts:23](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/library/src/runtime/Balances.ts#L23)

#### Parameters

##### tokenId

[`TokenId`](TokenId.md)

##### address

`PublicKey`

#### Returns

[`BalancesKey`](BalancesKey.md)

***

### sizeInFields()

> `static` **sizeInFields**(): `number`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:51

Return the size of the `T` type in terms of Field type, as Field is the primitive type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of Field type.

#### Inherited from

`Struct({ tokenId: TokenId, address: PublicKey, }).sizeInFields`
