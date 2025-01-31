---
title: State
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / State

# Class: State\<Value\>

Defined in: [packages/protocol/src/state/State.ts:42](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/state/State.ts#L42)

Utilities for runtime module state, such as get/set

## Extends

- [`WithPath`](WithPath.md)\<`this`\> & [`WithStateServiceProvider`](WithStateServiceProvider.md)\<`this`\>

## Type Parameters

• **Value**

## Constructors

### new State()

> **new State**\<`Value`\>(`valueType`): [`State`](State.md)\<`Value`\>

Defined in: [packages/protocol/src/state/State.ts:53](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/state/State.ts#L53)

#### Parameters

##### valueType

`FlexibleProvablePure`\<`Value`\>

#### Returns

[`State`](State.md)\<`Value`\>

#### Overrides

`Mixin(WithPath, WithStateServiceProvider).constructor`

## Properties

### path?

> `optional` **path**: `Field`

Defined in: [packages/protocol/src/state/State.ts:14](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/state/State.ts#L14)

#### Inherited from

`Mixin(WithPath, WithStateServiceProvider).path`

***

### stateServiceProvider?

> `optional` **stateServiceProvider**: [`StateServiceProvider`](StateServiceProvider.md)

Defined in: [packages/protocol/src/state/State.ts:26](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/state/State.ts#L26)

#### Inherited from

`Mixin(WithPath, WithStateServiceProvider).stateServiceProvider`

***

### valueType

> **valueType**: `FlexibleProvablePure`\<`Value`\>

Defined in: [packages/protocol/src/state/State.ts:53](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/state/State.ts#L53)

## Methods

### get()

> **get**(): `Promise`\<[`Option`](Option.md)\<`Value`\>\>

Defined in: [packages/protocol/src/state/State.ts:133](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/state/State.ts#L133)

Retrieves the current state and creates a state transition
anchoring the use of the current state value in the circuit.

#### Returns

`Promise`\<[`Option`](Option.md)\<`Value`\>\>

Option representation of the current state.

***

### hasPathOrFail()

> **hasPathOrFail**(): `asserts this is { path: Path }`

Defined in: [packages/protocol/src/state/State.ts:16](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/state/State.ts#L16)

#### Returns

`asserts this is { path: Path }`

#### Inherited from

`Mixin(WithPath, WithStateServiceProvider).hasPathOrFail`

***

### hasStateServiceOrFail()

> **hasStateServiceOrFail**(): `asserts this is { stateServiceProvider: StateServiceProvider }`

Defined in: [packages/protocol/src/state/State.ts:28](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/state/State.ts#L28)

#### Returns

`asserts this is { stateServiceProvider: StateServiceProvider }`

#### Inherited from

`Mixin(WithPath, WithStateServiceProvider).hasStateServiceOrFail`

***

### set()

> **set**(`value`): `Promise`\<`void`\>

Defined in: [packages/protocol/src/state/State.ts:158](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/state/State.ts#L158)

Sets a new state value by creating a state transition from
the current value to the newly set value.

The newly set value isn't available via state.get(), since the
state transitions are not applied within the same circuit.
You can however store and access your new value in
a separate circuit variable.

#### Parameters

##### value

`Value`

Value to be set as the current state

#### Returns

`Promise`\<`void`\>

***

### from()

> `static` **from**\<`Value`\>(`valueType`): [`State`](State.md)\<`Value`\>

Defined in: [packages/protocol/src/state/State.ts:49](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/state/State.ts#L49)

Creates a new state wrapper for the provided value type.

#### Type Parameters

• **Value**

#### Parameters

##### valueType

`FlexibleProvablePure`\<`Value`\>

Type of value to be stored (e.g. UInt64, Struct, ...)

#### Returns

[`State`](State.md)\<`Value`\>

New state for the given value type.
