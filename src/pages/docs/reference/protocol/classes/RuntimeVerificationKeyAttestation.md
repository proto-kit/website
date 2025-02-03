---
title: RuntimeVerificationKeyAttestation
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / RuntimeVerificationKeyAttestation

# Class: RuntimeVerificationKeyAttestation

Defined in: [packages/protocol/src/prover/block/accummulators/RuntimeVerificationKeyTree.ts:8](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/prover/block/accummulators/RuntimeVerificationKeyTree.ts#L8)

## Extends

- `object`

## Constructors

### new RuntimeVerificationKeyAttestation()

> **new RuntimeVerificationKeyAttestation**(`value`): [`RuntimeVerificationKeyAttestation`](RuntimeVerificationKeyAttestation.md)

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### verificationKey

`VerificationKey` = `VerificationKey`

###### witness

[`VKTreeWitness`](VKTreeWitness.md) = `VKTreeWitness`

#### Returns

[`RuntimeVerificationKeyAttestation`](RuntimeVerificationKeyAttestation.md)

#### Inherited from

`Struct({ verificationKey: VerificationKey, witness: VKTreeWitness, }).constructor`

## Properties

### verificationKey

> **verificationKey**: `VerificationKey` = `VerificationKey`

Defined in: [packages/protocol/src/prover/block/accummulators/RuntimeVerificationKeyTree.ts:9](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/prover/block/accummulators/RuntimeVerificationKeyTree.ts#L9)

#### Inherited from

`Struct({ verificationKey: VerificationKey, witness: VKTreeWitness, }).verificationKey`

***

### witness

> **witness**: [`VKTreeWitness`](VKTreeWitness.md) = `VKTreeWitness`

Defined in: [packages/protocol/src/prover/block/accummulators/RuntimeVerificationKeyTree.ts:10](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/prover/block/accummulators/RuntimeVerificationKeyTree.ts#L10)

#### Inherited from

`Struct({ verificationKey: VerificationKey, witness: VKTreeWitness, }).witness`

***

### \_isStruct

> `static` **\_isStruct**: `true`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:104

#### Inherited from

`Struct({ verificationKey: VerificationKey, witness: VKTreeWitness, })._isStruct`

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

###### verificationKey

`VerificationKey` = `VerificationKey`

###### witness

[`VKTreeWitness`](VKTreeWitness.md) = `VKTreeWitness`

#### Returns

`void`

#### Inherited from

`Struct({ verificationKey: VerificationKey, witness: VKTreeWitness, }).check`

***

### empty()

> `static` **empty**: () => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:113

#### Returns

`object`

##### verificationKey

> **verificationKey**: `VerificationKey` = `VerificationKey`

##### witness

> **witness**: [`VKTreeWitness`](VKTreeWitness.md) = `VKTreeWitness`

#### Inherited from

`Struct({ verificationKey: VerificationKey, witness: VKTreeWitness, }).empty`

***

### fromFields()

> `static` **fromFields**: (`fields`, `aux`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:45

A function that returns an element of type `T` from the given provable and "auxiliary" data.

This function is the reverse operation of calling [toFields](RuntimeVerificationKeyAttestation.md#tofields) and toAuxilary methods on an element of type `T`.

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

##### verificationKey

> **verificationKey**: `VerificationKey` = `VerificationKey`

##### witness

> **witness**: [`VKTreeWitness`](VKTreeWitness.md) = `VKTreeWitness`

#### Inherited from

`Struct({ verificationKey: VerificationKey, witness: VKTreeWitness, }).fromFields`

***

### fromJSON()

> `static` **fromJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:112

#### Parameters

##### x

###### verificationKey

`string` = `VerificationKey`

###### witness

\{ `isLeft`: `boolean`[]; `path`: `string`[]; \} = `VKTreeWitness`

###### witness.isLeft

`boolean`[]

###### witness.path

`string`[]

#### Returns

`object`

##### verificationKey

> **verificationKey**: `VerificationKey` = `VerificationKey`

##### witness

> **witness**: [`VKTreeWitness`](VKTreeWitness.md) = `VKTreeWitness`

#### Inherited from

`Struct({ verificationKey: VerificationKey, witness: VKTreeWitness, }).fromJSON`

***

### fromValue

> `static` **fromValue**: (`x`) => `object` & (`value`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:68

Convert provable type from a normal JS type.

#### Inherited from

`Struct({ verificationKey: VerificationKey, witness: VKTreeWitness, }).fromValue`

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

###### verificationKey

`VerificationKey` = `VerificationKey`

###### witness

[`VKTreeWitness`](VKTreeWitness.md) = `VKTreeWitness`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

`Struct({ verificationKey: VerificationKey, witness: VKTreeWitness, }).toAuxiliary`

***

### toFields()

> `static` **toFields**: (`value`) => `Field`[]

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:24

A function that takes `value`, an element of type `T`, as argument and returns
an array of Field elements that make up the provable data of `value`.

#### Parameters

##### value

the element of type `T` to generate the Field array from.

###### verificationKey

`VerificationKey` = `VerificationKey`

###### witness

[`VKTreeWitness`](VKTreeWitness.md) = `VKTreeWitness`

#### Returns

`Field`[]

A Field array describing how this `T` element is made up of Field elements.

#### Inherited from

`Struct({ verificationKey: VerificationKey, witness: VKTreeWitness, }).toFields`

***

### toInput()

> `static` **toInput**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:107

#### Parameters

##### x

###### verificationKey

`VerificationKey` = `VerificationKey`

###### witness

[`VKTreeWitness`](VKTreeWitness.md) = `VKTreeWitness`

#### Returns

`object`

##### fields?

> `optional` **fields**: `Field`[]

##### packed?

> `optional` **packed**: \[`Field`, `number`\][]

#### Inherited from

`Struct({ verificationKey: VerificationKey, witness: VKTreeWitness, }).toInput`

***

### toJSON()

> `static` **toJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:111

#### Parameters

##### x

###### verificationKey

`VerificationKey` = `VerificationKey`

###### witness

[`VKTreeWitness`](VKTreeWitness.md) = `VKTreeWitness`

#### Returns

`object`

##### verificationKey

> **verificationKey**: `string` = `VerificationKey`

##### witness

> **witness**: `object` = `VKTreeWitness`

###### witness.isLeft

> **witness.isLeft**: `boolean`[]

###### witness.path

> **witness.path**: `string`[]

#### Inherited from

`Struct({ verificationKey: VerificationKey, witness: VKTreeWitness, }).toJSON`

***

### toValue()

> `static` **toValue**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:64

Convert provable type to a normal JS type.

#### Parameters

##### x

###### verificationKey

`VerificationKey` = `VerificationKey`

###### witness

[`VKTreeWitness`](VKTreeWitness.md) = `VKTreeWitness`

#### Returns

`object`

##### verificationKey

> **verificationKey**: `object` = `VerificationKey`

###### verificationKey.data

> **verificationKey.data**: `string`

###### verificationKey.hash

> **verificationKey.hash**: `bigint`

##### witness

> **witness**: `object` = `VKTreeWitness`

###### witness.isLeft

> **witness.isLeft**: `boolean`[]

###### witness.path

> **witness.path**: `bigint`[]

#### Inherited from

`Struct({ verificationKey: VerificationKey, witness: VKTreeWitness, }).toValue`

## Methods

### sizeInFields()

> `static` **sizeInFields**(): `number`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:51

Return the size of the `T` type in terms of Field type, as Field is the primitive type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of Field type.

#### Inherited from

`Struct({ verificationKey: VerificationKey, witness: VKTreeWitness, }).sizeInFields`
