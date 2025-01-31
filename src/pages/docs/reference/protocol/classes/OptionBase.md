---
title: OptionBase
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / OptionBase

# Class: `abstract` OptionBase

Defined in: [packages/protocol/src/model/Option.ts:21](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/Option.ts#L21)

## Extended by

- [`Option`](Option.md)
- [`UntypedOption`](../../sequencer/classes/UntypedOption.md)

## Constructors

### new OptionBase()

> `protected` **new OptionBase**(`isSome`, `isForcedSome`): [`OptionBase`](OptionBase.md)

Defined in: [packages/protocol/src/model/Option.ts:22](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/Option.ts#L22)

#### Parameters

##### isSome

`Bool`

##### isForcedSome

`Bool`

#### Returns

[`OptionBase`](OptionBase.md)

## Properties

### isForcedSome

> **isForcedSome**: `Bool`

Defined in: [packages/protocol/src/model/Option.ts:24](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/Option.ts#L24)

***

### isSome

> **isSome**: `Bool`

Defined in: [packages/protocol/src/model/Option.ts:23](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/Option.ts#L23)

## Accessors

### treeValue

#### Get Signature

> **get** **treeValue**(): `Field`

Defined in: [packages/protocol/src/model/Option.ts:34](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/Option.ts#L34)

##### Returns

`Field`

Tree representation of the current value

## Methods

### clone()

> `abstract` `protected` **clone**(): [`OptionBase`](OptionBase.md)

Defined in: [packages/protocol/src/model/Option.ts:29](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/Option.ts#L29)

#### Returns

[`OptionBase`](OptionBase.md)

***

### encodeValueToFields()

> `abstract` `protected` **encodeValueToFields**(): `Field`[]

Defined in: [packages/protocol/src/model/Option.ts:27](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/Option.ts#L27)

#### Returns

`Field`[]

***

### forceSome()

> **forceSome**(): `void`

Defined in: [packages/protocol/src/model/Option.ts:44](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/Option.ts#L44)

#### Returns

`void`

***

### toFields()

> **toFields**(): `Field`[]

Defined in: [packages/protocol/src/model/Option.ts:53](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/Option.ts#L53)

Returns the `to`-value as decoded as a list of fields
Not in circuit

#### Returns

`Field`[]

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

***

### toProvable()

> **toProvable**(): [`ProvableOption`](ProvableOption.md)

Defined in: [packages/protocol/src/model/Option.ts:63](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/model/Option.ts#L63)

#### Returns

[`ProvableOption`](ProvableOption.md)

Provable representation of the current option.
