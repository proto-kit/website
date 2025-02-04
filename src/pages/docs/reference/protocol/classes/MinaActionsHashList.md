---
title: MinaActionsHashList
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / MinaActionsHashList

# Class: MinaActionsHashList

Defined in: [packages/protocol/src/utils/MinaPrefixedProvableHashList.ts:69](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/utils/MinaPrefixedProvableHashList.ts#L69)

Utilities for creating a hash list from a given value type.

## Extends

- [`MinaPrefixedProvableHashList`](MinaPrefixedProvableHashList.md)\<`Field`\>

## Constructors

### new MinaActionsHashList()

> **new MinaActionsHashList**(`internalCommitment`): [`MinaActionsHashList`](MinaActionsHashList.md)

Defined in: [packages/protocol/src/utils/MinaPrefixedProvableHashList.ts:70](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/utils/MinaPrefixedProvableHashList.ts#L70)

#### Parameters

##### internalCommitment

`Field` = `...`

#### Returns

[`MinaActionsHashList`](MinaActionsHashList.md)

#### Overrides

[`MinaPrefixedProvableHashList`](MinaPrefixedProvableHashList.md).[`constructor`](MinaPrefixedProvableHashList.md#constructors)

## Properties

### commitment

> **commitment**: `Field`

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:9](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/utils/ProvableHashList.ts#L9)

#### Inherited from

[`MinaPrefixedProvableHashList`](MinaPrefixedProvableHashList.md).[`commitment`](MinaPrefixedProvableHashList.md#commitment)

***

### prefix

> `readonly` **prefix**: `string`

Defined in: [packages/protocol/src/utils/MinaPrefixedProvableHashList.ts:56](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/utils/MinaPrefixedProvableHashList.ts#L56)

#### Inherited from

[`MinaPrefixedProvableHashList`](MinaPrefixedProvableHashList.md).[`prefix`](MinaPrefixedProvableHashList.md#prefix-1)

***

### valueType

> `protected` `readonly` **valueType**: `ProvablePure`\<`Field`\>

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:8](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/utils/ProvableHashList.ts#L8)

#### Inherited from

[`MinaPrefixedProvableHashList`](MinaPrefixedProvableHashList.md).[`valueType`](MinaPrefixedProvableHashList.md#valuetype-1)

## Methods

### hash()

> `protected` **hash**(`elements`): `Field`

Defined in: [packages/protocol/src/utils/MinaPrefixedProvableHashList.ts:62](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/utils/MinaPrefixedProvableHashList.ts#L62)

#### Parameters

##### elements

`Field`[]

#### Returns

`Field`

#### Inherited from

[`MinaPrefixedProvableHashList`](MinaPrefixedProvableHashList.md).[`hash`](MinaPrefixedProvableHashList.md#hash)

***

### push()

> **push**(`value`): [`MinaActionsHashList`](MinaActionsHashList.md)

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:21](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/utils/ProvableHashList.ts#L21)

Converts the provided value to Field[] and appends it to
the current hashlist.

#### Parameters

##### value

`Field`

Value to be appended to the hash list

#### Returns

[`MinaActionsHashList`](MinaActionsHashList.md)

Current hash list.

#### Inherited from

[`MinaPrefixedProvableHashList`](MinaPrefixedProvableHashList.md).[`push`](MinaPrefixedProvableHashList.md#push)

***

### pushIf()

> **pushIf**(`value`, `condition`): [`MinaActionsHashList`](MinaActionsHashList.md)

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:29](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/utils/ProvableHashList.ts#L29)

#### Parameters

##### value

`Field`

##### condition

`Bool`

#### Returns

[`MinaActionsHashList`](MinaActionsHashList.md)

#### Inherited from

[`MinaPrefixedProvableHashList`](MinaPrefixedProvableHashList.md).[`pushIf`](MinaPrefixedProvableHashList.md#pushif)

***

### toField()

> **toField**(): `Field`

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:41](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/utils/ProvableHashList.ts#L41)

#### Returns

`Field`

Traling hash of the current hashlist.

#### Inherited from

[`MinaPrefixedProvableHashList`](MinaPrefixedProvableHashList.md).[`toField`](MinaPrefixedProvableHashList.md#tofield)
