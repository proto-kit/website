---
title: BlockResultMapper
---

[**@proto-kit/persistance**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/persistance](../README.md) / BlockResultMapper

# Class: BlockResultMapper

Defined in: [packages/persistance/src/services/prisma/mappers/BlockResultMapper.ts:11](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/persistance/src/services/prisma/mappers/BlockResultMapper.ts#L11)

## Implements

- `ObjectMapper`\<[`BlockResult`](../../sequencer/interfaces/BlockResult.md), `DBBlockResult`\>

## Constructors

### new BlockResultMapper()

> **new BlockResultMapper**(`stArrayMapper`): [`BlockResultMapper`](BlockResultMapper.md)

Defined in: [packages/persistance/src/services/prisma/mappers/BlockResultMapper.ts:14](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/persistance/src/services/prisma/mappers/BlockResultMapper.ts#L14)

#### Parameters

##### stArrayMapper

[`StateTransitionArrayMapper`](StateTransitionArrayMapper.md)

#### Returns

[`BlockResultMapper`](BlockResultMapper.md)

## Methods

### mapIn()

> **mapIn**(`input`): [`BlockResult`](../../sequencer/interfaces/BlockResult.md)

Defined in: [packages/persistance/src/services/prisma/mappers/BlockResultMapper.ts:18](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/persistance/src/services/prisma/mappers/BlockResultMapper.ts#L18)

#### Parameters

##### input

###### afterNetworkState

`JsonValue`

###### blockHash

`string`

###### blockHashRoot

`string`

###### blockHashWitness

`JsonValue`

###### blockStateTransitions

`JsonValue`

###### stateRoot

`string`

#### Returns

[`BlockResult`](../../sequencer/interfaces/BlockResult.md)

#### Implementation of

`ObjectMapper.mapIn`

***

### mapOut()

> **mapOut**(`input`): `object`

Defined in: [packages/persistance/src/services/prisma/mappers/BlockResultMapper.ts:38](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/persistance/src/services/prisma/mappers/BlockResultMapper.ts#L38)

#### Parameters

##### input

[`BlockResult`](../../sequencer/interfaces/BlockResult.md)

#### Returns

`object`

##### afterNetworkState

> **afterNetworkState**: `JsonValue`

##### blockHash

> **blockHash**: `string`

##### blockHashRoot

> **blockHashRoot**: `string`

##### blockHashWitness

> **blockHashWitness**: `JsonValue`

##### blockStateTransitions

> **blockStateTransitions**: `JsonValue`

##### stateRoot

> **stateRoot**: `string`

#### Implementation of

`ObjectMapper.mapOut`
