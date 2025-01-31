---
title: Option
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / Option

# Class: Option\<Value\>

Defined in: [packages/protocol/src/model/Option.ts:84](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/Option.ts#L84)

Option facilitating in-circuit values that may or may not exist.

## Extends

- [`OptionBase`](OptionBase.md)

## Type Parameters

• **Value**

## Constructors

### new Option()

> **new Option**\<`Value`\>(`isSome`, `value`, `valueType`, `isForcedSome`): [`Option`](Option.md)\<`Value`\>

Defined in: [packages/protocol/src/model/Option.ts:122](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/Option.ts#L122)

#### Parameters

##### isSome

`Bool`

##### value

`Value`

##### valueType

`FlexibleProvablePure`\<`Value`\>

##### isForcedSome

`Bool` = `...`

#### Returns

[`Option`](Option.md)\<`Value`\>

#### Overrides

[`OptionBase`](OptionBase.md).[`constructor`](OptionBase.md#constructors)

## Properties

### isForcedSome

> **isForcedSome**: `Bool`

Defined in: [packages/protocol/src/model/Option.ts:24](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/Option.ts#L24)

#### Inherited from

[`OptionBase`](OptionBase.md).[`isForcedSome`](OptionBase.md#isforcedsome-1)

***

### isSome

> **isSome**: `Bool`

Defined in: [packages/protocol/src/model/Option.ts:23](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/Option.ts#L23)

#### Inherited from

[`OptionBase`](OptionBase.md).[`isSome`](OptionBase.md#issome-1)

***

### value

> **value**: `Value`

Defined in: [packages/protocol/src/model/Option.ts:124](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/Option.ts#L124)

***

### valueType

> **valueType**: `FlexibleProvablePure`\<`Value`\>

Defined in: [packages/protocol/src/model/Option.ts:125](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/Option.ts#L125)

## Accessors

### treeValue

#### Get Signature

> **get** **treeValue**(): `Field`

Defined in: [packages/protocol/src/model/Option.ts:34](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/Option.ts#L34)

##### Returns

`Field`

Tree representation of the current value

#### Inherited from

[`OptionBase`](OptionBase.md).[`treeValue`](OptionBase.md#treevalue)

## Methods

### clone()

> **clone**(): [`Option`](Option.md)\<`Value`\>

Defined in: [packages/protocol/src/model/Option.ts:135](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/Option.ts#L135)

#### Returns

[`Option`](Option.md)\<`Value`\>

#### Overrides

[`OptionBase`](OptionBase.md).[`clone`](OptionBase.md#clone)

***

### encodeValueToFields()

> **encodeValueToFields**(): `Field`[]

Defined in: [packages/protocol/src/model/Option.ts:131](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/Option.ts#L131)

#### Returns

`Field`[]

#### Overrides

[`OptionBase`](OptionBase.md).[`encodeValueToFields`](OptionBase.md#encodevaluetofields)

***

### forceSome()

> **forceSome**(): `void`

Defined in: [packages/protocol/src/model/Option.ts:44](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/Option.ts#L44)

#### Returns

`void`

#### Inherited from

[`OptionBase`](OptionBase.md).[`forceSome`](OptionBase.md#forcesome)

***

### orElse()

> **orElse**(`defaultValue`): `Value`

Defined in: [packages/protocol/src/model/Option.ts:148](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/Option.ts#L148)

#### Parameters

##### defaultValue

`Value`

#### Returns

`Value`

Returns the value of this option if it isSome,
otherwise returns the given defaultValue

***

### toConstant()

> **toConstant**(): [`Option`](Option.md)\<`Value`\>

Defined in: [packages/protocol/src/model/Option.ts:157](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/Option.ts#L157)

#### Returns

[`Option`](Option.md)\<`Value`\>

***

### toFields()

> **toFields**(): `Field`[]

Defined in: [packages/protocol/src/model/Option.ts:53](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/Option.ts#L53)

Returns the `to`-value as decoded as a list of fields
Not in circuit

#### Returns

`Field`[]

#### Inherited from

[`OptionBase`](OptionBase.md).[`toFields`](OptionBase.md#tofields)

***

### toJSON()

> **toJSON**(): `object`

Defined in: [packages/protocol/src/model/Option.ts:70](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/Option.ts#L70)

#### Returns

`object`

##### isForcedSome

> **isForcedSome**: `boolean`

##### isSome

> **isSome**: `boolean`

##### value

> **value**: `string`[]

#### Inherited from

[`OptionBase`](OptionBase.md).[`toJSON`](OptionBase.md#tojson)

***

### toProvable()

> **toProvable**(): [`ProvableOption`](ProvableOption.md)

Defined in: [packages/protocol/src/model/Option.ts:63](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/Option.ts#L63)

#### Returns

[`ProvableOption`](ProvableOption.md)

Provable representation of the current option.

#### Inherited from

[`OptionBase`](OptionBase.md).[`toProvable`](OptionBase.md#toprovable)

***

### from()

> `static` **from**\<`Value`\>(`isSome`, `value`, `valueType`): [`Option`](Option.md)\<`Value`\>

Defined in: [packages/protocol/src/model/Option.ts:93](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/Option.ts#L93)

Creates a new Option from the provided parameters

#### Type Parameters

• **Value**

#### Parameters

##### isSome

`Bool`

##### value

`Value`

##### valueType

`FlexibleProvablePure`\<`Value`\>

#### Returns

[`Option`](Option.md)\<`Value`\>

New option from the provided parameters.

***

### fromValue()

> `static` **fromValue**\<`Value`\>(`value`, `valueType`): [`Option`](Option.md)\<`Value`\>

Defined in: [packages/protocol/src/model/Option.ts:108](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/Option.ts#L108)

Creates a new Option from the provided parameters

#### Type Parameters

• **Value**

#### Parameters

##### value

`Value`

##### valueType

`FlexibleProvablePure`\<`Value`\>

#### Returns

[`Option`](Option.md)\<`Value`\>

New option from the provided parameters.

***

### none()

> `static` **none**(): [`Option`](Option.md)\<`Field`\>

Defined in: [packages/protocol/src/model/Option.ts:118](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/Option.ts#L118)

#### Returns

[`Option`](Option.md)\<`Field`\>

Empty / none option
