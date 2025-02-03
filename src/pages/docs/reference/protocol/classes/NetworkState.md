---
title: NetworkState
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / NetworkState

# Class: NetworkState

Defined in: [packages/protocol/src/model/network/NetworkState.ts:12](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/network/NetworkState.ts#L12)

## Extends

- `object`

## Constructors

### new NetworkState()

> **new NetworkState**(`value`): [`NetworkState`](NetworkState.md)

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:103

#### Parameters

##### value

###### block

[`CurrentBlock`](CurrentBlock.md) = `CurrentBlock`

###### previous

[`PreviousBlock`](PreviousBlock.md) = `PreviousBlock`

#### Returns

[`NetworkState`](NetworkState.md)

#### Inherited from

`Struct({ block: CurrentBlock, previous: PreviousBlock, }).constructor`

## Properties

### block

> **block**: [`CurrentBlock`](CurrentBlock.md) = `CurrentBlock`

Defined in: [packages/protocol/src/model/network/NetworkState.ts:13](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/network/NetworkState.ts#L13)

#### Inherited from

`Struct({ block: CurrentBlock, previous: PreviousBlock, }).block`

***

### previous

> **previous**: [`PreviousBlock`](PreviousBlock.md) = `PreviousBlock`

Defined in: [packages/protocol/src/model/network/NetworkState.ts:14](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/network/NetworkState.ts#L14)

#### Inherited from

`Struct({ block: CurrentBlock, previous: PreviousBlock, }).previous`

***

### \_isStruct

> `static` **\_isStruct**: `true`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:104

#### Inherited from

`Struct({ block: CurrentBlock, previous: PreviousBlock, })._isStruct`

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

###### block

[`CurrentBlock`](CurrentBlock.md) = `CurrentBlock`

###### previous

[`PreviousBlock`](PreviousBlock.md) = `PreviousBlock`

#### Returns

`void`

#### Inherited from

`Struct({ block: CurrentBlock, previous: PreviousBlock, }).check`

***

### fromFields()

> `static` **fromFields**: (`fields`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:78

#### Parameters

##### fields

`Field`[]

#### Returns

`object`

##### block

> **block**: [`CurrentBlock`](CurrentBlock.md) = `CurrentBlock`

##### previous

> **previous**: [`PreviousBlock`](PreviousBlock.md) = `PreviousBlock`

#### Inherited from

`Struct({ block: CurrentBlock, previous: PreviousBlock, }).fromFields`

***

### fromJSON()

> `static` **fromJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:112

#### Parameters

##### x

###### block

\{ `height`: `string`; \} = `CurrentBlock`

###### block.height

`string` = `UInt64`

###### previous

\{ `rootHash`: `string`; \} = `PreviousBlock`

###### previous.rootHash

`string` = `Field`

#### Returns

`object`

##### block

> **block**: [`CurrentBlock`](CurrentBlock.md) = `CurrentBlock`

##### previous

> **previous**: [`PreviousBlock`](PreviousBlock.md) = `PreviousBlock`

#### Inherited from

`Struct({ block: CurrentBlock, previous: PreviousBlock, }).fromJSON`

***

### fromValue

> `static` **fromValue**: (`x`) => `object` & (`value`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:68

Convert provable type from a normal JS type.

#### Inherited from

`Struct({ block: CurrentBlock, previous: PreviousBlock, }).fromValue`

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

###### block

[`CurrentBlock`](CurrentBlock.md) = `CurrentBlock`

###### previous

[`PreviousBlock`](PreviousBlock.md) = `PreviousBlock`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

`Struct({ block: CurrentBlock, previous: PreviousBlock, }).toAuxiliary`

***

### toFields()

> `static` **toFields**: (`value`) => `Field`[]

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:24

A function that takes `value`, an element of type `T`, as argument and returns
an array of Field elements that make up the provable data of `value`.

#### Parameters

##### value

the element of type `T` to generate the Field array from.

###### block

[`CurrentBlock`](CurrentBlock.md) = `CurrentBlock`

###### previous

[`PreviousBlock`](PreviousBlock.md) = `PreviousBlock`

#### Returns

`Field`[]

A Field array describing how this `T` element is made up of Field elements.

#### Inherited from

`Struct({ block: CurrentBlock, previous: PreviousBlock, }).toFields`

***

### toInput()

> `static` **toInput**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:107

#### Parameters

##### x

###### block

[`CurrentBlock`](CurrentBlock.md) = `CurrentBlock`

###### previous

[`PreviousBlock`](PreviousBlock.md) = `PreviousBlock`

#### Returns

`object`

##### fields?

> `optional` **fields**: `Field`[]

##### packed?

> `optional` **packed**: \[`Field`, `number`\][]

#### Inherited from

`Struct({ block: CurrentBlock, previous: PreviousBlock, }).toInput`

***

### toJSON()

> `static` **toJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:111

#### Parameters

##### x

###### block

[`CurrentBlock`](CurrentBlock.md) = `CurrentBlock`

###### previous

[`PreviousBlock`](PreviousBlock.md) = `PreviousBlock`

#### Returns

`object`

##### block

> **block**: `object` = `CurrentBlock`

###### block.height

> **block.height**: `string` = `UInt64`

##### previous

> **previous**: `object` = `PreviousBlock`

###### previous.rootHash

> **previous.rootHash**: `string` = `Field`

#### Inherited from

`Struct({ block: CurrentBlock, previous: PreviousBlock, }).toJSON`

***

### toValue()

> `static` **toValue**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:64

Convert provable type to a normal JS type.

#### Parameters

##### x

###### block

[`CurrentBlock`](CurrentBlock.md) = `CurrentBlock`

###### previous

[`PreviousBlock`](PreviousBlock.md) = `PreviousBlock`

#### Returns

`object`

##### block

> **block**: `object` = `CurrentBlock`

###### block.height

> **block.height**: `bigint` = `UInt64`

##### previous

> **previous**: `object` = `PreviousBlock`

###### previous.rootHash

> **previous.rootHash**: `bigint` = `Field`

#### Inherited from

`Struct({ block: CurrentBlock, previous: PreviousBlock, }).toValue`

## Methods

### hash()

> **hash**(): `Field`

Defined in: [packages/protocol/src/model/network/NetworkState.ts:16](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/network/NetworkState.ts#L16)

#### Returns

`Field`

***

### empty()

> `static` **empty**(): [`NetworkState`](NetworkState.md)

Defined in: [packages/protocol/src/model/network/NetworkState.ts:23](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/network/NetworkState.ts#L23)

#### Returns

[`NetworkState`](NetworkState.md)

#### Overrides

`Struct({ block: CurrentBlock, previous: PreviousBlock, }).empty`

***

### sizeInFields()

> `static` **sizeInFields**(): `number`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:51

Return the size of the `T` type in terms of Field type, as Field is the primitive type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of Field type.

#### Inherited from

`Struct({ block: CurrentBlock, previous: PreviousBlock, }).sizeInFields`
