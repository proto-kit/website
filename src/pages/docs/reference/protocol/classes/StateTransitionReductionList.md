---
title: StateTransitionReductionList
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / StateTransitionReductionList

# Class: StateTransitionReductionList

Defined in: [packages/protocol/src/utils/StateTransitionReductionList.ts:11](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/utils/StateTransitionReductionList.ts#L11)

Utilities for creating a hash list from a given value type.

## Extends

- [`ProvableReductionHashList`](ProvableReductionHashList.md)\<[`ProvableStateTransition`](ProvableStateTransition.md)\>

## Constructors

### new StateTransitionReductionList()

> **new StateTransitionReductionList**(`valueType`, `commitment`): [`StateTransitionReductionList`](StateTransitionReductionList.md)

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:7](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/utils/ProvableHashList.ts#L7)

#### Parameters

##### valueType

`ProvablePure`\<[`ProvableStateTransition`](ProvableStateTransition.md)\>

##### commitment

`Field` = `...`

#### Returns

[`StateTransitionReductionList`](StateTransitionReductionList.md)

#### Inherited from

[`ProvableReductionHashList`](ProvableReductionHashList.md).[`constructor`](ProvableReductionHashList.md#constructors)

## Properties

### commitment

> **commitment**: `Field`

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:9](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/utils/ProvableHashList.ts#L9)

#### Inherited from

[`ProvableReductionHashList`](ProvableReductionHashList.md).[`commitment`](ProvableReductionHashList.md#commitment-1)

***

### unconstrainedList

> **unconstrainedList**: [`ProvableStateTransition`](ProvableStateTransition.md)[] = `[]`

Defined in: [packages/protocol/src/utils/ProvableReductionHashList.ts:6](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/utils/ProvableReductionHashList.ts#L6)

#### Inherited from

[`ProvableReductionHashList`](ProvableReductionHashList.md).[`unconstrainedList`](ProvableReductionHashList.md#unconstrainedlist)

***

### valueType

> `protected` `readonly` **valueType**: `ProvablePure`\<[`ProvableStateTransition`](ProvableStateTransition.md)\>

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:8](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/utils/ProvableHashList.ts#L8)

#### Inherited from

[`ProvableReductionHashList`](ProvableReductionHashList.md).[`valueType`](ProvableReductionHashList.md#valuetype-1)

## Methods

### hash()

> **hash**(`elements`): `Field`

Defined in: [packages/protocol/src/utils/ProvableReductionHashList.ts:65](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/utils/ProvableReductionHashList.ts#L65)

#### Parameters

##### elements

`Field`[]

#### Returns

`Field`

#### Inherited from

[`ProvableReductionHashList`](ProvableReductionHashList.md).[`hash`](ProvableReductionHashList.md#hash)

***

### push()

> **push**(`value`): [`StateTransitionReductionList`](StateTransitionReductionList.md)

Defined in: [packages/protocol/src/utils/StateTransitionReductionList.ts:12](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/utils/StateTransitionReductionList.ts#L12)

Converts the provided value to Field[] and appends it to
the current hashlist.

#### Parameters

##### value

[`ProvableStateTransition`](ProvableStateTransition.md)

Value to be appended to the hash list

#### Returns

[`StateTransitionReductionList`](StateTransitionReductionList.md)

Current hash list.

#### Overrides

[`ProvableReductionHashList`](ProvableReductionHashList.md).[`push`](ProvableReductionHashList.md#push)

***

### pushAndReduce()

> **pushAndReduce**(`value`, `reduce`): `object`

Defined in: [packages/protocol/src/utils/ProvableReductionHashList.ts:12](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/utils/ProvableReductionHashList.ts#L12)

#### Parameters

##### value

[`ProvableStateTransition`](ProvableStateTransition.md)

##### reduce

(`previous`) => \[[`ProvableStateTransition`](ProvableStateTransition.md), `Bool`\]

#### Returns

`object`

##### popLast

> **popLast**: `Bool`

##### value

> **value**: [`ProvableStateTransition`](ProvableStateTransition.md)

#### Inherited from

[`ProvableReductionHashList`](ProvableReductionHashList.md).[`pushAndReduce`](ProvableReductionHashList.md#pushandreduce)

***

### pushIf()

> **pushIf**(`value`, `condition`): [`StateTransitionReductionList`](StateTransitionReductionList.md)

Defined in: [packages/protocol/src/utils/ProvableReductionHashList.ts:59](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/utils/ProvableReductionHashList.ts#L59)

#### Parameters

##### value

[`ProvableStateTransition`](ProvableStateTransition.md)

##### condition

`Bool`

#### Returns

[`StateTransitionReductionList`](StateTransitionReductionList.md)

#### Inherited from

[`ProvableReductionHashList`](ProvableReductionHashList.md).[`pushIf`](ProvableReductionHashList.md#pushif)

***

### pushWithMetadata()

> **pushWithMetadata**(`value`): `object`

Defined in: [packages/protocol/src/utils/StateTransitionReductionList.ts:18](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/utils/StateTransitionReductionList.ts#L18)

#### Parameters

##### value

[`ProvableStateTransition`](ProvableStateTransition.md)

#### Returns

`object`

##### popLast

> **popLast**: `Bool`

##### value

> **value**: [`ProvableStateTransition`](ProvableStateTransition.md)

***

### toField()

> **toField**(): `Field`

Defined in: [packages/protocol/src/utils/ProvableHashList.ts:41](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/utils/ProvableHashList.ts#L41)

#### Returns

`Field`

Traling hash of the current hashlist.

#### Inherited from

[`ProvableReductionHashList`](ProvableReductionHashList.md).[`toField`](ProvableReductionHashList.md#tofield)
