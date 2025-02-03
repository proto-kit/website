---
title: ProvableHashList
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / ProvableHashList

# Class: `abstract` ProvableHashList\<Value\>

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:6](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/utils/ProvableHashList.ts#L6)

Utilities for creating a hash list from a given value type.

## Extended by

- [`DefaultProvableHashList`](DefaultProvableHashList.md)
- [`PrefixedProvableHashList`](PrefixedProvableHashList.md)
- [`MinaPrefixedProvableHashList`](MinaPrefixedProvableHashList.md)
- [`ProvableReductionHashList`](ProvableReductionHashList.md)

## Type Parameters

• **Value**

## Constructors

### new ProvableHashList()

> **new ProvableHashList**\<`Value`\>(`valueType`, `commitment`): [`ProvableHashList`](ProvableHashList.md)\<`Value`\>

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:7](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/utils/ProvableHashList.ts#L7)

#### Parameters

##### valueType

`ProvablePure`\<`Value`\>

##### commitment

`Field` = `...`

#### Returns

[`ProvableHashList`](ProvableHashList.md)\<`Value`\>

## Properties

### commitment

> **commitment**: `Field`

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:9](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/utils/ProvableHashList.ts#L9)

***

### valueType

> `protected` `readonly` **valueType**: `ProvablePure`\<`Value`\>

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:8](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/utils/ProvableHashList.ts#L8)

## Methods

### hash()

> `abstract` `protected` **hash**(`elements`): `Field`

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:12](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/utils/ProvableHashList.ts#L12)

#### Parameters

##### elements

`Field`[]

#### Returns

`Field`

***

### push()

> **push**(`value`): [`ProvableHashList`](ProvableHashList.md)\<`Value`\>

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:21](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/utils/ProvableHashList.ts#L21)

Converts the provided value to Field[] and appends it to
the current hashlist.

#### Parameters

##### value

`Value`

Value to be appended to the hash list

#### Returns

[`ProvableHashList`](ProvableHashList.md)\<`Value`\>

Current hash list.

***

### pushIf()

> **pushIf**(`value`, `condition`): [`ProvableHashList`](ProvableHashList.md)\<`Value`\>

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:29](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/utils/ProvableHashList.ts#L29)

#### Parameters

##### value

`Value`

##### condition

`Bool`

#### Returns

[`ProvableHashList`](ProvableHashList.md)\<`Value`\>

***

### toField()

> **toField**(): `Field`

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:41](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/utils/ProvableHashList.ts#L41)

#### Returns

`Field`

Traling hash of the current hashlist.
