---
title: PrefixedProvableHashList
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / PrefixedProvableHashList

# Class: PrefixedProvableHashList\<Value\>

Defined in: [packages/protocol/src/utils/PrefixedProvableHashList.ts:6](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/utils/PrefixedProvableHashList.ts#L6)

Utilities for creating a hash list from a given value type.

## Extends

- [`ProvableHashList`](ProvableHashList.md)\<`Value`\>

## Type Parameters

• **Value**

## Constructors

### new PrefixedProvableHashList()

> **new PrefixedProvableHashList**\<`Value`\>(`valueType`, `prefix`, `internalCommitment`): [`PrefixedProvableHashList`](PrefixedProvableHashList.md)\<`Value`\>

Defined in: [packages/protocol/src/utils/PrefixedProvableHashList.ts:9](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/utils/PrefixedProvableHashList.ts#L9)

#### Parameters

##### valueType

`ProvablePure`\<`Value`\>

##### prefix

`string`

##### internalCommitment

`Field` = `...`

#### Returns

[`PrefixedProvableHashList`](PrefixedProvableHashList.md)\<`Value`\>

#### Overrides

[`ProvableHashList`](ProvableHashList.md).[`constructor`](ProvableHashList.md#constructors)

## Properties

### commitment

> **commitment**: `Field`

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:9](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/utils/ProvableHashList.ts#L9)

#### Inherited from

[`ProvableHashList`](ProvableHashList.md).[`commitment`](ProvableHashList.md#commitment-1)

***

### valueType

> `protected` `readonly` **valueType**: `ProvablePure`\<`Value`\>

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:8](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/utils/ProvableHashList.ts#L8)

#### Inherited from

[`ProvableHashList`](ProvableHashList.md).[`valueType`](ProvableHashList.md#valuetype-1)

## Methods

### hash()

> `protected` **hash**(`elements`): `Field`

Defined in: [packages/protocol/src/utils/PrefixedProvableHashList.ts:18](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/utils/PrefixedProvableHashList.ts#L18)

#### Parameters

##### elements

`Field`[]

#### Returns

`Field`

#### Overrides

[`ProvableHashList`](ProvableHashList.md).[`hash`](ProvableHashList.md#hash)

***

### push()

> **push**(`value`): [`PrefixedProvableHashList`](PrefixedProvableHashList.md)\<`Value`\>

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:21](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/utils/ProvableHashList.ts#L21)

Converts the provided value to Field[] and appends it to
the current hashlist.

#### Parameters

##### value

`Value`

Value to be appended to the hash list

#### Returns

[`PrefixedProvableHashList`](PrefixedProvableHashList.md)\<`Value`\>

Current hash list.

#### Inherited from

[`ProvableHashList`](ProvableHashList.md).[`push`](ProvableHashList.md#push)

***

### pushIf()

> **pushIf**(`value`, `condition`): [`PrefixedProvableHashList`](PrefixedProvableHashList.md)\<`Value`\>

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:29](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/utils/ProvableHashList.ts#L29)

#### Parameters

##### value

`Value`

##### condition

`Bool`

#### Returns

[`PrefixedProvableHashList`](PrefixedProvableHashList.md)\<`Value`\>

#### Inherited from

[`ProvableHashList`](ProvableHashList.md).[`pushIf`](ProvableHashList.md#pushif)

***

### toField()

> **toField**(): `Field`

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:41](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/utils/ProvableHashList.ts#L41)

#### Returns

`Field`

Traling hash of the current hashlist.

#### Inherited from

[`ProvableHashList`](ProvableHashList.md).[`toField`](ProvableHashList.md#tofield)
