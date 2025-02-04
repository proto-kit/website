---
title: TokenBridgeDeploymentAuth
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / TokenBridgeDeploymentAuth

# Class: TokenBridgeDeploymentAuth

Defined in: [packages/protocol/src/settlement/contracts/authorizations/TokenBridgeDeploymentAuth.ts:5](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/contracts/authorizations/TokenBridgeDeploymentAuth.ts#L5)

Interface for cross-contract call authorization
See https://github.com/proto-kit/framework/issues/202#issuecomment-2407263173

## Extends

- `object`

## Implements

- [`ContractAuthorization`](../interfaces/ContractAuthorization.md)

## Constructors

### new TokenBridgeDeploymentAuth()

> **new TokenBridgeDeploymentAuth**(`value`): [`TokenBridgeDeploymentAuth`](TokenBridgeDeploymentAuth.md)

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### address

`PublicKey` = `PublicKey`

###### target

`PublicKey` = `PublicKey`

###### tokenId

`Field` = `Field`

#### Returns

[`TokenBridgeDeploymentAuth`](TokenBridgeDeploymentAuth.md)

#### Inherited from

`Struct({ target: PublicKey, tokenId: Field, address: PublicKey, }).constructor`

## Properties

### address

> **address**: `PublicKey` = `PublicKey`

Defined in: [packages/protocol/src/settlement/contracts/authorizations/TokenBridgeDeploymentAuth.ts:9](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/contracts/authorizations/TokenBridgeDeploymentAuth.ts#L9)

#### Inherited from

`Struct({ target: PublicKey, tokenId: Field, address: PublicKey, }).address`

***

### target

> **target**: `PublicKey` = `PublicKey`

Defined in: [packages/protocol/src/settlement/contracts/authorizations/TokenBridgeDeploymentAuth.ts:7](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/contracts/authorizations/TokenBridgeDeploymentAuth.ts#L7)

#### Implementation of

[`ContractAuthorization`](../interfaces/ContractAuthorization.md).[`target`](../interfaces/ContractAuthorization.md#target)

#### Inherited from

`Struct({ target: PublicKey, tokenId: Field, address: PublicKey, }).target`

***

### tokenId

> **tokenId**: `Field` = `Field`

Defined in: [packages/protocol/src/settlement/contracts/authorizations/TokenBridgeDeploymentAuth.ts:8](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/contracts/authorizations/TokenBridgeDeploymentAuth.ts#L8)

#### Inherited from

`Struct({ target: PublicKey, tokenId: Field, address: PublicKey, }).tokenId`

***

### \_isStruct

> `static` **\_isStruct**: `true`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:104

#### Inherited from

`Struct({ target: PublicKey, tokenId: Field, address: PublicKey, })._isStruct`

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

###### address

`PublicKey` = `PublicKey`

###### target

`PublicKey` = `PublicKey`

###### tokenId

`Field` = `Field`

#### Returns

`void`

#### Inherited from

`Struct({ target: PublicKey, tokenId: Field, address: PublicKey, }).check`

***

### empty()

> `static` **empty**: () => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:113

#### Returns

`object`

##### address

> **address**: `PublicKey` = `PublicKey`

##### target

> **target**: `PublicKey` = `PublicKey`

##### tokenId

> **tokenId**: `Field` = `Field`

#### Inherited from

`Struct({ target: PublicKey, tokenId: Field, address: PublicKey, }).empty`

***

### fromFields()

> `static` **fromFields**: (`fields`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:78

#### Parameters

##### fields

`Field`[]

#### Returns

`object`

##### address

> **address**: `PublicKey` = `PublicKey`

##### target

> **target**: `PublicKey` = `PublicKey`

##### tokenId

> **tokenId**: `Field` = `Field`

#### Inherited from

`Struct({ target: PublicKey, tokenId: Field, address: PublicKey, }).fromFields`

***

### fromJSON()

> `static` **fromJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:112

#### Parameters

##### x

###### address

`string` = `PublicKey`

###### target

`string` = `PublicKey`

###### tokenId

`string` = `Field`

#### Returns

`object`

##### address

> **address**: `PublicKey` = `PublicKey`

##### target

> **target**: `PublicKey` = `PublicKey`

##### tokenId

> **tokenId**: `Field` = `Field`

#### Inherited from

`Struct({ target: PublicKey, tokenId: Field, address: PublicKey, }).fromJSON`

***

### fromValue

> `static` **fromValue**: (`x`) => `object` & (`value`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:68

Convert provable type from a normal JS type.

#### Inherited from

`Struct({ target: PublicKey, tokenId: Field, address: PublicKey, }).fromValue`

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

###### address

`PublicKey` = `PublicKey`

###### target

`PublicKey` = `PublicKey`

###### tokenId

`Field` = `Field`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

`Struct({ target: PublicKey, tokenId: Field, address: PublicKey, }).toAuxiliary`

***

### toFields()

> `static` **toFields**: (`value`) => `Field`[]

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:24

A function that takes `value`, an element of type `T`, as argument and returns
an array of Field elements that make up the provable data of `value`.

#### Parameters

##### value

the element of type `T` to generate the Field array from.

###### address

`PublicKey` = `PublicKey`

###### target

`PublicKey` = `PublicKey`

###### tokenId

`Field` = `Field`

#### Returns

`Field`[]

A Field array describing how this `T` element is made up of Field elements.

#### Inherited from

`Struct({ target: PublicKey, tokenId: Field, address: PublicKey, }).toFields`

***

### toInput()

> `static` **toInput**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:107

#### Parameters

##### x

###### address

`PublicKey` = `PublicKey`

###### target

`PublicKey` = `PublicKey`

###### tokenId

`Field` = `Field`

#### Returns

`object`

##### fields?

> `optional` **fields**: `Field`[]

##### packed?

> `optional` **packed**: \[`Field`, `number`\][]

#### Inherited from

`Struct({ target: PublicKey, tokenId: Field, address: PublicKey, }).toInput`

***

### toJSON()

> `static` **toJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:111

#### Parameters

##### x

###### address

`PublicKey` = `PublicKey`

###### target

`PublicKey` = `PublicKey`

###### tokenId

`Field` = `Field`

#### Returns

`object`

##### address

> **address**: `string` = `PublicKey`

##### target

> **target**: `string` = `PublicKey`

##### tokenId

> **tokenId**: `string` = `Field`

#### Inherited from

`Struct({ target: PublicKey, tokenId: Field, address: PublicKey, }).toJSON`

***

### toValue()

> `static` **toValue**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:64

Convert provable type to a normal JS type.

#### Parameters

##### x

###### address

`PublicKey` = `PublicKey`

###### target

`PublicKey` = `PublicKey`

###### tokenId

`Field` = `Field`

#### Returns

`object`

##### address

> **address**: `object` = `PublicKey`

###### address.isOdd

> **address.isOdd**: `boolean`

###### address.x

> **address.x**: `bigint`

##### target

> **target**: `object` = `PublicKey`

###### target.isOdd

> **target.isOdd**: `boolean`

###### target.x

> **target.x**: `bigint`

##### tokenId

> **tokenId**: `bigint` = `Field`

#### Inherited from

`Struct({ target: PublicKey, tokenId: Field, address: PublicKey, }).toValue`

## Methods

### hash()

> **hash**(): `Field`

Defined in: [packages/protocol/src/settlement/contracts/authorizations/TokenBridgeDeploymentAuth.ts:13](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/contracts/authorizations/TokenBridgeDeploymentAuth.ts#L13)

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

`Struct({ target: PublicKey, tokenId: Field, address: PublicKey, }).sizeInFields`
