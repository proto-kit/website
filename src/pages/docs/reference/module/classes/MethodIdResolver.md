---
title: MethodIdResolver
---

[**@proto-kit/module**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/module](../README.md) / MethodIdResolver

# Class: MethodIdResolver

Defined in: [module/src/runtime/MethodIdResolver.ts:18](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/module/src/runtime/MethodIdResolver.ts#L18)

Please see `getMethodId` to learn more about
methodId encoding

## Constructors

### new MethodIdResolver()

> **new MethodIdResolver**(`runtime`): [`MethodIdResolver`](MethodIdResolver.md)

Defined in: [module/src/runtime/MethodIdResolver.ts:23](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/module/src/runtime/MethodIdResolver.ts#L23)

#### Parameters

##### runtime

[`Runtime`](Runtime.md)\<[`RuntimeModulesRecord`](../type-aliases/RuntimeModulesRecord.md)\>

#### Returns

[`MethodIdResolver`](MethodIdResolver.md)

## Methods

### getMethodId()

> **getMethodId**(`moduleName`, `methodName`): `bigint`

Defined in: [module/src/runtime/MethodIdResolver.ts:100](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/module/src/runtime/MethodIdResolver.ts#L100)

#### Parameters

##### moduleName

`string`

##### methodName

`string`

#### Returns

`bigint`

***

### getMethodNameFromId()

> **getMethodNameFromId**(`methodId`): `undefined` \| \[`string`, `string`\]

Defined in: [module/src/runtime/MethodIdResolver.ts:86](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/module/src/runtime/MethodIdResolver.ts#L86)

#### Parameters

##### methodId

`bigint`

#### Returns

`undefined` \| \[`string`, `string`\]

***

### methodIdMap()

> **methodIdMap**(): [`RuntimeMethodIdMapping`](../../protocol/type-aliases/RuntimeMethodIdMapping.md)

Defined in: [module/src/runtime/MethodIdResolver.ts:47](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/module/src/runtime/MethodIdResolver.ts#L47)

The purpose of this method is to provide a dictionary where
we can look up properties like methodId and invocationType
for each runtimeMethod using their module name and method name

#### Returns

[`RuntimeMethodIdMapping`](../../protocol/type-aliases/RuntimeMethodIdMapping.md)
