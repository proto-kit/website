---
title: ProvableMethodExecutionContext
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / ProvableMethodExecutionContext

# Class: ProvableMethodExecutionContext

Defined in: [packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts:48](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts#L48)

Execution context used to wrap runtime module methods,
allowing them to post relevant information (such as execution status)
into the context without any unnecessary 'prop drilling'.

## Extended by

- [`RuntimeMethodExecutionContext`](../../protocol/classes/RuntimeMethodExecutionContext.md)

## Constructors

### new ProvableMethodExecutionContext()

> **new ProvableMethodExecutionContext**(): [`ProvableMethodExecutionContext`](ProvableMethodExecutionContext.md)

#### Returns

[`ProvableMethodExecutionContext`](ProvableMethodExecutionContext.md)

## Properties

### id

> **id**: `string`

Defined in: [packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts:49](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts#L49)

***

### methods

> **methods**: `string`[] = `[]`

Defined in: [packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts:51](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts#L51)

***

### result

> **result**: [`ProvableMethodExecutionResult`](ProvableMethodExecutionResult.md)

Defined in: [packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts:53](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts#L53)

## Accessors

### isFinished

#### Get Signature

> **get** **isFinished**(): `boolean`

Defined in: [packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts:102](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts#L102)

##### Returns

`boolean`

***

### isTopLevel

#### Get Signature

> **get** **isTopLevel**(): `boolean`

Defined in: [packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts:98](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts#L98)

##### Returns

`boolean`

## Methods

### afterMethod()

> **afterMethod**(): `void`

Defined in: [packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts:94](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts#L94)

Removes the latest method from the execution context stack,
keeping track of the amount of 'unfinished' methods. Allowing
for the context to distinguish between top-level and nested method calls.

#### Returns

`void`

***

### beforeMethod()

> **beforeMethod**(`moduleName`, `methodName`, `args`): `void`

Defined in: [packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts:74](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts#L74)

Adds a method to the method execution stack, reseting the execution context
in a case a new top-level (non nested) method call is made.

#### Parameters

##### moduleName

`string`

##### methodName

`string`

Name of the method being captured in the context

##### args

[`ArgumentTypes`](../type-aliases/ArgumentTypes.md)

#### Returns

`void`

***

### clear()

> **clear**(): `void`

Defined in: [packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts:119](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts#L119)

Manually clears/resets the execution context

#### Returns

`void`

***

### current()

> **current**(): `object`

Defined in: [packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts:109](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts#L109)

#### Returns

`object`

- Current execution context state

##### isFinished

> **isFinished**: `boolean`

##### result

> **result**: [`ProvableMethodExecutionResult`](ProvableMethodExecutionResult.md)

***

### setProver()

> **setProver**(`prover`): `void`

Defined in: [packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts:64](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts#L64)

Adds a method prover to the current execution context,
which can be collected and ran asynchronously at a later point in time.

#### Parameters

##### prover

() => `Promise`\<`Proof`\<`unknown`, `unknown`\>\>

#### Returns

`void`
