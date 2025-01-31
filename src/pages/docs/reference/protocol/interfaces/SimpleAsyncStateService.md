---
title: SimpleAsyncStateService
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / SimpleAsyncStateService

# Interface: SimpleAsyncStateService

Defined in: [packages/protocol/src/state/StateService.ts:3](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/state/StateService.ts#L3)

## Properties

### get()

> **get**: (`key`) => `Promise`\<`undefined` \| `Field`[]\>

Defined in: [packages/protocol/src/state/StateService.ts:4](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/state/StateService.ts#L4)

#### Parameters

##### key

`Field`

#### Returns

`Promise`\<`undefined` \| `Field`[]\>

***

### set()

> **set**: (`key`, `value`) => `Promise`\<`void`\>

Defined in: [packages/protocol/src/state/StateService.ts:5](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/state/StateService.ts#L5)

#### Parameters

##### key

`Field`

##### value

`undefined` | `Field`[]

#### Returns

`Promise`\<`void`\>
