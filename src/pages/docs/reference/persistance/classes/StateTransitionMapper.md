---
title: StateTransitionMapper
---

[**@proto-kit/persistance**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/persistance](../README.md) / StateTransitionMapper

# Class: StateTransitionMapper

Defined in: [packages/persistance/src/services/prisma/mappers/StateTransitionMapper.ts:8](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/persistance/src/services/prisma/mappers/StateTransitionMapper.ts#L8)

## Implements

- `ObjectMapper`\<[`UntypedStateTransition`](../../sequencer/classes/UntypedStateTransition.md), `Prisma.JsonObject`\>

## Constructors

### new StateTransitionMapper()

> **new StateTransitionMapper**(): [`StateTransitionMapper`](StateTransitionMapper.md)

#### Returns

[`StateTransitionMapper`](StateTransitionMapper.md)

## Methods

### mapIn()

> **mapIn**(`input`): [`UntypedStateTransition`](../../sequencer/classes/UntypedStateTransition.md)

Defined in: [packages/persistance/src/services/prisma/mappers/StateTransitionMapper.ts:11](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/persistance/src/services/prisma/mappers/StateTransitionMapper.ts#L11)

#### Parameters

##### input

`JsonObject`

#### Returns

[`UntypedStateTransition`](../../sequencer/classes/UntypedStateTransition.md)

#### Implementation of

`ObjectMapper.mapIn`

***

### mapOut()

> **mapOut**(`input`): `JsonObject`

Defined in: [packages/persistance/src/services/prisma/mappers/StateTransitionMapper.ts:16](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/persistance/src/services/prisma/mappers/StateTransitionMapper.ts#L16)

#### Parameters

##### input

[`UntypedStateTransition`](../../sequencer/classes/UntypedStateTransition.md)

#### Returns

`JsonObject`

#### Implementation of

`ObjectMapper.mapOut`
