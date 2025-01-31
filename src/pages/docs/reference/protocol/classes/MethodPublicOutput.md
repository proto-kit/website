---
title: MethodPublicOutput
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / MethodPublicOutput

# Class: MethodPublicOutput

Defined in: [packages/protocol/src/model/MethodPublicOutput.ts:7](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/MethodPublicOutput.ts#L7)

Public input used to link in-circuit execution with
the proof's public input.

## Extends

- `object`

## Constructors

### new MethodPublicOutput()

> **new MethodPublicOutput**(`value`): [`MethodPublicOutput`](MethodPublicOutput.md)

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### eventsHash

`Field` = `Field`

###### isMessage

`Bool` = `Bool`

###### networkStateHash

`Field` = `Field`

###### stateTransitionsHash

`Field` = `Field`

###### status

`Bool` = `Bool`

###### transactionHash

`Field` = `Field`

#### Returns

[`MethodPublicOutput`](MethodPublicOutput.md)

#### Inherited from

`Struct({ stateTransitionsHash: Field, status: Bool, transactionHash: Field, networkStateHash: Field, isMessage: Bool, eventsHash: Field, }).constructor`

## Properties

### eventsHash

> **eventsHash**: `Field` = `Field`

Defined in: [packages/protocol/src/model/MethodPublicOutput.ts:13](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/MethodPublicOutput.ts#L13)

#### Inherited from

`Struct({ stateTransitionsHash: Field, status: Bool, transactionHash: Field, networkStateHash: Field, isMessage: Bool, eventsHash: Field, }).eventsHash`

***

### isMessage

> **isMessage**: `Bool` = `Bool`

Defined in: [packages/protocol/src/model/MethodPublicOutput.ts:12](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/MethodPublicOutput.ts#L12)

#### Inherited from

`Struct({ stateTransitionsHash: Field, status: Bool, transactionHash: Field, networkStateHash: Field, isMessage: Bool, eventsHash: Field, }).isMessage`

***

### networkStateHash

> **networkStateHash**: `Field` = `Field`

Defined in: [packages/protocol/src/model/MethodPublicOutput.ts:11](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/MethodPublicOutput.ts#L11)

#### Inherited from

`Struct({ stateTransitionsHash: Field, status: Bool, transactionHash: Field, networkStateHash: Field, isMessage: Bool, eventsHash: Field, }).networkStateHash`

***

### stateTransitionsHash

> **stateTransitionsHash**: `Field` = `Field`

Defined in: [packages/protocol/src/model/MethodPublicOutput.ts:8](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/MethodPublicOutput.ts#L8)

#### Inherited from

`Struct({ stateTransitionsHash: Field, status: Bool, transactionHash: Field, networkStateHash: Field, isMessage: Bool, eventsHash: Field, }).stateTransitionsHash`

***

### status

> **status**: `Bool` = `Bool`

Defined in: [packages/protocol/src/model/MethodPublicOutput.ts:9](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/MethodPublicOutput.ts#L9)

#### Inherited from

`Struct({ stateTransitionsHash: Field, status: Bool, transactionHash: Field, networkStateHash: Field, isMessage: Bool, eventsHash: Field, }).status`

***

### transactionHash

> **transactionHash**: `Field` = `Field`

Defined in: [packages/protocol/src/model/MethodPublicOutput.ts:10](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/MethodPublicOutput.ts#L10)

#### Inherited from

`Struct({ stateTransitionsHash: Field, status: Bool, transactionHash: Field, networkStateHash: Field, isMessage: Bool, eventsHash: Field, }).transactionHash`

***

### \_isStruct

> `static` **\_isStruct**: `true`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:104

#### Inherited from

`Struct({ stateTransitionsHash: Field, status: Bool, transactionHash: Field, networkStateHash: Field, isMessage: Bool, eventsHash: Field, })._isStruct`

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

###### eventsHash

`Field` = `Field`

###### isMessage

`Bool` = `Bool`

###### networkStateHash

`Field` = `Field`

###### stateTransitionsHash

`Field` = `Field`

###### status

`Bool` = `Bool`

###### transactionHash

`Field` = `Field`

#### Returns

`void`

#### Inherited from

`Struct({ stateTransitionsHash: Field, status: Bool, transactionHash: Field, networkStateHash: Field, isMessage: Bool, eventsHash: Field, }).check`

***

### empty()

> `static` **empty**: () => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:113

#### Returns

`object`

##### eventsHash

> **eventsHash**: `Field` = `Field`

##### isMessage

> **isMessage**: `Bool` = `Bool`

##### networkStateHash

> **networkStateHash**: `Field` = `Field`

##### stateTransitionsHash

> **stateTransitionsHash**: `Field` = `Field`

##### status

> **status**: `Bool` = `Bool`

##### transactionHash

> **transactionHash**: `Field` = `Field`

#### Inherited from

`Struct({ stateTransitionsHash: Field, status: Bool, transactionHash: Field, networkStateHash: Field, isMessage: Bool, eventsHash: Field, }).empty`

***

### fromFields()

> `static` **fromFields**: (`fields`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:78

#### Parameters

##### fields

`Field`[]

#### Returns

`object`

##### eventsHash

> **eventsHash**: `Field` = `Field`

##### isMessage

> **isMessage**: `Bool` = `Bool`

##### networkStateHash

> **networkStateHash**: `Field` = `Field`

##### stateTransitionsHash

> **stateTransitionsHash**: `Field` = `Field`

##### status

> **status**: `Bool` = `Bool`

##### transactionHash

> **transactionHash**: `Field` = `Field`

#### Inherited from

`Struct({ stateTransitionsHash: Field, status: Bool, transactionHash: Field, networkStateHash: Field, isMessage: Bool, eventsHash: Field, }).fromFields`

***

### fromJSON()

> `static` **fromJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:112

#### Parameters

##### x

###### eventsHash

`string` = `Field`

###### isMessage

`boolean` = `Bool`

###### networkStateHash

`string` = `Field`

###### stateTransitionsHash

`string` = `Field`

###### status

`boolean` = `Bool`

###### transactionHash

`string` = `Field`

#### Returns

`object`

##### eventsHash

> **eventsHash**: `Field` = `Field`

##### isMessage

> **isMessage**: `Bool` = `Bool`

##### networkStateHash

> **networkStateHash**: `Field` = `Field`

##### stateTransitionsHash

> **stateTransitionsHash**: `Field` = `Field`

##### status

> **status**: `Bool` = `Bool`

##### transactionHash

> **transactionHash**: `Field` = `Field`

#### Inherited from

`Struct({ stateTransitionsHash: Field, status: Bool, transactionHash: Field, networkStateHash: Field, isMessage: Bool, eventsHash: Field, }).fromJSON`

***

### fromValue

> `static` **fromValue**: (`x`) => `object` & (`value`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:68

Convert provable type from a normal JS type.

#### Inherited from

`Struct({ stateTransitionsHash: Field, status: Bool, transactionHash: Field, networkStateHash: Field, isMessage: Bool, eventsHash: Field, }).fromValue`

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

###### eventsHash

`Field` = `Field`

###### isMessage

`Bool` = `Bool`

###### networkStateHash

`Field` = `Field`

###### stateTransitionsHash

`Field` = `Field`

###### status

`Bool` = `Bool`

###### transactionHash

`Field` = `Field`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

`Struct({ stateTransitionsHash: Field, status: Bool, transactionHash: Field, networkStateHash: Field, isMessage: Bool, eventsHash: Field, }).toAuxiliary`

***

### toFields()

> `static` **toFields**: (`value`) => `Field`[]

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:24

A function that takes `value`, an element of type `T`, as argument and returns
an array of Field elements that make up the provable data of `value`.

#### Parameters

##### value

the element of type `T` to generate the Field array from.

###### eventsHash

`Field` = `Field`

###### isMessage

`Bool` = `Bool`

###### networkStateHash

`Field` = `Field`

###### stateTransitionsHash

`Field` = `Field`

###### status

`Bool` = `Bool`

###### transactionHash

`Field` = `Field`

#### Returns

`Field`[]

A Field array describing how this `T` element is made up of Field elements.

#### Inherited from

`Struct({ stateTransitionsHash: Field, status: Bool, transactionHash: Field, networkStateHash: Field, isMessage: Bool, eventsHash: Field, }).toFields`

***

### toInput()

> `static` **toInput**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:107

#### Parameters

##### x

###### eventsHash

`Field` = `Field`

###### isMessage

`Bool` = `Bool`

###### networkStateHash

`Field` = `Field`

###### stateTransitionsHash

`Field` = `Field`

###### status

`Bool` = `Bool`

###### transactionHash

`Field` = `Field`

#### Returns

`object`

##### fields?

> `optional` **fields**: `Field`[]

##### packed?

> `optional` **packed**: \[`Field`, `number`\][]

#### Inherited from

`Struct({ stateTransitionsHash: Field, status: Bool, transactionHash: Field, networkStateHash: Field, isMessage: Bool, eventsHash: Field, }).toInput`

***

### toJSON()

> `static` **toJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:111

#### Parameters

##### x

###### eventsHash

`Field` = `Field`

###### isMessage

`Bool` = `Bool`

###### networkStateHash

`Field` = `Field`

###### stateTransitionsHash

`Field` = `Field`

###### status

`Bool` = `Bool`

###### transactionHash

`Field` = `Field`

#### Returns

`object`

##### eventsHash

> **eventsHash**: `string` = `Field`

##### isMessage

> **isMessage**: `boolean` = `Bool`

##### networkStateHash

> **networkStateHash**: `string` = `Field`

##### stateTransitionsHash

> **stateTransitionsHash**: `string` = `Field`

##### status

> **status**: `boolean` = `Bool`

##### transactionHash

> **transactionHash**: `string` = `Field`

#### Inherited from

`Struct({ stateTransitionsHash: Field, status: Bool, transactionHash: Field, networkStateHash: Field, isMessage: Bool, eventsHash: Field, }).toJSON`

***

### toValue()

> `static` **toValue**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:64

Convert provable type to a normal JS type.

#### Parameters

##### x

###### eventsHash

`Field` = `Field`

###### isMessage

`Bool` = `Bool`

###### networkStateHash

`Field` = `Field`

###### stateTransitionsHash

`Field` = `Field`

###### status

`Bool` = `Bool`

###### transactionHash

`Field` = `Field`

#### Returns

`object`

##### eventsHash

> **eventsHash**: `bigint` = `Field`

##### isMessage

> **isMessage**: `boolean` = `Bool`

##### networkStateHash

> **networkStateHash**: `bigint` = `Field`

##### stateTransitionsHash

> **stateTransitionsHash**: `bigint` = `Field`

##### status

> **status**: `boolean` = `Bool`

##### transactionHash

> **transactionHash**: `bigint` = `Field`

#### Inherited from

`Struct({ stateTransitionsHash: Field, status: Bool, transactionHash: Field, networkStateHash: Field, isMessage: Bool, eventsHash: Field, }).toValue`

## Methods

### sizeInFields()

> `static` **sizeInFields**(): `number`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:51

Return the size of the `T` type in terms of Field type, as Field is the primitive type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of Field type.

#### Inherited from

`Struct({ stateTransitionsHash: Field, status: Bool, transactionHash: Field, networkStateHash: Field, isMessage: Bool, eventsHash: Field, }).sizeInFields`
