---
title: TokenBridgeTreeAddition
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / TokenBridgeTreeAddition

# Class: TokenBridgeTreeAddition

Defined in: [packages/protocol/src/settlement/contracts/TokenBridgeTree.ts:70](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/contracts/TokenBridgeTree.ts#L70)

## Extends

- `object`

## Constructors

### new TokenBridgeTreeAddition()

> **new TokenBridgeTreeAddition**(`value`): [`TokenBridgeTreeAddition`](TokenBridgeTreeAddition.md)

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### index

`Field` = `Field`

###### value

[`TokenBridgeEntry`](TokenBridgeEntry.md) = `TokenBridgeEntry`

#### Returns

[`TokenBridgeTreeAddition`](TokenBridgeTreeAddition.md)

#### Inherited from

`Struct({ index: Field, value: TokenBridgeEntry, }).constructor`

## Properties

### index

> **index**: `Field` = `Field`

Defined in: [packages/protocol/src/settlement/contracts/TokenBridgeTree.ts:71](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/contracts/TokenBridgeTree.ts#L71)

#### Inherited from

`Struct({ index: Field, value: TokenBridgeEntry, }).index`

***

### value

> **value**: [`TokenBridgeEntry`](TokenBridgeEntry.md) = `TokenBridgeEntry`

Defined in: [packages/protocol/src/settlement/contracts/TokenBridgeTree.ts:72](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/contracts/TokenBridgeTree.ts#L72)

#### Inherited from

`Struct({ index: Field, value: TokenBridgeEntry, }).value`

***

### \_isStruct

> `static` **\_isStruct**: `true`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:104

#### Inherited from

`Struct({ index: Field, value: TokenBridgeEntry, })._isStruct`

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

###### value

[`TokenBridgeEntry`](TokenBridgeEntry.md) = `TokenBridgeEntry`

#### Returns

`void`

#### Inherited from

`Struct({ index: Field, value: TokenBridgeEntry, }).check`

***

### empty()

> `static` **empty**: () => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:113

#### Returns

`object`

##### index

> **index**: `Field` = `Field`

##### value

> **value**: [`TokenBridgeEntry`](TokenBridgeEntry.md) = `TokenBridgeEntry`

#### Inherited from

`Struct({ index: Field, value: TokenBridgeEntry, }).empty`

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

##### value

> **value**: [`TokenBridgeEntry`](TokenBridgeEntry.md) = `TokenBridgeEntry`

#### Inherited from

`Struct({ index: Field, value: TokenBridgeEntry, }).fromFields`

***

### fromJSON()

> `static` **fromJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:112

#### Parameters

##### x

###### index

`string` = `Field`

###### value

\{ `address`: `string`; `tokenId`: `string`; \} = `TokenBridgeEntry`

###### value.address

`string` = `PublicKey`

###### value.tokenId

`string` = `Field`

#### Returns

`object`

##### index

> **index**: `Field` = `Field`

##### value

> **value**: [`TokenBridgeEntry`](TokenBridgeEntry.md) = `TokenBridgeEntry`

#### Inherited from

`Struct({ index: Field, value: TokenBridgeEntry, }).fromJSON`

***

### fromValue

> `static` **fromValue**: (`x`) => `object` & (`value`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:68

Convert provable type from a normal JS type.

#### Inherited from

`Struct({ index: Field, value: TokenBridgeEntry, }).fromValue`

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

###### value

[`TokenBridgeEntry`](TokenBridgeEntry.md) = `TokenBridgeEntry`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

`Struct({ index: Field, value: TokenBridgeEntry, }).toAuxiliary`

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

###### value

[`TokenBridgeEntry`](TokenBridgeEntry.md) = `TokenBridgeEntry`

#### Returns

`Field`[]

A Field array describing how this `T` element is made up of Field elements.

#### Inherited from

`Struct({ index: Field, value: TokenBridgeEntry, }).toFields`

***

### toInput()

> `static` **toInput**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:107

#### Parameters

##### x

###### index

`Field` = `Field`

###### value

[`TokenBridgeEntry`](TokenBridgeEntry.md) = `TokenBridgeEntry`

#### Returns

`object`

##### fields?

> `optional` **fields**: `Field`[]

##### packed?

> `optional` **packed**: \[`Field`, `number`\][]

#### Inherited from

`Struct({ index: Field, value: TokenBridgeEntry, }).toInput`

***

### toJSON()

> `static` **toJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:111

#### Parameters

##### x

###### index

`Field` = `Field`

###### value

[`TokenBridgeEntry`](TokenBridgeEntry.md) = `TokenBridgeEntry`

#### Returns

`object`

##### index

> **index**: `string` = `Field`

##### value

> **value**: `object` = `TokenBridgeEntry`

###### value.address

> **value.address**: `string` = `PublicKey`

###### value.tokenId

> **value.tokenId**: `string` = `Field`

#### Inherited from

`Struct({ index: Field, value: TokenBridgeEntry, }).toJSON`

***

### toValue()

> `static` **toValue**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:64

Convert provable type to a normal JS type.

#### Parameters

##### x

###### index

`Field` = `Field`

###### value

[`TokenBridgeEntry`](TokenBridgeEntry.md) = `TokenBridgeEntry`

#### Returns

`object`

##### index

> **index**: `bigint` = `Field`

##### value

> **value**: `object` = `TokenBridgeEntry`

###### value.address

> **value.address**: `object` = `PublicKey`

###### value.address.isOdd

> **value.address.isOdd**: `boolean`

###### value.address.x

> **value.address.x**: `bigint`

###### value.tokenId

> **value.tokenId**: `bigint` = `Field`

#### Inherited from

`Struct({ index: Field, value: TokenBridgeEntry, }).toValue`

## Methods

### sizeInFields()

> `static` **sizeInFields**(): `number`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:51

Return the size of the `T` type in terms of Field type, as Field is the primitive type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of Field type.

#### Inherited from

`Struct({ index: Field, value: TokenBridgeEntry, }).sizeInFields`
