---
title: DefaultProvableHashList
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / DefaultProvableHashList

# Class: DefaultProvableHashList\<Value\>

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:46](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/utils/ProvableHashList.ts#L46)

Utilities for creating a hash list from a given value type.

## Extends

- [`ProvableHashList`](ProvableHashList.md)\<`Value`\>

## Type Parameters

• **Value**

## Constructors

### new DefaultProvableHashList()

> **new DefaultProvableHashList**\<`Value`\>(`valueType`, `commitment`): [`DefaultProvableHashList`](DefaultProvableHashList.md)\<`Value`\>

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:7](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/utils/ProvableHashList.ts#L7)

#### Parameters

##### valueType

`ProvablePure`\<`Value`\>

##### commitment

`Field` = `...`

#### Returns

[`DefaultProvableHashList`](DefaultProvableHashList.md)\<`Value`\>

#### Inherited from

[`ProvableHashList`](ProvableHashList.md).[`constructor`](ProvableHashList.md#constructors)

## Properties

### commitment

> **commitment**: `Field`

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:9](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/utils/ProvableHashList.ts#L9)

#### Inherited from

[`ProvableHashList`](ProvableHashList.md).[`commitment`](ProvableHashList.md#commitment-1)

***

### valueType

> `protected` `readonly` **valueType**: `ProvablePure`\<`Value`\>

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:8](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/utils/ProvableHashList.ts#L8)

#### Inherited from

[`ProvableHashList`](ProvableHashList.md).[`valueType`](ProvableHashList.md#valuetype-1)

## Methods

### hash()

> **hash**(`elements`): `Field`

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:47](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/utils/ProvableHashList.ts#L47)

#### Parameters

##### elements

`Field`[]

#### Returns

`Field`

#### Overrides

[`ProvableHashList`](ProvableHashList.md).[`hash`](ProvableHashList.md#hash)

***

### push()

> **push**(`value`): [`DefaultProvableHashList`](DefaultProvableHashList.md)\<`Value`\>

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:21](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/utils/ProvableHashList.ts#L21)

Converts the provided value to Field[] and appends it to
the current hashlist.

#### Parameters

##### value

`Value`

Value to be appended to the hash list

#### Returns

[`DefaultProvableHashList`](DefaultProvableHashList.md)\<`Value`\>

Current hash list.

#### Inherited from

[`ProvableHashList`](ProvableHashList.md).[`push`](ProvableHashList.md#push)

***

### pushIf()

> **pushIf**(`value`, `condition`): [`DefaultProvableHashList`](DefaultProvableHashList.md)\<`Value`\>

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:29](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/utils/ProvableHashList.ts#L29)

#### Parameters

##### value

`Value`

##### condition

`Bool`

#### Returns

[`DefaultProvableHashList`](DefaultProvableHashList.md)\<`Value`\>

#### Inherited from

[`ProvableHashList`](ProvableHashList.md).[`pushIf`](ProvableHashList.md#pushif)

***

### toField()

> **toField**(): `Field`

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:41](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/utils/ProvableHashList.ts#L41)

#### Returns

`Field`

Traling hash of the current hashlist.

#### Inherited from

[`ProvableHashList`](ProvableHashList.md).[`toField`](ProvableHashList.md#tofield)
