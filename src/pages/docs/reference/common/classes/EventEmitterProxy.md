---
title: EventEmitterProxy
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / EventEmitterProxy

# Class: EventEmitterProxy\<Modules\>

Defined in: [packages/common/src/events/EventEmitterProxy.ts:42](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/events/EventEmitterProxy.ts#L42)

## Extends

- [`EventEmitter`](EventEmitter.md)\<[`CastToEventsRecord`](../type-aliases/CastToEventsRecord.md)\<[`FlattenedContainerEvents`](../type-aliases/FlattenedContainerEvents.md)\<`Modules`\>\>\>

## Type Parameters

• **Modules** *extends* [`ModulesRecord`](../interfaces/ModulesRecord.md)

## Constructors

### new EventEmitterProxy()

> **new EventEmitterProxy**\<`Modules`\>(`container`): [`EventEmitterProxy`](EventEmitterProxy.md)\<`Modules`\>

Defined in: [packages/common/src/events/EventEmitterProxy.ts:45](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/events/EventEmitterProxy.ts#L45)

#### Parameters

##### container

[`ModuleContainer`](ModuleContainer.md)\<`Modules`\>

#### Returns

[`EventEmitterProxy`](EventEmitterProxy.md)\<`Modules`\>

#### Overrides

[`EventEmitter`](EventEmitter.md).[`constructor`](EventEmitter.md#constructors)

## Properties

### listeners

> `protected` `readonly` **listeners**: `ListenersHolder`\<[`CastToEventsRecord`](../type-aliases/CastToEventsRecord.md)\<[`UnionToIntersection`](../type-aliases/UnionToIntersection.md)\<[`ContainerEvents`](../type-aliases/ContainerEvents.md)\<`Modules`\>\[[`StringKeyOf`](../type-aliases/StringKeyOf.md)\<`Modules`\>\]\>\>\> = `{}`

Defined in: [packages/common/src/events/EventEmitter.ts:8](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/events/EventEmitter.ts#L8)

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`listeners`](EventEmitter.md#listeners)

***

### wildcardListeners

> `protected` `readonly` **wildcardListeners**: (`event`, `args`) => `void`[] = `[]`

Defined in: [packages/common/src/events/EventEmitter.ts:10](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/events/EventEmitter.ts#L10)

#### Parameters

##### event

keyof [`CastToEventsRecord`](../type-aliases/CastToEventsRecord.md)\<[`UnionToIntersection`](../type-aliases/UnionToIntersection.md)\<[`ContainerEvents`](../type-aliases/ContainerEvents.md)\<`Modules`\>\[[`StringKeyOf`](../type-aliases/StringKeyOf.md)\<`Modules`\>\]\>\>

##### args

[`CastToEventsRecord`](../type-aliases/CastToEventsRecord.md)\<[`UnionToIntersection`](../type-aliases/UnionToIntersection.md)\<[`ContainerEvents`](../type-aliases/ContainerEvents.md)\<`Modules`\>\[[`StringKeyOf`](../type-aliases/StringKeyOf.md)\<`Modules`\>\]\>\>\[keyof [`CastToEventsRecord`](../type-aliases/CastToEventsRecord.md)\<[`UnionToIntersection`](../type-aliases/UnionToIntersection.md)\<[`ContainerEvents`](../type-aliases/ContainerEvents.md)\<`Modules`\>\[[`StringKeyOf`](../type-aliases/StringKeyOf.md)\<`Modules`\>\]\>\>\]

#### Returns

`void`

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`wildcardListeners`](EventEmitter.md#wildcardlisteners)

## Methods

### emit()

> **emit**\<`Key`\>(`event`, ...`parameters`): `void`

Defined in: [packages/common/src/events/EventEmitter.ts:15](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/events/EventEmitter.ts#L15)

#### Type Parameters

• **Key** *extends* `string` \| `number` \| `symbol`

#### Parameters

##### event

`Key`

##### parameters

...[`CastToEventsRecord`](../type-aliases/CastToEventsRecord.md)\<[`UnionToIntersection`](../type-aliases/UnionToIntersection.md)\<[`ContainerEvents`](../type-aliases/ContainerEvents.md)\<`Modules`\>\[[`StringKeyOf`](../type-aliases/StringKeyOf.md)\<`Modules`\>\]\>\>\[`Key`\]

#### Returns

`void`

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`emit`](EventEmitter.md#emit)

***

### off()

> **off**\<`Key`\>(`event`, `listener`): `void`

Defined in: [packages/common/src/events/EventEmitter.ts:45](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/events/EventEmitter.ts#L45)

Primitive .off() with identity comparison for now.
Could be replaced by returning an id in .on() and using that.

#### Type Parameters

• **Key** *extends* `string` \| `number` \| `symbol`

#### Parameters

##### event

`Key`

##### listener

(...`args`) => `void`

#### Returns

`void`

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`off`](EventEmitter.md#off)

***

### on()

> **on**\<`Key`\>(`event`, `listener`): `void`

Defined in: [packages/common/src/events/EventEmitter.ts:34](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/events/EventEmitter.ts#L34)

#### Type Parameters

• **Key** *extends* `string` \| `number` \| `symbol`

#### Parameters

##### event

`Key`

##### listener

(...`args`) => `void`

#### Returns

`void`

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`on`](EventEmitter.md#on)

***

### onAll()

> **onAll**(`listener`): `void`

Defined in: [packages/common/src/events/EventEmitter.ts:30](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/events/EventEmitter.ts#L30)

#### Parameters

##### listener

(`event`, `args`) => `void`

#### Returns

`void`

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`onAll`](EventEmitter.md#onall)
