---
title: TokenId
---

[**@proto-kit/library**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/library](../README.md) / TokenId

# Class: TokenId

Defined in: [packages/library/src/runtime/Balances.ts:18](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/library/src/runtime/Balances.ts#L18)

## Extends

- `Field`

## Constructors

### new TokenId()

> **new TokenId**(`x`): [`TokenId`](TokenId.md)

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:55

Coerce anything "field-like" (bigint, number, string, and Field) to a Field.

#### Parameters

##### x

`string` | `number` | `bigint` | `Field` | `FieldVar` | `FieldConst`

#### Returns

[`TokenId`](TokenId.md)

#### Inherited from

`Field.constructor`

## Properties

### value

> **value**: `FieldVar`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:46

#### Inherited from

`Field.value`

***

### ORDER

> `static` **ORDER**: `bigint`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:51

The order of the pasta curve that Field type build on as a `bigint`.
Order of the Field is 28948022309329048855892746252171976963363056481941560715954676764349967630337.

#### Inherited from

`Field.ORDER`

***

### sizeInBits

> `static` **sizeInBits**: `number`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:710

The size of a Field element in bits - 255.

#### Inherited from

`Field.sizeInBits`

***

### sizeInBytes

> `static` **sizeInBytes**: `number`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:706

The size of a Field element in bytes - 32.

#### Inherited from

`Field.sizeInBytes`

## Methods

### add()

> **add**(`y`): `Field`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:159

Add a field-like value to this Field element.

#### Parameters

##### y

`string` | `number` | `bigint` | `Field`

#### Returns

`Field`

A Field element equivalent to the modular addition of the two value.

#### Examples

```ts
const x = Field(3);
const sum = x.add(5);

sum.assertEquals(Field(8));
```

**Warning**: This is a modular addition in the pasta field.

```ts
const x = Field(1);
const sum = x.add(Field(-7));

// If you try to print sum - `console.log(sum.toBigInt())` - you will realize that it prints a very big integer because this is modular arithmetic, and 1 + (-7) circles around the field to become p - 6.
// You can use the reverse operation of addition (subtraction) to prove the sum is calculated correctly.

sum.sub(x).assertEquals(Field(-7));
sum.sub(Field(-7)).assertEquals(x);
```

#### Inherited from

`Field.add`

***

### assertBool()

> **assertBool**(`message`?): `Bool`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:493

Prove that this Field is equal to 0 or 1.
Returns the Field wrapped in a Bool.

If the assertion fails, the code throws an error.

#### Parameters

##### message?

`string`

#### Returns

`Bool`

#### Inherited from

`Field.assertBool`

***

### assertEquals()

> **assertEquals**(`y`, `message`?): `void`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:130

Assert that this Field is equal another "field-like" value.
Calling this function is equivalent to `Field(...).equals(...).assertEquals(Bool(true))`.
See [Field.equals](TokenId.md#equals) for more details.

**Important**: If an assertion fails, the code throws an error.

#### Parameters

##### y

`string` | `number` | `bigint` | `Field`

##### message?

`string`

#### Returns

`void`

#### Inherited from

`Field.assertEquals`

***

### assertGreaterThan()

> **assertGreaterThan**(`y`, `message`?): `void`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:461

Assert that this Field is greater than another "field-like" value.

Note: This uses fewer constraints than `x.greaterThan(y).assertTrue()`.
See [Field.greaterThan](TokenId.md#greaterthan) for more details.

**Important**: If an assertion fails, the code throws an error.

#### Parameters

##### y

`string` | `number` | `bigint` | `Field`

##### message?

`string`

#### Returns

`void`

#### Inherited from

`Field.assertGreaterThan`

***

### assertGreaterThanOrEqual()

> **assertGreaterThanOrEqual**(`y`, `message`?): `void`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:473

Assert that this Field is greater than or equal to another "field-like" value.

Note: This uses fewer constraints than `x.greaterThanOrEqual(y).assertTrue()`.
See [Field.greaterThanOrEqual](TokenId.md#greaterthanorequal) for more details.

**Important**: If an assertion fails, the code throws an error.

#### Parameters

##### y

`string` | `number` | `bigint` | `Field`

##### message?

`string`

#### Returns

`void`

#### Inherited from

`Field.assertGreaterThanOrEqual`

***

### assertLessThan()

> **assertLessThan**(`y`, `message`?): `void`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:437

Assert that this Field is less than another "field-like" value.

Note: This uses fewer constraints than `x.lessThan(y).assertTrue()`.
See [lessThan](TokenId.md#lessthan) for more details.

**Important**: If an assertion fails, the code throws an error.

#### Parameters

##### y

`string` | `number` | `bigint` | `Field`

##### message?

`string`

#### Returns

`void`

#### Inherited from

`Field.assertLessThan`

***

### assertLessThanOrEqual()

> **assertLessThanOrEqual**(`y`, `message`?): `void`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:449

Assert that this Field is less than or equal to another "field-like" value.

Note: This uses fewer constraints than `x.lessThanOrEqual(y).assertTrue()`.
See [Field.lessThanOrEqual](TokenId.md#lessthanorequal) for more details.

**Important**: If an assertion fails, the code throws an error.

#### Parameters

##### y

`string` | `number` | `bigint` | `Field`

##### message?

`string`

#### Returns

`void`

#### Inherited from

`Field.assertLessThanOrEqual`

***

### assertNotEquals()

> **assertNotEquals**(`y`, `message`?): `void`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:484

Assert that this Field does not equal another field-like value.

Note: This uses fewer constraints than `x.equals(y).assertFalse()`.

#### Parameters

##### y

`string` | `number` | `bigint` | `Field`

##### message?

`string`

#### Returns

`void`

#### Example

```ts
x.assertNotEquals(0, "expect x to be non-zero");
```

#### Inherited from

`Field.assertNotEquals`

***

### div()

> **div**(`y`): `Field`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:293

Divide another "field-like" value through this Field.

Proves that the denominator is non-zero, or throws a "Division by zero" error.

#### Parameters

##### y

`string` | `number` | `bigint` | `Field`

#### Returns

`Field`

A Field element equivalent to the modular division of the two value.

#### Examples

```ts
const x = Field(6);
const quotient = x.div(Field(3));

quotient.assertEquals(Field(2));
```

**Warning**: This is a modular division in the pasta field. You can think this as the reverse operation of modular multiplication.

```ts
const x = Field(2);
const y = Field(5);

const quotient = x.div(y);

// If you try to print quotient - `console.log(quotient.toBigInt())` - you will realize that it prints a very big integer because this is a modular inverse.
// You can use the reverse operation of division (multiplication) to prove the quotient is calculated correctly.

quotient.mul(y).assertEquals(x);
```

#### Inherited from

`Field.div`

***

### equals()

> **equals**(`y`): `Bool`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:341

Check if this Field is equal another "field-like" value.
Returns a Bool, which is a provable type and can be used to prove the validity of this statement.

#### Parameters

##### y

`string` | `number` | `bigint` | `Field`

#### Returns

`Bool`

A Bool representing if this Field is equal another "field-like" value.

#### Example

```ts
Field(5).equals(5).assertEquals(Bool(true));
```

#### Inherited from

`Field.equals`

***

### greaterThan()

> **greaterThan**(`y`): `Bool`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:404

Check if this Field is greater than another "field-like" value.
Returns a Bool, which is a provable type and can be used to prove the validity of this statement.

#### Parameters

##### y

`string` | `number` | `bigint` | `Field`

#### Returns

`Bool`

A Bool representing if this Field is greater than another "field-like" value.

#### Examples

```ts
let isTrue = Field(5).greaterThan(3);
```

**Warning**: As this method compares the bigint value of a Field, it can result in unexpected behaviour when used with negative inputs or modular division.

```ts
let isFalse = Field(1).div(2).greaterThan(Field(1).div(3); // in fact, 1/3 > 1/2
```

#### Inherited from

`Field.greaterThan`

***

### greaterThanOrEqual()

> **greaterThanOrEqual**(`y`): `Bool`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:425

Check if this Field is greater than or equal another "field-like" value.
Returns a Bool, which is a provable type and can be used to prove the validity of this statement.

#### Parameters

##### y

`string` | `number` | `bigint` | `Field`

#### Returns

`Bool`

A Bool representing if this Field is greater than or equal another "field-like" value.

#### Examples

```ts
let isTrue = Field(3).greaterThanOrEqual(3);
```

**Warning**: As this method compares the bigint value of a Field, it can result in unexpected behaviour when used with negative inputs or modular division.

```ts
let isFalse = Field(1).div(2).greaterThanOrEqual(Field(1).div(3); // in fact, 1/3 > 1/2
```

#### Inherited from

`Field.greaterThanOrEqual`

***

### inv()

> **inv**(): `Field`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:260

[Modular inverse](https://en.wikipedia.org/wiki/Modular_multiplicative_inverse) of this Field element.
Equivalent to 1 divided by this Field, in the sense of modular arithmetic.

Proves that this Field is non-zero, or throws a "Division by zero" error.

#### Returns

`Field`

A Field element that is equivalent to one divided by this element.

#### Example

```ts
const someField = Field(42);
const inverse = someField.inv();
inverse.assertEquals(Field(1).div(someField)); // This statement is always true regardless of the value of `someField`
```

**Warning**: This is a modular inverse. See [div](TokenId.md#div) method for more details.

#### Inherited from

`Field.inv`

***

### isConstant()

> **isConstant**(): `this is { value: ConstantFieldVar }`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:75

Check whether this Field element is a hard-coded constant in the constraint system.
If a Field is constructed outside a zkApp method, it is a constant.

#### Returns

`this is { value: ConstantFieldVar }`

A `boolean` showing if this Field is a constant or not.

#### Examples

```ts
console.log(Field(42).isConstant()); // true
```

```ts
\@method myMethod(x: Field) {
   console.log(x.isConstant()); // false
}
```

#### Inherited from

`Field.isConstant`

***

### isEven()

> **isEven**(): `Bool`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:226

Checks if this Field is even. Returns `true` for even elements and `false` for odd elements.

#### Returns

`Bool`

#### Example

```ts
let a = Field(5);
a.isEven(); // false

let b = Field(4);
b.isEven(); // true
```

#### Inherited from

`Field.isEven`

***

### isOdd()

> **isOdd**(): `Bool`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:213

Checks if this Field is odd. Returns `true` for odd elements and `false` for even elements.

See [Field.isEven](TokenId.md#iseven) for examples.

#### Returns

`Bool`

#### Inherited from

`Field.isOdd`

***

### lessThan()

> **lessThan**(`y`): `Bool`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:362

Check if this Field is less than another "field-like" value.
Returns a Bool, which is a provable type and can be used prove to the validity of this statement.

#### Parameters

##### y

`string` | `number` | `bigint` | `Field`

#### Returns

`Bool`

A Bool representing if this Field is less than another "field-like" value.

#### Examples

```ts
let isTrue = Field(2).lessThan(3);
```

**Warning**: As this method compares the bigint value of a Field, it can result in unexpected behavior when used with negative inputs or modular division.

```ts
let isFalse = Field(1).div(3).lessThan(Field(1).div(2)); // in fact, 1/3 > 1/2
```

#### Inherited from

`Field.lessThan`

***

### lessThanOrEqual()

> **lessThanOrEqual**(`y`): `Bool`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:383

Check if this Field is less than or equal to another "field-like" value.
Returns a Bool, which is a provable type and can be used to prove the validity of this statement.

#### Parameters

##### y

`string` | `number` | `bigint` | `Field`

#### Returns

`Bool`

A Bool representing if this Field is less than or equal another "field-like" value.

#### Examples

```ts
let isTrue = Field(3).lessThanOrEqual(3);
```

**Warning**: As this method compares the bigint value of a Field, it can result in unexpected behaviour when used with negative inputs or modular division.

```ts
let isFalse = Field(1).div(3).lessThanOrEqual(Field(1).div(2)); // in fact, 1/3 > 1/2
```

#### Inherited from

`Field.lessThanOrEqual`

***

### mul()

> **mul**(`y`): `Field`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:242

Multiply another "field-like" value with this Field element.

#### Parameters

##### y

`string` | `number` | `bigint` | `Field`

#### Returns

`Field`

A Field element equivalent to the modular difference of the two value.

#### Example

```ts
const x = Field(3);
const product = x.mul(Field(5));

product.assertEquals(Field(15));
```

#### Inherited from

`Field.mul`

***

### neg()

> **neg**(): `Field`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:179

Negate a Field. This is equivalent to multiplying the Field by -1.

#### Returns

`Field`

A Field element that is equivalent to the element multiplied by -1.

#### Examples

```ts
const negOne = Field(1).neg();
negOne.assertEquals(-1);
```

```ts
const someField = Field(42);
someField.neg().assertEquals(someField.mul(Field(-1))); // This statement is always true regardless of the value of `someField`
```

**Warning**: This is a modular negation. For details, see the [sub](TokenId.md#sub) method.

#### Inherited from

`Field.neg`

***

### seal()

> **seal**(): `VarField` \| `ConstantField`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:531

**Warning**: This function is mainly for internal use. Normally it is not intended to be used by a zkApp developer.

In o1js, addition and scaling (multiplication of variables by a constant) of variables is represented as an AST - [abstract syntax tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree). For example, the expression `x.add(y).mul(2)` is represented as `Scale(2, Add(x, y))`.

 A new internal variable is created only when the variable is needed in a multiplicative or any higher level constraint (for example multiplication of two Field elements) to represent the operation.

The `seal()` function tells o1js to stop building an AST and create a new variable right away.

#### Returns

`VarField` \| `ConstantField`

A Field element that is equal to the result of AST that was previously on this Field element.

#### Inherited from

`Field.seal`

***

### sqrt()

> **sqrt**(): `Field`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:327

Take the square root of this Field element.

Proves that the Field element has a square root in the finite field, or throws if it doesn't.

#### Returns

`Field`

A Field element equivalent to the square root of the Field element.

#### Example

```ts
let z = x.sqrt();
z.mul(z).assertEquals(x); // true for every `x`
```

**Warning**: This is a modular square root, which is any number z that satisfies z*z = x (mod p).
Note that, if a square root z exists, there also exists a second one, -z (which is different if z != 0).
Therefore, this method leaves an adversarial prover the choice between two different values to return.

#### Inherited from

`Field.sqrt`

***

### square()

> **square**(): `Field`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:309

Square this Field element.

#### Returns

`Field`

A Field element equivalent to the multiplication of the Field element with itself.

#### Example

```ts
const someField = Field(7);
const square = someField.square();

square.assertEquals(someField.mul(someField)); // This statement is always true regardless of the value of `someField`
```

** Warning: This is a modular multiplication. See `mul()` method for more details.

#### Inherited from

`Field.square`

***

### sub()

> **sub**(`y`): `Field`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:207

Subtract another "field-like" value from this Field element.

#### Parameters

##### y

`string` | `number` | `bigint` | `Field`

#### Returns

`Field`

A Field element equivalent to the modular difference of the two value.

#### Examples

```ts
const x = Field(3);
const difference = x.sub(5);

difference.assertEquals(Field(-2));
```

**Warning**: This is a modular subtraction in the pasta field.

```ts
const x = Field(1);
const difference = x.sub(Field(2));

// If you try to print difference - `console.log(difference.toBigInt())` - you will realize that it prints a very big integer because this is modular arithmetic, and 1 - 2 circles around the field to become p - 1.
// You can use the reverse operation of subtraction (addition) to prove the difference is calculated correctly.
difference.add(Field(2)).assertEquals(x);
```

#### Inherited from

`Field.sub`

***

### toAuxiliary()

> **toAuxiliary**(): \[\]

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:621

This function is the implementation of Provable.toAuxiliary for the Field type.

As the primitive Field type has no auxiliary data associated with it, this function will always return an empty array.

#### Returns

\[\]

#### Inherited from

`Field.toAuxiliary`

***

### toBigInt()

> **toBigInt**(): `bigint`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:105

Serialize the Field to a bigint, e.g. for printing. Trying to print a Field without this function will directly stringify the Field object, resulting in unreadable output.

**Warning**: This operation does _not_ affect the circuit and can't be used to prove anything about the bigint representation of the Field. Use the operation only during debugging.

#### Returns

`bigint`

A bigint equivalent to the bigint representation of the Field.

#### Example

```ts
const someField = Field(42);
console.log(someField.toBigInt());
```

#### Inherited from

`Field.toBigInt`

***

### toBits()

> **toBits**(`length`?): `Bool`[]

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:507

Returns an array of Bool elements representing [little endian binary representation](https://en.wikipedia.org/wiki/Endianness) of this Field element.

If you use the optional `length` argument, proves that the field element fits in `length` bits.
The `length` has to be between 0 and 254 and the method throws if it isn't.

**Warning**: The cost of this operation in a zk proof depends on the `length` you specify,
which by default is 254 bits. Prefer to pass a smaller `length` if possible.

#### Parameters

##### length?

`number`

the number of bits to fit the element. If the element does not fit in `length` bits, the functions throws an error.

#### Returns

`Bool`[]

An array of Bool element representing little endian binary representation of this Field.

#### Inherited from

`Field.toBits`

***

### toConstant()

> **toConstant**(): `ConstantField`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:91

Create a Field element equivalent to this Field element's value,
but is a constant.
See [Field.isConstant](TokenId.md#isconstant) for more information about what is a constant Field.

#### Returns

`ConstantField`

A constant Field element equivalent to this Field element.

#### Example

```ts
const someField = Field(42);
someField.toConstant().assertEquals(someField); // Always true
```

#### Inherited from

`Field.toConstant`

***

### toFields()

> **toFields**(): `Field`[]

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:615

This function is the implementation of Provable.toFields for the Field type.

The result will be always an array of length 1, where the first and only element equals the Field itself.

#### Returns

`Field`[]

A Field array of length 1 created from this Field.

#### Inherited from

`Field.toFields`

***

### toJSON()

> **toJSON**(): `string`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:636

Serialize the Field to a JSON string, e.g. for printing. Trying to print a Field without this function will directly stringify the Field object, resulting in unreadable output.

**Warning**: This operation does _not_ affect the circuit and can't be used to prove anything about the JSON string representation of the Field. Use the operation only during debugging.

#### Returns

`string`

A string equivalent to the JSON representation of the Field.

#### Example

```ts
const someField = Field(42);
console.log(someField.toJSON());
```

#### Inherited from

`Field.toJSON`

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:119

Serialize the Field to a string, e.g. for printing. Trying to print a Field without this function will directly stringify the Field object, resulting in unreadable output.

**Warning**: This operation does _not_ affect the circuit and can't be used to prove anything about the string representation of the Field. Use the operation only during debugging.

#### Returns

`string`

A string equivalent to the string representation of the Field.

#### Example

```ts
const someField = Field(42);
console.log(someField.toString());
```

#### Inherited from

`Field.toString`

***

### check()

> `static` **check**(): `void`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:595

This function is the implementation of Provable.check in Field type.

As any field element can be a Field, this function does not create any assertions, so it does nothing.

#### Returns

`void`

#### Inherited from

`Field.check`

***

### empty()

> `static` **empty**(): `Field`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:622

#### Returns

`Field`

#### Inherited from

`Field.empty`

***

### from()

> `static` **from**(`x`): `Field`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:56

#### Parameters

##### x

`string` | `number` | `bigint` | `Field`

#### Returns

`Field`

#### Inherited from

`Field.from`

***

### fromBits()

> `static` **fromBits**(`bits`): `Field`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:519

Convert a bit array into a Field element using [little endian binary representation](https://en.wikipedia.org/wiki/Endianness)

The method throws if the given bits do not fit in a single Field element. In this case, no more than 254 bits are allowed because some 255 bit integers do not fit into a single Field element.

**Important**: If the given `bytes` array is an array of `booleans` or Bool elements that all are `constant`, the resulting Field element will be a constant as well. Or else, if the given array is a mixture of constants and variables of Bool type, the resulting Field will be a variable as well.

#### Parameters

##### bits

(`boolean` \| `Bool`)[]

#### Returns

`Field`

A Field element matching the [little endian binary representation](https://en.wikipedia.org/wiki/Endianness) of the given `bytes` array.

#### Inherited from

`Field.fromBits`

***

### fromBytes()

> `static` **fromBytes**(`bytes`): `Field`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:702

Coerce a new Field element using the [little-endian](https://en.wikipedia.org/wiki/Endianness) representation of the given `bytes` array.
Note that the given `bytes` array may have at most 32 elements as the Field is a `finite-field` in the order of [Field.ORDER](TokenId.md#order).

**Warning**: This operation does _not_ affect the circuit and can't be used to prove anything about the byte representation of the Field.

#### Parameters

##### bytes

`number`[]

The bytes array to coerce the Field from.

#### Returns

`Field`

A new Field element created using the [little-endian](https://en.wikipedia.org/wiki/Endianness) representation of the given `bytes` array.

#### Inherited from

`Field.fromBytes`

***

### fromFields()

> `static` **fromFields**(`fields`): `Field`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:587

Implementation of Provable.fromFields for the Field type.

**Warning**: This function is designed for internal use. It is not intended to be used by a zkApp developer.

Creates a Field from an array of Fields of length 1.

#### Parameters

##### fields

`Field`[]

an array of length 1 serialized from Field elements.

#### Returns

`Field`

The first Field element of the given array.

#### Inherited from

`Field.fromFields`

***

### fromJSON()

> `static` **fromJSON**(`json`): `Field`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:662

Deserialize a JSON string containing a "field-like" value into a Field element.

**Warning**: This operation does _not_ affect the circuit and can't be used to prove anything about the string representation of the Field.

#### Parameters

##### json

`string`

#### Returns

`Field`

A Field coerced from the given JSON string.

#### Inherited from

`Field.fromJSON`

***

### fromValue()

> `static` **fromValue**(`x`): `Field`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:607

`Provable<Field>.fromValue()`

#### Parameters

##### x

`string` | `number` | `bigint` | `Field`

#### Returns

`Field`

#### Inherited from

`Field.fromValue`

***

### random()

> `static` **random**(): `Field`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:542

A random Field element.

#### Returns

`Field`

A random Field element.

#### Example

```ts
console.log(Field.random().toBigInt()); // Run this code twice!
```

#### Inherited from

`Field.random`

***

### readBytes()

> `static` **readBytes**\<`N`\>(`bytes`, `offset`): \[`Field`, `number`\]

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:691

Part of the `Binable` interface.

**Warning**: This function is for internal use. It is not intended to be used by a zkApp developer.

#### Type Parameters

• **N** *extends* `number`

#### Parameters

##### bytes

`number`[]

##### offset

`NonNegativeInteger`\<`N`\>

#### Returns

\[`Field`, `number`\]

#### Inherited from

`Field.readBytes`

***

### sizeInFields()

> `static` **sizeInFields**(): `number`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:575

This function is the implementation of Provable.sizeInFields for the Field type.

Size of the Field type is 1, as it is the primitive type.
This function returns a regular number, so you cannot use it to prove something on chain. You can use it during debugging or to understand the memory complexity of some type.

#### Returns

`number`

A number representing the size of the Field type in terms of Field type itself.

#### Example

```ts
console.log(Field.sizeInFields()); // Prints 1
```

#### Inherited from

`Field.sizeInFields`

***

### toAuxiliary()

> `static` **toAuxiliary**(): \[\]

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:561

This function is the implementation of Provable.toAuxiliary for the Field type.

As the primitive Field type has no auxiliary data associated with it, this function will always return an empty array.

#### Returns

\[\]

#### Inherited from

`Field.toAuxiliary`

***

### toBigint()

> `static` **toBigint**(`x`): `bigint`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:603

Convert a Field element to a bigint.

#### Parameters

##### x

`Field`

#### Returns

`bigint`

#### Inherited from

`Field.toBigint`

***

### toBytes()

> `static` **toBytes**(`x`): `number`[]

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:685

Create an array of digits equal to the [little-endian](https://en.wikipedia.org/wiki/Endianness) byte order of the given Field element.
Note that the array has always 32 elements as the Field is a `finite-field` in the order of [Field.ORDER](TokenId.md#order).

#### Parameters

##### x

`Field`

#### Returns

`number`[]

An array of digits equal to the [little-endian](https://en.wikipedia.org/wiki/Endianness) byte order of the given Field element.

#### Inherited from

`Field.toBytes`

***

### toFields()

> `static` **toFields**(`x`): `Field`[]

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:553

This function is the implementation of Provable.toFields for the Field type.

Static function to serializes a Field into an array of Field elements.
This will be always an array of length 1, where the first and only element equals the given parameter itself.

#### Parameters

##### x

`Field`

#### Returns

`Field`[]

A Field array of length 1 created from this Field.

#### Inherited from

`Field.toFields`

***

### toInput()

> `static` **toInput**(`x`): `object`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:673

**Warning**: This function is mainly for internal use. Normally it is not intended to be used by a zkApp developer.

This function is the implementation of `ProvableExtended.toInput()` for the Field type.

#### Parameters

##### x

`Field`

#### Returns

`object`

An object where the `fields` key is a Field array of length 1 created from this Field.

##### fields

> **fields**: `Field`[]

#### Inherited from

`Field.toInput`

***

### toJSON()

> `static` **toJSON**(`x`): `string`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:652

Serialize the given Field element to a JSON string, e.g. for printing. Trying to print a Field without this function will directly stringify the Field object, resulting in unreadable output.

**Warning**: This operation does _not_ affect the circuit and can't be used to prove anything about the JSON string representation of the Field. Use the operation only during debugging.

#### Parameters

##### x

`Field`

#### Returns

`string`

A string equivalent to the JSON representation of the given Field.

#### Example

```ts
const someField = Field(42);
console.log(Field.toJSON(someField));
```

#### Inherited from

`Field.toJSON`

***

### toValue()

> `static` **toValue**(`x`): `bigint`

Defined in: node\_modules/o1js/dist/node/lib/provable/field.d.ts:599

`Provable<Field>.toValue()`

#### Parameters

##### x

`Field`

#### Returns

`bigint`

#### Inherited from

`Field.toValue`
