---
title: AsyncStateService
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / AsyncStateService

# Interface: AsyncStateService

Defined in: [packages/sequencer/src/state/async/AsyncStateService.ts:13](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/state/async/AsyncStateService.ts#L13)

This Interface should be implemented for services that store the state
in an external storage (like a DB). This can be used in conjunction with
CachedStateService to preload keys for In-Circuit usage.

## Properties

### commit()

> **commit**: () => `Promise`\<`void`\>

Defined in: [packages/sequencer/src/state/async/AsyncStateService.ts:16](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/state/async/AsyncStateService.ts#L16)

#### Returns

`Promise`\<`void`\>

***

### get()

> **get**: (`key`) => `Promise`\<`undefined` \| `Field`[]\>

Defined in: [packages/sequencer/src/state/async/AsyncStateService.ts:22](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/state/async/AsyncStateService.ts#L22)

#### Parameters

##### key

`Field`

#### Returns

`Promise`\<`undefined` \| `Field`[]\>

***

### getMany()

> **getMany**: (`keys`) => `Promise`\<[`StateEntry`](StateEntry.md)[]\>

Defined in: [packages/sequencer/src/state/async/AsyncStateService.ts:20](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/state/async/AsyncStateService.ts#L20)

#### Parameters

##### keys

`Field`[]

#### Returns

`Promise`\<[`StateEntry`](StateEntry.md)[]\>

***

### openTransaction()

> **openTransaction**: () => `Promise`\<`void`\>

Defined in: [packages/sequencer/src/state/async/AsyncStateService.ts:14](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/state/async/AsyncStateService.ts#L14)

#### Returns

`Promise`\<`void`\>

***

### writeStates()

> **writeStates**: (`entries`) => `void`

Defined in: [packages/sequencer/src/state/async/AsyncStateService.ts:18](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/state/async/AsyncStateService.ts#L18)

#### Parameters

##### entries

[`StateEntry`](StateEntry.md)[]

#### Returns

`void`
