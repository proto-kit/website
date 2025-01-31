---
title: ListenerList
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / ListenerList

# Class: ListenerList\<T\>

Defined in: [packages/sequencer/src/worker/queue/ListenerList.ts:3](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/worker/queue/ListenerList.ts#L3)

## Type Parameters

• **T**

## Constructors

### new ListenerList()

> **new ListenerList**\<`T`\>(): [`ListenerList`](ListenerList.md)\<`T`\>

#### Returns

[`ListenerList`](ListenerList.md)\<`T`\>

## Methods

### executeListeners()

> **executeListeners**(`payload`): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/worker/queue/ListenerList.ts:15](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/worker/queue/ListenerList.ts#L15)

#### Parameters

##### payload

`T`

#### Returns

`Promise`\<`void`\>

***

### getListeners()

> **getListeners**(): `object`[]

Defined in: [packages/sequencer/src/worker/queue/ListenerList.ts:11](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/worker/queue/ListenerList.ts#L11)

#### Returns

`object`[]

***

### pushListener()

> **pushListener**(`listener`): `number`

Defined in: [packages/sequencer/src/worker/queue/ListenerList.ts:22](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/worker/queue/ListenerList.ts#L22)

#### Parameters

##### listener

(`payload`) => `Promise`\<`void`\>

#### Returns

`number`

***

### removeListener()

> **removeListener**(`listenerId`): `void`

Defined in: [packages/sequencer/src/worker/queue/ListenerList.ts:34](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/worker/queue/ListenerList.ts#L34)

#### Parameters

##### listenerId

`number`

#### Returns

`void`
