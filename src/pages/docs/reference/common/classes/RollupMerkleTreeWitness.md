---
title: RollupMerkleTreeWitness
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / RollupMerkleTreeWitness

# Class: RollupMerkleTreeWitness

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:345](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/trees/RollupMerkleTree.ts#L345)

## Extends

- [`WITNESS`](../interfaces/AbstractMerkleTreeClass.md#witness)

## Constructors

### new RollupMerkleTreeWitness()

> **new RollupMerkleTreeWitness**(`value`): [`RollupMerkleTreeWitness`](RollupMerkleTreeWitness.md)

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### isLeft

`Bool`[] = `...`

###### path

`Field`[] = `...`

#### Returns

[`RollupMerkleTreeWitness`](RollupMerkleTreeWitness.md)

#### Inherited from

`RollupMerkleTree.WITNESS.constructor`

## Properties

### isLeft

> **isLeft**: `Bool`[]

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:11](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/trees/RollupMerkleTree.ts#L11)

#### Inherited from

`RollupMerkleTree.WITNESS.isLeft`

***

### path

> **path**: `Field`[]

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:10](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/trees/RollupMerkleTree.ts#L10)

#### Inherited from

`RollupMerkleTree.WITNESS.path`

***

### \_isStruct

> `static` **\_isStruct**: `true`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:104

#### Inherited from

`RollupMerkleTree.WITNESS._isStruct`

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

`Bool`[] = `...`

###### path

`Field`[] = `...`

#### Returns

`void`

#### Inherited from

`RollupMerkleTree.WITNESS.check`

***

### dummy()

> `static` **dummy**: () => [`AbstractMerkleWitness`](../interfaces/AbstractMerkleWitness.md)

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:88](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/trees/RollupMerkleTree.ts#L88)

#### Returns

[`AbstractMerkleWitness`](../interfaces/AbstractMerkleWitness.md)

#### Inherited from

`RollupMerkleTree.WITNESS.dummy`

***

### empty()

> `static` **empty**: () => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:113

#### Returns

`object`

##### isLeft

> **isLeft**: `Bool`[]

##### path

> **path**: `Field`[]

#### Inherited from

`RollupMerkleTree.WITNESS.empty`

***

### fromFields()

> `static` **fromFields**: (`fields`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:78

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

`RollupMerkleTree.WITNESS.fromFields`

***

### fromJSON()

> `static` **fromJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:112

#### Parameters

##### x

###### isLeft

`boolean`[] = `...`

###### path

`string`[] = `...`

#### Returns

`object`

##### isLeft

> **isLeft**: `Bool`[]

##### path

> **path**: `Field`[]

#### Inherited from

`RollupMerkleTree.WITNESS.fromJSON`

***

### fromValue

> `static` **fromValue**: (`x`) => `object` & (`value`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:68

Convert provable type from a normal JS type.

#### Inherited from

`RollupMerkleTree.WITNESS.fromValue`

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

`Bool`[] = `...`

###### path

`Field`[] = `...`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

`RollupMerkleTree.WITNESS.toAuxiliary`

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

`Bool`[] = `...`

###### path

`Field`[] = `...`

#### Returns

`Field`[]

A Field array describing how this `T` element is made up of Field elements.

#### Inherited from

`RollupMerkleTree.WITNESS.toFields`

***

### toInput()

> `static` **toInput**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:107

#### Parameters

##### x

###### isLeft

`Bool`[] = `...`

###### path

`Field`[] = `...`

#### Returns

`object`

##### fields?

> `optional` **fields**: `Field`[]

##### packed?

> `optional` **packed**: \[`Field`, `number`\][]

#### Inherited from

`RollupMerkleTree.WITNESS.toInput`

***

### toJSON()

> `static` **toJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:111

#### Parameters

##### x

###### isLeft

`Bool`[] = `...`

###### path

`Field`[] = `...`

#### Returns

`object`

##### isLeft

> **isLeft**: `boolean`[]

##### path

> **path**: `string`[]

#### Inherited from

`RollupMerkleTree.WITNESS.toJSON`

***

### toValue()

> `static` **toValue**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:64

Convert provable type to a normal JS type.

#### Parameters

##### x

###### isLeft

`Bool`[] = `...`

###### path

`Field`[] = `...`

#### Returns

`object`

##### isLeft

> **isLeft**: `boolean`[]

##### path

> **path**: `bigint`[]

#### Inherited from

`RollupMerkleTree.WITNESS.toValue`

## Methods

### calculateIndex()

> **calculateIndex**(): `Field`

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:28](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/trees/RollupMerkleTree.ts#L28)

Calculates the index of the leaf node that belongs to this Witness.

#### Returns

`Field`

Index of the leaf.

#### Inherited from

`RollupMerkleTree.WITNESS.calculateIndex`

***

### calculateRoot()

> **calculateRoot**(`hash`): `Field`

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:22](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/trees/RollupMerkleTree.ts#L22)

Calculates a root depending on the leaf value.

#### Parameters

##### hash

`Field`

#### Returns

`Field`

The calculated root.

#### Inherited from

`RollupMerkleTree.WITNESS.calculateRoot`

***

### checkMembership()

> **checkMembership**(`root`, `key`, `value`): `Bool`

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:30](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/trees/RollupMerkleTree.ts#L30)

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

`RollupMerkleTree.WITNESS.checkMembership`

***

### checkMembershipGetRoots()

> **checkMembershipGetRoots**(`root`, `key`, `value`): \[`Bool`, `Field`, `Field`\]

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:32](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/trees/RollupMerkleTree.ts#L32)

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

`RollupMerkleTree.WITNESS.checkMembershipGetRoots`

***

### height()

> **height**(): `number`

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:15](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/trees/RollupMerkleTree.ts#L15)

#### Returns

`number`

#### Inherited from

`RollupMerkleTree.WITNESS.height`

***

### toShortenedEntries()

> **toShortenedEntries**(): `string`[]

Defined in: [packages/common/src/trees/RollupMerkleTree.ts:38](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/trees/RollupMerkleTree.ts#L38)

#### Returns

`string`[]

#### Inherited from

`RollupMerkleTree.WITNESS.toShortenedEntries`

***

### sizeInFields()

> `static` **sizeInFields**(): `number`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:51

Return the size of the `T` type in terms of Field type, as Field is the primitive type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of Field type.

#### Inherited from

`RollupMerkleTree.WITNESS.sizeInFields`
