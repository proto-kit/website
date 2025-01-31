---
title: protocolState
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / protocolState

# Function: protocolState()

> **protocolState**(): \<`TargetTransitioningModule`\>(`target`, `propertyKey`) => `void`

Defined in: [packages/protocol/src/state/protocol/ProtocolState.ts:23](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/state/protocol/ProtocolState.ts#L23)

Decorates a runtime module property as state, passing down some
underlying values to improve developer experience.

## Returns

`Function`

### Type Parameters

• **TargetTransitioningModule** *extends* `TransitioningProtocolModule`\<`unknown`\>

### Parameters

#### target

`TargetTransitioningModule`

#### propertyKey

`string`

### Returns

`void`
