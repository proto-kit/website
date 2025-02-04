---
title: TransactionFeeHook
---

[**@proto-kit/library**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/library](../README.md) / TransactionFeeHook

# Class: TransactionFeeHook

Defined in: [packages/library/src/hooks/TransactionFeeHook.ts:51](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/library/src/hooks/TransactionFeeHook.ts#L51)

Transaction hook for deducting transaction fees from the sender's balance.

## Extends

- [`ProvableTransactionHook`](../../protocol/classes/ProvableTransactionHook.md)\<[`TransactionFeeHookConfig`](../interfaces/TransactionFeeHookConfig.md)\>

## Constructors

### new TransactionFeeHook()

> **new TransactionFeeHook**(`runtime`, `balances`): [`TransactionFeeHook`](TransactionFeeHook.md)

Defined in: [packages/library/src/hooks/TransactionFeeHook.ts:52](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/library/src/hooks/TransactionFeeHook.ts#L52)

#### Parameters

##### runtime

[`Runtime`](../../module/classes/Runtime.md)\<[`RuntimeModulesRecord`](../../module/type-aliases/RuntimeModulesRecord.md)\>

##### balances

`Balances`

#### Returns

[`TransactionFeeHook`](TransactionFeeHook.md)

#### Overrides

[`ProvableTransactionHook`](../../protocol/classes/ProvableTransactionHook.md).[`constructor`](../../protocol/classes/ProvableTransactionHook.md#constructors)

## Properties

### balances

> **balances**: `Balances`

Defined in: [packages/library/src/hooks/TransactionFeeHook.ts:55](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/library/src/hooks/TransactionFeeHook.ts#L55)

***

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`TransactionFeeHookConfig`](../interfaces/TransactionFeeHookConfig.md)

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`ProvableTransactionHook`](../../protocol/classes/ProvableTransactionHook.md).[`currentConfig`](../../protocol/classes/ProvableTransactionHook.md#currentconfig)

***

### name?

> `optional` **name**: `string`

Defined in: packages/protocol/dist/protocol/TransitioningProtocolModule.d.ts:8

#### Inherited from

[`ProvableTransactionHook`](../../protocol/classes/ProvableTransactionHook.md).[`name`](../../protocol/classes/ProvableTransactionHook.md#name)

***

### persistedFeeAnalyzer

> `protected` **persistedFeeAnalyzer**: `undefined` \| [`RuntimeFeeAnalyzerService`](RuntimeFeeAnalyzerService.md) = `undefined`

Defined in: [packages/library/src/hooks/TransactionFeeHook.ts:60](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/library/src/hooks/TransactionFeeHook.ts#L60)

***

### protocol?

> `optional` **protocol**: [`ProtocolEnvironment`](../../protocol/interfaces/ProtocolEnvironment.md)

Defined in: packages/protocol/dist/protocol/ProtocolModule.d.ts:4

#### Inherited from

[`ProvableTransactionHook`](../../protocol/classes/ProvableTransactionHook.md).[`protocol`](../../protocol/classes/ProvableTransactionHook.md#protocol)

***

### runtime

> **runtime**: [`Runtime`](../../module/classes/Runtime.md)\<[`RuntimeModulesRecord`](../../module/type-aliases/RuntimeModulesRecord.md)\>

Defined in: [packages/library/src/hooks/TransactionFeeHook.ts:54](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/library/src/hooks/TransactionFeeHook.ts#L54)

## Accessors

### areProofsEnabled

#### Get Signature

> **get** **areProofsEnabled**(): `undefined` \| [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

Defined in: packages/protocol/dist/protocol/ProtocolModule.d.ts:5

##### Returns

`undefined` \| [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

#### Inherited from

[`ProvableTransactionHook`](../../protocol/classes/ProvableTransactionHook.md).[`areProofsEnabled`](../../protocol/classes/ProvableTransactionHook.md#areproofsenabled)

***

### config

#### Get Signature

> **get** **config**(): [`TransactionFeeHookConfig`](../interfaces/TransactionFeeHookConfig.md)

Defined in: [packages/library/src/hooks/TransactionFeeHook.ts:86](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/library/src/hooks/TransactionFeeHook.ts#L86)

##### Returns

[`TransactionFeeHookConfig`](../interfaces/TransactionFeeHookConfig.md)

#### Set Signature

> **set** **config**(`value`): `void`

Defined in: [packages/library/src/hooks/TransactionFeeHook.ts:91](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/library/src/hooks/TransactionFeeHook.ts#L91)

##### Parameters

###### value

[`TransactionFeeHookConfig`](../interfaces/TransactionFeeHookConfig.md)

##### Returns

`void`

#### Overrides

[`ProvableTransactionHook`](../../protocol/classes/ProvableTransactionHook.md).[`config`](../../protocol/classes/ProvableTransactionHook.md#config)

***

### feeAnalyzer

#### Get Signature

> **get** **feeAnalyzer**(): [`RuntimeFeeAnalyzerService`](RuntimeFeeAnalyzerService.md)

Defined in: [packages/library/src/hooks/TransactionFeeHook.ts:95](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/library/src/hooks/TransactionFeeHook.ts#L95)

##### Returns

[`RuntimeFeeAnalyzerService`](RuntimeFeeAnalyzerService.md)

## Methods

### create()

> **create**(`childContainerProvider`): `void`

Defined in: packages/protocol/dist/protocol/ProtocolModule.d.ts:6

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../../common/interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Inherited from

[`ProvableTransactionHook`](../../protocol/classes/ProvableTransactionHook.md).[`create`](../../protocol/classes/ProvableTransactionHook.md#create)

***

### getFee()

> **getFee**(`feeConfig`): [`UInt`](UInt.md)\<`64`\>

Defined in: [packages/library/src/hooks/TransactionFeeHook.ts:111](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/library/src/hooks/TransactionFeeHook.ts#L111)

#### Parameters

##### feeConfig

[`MethodFeeConfigData`](MethodFeeConfigData.md)

#### Returns

[`UInt`](UInt.md)\<`64`\>

***

### onTransaction()

> **onTransaction**(`executionData`): `Promise`\<`void`\>

Defined in: [packages/library/src/hooks/TransactionFeeHook.ts:125](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/library/src/hooks/TransactionFeeHook.ts#L125)

Determine the transaction fee for the given transaction, and transfer it
from the transaction sender to the fee recipient.

#### Parameters

##### executionData

[`BlockProverExecutionData`](../../protocol/classes/BlockProverExecutionData.md)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`ProvableTransactionHook`](../../protocol/classes/ProvableTransactionHook.md).[`onTransaction`](../../protocol/classes/ProvableTransactionHook.md#ontransaction)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/library/src/hooks/TransactionFeeHook.ts:80](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/library/src/hooks/TransactionFeeHook.ts#L80)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`ProvableTransactionHook`](../../protocol/classes/ProvableTransactionHook.md).[`start`](../../protocol/classes/ProvableTransactionHook.md#start)

***

### transferFee()

> **transferFee**(`from`, `fee`): `Promise`\<`void`\>

Defined in: [packages/library/src/hooks/TransactionFeeHook.ts:102](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/library/src/hooks/TransactionFeeHook.ts#L102)

#### Parameters

##### from

[`PublicKeyOption`](../../protocol/classes/PublicKeyOption.md)

##### fee

[`UInt64`](UInt64.md)

#### Returns

`Promise`\<`void`\>

***

### verifyConfig()

> **verifyConfig**(): `void`

Defined in: [packages/library/src/hooks/TransactionFeeHook.ts:65](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/library/src/hooks/TransactionFeeHook.ts#L65)

#### Returns

`void`
