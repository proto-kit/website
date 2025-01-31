---
title: TransactionProvingTaskParameterSerializer
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / TransactionProvingTaskParameterSerializer

# Class: TransactionProvingTaskParameterSerializer

Defined in: [packages/sequencer/src/protocol/production/tasks/serializers/TransactionProvingTaskParameterSerializer.ts:18](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/production/tasks/serializers/TransactionProvingTaskParameterSerializer.ts#L18)

## Implements

- [`TaskSerializer`](../interfaces/TaskSerializer.md)\<[`TransactionProvingTaskParameters`](../type-aliases/TransactionProvingTaskParameters.md)\>

## Constructors

### new TransactionProvingTaskParameterSerializer()

> **new TransactionProvingTaskParameterSerializer**(`stProofSerializer`, `runtimeProofSerializer`): [`TransactionProvingTaskParameterSerializer`](TransactionProvingTaskParameterSerializer.md)

Defined in: [packages/sequencer/src/protocol/production/tasks/serializers/TransactionProvingTaskParameterSerializer.ts:21](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/production/tasks/serializers/TransactionProvingTaskParameterSerializer.ts#L21)

#### Parameters

##### stProofSerializer

[`ProofTaskSerializer`](ProofTaskSerializer.md)\<[`StateTransitionProverPublicInput`](../../protocol/classes/StateTransitionProverPublicInput.md), [`StateTransitionProverPublicOutput`](../../protocol/classes/StateTransitionProverPublicOutput.md)\>

##### runtimeProofSerializer

[`ProofTaskSerializer`](ProofTaskSerializer.md)\<`undefined`, [`MethodPublicOutput`](../../protocol/classes/MethodPublicOutput.md)\>

#### Returns

[`TransactionProvingTaskParameterSerializer`](TransactionProvingTaskParameterSerializer.md)

## Methods

### fromJSON()

> **fromJSON**(`json`): `Promise`\<[`TransactionProvingTaskParameters`](../type-aliases/TransactionProvingTaskParameters.md)\>

Defined in: [packages/sequencer/src/protocol/production/tasks/serializers/TransactionProvingTaskParameterSerializer.ts:57](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/production/tasks/serializers/TransactionProvingTaskParameterSerializer.ts#L57)

#### Parameters

##### json

`string`

#### Returns

`Promise`\<[`TransactionProvingTaskParameters`](../type-aliases/TransactionProvingTaskParameters.md)\>

#### Implementation of

[`TaskSerializer`](../interfaces/TaskSerializer.md).[`fromJSON`](../interfaces/TaskSerializer.md#fromjson)

***

### toJSON()

> **toJSON**(`input`): `string`

Defined in: [packages/sequencer/src/protocol/production/tasks/serializers/TransactionProvingTaskParameterSerializer.ts:32](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/production/tasks/serializers/TransactionProvingTaskParameterSerializer.ts#L32)

#### Parameters

##### input

[`TransactionProvingTaskParameters`](../type-aliases/TransactionProvingTaskParameters.md)

#### Returns

`string`

#### Implementation of

[`TaskSerializer`](../interfaces/TaskSerializer.md).[`toJSON`](../interfaces/TaskSerializer.md#tojson)
