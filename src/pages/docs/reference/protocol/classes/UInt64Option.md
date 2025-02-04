---
title: UInt64Option
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / UInt64Option

# Class: UInt64Option

Defined in: [packages/protocol/src/model/transaction/ValueOption.ts:24](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/model/transaction/ValueOption.ts#L24)

## Extends

- `Generic`\<`UInt64`, `this`\>

## Constructors

### new UInt64Option()

> **new UInt64Option**(`value`): [`UInt64Option`](UInt64Option.md)

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### isSome

`Bool` = `Bool`

###### value

`UInt64` = `valueType`

#### Returns

[`UInt64Option`](UInt64Option.md)

#### Inherited from

`genericOptionFactory<UInt64>(UInt64).constructor`

## Properties

### isSome

> **isSome**: `Bool` = `Bool`

Defined in: [packages/protocol/src/model/transaction/ValueOption.ts:5](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/model/transaction/ValueOption.ts#L5)

#### Inherited from

`genericOptionFactory<UInt64>(UInt64).isSome`

***

### value

> **value**: `UInt64` = `valueType`

Defined in: [packages/protocol/src/model/transaction/ValueOption.ts:6](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/model/transaction/ValueOption.ts#L6)

#### Inherited from

`genericOptionFactory<UInt64>(UInt64).value`

***

### \_isStruct

> `static` **\_isStruct**: `true`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:104

#### Inherited from

`genericOptionFactory<UInt64>(UInt64)._isStruct`

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

`UInt64` = `valueType`

#### Returns

`void`

#### Inherited from

`genericOptionFactory<UInt64>(UInt64).check`

***

### empty()

> `static` **empty**: () => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:113

#### Returns

`object`

##### isSome

> **isSome**: `Bool` = `Bool`

##### value

> **value**: `UInt64` = `valueType`

#### Inherited from

`genericOptionFactory<UInt64>(UInt64).empty`

***

### fromFields()

> `static` **fromFields**: (`fields`, `aux`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:45

A function that returns an element of type `T` from the given provable and "auxiliary" data.

This function is the reverse operation of calling [toFields](UInt64Option.md#tofields) and toAuxilary methods on an element of type `T`.

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

##### isSome

> **isSome**: `Bool` = `Bool`

##### value

> **value**: `UInt64` = `valueType`

#### Inherited from

`genericOptionFactory<UInt64>(UInt64).fromFields`

***

### fromJSON()

> `static` **fromJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:112

#### Parameters

##### x

###### isSome

`boolean` = `Bool`

###### value

`any` = `valueType`

#### Returns

`object`

##### isSome

> **isSome**: `Bool` = `Bool`

##### value

> **value**: `UInt64` = `valueType`

#### Inherited from

`genericOptionFactory<UInt64>(UInt64).fromJSON`

***

### fromValue

> `static` **fromValue**: (`x`) => `object` & (`value`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:68

Convert provable type from a normal JS type.

#### Inherited from

`genericOptionFactory<UInt64>(UInt64).fromValue`

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

`UInt64` = `valueType`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

`genericOptionFactory<UInt64>(UInt64).toAuxiliary`

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

`UInt64` = `valueType`

#### Returns

`Field`[]

A Field array describing how this `T` element is made up of Field elements.

#### Inherited from

`genericOptionFactory<UInt64>(UInt64).toFields`

***

### toInput()

> `static` **toInput**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:107

#### Parameters

##### x

###### isSome

`Bool` = `Bool`

###### value

`UInt64` = `valueType`

#### Returns

`object`

##### fields?

> `optional` **fields**: `Field`[]

##### packed?

> `optional` **packed**: \[`Field`, `number`\][]

#### Inherited from

`genericOptionFactory<UInt64>(UInt64).toInput`

***

### toJSON()

> `static` **toJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:111

#### Parameters

##### x

###### isSome

`Bool` = `Bool`

###### value

`UInt64` = `valueType`

#### Returns

`object`

##### isSome

> **isSome**: `boolean` = `Bool`

##### value

> **value**: `any` = `valueType`

#### Inherited from

`genericOptionFactory<UInt64>(UInt64).toJSON`

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

`UInt64` = `valueType`

#### Returns

`object`

##### isSome

> **isSome**: `boolean` = `Bool`

##### value

> **value**: `any` = `valueType`

#### Inherited from

`genericOptionFactory<UInt64>(UInt64).toValue`

## Methods

### fromSome()

> `static` **fromSome**(`value`): `Generic`\<`UInt64`\>

Defined in: [packages/protocol/src/model/transaction/ValueOption.ts:8](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/model/transaction/ValueOption.ts#L8)

#### Parameters

##### value

`UInt64`

#### Returns

`Generic`\<`UInt64`\>

#### Inherited from

`genericOptionFactory<UInt64>(UInt64).fromSome`

***

### none()

> `static` **none**(`value`): `Generic`\<`UInt64`\>

Defined in: [packages/protocol/src/model/transaction/ValueOption.ts:15](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/model/transaction/ValueOption.ts#L15)

#### Parameters

##### value

`UInt64`

#### Returns

`Generic`\<`UInt64`\>

#### Inherited from

`genericOptionFactory<UInt64>(UInt64).none`

***

### sizeInFields()

> `static` **sizeInFields**(): `number`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:51

Return the size of the `T` type in terms of Field type, as Field is the primitive type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of Field type.

#### Inherited from

`genericOptionFactory<UInt64>(UInt64).sizeInFields`
