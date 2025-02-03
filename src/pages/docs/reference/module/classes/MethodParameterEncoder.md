---
title: MethodParameterEncoder
---

[**@proto-kit/module**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/module](../README.md) / MethodParameterEncoder

# Class: MethodParameterEncoder

Defined in: [module/src/method/MethodParameterEncoder.ts:76](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/module/src/method/MethodParameterEncoder.ts#L76)

## Constructors

### new MethodParameterEncoder()

> **new MethodParameterEncoder**(`types`): [`MethodParameterEncoder`](MethodParameterEncoder.md)

Defined in: [module/src/method/MethodParameterEncoder.ts:120](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/module/src/method/MethodParameterEncoder.ts#L120)

#### Parameters

##### types

`ArgTypeArray`

#### Returns

[`MethodParameterEncoder`](MethodParameterEncoder.md)

## Methods

### decode()

> **decode**(`fields`, `auxiliary`): `Promise`\<`ArgArray`\>

Defined in: [module/src/method/MethodParameterEncoder.ts:122](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/module/src/method/MethodParameterEncoder.ts#L122)

#### Parameters

##### fields

`Field`[]

##### auxiliary

`string`[]

#### Returns

`Promise`\<`ArgArray`\>

***

### encode()

> **encode**(`args`): `object`

Defined in: [module/src/method/MethodParameterEncoder.ts:184](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/module/src/method/MethodParameterEncoder.ts#L184)

Variant of encode() for provable code that skips the unprovable
json encoding

#### Parameters

##### args

[`ArgumentTypes`](../../common/type-aliases/ArgumentTypes.md)

#### Returns

`object`

##### auxiliary

> **auxiliary**: `string`[]

##### fields

> **fields**: `Field`[]

***

### fieldSize()

> **fieldSize**(): `number`

Defined in: [module/src/method/MethodParameterEncoder.ts:246](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/module/src/method/MethodParameterEncoder.ts#L246)

#### Returns

`number`

***

### fieldSize()

> `static` **fieldSize**(`type`): `undefined` \| `number`

Defined in: [module/src/method/MethodParameterEncoder.ts:109](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/module/src/method/MethodParameterEncoder.ts#L109)

#### Parameters

##### type

`ArgumentType`

#### Returns

`undefined` \| `number`

***

### fromMethod()

> `static` **fromMethod**(`target`, `methodName`): [`MethodParameterEncoder`](MethodParameterEncoder.md)

Defined in: [module/src/method/MethodParameterEncoder.ts:77](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/module/src/method/MethodParameterEncoder.ts#L77)

#### Parameters

##### target

[`RuntimeModule`](RuntimeModule.md)\<`unknown`\>

##### methodName

`string`

#### Returns

[`MethodParameterEncoder`](MethodParameterEncoder.md)
