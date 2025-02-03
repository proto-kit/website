---
title: ProvableStateTransition
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / ProvableStateTransition

# Class: ProvableStateTransition

Defined in: [packages/protocol/src/model/StateTransition.ts:10](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/StateTransition.ts#L10)

Provable representation of a State Transition, used to
normalize state transitions of various value types for
the state transition circuit.

## Extends

- `object`

## Constructors

### new ProvableStateTransition()

> **new ProvableStateTransition**(`value`): [`ProvableStateTransition`](ProvableStateTransition.md)

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### from

[`ProvableOption`](ProvableOption.md) = `ProvableOption`

###### path

`Field` = `Field`

###### to

[`ProvableOption`](ProvableOption.md) = `ProvableOption`

#### Returns

[`ProvableStateTransition`](ProvableStateTransition.md)

#### Inherited from

`` Struct({ path: Field, // must be applied even if `None` from: ProvableOption, // must be ignored if `None` to: ProvableOption, }).constructor ``

## Properties

### from

> **from**: [`ProvableOption`](ProvableOption.md) = `ProvableOption`

Defined in: [packages/protocol/src/model/StateTransition.ts:14](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/StateTransition.ts#L14)

#### Inherited from

`` Struct({ path: Field, // must be applied even if `None` from: ProvableOption, // must be ignored if `None` to: ProvableOption, }).from ``

***

### path

> **path**: `Field` = `Field`

Defined in: [packages/protocol/src/model/StateTransition.ts:11](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/StateTransition.ts#L11)

#### Inherited from

`` Struct({ path: Field, // must be applied even if `None` from: ProvableOption, // must be ignored if `None` to: ProvableOption, }).path ``

***

### to

> **to**: [`ProvableOption`](ProvableOption.md) = `ProvableOption`

Defined in: [packages/protocol/src/model/StateTransition.ts:17](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/StateTransition.ts#L17)

#### Inherited from

`` Struct({ path: Field, // must be applied even if `None` from: ProvableOption, // must be ignored if `None` to: ProvableOption, }).to ``

***

### \_isStruct

> `static` **\_isStruct**: `true`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:104

#### Inherited from

`` Struct({ path: Field, // must be applied even if `None` from: ProvableOption, // must be ignored if `None` to: ProvableOption, })._isStruct ``

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

###### from

[`ProvableOption`](ProvableOption.md) = `ProvableOption`

###### path

`Field` = `Field`

###### to

[`ProvableOption`](ProvableOption.md) = `ProvableOption`

#### Returns

`void`

#### Inherited from

`` Struct({ path: Field, // must be applied even if `None` from: ProvableOption, // must be ignored if `None` to: ProvableOption, }).check ``

***

### empty()

> `static` **empty**: () => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:113

#### Returns

`object`

##### from

> **from**: [`ProvableOption`](ProvableOption.md) = `ProvableOption`

##### path

> **path**: `Field` = `Field`

##### to

> **to**: [`ProvableOption`](ProvableOption.md) = `ProvableOption`

#### Inherited from

`` Struct({ path: Field, // must be applied even if `None` from: ProvableOption, // must be ignored if `None` to: ProvableOption, }).empty ``

***

### fromFields()

> `static` **fromFields**: (`fields`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:78

#### Parameters

##### fields

`Field`[]

#### Returns

`object`

##### from

> **from**: [`ProvableOption`](ProvableOption.md) = `ProvableOption`

##### path

> **path**: `Field` = `Field`

##### to

> **to**: [`ProvableOption`](ProvableOption.md) = `ProvableOption`

#### Inherited from

`` Struct({ path: Field, // must be applied even if `None` from: ProvableOption, // must be ignored if `None` to: ProvableOption, }).fromFields ``

***

### fromJSON()

> `static` **fromJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:112

#### Parameters

##### x

###### from

\{ `isSome`: `boolean`; `value`: `string`; \} = `ProvableOption`

###### from.isSome

`boolean` = `Bool`

###### from.value

`string` = `Field`

###### path

`string` = `Field`

###### to

\{ `isSome`: `boolean`; `value`: `string`; \} = `ProvableOption`

###### to.isSome

`boolean` = `Bool`

###### to.value

`string` = `Field`

#### Returns

`object`

##### from

> **from**: [`ProvableOption`](ProvableOption.md) = `ProvableOption`

##### path

> **path**: `Field` = `Field`

##### to

> **to**: [`ProvableOption`](ProvableOption.md) = `ProvableOption`

#### Inherited from

`` Struct({ path: Field, // must be applied even if `None` from: ProvableOption, // must be ignored if `None` to: ProvableOption, }).fromJSON ``

***

### fromValue

> `static` **fromValue**: (`x`) => `object` & (`value`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:68

Convert provable type from a normal JS type.

#### Inherited from

`` Struct({ path: Field, // must be applied even if `None` from: ProvableOption, // must be ignored if `None` to: ProvableOption, }).fromValue ``

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

###### from

[`ProvableOption`](ProvableOption.md) = `ProvableOption`

###### path

`Field` = `Field`

###### to

[`ProvableOption`](ProvableOption.md) = `ProvableOption`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

`` Struct({ path: Field, // must be applied even if `None` from: ProvableOption, // must be ignored if `None` to: ProvableOption, }).toAuxiliary ``

***

### toFields()

> `static` **toFields**: (`value`) => `Field`[]

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:24

A function that takes `value`, an element of type `T`, as argument and returns
an array of Field elements that make up the provable data of `value`.

#### Parameters

##### value

the element of type `T` to generate the Field array from.

###### from

[`ProvableOption`](ProvableOption.md) = `ProvableOption`

###### path

`Field` = `Field`

###### to

[`ProvableOption`](ProvableOption.md) = `ProvableOption`

#### Returns

`Field`[]

A Field array describing how this `T` element is made up of Field elements.

#### Inherited from

`` Struct({ path: Field, // must be applied even if `None` from: ProvableOption, // must be ignored if `None` to: ProvableOption, }).toFields ``

***

### toInput()

> `static` **toInput**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:107

#### Parameters

##### x

###### from

[`ProvableOption`](ProvableOption.md) = `ProvableOption`

###### path

`Field` = `Field`

###### to

[`ProvableOption`](ProvableOption.md) = `ProvableOption`

#### Returns

`object`

##### fields?

> `optional` **fields**: `Field`[]

##### packed?

> `optional` **packed**: \[`Field`, `number`\][]

#### Inherited from

`` Struct({ path: Field, // must be applied even if `None` from: ProvableOption, // must be ignored if `None` to: ProvableOption, }).toInput ``

***

### toJSON()

> `static` **toJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:111

#### Parameters

##### x

###### from

[`ProvableOption`](ProvableOption.md) = `ProvableOption`

###### path

`Field` = `Field`

###### to

[`ProvableOption`](ProvableOption.md) = `ProvableOption`

#### Returns

`object`

##### from

> **from**: `object` = `ProvableOption`

###### from.isSome

> **from.isSome**: `boolean` = `Bool`

###### from.value

> **from.value**: `string` = `Field`

##### path

> **path**: `string` = `Field`

##### to

> **to**: `object` = `ProvableOption`

###### to.isSome

> **to.isSome**: `boolean` = `Bool`

###### to.value

> **to.value**: `string` = `Field`

#### Inherited from

`` Struct({ path: Field, // must be applied even if `None` from: ProvableOption, // must be ignored if `None` to: ProvableOption, }).toJSON ``

***

### toValue()

> `static` **toValue**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:64

Convert provable type to a normal JS type.

#### Parameters

##### x

###### from

[`ProvableOption`](ProvableOption.md) = `ProvableOption`

###### path

`Field` = `Field`

###### to

[`ProvableOption`](ProvableOption.md) = `ProvableOption`

#### Returns

`object`

##### from

> **from**: `object` = `ProvableOption`

###### from.isSome

> **from.isSome**: `boolean` = `Bool`

###### from.value

> **from.value**: `bigint` = `Field`

##### path

> **path**: `bigint` = `Field`

##### to

> **to**: `object` = `ProvableOption`

###### to.isSome

> **to.isSome**: `boolean` = `Bool`

###### to.value

> **to.value**: `bigint` = `Field`

#### Inherited from

`` Struct({ path: Field, // must be applied even if `None` from: ProvableOption, // must be ignored if `None` to: ProvableOption, }).toValue ``

## Methods

### dummy()

> `static` **dummy**(): [`ProvableStateTransition`](ProvableStateTransition.md)

Defined in: [packages/protocol/src/model/StateTransition.ts:19](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/StateTransition.ts#L19)

#### Returns

[`ProvableStateTransition`](ProvableStateTransition.md)

***

### sizeInFields()

> `static` **sizeInFields**(): `number`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:51

Return the size of the `T` type in terms of Field type, as Field is the primitive type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of Field type.

#### Inherited from

`` Struct({ path: Field, // must be applied even if `None` from: ProvableOption, // must be ignored if `None` to: ProvableOption, }).sizeInFields ``
