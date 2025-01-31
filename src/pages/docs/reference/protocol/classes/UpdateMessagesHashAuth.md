---
title: UpdateMessagesHashAuth
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / UpdateMessagesHashAuth

# Class: UpdateMessagesHashAuth

Defined in: [packages/protocol/src/settlement/contracts/authorizations/UpdateMessagesHashAuth.ts:5](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/contracts/authorizations/UpdateMessagesHashAuth.ts#L5)

Interface for cross-contract call authorization
See https://github.com/proto-kit/framework/issues/202#issuecomment-2407263173

## Extends

- `object`

## Implements

- [`ContractAuthorization`](../interfaces/ContractAuthorization.md)

## Constructors

### new UpdateMessagesHashAuth()

> **new UpdateMessagesHashAuth**(`value`): [`UpdateMessagesHashAuth`](UpdateMessagesHashAuth.md)

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### executedMessagesHash

`Field` = `Field`

###### newPromisedMessagesHash

`Field` = `Field`

###### target

`PublicKey` = `PublicKey`

#### Returns

[`UpdateMessagesHashAuth`](UpdateMessagesHashAuth.md)

#### Inherited from

`Struct({ target: PublicKey, executedMessagesHash: Field, newPromisedMessagesHash: Field, }).constructor`

## Properties

### executedMessagesHash

> **executedMessagesHash**: `Field` = `Field`

Defined in: [packages/protocol/src/settlement/contracts/authorizations/UpdateMessagesHashAuth.ts:8](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/contracts/authorizations/UpdateMessagesHashAuth.ts#L8)

#### Inherited from

`Struct({ target: PublicKey, executedMessagesHash: Field, newPromisedMessagesHash: Field, }).executedMessagesHash`

***

### newPromisedMessagesHash

> **newPromisedMessagesHash**: `Field` = `Field`

Defined in: [packages/protocol/src/settlement/contracts/authorizations/UpdateMessagesHashAuth.ts:9](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/contracts/authorizations/UpdateMessagesHashAuth.ts#L9)

#### Inherited from

`Struct({ target: PublicKey, executedMessagesHash: Field, newPromisedMessagesHash: Field, }).newPromisedMessagesHash`

***

### target

> **target**: `PublicKey` = `PublicKey`

Defined in: [packages/protocol/src/settlement/contracts/authorizations/UpdateMessagesHashAuth.ts:7](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/contracts/authorizations/UpdateMessagesHashAuth.ts#L7)

#### Implementation of

[`ContractAuthorization`](../interfaces/ContractAuthorization.md).[`target`](../interfaces/ContractAuthorization.md#target)

#### Inherited from

`Struct({ target: PublicKey, executedMessagesHash: Field, newPromisedMessagesHash: Field, }).target`

***

### \_isStruct

> `static` **\_isStruct**: `true`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:104

#### Inherited from

`Struct({ target: PublicKey, executedMessagesHash: Field, newPromisedMessagesHash: Field, })._isStruct`

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

###### executedMessagesHash

`Field` = `Field`

###### newPromisedMessagesHash

`Field` = `Field`

###### target

`PublicKey` = `PublicKey`

#### Returns

`void`

#### Inherited from

`Struct({ target: PublicKey, executedMessagesHash: Field, newPromisedMessagesHash: Field, }).check`

***

### empty()

> `static` **empty**: () => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:113

#### Returns

`object`

##### executedMessagesHash

> **executedMessagesHash**: `Field` = `Field`

##### newPromisedMessagesHash

> **newPromisedMessagesHash**: `Field` = `Field`

##### target

> **target**: `PublicKey` = `PublicKey`

#### Inherited from

`Struct({ target: PublicKey, executedMessagesHash: Field, newPromisedMessagesHash: Field, }).empty`

***

### fromFields()

> `static` **fromFields**: (`fields`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:78

#### Parameters

##### fields

`Field`[]

#### Returns

`object`

##### executedMessagesHash

> **executedMessagesHash**: `Field` = `Field`

##### newPromisedMessagesHash

> **newPromisedMessagesHash**: `Field` = `Field`

##### target

> **target**: `PublicKey` = `PublicKey`

#### Inherited from

`Struct({ target: PublicKey, executedMessagesHash: Field, newPromisedMessagesHash: Field, }).fromFields`

***

### fromJSON()

> `static` **fromJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:112

#### Parameters

##### x

###### executedMessagesHash

`string` = `Field`

###### newPromisedMessagesHash

`string` = `Field`

###### target

`string` = `PublicKey`

#### Returns

`object`

##### executedMessagesHash

> **executedMessagesHash**: `Field` = `Field`

##### newPromisedMessagesHash

> **newPromisedMessagesHash**: `Field` = `Field`

##### target

> **target**: `PublicKey` = `PublicKey`

#### Inherited from

`Struct({ target: PublicKey, executedMessagesHash: Field, newPromisedMessagesHash: Field, }).fromJSON`

***

### fromValue

> `static` **fromValue**: (`x`) => `object` & (`value`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:68

Convert provable type from a normal JS type.

#### Inherited from

`Struct({ target: PublicKey, executedMessagesHash: Field, newPromisedMessagesHash: Field, }).fromValue`

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

###### executedMessagesHash

`Field` = `Field`

###### newPromisedMessagesHash

`Field` = `Field`

###### target

`PublicKey` = `PublicKey`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

`Struct({ target: PublicKey, executedMessagesHash: Field, newPromisedMessagesHash: Field, }).toAuxiliary`

***

### toFields()

> `static` **toFields**: (`value`) => `Field`[]

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:24

A function that takes `value`, an element of type `T`, as argument and returns
an array of Field elements that make up the provable data of `value`.

#### Parameters

##### value

the element of type `T` to generate the Field array from.

###### executedMessagesHash

`Field` = `Field`

###### newPromisedMessagesHash

`Field` = `Field`

###### target

`PublicKey` = `PublicKey`

#### Returns

`Field`[]

A Field array describing how this `T` element is made up of Field elements.

#### Inherited from

`Struct({ target: PublicKey, executedMessagesHash: Field, newPromisedMessagesHash: Field, }).toFields`

***

### toInput()

> `static` **toInput**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:107

#### Parameters

##### x

###### executedMessagesHash

`Field` = `Field`

###### newPromisedMessagesHash

`Field` = `Field`

###### target

`PublicKey` = `PublicKey`

#### Returns

`object`

##### fields?

> `optional` **fields**: `Field`[]

##### packed?

> `optional` **packed**: \[`Field`, `number`\][]

#### Inherited from

`Struct({ target: PublicKey, executedMessagesHash: Field, newPromisedMessagesHash: Field, }).toInput`

***

### toJSON()

> `static` **toJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:111

#### Parameters

##### x

###### executedMessagesHash

`Field` = `Field`

###### newPromisedMessagesHash

`Field` = `Field`

###### target

`PublicKey` = `PublicKey`

#### Returns

`object`

##### executedMessagesHash

> **executedMessagesHash**: `string` = `Field`

##### newPromisedMessagesHash

> **newPromisedMessagesHash**: `string` = `Field`

##### target

> **target**: `string` = `PublicKey`

#### Inherited from

`Struct({ target: PublicKey, executedMessagesHash: Field, newPromisedMessagesHash: Field, }).toJSON`

***

### toValue()

> `static` **toValue**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:64

Convert provable type to a normal JS type.

#### Parameters

##### x

###### executedMessagesHash

`Field` = `Field`

###### newPromisedMessagesHash

`Field` = `Field`

###### target

`PublicKey` = `PublicKey`

#### Returns

`object`

##### executedMessagesHash

> **executedMessagesHash**: `bigint` = `Field`

##### newPromisedMessagesHash

> **newPromisedMessagesHash**: `bigint` = `Field`

##### target

> **target**: `object` = `PublicKey`

###### target.isOdd

> **target.isOdd**: `boolean`

###### target.x

> **target.x**: `bigint`

#### Inherited from

`Struct({ target: PublicKey, executedMessagesHash: Field, newPromisedMessagesHash: Field, }).toValue`

## Methods

### hash()

> **hash**(): `Field`

Defined in: [packages/protocol/src/settlement/contracts/authorizations/UpdateMessagesHashAuth.ts:13](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/contracts/authorizations/UpdateMessagesHashAuth.ts#L13)

#### Returns

`Field`

#### Implementation of

[`ContractAuthorization`](../interfaces/ContractAuthorization.md).[`hash`](../interfaces/ContractAuthorization.md#hash)

***

### sizeInFields()

> `static` **sizeInFields**(): `number`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:51

Return the size of the `T` type in terms of Field type, as Field is the primitive type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of Field type.

#### Inherited from

`Struct({ target: PublicKey, executedMessagesHash: Field, newPromisedMessagesHash: Field, }).sizeInFields`
