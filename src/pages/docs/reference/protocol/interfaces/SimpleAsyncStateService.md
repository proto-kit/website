---
title: SimpleAsyncStateService
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / SimpleAsyncStateService

# Interface: SimpleAsyncStateService

Defined in: [packages/protocol/src/state/StateService.ts:3](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/state/StateService.ts#L3)

## Properties

### get()

> **get**: (`key`) => `Promise`\<`undefined` \| `Field`[]\>

Defined in: [packages/protocol/src/state/StateService.ts:4](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/state/StateService.ts#L4)

#### Parameters

##### key

`Field`

#### Returns

`Promise`\<`undefined` \| `Field`[]\>

***

### set()

> **set**: (`key`, `value`) => `Promise`\<`void`\>

Defined in: [packages/protocol/src/state/StateService.ts:5](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/state/StateService.ts#L5)

#### Parameters

##### key

`Field`

##### value

`undefined` | `Field`[]

#### Returns

`Promise`\<`void`\>
