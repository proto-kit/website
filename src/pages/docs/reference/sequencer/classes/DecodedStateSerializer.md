---
title: DecodedStateSerializer
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / DecodedStateSerializer

# Class: DecodedStateSerializer

Defined in: [packages/sequencer/src/protocol/production/tasks/serializers/DecodedStateSerializer.ts:6](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/tasks/serializers/DecodedStateSerializer.ts#L6)

## Constructors

### new DecodedStateSerializer()

> **new DecodedStateSerializer**(): [`DecodedStateSerializer`](DecodedStateSerializer.md)

#### Returns

[`DecodedStateSerializer`](DecodedStateSerializer.md)

## Methods

### fromJSON()

> `static` **fromJSON**(`json`): [`TaskStateRecord`](../type-aliases/TaskStateRecord.md)

Defined in: [packages/sequencer/src/protocol/production/tasks/serializers/DecodedStateSerializer.ts:7](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/tasks/serializers/DecodedStateSerializer.ts#L7)

#### Parameters

##### json

[`JSONEncodableState`](../type-aliases/JSONEncodableState.md)

#### Returns

[`TaskStateRecord`](../type-aliases/TaskStateRecord.md)

***

### toJSON()

> `static` **toJSON**(`input`): [`JSONEncodableState`](../type-aliases/JSONEncodableState.md)

Defined in: [packages/sequencer/src/protocol/production/tasks/serializers/DecodedStateSerializer.ts:16](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/tasks/serializers/DecodedStateSerializer.ts#L16)

#### Parameters

##### input

[`TaskStateRecord`](../type-aliases/TaskStateRecord.md)

#### Returns

[`JSONEncodableState`](../type-aliases/JSONEncodableState.md)
