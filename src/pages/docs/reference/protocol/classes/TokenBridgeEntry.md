---
title: TokenBridgeEntry
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / TokenBridgeEntry

# Class: TokenBridgeEntry

Defined in: [packages/protocol/src/settlement/contracts/TokenBridgeTree.ts:56](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/contracts/TokenBridgeTree.ts#L56)

## Extends

- `object`

## Constructors

### new TokenBridgeEntry()

> **new TokenBridgeEntry**(`value`): [`TokenBridgeEntry`](TokenBridgeEntry.md)

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### address

`PublicKey` = `PublicKey`

###### tokenId

`Field` = `Field`

#### Returns

[`TokenBridgeEntry`](TokenBridgeEntry.md)

#### Inherited from

`Struct({ address: PublicKey, tokenId: Field, }).constructor`

## Properties

### address

> **address**: `PublicKey` = `PublicKey`

Defined in: [packages/protocol/src/settlement/contracts/TokenBridgeTree.ts:57](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/contracts/TokenBridgeTree.ts#L57)

#### Inherited from

`Struct({ address: PublicKey, tokenId: Field, }).address`

***

### tokenId

> **tokenId**: `Field` = `Field`

Defined in: [packages/protocol/src/settlement/contracts/TokenBridgeTree.ts:58](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/contracts/TokenBridgeTree.ts#L58)

#### Inherited from

`Struct({ address: PublicKey, tokenId: Field, }).tokenId`

***

### \_isStruct

> `static` **\_isStruct**: `true`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:104

#### Inherited from

`Struct({ address: PublicKey, tokenId: Field, })._isStruct`

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

`Field` = `Field`

#### Returns

`void`

#### Inherited from

`Struct({ address: PublicKey, tokenId: Field, }).check`

***

### empty()

> `static` **empty**: () => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:113

#### Returns

`object`

##### address

> **address**: `PublicKey` = `PublicKey`

##### tokenId

> **tokenId**: `Field` = `Field`

#### Inherited from

`Struct({ address: PublicKey, tokenId: Field, }).empty`

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

> **tokenId**: `Field` = `Field`

#### Inherited from

`Struct({ address: PublicKey, tokenId: Field, }).fromFields`

***

### fromJSON()

> `static` **fromJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:112

#### Parameters

##### x

###### address

`string` = `PublicKey`

###### tokenId

`string` = `Field`

#### Returns

`object`

##### address

> **address**: `PublicKey` = `PublicKey`

##### tokenId

> **tokenId**: `Field` = `Field`

#### Inherited from

`Struct({ address: PublicKey, tokenId: Field, }).fromJSON`

***

### fromValue

> `static` **fromValue**: (`x`) => `object` & (`value`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:68

Convert provable type from a normal JS type.

#### Inherited from

`Struct({ address: PublicKey, tokenId: Field, }).fromValue`

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

`Field` = `Field`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

`Struct({ address: PublicKey, tokenId: Field, }).toAuxiliary`

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

`Field` = `Field`

#### Returns

`Field`[]

A Field array describing how this `T` element is made up of Field elements.

#### Inherited from

`Struct({ address: PublicKey, tokenId: Field, }).toFields`

***

### toInput()

> `static` **toInput**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:107

#### Parameters

##### x

###### address

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

`Struct({ address: PublicKey, tokenId: Field, }).toInput`

***

### toJSON()

> `static` **toJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:111

#### Parameters

##### x

###### address

`PublicKey` = `PublicKey`

###### tokenId

`Field` = `Field`

#### Returns

`object`

##### address

> **address**: `string` = `PublicKey`

##### tokenId

> **tokenId**: `string` = `Field`

#### Inherited from

`Struct({ address: PublicKey, tokenId: Field, }).toJSON`

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

`Field` = `Field`

#### Returns

`object`

##### address

> **address**: `object` = `PublicKey`

###### address.isOdd

> **address.isOdd**: `boolean`

###### address.x

> **address.x**: `bigint`

##### tokenId

> **tokenId**: `bigint` = `Field`

#### Inherited from

`Struct({ address: PublicKey, tokenId: Field, }).toValue`

## Methods

### hash()

> **hash**(): `Field`

Defined in: [packages/protocol/src/settlement/contracts/TokenBridgeTree.ts:60](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/contracts/TokenBridgeTree.ts#L60)

#### Returns

`Field`

***

### sizeInFields()

> `static` **sizeInFields**(): `number`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:51

Return the size of the `T` type in terms of Field type, as Field is the primitive type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of Field type.

#### Inherited from

`Struct({ address: PublicKey, tokenId: Field, }).sizeInFields`
