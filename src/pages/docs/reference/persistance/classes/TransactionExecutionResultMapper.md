---
title: TransactionExecutionResultMapper
---

[**@proto-kit/persistance**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/persistance](../README.md) / TransactionExecutionResultMapper

# Class: TransactionExecutionResultMapper

Defined in: [packages/persistance/src/services/prisma/mappers/TransactionMapper.ts:49](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/persistance/src/services/prisma/mappers/TransactionMapper.ts#L49)

## Implements

- `ObjectMapper`\<[`TransactionExecutionResult`](../../sequencer/interfaces/TransactionExecutionResult.md), \[`Omit`\<`DBTransactionExecutionResult`, `"blockHash"`\>, `DBTransaction`\]\>

## Constructors

### new TransactionExecutionResultMapper()

> **new TransactionExecutionResultMapper**(`transactionMapper`, `stArrayMapper`, `eventArrayMapper`): [`TransactionExecutionResultMapper`](TransactionExecutionResultMapper.md)

Defined in: [packages/persistance/src/services/prisma/mappers/TransactionMapper.ts:56](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/persistance/src/services/prisma/mappers/TransactionMapper.ts#L56)

#### Parameters

##### transactionMapper

[`TransactionMapper`](TransactionMapper.md)

##### stArrayMapper

[`StateTransitionArrayMapper`](StateTransitionArrayMapper.md)

##### eventArrayMapper

`EventArrayMapper`

#### Returns

[`TransactionExecutionResultMapper`](TransactionExecutionResultMapper.md)

## Methods

### mapIn()

> **mapIn**(`input`): [`TransactionExecutionResult`](../../sequencer/interfaces/TransactionExecutionResult.md)

Defined in: [packages/persistance/src/services/prisma/mappers/TransactionMapper.ts:62](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/persistance/src/services/prisma/mappers/TransactionMapper.ts#L62)

#### Parameters

##### input

\[`Omit`\<\{ `blockHash`: `string`; `events`: `JsonValue`; `protocolTransitions`: `JsonValue`; `stateTransitions`: `JsonValue`; `status`: `boolean`; `statusMessage`: `null` \| `string`; `txHash`: `string`; \}, `"blockHash"`\>, \{ `argsFields`: `string`[]; `auxiliaryData`: `string`[]; `hash`: `string`; `isMessage`: `boolean`; `methodId`: `string`; `nonce`: `string`; `sender`: `string`; `signature_r`: `string`; `signature_s`: `string`; \}\]

#### Returns

[`TransactionExecutionResult`](../../sequencer/interfaces/TransactionExecutionResult.md)

#### Implementation of

`ObjectMapper.mapIn`

***

### mapOut()

> **mapOut**(`input`): \[`Omit`\<\{ `blockHash`: `string`; `events`: `JsonValue`; `protocolTransitions`: `JsonValue`; `stateTransitions`: `JsonValue`; `status`: `boolean`; `statusMessage`: `null` \| `string`; `txHash`: `string`; \}, `"blockHash"`\>, \{ `argsFields`: `string`[]; `auxiliaryData`: `string`[]; `hash`: `string`; `isMessage`: `boolean`; `methodId`: `string`; `nonce`: `string`; `sender`: `string`; `signature_r`: `string`; `signature_s`: `string`; \}\]

Defined in: [packages/persistance/src/services/prisma/mappers/TransactionMapper.ts:80](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/persistance/src/services/prisma/mappers/TransactionMapper.ts#L80)

#### Parameters

##### input

[`TransactionExecutionResult`](../../sequencer/interfaces/TransactionExecutionResult.md)

#### Returns

\[`Omit`\<\{ `blockHash`: `string`; `events`: `JsonValue`; `protocolTransitions`: `JsonValue`; `stateTransitions`: `JsonValue`; `status`: `boolean`; `statusMessage`: `null` \| `string`; `txHash`: `string`; \}, `"blockHash"`\>, \{ `argsFields`: `string`[]; `auxiliaryData`: `string`[]; `hash`: `string`; `isMessage`: `boolean`; `methodId`: `string`; `nonce`: `string`; `sender`: `string`; `signature_r`: `string`; `signature_s`: `string`; \}\]

#### Implementation of

`ObjectMapper.mapOut`
