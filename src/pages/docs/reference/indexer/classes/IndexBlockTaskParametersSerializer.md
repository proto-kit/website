---
title: IndexBlockTaskParametersSerializer
---

[**@proto-kit/indexer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/indexer](../README.md) / IndexBlockTaskParametersSerializer

# Class: IndexBlockTaskParametersSerializer

Defined in: [indexer/src/tasks/IndexBlockTaskParameters.ts:12](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/indexer/src/tasks/IndexBlockTaskParameters.ts#L12)

## Constructors

### new IndexBlockTaskParametersSerializer()

> **new IndexBlockTaskParametersSerializer**(`blockMapper`, `blockResultMapper`, `transactionResultMapper`): [`IndexBlockTaskParametersSerializer`](IndexBlockTaskParametersSerializer.md)

Defined in: [indexer/src/tasks/IndexBlockTaskParameters.ts:13](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/indexer/src/tasks/IndexBlockTaskParameters.ts#L13)

#### Parameters

##### blockMapper

[`BlockMapper`](../../persistance/classes/BlockMapper.md)

##### blockResultMapper

[`BlockResultMapper`](../../persistance/classes/BlockResultMapper.md)

##### transactionResultMapper

[`TransactionExecutionResultMapper`](../../persistance/classes/TransactionExecutionResultMapper.md)

#### Returns

[`IndexBlockTaskParametersSerializer`](IndexBlockTaskParametersSerializer.md)

## Properties

### blockMapper

> **blockMapper**: [`BlockMapper`](../../persistance/classes/BlockMapper.md)

Defined in: [indexer/src/tasks/IndexBlockTaskParameters.ts:14](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/indexer/src/tasks/IndexBlockTaskParameters.ts#L14)

***

### blockResultMapper

> **blockResultMapper**: [`BlockResultMapper`](../../persistance/classes/BlockResultMapper.md)

Defined in: [indexer/src/tasks/IndexBlockTaskParameters.ts:15](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/indexer/src/tasks/IndexBlockTaskParameters.ts#L15)

***

### transactionResultMapper

> **transactionResultMapper**: [`TransactionExecutionResultMapper`](../../persistance/classes/TransactionExecutionResultMapper.md)

Defined in: [indexer/src/tasks/IndexBlockTaskParameters.ts:16](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/indexer/src/tasks/IndexBlockTaskParameters.ts#L16)

## Methods

### fromJSON()

> **fromJSON**(`json`): [`IndexBlockTaskParameters`](../interfaces/IndexBlockTaskParameters.md)

Defined in: [indexer/src/tasks/IndexBlockTaskParameters.ts:29](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/indexer/src/tasks/IndexBlockTaskParameters.ts#L29)

#### Parameters

##### json

`string`

#### Returns

[`IndexBlockTaskParameters`](../interfaces/IndexBlockTaskParameters.md)

***

### toJSON()

> **toJSON**(`parameters`): `string`

Defined in: [indexer/src/tasks/IndexBlockTaskParameters.ts:19](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/indexer/src/tasks/IndexBlockTaskParameters.ts#L19)

#### Parameters

##### parameters

[`IndexBlockTaskParameters`](../interfaces/IndexBlockTaskParameters.md)

#### Returns

`string`
