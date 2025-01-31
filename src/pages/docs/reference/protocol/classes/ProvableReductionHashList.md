---
title: ProvableReductionHashList
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / ProvableReductionHashList

# Class: ProvableReductionHashList\<Value\>

Defined in: [packages/protocol/src/utils/ProvableReductionHashList.ts:5](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/utils/ProvableReductionHashList.ts#L5)

Utilities for creating a hash list from a given value type.

## Extends

- [`ProvableHashList`](ProvableHashList.md)\<`Value`\>

## Extended by

- [`StateTransitionReductionList`](StateTransitionReductionList.md)

## Type Parameters

• **Value**

## Constructors

### new ProvableReductionHashList()

> **new ProvableReductionHashList**\<`Value`\>(`valueType`, `commitment`): [`ProvableReductionHashList`](ProvableReductionHashList.md)\<`Value`\>

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:7](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/utils/ProvableHashList.ts#L7)

#### Parameters

##### valueType

`ProvablePure`\<`Value`\>

##### commitment

`Field` = `...`

#### Returns

[`ProvableReductionHashList`](ProvableReductionHashList.md)\<`Value`\>

#### Inherited from

[`ProvableHashList`](ProvableHashList.md).[`constructor`](ProvableHashList.md#constructors)

## Properties

### commitment

> **commitment**: `Field`

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:9](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/utils/ProvableHashList.ts#L9)

#### Inherited from

[`ProvableHashList`](ProvableHashList.md).[`commitment`](ProvableHashList.md#commitment-1)

***

### unconstrainedList

> **unconstrainedList**: `Value`[] = `[]`

Defined in: [packages/protocol/src/utils/ProvableReductionHashList.ts:6](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/utils/ProvableReductionHashList.ts#L6)

***

### valueType

> `protected` `readonly` **valueType**: `ProvablePure`\<`Value`\>

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:8](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/utils/ProvableHashList.ts#L8)

#### Inherited from

[`ProvableHashList`](ProvableHashList.md).[`valueType`](ProvableHashList.md#valuetype-1)

## Methods

### hash()

> **hash**(`elements`): `Field`

Defined in: [packages/protocol/src/utils/ProvableReductionHashList.ts:65](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/utils/ProvableReductionHashList.ts#L65)

#### Parameters

##### elements

`Field`[]

#### Returns

`Field`

#### Overrides

[`ProvableHashList`](ProvableHashList.md).[`hash`](ProvableHashList.md#hash)

***

### push()

> **push**(`value`): [`ProvableReductionHashList`](ProvableReductionHashList.md)\<`Value`\>

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:21](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/utils/ProvableHashList.ts#L21)

Converts the provided value to Field[] and appends it to
the current hashlist.

#### Parameters

##### value

`Value`

Value to be appended to the hash list

#### Returns

[`ProvableReductionHashList`](ProvableReductionHashList.md)\<`Value`\>

Current hash list.

#### Inherited from

[`ProvableHashList`](ProvableHashList.md).[`push`](ProvableHashList.md#push)

***

### pushAndReduce()

> **pushAndReduce**(`value`, `reduce`): `object`

Defined in: [packages/protocol/src/utils/ProvableReductionHashList.ts:12](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/utils/ProvableReductionHashList.ts#L12)

#### Parameters

##### value

`Value`

##### reduce

(`previous`) => \[`Value`, `Bool`\]

#### Returns

`object`

##### popLast

> **popLast**: `Bool`

##### value

> **value**: `Value`

***

### pushIf()

> **pushIf**(`value`, `condition`): [`ProvableReductionHashList`](ProvableReductionHashList.md)\<`Value`\>

Defined in: [packages/protocol/src/utils/ProvableReductionHashList.ts:59](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/utils/ProvableReductionHashList.ts#L59)

#### Parameters

##### value

`Value`

##### condition

`Bool`

#### Returns

[`ProvableReductionHashList`](ProvableReductionHashList.md)\<`Value`\>

#### Overrides

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
