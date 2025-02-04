---
title: BlockProverPublicInput
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / BlockProverPublicInput

# Class: BlockProverPublicInput

Defined in: [packages/protocol/src/prover/block/BlockProvable.ts:20](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/prover/block/BlockProvable.ts#L20)

## Extends

- `object`

## Constructors

### new BlockProverPublicInput()

> **new BlockProverPublicInput**(`value`): [`BlockProverPublicInput`](BlockProverPublicInput.md)

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### blockHashRoot

`Field` = `Field`

###### blockNumber

`Field` = `Field`

###### eternalTransactionsHash

`Field` = `Field`

###### incomingMessagesHash

`Field` = `Field`

###### networkStateHash

`Field` = `Field`

###### stateRoot

`Field` = `Field`

###### transactionsHash

`Field` = `Field`

#### Returns

[`BlockProverPublicInput`](BlockProverPublicInput.md)

#### Inherited from

`Struct({ transactionsHash: Field, stateRoot: Field, networkStateHash: Field, blockHashRoot: Field, eternalTransactionsHash: Field, incomingMessagesHash: Field, blockNumber: Field, }).constructor`

## Properties

### blockHashRoot

> **blockHashRoot**: `Field` = `Field`

Defined in: [packages/protocol/src/prover/block/BlockProvable.ts:24](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/prover/block/BlockProvable.ts#L24)

#### Inherited from

`Struct({ transactionsHash: Field, stateRoot: Field, networkStateHash: Field, blockHashRoot: Field, eternalTransactionsHash: Field, incomingMessagesHash: Field, blockNumber: Field, }).blockHashRoot`

***

### blockNumber

> **blockNumber**: `Field` = `Field`

Defined in: [packages/protocol/src/prover/block/BlockProvable.ts:27](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/prover/block/BlockProvable.ts#L27)

#### Inherited from

`Struct({ transactionsHash: Field, stateRoot: Field, networkStateHash: Field, blockHashRoot: Field, eternalTransactionsHash: Field, incomingMessagesHash: Field, blockNumber: Field, }).blockNumber`

***

### eternalTransactionsHash

> **eternalTransactionsHash**: `Field` = `Field`

Defined in: [packages/protocol/src/prover/block/BlockProvable.ts:25](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/prover/block/BlockProvable.ts#L25)

#### Inherited from

`Struct({ transactionsHash: Field, stateRoot: Field, networkStateHash: Field, blockHashRoot: Field, eternalTransactionsHash: Field, incomingMessagesHash: Field, blockNumber: Field, }).eternalTransactionsHash`

***

### incomingMessagesHash

> **incomingMessagesHash**: `Field` = `Field`

Defined in: [packages/protocol/src/prover/block/BlockProvable.ts:26](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/prover/block/BlockProvable.ts#L26)

#### Inherited from

`Struct({ transactionsHash: Field, stateRoot: Field, networkStateHash: Field, blockHashRoot: Field, eternalTransactionsHash: Field, incomingMessagesHash: Field, blockNumber: Field, }).incomingMessagesHash`

***

### networkStateHash

> **networkStateHash**: `Field` = `Field`

Defined in: [packages/protocol/src/prover/block/BlockProvable.ts:23](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/prover/block/BlockProvable.ts#L23)

#### Inherited from

`Struct({ transactionsHash: Field, stateRoot: Field, networkStateHash: Field, blockHashRoot: Field, eternalTransactionsHash: Field, incomingMessagesHash: Field, blockNumber: Field, }).networkStateHash`

***

### stateRoot

> **stateRoot**: `Field` = `Field`

Defined in: [packages/protocol/src/prover/block/BlockProvable.ts:22](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/prover/block/BlockProvable.ts#L22)

#### Inherited from

`Struct({ transactionsHash: Field, stateRoot: Field, networkStateHash: Field, blockHashRoot: Field, eternalTransactionsHash: Field, incomingMessagesHash: Field, blockNumber: Field, }).stateRoot`

***

### transactionsHash

> **transactionsHash**: `Field` = `Field`

Defined in: [packages/protocol/src/prover/block/BlockProvable.ts:21](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/prover/block/BlockProvable.ts#L21)

#### Inherited from

`Struct({ transactionsHash: Field, stateRoot: Field, networkStateHash: Field, blockHashRoot: Field, eternalTransactionsHash: Field, incomingMessagesHash: Field, blockNumber: Field, }).transactionsHash`

***

### \_isStruct

> `static` **\_isStruct**: `true`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:104

#### Inherited from

`Struct({ transactionsHash: Field, stateRoot: Field, networkStateHash: Field, blockHashRoot: Field, eternalTransactionsHash: Field, incomingMessagesHash: Field, blockNumber: Field, })._isStruct`

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

###### blockHashRoot

`Field` = `Field`

###### blockNumber

`Field` = `Field`

###### eternalTransactionsHash

`Field` = `Field`

###### incomingMessagesHash

`Field` = `Field`

###### networkStateHash

`Field` = `Field`

###### stateRoot

`Field` = `Field`

###### transactionsHash

`Field` = `Field`

#### Returns

`void`

#### Inherited from

`Struct({ transactionsHash: Field, stateRoot: Field, networkStateHash: Field, blockHashRoot: Field, eternalTransactionsHash: Field, incomingMessagesHash: Field, blockNumber: Field, }).check`

***

### empty()

> `static` **empty**: () => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:113

#### Returns

`object`

##### blockHashRoot

> **blockHashRoot**: `Field` = `Field`

##### blockNumber

> **blockNumber**: `Field` = `Field`

##### eternalTransactionsHash

> **eternalTransactionsHash**: `Field` = `Field`

##### incomingMessagesHash

> **incomingMessagesHash**: `Field` = `Field`

##### networkStateHash

> **networkStateHash**: `Field` = `Field`

##### stateRoot

> **stateRoot**: `Field` = `Field`

##### transactionsHash

> **transactionsHash**: `Field` = `Field`

#### Inherited from

`Struct({ transactionsHash: Field, stateRoot: Field, networkStateHash: Field, blockHashRoot: Field, eternalTransactionsHash: Field, incomingMessagesHash: Field, blockNumber: Field, }).empty`

***

### fromFields()

> `static` **fromFields**: (`fields`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:78

#### Parameters

##### fields

`Field`[]

#### Returns

`object`

##### blockHashRoot

> **blockHashRoot**: `Field` = `Field`

##### blockNumber

> **blockNumber**: `Field` = `Field`

##### eternalTransactionsHash

> **eternalTransactionsHash**: `Field` = `Field`

##### incomingMessagesHash

> **incomingMessagesHash**: `Field` = `Field`

##### networkStateHash

> **networkStateHash**: `Field` = `Field`

##### stateRoot

> **stateRoot**: `Field` = `Field`

##### transactionsHash

> **transactionsHash**: `Field` = `Field`

#### Inherited from

`Struct({ transactionsHash: Field, stateRoot: Field, networkStateHash: Field, blockHashRoot: Field, eternalTransactionsHash: Field, incomingMessagesHash: Field, blockNumber: Field, }).fromFields`

***

### fromJSON()

> `static` **fromJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:112

#### Parameters

##### x

###### blockHashRoot

`string` = `Field`

###### blockNumber

`string` = `Field`

###### eternalTransactionsHash

`string` = `Field`

###### incomingMessagesHash

`string` = `Field`

###### networkStateHash

`string` = `Field`

###### stateRoot

`string` = `Field`

###### transactionsHash

`string` = `Field`

#### Returns

`object`

##### blockHashRoot

> **blockHashRoot**: `Field` = `Field`

##### blockNumber

> **blockNumber**: `Field` = `Field`

##### eternalTransactionsHash

> **eternalTransactionsHash**: `Field` = `Field`

##### incomingMessagesHash

> **incomingMessagesHash**: `Field` = `Field`

##### networkStateHash

> **networkStateHash**: `Field` = `Field`

##### stateRoot

> **stateRoot**: `Field` = `Field`

##### transactionsHash

> **transactionsHash**: `Field` = `Field`

#### Inherited from

`Struct({ transactionsHash: Field, stateRoot: Field, networkStateHash: Field, blockHashRoot: Field, eternalTransactionsHash: Field, incomingMessagesHash: Field, blockNumber: Field, }).fromJSON`

***

### fromValue

> `static` **fromValue**: (`x`) => `object` & (`value`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:68

Convert provable type from a normal JS type.

#### Inherited from

`Struct({ transactionsHash: Field, stateRoot: Field, networkStateHash: Field, blockHashRoot: Field, eternalTransactionsHash: Field, incomingMessagesHash: Field, blockNumber: Field, }).fromValue`

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

###### blockHashRoot

`Field` = `Field`

###### blockNumber

`Field` = `Field`

###### eternalTransactionsHash

`Field` = `Field`

###### incomingMessagesHash

`Field` = `Field`

###### networkStateHash

`Field` = `Field`

###### stateRoot

`Field` = `Field`

###### transactionsHash

`Field` = `Field`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

`Struct({ transactionsHash: Field, stateRoot: Field, networkStateHash: Field, blockHashRoot: Field, eternalTransactionsHash: Field, incomingMessagesHash: Field, blockNumber: Field, }).toAuxiliary`

***

### toFields()

> `static` **toFields**: (`value`) => `Field`[]

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:24

A function that takes `value`, an element of type `T`, as argument and returns
an array of Field elements that make up the provable data of `value`.

#### Parameters

##### value

the element of type `T` to generate the Field array from.

###### blockHashRoot

`Field` = `Field`

###### blockNumber

`Field` = `Field`

###### eternalTransactionsHash

`Field` = `Field`

###### incomingMessagesHash

`Field` = `Field`

###### networkStateHash

`Field` = `Field`

###### stateRoot

`Field` = `Field`

###### transactionsHash

`Field` = `Field`

#### Returns

`Field`[]

A Field array describing how this `T` element is made up of Field elements.

#### Inherited from

`Struct({ transactionsHash: Field, stateRoot: Field, networkStateHash: Field, blockHashRoot: Field, eternalTransactionsHash: Field, incomingMessagesHash: Field, blockNumber: Field, }).toFields`

***

### toInput()

> `static` **toInput**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:107

#### Parameters

##### x

###### blockHashRoot

`Field` = `Field`

###### blockNumber

`Field` = `Field`

###### eternalTransactionsHash

`Field` = `Field`

###### incomingMessagesHash

`Field` = `Field`

###### networkStateHash

`Field` = `Field`

###### stateRoot

`Field` = `Field`

###### transactionsHash

`Field` = `Field`

#### Returns

`object`

##### fields?

> `optional` **fields**: `Field`[]

##### packed?

> `optional` **packed**: \[`Field`, `number`\][]

#### Inherited from

`Struct({ transactionsHash: Field, stateRoot: Field, networkStateHash: Field, blockHashRoot: Field, eternalTransactionsHash: Field, incomingMessagesHash: Field, blockNumber: Field, }).toInput`

***

### toJSON()

> `static` **toJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:111

#### Parameters

##### x

###### blockHashRoot

`Field` = `Field`

###### blockNumber

`Field` = `Field`

###### eternalTransactionsHash

`Field` = `Field`

###### incomingMessagesHash

`Field` = `Field`

###### networkStateHash

`Field` = `Field`

###### stateRoot

`Field` = `Field`

###### transactionsHash

`Field` = `Field`

#### Returns

`object`

##### blockHashRoot

> **blockHashRoot**: `string` = `Field`

##### blockNumber

> **blockNumber**: `string` = `Field`

##### eternalTransactionsHash

> **eternalTransactionsHash**: `string` = `Field`

##### incomingMessagesHash

> **incomingMessagesHash**: `string` = `Field`

##### networkStateHash

> **networkStateHash**: `string` = `Field`

##### stateRoot

> **stateRoot**: `string` = `Field`

##### transactionsHash

> **transactionsHash**: `string` = `Field`

#### Inherited from

`Struct({ transactionsHash: Field, stateRoot: Field, networkStateHash: Field, blockHashRoot: Field, eternalTransactionsHash: Field, incomingMessagesHash: Field, blockNumber: Field, }).toJSON`

***

### toValue()

> `static` **toValue**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:64

Convert provable type to a normal JS type.

#### Parameters

##### x

###### blockHashRoot

`Field` = `Field`

###### blockNumber

`Field` = `Field`

###### eternalTransactionsHash

`Field` = `Field`

###### incomingMessagesHash

`Field` = `Field`

###### networkStateHash

`Field` = `Field`

###### stateRoot

`Field` = `Field`

###### transactionsHash

`Field` = `Field`

#### Returns

`object`

##### blockHashRoot

> **blockHashRoot**: `bigint` = `Field`

##### blockNumber

> **blockNumber**: `bigint` = `Field`

##### eternalTransactionsHash

> **eternalTransactionsHash**: `bigint` = `Field`

##### incomingMessagesHash

> **incomingMessagesHash**: `bigint` = `Field`

##### networkStateHash

> **networkStateHash**: `bigint` = `Field`

##### stateRoot

> **stateRoot**: `bigint` = `Field`

##### transactionsHash

> **transactionsHash**: `bigint` = `Field`

#### Inherited from

`Struct({ transactionsHash: Field, stateRoot: Field, networkStateHash: Field, blockHashRoot: Field, eternalTransactionsHash: Field, incomingMessagesHash: Field, blockNumber: Field, }).toValue`

## Methods

### sizeInFields()

> `static` **sizeInFields**(): `number`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:51

Return the size of the `T` type in terms of Field type, as Field is the primitive type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of Field type.

#### Inherited from

`Struct({ transactionsHash: Field, stateRoot: Field, networkStateHash: Field, blockHashRoot: Field, eternalTransactionsHash: Field, incomingMessagesHash: Field, blockNumber: Field, }).sizeInFields`
