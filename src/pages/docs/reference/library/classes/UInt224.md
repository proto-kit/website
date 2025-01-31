---
title: UInt224
---

[**@proto-kit/library**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/library](../README.md) / UInt224

# Class: UInt224

Defined in: [packages/library/src/math/UInt224.ts:5](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt224.ts#L5)

UInt is a base class for all soft-failing UInt* implementations.
It has to be overridden for every bitlength that should be available.

For this, the developer has to create a subclass of UInt implementing the
static methods from interface UIntConstructor

## Extends

- [`UInt`](UInt.md)\<`224`\>

## Constructors

### new UInt224()

> **new UInt224**(`value`): [`UInt224`](UInt224.md)

Defined in: [packages/library/src/math/UInt.ts:74](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt.ts#L74)

#### Parameters

##### value

###### value

`Field`

#### Returns

[`UInt224`](UInt224.md)

#### Inherited from

[`UInt`](UInt.md).[`constructor`](UInt.md#constructors)

## Properties

### value

> **value**: `Field` = `Field`

Defined in: [packages/library/src/math/UInt.ts:46](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt.ts#L46)

#### Inherited from

[`UInt`](UInt.md).[`value`](UInt.md#value-2)

***

### \_isStruct

> `static` **\_isStruct**: `true`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:104

#### Inherited from

[`UInt`](UInt.md).[`_isStruct`](UInt.md#_isstruct)

***

### assertionFunction()

> `readonly` `static` **assertionFunction**: (`bool`, `msg`?) => `void`

Defined in: [packages/library/src/math/UInt.ts:48](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt.ts#L48)

#### Parameters

##### bool

`Bool`

##### msg?

`string`

#### Returns

`void`

#### Inherited from

[`UInt`](UInt.md).[`assertionFunction`](UInt.md#assertionfunction)

***

### empty()

> `static` **empty**: () => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:113

#### Returns

`object`

##### value

> **value**: `Field` = `Field`

#### Inherited from

[`UInt`](UInt.md).[`empty`](UInt.md#empty)

***

### fromFields()

> `static` **fromFields**: (`fields`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:78

#### Parameters

##### fields

`Field`[]

#### Returns

`object`

##### value

> **value**: `Field` = `Field`

#### Inherited from

[`UInt`](UInt.md).[`fromFields`](UInt.md#fromfields)

***

### fromJSON()

> `static` **fromJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:112

#### Parameters

##### x

###### value

`string` = `Field`

#### Returns

`object`

##### value

> **value**: `Field` = `Field`

#### Inherited from

[`UInt`](UInt.md).[`fromJSON`](UInt.md#fromjson)

***

### fromValue

> `static` **fromValue**: (`x`) => `object` & (`value`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:68

Convert provable type from a normal JS type.

#### Inherited from

[`UInt`](UInt.md).[`fromValue`](UInt.md#fromvalue)

***

### Safe

> `static` **Safe**: `object`

Defined in: [packages/library/src/math/UInt224.ts:12](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt224.ts#L12)

#### fromField()

##### Parameters

###### value

`Field`

##### Returns

[`UInt224`](UInt224.md)

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

###### value

`Field` = `Field`

#### Returns

`any`[]

An array of any type describing how this `T` element is made up of "auxiliary" (non-provable) data.

#### Inherited from

[`UInt`](UInt.md).[`toAuxiliary`](UInt.md#toauxiliary)

***

### toFields()

> `static` **toFields**: (`value`) => `Field`[]

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:24

A function that takes `value`, an element of type `T`, as argument and returns
an array of Field elements that make up the provable data of `value`.

#### Parameters

##### value

the element of type `T` to generate the Field array from.

###### value

`Field` = `Field`

#### Returns

`Field`[]

A Field array describing how this `T` element is made up of Field elements.

#### Inherited from

[`UInt`](UInt.md).[`toFields`](UInt.md#tofields)

***

### toInput()

> `static` **toInput**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:107

#### Parameters

##### x

###### value

`Field` = `Field`

#### Returns

`object`

##### fields?

> `optional` **fields**: `Field`[]

##### packed?

> `optional` **packed**: \[`Field`, `number`\][]

#### Inherited from

[`UInt`](UInt.md).[`toInput`](UInt.md#toinput)

***

### toJSON()

> `static` **toJSON**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/struct.d.ts:111

#### Parameters

##### x

###### value

`Field` = `Field`

#### Returns

`object`

##### value

> **value**: `string` = `Field`

#### Inherited from

[`UInt`](UInt.md).[`toJSON`](UInt.md#tojson)

***

### toValue()

> `static` **toValue**: (`x`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:64

Convert provable type to a normal JS type.

#### Parameters

##### x

###### value

`Field` = `Field`

#### Returns

`object`

##### value

> **value**: `bigint` = `Field`

#### Inherited from

[`UInt`](UInt.md).[`toValue`](UInt.md#tovalue)

***

### Unsafe

> `static` **Unsafe**: `object`

Defined in: [packages/library/src/math/UInt224.ts:6](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt224.ts#L6)

#### fromField()

##### Parameters

###### value

`Field`

##### Returns

[`UInt224`](UInt224.md)

## Accessors

### max

#### Get Signature

> **get** `static` **max**(): [`UInt224`](UInt224.md)

Defined in: [packages/library/src/math/UInt224.ts:35](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt224.ts#L35)

##### Returns

[`UInt224`](UInt224.md)

***

### zero

#### Get Signature

> **get** `static` **zero**(): [`UInt224`](UInt224.md)

Defined in: [packages/library/src/math/UInt224.ts:31](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt224.ts#L31)

##### Returns

[`UInt224`](UInt224.md)

## Methods

### add()

> **add**(`y`): [`UInt`](UInt.md)\<`224`\>

Defined in: [packages/library/src/math/UInt.ts:301](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt.ts#L301)

Addition with overflow checking.

#### Parameters

##### y

`number` | `bigint` | [`UInt`](UInt.md)\<`224`\>

#### Returns

[`UInt`](UInt.md)\<`224`\>

#### Inherited from

[`UInt`](UInt.md).[`add`](UInt.md#add)

***

### assertEquals()

> **assertEquals**(`y`, `message`?): `void`

Defined in: [packages/library/src/math/UInt.ts:413](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt.ts#L413)

Asserts that a [UInt](UInt.md) is equal to another one.

#### Parameters

##### y

`number` | `bigint` | [`UInt`](UInt.md)\<`224`\>

##### message?

`string`

#### Returns

`void`

#### Inherited from

[`UInt`](UInt.md).[`assertEquals`](UInt.md#assertequals)

***

### assertGreaterThan()

> **assertGreaterThan**(`y`, `message`?): `void`

Defined in: [packages/library/src/math/UInt.ts:385](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt.ts#L385)

Asserts that a [UInt](UInt.md) is greater than another one.

#### Parameters

##### y

[`UInt`](UInt.md)\<`224`\>

##### message?

`string`

#### Returns

`void`

#### Inherited from

[`UInt`](UInt.md).[`assertGreaterThan`](UInt.md#assertgreaterthan)

***

### assertGreaterThanOrEqual()

> **assertGreaterThanOrEqual**(`y`, `message`?): `void`

Defined in: [packages/library/src/math/UInt.ts:399](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt.ts#L399)

Asserts that a [UInt](UInt.md) is greater than or equal to another one.

#### Parameters

##### y

[`UInt`](UInt.md)\<`224`\>

##### message?

`string`

#### Returns

`void`

#### Inherited from

[`UInt`](UInt.md).[`assertGreaterThanOrEqual`](UInt.md#assertgreaterthanorequal)

***

### assertLessThan()

> **assertLessThan**(`y`, `message`?): `void`

Defined in: [packages/library/src/math/UInt.ts:371](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt.ts#L371)

Asserts that a [UInt](UInt.md) is less than another one.

#### Parameters

##### y

[`UInt`](UInt.md)\<`224`\>

##### message?

`string`

#### Returns

`void`

#### Inherited from

[`UInt`](UInt.md).[`assertLessThan`](UInt.md#assertlessthan)

***

### assertLessThanOrEqual()

> **assertLessThanOrEqual**(`y`, `message`?): `void`

Defined in: [packages/library/src/math/UInt.ts:341](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt.ts#L341)

Asserts that a [UInt](UInt.md) is less than or equal to another one.

#### Parameters

##### y

[`UInt`](UInt.md)\<`224`\>

##### message?

`string`

#### Returns

`void`

#### Inherited from

[`UInt`](UInt.md).[`assertLessThanOrEqual`](UInt.md#assertlessthanorequal)

***

### constructorReference()

> **constructorReference**(): [`UIntConstructor`](../type-aliases/UIntConstructor.md)\<`224`\>

Defined in: [packages/library/src/math/UInt224.ts:39](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt224.ts#L39)

#### Returns

[`UIntConstructor`](../type-aliases/UIntConstructor.md)\<`224`\>

#### Overrides

[`UInt`](UInt.md).[`constructorReference`](UInt.md#constructorreference)

***

### div()

> **div**(`y`): [`UInt`](UInt.md)\<`224`\>

Defined in: [packages/library/src/math/UInt.ts:183](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt.ts#L183)

Integer division.

`x.div(y)` returns the floor of `x / y`, that is, the greatest
`z` such that `z * y <= x`.

#### Parameters

##### y

`number` | `bigint` | [`UInt`](UInt.md)\<`224`\>

#### Returns

[`UInt`](UInt.md)\<`224`\>

#### Inherited from

[`UInt`](UInt.md).[`div`](UInt.md#div)

***

### divMod()

> **divMod**(`divisor`): `object`

Defined in: [packages/library/src/math/UInt.ts:122](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt.ts#L122)

Integer division with remainder.

`x.divMod(y)` returns the quotient and the remainder.

#### Parameters

##### divisor

`string` | `number` | `bigint` | [`UInt`](UInt.md)\<`224`\>

#### Returns

`object`

##### quotient

> **quotient**: [`UInt`](UInt.md)\<`224`\>

##### rest

> **rest**: [`UInt`](UInt.md)\<`224`\>

#### Inherited from

[`UInt`](UInt.md).[`divMod`](UInt.md#divmod)

***

### equals()

> **equals**(`y`): `Bool`

Defined in: [packages/library/src/math/UInt.ts:406](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt.ts#L406)

Checks if a [UInt](UInt.md) is equal to another one.

#### Parameters

##### y

`number` | `bigint` | [`UInt`](UInt.md)\<`224`\>

#### Returns

`Bool`

#### Inherited from

[`UInt`](UInt.md).[`equals`](UInt.md#equals)

***

### greaterThan()

> **greaterThan**(`y`): `Bool`

Defined in: [packages/library/src/math/UInt.ts:378](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt.ts#L378)

Checks if a [UInt](UInt.md) is greater than another one.

#### Parameters

##### y

[`UInt`](UInt.md)\<`224`\>

#### Returns

`Bool`

#### Inherited from

[`UInt`](UInt.md).[`greaterThan`](UInt.md#greaterthan)

***

### greaterThanOrEqual()

> **greaterThanOrEqual**(`y`): `Bool`

Defined in: [packages/library/src/math/UInt.ts:392](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt.ts#L392)

Checks if a [UInt](UInt.md) is greater than or equal to another one.

#### Parameters

##### y

[`UInt`](UInt.md)\<`224`\>

#### Returns

`Bool`

#### Inherited from

[`UInt`](UInt.md).[`greaterThanOrEqual`](UInt.md#greaterthanorequal)

***

### lessThan()

> **lessThan**(`y`): `Bool`

Defined in: [packages/library/src/math/UInt.ts:364](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt.ts#L364)

Checks if a [UInt](UInt.md) is less than another one.

#### Parameters

##### y

[`UInt`](UInt.md)\<`224`\>

#### Returns

`Bool`

#### Inherited from

[`UInt`](UInt.md).[`lessThan`](UInt.md#lessthan)

***

### lessThanOrEqual()

> **lessThanOrEqual**(`y`): `Bool`

Defined in: [packages/library/src/math/UInt.ts:325](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt.ts#L325)

Checks if a [UInt](UInt.md) is less than or equal to another one.

#### Parameters

##### y

[`UInt`](UInt.md)\<`224`\>

#### Returns

`Bool`

#### Inherited from

[`UInt`](UInt.md).[`lessThanOrEqual`](UInt.md#lessthanorequal)

***

### mod()

> **mod**(`y`): [`UInt`](UInt.md)\<`224`\>

Defined in: [packages/library/src/math/UInt.ts:275](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt.ts#L275)

Integer remainder.

`x.mod(y)` returns the value `z` such that `0 <= z < y` and
`x - z` is divisble by `y`.

#### Parameters

##### y

`number` | `bigint` | [`UInt`](UInt.md)\<`224`\>

#### Returns

[`UInt`](UInt.md)\<`224`\>

#### Inherited from

[`UInt`](UInt.md).[`mod`](UInt.md#mod)

***

### mul()

> **mul**(`y`): [`UInt`](UInt.md)\<`224`\>

Defined in: [packages/library/src/math/UInt.ts:282](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt.ts#L282)

Multiplication with overflow checking.

#### Parameters

##### y

`number` | `bigint` | [`UInt`](UInt.md)\<`224`\>

#### Returns

[`UInt`](UInt.md)\<`224`\>

#### Inherited from

[`UInt`](UInt.md).[`mul`](UInt.md#mul)

***

### numBits()

> **numBits**(): `224`

Defined in: [packages/library/src/math/UInt224.ts:43](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt224.ts#L43)

#### Returns

`224`

#### Overrides

[`UInt`](UInt.md).[`numBits`](UInt.md#numbits)

***

### sqrtFloor()

> **sqrtFloor**(): [`UInt`](UInt.md)\<`224`\>

Defined in: [packages/library/src/math/UInt.ts:265](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt.ts#L265)

Wraps sqrtMod() by only returning the sqrt and omitting the rest field.

#### Returns

[`UInt`](UInt.md)\<`224`\>

#### Inherited from

[`UInt`](UInt.md).[`sqrtFloor`](UInt.md#sqrtfloor)

***

### sqrtMod()

> **sqrtMod**(): `object`

Defined in: [packages/library/src/math/UInt.ts:202](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt.ts#L202)

Implements a non-overflowing square-root with rest.
Normal Field.sqrt() provides the sqrt as it is defined by the finite
field operations. This implementation however mimics the natural-numbers
style of sqrt to be used inside applications with the tradeoff that it
also returns a "rest" that indicates the amount the actual result is off
(since we floor the result to stay inside the ff).

Some assertions are hard-failing, because they represent malicious
witness values

#### Returns

`object`

sqrt: The non-overflowing sqrt

rest: The remainder indicating how far off the result
is from the "real" sqrt

##### rest

> **rest**: [`UInt`](UInt.md)\<`224`\>

##### sqrt

> **sqrt**: [`UInt`](UInt.md)\<`224`\>

#### Inherited from

[`UInt`](UInt.md).[`sqrtMod`](UInt.md#sqrtmod)

***

### sub()

> **sub**(`y`): [`UInt`](UInt.md)\<`224`\>

Defined in: [packages/library/src/math/UInt.ts:313](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt.ts#L313)

Subtraction with underflow checking.

#### Parameters

##### y

`number` | `bigint` | [`UInt`](UInt.md)\<`224`\>

#### Returns

[`UInt`](UInt.md)\<`224`\>

#### Inherited from

[`UInt`](UInt.md).[`sub`](UInt.md#sub)

***

### toBigInt()

> **toBigInt**(): `bigint`

Defined in: [packages/library/src/math/UInt.ts:113](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt.ts#L113)

Turns the [UInt](UInt.md) into a BigInt.

#### Returns

`bigint`

#### Inherited from

[`UInt`](UInt.md).[`toBigInt`](UInt.md#tobigint)

***

### toO1UInt64()

> **toO1UInt64**(): `UInt64`

Defined in: [packages/library/src/math/UInt.ts:420](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt.ts#L420)

Turns the [UInt](UInt.md) into a o1js [UInt64](UInt64.md), asserting that it fits in 32 bits.

#### Returns

`UInt64`

#### Inherited from

[`UInt`](UInt.md).[`toO1UInt64`](UInt.md#too1uint64)

***

### toO1UInt64Clamped()

> **toO1UInt64Clamped**(): `UInt64`

Defined in: [packages/library/src/math/UInt.ts:430](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt.ts#L430)

Turns the [UInt](UInt.md) into a o1js [UInt64](UInt64.md),
clamping to the 64 bits range if it's too large.

#### Returns

`UInt64`

#### Inherited from

[`UInt`](UInt.md).[`toO1UInt64Clamped`](UInt.md#too1uint64clamped)

***

### toString()

> **toString**(): `string`

Defined in: [packages/library/src/math/UInt.ts:105](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt.ts#L105)

Turns the [UInt](UInt.md) into a string.

#### Returns

`string`

#### Inherited from

[`UInt`](UInt.md).[`toString`](UInt.md#tostring)

***

### check()

> `static` **check**(`x`): `void`

Defined in: [packages/library/src/math/UInt224.ts:20](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt224.ts#L20)

Add assertions to the proof to check if `value` is a valid member of type `T`.
This function does not return anything, instead it creates any number of assertions to prove that `value` is a valid member of the type `T`.

For instance, calling check function on the type Bool asserts that the value of the element is either 1 or 0.

#### Parameters

##### x

###### value

`Field`

#### Returns

`void`

#### Overrides

`UInt.check`

***

### checkConstant()

> `static` **checkConstant**(`x`, `numBits`): `Field`

Defined in: [packages/library/src/math/UInt.ts:54](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt.ts#L54)

#### Parameters

##### x

`Field`

##### numBits

`number`

#### Returns

`Field`

#### Inherited from

[`UInt`](UInt.md).[`checkConstant`](UInt.md#checkconstant)

***

### from()

> `static` **from**(`x`): [`UInt224`](UInt224.md)

Defined in: [packages/library/src/math/UInt224.ts:24](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt224.ts#L24)

#### Parameters

##### x

`string` | `number` | `bigint` | [`UInt`](UInt.md)\<`224`\>

#### Returns

[`UInt224`](UInt224.md)

***

### maxIntField()

> `static` **maxIntField**(`numBits`): `Field`

Defined in: [packages/library/src/math/UInt.ts:70](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/math/UInt.ts#L70)

Creates a [UInt](UInt.md) with a value of 18,446,744,073,709,551,615.

#### Parameters

##### numBits

`number`

#### Returns

`Field`

#### Inherited from

[`UInt`](UInt.md).[`maxIntField`](UInt.md#maxintfield)

***

### sizeInFields()

> `static` **sizeInFields**(): `number`

Defined in: node\_modules/o1js/dist/node/lib/provable/types/provable-intf.d.ts:51

Return the size of the `T` type in terms of Field type, as Field is the primitive type.

#### Returns

`number`

A `number` representing the size of the `T` type in terms of Field type.

#### Inherited from

[`UInt`](UInt.md).[`sizeInFields`](UInt.md#sizeinfields)
