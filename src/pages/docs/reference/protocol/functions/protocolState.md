---
title: protocolState
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / protocolState

# Function: protocolState()

> **protocolState**(): \<`TargetTransitioningModule`\>(`target`, `propertyKey`) => `void`

Defined in: [packages/protocol/src/state/protocol/ProtocolState.ts:23](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/state/protocol/ProtocolState.ts#L23)

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
