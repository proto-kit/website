---
title: TransactionFeeHookConfig
---

[**@proto-kit/library**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/library](../README.md) / TransactionFeeHookConfig

# Interface: TransactionFeeHookConfig

Defined in: [packages/library/src/hooks/TransactionFeeHook.ts:33](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/hooks/TransactionFeeHook.ts#L33)

## Extends

- [`RuntimeFeeAnalyzerServiceConfig`](RuntimeFeeAnalyzerServiceConfig.md)

## Properties

### baseFee

> **baseFee**: `bigint`

Defined in: [packages/library/src/hooks/RuntimeFeeAnalyzerService.ts:49](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/hooks/RuntimeFeeAnalyzerService.ts#L49)

#### Inherited from

[`RuntimeFeeAnalyzerServiceConfig`](RuntimeFeeAnalyzerServiceConfig.md).[`baseFee`](RuntimeFeeAnalyzerServiceConfig.md#basefee)

***

### feeRecipient

> **feeRecipient**: `string`

Defined in: [packages/library/src/hooks/RuntimeFeeAnalyzerService.ts:48](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/hooks/RuntimeFeeAnalyzerService.ts#L48)

#### Inherited from

[`RuntimeFeeAnalyzerServiceConfig`](RuntimeFeeAnalyzerServiceConfig.md).[`feeRecipient`](RuntimeFeeAnalyzerServiceConfig.md#feerecipient)

***

### methods

> **methods**: `object`

Defined in: [packages/library/src/hooks/RuntimeFeeAnalyzerService.ts:51](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/hooks/RuntimeFeeAnalyzerService.ts#L51)

#### Index Signature

\[`methodId`: `string`\]: `Partial`\<[`MethodFeeConfig`](MethodFeeConfig.md)\>

#### Inherited from

[`RuntimeFeeAnalyzerServiceConfig`](RuntimeFeeAnalyzerServiceConfig.md).[`methods`](RuntimeFeeAnalyzerServiceConfig.md#methods)

***

### perWeightUnitFee

> **perWeightUnitFee**: `bigint`

Defined in: [packages/library/src/hooks/RuntimeFeeAnalyzerService.ts:50](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/hooks/RuntimeFeeAnalyzerService.ts#L50)

#### Inherited from

[`RuntimeFeeAnalyzerServiceConfig`](RuntimeFeeAnalyzerServiceConfig.md).[`perWeightUnitFee`](RuntimeFeeAnalyzerServiceConfig.md#perweightunitfee)

***

### tokenId

> **tokenId**: `bigint`

Defined in: [packages/library/src/hooks/RuntimeFeeAnalyzerService.ts:47](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/hooks/RuntimeFeeAnalyzerService.ts#L47)

#### Inherited from

[`RuntimeFeeAnalyzerServiceConfig`](RuntimeFeeAnalyzerServiceConfig.md).[`tokenId`](RuntimeFeeAnalyzerServiceConfig.md#tokenid)
