---
title: MethodFeeConfigData
---

[**@proto-kit/library**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/library](../README.md) / MethodFeeConfigData

# Class: MethodFeeConfigData

Defined in: [packages/library/src/hooks/RuntimeFeeAnalyzerService.ts:32](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/library/src/hooks/RuntimeFeeAnalyzerService.ts#L32)

## Extends

- `object`

## Constructors

### new MethodFeeConfigData()

> **new MethodFeeConfigData**(`value`): [`MethodFeeConfigData`](MethodFeeConfigData.md)

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### baseFee

[`UInt64`](UInt64.md) = `UInt64`

###### methodId

`Field` = `Field`

###### perWeightUnitFee

[`UInt64`](UInt64.md) = `UInt64`

###### weight

[`UInt64`](UInt64.md) = `UInt64`

#### Returns

[`MethodFeeConfigData`](MethodFeeConfigData.md)

#### Inherited from

`Struct({ methodId: Field, baseFee: UInt64, perWeightUnitFee: UInt64, weight: UInt64, }).constructor`

## Properties

### baseFee

> **baseFee**: [`UInt64`](UInt64.md) = `UInt64`

Defined in: [packages/library/src/hooks/RuntimeFeeAnalyzerService.ts:34](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/library/src/hooks/RuntimeFeeAnalyzerService.ts#L34)

#### Inherited from

`Struct({ methodId: Field, baseFee: UInt64, perWeightUnitFee: UInt64, weight: UInt64, }).baseFee`

***

### methodId

> **methodId**: `Field` = `Field`

Defined in: [packages/library/src/hooks/RuntimeFeeAnalyzerService.ts:33](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/library/src/hooks/RuntimeFeeAnalyzerService.ts#L33)

#### Inherited from

`Struct({ methodId: Field, baseFee: UInt64, perWeightUnitFee: UInt64, weight: UInt64, }).methodId`

***

### perWeightUnitFee

> **perWeightUnitFee**: [`UInt64`](UInt64.md) = `UInt64`

Defined in: [packages/library/src/hooks/RuntimeFeeAnalyzerService.ts:35](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/library/src/hooks/RuntimeFeeAnalyzerService.ts#L35)

#### Inherited from

`Struct({ methodId: Field, baseFee: UInt64, perWeightUnitFee: UInt64, weight: UInt64, }).perWeightUnitFee`

***

### weight

> **weight**: [`UInt64`](UInt64.md) = `UInt64`

Defined in: [packages/library/src/hooks/RuntimeFeeAnalyzerService.ts:36](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/library/src/hooks/RuntimeFeeAnalyzerService.ts#L36)

#### Inherited from

`Struct({ methodId: Field, baseFee: UInt64, perWeightUnitFee: UInt64, weight: UInt64, }).weight`

***

### \_isStruct

> `static` **\_isStruct**: `true`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:104

#### Inherited from

`Struct({ methodId: Field, baseFee: UInt64, perWeightUnitFee: UInt64, weight: UInt64, })._isStruct`

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

###### baseFee

[`UInt64`](UInt64.md) = `UInt64`

###### methodId

`Field` = `Field`

###### perWeightUnitFee

[`UInt64`](UInt64.md) = `UInt64`

###### weight

[`UInt64`](UInt64.md) = `UInt64`

#### Returns

`void`

#### Inherited from

`Struct({ methodId: Field, baseFee: UInt64, perWeightUnitFee: UInt64, weight: UInt64, }).check`

***

### empty()

> `static` **empty**: () => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:113

#### Returns

`object`

##### baseFee

> **baseFee**: [`UInt64`](UInt64.md) = `UInt64`

##### methodId

> **methodId**: `Field` = `Field`

##### perWeightUnitFee

> **perWeightUnitFee**: [`UInt64`](UInt64.md) = `UInt64`

##### weight

> **weight**: [`UInt64`](UInt64.md) = `UInt64`

#### Inherited from

`Struct({ methodId: Field, baseFee: UInt64, perWeightUnitFee: UInt64, weight: UInt64, }).empty`

***

### fromFields()

> `static` **fromFields**: (`fields`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:78

#### Parameters

##### fields

`Field`[]

#### Returns

`object`

##### baseFee

> **baseFee**: [`UInt64`](UInt64.md) = `UInt64`

##### methodId

> **methodId**: `Field` = `Field`

##### perWeightUnitFee

> **perWeightUnitFee**: [`UInt64`](UInt64.md) = `UInt64`

##### weight

> **weight**: [`UInt64`](UInt64.md) = `UInt64`

#### Inherited from

`Struct({ methodId: Field, baseFee: UInt64, perWeightUnitFee: UInt64, weight: UInt64, }).fromFields`

***

### fromJSON()

> `static` **fromJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:112

#### Parameters

##### x

###### baseFee

\{ `value`: `string`; \} = `UInt64`

###### baseFee.value

`string` = `Field`

###### methodId

`string` = `Field`

###### perWeightUnitFee

\{ `value`: `string`; \} = `UInt64`

###### perWeightUnitFee.value

`string` = `Field`

###### weight

\{ `value`: `string`; \} = `UInt64`

###### weight.value

`string` = `Field`

#### Returns

`object`

##### baseFee

> **baseFee**: [`UInt64`](UInt64.md) = `UInt64`

##### methodId

> **methodId**: `Field` = `Field`

##### perWeightUnitFee

> **perWeightUnitFee**: [`UInt64`](UInt64.md) = `UInt64`

##### weight

> **weight**: [`UInt64`](UInt64.md) = `UInt64`

#### Inherited from

`Struct({ methodId: Field, baseFee: UInt64, perWeightUnitFee: UInt64, weight: UInt64, }).fromJSON`

***

### fromValue

> `static` **fromValue**: (`x`) => `object` & (`value`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:68

Convert provable type from a normal JS type.

#### Inherited from

`Struct({ methodId: Field, baseFee: UInt64, perWeightUnitFee: UInt64, weight: UInt64, }).fromValue`

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

###### baseFee

[`UInt64`](UInt64.md) = `UInt64`

###### methodId

`Field` = `Field`

###### perWeightUnitFee

[`UInt64`](UInt64.md) = `UInt64`

###### weight

[`UInt64`](UInt64.md) = `UInt64`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

`Struct({ methodId: Field, baseFee: UInt64, perWeightUnitFee: UInt64, weight: UInt64, }).toAuxiliary`

***

### toFields()

> `static` **toFields**: (`value`) => `Field`[]

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:24

A function that takes `value`, an element of type `T`, as argument and returns
an array of Field elements that make up the provable data of `value`.

#### Parameters

##### value

the element of type `T` to generate the Field array from.

###### baseFee

[`UInt64`](UInt64.md) = `UInt64`

###### methodId

`Field` = `Field`

###### perWeightUnitFee

[`UInt64`](UInt64.md) = `UInt64`

###### weight

[`UInt64`](UInt64.md) = `UInt64`

#### Returns

`Field`[]

A Field array describing how this `T` element is made up of Field elements.

#### Inherited from

`Struct({ methodId: Field, baseFee: UInt64, perWeightUnitFee: UInt64, weight: UInt64, }).toFields`

***

### toInput()

> `static` **toInput**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:107

#### Parameters

##### x

###### baseFee

[`UInt64`](UInt64.md) = `UInt64`

###### methodId

`Field` = `Field`

###### perWeightUnitFee

[`UInt64`](UInt64.md) = `UInt64`

###### weight

[`UInt64`](UInt64.md) = `UInt64`

#### Returns

`object`

##### fields?

> `optional` **fields**: `Field`[]

##### packed?

> `optional` **packed**: \[`Field`, `number`\][]

#### Inherited from

`Struct({ methodId: Field, baseFee: UInt64, perWeightUnitFee: UInt64, weight: UInt64, }).toInput`

***

### toJSON()

> `static` **toJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:111

#### Parameters

##### x

###### baseFee

[`UInt64`](UInt64.md) = `UInt64`

###### methodId

`Field` = `Field`

###### perWeightUnitFee

[`UInt64`](UInt64.md) = `UInt64`

###### weight

[`UInt64`](UInt64.md) = `UInt64`

#### Returns

`object`

##### baseFee

> **baseFee**: `object` = `UInt64`

###### baseFee.value

> **baseFee.value**: `string` = `Field`

##### methodId

> **methodId**: `string` = `Field`

##### perWeightUnitFee

> **perWeightUnitFee**: `object` = `UInt64`

###### perWeightUnitFee.value

> **perWeightUnitFee.value**: `string` = `Field`

##### weight

> **weight**: `object` = `UInt64`

###### weight.value

> **weight.value**: `string` = `Field`

#### Inherited from

`Struct({ methodId: Field, baseFee: UInt64, perWeightUnitFee: UInt64, weight: UInt64, }).toJSON`

***

### toValue()

> `static` **toValue**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:64

Convert provable type to a normal JS type.

#### Parameters

##### x

###### baseFee

[`UInt64`](UInt64.md) = `UInt64`

###### methodId

`Field` = `Field`

###### perWeightUnitFee

[`UInt64`](UInt64.md) = `UInt64`

###### weight

[`UInt64`](UInt64.md) = `UInt64`

#### Returns

`object`

##### baseFee

> **baseFee**: `object` = `UInt64`

###### baseFee.value

> **baseFee.value**: `bigint` = `Field`

##### methodId

> **methodId**: `bigint` = `Field`

##### perWeightUnitFee

> **perWeightUnitFee**: `object` = `UInt64`

###### perWeightUnitFee.value

> **perWeightUnitFee.value**: `bigint` = `Field`

##### weight

> **weight**: `object` = `UInt64`

###### weight.value

> **weight.value**: `bigint` = `Field`

#### Inherited from

`Struct({ methodId: Field, baseFee: UInt64, perWeightUnitFee: UInt64, weight: UInt64, }).toValue`

## Methods

### hash()

> **hash**(): `Field`

Defined in: [packages/library/src/hooks/RuntimeFeeAnalyzerService.ts:38](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/library/src/hooks/RuntimeFeeAnalyzerService.ts#L38)

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

`Struct({ methodId: Field, baseFee: UInt64, perWeightUnitFee: UInt64, weight: UInt64, }).sizeInFields`
