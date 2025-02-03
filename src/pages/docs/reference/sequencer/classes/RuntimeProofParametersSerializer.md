---
title: RuntimeProofParametersSerializer
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / RuntimeProofParametersSerializer

# Class: RuntimeProofParametersSerializer

Defined in: [packages/sequencer/src/protocol/production/tasks/serializers/RuntimeProofParametersSerializer.ts:11](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/tasks/serializers/RuntimeProofParametersSerializer.ts#L11)

## Implements

- [`TaskSerializer`](../interfaces/TaskSerializer.md)\<[`RuntimeProofParameters`](../interfaces/RuntimeProofParameters.md)\>

## Constructors

### new RuntimeProofParametersSerializer()

> **new RuntimeProofParametersSerializer**(): [`RuntimeProofParametersSerializer`](RuntimeProofParametersSerializer.md)

#### Returns

[`RuntimeProofParametersSerializer`](RuntimeProofParametersSerializer.md)

## Methods

### fromJSON()

> **fromJSON**(`json`): [`RuntimeProofParameters`](../interfaces/RuntimeProofParameters.md)

Defined in: [packages/sequencer/src/protocol/production/tasks/serializers/RuntimeProofParametersSerializer.ts:29](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/tasks/serializers/RuntimeProofParametersSerializer.ts#L29)

#### Parameters

##### json

`string`

#### Returns

[`RuntimeProofParameters`](../interfaces/RuntimeProofParameters.md)

#### Implementation of

[`TaskSerializer`](../interfaces/TaskSerializer.md).[`fromJSON`](../interfaces/TaskSerializer.md#fromjson)

***

### toJSON()

> **toJSON**(`parameters`): `string`

Defined in: [packages/sequencer/src/protocol/production/tasks/serializers/RuntimeProofParametersSerializer.ts:14](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/tasks/serializers/RuntimeProofParametersSerializer.ts#L14)

#### Parameters

##### parameters

[`RuntimeProofParameters`](../interfaces/RuntimeProofParameters.md)

#### Returns

`string`

#### Implementation of

[`TaskSerializer`](../interfaces/TaskSerializer.md).[`toJSON`](../interfaces/TaskSerializer.md#tojson)
