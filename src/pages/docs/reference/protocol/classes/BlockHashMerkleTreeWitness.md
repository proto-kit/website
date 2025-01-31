---
title: BlockHashMerkleTreeWitness
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / BlockHashMerkleTreeWitness

# Class: BlockHashMerkleTreeWitness

Defined in: [packages/protocol/src/prover/block/accummulators/BlockHashMerkleTree.ts:5](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/prover/block/accummulators/BlockHashMerkleTree.ts#L5)

## Extends

- [`WITNESS`](VKTree.md#witness)

## Constructors

### new BlockHashMerkleTreeWitness()

> **new BlockHashMerkleTreeWitness**(`value`): [`BlockHashMerkleTreeWitness`](BlockHashMerkleTreeWitness.md)

Defined in: packages/common/dist/trees/RollupMerkleTree.d.ts:4

#### Parameters

##### value

###### isLeft

`Bool`[]

###### path

`Field`[]

#### Returns

[`BlockHashMerkleTreeWitness`](BlockHashMerkleTreeWitness.md)

#### Inherited from

`BlockHashMerkleTree.WITNESS.constructor`

## Properties

### isLeft

> **isLeft**: `Bool`[]

Defined in: packages/common/dist/trees/RollupMerkleTree.d.ts:9

#### Inherited from

`BlockHashMerkleTree.WITNESS.isLeft`

***

### path

> **path**: `Field`[]

Defined in: packages/common/dist/trees/RollupMerkleTree.d.ts:8

#### Inherited from

`BlockHashMerkleTree.WITNESS.path`

***

### \_isStruct

> `static` **\_isStruct**: `true`

Defined in: packages/common/dist/trees/RollupMerkleTree.d.ts:11

#### Inherited from

`BlockHashMerkleTree.WITNESS._isStruct`

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

###### isLeft

`Bool`[]

###### path

`Field`[]

#### Returns

`void`

#### Inherited from

`BlockHashMerkleTree.WITNESS.check`

***

### dummy()

> `static` **dummy**: () => [`AbstractMerkleWitness`](../../common/interfaces/AbstractMerkleWitness.md)

Defined in: packages/common/dist/trees/RollupMerkleTree.d.ts:115

#### Returns

[`AbstractMerkleWitness`](../../common/interfaces/AbstractMerkleWitness.md)

#### Inherited from

`BlockHashMerkleTree.WITNESS.dummy`

***

### empty()

> `static` **empty**: () => `object`

Defined in: packages/common/dist/trees/RollupMerkleTree.d.ts:52

#### Returns

`object`

##### isLeft

> **isLeft**: `Bool`[]

##### path

> **path**: `Field`[]

#### Inherited from

`BlockHashMerkleTree.WITNESS.empty`

***

### fromFields()

> `static` **fromFields**: (`fields`) => `object`

Defined in: packages/common/dist/trees/RollupMerkleTree.d.ts:19

#### Parameters

##### fields

`Field`[]

#### Returns

`object`

##### isLeft

> **isLeft**: `Bool`[]

##### path

> **path**: `Field`[]

#### Inherited from

`BlockHashMerkleTree.WITNESS.fromFields`

***

### fromJSON()

> `static` **fromJSON**: (`x`) => `object`

Defined in: packages/common/dist/trees/RollupMerkleTree.d.ts:45

#### Parameters

##### x

###### isLeft

`boolean`[]

###### path

`string`[]

#### Returns

`object`

##### isLeft

> **isLeft**: `Bool`[]

##### path

> **path**: `Field`[]

#### Inherited from

`BlockHashMerkleTree.WITNESS.fromJSON`

***

### fromValue

> `static` **fromValue**: (`x`) => `object` & (`value`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:68

Convert provable type from a normal JS type.

#### Inherited from

`BlockHashMerkleTree.WITNESS.fromValue`

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

###### isLeft

`Bool`[]

###### path

`Field`[]

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

`BlockHashMerkleTree.WITNESS.toAuxiliary`

***

### toFields()

> `static` **toFields**: (`value`) => `Field`[]

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:24

A function that takes `value`, an element of type `T`, as argument and returns
an array of Field elements that make up the provable data of `value`.

#### Parameters

##### value

the element of type `T` to generate the Field array from.

###### isLeft

`Bool`[]

###### path

`Field`[]

#### Returns

`Field`[]

A Field array describing how this `T` element is made up of Field elements.

#### Inherited from

`BlockHashMerkleTree.WITNESS.toFields`

***

### toInput()

> `static` **toInput**: (`x`) => `object`

Defined in: packages/common/dist/trees/RollupMerkleTree.d.ts:31

#### Parameters

##### x

###### isLeft

`Bool`[]

###### path

`Field`[]

#### Returns

`object`

##### fields?

> `optional` **fields**: `Field`[]

##### packed?

> `optional` **packed**: \[`Field`, `number`\][]

#### Inherited from

`BlockHashMerkleTree.WITNESS.toInput`

***

### toJSON()

> `static` **toJSON**: (`x`) => `object`

Defined in: packages/common/dist/trees/RollupMerkleTree.d.ts:38

#### Parameters

##### x

###### isLeft

`Bool`[]

###### path

`Field`[]

#### Returns

`object`

##### isLeft

> **isLeft**: `boolean`[]

##### path

> **path**: `string`[]

#### Inherited from

`BlockHashMerkleTree.WITNESS.toJSON`

***

### toValue()

> `static` **toValue**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:64

Convert provable type to a normal JS type.

#### Parameters

##### x

###### isLeft

`Bool`[]

###### path

`Field`[]

#### Returns

`object`

##### isLeft

> **isLeft**: `boolean`[]

##### path

> **path**: `bigint`[]

#### Inherited from

`BlockHashMerkleTree.WITNESS.toValue`

## Methods

### calculateIndex()

> **calculateIndex**(): `Field`

Defined in: packages/common/dist/trees/RollupMerkleTree.d.ts:71

Calculates the index of the leaf node that belongs to this Witness.

#### Returns

`Field`

Index of the leaf.

#### Inherited from

`BlockHashMerkleTree.WITNESS.calculateIndex`

***

### calculateRoot()

> **calculateRoot**(`hash`): `Field`

Defined in: packages/common/dist/trees/RollupMerkleTree.d.ts:66

Calculates a root depending on the leaf value.

#### Parameters

##### hash

`Field`

#### Returns

`Field`

The calculated root.

#### Inherited from

`BlockHashMerkleTree.WITNESS.calculateRoot`

***

### checkMembership()

> **checkMembership**(`root`, `key`, `value`): `Bool`

Defined in: packages/common/dist/trees/RollupMerkleTree.d.ts:72

#### Parameters

##### root

`Field`

##### key

`Field`

##### value

`Field`

#### Returns

`Bool`

#### Inherited from

`BlockHashMerkleTree.WITNESS.checkMembership`

***

### checkMembershipGetRoots()

> **checkMembershipGetRoots**(`root`, `key`, `value`): \[`Bool`, `Field`, `Field`\]

Defined in: packages/common/dist/trees/RollupMerkleTree.d.ts:73

#### Parameters

##### root

`Field`

##### key

`Field`

##### value

`Field`

#### Returns

\[`Bool`, `Field`, `Field`\]

#### Inherited from

`BlockHashMerkleTree.WITNESS.checkMembershipGetRoots`

***

### height()

> **height**(): `number`

Defined in: packages/common/dist/trees/RollupMerkleTree.d.ts:60

#### Returns

`number`

#### Inherited from

`BlockHashMerkleTree.WITNESS.height`

***

### toShortenedEntries()

> **toShortenedEntries**(): `string`[]

Defined in: packages/common/dist/trees/RollupMerkleTree.d.ts:74

#### Returns

`string`[]

#### Inherited from

`BlockHashMerkleTree.WITNESS.toShortenedEntries`

***

### sizeInFields()

> `static` **sizeInFields**(): `number`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:51

Return the size of the `T` type in terms of Field type, as Field is the primitive type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of Field type.

#### Inherited from

`BlockHashMerkleTree.WITNESS.sizeInFields`
