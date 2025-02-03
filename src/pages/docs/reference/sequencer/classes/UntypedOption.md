---
title: UntypedOption
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / UntypedOption

# Class: UntypedOption

Defined in: [packages/sequencer/src/protocol/production/helpers/UntypedOption.ts:7](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/helpers/UntypedOption.ts#L7)

Option facilitating in-circuit values that may or may not exist.

## Extends

- [`OptionBase`](../../protocol/classes/OptionBase.md)

## Constructors

### new UntypedOption()

> **new UntypedOption**(`isSome`, `value`, `enforceEmpty`): [`UntypedOption`](UntypedOption.md)

Defined in: [packages/sequencer/src/protocol/production/helpers/UntypedOption.ts:32](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/helpers/UntypedOption.ts#L32)

#### Parameters

##### isSome

`Bool`

##### value

`Field`[]

##### enforceEmpty

`Bool`

#### Returns

[`UntypedOption`](UntypedOption.md)

#### Overrides

[`OptionBase`](../../protocol/classes/OptionBase.md).[`constructor`](../../protocol/classes/OptionBase.md#constructors)

## Properties

### isForcedSome

> **isForcedSome**: `Bool`

Defined in: packages/protocol/dist/model/Option.d.ts:60

#### Inherited from

[`OptionBase`](../../protocol/classes/OptionBase.md).[`isForcedSome`](../../protocol/classes/OptionBase.md#isforcedsome-1)

***

### isSome

> **isSome**: `Bool`

Defined in: packages/protocol/dist/model/Option.d.ts:59

#### Inherited from

[`OptionBase`](../../protocol/classes/OptionBase.md).[`isSome`](../../protocol/classes/OptionBase.md#issome-1)

***

### value

> **value**: `Field`[]

Defined in: [packages/sequencer/src/protocol/production/helpers/UntypedOption.ts:34](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/helpers/UntypedOption.ts#L34)

## Accessors

### treeValue

#### Get Signature

> **get** **treeValue**(): `Field`

Defined in: packages/protocol/dist/model/Option.d.ts:67

##### Returns

`Field`

Tree representation of the current value

#### Inherited from

[`OptionBase`](../../protocol/classes/OptionBase.md).[`treeValue`](../../protocol/classes/OptionBase.md#treevalue)

## Methods

### clone()

> **clone**(): [`UntypedOption`](UntypedOption.md)

Defined in: [packages/sequencer/src/protocol/production/helpers/UntypedOption.ts:40](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/helpers/UntypedOption.ts#L40)

#### Returns

[`UntypedOption`](UntypedOption.md)

#### Overrides

[`OptionBase`](../../protocol/classes/OptionBase.md).[`clone`](../../protocol/classes/OptionBase.md#clone)

***

### encodeValueToFields()

> `protected` **encodeValueToFields**(): `Field`[]

Defined in: [packages/sequencer/src/protocol/production/helpers/UntypedOption.ts:44](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/helpers/UntypedOption.ts#L44)

#### Returns

`Field`[]

#### Overrides

[`OptionBase`](../../protocol/classes/OptionBase.md).[`encodeValueToFields`](../../protocol/classes/OptionBase.md#encodevaluetofields)

***

### forceSome()

> **forceSome**(): `void`

Defined in: packages/protocol/dist/model/Option.d.ts:68

#### Returns

`void`

#### Inherited from

[`OptionBase`](../../protocol/classes/OptionBase.md).[`forceSome`](../../protocol/classes/OptionBase.md#forcesome)

***

### toFields()

> **toFields**(): `Field`[]

Defined in: packages/protocol/dist/model/Option.d.ts:73

Returns the `to`-value as decoded as a list of fields
Not in circuit

#### Returns

`Field`[]

#### Inherited from

[`OptionBase`](../../protocol/classes/OptionBase.md).[`toFields`](../../protocol/classes/OptionBase.md#tofields)

***

### toJSON()

> **toJSON**(): `object`

Defined in: packages/protocol/dist/model/Option.d.ts:78

#### Returns

`object`

##### isForcedSome

> **isForcedSome**: `boolean`

##### isSome

> **isSome**: `boolean`

##### value

> **value**: `string`[]

#### Inherited from

[`OptionBase`](../../protocol/classes/OptionBase.md).[`toJSON`](../../protocol/classes/OptionBase.md#tojson)

***

### toProvable()

> **toProvable**(): [`ProvableOption`](../../protocol/classes/ProvableOption.md)

Defined in: packages/protocol/dist/model/Option.d.ts:77

#### Returns

[`ProvableOption`](../../protocol/classes/ProvableOption.md)

Provable representation of the current option.

#### Inherited from

[`OptionBase`](../../protocol/classes/OptionBase.md).[`toProvable`](../../protocol/classes/OptionBase.md#toprovable)

***

### fromJSON()

> `static` **fromJSON**(`__namedParameters`): [`UntypedOption`](UntypedOption.md)

Defined in: [packages/sequencer/src/protocol/production/helpers/UntypedOption.ts:16](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/helpers/UntypedOption.ts#L16)

#### Parameters

##### \_\_namedParameters

###### isForcedSome

`boolean`

###### isSome

`boolean`

###### value

`string`[]

#### Returns

[`UntypedOption`](UntypedOption.md)

***

### fromOption()

> `static` **fromOption**\<`Value`\>(`option`): [`UntypedOption`](UntypedOption.md)

Defined in: [packages/sequencer/src/protocol/production/helpers/UntypedOption.ts:8](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/helpers/UntypedOption.ts#L8)

#### Type Parameters

• **Value**

#### Parameters

##### option

[`Option`](../../protocol/classes/Option.md)\<`Field`\> | [`Option`](../../protocol/classes/Option.md)\<`Value`\>

#### Returns

[`UntypedOption`](UntypedOption.md)
