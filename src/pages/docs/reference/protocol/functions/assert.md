---
title: assert
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / assert

# Function: assert()

> **assert**(`condition`, `message`?): `void`

Defined in: [packages/protocol/src/state/assert/assert.ts:16](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/state/assert/assert.ts#L16)

Maintains an execution status of the current runtime module method,
while prioritizing one-time failures. The assertion won't change the
execution status if it has previously failed at least once within the
same method execution context.

## Parameters

### condition

`Bool`

Result of the assertion made about the execution status

### message?

Optional message describing the prior status

`string` | () => `string`

## Returns

`void`
