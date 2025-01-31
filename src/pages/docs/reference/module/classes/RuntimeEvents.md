---
title: RuntimeEvents
---

[**@proto-kit/module**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/module](../README.md) / RuntimeEvents

# Class: RuntimeEvents\<Events\>

Defined in: [module/src/runtime/RuntimeModule.ts:25](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/module/src/runtime/RuntimeModule.ts#L25)

## Type Parameters

• **Events** *extends* `EventRecord`

## Constructors

### new RuntimeEvents()

> **new RuntimeEvents**\<`Events`\>(`events`): [`RuntimeEvents`](RuntimeEvents.md)\<`Events`\>

Defined in: [module/src/runtime/RuntimeModule.ts:26](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/module/src/runtime/RuntimeModule.ts#L26)

#### Parameters

##### events

`Events`

#### Returns

[`RuntimeEvents`](RuntimeEvents.md)\<`Events`\>

## Methods

### emit()

> **emit**\<`Key`\>(`eventName`, `event`): `void`

Defined in: [module/src/runtime/RuntimeModule.ts:47](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/module/src/runtime/RuntimeModule.ts#L47)

#### Type Parameters

• **Key** *extends* `string` \| `number` \| `symbol`

#### Parameters

##### eventName

`Key`

##### event

`InferProvable`\<`Events`\[`Key`\]\>

#### Returns

`void`

***

### emitIf()

> **emitIf**\<`Key`\>(`condition`, `eventName`, `event`): `void`

Defined in: [module/src/runtime/RuntimeModule.ts:28](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/module/src/runtime/RuntimeModule.ts#L28)

#### Type Parameters

• **Key** *extends* `string` \| `number` \| `symbol`

#### Parameters

##### condition

`Bool`

##### eventName

`Key`

##### event

`InferProvable`\<`Events`\[`Key`\]\>

#### Returns

`void`
