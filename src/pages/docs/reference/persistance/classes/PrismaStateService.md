---
title: PrismaStateService
---

[**@proto-kit/persistance**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/persistance](../README.md) / PrismaStateService

# Class: PrismaStateService

Defined in: [packages/persistance/src/services/prisma/PrismaStateService.ts:16](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/PrismaStateService.ts#L16)

This Interface should be implemented for services that store the state
in an external storage (like a DB). This can be used in conjunction with
CachedStateService to preload keys for In-Circuit usage.

## Implements

- [`AsyncStateService`](../../sequencer/interfaces/AsyncStateService.md)

## Constructors

### new PrismaStateService()

> **new PrismaStateService**(`connection`, `mask`): [`PrismaStateService`](PrismaStateService.md)

Defined in: [packages/persistance/src/services/prisma/PrismaStateService.ts:23](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/PrismaStateService.ts#L23)

#### Parameters

##### connection

[`PrismaConnection`](../interfaces/PrismaConnection.md)

##### mask

`string`

A indicator to which masking level the values belong

#### Returns

[`PrismaStateService`](PrismaStateService.md)

## Methods

### commit()

> **commit**(): `Promise`\<`void`\>

Defined in: [packages/persistance/src/services/prisma/PrismaStateService.ts:28](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/PrismaStateService.ts#L28)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`AsyncStateService`](../../sequencer/interfaces/AsyncStateService.md).[`commit`](../../sequencer/interfaces/AsyncStateService.md#commit)

***

### get()

> **get**(`key`): `Promise`\<`undefined` \| `Field`[]\>

Defined in: [packages/persistance/src/services/prisma/PrismaStateService.ts:79](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/PrismaStateService.ts#L79)

#### Parameters

##### key

`Field`

#### Returns

`Promise`\<`undefined` \| `Field`[]\>

#### Implementation of

[`AsyncStateService`](../../sequencer/interfaces/AsyncStateService.md).[`get`](../../sequencer/interfaces/AsyncStateService.md#get)

***

### getMany()

> **getMany**(`keys`): `Promise`\<[`StateEntry`](../../sequencer/interfaces/StateEntry.md)[]\>

Defined in: [packages/persistance/src/services/prisma/PrismaStateService.ts:54](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/PrismaStateService.ts#L54)

#### Parameters

##### keys

`Field`[]

#### Returns

`Promise`\<[`StateEntry`](../../sequencer/interfaces/StateEntry.md)[]\>

#### Implementation of

[`AsyncStateService`](../../sequencer/interfaces/AsyncStateService.md).[`getMany`](../../sequencer/interfaces/AsyncStateService.md#getmany)

***

### openTransaction()

> **openTransaction**(): `Promise`\<`void`\>

Defined in: [packages/persistance/src/services/prisma/PrismaStateService.ts:75](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/PrismaStateService.ts#L75)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`AsyncStateService`](../../sequencer/interfaces/AsyncStateService.md).[`openTransaction`](../../sequencer/interfaces/AsyncStateService.md#opentransaction)

***

### writeStates()

> **writeStates**(`entries`): `void`

Defined in: [packages/persistance/src/services/prisma/PrismaStateService.ts:84](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/PrismaStateService.ts#L84)

#### Parameters

##### entries

[`StateEntry`](../../sequencer/interfaces/StateEntry.md)[]

#### Returns

`void`

#### Implementation of

[`AsyncStateService`](../../sequencer/interfaces/AsyncStateService.md).[`writeStates`](../../sequencer/interfaces/AsyncStateService.md#writestates)
