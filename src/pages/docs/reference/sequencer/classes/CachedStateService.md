---
title: CachedStateService
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / CachedStateService

# Class: CachedStateService

Defined in: [packages/sequencer/src/state/state/CachedStateService.ts:12](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/state/state/CachedStateService.ts#L12)

This Interface should be implemented for services that store the state
in an external storage (like a DB). This can be used in conjunction with
CachedStateService to preload keys for In-Circuit usage.

## Extends

- [`InMemoryStateService`](../../module/classes/InMemoryStateService.md)

## Implements

- [`AsyncStateService`](../interfaces/AsyncStateService.md)
- [`SimpleAsyncStateService`](../../protocol/interfaces/SimpleAsyncStateService.md)

## Constructors

### new CachedStateService()

> **new CachedStateService**(`parent`): [`CachedStateService`](CachedStateService.md)

Defined in: [packages/sequencer/src/state/state/CachedStateService.ts:18](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/state/state/CachedStateService.ts#L18)

#### Parameters

##### parent

`undefined` | [`AsyncStateService`](../interfaces/AsyncStateService.md)

#### Returns

[`CachedStateService`](CachedStateService.md)

#### Overrides

[`InMemoryStateService`](../../module/classes/InMemoryStateService.md).[`constructor`](../../module/classes/InMemoryStateService.md#constructors)

## Properties

### values

> **values**: `Record`\<`string`, `null` \| `Field`[]\>

Defined in: packages/module/dist/state/InMemoryStateService.d.ts:11

This mapping container null values if the specific entry has been deleted.
This is used by the CachedState service to keep track of deletions

#### Inherited from

[`InMemoryStateService`](../../module/classes/InMemoryStateService.md).[`values`](../../module/classes/InMemoryStateService.md#values)

## Methods

### applyStateTransitions()

> **applyStateTransitions**(`stateTransitions`): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/state/state/CachedStateService.ts:99](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/state/state/CachedStateService.ts#L99)

#### Parameters

##### stateTransitions

[`StateTransition`](../../protocol/classes/StateTransition.md)\<`any`\>[]

#### Returns

`Promise`\<`void`\>

***

### commit()

> **commit**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/state/state/CachedStateService.ts:42](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/state/state/CachedStateService.ts#L42)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`AsyncStateService`](../interfaces/AsyncStateService.md).[`commit`](../interfaces/AsyncStateService.md#commit)

***

### get()

> **get**(`key`): `Promise`\<`undefined` \| `Field`[]\>

Defined in: [packages/sequencer/src/state/state/CachedStateService.ts:94](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/state/state/CachedStateService.ts#L94)

#### Parameters

##### key

`Field`

#### Returns

`Promise`\<`undefined` \| `Field`[]\>

#### Implementation of

[`SimpleAsyncStateService`](../../protocol/interfaces/SimpleAsyncStateService.md).[`get`](../../protocol/interfaces/SimpleAsyncStateService.md#get)

#### Overrides

[`InMemoryStateService`](../../module/classes/InMemoryStateService.md).[`get`](../../module/classes/InMemoryStateService.md#get)

***

### getMany()

> **getMany**(`keys`): `Promise`\<[`StateEntry`](../interfaces/StateEntry.md)[]\>

Defined in: [packages/sequencer/src/state/state/CachedStateService.ts:75](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/state/state/CachedStateService.ts#L75)

#### Parameters

##### keys

`Field`[]

#### Returns

`Promise`\<[`StateEntry`](../interfaces/StateEntry.md)[]\>

#### Implementation of

[`AsyncStateService`](../interfaces/AsyncStateService.md).[`getMany`](../interfaces/AsyncStateService.md#getmany)

***

### mergeIntoParent()

> **mergeIntoParent**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/state/state/CachedStateService.ts:118](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/state/state/CachedStateService.ts#L118)

Merges all caches set() operation into the parent and
resets this instance to the parent's state (by clearing the cache and
defaulting to the parent)

#### Returns

`Promise`\<`void`\>

***

### openTransaction()

> **openTransaction**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/state/state/CachedStateService.ts:48](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/state/state/CachedStateService.ts#L48)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`AsyncStateService`](../interfaces/AsyncStateService.md).[`openTransaction`](../interfaces/AsyncStateService.md#opentransaction)

***

### preloadKey()

> **preloadKey**(`key`): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/state/state/CachedStateService.ts:52](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/state/state/CachedStateService.ts#L52)

#### Parameters

##### key

`Field`

#### Returns

`Promise`\<`void`\>

***

### preloadKeys()

> **preloadKeys**(`keys`): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/state/state/CachedStateService.ts:56](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/state/state/CachedStateService.ts#L56)

#### Parameters

##### keys

`Field`[]

#### Returns

`Promise`\<`void`\>

***

### set()

> **set**(`key`, `value`): `Promise`\<`void`\>

Defined in: packages/module/dist/state/InMemoryStateService.d.ts:13

#### Parameters

##### key

`Field`

##### value

`undefined` | `Field`[]

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`SimpleAsyncStateService`](../../protocol/interfaces/SimpleAsyncStateService.md).[`set`](../../protocol/interfaces/SimpleAsyncStateService.md#set)

#### Inherited from

[`InMemoryStateService`](../../module/classes/InMemoryStateService.md).[`set`](../../module/classes/InMemoryStateService.md#set)

***

### writeStates()

> **writeStates**(`entries`): `void`

Defined in: [packages/sequencer/src/state/state/CachedStateService.ts:38](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/state/state/CachedStateService.ts#L38)

#### Parameters

##### entries

[`StateEntry`](../interfaces/StateEntry.md)[]

#### Returns

`void`

#### Implementation of

[`AsyncStateService`](../interfaces/AsyncStateService.md).[`writeStates`](../interfaces/AsyncStateService.md#writestates)
