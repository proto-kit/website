---
title: UntypedStateTransition
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / UntypedStateTransition

# Class: UntypedStateTransition

Defined in: [packages/sequencer/src/protocol/production/helpers/UntypedStateTransition.ts:10](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/helpers/UntypedStateTransition.ts#L10)

Generic state transition that constraints the current method circuit
to external state, by providing a state anchor.

## Constructors

### new UntypedStateTransition()

> **new UntypedStateTransition**(`path`, `fromValue`, `toValue`): [`UntypedStateTransition`](UntypedStateTransition.md)

Defined in: [packages/sequencer/src/protocol/production/helpers/UntypedStateTransition.ts:35](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/helpers/UntypedStateTransition.ts#L35)

#### Parameters

##### path

`Field`

##### fromValue

[`UntypedOption`](UntypedOption.md)

##### toValue

[`UntypedOption`](UntypedOption.md)

#### Returns

[`UntypedStateTransition`](UntypedStateTransition.md)

## Properties

### fromValue

> **fromValue**: [`UntypedOption`](UntypedOption.md)

Defined in: [packages/sequencer/src/protocol/production/helpers/UntypedStateTransition.ts:37](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/helpers/UntypedStateTransition.ts#L37)

***

### path

> **path**: `Field`

Defined in: [packages/sequencer/src/protocol/production/helpers/UntypedStateTransition.ts:36](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/helpers/UntypedStateTransition.ts#L36)

***

### toValue

> **toValue**: [`UntypedOption`](UntypedOption.md)

Defined in: [packages/sequencer/src/protocol/production/helpers/UntypedStateTransition.ts:38](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/helpers/UntypedStateTransition.ts#L38)

## Accessors

### from

#### Get Signature

> **get** **from**(): [`UntypedOption`](UntypedOption.md)

Defined in: [packages/sequencer/src/protocol/production/helpers/UntypedStateTransition.ts:41](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/helpers/UntypedStateTransition.ts#L41)

##### Returns

[`UntypedOption`](UntypedOption.md)

***

### to

#### Get Signature

> **get** **to**(): [`UntypedOption`](UntypedOption.md)

Defined in: [packages/sequencer/src/protocol/production/helpers/UntypedStateTransition.ts:47](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/helpers/UntypedStateTransition.ts#L47)

##### Returns

[`UntypedOption`](UntypedOption.md)

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: [packages/sequencer/src/protocol/production/helpers/UntypedStateTransition.ts:63](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/helpers/UntypedStateTransition.ts#L63)

#### Returns

`object`

##### from

> **from**: `object`

###### from.isForcedSome

> **from.isForcedSome**: `boolean`

###### from.isSome

> **from.isSome**: `boolean`

###### from.value

> **from.value**: `string`[]

##### path

> **path**: `string`

##### to

> **to**: `object`

###### to.isForcedSome

> **to.isForcedSome**: `boolean`

###### to.isSome

> **to.isSome**: `boolean`

###### to.value

> **to.value**: `string`[]

***

### toProvable()

> **toProvable**(): [`ProvableStateTransition`](../../protocol/classes/ProvableStateTransition.md)

Defined in: [packages/sequencer/src/protocol/production/helpers/UntypedStateTransition.ts:55](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/helpers/UntypedStateTransition.ts#L55)

Converts a StateTransition to a ProvableStateTransition,
while enforcing the 'from' property to be 'Some' in all cases.

#### Returns

[`ProvableStateTransition`](../../protocol/classes/ProvableStateTransition.md)

***

### fromJSON()

> `static` **fromJSON**(`__namedParameters`): [`UntypedStateTransition`](UntypedStateTransition.md)

Defined in: [packages/sequencer/src/protocol/production/helpers/UntypedStateTransition.ts:19](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/helpers/UntypedStateTransition.ts#L19)

#### Parameters

##### \_\_namedParameters

###### from

\{ `isForcedSome`: `boolean`; `isSome`: `boolean`; `value`: `string`[]; \}

###### from.isForcedSome

`boolean`

###### from.isSome

`boolean`

###### from.value

`string`[]

###### path

`string`

###### to

\{ `isForcedSome`: `boolean`; `isSome`: `boolean`; `value`: `string`[]; \}

###### to.isForcedSome

`boolean`

###### to.isSome

`boolean`

###### to.value

`string`[]

#### Returns

[`UntypedStateTransition`](UntypedStateTransition.md)

***

### fromStateTransition()

> `static` **fromStateTransition**\<`Value`\>(`st`): [`UntypedStateTransition`](UntypedStateTransition.md)

Defined in: [packages/sequencer/src/protocol/production/helpers/UntypedStateTransition.ts:11](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/helpers/UntypedStateTransition.ts#L11)

#### Type Parameters

• **Value**

#### Parameters

##### st

[`StateTransition`](../../protocol/classes/StateTransition.md)\<`Value`\>

#### Returns

[`UntypedStateTransition`](UntypedStateTransition.md)
