---
title: BlockHashTreeEntry
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / BlockHashTreeEntry

# Class: BlockHashTreeEntry

Defined in: [packages/protocol/src/prover/block/accummulators/BlockHashMerkleTree.ts:7](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/prover/block/accummulators/BlockHashMerkleTree.ts#L7)

## Extends

- `object`

## Constructors

### new BlockHashTreeEntry()

> **new BlockHashTreeEntry**(`value`): [`BlockHashTreeEntry`](BlockHashTreeEntry.md)

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### blockHash

`Field` = `Field`

###### closed

`Bool` = `Bool`

#### Returns

[`BlockHashTreeEntry`](BlockHashTreeEntry.md)

#### Inherited from

`Struct({ blockHash: Field, closed: Bool, // TODO We could add startingEternalTransactionsHash here to offer // a more trivial connection to the sequence state }).constructor`

## Properties

### blockHash

> **blockHash**: `Field` = `Field`

Defined in: [packages/protocol/src/prover/block/accummulators/BlockHashMerkleTree.ts:8](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/prover/block/accummulators/BlockHashMerkleTree.ts#L8)

#### Inherited from

`Struct({ blockHash: Field, closed: Bool, // TODO We could add startingEternalTransactionsHash here to offer // a more trivial connection to the sequence state }).blockHash`

***

### closed

> **closed**: `Bool` = `Bool`

Defined in: [packages/protocol/src/prover/block/accummulators/BlockHashMerkleTree.ts:9](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/prover/block/accummulators/BlockHashMerkleTree.ts#L9)

#### Inherited from

`Struct({ blockHash: Field, closed: Bool, // TODO We could add startingEternalTransactionsHash here to offer // a more trivial connection to the sequence state }).closed`

***

### \_isStruct

> `static` **\_isStruct**: `true`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:104

#### Inherited from

`Struct({ blockHash: Field, closed: Bool, // TODO We could add startingEternalTransactionsHash here to offer // a more trivial connection to the sequence state })._isStruct`

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

###### blockHash

`Field` = `Field`

###### closed

`Bool` = `Bool`

#### Returns

`void`

#### Inherited from

`Struct({ blockHash: Field, closed: Bool, // TODO We could add startingEternalTransactionsHash here to offer // a more trivial connection to the sequence state }).check`

***

### empty()

> `static` **empty**: () => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:113

#### Returns

`object`

##### blockHash

> **blockHash**: `Field` = `Field`

##### closed

> **closed**: `Bool` = `Bool`

#### Inherited from

`Struct({ blockHash: Field, closed: Bool, // TODO We could add startingEternalTransactionsHash here to offer // a more trivial connection to the sequence state }).empty`

***

### fromFields()

> `static` **fromFields**: (`fields`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:78

#### Parameters

##### fields

`Field`[]

#### Returns

`object`

##### blockHash

> **blockHash**: `Field` = `Field`

##### closed

> **closed**: `Bool` = `Bool`

#### Inherited from

`Struct({ blockHash: Field, closed: Bool, // TODO We could add startingEternalTransactionsHash here to offer // a more trivial connection to the sequence state }).fromFields`

***

### fromJSON()

> `static` **fromJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:112

#### Parameters

##### x

###### blockHash

`string` = `Field`

###### closed

`boolean` = `Bool`

#### Returns

`object`

##### blockHash

> **blockHash**: `Field` = `Field`

##### closed

> **closed**: `Bool` = `Bool`

#### Inherited from

`Struct({ blockHash: Field, closed: Bool, // TODO We could add startingEternalTransactionsHash here to offer // a more trivial connection to the sequence state }).fromJSON`

***

### fromValue

> `static` **fromValue**: (`x`) => `object` & (`value`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:68

Convert provable type from a normal JS type.

#### Inherited from

`Struct({ blockHash: Field, closed: Bool, // TODO We could add startingEternalTransactionsHash here to offer // a more trivial connection to the sequence state }).fromValue`

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

###### blockHash

`Field` = `Field`

###### closed

`Bool` = `Bool`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

`Struct({ blockHash: Field, closed: Bool, // TODO We could add startingEternalTransactionsHash here to offer // a more trivial connection to the sequence state }).toAuxiliary`

***

### toFields()

> `static` **toFields**: (`value`) => `Field`[]

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:24

A function that takes `value`, an element of type `T`, as argument and returns
an array of Field elements that make up the provable data of `value`.

#### Parameters

##### value

the element of type `T` to generate the Field array from.

###### blockHash

`Field` = `Field`

###### closed

`Bool` = `Bool`

#### Returns

`Field`[]

A Field array describing how this `T` element is made up of Field elements.

#### Inherited from

`Struct({ blockHash: Field, closed: Bool, // TODO We could add startingEternalTransactionsHash here to offer // a more trivial connection to the sequence state }).toFields`

***

### toInput()

> `static` **toInput**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:107

#### Parameters

##### x

###### blockHash

`Field` = `Field`

###### closed

`Bool` = `Bool`

#### Returns

`object`

##### fields?

> `optional` **fields**: `Field`[]

##### packed?

> `optional` **packed**: \[`Field`, `number`\][]

#### Inherited from

`Struct({ blockHash: Field, closed: Bool, // TODO We could add startingEternalTransactionsHash here to offer // a more trivial connection to the sequence state }).toInput`

***

### toJSON()

> `static` **toJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:111

#### Parameters

##### x

###### blockHash

`Field` = `Field`

###### closed

`Bool` = `Bool`

#### Returns

`object`

##### blockHash

> **blockHash**: `string` = `Field`

##### closed

> **closed**: `boolean` = `Bool`

#### Inherited from

`Struct({ blockHash: Field, closed: Bool, // TODO We could add startingEternalTransactionsHash here to offer // a more trivial connection to the sequence state }).toJSON`

***

### toValue()

> `static` **toValue**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:64

Convert provable type to a normal JS type.

#### Parameters

##### x

###### blockHash

`Field` = `Field`

###### closed

`Bool` = `Bool`

#### Returns

`object`

##### blockHash

> **blockHash**: `bigint` = `Field`

##### closed

> **closed**: `boolean` = `Bool`

#### Inherited from

`Struct({ blockHash: Field, closed: Bool, // TODO We could add startingEternalTransactionsHash here to offer // a more trivial connection to the sequence state }).toValue`

## Methods

### hash()

> **hash**(): `Field`

Defined in: [packages/protocol/src/prover/block/accummulators/BlockHashMerkleTree.ts:13](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/prover/block/accummulators/BlockHashMerkleTree.ts#L13)

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

`Struct({ blockHash: Field, closed: Bool, // TODO We could add startingEternalTransactionsHash here to offer // a more trivial connection to the sequence state }).sizeInFields`
