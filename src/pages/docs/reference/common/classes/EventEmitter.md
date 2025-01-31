---
title: EventEmitter
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / EventEmitter

# Class: EventEmitter\<Events\>

Defined in: [packages/common/src/events/EventEmitter.ts:7](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/events/EventEmitter.ts#L7)

## Extended by

- [`EventEmitterProxy`](EventEmitterProxy.md)
- [`ReplayingSingleUseEventEmitter`](ReplayingSingleUseEventEmitter.md)

## Type Parameters

• **Events** *extends* [`EventsRecord`](../type-aliases/EventsRecord.md)

## Constructors

### new EventEmitter()

> **new EventEmitter**\<`Events`\>(): [`EventEmitter`](EventEmitter.md)\<`Events`\>

#### Returns

[`EventEmitter`](EventEmitter.md)\<`Events`\>

## Properties

### listeners

> `protected` `readonly` **listeners**: `ListenersHolder`\<`Events`\> = `{}`

Defined in: [packages/common/src/events/EventEmitter.ts:8](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/events/EventEmitter.ts#L8)

***

### wildcardListeners

> `protected` `readonly` **wildcardListeners**: (`event`, `args`) => `void`[] = `[]`

Defined in: [packages/common/src/events/EventEmitter.ts:10](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/events/EventEmitter.ts#L10)

#### Parameters

##### event

keyof `Events`

##### args

`Events`\[keyof `Events`\]

#### Returns

`void`

## Methods

### emit()

> **emit**\<`Key`\>(`event`, ...`parameters`): `void`

Defined in: [packages/common/src/events/EventEmitter.ts:15](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/events/EventEmitter.ts#L15)

#### Type Parameters

• **Key** *extends* `string` \| `number` \| `symbol`

#### Parameters

##### event

`Key`

##### parameters

...`Events`\[`Key`\]

#### Returns

`void`

***

### off()

> **off**\<`Key`\>(`event`, `listener`): `void`

Defined in: [packages/common/src/events/EventEmitter.ts:45](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/events/EventEmitter.ts#L45)

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

***

### on()

> **on**\<`Key`\>(`event`, `listener`): `void`

Defined in: [packages/common/src/events/EventEmitter.ts:34](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/events/EventEmitter.ts#L34)

#### Type Parameters

• **Key** *extends* `string` \| `number` \| `symbol`

#### Parameters

##### event

`Key`

##### listener

(...`args`) => `void`

#### Returns

`void`

***

### onAll()

> **onAll**(`listener`): `void`

Defined in: [packages/common/src/events/EventEmitter.ts:30](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/events/EventEmitter.ts#L30)

#### Parameters

##### listener

(`event`, `args`) => `void`

#### Returns

`void`
