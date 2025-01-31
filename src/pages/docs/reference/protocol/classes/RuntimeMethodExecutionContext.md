---
title: RuntimeMethodExecutionContext
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / RuntimeMethodExecutionContext

# Class: RuntimeMethodExecutionContext

Defined in: [packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts:54](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts#L54)

Execution context used to wrap runtime module methods,
allowing them to post relevant information (such as execution status)
into the context without any unnecessary 'prop drilling'.

## Extends

- [`ProvableMethodExecutionContext`](../../common/classes/ProvableMethodExecutionContext.md)

## Constructors

### new RuntimeMethodExecutionContext()

> **new RuntimeMethodExecutionContext**(): [`RuntimeMethodExecutionContext`](RuntimeMethodExecutionContext.md)

#### Returns

[`RuntimeMethodExecutionContext`](RuntimeMethodExecutionContext.md)

#### Inherited from

[`ProvableMethodExecutionContext`](../../common/classes/ProvableMethodExecutionContext.md).[`constructor`](../../common/classes/ProvableMethodExecutionContext.md#constructors)

## Properties

### id

> **id**: `string`

Defined in: packages/common/dist/zkProgrammable/ProvableMethodExecutionContext.d.ts:16

#### Inherited from

[`ProvableMethodExecutionContext`](../../common/classes/ProvableMethodExecutionContext.md).[`id`](../../common/classes/ProvableMethodExecutionContext.md#id)

***

### input

> **input**: `undefined` \| [`RuntimeMethodExecutionData`](../interfaces/RuntimeMethodExecutionData.md)

Defined in: [packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts:57](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts#L57)

***

### methods

> **methods**: `string`[] = `[]`

Defined in: [packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts:55](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts#L55)

#### Overrides

[`ProvableMethodExecutionContext`](../../common/classes/ProvableMethodExecutionContext.md).[`methods`](../../common/classes/ProvableMethodExecutionContext.md#methods)

***

### result

> **result**: [`RuntimeProvableMethodExecutionResult`](RuntimeProvableMethodExecutionResult.md)

Defined in: [packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts:62](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts#L62)

#### Overrides

[`ProvableMethodExecutionContext`](../../common/classes/ProvableMethodExecutionContext.md).[`result`](../../common/classes/ProvableMethodExecutionContext.md#result)

## Accessors

### isFinished

#### Get Signature

> **get** **isFinished**(): `boolean`

Defined in: packages/common/dist/zkProgrammable/ProvableMethodExecutionContext.d.ts:41

##### Returns

`boolean`

#### Inherited from

[`ProvableMethodExecutionContext`](../../common/classes/ProvableMethodExecutionContext.md).[`isFinished`](../../common/classes/ProvableMethodExecutionContext.md#isfinished)

***

### isTopLevel

#### Get Signature

> **get** **isTopLevel**(): `boolean`

Defined in: packages/common/dist/zkProgrammable/ProvableMethodExecutionContext.d.ts:40

##### Returns

`boolean`

#### Inherited from

[`ProvableMethodExecutionContext`](../../common/classes/ProvableMethodExecutionContext.md).[`isTopLevel`](../../common/classes/ProvableMethodExecutionContext.md#istoplevel)

## Methods

### addEvent()

> **addEvent**(`eventType`, `event`, `eventName`, `condition`): `void`

Defined in: [packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts:83](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts#L83)

#### Parameters

##### eventType

`FlexibleProvablePure`\<`any`\>

##### event

`any`

##### eventName

`string`

##### condition

`Bool` = `...`

#### Returns

`void`

***

### addStateTransition()

> **addStateTransition**\<`Value`\>(`stateTransition`): `void`

Defined in: [packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts:78](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts#L78)

Adds an in-method generated state transition to the current context

#### Type Parameters

• **Value**

#### Parameters

##### stateTransition

[`StateTransition`](StateTransition.md)\<`Value`\>

State transition to add to the context

#### Returns

`void`

***

### afterMethod()

> **afterMethod**(): `void`

Defined in: [packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts:152](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts#L152)

Removes the latest method from the execution context stack,
keeping track of the amount of 'unfinished' methods. Allowing
for the context to distinguish between top-level and nested method calls.

#### Returns

`void`

#### Overrides

[`ProvableMethodExecutionContext`](../../common/classes/ProvableMethodExecutionContext.md).[`afterMethod`](../../common/classes/ProvableMethodExecutionContext.md#aftermethod)

***

### beforeMethod()

> **beforeMethod**(`moduleName`, `methodName`, `args`): `void`

Defined in: packages/common/dist/zkProgrammable/ProvableMethodExecutionContext.d.ts:33

Adds a method to the method execution stack, reseting the execution context
in a case a new top-level (non nested) method call is made.

#### Parameters

##### moduleName

`string`

##### methodName

`string`

Name of the method being captured in the context

##### args

[`ArgumentTypes`](../../common/type-aliases/ArgumentTypes.md)

#### Returns

`void`

#### Inherited from

[`ProvableMethodExecutionContext`](../../common/classes/ProvableMethodExecutionContext.md).[`beforeMethod`](../../common/classes/ProvableMethodExecutionContext.md#beforemethod)

***

### clear()

> **clear**(): `void`

Defined in: [packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts:148](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts#L148)

Manually clears/resets the execution context

#### Returns

`void`

#### Overrides

[`ProvableMethodExecutionContext`](../../common/classes/ProvableMethodExecutionContext.md).[`clear`](../../common/classes/ProvableMethodExecutionContext.md#clear)

***

### current()

> **current**(): `object`

Defined in: [packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts:166](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts#L166)

Had to override current() otherwise it would not infer
the type of result correctly (parent type would be reused)

#### Returns

`object`

##### input

> **input**: `undefined` \| [`RuntimeMethodExecutionData`](../interfaces/RuntimeMethodExecutionData.md)

##### isFinished

> **isFinished**: `boolean`

##### isSimulated

> **isSimulated**: `boolean`

##### result

> **result**: [`RuntimeProvableMethodExecutionResult`](RuntimeProvableMethodExecutionResult.md)

#### Overrides

[`ProvableMethodExecutionContext`](../../common/classes/ProvableMethodExecutionContext.md).[`current`](../../common/classes/ProvableMethodExecutionContext.md#current)

***

### setProver()

> **setProver**(`prover`): `void`

Defined in: packages/common/dist/zkProgrammable/ProvableMethodExecutionContext.d.ts:26

Adds a method prover to the current execution context,
which can be collected and ran asynchronously at a later point in time.

#### Parameters

##### prover

() => `Promise`\<`Proof`\<`unknown`, `unknown`\>\>

#### Returns

`void`

#### Inherited from

[`ProvableMethodExecutionContext`](../../common/classes/ProvableMethodExecutionContext.md).[`setProver`](../../common/classes/ProvableMethodExecutionContext.md#setprover)

***

### setSimulated()

> **setSimulated**(`simulated`): `void`

Defined in: [packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts:141](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts#L141)

#### Parameters

##### simulated

`boolean`

#### Returns

`void`

***

### setStatus()

> **setStatus**(`status`): `void`

Defined in: [packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts:114](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts#L114)

#### Parameters

##### status

`Bool`

Execution status of the current method

#### Returns

`void`

***

### setStatusMessage()

> **setStatusMessage**(`message`?, `stackTrace`?): `void`

Defined in: [packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts:102](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts#L102)

#### Parameters

##### message?

`string`

Status message to acompany the current status

##### stackTrace?

`string`

#### Returns

`void`

***

### setup()

> **setup**(`input`): `void`

Defined in: [packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts:125](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts#L125)

#### Parameters

##### input

[`RuntimeMethodExecutionData`](../interfaces/RuntimeMethodExecutionData.md)

Input witness data required for a runtime execution

#### Returns

`void`

***

### witnessInput()

> **witnessInput**(): [`RuntimeMethodExecutionDataStruct`](RuntimeMethodExecutionDataStruct.md)

Defined in: [packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts:129](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts#L129)

#### Returns

[`RuntimeMethodExecutionDataStruct`](RuntimeMethodExecutionDataStruct.md)
