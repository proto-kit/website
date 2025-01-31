---
title: ReplayingSingleUseEventEmitter
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / ReplayingSingleUseEventEmitter

# Class: ReplayingSingleUseEventEmitter\<Events\>

Defined in: [packages/common/src/events/ReplayingSingleUseEventEmitter.ts:12](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/events/ReplayingSingleUseEventEmitter.ts#L12)

Event Emitter variant that emits a certain event only once to a registered listener.
Additionally, if a listener registers to a event that has already been emitted, it
re-emits it to said listener.
This pattern is especially useful for listening for inclusions of transactions.
Those events will only occur once, and listeners could come too late to the party,
so we need to make sure they get notified as well in those cases.

## Extends

- [`EventEmitter`](EventEmitter.md)\<`Events`\>

## Type Parameters

• **Events** *extends* [`EventsRecord`](../type-aliases/EventsRecord.md)

## Constructors

### new ReplayingSingleUseEventEmitter()

> **new ReplayingSingleUseEventEmitter**\<`Events`\>(): [`ReplayingSingleUseEventEmitter`](ReplayingSingleUseEventEmitter.md)\<`Events`\>

#### Returns

[`ReplayingSingleUseEventEmitter`](ReplayingSingleUseEventEmitter.md)\<`Events`\>

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`constructor`](EventEmitter.md#constructors)

## Properties

### emitted

> **emitted**: `Partial`\<`Events`\> = `{}`

Defined in: [packages/common/src/events/ReplayingSingleUseEventEmitter.ts:15](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/events/ReplayingSingleUseEventEmitter.ts#L15)

***

### listeners

> `protected` `readonly` **listeners**: `ListenersHolder`\<`Events`\> = `{}`

Defined in: [packages/common/src/events/EventEmitter.ts:8](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/events/EventEmitter.ts#L8)

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`listeners`](EventEmitter.md#listeners)

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

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`wildcardListeners`](EventEmitter.md#wildcardlisteners)

## Methods

### emit()

> **emit**\<`Key`\>(`event`, ...`parameters`): `void`

Defined in: [packages/common/src/events/ReplayingSingleUseEventEmitter.ts:17](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/events/ReplayingSingleUseEventEmitter.ts#L17)

#### Type Parameters

• **Key** *extends* `string` \| `number` \| `symbol`

#### Parameters

##### event

`Key`

##### parameters

...`Events`\[`Key`\]

#### Returns

`void`

#### Overrides

[`EventEmitter`](EventEmitter.md).[`emit`](EventEmitter.md#emit)

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

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`off`](EventEmitter.md#off)

***

### on()

> **on**\<`Key`\>(`event`, `listener`): `void`

Defined in: [packages/common/src/events/ReplayingSingleUseEventEmitter.ts:33](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/events/ReplayingSingleUseEventEmitter.ts#L33)

#### Type Parameters

• **Key** *extends* `string` \| `number` \| `symbol`

#### Parameters

##### event

`Key`

##### listener

(...`args`) => `void`

#### Returns

`void`

#### Overrides

[`EventEmitter`](EventEmitter.md).[`on`](EventEmitter.md#on)

***

### onAll()

> **onAll**(`listener`): `void`

Defined in: [packages/common/src/events/ReplayingSingleUseEventEmitter.ts:26](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/events/ReplayingSingleUseEventEmitter.ts#L26)

#### Parameters

##### listener

(`event`, `args`) => `void`

#### Returns

`void`

#### Overrides

[`EventEmitter`](EventEmitter.md).[`onAll`](EventEmitter.md#onall)
