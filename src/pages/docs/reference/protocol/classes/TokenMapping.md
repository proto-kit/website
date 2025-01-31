---
title: TokenMapping
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / TokenMapping

# Class: TokenMapping

Defined in: [packages/protocol/src/settlement/contracts/SettlementSmartContract.ts:60](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/contracts/SettlementSmartContract.ts#L60)

## Extends

- `object`

## Constructors

### new TokenMapping()

> **new TokenMapping**(`value`): [`TokenMapping`](TokenMapping.md)

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### publicKey

`PublicKey` = `PublicKey`

###### tokenId

`Field` = `Field`

#### Returns

[`TokenMapping`](TokenMapping.md)

#### Inherited from

`Struct({ tokenId: Field, publicKey: PublicKey, }).constructor`

## Properties

### publicKey

> **publicKey**: `PublicKey` = `PublicKey`

Defined in: [packages/protocol/src/settlement/contracts/SettlementSmartContract.ts:62](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/contracts/SettlementSmartContract.ts#L62)

#### Inherited from

`Struct({ tokenId: Field, publicKey: PublicKey, }).publicKey`

***

### tokenId

> **tokenId**: `Field` = `Field`

Defined in: [packages/protocol/src/settlement/contracts/SettlementSmartContract.ts:61](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/contracts/SettlementSmartContract.ts#L61)

#### Inherited from

`Struct({ tokenId: Field, publicKey: PublicKey, }).tokenId`

***

### \_isStruct

> `static` **\_isStruct**: `true`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:104

#### Inherited from

`Struct({ tokenId: Field, publicKey: PublicKey, })._isStruct`

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

###### publicKey

`PublicKey` = `PublicKey`

###### tokenId

`Field` = `Field`

#### Returns

`void`

#### Inherited from

`Struct({ tokenId: Field, publicKey: PublicKey, }).check`

***

### empty()

> `static` **empty**: () => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:113

#### Returns

`object`

##### publicKey

> **publicKey**: `PublicKey` = `PublicKey`

##### tokenId

> **tokenId**: `Field` = `Field`

#### Inherited from

`Struct({ tokenId: Field, publicKey: PublicKey, }).empty`

***

### fromFields()

> `static` **fromFields**: (`fields`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:78

#### Parameters

##### fields

`Field`[]

#### Returns

`object`

##### publicKey

> **publicKey**: `PublicKey` = `PublicKey`

##### tokenId

> **tokenId**: `Field` = `Field`

#### Inherited from

`Struct({ tokenId: Field, publicKey: PublicKey, }).fromFields`

***

### fromJSON()

> `static` **fromJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:112

#### Parameters

##### x

###### publicKey

`string` = `PublicKey`

###### tokenId

`string` = `Field`

#### Returns

`object`

##### publicKey

> **publicKey**: `PublicKey` = `PublicKey`

##### tokenId

> **tokenId**: `Field` = `Field`

#### Inherited from

`Struct({ tokenId: Field, publicKey: PublicKey, }).fromJSON`

***

### fromValue

> `static` **fromValue**: (`x`) => `object` & (`value`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:68

Convert provable type from a normal JS type.

#### Inherited from

`Struct({ tokenId: Field, publicKey: PublicKey, }).fromValue`

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

###### publicKey

`PublicKey` = `PublicKey`

###### tokenId

`Field` = `Field`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

`Struct({ tokenId: Field, publicKey: PublicKey, }).toAuxiliary`

***

### toFields()

> `static` **toFields**: (`value`) => `Field`[]

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:24

A function that takes `value`, an element of type `T`, as argument and returns
an array of Field elements that make up the provable data of `value`.

#### Parameters

##### value

the element of type `T` to generate the Field array from.

###### publicKey

`PublicKey` = `PublicKey`

###### tokenId

`Field` = `Field`

#### Returns

`Field`[]

A Field array describing how this `T` element is made up of Field elements.

#### Inherited from

`Struct({ tokenId: Field, publicKey: PublicKey, }).toFields`

***

### toInput()

> `static` **toInput**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:107

#### Parameters

##### x

###### publicKey

`PublicKey` = `PublicKey`

###### tokenId

`Field` = `Field`

#### Returns

`object`

##### fields?

> `optional` **fields**: `Field`[]

##### packed?

> `optional` **packed**: \[`Field`, `number`\][]

#### Inherited from

`Struct({ tokenId: Field, publicKey: PublicKey, }).toInput`

***

### toJSON()

> `static` **toJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:111

#### Parameters

##### x

###### publicKey

`PublicKey` = `PublicKey`

###### tokenId

`Field` = `Field`

#### Returns

`object`

##### publicKey

> **publicKey**: `string` = `PublicKey`

##### tokenId

> **tokenId**: `string` = `Field`

#### Inherited from

`Struct({ tokenId: Field, publicKey: PublicKey, }).toJSON`

***

### toValue()

> `static` **toValue**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:64

Convert provable type to a normal JS type.

#### Parameters

##### x

###### publicKey

`PublicKey` = `PublicKey`

###### tokenId

`Field` = `Field`

#### Returns

`object`

##### publicKey

> **publicKey**: `object` = `PublicKey`

###### publicKey.isOdd

> **publicKey.isOdd**: `boolean`

###### publicKey.x

> **publicKey.x**: `bigint`

##### tokenId

> **tokenId**: `bigint` = `Field`

#### Inherited from

`Struct({ tokenId: Field, publicKey: PublicKey, }).toValue`

## Methods

### sizeInFields()

> `static` **sizeInFields**(): `number`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:51

Return the size of the `T` type in terms of Field type, as Field is the primitive type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of Field type.

#### Inherited from

`Struct({ tokenId: Field, publicKey: PublicKey, }).sizeInFields`
