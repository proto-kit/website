---
title: DummyStateService
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / DummyStateService

# Class: DummyStateService

Defined in: [packages/sequencer/src/state/state/DummyStateService.ts:5](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/state/state/DummyStateService.ts#L5)

## Implements

- [`SimpleAsyncStateService`](../../protocol/interfaces/SimpleAsyncStateService.md)

## Constructors

### new DummyStateService()

> **new DummyStateService**(): [`DummyStateService`](DummyStateService.md)

#### Returns

[`DummyStateService`](DummyStateService.md)

## Methods

### get()

> **get**(`key`): `Promise`\<`undefined` \| `Field`[]\>

Defined in: [packages/sequencer/src/state/state/DummyStateService.ts:6](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/state/state/DummyStateService.ts#L6)

#### Parameters

##### key

`Field`

#### Returns

`Promise`\<`undefined` \| `Field`[]\>

#### Implementation of

[`SimpleAsyncStateService`](../../protocol/interfaces/SimpleAsyncStateService.md).[`get`](../../protocol/interfaces/SimpleAsyncStateService.md#get)

***

### set()

> **set**(`key`, `value`): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/state/state/DummyStateService.ts:10](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/state/state/DummyStateService.ts#L10)

#### Parameters

##### key

`Field`

##### value

`undefined` | `Field`[]

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`SimpleAsyncStateService`](../../protocol/interfaces/SimpleAsyncStateService.md).[`set`](../../protocol/interfaces/SimpleAsyncStateService.md#set)
