---
title: ProvableStateTransitionType
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / ProvableStateTransitionType

# Class: ProvableStateTransitionType

Defined in: [packages/protocol/src/model/StateTransitionProvableBatch.ts:27](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/StateTransitionProvableBatch.ts#L27)

## Extends

- `object`

## Constructors

### new ProvableStateTransitionType()

> **new ProvableStateTransitionType**(`value`): [`ProvableStateTransitionType`](ProvableStateTransitionType.md)

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### type

`Bool` = `Bool`

#### Returns

[`ProvableStateTransitionType`](ProvableStateTransitionType.md)

#### Inherited from

`Struct({ type: Bool, }).constructor`

## Properties

### type

> **type**: `Bool` = `Bool`

Defined in: [packages/protocol/src/model/StateTransitionProvableBatch.ts:28](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/StateTransitionProvableBatch.ts#L28)

#### Inherited from

`Struct({ type: Bool, }).type`

***

### \_isStruct

> `static` **\_isStruct**: `true`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:104

#### Inherited from

`Struct({ type: Bool, })._isStruct`

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

###### type

`Bool` = `Bool`

#### Returns

`void`

#### Inherited from

`Struct({ type: Bool, }).check`

***

### empty()

> `static` **empty**: () => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:113

#### Returns

`object`

##### type

> **type**: `Bool` = `Bool`

#### Inherited from

`Struct({ type: Bool, }).empty`

***

### fromFields()

> `static` **fromFields**: (`fields`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:78

#### Parameters

##### fields

`Field`[]

#### Returns

`object`

##### type

> **type**: `Bool` = `Bool`

#### Inherited from

`Struct({ type: Bool, }).fromFields`

***

### fromJSON()

> `static` **fromJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:112

#### Parameters

##### x

###### type

`boolean` = `Bool`

#### Returns

`object`

##### type

> **type**: `Bool` = `Bool`

#### Inherited from

`Struct({ type: Bool, }).fromJSON`

***

### fromValue

> `static` **fromValue**: (`x`) => `object` & (`value`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:68

Convert provable type from a normal JS type.

#### Inherited from

`Struct({ type: Bool, }).fromValue`

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

###### type

`Bool` = `Bool`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

`Struct({ type: Bool, }).toAuxiliary`

***

### toFields()

> `static` **toFields**: (`value`) => `Field`[]

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:24

A function that takes `value`, an element of type `T`, as argument and returns
an array of Field elements that make up the provable data of `value`.

#### Parameters

##### value

the element of type `T` to generate the Field array from.

###### type

`Bool` = `Bool`

#### Returns

`Field`[]

A Field array describing how this `T` element is made up of Field elements.

#### Inherited from

`Struct({ type: Bool, }).toFields`

***

### toInput()

> `static` **toInput**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:107

#### Parameters

##### x

###### type

`Bool` = `Bool`

#### Returns

`object`

##### fields?

> `optional` **fields**: `Field`[]

##### packed?

> `optional` **packed**: \[`Field`, `number`\][]

#### Inherited from

`Struct({ type: Bool, }).toInput`

***

### toJSON()

> `static` **toJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:111

#### Parameters

##### x

###### type

`Bool` = `Bool`

#### Returns

`object`

##### type

> **type**: `boolean` = `Bool`

#### Inherited from

`Struct({ type: Bool, }).toJSON`

***

### toValue()

> `static` **toValue**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:64

Convert provable type to a normal JS type.

#### Parameters

##### x

###### type

`Bool` = `Bool`

#### Returns

`object`

##### type

> **type**: `boolean` = `Bool`

#### Inherited from

`Struct({ type: Bool, }).toValue`

## Accessors

### normal

#### Get Signature

> **get** `static` **normal**(): [`ProvableStateTransitionType`](ProvableStateTransitionType.md)

Defined in: [packages/protocol/src/model/StateTransitionProvableBatch.ts:30](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/StateTransitionProvableBatch.ts#L30)

##### Returns

[`ProvableStateTransitionType`](ProvableStateTransitionType.md)

***

### protocol

#### Get Signature

> **get** `static` **protocol**(): [`ProvableStateTransitionType`](ProvableStateTransitionType.md)

Defined in: [packages/protocol/src/model/StateTransitionProvableBatch.ts:36](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/StateTransitionProvableBatch.ts#L36)

##### Returns

[`ProvableStateTransitionType`](ProvableStateTransitionType.md)

## Methods

### isNormal()

> **isNormal**(): `Bool`

Defined in: [packages/protocol/src/model/StateTransitionProvableBatch.ts:42](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/StateTransitionProvableBatch.ts#L42)

#### Returns

`Bool`

***

### isProtocol()

> **isProtocol**(): `Bool`

Defined in: [packages/protocol/src/model/StateTransitionProvableBatch.ts:46](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/StateTransitionProvableBatch.ts#L46)

#### Returns

`Bool`

***

### sizeInFields()

> `static` **sizeInFields**(): `number`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:51

Return the size of the `T` type in terms of Field type, as Field is the primitive type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of Field type.

#### Inherited from

`Struct({ type: Bool, }).sizeInFields`
