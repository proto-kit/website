---
title: UIntConstructor
---

[**@proto-kit/library**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/library](../README.md) / UIntConstructor

# Type Alias: UIntConstructor\<BITS\>

> **UIntConstructor**\<`BITS`\>: `object`

Defined in: [packages/library/src/math/UInt.ts:24](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt.ts#L24)

## Type Parameters

• **BITS** *extends* `number`

## Type declaration

### Safe

> **Safe**: `object`

#### Safe.fromField()

##### Parameters

###### x

`Field`

##### Returns

[`UInt`](../classes/UInt.md)\<`BITS`\>

### Unsafe

> **Unsafe**: `object`

#### Unsafe.fromField()

##### Parameters

###### x

`Field`

##### Returns

[`UInt`](../classes/UInt.md)\<`BITS`\>

### max

#### Get Signature

> **get** **max**(): [`UInt`](../classes/UInt.md)\<`BITS`\>

##### Returns

[`UInt`](../classes/UInt.md)\<`BITS`\>

### zero

#### Get Signature

> **get** **zero**(): [`UInt`](../classes/UInt.md)\<`BITS`\>

##### Returns

[`UInt`](../classes/UInt.md)\<`BITS`\>

### check()

#### Parameters

##### x

###### value

`Field`

#### Returns

`void`

### from()

#### Parameters

##### x

`string` | `number` | `bigint` | [`UInt`](../classes/UInt.md)\<`BITS`\>

#### Returns

[`UInt`](../classes/UInt.md)\<`BITS`\>
