---
title: StateTransitionProvableBatch
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / StateTransitionProvableBatch

# Class: StateTransitionProvableBatch

Defined in: [packages/protocol/src/model/StateTransitionProvableBatch.ts:58](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/StateTransitionProvableBatch.ts#L58)

A Batch of StateTransitions to be consumed by the StateTransitionProver
to prove multiple STs at once

transitionType:
true == normal ST, false == protocol ST

## Extends

- `object`

## Properties

### batch

> **batch**: [`ProvableStateTransition`](ProvableStateTransition.md)[]

Defined in: [packages/protocol/src/model/StateTransitionProvableBatch.ts:59](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/StateTransitionProvableBatch.ts#L59)

#### Inherited from

`Struct({ batch: Provable.Array( ProvableStateTransition, constants.stateTransitionProverBatchSize ), transitionTypes: Provable.Array( ProvableStateTransitionType, constants.stateTransitionProverBatchSize ), merkleWitnesses: Provable.Array( RollupMerkleTreeWitness, constants.stateTransitionProverBatchSize ), }).batch`

***

### merkleWitnesses

> **merkleWitnesses**: [`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md)[]

Defined in: [packages/protocol/src/model/StateTransitionProvableBatch.ts:69](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/StateTransitionProvableBatch.ts#L69)

#### Inherited from

`Struct({ batch: Provable.Array( ProvableStateTransition, constants.stateTransitionProverBatchSize ), transitionTypes: Provable.Array( ProvableStateTransitionType, constants.stateTransitionProverBatchSize ), merkleWitnesses: Provable.Array( RollupMerkleTreeWitness, constants.stateTransitionProverBatchSize ), }).merkleWitnesses`

***

### transitionTypes

> **transitionTypes**: [`ProvableStateTransitionType`](ProvableStateTransitionType.md)[]

Defined in: [packages/protocol/src/model/StateTransitionProvableBatch.ts:64](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/StateTransitionProvableBatch.ts#L64)

#### Inherited from

`Struct({ batch: Provable.Array( ProvableStateTransition, constants.stateTransitionProverBatchSize ), transitionTypes: Provable.Array( ProvableStateTransitionType, constants.stateTransitionProverBatchSize ), merkleWitnesses: Provable.Array( RollupMerkleTreeWitness, constants.stateTransitionProverBatchSize ), }).transitionTypes`

***

### \_isStruct

> `static` **\_isStruct**: `true`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:104

#### Inherited from

`Struct({ batch: Provable.Array( ProvableStateTransition, constants.stateTransitionProverBatchSize ), transitionTypes: Provable.Array( ProvableStateTransitionType, constants.stateTransitionProverBatchSize ), merkleWitnesses: Provable.Array( RollupMerkleTreeWitness, constants.stateTransitionProverBatchSize ), })._isStruct`

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

###### batch

[`ProvableStateTransition`](ProvableStateTransition.md)[] = `...`

###### merkleWitnesses

[`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md)[] = `...`

###### transitionTypes

[`ProvableStateTransitionType`](ProvableStateTransitionType.md)[] = `...`

#### Returns

`void`

#### Inherited from

`Struct({ batch: Provable.Array( ProvableStateTransition, constants.stateTransitionProverBatchSize ), transitionTypes: Provable.Array( ProvableStateTransitionType, constants.stateTransitionProverBatchSize ), merkleWitnesses: Provable.Array( RollupMerkleTreeWitness, constants.stateTransitionProverBatchSize ), }).check`

***

### empty()

> `static` **empty**: () => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:113

#### Returns

`object`

##### batch

> **batch**: [`ProvableStateTransition`](ProvableStateTransition.md)[]

##### merkleWitnesses

> **merkleWitnesses**: [`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md)[]

##### transitionTypes

> **transitionTypes**: [`ProvableStateTransitionType`](ProvableStateTransitionType.md)[]

#### Inherited from

`Struct({ batch: Provable.Array( ProvableStateTransition, constants.stateTransitionProverBatchSize ), transitionTypes: Provable.Array( ProvableStateTransitionType, constants.stateTransitionProverBatchSize ), merkleWitnesses: Provable.Array( RollupMerkleTreeWitness, constants.stateTransitionProverBatchSize ), }).empty`

***

### fromFields()

> `static` **fromFields**: (`fields`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:78

#### Parameters

##### fields

`Field`[]

#### Returns

`object`

##### batch

> **batch**: [`ProvableStateTransition`](ProvableStateTransition.md)[]

##### merkleWitnesses

> **merkleWitnesses**: [`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md)[]

##### transitionTypes

> **transitionTypes**: [`ProvableStateTransitionType`](ProvableStateTransitionType.md)[]

#### Inherited from

`Struct({ batch: Provable.Array( ProvableStateTransition, constants.stateTransitionProverBatchSize ), transitionTypes: Provable.Array( ProvableStateTransitionType, constants.stateTransitionProverBatchSize ), merkleWitnesses: Provable.Array( RollupMerkleTreeWitness, constants.stateTransitionProverBatchSize ), }).fromFields`

***

### fromJSON()

> `static` **fromJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:112

#### Parameters

##### x

###### batch

`object`[] = `...`

###### merkleWitnesses

`object`[] = `...`

###### transitionTypes

`object`[] = `...`

#### Returns

`object`

##### batch

> **batch**: [`ProvableStateTransition`](ProvableStateTransition.md)[]

##### merkleWitnesses

> **merkleWitnesses**: [`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md)[]

##### transitionTypes

> **transitionTypes**: [`ProvableStateTransitionType`](ProvableStateTransitionType.md)[]

#### Inherited from

`Struct({ batch: Provable.Array( ProvableStateTransition, constants.stateTransitionProverBatchSize ), transitionTypes: Provable.Array( ProvableStateTransitionType, constants.stateTransitionProverBatchSize ), merkleWitnesses: Provable.Array( RollupMerkleTreeWitness, constants.stateTransitionProverBatchSize ), }).fromJSON`

***

### fromValue

> `static` **fromValue**: (`x`) => `object` & (`value`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:68

Convert provable type from a normal JS type.

#### Inherited from

`Struct({ batch: Provable.Array( ProvableStateTransition, constants.stateTransitionProverBatchSize ), transitionTypes: Provable.Array( ProvableStateTransitionType, constants.stateTransitionProverBatchSize ), merkleWitnesses: Provable.Array( RollupMerkleTreeWitness, constants.stateTransitionProverBatchSize ), }).fromValue`

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

###### batch

[`ProvableStateTransition`](ProvableStateTransition.md)[] = `...`

###### merkleWitnesses

[`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md)[] = `...`

###### transitionTypes

[`ProvableStateTransitionType`](ProvableStateTransitionType.md)[] = `...`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

`Struct({ batch: Provable.Array( ProvableStateTransition, constants.stateTransitionProverBatchSize ), transitionTypes: Provable.Array( ProvableStateTransitionType, constants.stateTransitionProverBatchSize ), merkleWitnesses: Provable.Array( RollupMerkleTreeWitness, constants.stateTransitionProverBatchSize ), }).toAuxiliary`

***

### toFields()

> `static` **toFields**: (`value`) => `Field`[]

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:24

A function that takes `value`, an element of type `T`, as argument and returns
an array of Field elements that make up the provable data of `value`.

#### Parameters

##### value

the element of type `T` to generate the Field array from.

###### batch

[`ProvableStateTransition`](ProvableStateTransition.md)[] = `...`

###### merkleWitnesses

[`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md)[] = `...`

###### transitionTypes

[`ProvableStateTransitionType`](ProvableStateTransitionType.md)[] = `...`

#### Returns

`Field`[]

A Field array describing how this `T` element is made up of Field elements.

#### Inherited from

`Struct({ batch: Provable.Array( ProvableStateTransition, constants.stateTransitionProverBatchSize ), transitionTypes: Provable.Array( ProvableStateTransitionType, constants.stateTransitionProverBatchSize ), merkleWitnesses: Provable.Array( RollupMerkleTreeWitness, constants.stateTransitionProverBatchSize ), }).toFields`

***

### toInput()

> `static` **toInput**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:107

#### Parameters

##### x

###### batch

[`ProvableStateTransition`](ProvableStateTransition.md)[] = `...`

###### merkleWitnesses

[`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md)[] = `...`

###### transitionTypes

[`ProvableStateTransitionType`](ProvableStateTransitionType.md)[] = `...`

#### Returns

`object`

##### fields?

> `optional` **fields**: `Field`[]

##### packed?

> `optional` **packed**: \[`Field`, `number`\][]

#### Inherited from

`Struct({ batch: Provable.Array( ProvableStateTransition, constants.stateTransitionProverBatchSize ), transitionTypes: Provable.Array( ProvableStateTransitionType, constants.stateTransitionProverBatchSize ), merkleWitnesses: Provable.Array( RollupMerkleTreeWitness, constants.stateTransitionProverBatchSize ), }).toInput`

***

### toJSON()

> `static` **toJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:111

#### Parameters

##### x

###### batch

[`ProvableStateTransition`](ProvableStateTransition.md)[] = `...`

###### merkleWitnesses

[`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md)[] = `...`

###### transitionTypes

[`ProvableStateTransitionType`](ProvableStateTransitionType.md)[] = `...`

#### Returns

`object`

##### batch

> **batch**: `object`[]

##### merkleWitnesses

> **merkleWitnesses**: `object`[]

##### transitionTypes

> **transitionTypes**: `object`[]

#### Inherited from

`Struct({ batch: Provable.Array( ProvableStateTransition, constants.stateTransitionProverBatchSize ), transitionTypes: Provable.Array( ProvableStateTransitionType, constants.stateTransitionProverBatchSize ), merkleWitnesses: Provable.Array( RollupMerkleTreeWitness, constants.stateTransitionProverBatchSize ), }).toJSON`

***

### toValue()

> `static` **toValue**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:64

Convert provable type to a normal JS type.

#### Parameters

##### x

###### batch

[`ProvableStateTransition`](ProvableStateTransition.md)[] = `...`

###### merkleWitnesses

[`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md)[] = `...`

###### transitionTypes

[`ProvableStateTransitionType`](ProvableStateTransitionType.md)[] = `...`

#### Returns

`object`

##### batch

> **batch**: `object`[]

##### merkleWitnesses

> **merkleWitnesses**: `object`[]

##### transitionTypes

> **transitionTypes**: `object`[]

#### Inherited from

`Struct({ batch: Provable.Array( ProvableStateTransition, constants.stateTransitionProverBatchSize ), transitionTypes: Provable.Array( ProvableStateTransitionType, constants.stateTransitionProverBatchSize ), merkleWitnesses: Provable.Array( RollupMerkleTreeWitness, constants.stateTransitionProverBatchSize ), }).toValue`

## Methods

### fromMappings()

> `static` **fromMappings**(`transitions`, `merkleWitnesses`): [`StateTransitionProvableBatch`](StateTransitionProvableBatch.md)

Defined in: [packages/protocol/src/model/StateTransitionProvableBatch.ts:74](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/StateTransitionProvableBatch.ts#L74)

#### Parameters

##### transitions

`object`[]

##### merkleWitnesses

[`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md)[]

#### Returns

[`StateTransitionProvableBatch`](StateTransitionProvableBatch.md)

***

### fromTransitions()

> `static` **fromTransitions**(`transitions`, `protocolTransitions`, `merkleWitnesses`): [`StateTransitionProvableBatch`](StateTransitionProvableBatch.md)

Defined in: [packages/protocol/src/model/StateTransitionProvableBatch.ts:111](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/StateTransitionProvableBatch.ts#L111)

#### Parameters

##### transitions

[`ProvableStateTransition`](ProvableStateTransition.md)[]

##### protocolTransitions

[`ProvableStateTransition`](ProvableStateTransition.md)[]

##### merkleWitnesses

[`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md)[]

#### Returns

[`StateTransitionProvableBatch`](StateTransitionProvableBatch.md)

***

### sizeInFields()

> `static` **sizeInFields**(): `number`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:51

Return the size of the `T` type in terms of Field type, as Field is the primitive type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of Field type.

#### Inherited from

`Struct({ batch: Provable.Array( ProvableStateTransition, constants.stateTransitionProverBatchSize ), transitionTypes: Provable.Array( ProvableStateTransitionType, constants.stateTransitionProverBatchSize ), merkleWitnesses: Provable.Array( RollupMerkleTreeWitness, constants.stateTransitionProverBatchSize ), }).sizeInFields`
