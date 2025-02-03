---
title: Path
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / Path

# Class: Path

Defined in: [packages/protocol/src/model/Path.ts:8](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/Path.ts#L8)

Helps manage path (key) identifiers for key-values in trees.

## Constructors

### new Path()

> **new Path**(): [`Path`](Path.md)

#### Returns

[`Path`](Path.md)

## Methods

### fromKey()

> `static` **fromKey**\<`KeyType`\>(`path`, `keyType`, `key`): `Field`

Defined in: [packages/protocol/src/model/Path.ts:42](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/Path.ts#L42)

Encodes an existing path with the provided key into a single Field.

#### Type Parameters

• **KeyType**

#### Parameters

##### path

`Field`

##### keyType

`FlexibleProvablePure`\<`KeyType`\>

##### key

`KeyType`

#### Returns

`Field`

Field representation of the leading path + the provided key.

***

### fromProperty()

> `static` **fromProperty**(`className`, `propertyKey`): `Field`

Defined in: [packages/protocol/src/model/Path.ts:26](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/Path.ts#L26)

Encodes a class name and its property name into a Field

#### Parameters

##### className

`string`

##### propertyKey

`string`

#### Returns

`Field`

Field representation of class name + property name

***

### toField()

> `static` **toField**(`value`): `Field`

Defined in: [packages/protocol/src/model/Path.ts:15](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/Path.ts#L15)

Encodes a JS string as a Field

#### Parameters

##### value

`string`

#### Returns

`Field`

Field representation of the provided value
