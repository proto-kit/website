---
title: StateMap
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / StateMap

# Class: StateMap\<KeyType, ValueType\>

Defined in: [packages/protocol/src/state/StateMap.ts:12](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/state/StateMap.ts#L12)

Map-like wrapper for state

## Extends

- [`WithPath`](WithPath.md)\<`this`\> & [`WithStateServiceProvider`](WithStateServiceProvider.md)\<`this`\>

## Type Parameters

• **KeyType**

• **ValueType**

## Constructors

### new StateMap()

> **new StateMap**\<`KeyType`, `ValueType`\>(`keyType`, `valueType`): [`StateMap`](StateMap.md)\<`KeyType`, `ValueType`\>

Defined in: [packages/protocol/src/state/StateMap.ts:30](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/state/StateMap.ts#L30)

#### Parameters

##### keyType

`FlexibleProvablePure`\<`KeyType`\>

##### valueType

`FlexibleProvablePure`\<`ValueType`\>

#### Returns

[`StateMap`](StateMap.md)\<`KeyType`, `ValueType`\>

#### Overrides

`Mixin( WithPath, WithStateServiceProvider ).constructor`

## Properties

### keyType

> **keyType**: `FlexibleProvablePure`\<`KeyType`\>

Defined in: [packages/protocol/src/state/StateMap.ts:31](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/state/StateMap.ts#L31)

***

### path?

> `optional` **path**: `Field`

Defined in: [packages/protocol/src/state/State.ts:14](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/state/State.ts#L14)

#### Inherited from

`Mixin( WithPath, WithStateServiceProvider ).path`

***

### stateServiceProvider?

> `optional` **stateServiceProvider**: [`StateServiceProvider`](StateServiceProvider.md)

Defined in: [packages/protocol/src/state/State.ts:26](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/state/State.ts#L26)

#### Inherited from

`Mixin( WithPath, WithStateServiceProvider ).stateServiceProvider`

***

### valueType

> **valueType**: `FlexibleProvablePure`\<`ValueType`\>

Defined in: [packages/protocol/src/state/StateMap.ts:32](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/state/StateMap.ts#L32)

## Methods

### get()

> **get**(`key`): `Promise`\<[`Option`](Option.md)\<`ValueType`\>\>

Defined in: [packages/protocol/src/state/StateMap.ts:48](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/state/StateMap.ts#L48)

Obtains a value for the provided key in the current state map.

#### Parameters

##### key

`KeyType`

Key to obtain the state for

#### Returns

`Promise`\<[`Option`](Option.md)\<`ValueType`\>\>

Value for the provided key.

***

### getPath()

> **getPath**(`key`): `Field`

Defined in: [packages/protocol/src/state/StateMap.ts:37](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/state/StateMap.ts#L37)

#### Parameters

##### key

`KeyType`

#### Returns

`Field`

***

### hasPathOrFail()

> **hasPathOrFail**(): `asserts this is { path: Path }`

Defined in: [packages/protocol/src/state/State.ts:16](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/state/State.ts#L16)

#### Returns

`asserts this is { path: Path }`

#### Inherited from

`Mixin( WithPath, WithStateServiceProvider ).hasPathOrFail`

***

### hasStateServiceOrFail()

> **hasStateServiceOrFail**(): `asserts this is { stateServiceProvider: StateServiceProvider }`

Defined in: [packages/protocol/src/state/State.ts:28](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/state/State.ts#L28)

#### Returns

`asserts this is { stateServiceProvider: StateServiceProvider }`

#### Inherited from

`Mixin( WithPath, WithStateServiceProvider ).hasStateServiceOrFail`

***

### set()

> **set**(`key`, `value`): `Promise`\<`void`\>

Defined in: [packages/protocol/src/state/StateMap.ts:64](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/state/StateMap.ts#L64)

Sets a value for the given key in the current state map.

#### Parameters

##### key

`KeyType`

Key to store the value under

##### value

`ValueType`

Value to be stored under the given key

#### Returns

`Promise`\<`void`\>

***

### from()

> `static` **from**\<`KeyType`, `ValueType`\>(`keyType`, `valueType`): [`StateMap`](StateMap.md)\<`KeyType`, `ValueType`\>

Defined in: [packages/protocol/src/state/StateMap.ts:23](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/state/StateMap.ts#L23)

Create a new state map with the given key and value types

#### Type Parameters

• **KeyType**

• **ValueType**

#### Parameters

##### keyType

`FlexibleProvablePure`\<`KeyType`\>

Type to be used as a key

##### valueType

`FlexibleProvablePure`\<`ValueType`\>

Type to be stored as a value

#### Returns

[`StateMap`](StateMap.md)\<`KeyType`, `ValueType`\>

State map with provided key and value types.
