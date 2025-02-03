---
title: MethodVKConfigData
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / MethodVKConfigData

# Class: MethodVKConfigData

Defined in: [packages/protocol/src/prover/block/accummulators/RuntimeVerificationKeyTree.ts:13](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/prover/block/accummulators/RuntimeVerificationKeyTree.ts#L13)

## Extends

- `object`

## Constructors

### new MethodVKConfigData()

> **new MethodVKConfigData**(`value`): [`MethodVKConfigData`](MethodVKConfigData.md)

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### methodId

`Field` = `Field`

###### vkHash

`Field` = `Field`

#### Returns

[`MethodVKConfigData`](MethodVKConfigData.md)

#### Inherited from

`Struct({ methodId: Field, vkHash: Field, }).constructor`

## Properties

### methodId

> **methodId**: `Field` = `Field`

Defined in: [packages/protocol/src/prover/block/accummulators/RuntimeVerificationKeyTree.ts:14](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/prover/block/accummulators/RuntimeVerificationKeyTree.ts#L14)

#### Inherited from

`Struct({ methodId: Field, vkHash: Field, }).methodId`

***

### vkHash

> **vkHash**: `Field` = `Field`

Defined in: [packages/protocol/src/prover/block/accummulators/RuntimeVerificationKeyTree.ts:15](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/prover/block/accummulators/RuntimeVerificationKeyTree.ts#L15)

#### Inherited from

`Struct({ methodId: Field, vkHash: Field, }).vkHash`

***

### \_isStruct

> `static` **\_isStruct**: `true`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:104

#### Inherited from

`Struct({ methodId: Field, vkHash: Field, })._isStruct`

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

###### methodId

`Field` = `Field`

###### vkHash

`Field` = `Field`

#### Returns

`void`

#### Inherited from

`Struct({ methodId: Field, vkHash: Field, }).check`

***

### empty()

> `static` **empty**: () => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:113

#### Returns

`object`

##### methodId

> **methodId**: `Field` = `Field`

##### vkHash

> **vkHash**: `Field` = `Field`

#### Inherited from

`Struct({ methodId: Field, vkHash: Field, }).empty`

***

### fromFields()

> `static` **fromFields**: (`fields`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:78

#### Parameters

##### fields

`Field`[]

#### Returns

`object`

##### methodId

> **methodId**: `Field` = `Field`

##### vkHash

> **vkHash**: `Field` = `Field`

#### Inherited from

`Struct({ methodId: Field, vkHash: Field, }).fromFields`

***

### fromJSON()

> `static` **fromJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:112

#### Parameters

##### x

###### methodId

`string` = `Field`

###### vkHash

`string` = `Field`

#### Returns

`object`

##### methodId

> **methodId**: `Field` = `Field`

##### vkHash

> **vkHash**: `Field` = `Field`

#### Inherited from

`Struct({ methodId: Field, vkHash: Field, }).fromJSON`

***

### fromValue

> `static` **fromValue**: (`x`) => `object` & (`value`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:68

Convert provable type from a normal JS type.

#### Inherited from

`Struct({ methodId: Field, vkHash: Field, }).fromValue`

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

###### methodId

`Field` = `Field`

###### vkHash

`Field` = `Field`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

`Struct({ methodId: Field, vkHash: Field, }).toAuxiliary`

***

### toFields()

> `static` **toFields**: (`value`) => `Field`[]

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:24

A function that takes `value`, an element of type `T`, as argument and returns
an array of Field elements that make up the provable data of `value`.

#### Parameters

##### value

the element of type `T` to generate the Field array from.

###### methodId

`Field` = `Field`

###### vkHash

`Field` = `Field`

#### Returns

`Field`[]

A Field array describing how this `T` element is made up of Field elements.

#### Inherited from

`Struct({ methodId: Field, vkHash: Field, }).toFields`

***

### toInput()

> `static` **toInput**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:107

#### Parameters

##### x

###### methodId

`Field` = `Field`

###### vkHash

`Field` = `Field`

#### Returns

`object`

##### fields?

> `optional` **fields**: `Field`[]

##### packed?

> `optional` **packed**: \[`Field`, `number`\][]

#### Inherited from

`Struct({ methodId: Field, vkHash: Field, }).toInput`

***

### toJSON()

> `static` **toJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:111

#### Parameters

##### x

###### methodId

`Field` = `Field`

###### vkHash

`Field` = `Field`

#### Returns

`object`

##### methodId

> **methodId**: `string` = `Field`

##### vkHash

> **vkHash**: `string` = `Field`

#### Inherited from

`Struct({ methodId: Field, vkHash: Field, }).toJSON`

***

### toValue()

> `static` **toValue**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:64

Convert provable type to a normal JS type.

#### Parameters

##### x

###### methodId

`Field` = `Field`

###### vkHash

`Field` = `Field`

#### Returns

`object`

##### methodId

> **methodId**: `bigint` = `Field`

##### vkHash

> **vkHash**: `bigint` = `Field`

#### Inherited from

`Struct({ methodId: Field, vkHash: Field, }).toValue`

## Methods

### hash()

> **hash**(): `Field`

Defined in: [packages/protocol/src/prover/block/accummulators/RuntimeVerificationKeyTree.ts:17](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/prover/block/accummulators/RuntimeVerificationKeyTree.ts#L17)

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

`Struct({ methodId: Field, vkHash: Field, }).sizeInFields`
