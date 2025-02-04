---
title: MethodParameterEncoder
---

[**@proto-kit/module**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/module](../README.md) / MethodParameterEncoder

# Class: MethodParameterEncoder

Defined in: [module/src/method/MethodParameterEncoder.ts:110](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/module/src/method/MethodParameterEncoder.ts#L110)

## Constructors

### new MethodParameterEncoder()

> **new MethodParameterEncoder**(`types`): [`MethodParameterEncoder`](MethodParameterEncoder.md)

Defined in: [module/src/method/MethodParameterEncoder.ts:128](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/module/src/method/MethodParameterEncoder.ts#L128)

#### Parameters

##### types

`ArgTypeArray`

#### Returns

[`MethodParameterEncoder`](MethodParameterEncoder.md)

## Methods

### decode()

> **decode**(`fields`, `auxiliary`): `Promise`\<`ArgArray`\>

Defined in: [module/src/method/MethodParameterEncoder.ts:130](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/module/src/method/MethodParameterEncoder.ts#L130)

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

Defined in: [module/src/method/MethodParameterEncoder.ts:192](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/module/src/method/MethodParameterEncoder.ts#L192)

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

Defined in: [module/src/method/MethodParameterEncoder.ts:254](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/module/src/method/MethodParameterEncoder.ts#L254)

#### Returns

`number`

***

### fieldSize()

> `static` **fieldSize**(`type`): `undefined` \| `number`

Defined in: [module/src/method/MethodParameterEncoder.ts:117](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/module/src/method/MethodParameterEncoder.ts#L117)

#### Parameters

##### type

`ArgumentType`

#### Returns

`undefined` \| `number`

***

### fromMethod()

> `static` **fromMethod**(`target`, `methodName`): [`MethodParameterEncoder`](MethodParameterEncoder.md)

Defined in: [module/src/method/MethodParameterEncoder.ts:111](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/module/src/method/MethodParameterEncoder.ts#L111)

#### Parameters

##### target

[`RuntimeModule`](RuntimeModule.md)\<`unknown`\>

##### methodName

`string`

#### Returns

[`MethodParameterEncoder`](MethodParameterEncoder.md)
