---
title: NewBlockProvingParametersSerializer
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / NewBlockProvingParametersSerializer

# Class: NewBlockProvingParametersSerializer

Defined in: [packages/sequencer/src/protocol/production/tasks/serializers/NewBlockProvingParametersSerializer.ts:38](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/tasks/serializers/NewBlockProvingParametersSerializer.ts#L38)

## Implements

- [`TaskSerializer`](../interfaces/TaskSerializer.md)\<`NewBlockPayload`\>

## Constructors

### new NewBlockProvingParametersSerializer()

> **new NewBlockProvingParametersSerializer**(`stProofSerializer`, `blockProofSerializer`): [`NewBlockProvingParametersSerializer`](NewBlockProvingParametersSerializer.md)

Defined in: [packages/sequencer/src/protocol/production/tasks/serializers/NewBlockProvingParametersSerializer.ts:41](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/tasks/serializers/NewBlockProvingParametersSerializer.ts#L41)

#### Parameters

##### stProofSerializer

[`ProofTaskSerializer`](ProofTaskSerializer.md)\<[`StateTransitionProverPublicInput`](../../protocol/classes/StateTransitionProverPublicInput.md), [`StateTransitionProverPublicOutput`](../../protocol/classes/StateTransitionProverPublicOutput.md)\>

##### blockProofSerializer

[`ProofTaskSerializer`](ProofTaskSerializer.md)\<[`BlockProverPublicInput`](../../protocol/classes/BlockProverPublicInput.md), [`BlockProverPublicOutput`](../../protocol/classes/BlockProverPublicOutput.md)\>

#### Returns

[`NewBlockProvingParametersSerializer`](NewBlockProvingParametersSerializer.md)

## Methods

### fromJSON()

> **fromJSON**(`json`): `Promise`\<`NewBlockPayload`\>

Defined in: [packages/sequencer/src/protocol/production/tasks/serializers/NewBlockProvingParametersSerializer.ts:73](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/tasks/serializers/NewBlockProvingParametersSerializer.ts#L73)

#### Parameters

##### json

`string`

#### Returns

`Promise`\<`NewBlockPayload`\>

#### Implementation of

[`TaskSerializer`](../interfaces/TaskSerializer.md).[`fromJSON`](../interfaces/TaskSerializer.md#fromjson)

***

### toJSON()

> **toJSON**(`input`): `string`

Defined in: [packages/sequencer/src/protocol/production/tasks/serializers/NewBlockProvingParametersSerializer.ts:52](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/tasks/serializers/NewBlockProvingParametersSerializer.ts#L52)

#### Parameters

##### input

`NewBlockPayload`

#### Returns

`string`

#### Implementation of

[`TaskSerializer`](../interfaces/TaskSerializer.md).[`toJSON`](../interfaces/TaskSerializer.md#tojson)
