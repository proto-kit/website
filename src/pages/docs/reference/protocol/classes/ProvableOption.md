---
title: ProvableOption
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / ProvableOption

# Class: ProvableOption

Defined in: [packages/protocol/src/model/Option.ts:11](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/Option.ts#L11)

## Extends

- `object`

## Constructors

### new ProvableOption()

> **new ProvableOption**(`value`): [`ProvableOption`](ProvableOption.md)

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### isSome

`Bool` = `Bool`

###### value

`Field` = `Field`

#### Returns

[`ProvableOption`](ProvableOption.md)

#### Inherited from

`Struct({ isSome: Bool, value: Field, }).constructor`

## Properties

### isSome

> **isSome**: `Bool` = `Bool`

Defined in: [packages/protocol/src/model/Option.ts:12](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/Option.ts#L12)

#### Inherited from

`Struct({ isSome: Bool, value: Field, }).isSome`

***

### value

> **value**: `Field` = `Field`

Defined in: [packages/protocol/src/model/Option.ts:13](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/Option.ts#L13)

#### Inherited from

`Struct({ isSome: Bool, value: Field, }).value`

***

### \_isStruct

> `static` **\_isStruct**: `true`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:104

#### Inherited from

`Struct({ isSome: Bool, value: Field, })._isStruct`

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

###### isSome

`Bool` = `Bool`

###### value

`Field` = `Field`

#### Returns

`void`

#### Inherited from

`Struct({ isSome: Bool, value: Field, }).check`

***

### empty()

> `static` **empty**: () => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:113

#### Returns

`object`

##### isSome

> **isSome**: `Bool` = `Bool`

##### value

> **value**: `Field` = `Field`

#### Inherited from

`Struct({ isSome: Bool, value: Field, }).empty`

***

### fromFields()

> `static` **fromFields**: (`fields`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:78

#### Parameters

##### fields

`Field`[]

#### Returns

`object`

##### isSome

> **isSome**: `Bool` = `Bool`

##### value

> **value**: `Field` = `Field`

#### Inherited from

`Struct({ isSome: Bool, value: Field, }).fromFields`

***

### fromJSON()

> `static` **fromJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:112

#### Parameters

##### x

###### isSome

`boolean` = `Bool`

###### value

`string` = `Field`

#### Returns

`object`

##### isSome

> **isSome**: `Bool` = `Bool`

##### value

> **value**: `Field` = `Field`

#### Inherited from

`Struct({ isSome: Bool, value: Field, }).fromJSON`

***

### fromValue

> `static` **fromValue**: (`x`) => `object` & (`value`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:68

Convert provable type from a normal JS type.

#### Inherited from

`Struct({ isSome: Bool, value: Field, }).fromValue`

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

###### isSome

`Bool` = `Bool`

###### value

`Field` = `Field`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

`Struct({ isSome: Bool, value: Field, }).toAuxiliary`

***

### toFields()

> `static` **toFields**: (`value`) => `Field`[]

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:24

A function that takes `value`, an element of type `T`, as argument and returns
an array of Field elements that make up the provable data of `value`.

#### Parameters

##### value

the element of type `T` to generate the Field array from.

###### isSome

`Bool` = `Bool`

###### value

`Field` = `Field`

#### Returns

`Field`[]

A Field array describing how this `T` element is made up of Field elements.

#### Inherited from

`Struct({ isSome: Bool, value: Field, }).toFields`

***

### toInput()

> `static` **toInput**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:107

#### Parameters

##### x

###### isSome

`Bool` = `Bool`

###### value

`Field` = `Field`

#### Returns

`object`

##### fields?

> `optional` **fields**: `Field`[]

##### packed?

> `optional` **packed**: \[`Field`, `number`\][]

#### Inherited from

`Struct({ isSome: Bool, value: Field, }).toInput`

***

### toJSON()

> `static` **toJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:111

#### Parameters

##### x

###### isSome

`Bool` = `Bool`

###### value

`Field` = `Field`

#### Returns

`object`

##### isSome

> **isSome**: `boolean` = `Bool`

##### value

> **value**: `string` = `Field`

#### Inherited from

`Struct({ isSome: Bool, value: Field, }).toJSON`

***

### toValue()

> `static` **toValue**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:64

Convert provable type to a normal JS type.

#### Parameters

##### x

###### isSome

`Bool` = `Bool`

###### value

`Field` = `Field`

#### Returns

`object`

##### isSome

> **isSome**: `boolean` = `Bool`

##### value

> **value**: `bigint` = `Field`

#### Inherited from

`Struct({ isSome: Bool, value: Field, }).toValue`

## Methods

### toSome()

> **toSome**(): [`ProvableOption`](ProvableOption.md)

Defined in: [packages/protocol/src/model/Option.ts:15](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/Option.ts#L15)

#### Returns

[`ProvableOption`](ProvableOption.md)

***

### sizeInFields()

> `static` **sizeInFields**(): `number`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:51

Return the size of the `T` type in terms of Field type, as Field is the primitive type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of Field type.

#### Inherited from

`Struct({ isSome: Bool, value: Field, }).sizeInFields`
