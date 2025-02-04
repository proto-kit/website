---
title: provableMethod
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / provableMethod

# Function: provableMethod()

> **provableMethod**(`isFirstParameterPublicInput`, `executionContext`): \<`Target`\>(`target`, `methodName`, `descriptor`) => `TypedPropertyDescriptor`\<(...`args`) => `any`\>

Defined in: [packages/common/src/zkProgrammable/provableMethod.ts:70](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/zkProgrammable/provableMethod.ts#L70)

Decorates a provable method on a 'prover class', depending on
if proofs are enabled or not, either runs the respective zkProgram prover,
or simulates the method execution and issues a mock proof.

## Parameters

### isFirstParameterPublicInput

`boolean` = `true`

### executionContext

[`ProvableMethodExecutionContext`](../classes/ProvableMethodExecutionContext.md) = `...`

## Returns

`Function`

### Type Parameters

• **Target** *extends* [`ZkProgrammable`](../classes/ZkProgrammable.md)\<`any`, `any`\> \| [`WithZkProgrammable`](../interfaces/WithZkProgrammable.md)\<`any`, `any`\>

### Parameters

#### target

`Target`

#### methodName

`string`

#### descriptor

`TypedPropertyDescriptor`\<(...`args`) => `any`\>

### Returns

`TypedPropertyDescriptor`\<(...`args`) => `any`\>
