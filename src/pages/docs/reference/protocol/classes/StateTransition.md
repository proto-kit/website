---
title: StateTransition
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / StateTransition

# Class: StateTransition\<Value\>

Defined in: [packages/protocol/src/model/StateTransition.ts:32](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/StateTransition.ts#L32)

Generic state transition that constraints the current method circuit
to external state, by providing a state anchor.

## Type Parameters

• **Value**

## Constructors

### new StateTransition()

> **new StateTransition**\<`Value`\>(`path`, `fromValue`, `toValue`): [`StateTransition`](StateTransition.md)\<`Value`\>

Defined in: [packages/protocol/src/model/StateTransition.ts:45](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/StateTransition.ts#L45)

#### Parameters

##### path

`Field`

##### fromValue

[`Option`](Option.md)\<`Value`\>

##### toValue

[`Option`](Option.md)\<`Field`\> | [`Option`](Option.md)\<`Value`\>

#### Returns

[`StateTransition`](StateTransition.md)\<`Value`\>

## Properties

### fromValue

> **fromValue**: [`Option`](Option.md)\<`Value`\>

Defined in: [packages/protocol/src/model/StateTransition.ts:47](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/StateTransition.ts#L47)

***

### path

> **path**: `Field`

Defined in: [packages/protocol/src/model/StateTransition.ts:46](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/StateTransition.ts#L46)

***

### toValue

> **toValue**: [`Option`](Option.md)\<`Field`\> \| [`Option`](Option.md)\<`Value`\>

Defined in: [packages/protocol/src/model/StateTransition.ts:48](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/StateTransition.ts#L48)

## Accessors

### from

#### Get Signature

> **get** **from**(): [`Option`](Option.md)\<`Value`\>

Defined in: [packages/protocol/src/model/StateTransition.ts:51](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/StateTransition.ts#L51)

##### Returns

[`Option`](Option.md)\<`Value`\>

***

### to

#### Get Signature

> **get** **to**(): [`Option`](Option.md)\<`Field`\> \| [`Option`](Option.md)\<`Value`\>

Defined in: [packages/protocol/src/model/StateTransition.ts:57](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/StateTransition.ts#L57)

##### Returns

[`Option`](Option.md)\<`Field`\> \| [`Option`](Option.md)\<`Value`\>

## Methods

### toConstant()

> **toConstant**(): [`StateTransition`](StateTransition.md)\<`Value`\>

Defined in: [packages/protocol/src/model/StateTransition.ts:81](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/StateTransition.ts#L81)

#### Returns

[`StateTransition`](StateTransition.md)\<`Value`\>

***

### toJSON()

> **toJSON**(): `object`

Defined in: [packages/protocol/src/model/StateTransition.ts:73](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/StateTransition.ts#L73)

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

> **toProvable**(): [`ProvableStateTransition`](ProvableStateTransition.md)

Defined in: [packages/protocol/src/model/StateTransition.ts:65](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/StateTransition.ts#L65)

Converts a StateTransition to a ProvableStateTransition,
while enforcing the 'from' property to be 'Some' in all cases.

#### Returns

[`ProvableStateTransition`](ProvableStateTransition.md)

***

### from()

> `static` **from**\<`Value`\>(`path`, `fromValue`): [`StateTransition`](StateTransition.md)\<`Value`\>

Defined in: [packages/protocol/src/model/StateTransition.ts:33](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/StateTransition.ts#L33)

#### Type Parameters

• **Value**

#### Parameters

##### path

`Field`

##### fromValue

[`Option`](Option.md)\<`Value`\>

#### Returns

[`StateTransition`](StateTransition.md)\<`Value`\>

***

### fromTo()

> `static` **fromTo**\<`Value`\>(`path`, `fromValue`, `toValue`): [`StateTransition`](StateTransition.md)\<`Value`\>

Defined in: [packages/protocol/src/model/StateTransition.ts:37](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/model/StateTransition.ts#L37)

#### Type Parameters

• **Value**

#### Parameters

##### path

`Field`

##### fromValue

[`Option`](Option.md)\<`Value`\>

##### toValue

[`Option`](Option.md)\<`Value`\>

#### Returns

[`StateTransition`](StateTransition.md)\<`Value`\>
