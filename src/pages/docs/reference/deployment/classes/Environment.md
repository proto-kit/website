---
title: Environment
---

[**@proto-kit/deployment**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/deployment](../README.md) / Environment

# Class: Environment\<T\>

Defined in: [deployment/src/environment/Environment.ts:12](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/deployment/src/environment/Environment.ts#L12)

## Type Parameters

• **T** *extends* [`Startable`](../interfaces/Startable.md)

## Constructors

### new Environment()

> **new Environment**\<`T`\>(`configurations`): [`Environment`](Environment.md)\<`T`\>

Defined in: [deployment/src/environment/Environment.ts:13](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/deployment/src/environment/Environment.ts#L13)

#### Parameters

##### configurations

[`StartableEnvironment`](../type-aliases/StartableEnvironment.md)\<`T`\>

#### Returns

[`Environment`](Environment.md)\<`T`\>

## Methods

### getConfiguration()

> **getConfiguration**(`configurationName`): `T`

Defined in: [deployment/src/environment/Environment.ts:31](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/deployment/src/environment/Environment.ts#L31)

#### Parameters

##### configurationName

`string`

#### Returns

`T`

***

### hasConfiguration()

> **hasConfiguration**(`configurationName`): `configurationName is string`

Defined in: [deployment/src/environment/Environment.ts:17](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/deployment/src/environment/Environment.ts#L17)

#### Parameters

##### configurationName

`string`

#### Returns

`configurationName is string`

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [deployment/src/environment/Environment.ts:42](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/deployment/src/environment/Environment.ts#L42)

#### Returns

`Promise`\<`void`\>

***

### from()

> `static` **from**\<`T`\>(`configurations`): [`Environment`](Environment.md)\<`T`\>

Defined in: [deployment/src/environment/Environment.ts:36](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/deployment/src/environment/Environment.ts#L36)

#### Type Parameters

• **T** *extends* [`Startable`](../interfaces/Startable.md)

#### Parameters

##### configurations

[`StartableEnvironment`](../type-aliases/StartableEnvironment.md)\<`T`\>

#### Returns

[`Environment`](Environment.md)\<`T`\>
