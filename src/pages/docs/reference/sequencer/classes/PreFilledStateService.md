---
title: PreFilledStateService
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / PreFilledStateService

# Class: PreFilledStateService

Defined in: [packages/sequencer/src/state/prefilled/PreFilledStateService.ts:4](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/state/prefilled/PreFilledStateService.ts#L4)

Naive implementation of an in-memory variant of the StateService interface

## Extends

- [`InMemoryStateService`](../../module/classes/InMemoryStateService.md)

## Constructors

### new PreFilledStateService()

> **new PreFilledStateService**(`values`): [`PreFilledStateService`](PreFilledStateService.md)

Defined in: [packages/sequencer/src/state/prefilled/PreFilledStateService.ts:5](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/state/prefilled/PreFilledStateService.ts#L5)

#### Parameters

##### values

#### Returns

[`PreFilledStateService`](PreFilledStateService.md)

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

### get()

> **get**(`key`): `Promise`\<`undefined` \| `Field`[]\>

Defined in: packages/module/dist/state/InMemoryStateService.d.ts:12

#### Parameters

##### key

`Field`

#### Returns

`Promise`\<`undefined` \| `Field`[]\>

#### Inherited from

[`InMemoryStateService`](../../module/classes/InMemoryStateService.md).[`get`](../../module/classes/InMemoryStateService.md#get)

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

#### Inherited from

[`InMemoryStateService`](../../module/classes/InMemoryStateService.md).[`set`](../../module/classes/InMemoryStateService.md#set)
