---
title: RuntimeMethodExecutionDataStruct
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / RuntimeMethodExecutionDataStruct

# Class: RuntimeMethodExecutionDataStruct

Defined in: [packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts:41](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts#L41)

## Extends

- `object`

## Implements

- [`RuntimeMethodExecutionData`](../interfaces/RuntimeMethodExecutionData.md)

## Constructors

### new RuntimeMethodExecutionDataStruct()

> **new RuntimeMethodExecutionDataStruct**(`value`): [`RuntimeMethodExecutionDataStruct`](RuntimeMethodExecutionDataStruct.md)

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### networkState

[`NetworkState`](NetworkState.md) = `NetworkState`

###### transaction

[`RuntimeTransaction`](RuntimeTransaction.md) = `RuntimeTransaction`

#### Returns

[`RuntimeMethodExecutionDataStruct`](RuntimeMethodExecutionDataStruct.md)

#### Inherited from

`Struct({ transaction: RuntimeTransaction, networkState: NetworkState, }).constructor`

## Properties

### networkState

> **networkState**: [`NetworkState`](NetworkState.md) = `NetworkState`

Defined in: [packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts:44](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts#L44)

#### Implementation of

[`RuntimeMethodExecutionData`](../interfaces/RuntimeMethodExecutionData.md).[`networkState`](../interfaces/RuntimeMethodExecutionData.md#networkstate)

#### Inherited from

`Struct({ transaction: RuntimeTransaction, networkState: NetworkState, }).networkState`

***

### transaction

> **transaction**: [`RuntimeTransaction`](RuntimeTransaction.md) = `RuntimeTransaction`

Defined in: [packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts:43](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts#L43)

#### Implementation of

[`RuntimeMethodExecutionData`](../interfaces/RuntimeMethodExecutionData.md).[`transaction`](../interfaces/RuntimeMethodExecutionData.md#transaction)

#### Inherited from

`Struct({ transaction: RuntimeTransaction, networkState: NetworkState, }).transaction`

***

### \_isStruct

> `static` **\_isStruct**: `true`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:104

#### Inherited from

`Struct({ transaction: RuntimeTransaction, networkState: NetworkState, })._isStruct`

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

###### networkState

[`NetworkState`](NetworkState.md) = `NetworkState`

###### transaction

[`RuntimeTransaction`](RuntimeTransaction.md) = `RuntimeTransaction`

#### Returns

`void`

#### Inherited from

`Struct({ transaction: RuntimeTransaction, networkState: NetworkState, }).check`

***

### empty()

> `static` **empty**: () => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:113

#### Returns

`object`

##### networkState

> **networkState**: [`NetworkState`](NetworkState.md) = `NetworkState`

##### transaction

> **transaction**: [`RuntimeTransaction`](RuntimeTransaction.md) = `RuntimeTransaction`

#### Inherited from

`Struct({ transaction: RuntimeTransaction, networkState: NetworkState, }).empty`

***

### fromFields()

> `static` **fromFields**: (`fields`, `aux`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:45

A function that returns an element of type `T` from the given provable and "auxiliary" data.

This function is the reverse operation of calling [toFields](RuntimeMethodExecutionDataStruct.md#tofields) and toAuxilary methods on an element of type `T`.

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

##### networkState

> **networkState**: [`NetworkState`](NetworkState.md) = `NetworkState`

##### transaction

> **transaction**: [`RuntimeTransaction`](RuntimeTransaction.md) = `RuntimeTransaction`

#### Inherited from

`Struct({ transaction: RuntimeTransaction, networkState: NetworkState, }).fromFields`

***

### fromJSON()

> `static` **fromJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:112

#### Parameters

##### x

###### networkState

\{ `block`: \{ `height`: `string`; \}; `previous`: \{ `rootHash`: `string`; \}; \} = `NetworkState`

###### networkState.block

\{ `height`: `string`; \} = `CurrentBlock`

###### networkState.block.height

`string` = `UInt64`

###### networkState.previous

\{ `rootHash`: `string`; \} = `PreviousBlock`

###### networkState.previous.rootHash

`string` = `Field`

###### transaction

\{ `argsHash`: `string`; `methodId`: `string`; `nonce`: \{ `isSome`: `boolean`; `value`: `any`; \}; `sender`: \{ `isSome`: `boolean`; `value`: `any`; \}; \} = `RuntimeTransaction`

###### transaction.argsHash

`string` = `Field`

###### transaction.methodId

`string` = `Field`

###### transaction.nonce

\{ `isSome`: `boolean`; `value`: `any`; \} = `UInt64Option`

###### transaction.nonce.isSome

`boolean` = `Bool`

###### transaction.nonce.value

`any` = `valueType`

###### transaction.sender

\{ `isSome`: `boolean`; `value`: `any`; \} = `PublicKeyOption`

###### transaction.sender.isSome

`boolean` = `Bool`

###### transaction.sender.value

`any` = `valueType`

#### Returns

`object`

##### networkState

> **networkState**: [`NetworkState`](NetworkState.md) = `NetworkState`

##### transaction

> **transaction**: [`RuntimeTransaction`](RuntimeTransaction.md) = `RuntimeTransaction`

#### Inherited from

`Struct({ transaction: RuntimeTransaction, networkState: NetworkState, }).fromJSON`

***

### fromValue

> `static` **fromValue**: (`x`) => `object` & (`value`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:68

Convert provable type from a normal JS type.

#### Inherited from

`Struct({ transaction: RuntimeTransaction, networkState: NetworkState, }).fromValue`

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

###### networkState

[`NetworkState`](NetworkState.md) = `NetworkState`

###### transaction

[`RuntimeTransaction`](RuntimeTransaction.md) = `RuntimeTransaction`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

`Struct({ transaction: RuntimeTransaction, networkState: NetworkState, }).toAuxiliary`

***

### toFields()

> `static` **toFields**: (`value`) => `Field`[]

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:24

A function that takes `value`, an element of type `T`, as argument and returns
an array of Field elements that make up the provable data of `value`.

#### Parameters

##### value

the element of type `T` to generate the Field array from.

###### networkState

[`NetworkState`](NetworkState.md) = `NetworkState`

###### transaction

[`RuntimeTransaction`](RuntimeTransaction.md) = `RuntimeTransaction`

#### Returns

`Field`[]

A Field array describing how this `T` element is made up of Field elements.

#### Inherited from

`Struct({ transaction: RuntimeTransaction, networkState: NetworkState, }).toFields`

***

### toInput()

> `static` **toInput**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:107

#### Parameters

##### x

###### networkState

[`NetworkState`](NetworkState.md) = `NetworkState`

###### transaction

[`RuntimeTransaction`](RuntimeTransaction.md) = `RuntimeTransaction`

#### Returns

`object`

##### fields?

> `optional` **fields**: `Field`[]

##### packed?

> `optional` **packed**: \[`Field`, `number`\][]

#### Inherited from

`Struct({ transaction: RuntimeTransaction, networkState: NetworkState, }).toInput`

***

### toJSON()

> `static` **toJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:111

#### Parameters

##### x

###### networkState

[`NetworkState`](NetworkState.md) = `NetworkState`

###### transaction

[`RuntimeTransaction`](RuntimeTransaction.md) = `RuntimeTransaction`

#### Returns

`object`

##### networkState

> **networkState**: `object` = `NetworkState`

###### networkState.block

> **networkState.block**: `object` = `CurrentBlock`

###### networkState.block.height

> **networkState.block.height**: `string` = `UInt64`

###### networkState.previous

> **networkState.previous**: `object` = `PreviousBlock`

###### networkState.previous.rootHash

> **networkState.previous.rootHash**: `string` = `Field`

##### transaction

> **transaction**: `object` = `RuntimeTransaction`

###### transaction.argsHash

> **transaction.argsHash**: `string` = `Field`

###### transaction.methodId

> **transaction.methodId**: `string` = `Field`

###### transaction.nonce

> **transaction.nonce**: `object` = `UInt64Option`

###### transaction.nonce.isSome

> **transaction.nonce.isSome**: `boolean` = `Bool`

###### transaction.nonce.value

> **transaction.nonce.value**: `any` = `valueType`

###### transaction.sender

> **transaction.sender**: `object` = `PublicKeyOption`

###### transaction.sender.isSome

> **transaction.sender.isSome**: `boolean` = `Bool`

###### transaction.sender.value

> **transaction.sender.value**: `any` = `valueType`

#### Inherited from

`Struct({ transaction: RuntimeTransaction, networkState: NetworkState, }).toJSON`

***

### toValue()

> `static` **toValue**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:64

Convert provable type to a normal JS type.

#### Parameters

##### x

###### networkState

[`NetworkState`](NetworkState.md) = `NetworkState`

###### transaction

[`RuntimeTransaction`](RuntimeTransaction.md) = `RuntimeTransaction`

#### Returns

`object`

##### networkState

> **networkState**: `object` = `NetworkState`

###### networkState.block

> **networkState.block**: `object` = `CurrentBlock`

###### networkState.block.height

> **networkState.block.height**: `bigint` = `UInt64`

###### networkState.previous

> **networkState.previous**: `object` = `PreviousBlock`

###### networkState.previous.rootHash

> **networkState.previous.rootHash**: `bigint` = `Field`

##### transaction

> **transaction**: `object` = `RuntimeTransaction`

###### transaction.argsHash

> **transaction.argsHash**: `bigint` = `Field`

###### transaction.methodId

> **transaction.methodId**: `bigint` = `Field`

###### transaction.nonce

> **transaction.nonce**: `object` = `UInt64Option`

###### transaction.nonce.isSome

> **transaction.nonce.isSome**: `boolean` = `Bool`

###### transaction.nonce.value

> **transaction.nonce.value**: `any` = `valueType`

###### transaction.sender

> **transaction.sender**: `object` = `PublicKeyOption`

###### transaction.sender.isSome

> **transaction.sender.isSome**: `boolean` = `Bool`

###### transaction.sender.value

> **transaction.sender.value**: `any` = `valueType`

#### Inherited from

`Struct({ transaction: RuntimeTransaction, networkState: NetworkState, }).toValue`

## Methods

### sizeInFields()

> `static` **sizeInFields**(): `number`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:51

Return the size of the `T` type in terms of Field type, as Field is the primitive type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of Field type.

#### Inherited from

`Struct({ transaction: RuntimeTransaction, networkState: NetworkState, }).sizeInFields`
