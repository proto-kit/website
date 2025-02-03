---
title: toProver
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / toProver

# Function: toProver()

> **toProver**(`methodName`, `simulatedMethod`, `isFirstParameterPublicInput`, ...`args`): (`this`) => `Promise`\<`Proof`\<`any`, `any`\>\>

Defined in: [packages/common/src/zkProgrammable/provableMethod.ts:20](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/zkProgrammable/provableMethod.ts#L20)

## Parameters

### methodName

`string`

### simulatedMethod

[`DecoratedMethod`](../type-aliases/DecoratedMethod.md)

### isFirstParameterPublicInput

`boolean`

### args

...[`ArgumentTypes`](../type-aliases/ArgumentTypes.md)

## Returns

`Function`

### Parameters

#### this

[`ZkProgrammable`](../classes/ZkProgrammable.md)\<`any`, `any`\>

### Returns

`Promise`\<`Proof`\<`any`, `any`\>\>
