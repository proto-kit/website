---
title: InMemoryStateService
---

[**@proto-kit/module**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/module](../README.md) / InMemoryStateService

# Class: InMemoryStateService

Defined in: [module/src/state/InMemoryStateService.ts:7](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/module/src/state/InMemoryStateService.ts#L7)

Naive implementation of an in-memory variant of the StateService interface

## Extended by

- [`CachedStateService`](../../sequencer/classes/CachedStateService.md)
- [`PreFilledStateService`](../../sequencer/classes/PreFilledStateService.md)

## Implements

- [`SimpleAsyncStateService`](../../protocol/interfaces/SimpleAsyncStateService.md)

## Constructors

### new InMemoryStateService()

> **new InMemoryStateService**(): [`InMemoryStateService`](InMemoryStateService.md)

#### Returns

[`InMemoryStateService`](InMemoryStateService.md)

## Properties

### values

> **values**: `Record`\<`string`, `null` \| `Field`[]\> = `{}`

Defined in: [module/src/state/InMemoryStateService.ts:12](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/module/src/state/InMemoryStateService.ts#L12)

This mapping container null values if the specific entry has been deleted.
This is used by the CachedState service to keep track of deletions

## Methods

### get()

> **get**(`key`): `Promise`\<`undefined` \| `Field`[]\>

Defined in: [module/src/state/InMemoryStateService.ts:14](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/module/src/state/InMemoryStateService.ts#L14)

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

Defined in: [module/src/state/InMemoryStateService.ts:18](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/module/src/state/InMemoryStateService.ts#L18)

#### Parameters

##### key

`Field`

##### value

`undefined` | `Field`[]

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`SimpleAsyncStateService`](../../protocol/interfaces/SimpleAsyncStateService.md).[`set`](../../protocol/interfaces/SimpleAsyncStateService.md#set)
