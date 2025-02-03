---
title: RuntimeTransaction
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / RuntimeTransaction

# Class: RuntimeTransaction

Defined in: [packages/protocol/src/model/transaction/RuntimeTransaction.ts:11](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/transaction/RuntimeTransaction.ts#L11)

This struct is used to expose transaction information to the runtime method
execution. This class has not all data included in transactions on purpose.
For example, we don't want to expose the signature or args as fields.

## Extends

- `object`

## Constructors

### new RuntimeTransaction()

> **new RuntimeTransaction**(`value`): [`RuntimeTransaction`](RuntimeTransaction.md)

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### argsHash

`Field` = `Field`

###### methodId

`Field` = `Field`

###### nonce

[`UInt64Option`](UInt64Option.md) = `UInt64Option`

###### sender

[`PublicKeyOption`](PublicKeyOption.md) = `PublicKeyOption`

#### Returns

[`RuntimeTransaction`](RuntimeTransaction.md)

#### Inherited from

`Struct({ methodId: Field, argsHash: Field, nonce: UInt64Option, sender: PublicKeyOption, }).constructor`

## Properties

### argsHash

> **argsHash**: `Field` = `Field`

Defined in: [packages/protocol/src/model/transaction/RuntimeTransaction.ts:13](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/transaction/RuntimeTransaction.ts#L13)

#### Inherited from

`Struct({ methodId: Field, argsHash: Field, nonce: UInt64Option, sender: PublicKeyOption, }).argsHash`

***

### methodId

> **methodId**: `Field` = `Field`

Defined in: [packages/protocol/src/model/transaction/RuntimeTransaction.ts:12](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/transaction/RuntimeTransaction.ts#L12)

#### Inherited from

`Struct({ methodId: Field, argsHash: Field, nonce: UInt64Option, sender: PublicKeyOption, }).methodId`

***

### nonce

> **nonce**: [`UInt64Option`](UInt64Option.md) = `UInt64Option`

Defined in: [packages/protocol/src/model/transaction/RuntimeTransaction.ts:14](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/transaction/RuntimeTransaction.ts#L14)

#### Inherited from

`Struct({ methodId: Field, argsHash: Field, nonce: UInt64Option, sender: PublicKeyOption, }).nonce`

***

### sender

> **sender**: [`PublicKeyOption`](PublicKeyOption.md) = `PublicKeyOption`

Defined in: [packages/protocol/src/model/transaction/RuntimeTransaction.ts:15](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/transaction/RuntimeTransaction.ts#L15)

#### Inherited from

`Struct({ methodId: Field, argsHash: Field, nonce: UInt64Option, sender: PublicKeyOption, }).sender`

***

### \_isStruct

> `static` **\_isStruct**: `true`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:104

#### Inherited from

`Struct({ methodId: Field, argsHash: Field, nonce: UInt64Option, sender: PublicKeyOption, })._isStruct`

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

###### argsHash

`Field` = `Field`

###### methodId

`Field` = `Field`

###### nonce

[`UInt64Option`](UInt64Option.md) = `UInt64Option`

###### sender

[`PublicKeyOption`](PublicKeyOption.md) = `PublicKeyOption`

#### Returns

`void`

#### Inherited from

`Struct({ methodId: Field, argsHash: Field, nonce: UInt64Option, sender: PublicKeyOption, }).check`

***

### empty()

> `static` **empty**: () => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:113

#### Returns

`object`

##### argsHash

> **argsHash**: `Field` = `Field`

##### methodId

> **methodId**: `Field` = `Field`

##### nonce

> **nonce**: [`UInt64Option`](UInt64Option.md) = `UInt64Option`

##### sender

> **sender**: [`PublicKeyOption`](PublicKeyOption.md) = `PublicKeyOption`

#### Inherited from

`Struct({ methodId: Field, argsHash: Field, nonce: UInt64Option, sender: PublicKeyOption, }).empty`

***

### fromFields()

> `static` **fromFields**: (`fields`, `aux`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:45

A function that returns an element of type `T` from the given provable and "auxiliary" data.

This function is the reverse operation of calling [toFields](RuntimeTransaction.md#tofields) and toAuxilary methods on an element of type `T`.

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

##### argsHash

> **argsHash**: `Field` = `Field`

##### methodId

> **methodId**: `Field` = `Field`

##### nonce

> **nonce**: [`UInt64Option`](UInt64Option.md) = `UInt64Option`

##### sender

> **sender**: [`PublicKeyOption`](PublicKeyOption.md) = `PublicKeyOption`

#### Inherited from

`Struct({ methodId: Field, argsHash: Field, nonce: UInt64Option, sender: PublicKeyOption, }).fromFields`

***

### fromJSON()

> `static` **fromJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:112

#### Parameters

##### x

###### argsHash

`string` = `Field`

###### methodId

`string` = `Field`

###### nonce

\{ `isSome`: `boolean`; `value`: `any`; \} = `UInt64Option`

###### nonce.isSome

`boolean` = `Bool`

###### nonce.value

`any` = `valueType`

###### sender

\{ `isSome`: `boolean`; `value`: `any`; \} = `PublicKeyOption`

###### sender.isSome

`boolean` = `Bool`

###### sender.value

`any` = `valueType`

#### Returns

`object`

##### argsHash

> **argsHash**: `Field` = `Field`

##### methodId

> **methodId**: `Field` = `Field`

##### nonce

> **nonce**: [`UInt64Option`](UInt64Option.md) = `UInt64Option`

##### sender

> **sender**: [`PublicKeyOption`](PublicKeyOption.md) = `PublicKeyOption`

#### Inherited from

`Struct({ methodId: Field, argsHash: Field, nonce: UInt64Option, sender: PublicKeyOption, }).fromJSON`

***

### fromValue

> `static` **fromValue**: (`x`) => `object` & (`value`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:68

Convert provable type from a normal JS type.

#### Inherited from

`Struct({ methodId: Field, argsHash: Field, nonce: UInt64Option, sender: PublicKeyOption, }).fromValue`

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

###### argsHash

`Field` = `Field`

###### methodId

`Field` = `Field`

###### nonce

[`UInt64Option`](UInt64Option.md) = `UInt64Option`

###### sender

[`PublicKeyOption`](PublicKeyOption.md) = `PublicKeyOption`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

`Struct({ methodId: Field, argsHash: Field, nonce: UInt64Option, sender: PublicKeyOption, }).toAuxiliary`

***

### toFields()

> `static` **toFields**: (`value`) => `Field`[]

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:24

A function that takes `value`, an element of type `T`, as argument and returns
an array of Field elements that make up the provable data of `value`.

#### Parameters

##### value

the element of type `T` to generate the Field array from.

###### argsHash

`Field` = `Field`

###### methodId

`Field` = `Field`

###### nonce

[`UInt64Option`](UInt64Option.md) = `UInt64Option`

###### sender

[`PublicKeyOption`](PublicKeyOption.md) = `PublicKeyOption`

#### Returns

`Field`[]

A Field array describing how this `T` element is made up of Field elements.

#### Inherited from

`Struct({ methodId: Field, argsHash: Field, nonce: UInt64Option, sender: PublicKeyOption, }).toFields`

***

### toInput()

> `static` **toInput**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:107

#### Parameters

##### x

###### argsHash

`Field` = `Field`

###### methodId

`Field` = `Field`

###### nonce

[`UInt64Option`](UInt64Option.md) = `UInt64Option`

###### sender

[`PublicKeyOption`](PublicKeyOption.md) = `PublicKeyOption`

#### Returns

`object`

##### fields?

> `optional` **fields**: `Field`[]

##### packed?

> `optional` **packed**: \[`Field`, `number`\][]

#### Inherited from

`Struct({ methodId: Field, argsHash: Field, nonce: UInt64Option, sender: PublicKeyOption, }).toInput`

***

### toJSON()

> `static` **toJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:111

#### Parameters

##### x

###### argsHash

`Field` = `Field`

###### methodId

`Field` = `Field`

###### nonce

[`UInt64Option`](UInt64Option.md) = `UInt64Option`

###### sender

[`PublicKeyOption`](PublicKeyOption.md) = `PublicKeyOption`

#### Returns

`object`

##### argsHash

> **argsHash**: `string` = `Field`

##### methodId

> **methodId**: `string` = `Field`

##### nonce

> **nonce**: `object` = `UInt64Option`

###### nonce.isSome

> **nonce.isSome**: `boolean` = `Bool`

###### nonce.value

> **nonce.value**: `any` = `valueType`

##### sender

> **sender**: `object` = `PublicKeyOption`

###### sender.isSome

> **sender.isSome**: `boolean` = `Bool`

###### sender.value

> **sender.value**: `any` = `valueType`

#### Inherited from

`Struct({ methodId: Field, argsHash: Field, nonce: UInt64Option, sender: PublicKeyOption, }).toJSON`

***

### toValue()

> `static` **toValue**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:64

Convert provable type to a normal JS type.

#### Parameters

##### x

###### argsHash

`Field` = `Field`

###### methodId

`Field` = `Field`

###### nonce

[`UInt64Option`](UInt64Option.md) = `UInt64Option`

###### sender

[`PublicKeyOption`](PublicKeyOption.md) = `PublicKeyOption`

#### Returns

`object`

##### argsHash

> **argsHash**: `bigint` = `Field`

##### methodId

> **methodId**: `bigint` = `Field`

##### nonce

> **nonce**: `object` = `UInt64Option`

###### nonce.isSome

> **nonce.isSome**: `boolean` = `Bool`

###### nonce.value

> **nonce.value**: `any` = `valueType`

##### sender

> **sender**: `object` = `PublicKeyOption`

###### sender.isSome

> **sender.isSome**: `boolean` = `Bool`

###### sender.value

> **sender.value**: `any` = `valueType`

#### Inherited from

`Struct({ methodId: Field, argsHash: Field, nonce: UInt64Option, sender: PublicKeyOption, }).toValue`

## Methods

### assertTransactionType()

> **assertTransactionType**(`isMessage`): `void`

Defined in: [packages/protocol/src/model/transaction/RuntimeTransaction.ts:61](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/transaction/RuntimeTransaction.ts#L61)

#### Parameters

##### isMessage

`Bool`

#### Returns

`void`

***

### hash()

> **hash**(): `Field`

Defined in: [packages/protocol/src/model/transaction/RuntimeTransaction.ts:102](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/transaction/RuntimeTransaction.ts#L102)

#### Returns

`Field`

***

### hashData()

> **hashData**(): `Field`[]

Defined in: [packages/protocol/src/model/transaction/RuntimeTransaction.ts:76](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/transaction/RuntimeTransaction.ts#L76)

#### Returns

`Field`[]

***

### dummyTransaction()

> `static` **dummyTransaction**(): [`RuntimeTransaction`](RuntimeTransaction.md)

Defined in: [packages/protocol/src/model/transaction/RuntimeTransaction.ts:46](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/transaction/RuntimeTransaction.ts#L46)

#### Returns

[`RuntimeTransaction`](RuntimeTransaction.md)

***

### fromHashData()

> `static` **fromHashData**(`fields`): [`RuntimeTransaction`](RuntimeTransaction.md)

Defined in: [packages/protocol/src/model/transaction/RuntimeTransaction.ts:85](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/transaction/RuntimeTransaction.ts#L85)

#### Parameters

##### fields

`Field`[]

#### Returns

[`RuntimeTransaction`](RuntimeTransaction.md)

***

### fromMessage()

> `static` **fromMessage**(`__namedParameters`): [`RuntimeTransaction`](RuntimeTransaction.md)

Defined in: [packages/protocol/src/model/transaction/RuntimeTransaction.ts:31](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/transaction/RuntimeTransaction.ts#L31)

#### Parameters

##### \_\_namedParameters

###### argsHash

`Field`

###### methodId

`Field`

#### Returns

[`RuntimeTransaction`](RuntimeTransaction.md)

***

### fromTransaction()

> `static` **fromTransaction**(`input`): [`RuntimeTransaction`](RuntimeTransaction.md)

Defined in: [packages/protocol/src/model/transaction/RuntimeTransaction.ts:17](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/transaction/RuntimeTransaction.ts#L17)

#### Parameters

##### input

###### argsHash

`Field`

###### methodId

`Field`

###### nonce

`UInt64`

###### sender

`PublicKey`

#### Returns

[`RuntimeTransaction`](RuntimeTransaction.md)

***

### sizeInFields()

> `static` **sizeInFields**(): `number`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:51

Return the size of the `T` type in terms of Field type, as Field is the primitive type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of Field type.

#### Inherited from

`Struct({ methodId: Field, argsHash: Field, nonce: UInt64Option, sender: PublicKeyOption, }).sizeInFields`
