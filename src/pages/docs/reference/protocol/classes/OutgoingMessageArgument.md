---
title: OutgoingMessageArgument
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / OutgoingMessageArgument

# Class: OutgoingMessageArgument

Defined in: [packages/protocol/src/settlement/messages/OutgoingMessageArgument.ts:8](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/messages/OutgoingMessageArgument.ts#L8)

## Extends

- `object`

## Constructors

### new OutgoingMessageArgument()

> **new OutgoingMessageArgument**(`value`): [`OutgoingMessageArgument`](OutgoingMessageArgument.md)

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### value

[`Withdrawal`](Withdrawal.md) = `Withdrawal`

###### witness

[`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md) = `RollupMerkleTreeWitness`

#### Returns

[`OutgoingMessageArgument`](OutgoingMessageArgument.md)

#### Inherited from

`Struct({ witness: RollupMerkleTreeWitness, value: Withdrawal, }).constructor`

## Properties

### value

> **value**: [`Withdrawal`](Withdrawal.md) = `Withdrawal`

Defined in: [packages/protocol/src/settlement/messages/OutgoingMessageArgument.ts:10](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/messages/OutgoingMessageArgument.ts#L10)

#### Inherited from

`Struct({ witness: RollupMerkleTreeWitness, value: Withdrawal, }).value`

***

### witness

> **witness**: [`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md) = `RollupMerkleTreeWitness`

Defined in: [packages/protocol/src/settlement/messages/OutgoingMessageArgument.ts:9](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/messages/OutgoingMessageArgument.ts#L9)

#### Inherited from

`Struct({ witness: RollupMerkleTreeWitness, value: Withdrawal, }).witness`

***

### \_isStruct

> `static` **\_isStruct**: `true`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:104

#### Inherited from

`Struct({ witness: RollupMerkleTreeWitness, value: Withdrawal, })._isStruct`

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

###### value

[`Withdrawal`](Withdrawal.md) = `Withdrawal`

###### witness

[`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md) = `RollupMerkleTreeWitness`

#### Returns

`void`

#### Inherited from

`Struct({ witness: RollupMerkleTreeWitness, value: Withdrawal, }).check`

***

### empty()

> `static` **empty**: () => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:113

#### Returns

`object`

##### value

> **value**: [`Withdrawal`](Withdrawal.md) = `Withdrawal`

##### witness

> **witness**: [`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md) = `RollupMerkleTreeWitness`

#### Inherited from

`Struct({ witness: RollupMerkleTreeWitness, value: Withdrawal, }).empty`

***

### fromFields()

> `static` **fromFields**: (`fields`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:78

#### Parameters

##### fields

`Field`[]

#### Returns

`object`

##### value

> **value**: [`Withdrawal`](Withdrawal.md) = `Withdrawal`

##### witness

> **witness**: [`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md) = `RollupMerkleTreeWitness`

#### Inherited from

`Struct({ witness: RollupMerkleTreeWitness, value: Withdrawal, }).fromFields`

***

### fromJSON()

> `static` **fromJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:112

#### Parameters

##### x

###### value

\{ `address`: `string`; `amount`: `string`; `tokenId`: `string`; \} = `Withdrawal`

###### value.address

`string` = `PublicKey`

###### value.amount

`string` = `UInt64`

###### value.tokenId

`string` = `Field`

###### witness

\{ `isLeft`: `boolean`[]; `path`: `string`[]; \} = `RollupMerkleTreeWitness`

###### witness.isLeft

`boolean`[]

###### witness.path

`string`[]

#### Returns

`object`

##### value

> **value**: [`Withdrawal`](Withdrawal.md) = `Withdrawal`

##### witness

> **witness**: [`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md) = `RollupMerkleTreeWitness`

#### Inherited from

`Struct({ witness: RollupMerkleTreeWitness, value: Withdrawal, }).fromJSON`

***

### fromValue

> `static` **fromValue**: (`x`) => `object` & (`value`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:68

Convert provable type from a normal JS type.

#### Inherited from

`Struct({ witness: RollupMerkleTreeWitness, value: Withdrawal, }).fromValue`

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

###### value

[`Withdrawal`](Withdrawal.md) = `Withdrawal`

###### witness

[`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md) = `RollupMerkleTreeWitness`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

`Struct({ witness: RollupMerkleTreeWitness, value: Withdrawal, }).toAuxiliary`

***

### toFields()

> `static` **toFields**: (`value`) => `Field`[]

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:24

A function that takes `value`, an element of type `T`, as argument and returns
an array of Field elements that make up the provable data of `value`.

#### Parameters

##### value

the element of type `T` to generate the Field array from.

###### value

[`Withdrawal`](Withdrawal.md) = `Withdrawal`

###### witness

[`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md) = `RollupMerkleTreeWitness`

#### Returns

`Field`[]

A Field array describing how this `T` element is made up of Field elements.

#### Inherited from

`Struct({ witness: RollupMerkleTreeWitness, value: Withdrawal, }).toFields`

***

### toInput()

> `static` **toInput**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:107

#### Parameters

##### x

###### value

[`Withdrawal`](Withdrawal.md) = `Withdrawal`

###### witness

[`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md) = `RollupMerkleTreeWitness`

#### Returns

`object`

##### fields?

> `optional` **fields**: `Field`[]

##### packed?

> `optional` **packed**: \[`Field`, `number`\][]

#### Inherited from

`Struct({ witness: RollupMerkleTreeWitness, value: Withdrawal, }).toInput`

***

### toJSON()

> `static` **toJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:111

#### Parameters

##### x

###### value

[`Withdrawal`](Withdrawal.md) = `Withdrawal`

###### witness

[`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md) = `RollupMerkleTreeWitness`

#### Returns

`object`

##### value

> **value**: `object` = `Withdrawal`

###### value.address

> **value.address**: `string` = `PublicKey`

###### value.amount

> **value.amount**: `string` = `UInt64`

###### value.tokenId

> **value.tokenId**: `string` = `Field`

##### witness

> **witness**: `object` = `RollupMerkleTreeWitness`

###### witness.isLeft

> **witness.isLeft**: `boolean`[]

###### witness.path

> **witness.path**: `string`[]

#### Inherited from

`Struct({ witness: RollupMerkleTreeWitness, value: Withdrawal, }).toJSON`

***

### toValue()

> `static` **toValue**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:64

Convert provable type to a normal JS type.

#### Parameters

##### x

###### value

[`Withdrawal`](Withdrawal.md) = `Withdrawal`

###### witness

[`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md) = `RollupMerkleTreeWitness`

#### Returns

`object`

##### value

> **value**: `object` = `Withdrawal`

###### value.address

> **value.address**: `object` = `PublicKey`

###### value.address.isOdd

> **value.address.isOdd**: `boolean`

###### value.address.x

> **value.address.x**: `bigint`

###### value.amount

> **value.amount**: `bigint` = `UInt64`

###### value.tokenId

> **value.tokenId**: `bigint` = `Field`

##### witness

> **witness**: `object` = `RollupMerkleTreeWitness`

###### witness.isLeft

> **witness.isLeft**: `boolean`[]

###### witness.path

> **witness.path**: `bigint`[]

#### Inherited from

`Struct({ witness: RollupMerkleTreeWitness, value: Withdrawal, }).toValue`

## Methods

### dummy()

> `static` **dummy**(): [`OutgoingMessageArgument`](OutgoingMessageArgument.md)

Defined in: [packages/protocol/src/settlement/messages/OutgoingMessageArgument.ts:12](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/messages/OutgoingMessageArgument.ts#L12)

#### Returns

[`OutgoingMessageArgument`](OutgoingMessageArgument.md)

***

### sizeInFields()

> `static` **sizeInFields**(): `number`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:51

Return the size of the `T` type in terms of Field type, as Field is the primitive type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of Field type.

#### Inherited from

`Struct({ witness: RollupMerkleTreeWitness, value: Withdrawal, }).sizeInFields`
