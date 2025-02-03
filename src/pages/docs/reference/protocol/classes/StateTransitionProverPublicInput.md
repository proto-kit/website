---
title: StateTransitionProverPublicInput
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / StateTransitionProverPublicInput

# Class: StateTransitionProverPublicInput

Defined in: [packages/protocol/src/prover/statetransition/StateTransitionProvable.ts:6](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/prover/statetransition/StateTransitionProvable.ts#L6)

## Extends

- `object`

## Constructors

### new StateTransitionProverPublicInput()

> **new StateTransitionProverPublicInput**(`value`): [`StateTransitionProverPublicInput`](StateTransitionProverPublicInput.md)

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### protocolStateRoot

`Field` = `Field`

###### protocolTransitionsHash

`Field` = `Field`

###### stateRoot

`Field` = `Field`

###### stateTransitionsHash

`Field` = `Field`

#### Returns

[`StateTransitionProverPublicInput`](StateTransitionProverPublicInput.md)

#### Inherited from

`Struct({ stateTransitionsHash: Field, protocolTransitionsHash: Field, stateRoot: Field, protocolStateRoot: Field, }).constructor`

## Properties

### protocolStateRoot

> **protocolStateRoot**: `Field` = `Field`

Defined in: [packages/protocol/src/prover/statetransition/StateTransitionProvable.ts:10](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/prover/statetransition/StateTransitionProvable.ts#L10)

#### Inherited from

`Struct({ stateTransitionsHash: Field, protocolTransitionsHash: Field, stateRoot: Field, protocolStateRoot: Field, }).protocolStateRoot`

***

### protocolTransitionsHash

> **protocolTransitionsHash**: `Field` = `Field`

Defined in: [packages/protocol/src/prover/statetransition/StateTransitionProvable.ts:8](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/prover/statetransition/StateTransitionProvable.ts#L8)

#### Inherited from

`Struct({ stateTransitionsHash: Field, protocolTransitionsHash: Field, stateRoot: Field, protocolStateRoot: Field, }).protocolTransitionsHash`

***

### stateRoot

> **stateRoot**: `Field` = `Field`

Defined in: [packages/protocol/src/prover/statetransition/StateTransitionProvable.ts:9](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/prover/statetransition/StateTransitionProvable.ts#L9)

#### Inherited from

`Struct({ stateTransitionsHash: Field, protocolTransitionsHash: Field, stateRoot: Field, protocolStateRoot: Field, }).stateRoot`

***

### stateTransitionsHash

> **stateTransitionsHash**: `Field` = `Field`

Defined in: [packages/protocol/src/prover/statetransition/StateTransitionProvable.ts:7](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/prover/statetransition/StateTransitionProvable.ts#L7)

#### Inherited from

`Struct({ stateTransitionsHash: Field, protocolTransitionsHash: Field, stateRoot: Field, protocolStateRoot: Field, }).stateTransitionsHash`

***

### \_isStruct

> `static` **\_isStruct**: `true`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:104

#### Inherited from

`Struct({ stateTransitionsHash: Field, protocolTransitionsHash: Field, stateRoot: Field, protocolStateRoot: Field, })._isStruct`

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

###### protocolStateRoot

`Field` = `Field`

###### protocolTransitionsHash

`Field` = `Field`

###### stateRoot

`Field` = `Field`

###### stateTransitionsHash

`Field` = `Field`

#### Returns

`void`

#### Inherited from

`Struct({ stateTransitionsHash: Field, protocolTransitionsHash: Field, stateRoot: Field, protocolStateRoot: Field, }).check`

***

### empty()

> `static` **empty**: () => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:113

#### Returns

`object`

##### protocolStateRoot

> **protocolStateRoot**: `Field` = `Field`

##### protocolTransitionsHash

> **protocolTransitionsHash**: `Field` = `Field`

##### stateRoot

> **stateRoot**: `Field` = `Field`

##### stateTransitionsHash

> **stateTransitionsHash**: `Field` = `Field`

#### Inherited from

`Struct({ stateTransitionsHash: Field, protocolTransitionsHash: Field, stateRoot: Field, protocolStateRoot: Field, }).empty`

***

### fromFields()

> `static` **fromFields**: (`fields`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:78

#### Parameters

##### fields

`Field`[]

#### Returns

`object`

##### protocolStateRoot

> **protocolStateRoot**: `Field` = `Field`

##### protocolTransitionsHash

> **protocolTransitionsHash**: `Field` = `Field`

##### stateRoot

> **stateRoot**: `Field` = `Field`

##### stateTransitionsHash

> **stateTransitionsHash**: `Field` = `Field`

#### Inherited from

`Struct({ stateTransitionsHash: Field, protocolTransitionsHash: Field, stateRoot: Field, protocolStateRoot: Field, }).fromFields`

***

### fromJSON()

> `static` **fromJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:112

#### Parameters

##### x

###### protocolStateRoot

`string` = `Field`

###### protocolTransitionsHash

`string` = `Field`

###### stateRoot

`string` = `Field`

###### stateTransitionsHash

`string` = `Field`

#### Returns

`object`

##### protocolStateRoot

> **protocolStateRoot**: `Field` = `Field`

##### protocolTransitionsHash

> **protocolTransitionsHash**: `Field` = `Field`

##### stateRoot

> **stateRoot**: `Field` = `Field`

##### stateTransitionsHash

> **stateTransitionsHash**: `Field` = `Field`

#### Inherited from

`Struct({ stateTransitionsHash: Field, protocolTransitionsHash: Field, stateRoot: Field, protocolStateRoot: Field, }).fromJSON`

***

### fromValue

> `static` **fromValue**: (`x`) => `object` & (`value`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:68

Convert provable type from a normal JS type.

#### Inherited from

`Struct({ stateTransitionsHash: Field, protocolTransitionsHash: Field, stateRoot: Field, protocolStateRoot: Field, }).fromValue`

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

###### protocolStateRoot

`Field` = `Field`

###### protocolTransitionsHash

`Field` = `Field`

###### stateRoot

`Field` = `Field`

###### stateTransitionsHash

`Field` = `Field`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

`Struct({ stateTransitionsHash: Field, protocolTransitionsHash: Field, stateRoot: Field, protocolStateRoot: Field, }).toAuxiliary`

***

### toFields()

> `static` **toFields**: (`value`) => `Field`[]

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:24

A function that takes `value`, an element of type `T`, as argument and returns
an array of Field elements that make up the provable data of `value`.

#### Parameters

##### value

the element of type `T` to generate the Field array from.

###### protocolStateRoot

`Field` = `Field`

###### protocolTransitionsHash

`Field` = `Field`

###### stateRoot

`Field` = `Field`

###### stateTransitionsHash

`Field` = `Field`

#### Returns

`Field`[]

A Field array describing how this `T` element is made up of Field elements.

#### Inherited from

`Struct({ stateTransitionsHash: Field, protocolTransitionsHash: Field, stateRoot: Field, protocolStateRoot: Field, }).toFields`

***

### toInput()

> `static` **toInput**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:107

#### Parameters

##### x

###### protocolStateRoot

`Field` = `Field`

###### protocolTransitionsHash

`Field` = `Field`

###### stateRoot

`Field` = `Field`

###### stateTransitionsHash

`Field` = `Field`

#### Returns

`object`

##### fields?

> `optional` **fields**: `Field`[]

##### packed?

> `optional` **packed**: \[`Field`, `number`\][]

#### Inherited from

`Struct({ stateTransitionsHash: Field, protocolTransitionsHash: Field, stateRoot: Field, protocolStateRoot: Field, }).toInput`

***

### toJSON()

> `static` **toJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:111

#### Parameters

##### x

###### protocolStateRoot

`Field` = `Field`

###### protocolTransitionsHash

`Field` = `Field`

###### stateRoot

`Field` = `Field`

###### stateTransitionsHash

`Field` = `Field`

#### Returns

`object`

##### protocolStateRoot

> **protocolStateRoot**: `string` = `Field`

##### protocolTransitionsHash

> **protocolTransitionsHash**: `string` = `Field`

##### stateRoot

> **stateRoot**: `string` = `Field`

##### stateTransitionsHash

> **stateTransitionsHash**: `string` = `Field`

#### Inherited from

`Struct({ stateTransitionsHash: Field, protocolTransitionsHash: Field, stateRoot: Field, protocolStateRoot: Field, }).toJSON`

***

### toValue()

> `static` **toValue**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:64

Convert provable type to a normal JS type.

#### Parameters

##### x

###### protocolStateRoot

`Field` = `Field`

###### protocolTransitionsHash

`Field` = `Field`

###### stateRoot

`Field` = `Field`

###### stateTransitionsHash

`Field` = `Field`

#### Returns

`object`

##### protocolStateRoot

> **protocolStateRoot**: `bigint` = `Field`

##### protocolTransitionsHash

> **protocolTransitionsHash**: `bigint` = `Field`

##### stateRoot

> **stateRoot**: `bigint` = `Field`

##### stateTransitionsHash

> **stateTransitionsHash**: `bigint` = `Field`

#### Inherited from

`Struct({ stateTransitionsHash: Field, protocolTransitionsHash: Field, stateRoot: Field, protocolStateRoot: Field, }).toValue`

## Methods

### sizeInFields()

> `static` **sizeInFields**(): `number`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:51

Return the size of the `T` type in terms of Field type, as Field is the primitive type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of Field type.

#### Inherited from

`Struct({ stateTransitionsHash: Field, protocolTransitionsHash: Field, stateRoot: Field, protocolStateRoot: Field, }).sizeInFields`
