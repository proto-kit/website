---
title: StateTransitionParametersSerializer
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / StateTransitionParametersSerializer

# Class: StateTransitionParametersSerializer

Defined in: [packages/sequencer/src/protocol/production/tasks/serializers/StateTransitionParametersSerializer.ts:21](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/tasks/serializers/StateTransitionParametersSerializer.ts#L21)

## Implements

- [`TaskSerializer`](../interfaces/TaskSerializer.md)\<[`StateTransitionProofParameters`](../interfaces/StateTransitionProofParameters.md)\>

## Constructors

### new StateTransitionParametersSerializer()

> **new StateTransitionParametersSerializer**(): [`StateTransitionParametersSerializer`](StateTransitionParametersSerializer.md)

#### Returns

[`StateTransitionParametersSerializer`](StateTransitionParametersSerializer.md)

## Methods

### fromJSON()

> **fromJSON**(`json`): [`StateTransitionProofParameters`](../interfaces/StateTransitionProofParameters.md)

Defined in: [packages/sequencer/src/protocol/production/tasks/serializers/StateTransitionParametersSerializer.ts:43](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/tasks/serializers/StateTransitionParametersSerializer.ts#L43)

#### Parameters

##### json

`string`

#### Returns

[`StateTransitionProofParameters`](../interfaces/StateTransitionProofParameters.md)

#### Implementation of

[`TaskSerializer`](../interfaces/TaskSerializer.md).[`fromJSON`](../interfaces/TaskSerializer.md#fromjson)

***

### toJSON()

> **toJSON**(`parameters`): `string`

Defined in: [packages/sequencer/src/protocol/production/tasks/serializers/StateTransitionParametersSerializer.ts:24](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/tasks/serializers/StateTransitionParametersSerializer.ts#L24)

#### Parameters

##### parameters

[`StateTransitionProofParameters`](../interfaces/StateTransitionProofParameters.md)

#### Returns

`string`

#### Implementation of

[`TaskSerializer`](../interfaces/TaskSerializer.md).[`toJSON`](../interfaces/TaskSerializer.md#tojson)
