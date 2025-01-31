---
title: StateTransitionArrayMapper
---

[**@proto-kit/persistance**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/persistance](../README.md) / StateTransitionArrayMapper

# Class: StateTransitionArrayMapper

Defined in: [packages/persistance/src/services/prisma/mappers/StateTransitionMapper.ts:22](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/mappers/StateTransitionMapper.ts#L22)

## Implements

- `ObjectMapper`\<[`UntypedStateTransition`](../../sequencer/classes/UntypedStateTransition.md)[], `Prisma.JsonValue` \| `undefined`\>

## Constructors

### new StateTransitionArrayMapper()

> **new StateTransitionArrayMapper**(`stMapper`): [`StateTransitionArrayMapper`](StateTransitionArrayMapper.md)

Defined in: [packages/persistance/src/services/prisma/mappers/StateTransitionMapper.ts:26](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/mappers/StateTransitionMapper.ts#L26)

#### Parameters

##### stMapper

[`StateTransitionMapper`](StateTransitionMapper.md)

#### Returns

[`StateTransitionArrayMapper`](StateTransitionArrayMapper.md)

## Methods

### mapIn()

> **mapIn**(`input`): [`UntypedStateTransition`](../../sequencer/classes/UntypedStateTransition.md)[]

Defined in: [packages/persistance/src/services/prisma/mappers/StateTransitionMapper.ts:28](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/mappers/StateTransitionMapper.ts#L28)

#### Parameters

##### input

`undefined` | `JsonValue`

#### Returns

[`UntypedStateTransition`](../../sequencer/classes/UntypedStateTransition.md)[]

#### Implementation of

`ObjectMapper.mapIn`

***

### mapOut()

> **mapOut**(`input`): `JsonValue`

Defined in: [packages/persistance/src/services/prisma/mappers/StateTransitionMapper.ts:39](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/mappers/StateTransitionMapper.ts#L39)

#### Parameters

##### input

[`UntypedStateTransition`](../../sequencer/classes/UntypedStateTransition.md)[]

#### Returns

`JsonValue`

#### Implementation of

`ObjectMapper.mapOut`
