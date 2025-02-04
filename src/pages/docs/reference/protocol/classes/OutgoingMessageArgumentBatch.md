---
title: OutgoingMessageArgumentBatch
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / OutgoingMessageArgumentBatch

# Class: OutgoingMessageArgumentBatch

Defined in: [packages/protocol/src/settlement/messages/OutgoingMessageArgument.ts:20](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/messages/OutgoingMessageArgument.ts#L20)

## Extends

- `object`

## Constructors

### new OutgoingMessageArgumentBatch()

> **new OutgoingMessageArgumentBatch**(`value`): [`OutgoingMessageArgumentBatch`](OutgoingMessageArgumentBatch.md)

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### arguments

[`OutgoingMessageArgument`](OutgoingMessageArgument.md)[] = `...`

###### isDummys

`Bool`[] = `...`

#### Returns

[`OutgoingMessageArgumentBatch`](OutgoingMessageArgumentBatch.md)

#### Inherited from

`Struct({ arguments: Provable.Array( OutgoingMessageArgument, OUTGOING_MESSAGE_BATCH_SIZE ), isDummys: Provable.Array(Bool, OUTGOING_MESSAGE_BATCH_SIZE), }).constructor`

## Properties

### arguments

> **arguments**: [`OutgoingMessageArgument`](OutgoingMessageArgument.md)[]

Defined in: [packages/protocol/src/settlement/messages/OutgoingMessageArgument.ts:21](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/messages/OutgoingMessageArgument.ts#L21)

#### Inherited from

`Struct({ arguments: Provable.Array( OutgoingMessageArgument, OUTGOING_MESSAGE_BATCH_SIZE ), isDummys: Provable.Array(Bool, OUTGOING_MESSAGE_BATCH_SIZE), }).arguments`

***

### isDummys

> **isDummys**: `Bool`[]

Defined in: [packages/protocol/src/settlement/messages/OutgoingMessageArgument.ts:26](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/messages/OutgoingMessageArgument.ts#L26)

#### Inherited from

`Struct({ arguments: Provable.Array( OutgoingMessageArgument, OUTGOING_MESSAGE_BATCH_SIZE ), isDummys: Provable.Array(Bool, OUTGOING_MESSAGE_BATCH_SIZE), }).isDummys`

***

### \_isStruct

> `static` **\_isStruct**: `true`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:104

#### Inherited from

`Struct({ arguments: Provable.Array( OutgoingMessageArgument, OUTGOING_MESSAGE_BATCH_SIZE ), isDummys: Provable.Array(Bool, OUTGOING_MESSAGE_BATCH_SIZE), })._isStruct`

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

###### arguments

[`OutgoingMessageArgument`](OutgoingMessageArgument.md)[] = `...`

###### isDummys

`Bool`[] = `...`

#### Returns

`void`

#### Inherited from

`Struct({ arguments: Provable.Array( OutgoingMessageArgument, OUTGOING_MESSAGE_BATCH_SIZE ), isDummys: Provable.Array(Bool, OUTGOING_MESSAGE_BATCH_SIZE), }).check`

***

### empty()

> `static` **empty**: () => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:113

#### Returns

`object`

##### arguments

> **arguments**: [`OutgoingMessageArgument`](OutgoingMessageArgument.md)[]

##### isDummys

> **isDummys**: `Bool`[]

#### Inherited from

`Struct({ arguments: Provable.Array( OutgoingMessageArgument, OUTGOING_MESSAGE_BATCH_SIZE ), isDummys: Provable.Array(Bool, OUTGOING_MESSAGE_BATCH_SIZE), }).empty`

***

### fromFields()

> `static` **fromFields**: (`fields`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:78

#### Parameters

##### fields

`Field`[]

#### Returns

`object`

##### arguments

> **arguments**: [`OutgoingMessageArgument`](OutgoingMessageArgument.md)[]

##### isDummys

> **isDummys**: `Bool`[]

#### Inherited from

`Struct({ arguments: Provable.Array( OutgoingMessageArgument, OUTGOING_MESSAGE_BATCH_SIZE ), isDummys: Provable.Array(Bool, OUTGOING_MESSAGE_BATCH_SIZE), }).fromFields`

***

### fromJSON()

> `static` **fromJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:112

#### Parameters

##### x

###### arguments

`object`[] = `...`

###### isDummys

`boolean`[] = `...`

#### Returns

`object`

##### arguments

> **arguments**: [`OutgoingMessageArgument`](OutgoingMessageArgument.md)[]

##### isDummys

> **isDummys**: `Bool`[]

#### Inherited from

`Struct({ arguments: Provable.Array( OutgoingMessageArgument, OUTGOING_MESSAGE_BATCH_SIZE ), isDummys: Provable.Array(Bool, OUTGOING_MESSAGE_BATCH_SIZE), }).fromJSON`

***

### fromValue

> `static` **fromValue**: (`x`) => `object` & (`value`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:68

Convert provable type from a normal JS type.

#### Inherited from

`Struct({ arguments: Provable.Array( OutgoingMessageArgument, OUTGOING_MESSAGE_BATCH_SIZE ), isDummys: Provable.Array(Bool, OUTGOING_MESSAGE_BATCH_SIZE), }).fromValue`

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

###### arguments

[`OutgoingMessageArgument`](OutgoingMessageArgument.md)[] = `...`

###### isDummys

`Bool`[] = `...`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

`Struct({ arguments: Provable.Array( OutgoingMessageArgument, OUTGOING_MESSAGE_BATCH_SIZE ), isDummys: Provable.Array(Bool, OUTGOING_MESSAGE_BATCH_SIZE), }).toAuxiliary`

***

### toFields()

> `static` **toFields**: (`value`) => `Field`[]

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:24

A function that takes `value`, an element of type `T`, as argument and returns
an array of Field elements that make up the provable data of `value`.

#### Parameters

##### value

the element of type `T` to generate the Field array from.

###### arguments

[`OutgoingMessageArgument`](OutgoingMessageArgument.md)[] = `...`

###### isDummys

`Bool`[] = `...`

#### Returns

`Field`[]

A Field array describing how this `T` element is made up of Field elements.

#### Inherited from

`Struct({ arguments: Provable.Array( OutgoingMessageArgument, OUTGOING_MESSAGE_BATCH_SIZE ), isDummys: Provable.Array(Bool, OUTGOING_MESSAGE_BATCH_SIZE), }).toFields`

***

### toInput()

> `static` **toInput**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:107

#### Parameters

##### x

###### arguments

[`OutgoingMessageArgument`](OutgoingMessageArgument.md)[] = `...`

###### isDummys

`Bool`[] = `...`

#### Returns

`object`

##### fields?

> `optional` **fields**: `Field`[]

##### packed?

> `optional` **packed**: \[`Field`, `number`\][]

#### Inherited from

`Struct({ arguments: Provable.Array( OutgoingMessageArgument, OUTGOING_MESSAGE_BATCH_SIZE ), isDummys: Provable.Array(Bool, OUTGOING_MESSAGE_BATCH_SIZE), }).toInput`

***

### toJSON()

> `static` **toJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:111

#### Parameters

##### x

###### arguments

[`OutgoingMessageArgument`](OutgoingMessageArgument.md)[] = `...`

###### isDummys

`Bool`[] = `...`

#### Returns

`object`

##### arguments

> **arguments**: `object`[]

##### isDummys

> **isDummys**: `boolean`[]

#### Inherited from

`Struct({ arguments: Provable.Array( OutgoingMessageArgument, OUTGOING_MESSAGE_BATCH_SIZE ), isDummys: Provable.Array(Bool, OUTGOING_MESSAGE_BATCH_SIZE), }).toJSON`

***

### toValue()

> `static` **toValue**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:64

Convert provable type to a normal JS type.

#### Parameters

##### x

###### arguments

[`OutgoingMessageArgument`](OutgoingMessageArgument.md)[] = `...`

###### isDummys

`Bool`[] = `...`

#### Returns

`object`

##### arguments

> **arguments**: `object`[]

##### isDummys

> **isDummys**: `boolean`[]

#### Inherited from

`Struct({ arguments: Provable.Array( OutgoingMessageArgument, OUTGOING_MESSAGE_BATCH_SIZE ), isDummys: Provable.Array(Bool, OUTGOING_MESSAGE_BATCH_SIZE), }).toValue`

## Methods

### fromMessages()

> `static` **fromMessages**(`providedArguments`): [`OutgoingMessageArgumentBatch`](OutgoingMessageArgumentBatch.md)

Defined in: [packages/protocol/src/settlement/messages/OutgoingMessageArgument.ts:28](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/messages/OutgoingMessageArgument.ts#L28)

#### Parameters

##### providedArguments

[`OutgoingMessageArgument`](OutgoingMessageArgument.md)[]

#### Returns

[`OutgoingMessageArgumentBatch`](OutgoingMessageArgumentBatch.md)

***

### sizeInFields()

> `static` **sizeInFields**(): `number`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:51

Return the size of the `T` type in terms of Field type, as Field is the primitive type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of Field type.

#### Inherited from

`Struct({ arguments: Provable.Array( OutgoingMessageArgument, OUTGOING_MESSAGE_BATCH_SIZE ), isDummys: Provable.Array(Bool, OUTGOING_MESSAGE_BATCH_SIZE), }).sizeInFields`
