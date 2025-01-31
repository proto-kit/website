---
title: RuntimeFeeAnalyzerService
---

[**@proto-kit/library**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/library](../README.md) / RuntimeFeeAnalyzerService

# Class: RuntimeFeeAnalyzerService

Defined in: [packages/library/src/hooks/RuntimeFeeAnalyzerService.ts:56](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/hooks/RuntimeFeeAnalyzerService.ts#L56)

Used by various module sub-types that may need to be configured

## Extends

- [`ConfigurableModule`](../../common/classes/ConfigurableModule.md)\<[`RuntimeFeeAnalyzerServiceConfig`](../interfaces/RuntimeFeeAnalyzerServiceConfig.md)\>

## Constructors

### new RuntimeFeeAnalyzerService()

> **new RuntimeFeeAnalyzerService**(`runtime`): [`RuntimeFeeAnalyzerService`](RuntimeFeeAnalyzerService.md)

Defined in: [packages/library/src/hooks/RuntimeFeeAnalyzerService.ts:67](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/hooks/RuntimeFeeAnalyzerService.ts#L67)

#### Parameters

##### runtime

[`Runtime`](../../module/classes/Runtime.md)\<[`RuntimeModulesRecord`](../../module/type-aliases/RuntimeModulesRecord.md)\>

#### Returns

[`RuntimeFeeAnalyzerService`](RuntimeFeeAnalyzerService.md)

#### Overrides

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md).[`constructor`](../../common/classes/ConfigurableModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`RuntimeFeeAnalyzerServiceConfig`](../interfaces/RuntimeFeeAnalyzerServiceConfig.md)

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md).[`currentConfig`](../../common/classes/ConfigurableModule.md#currentconfig)

***

### runtime

> **runtime**: [`Runtime`](../../module/classes/Runtime.md)\<[`RuntimeModulesRecord`](../../module/type-aliases/RuntimeModulesRecord.md)\>

Defined in: [packages/library/src/hooks/RuntimeFeeAnalyzerService.ts:68](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/hooks/RuntimeFeeAnalyzerService.ts#L68)

## Accessors

### config

#### Get Signature

> **get** **config**(): `Config`

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:18

##### Returns

`Config`

#### Set Signature

> **set** **config**(`config`): `void`

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:19

##### Parameters

###### config

`Config`

##### Returns

`void`

#### Inherited from

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md).[`config`](../../common/classes/ConfigurableModule.md#config)

## Methods

### create()

> **create**(`childContainerProvider`): `void`

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:20

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../../common/interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Inherited from

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md).[`create`](../../common/classes/ConfigurableModule.md#create)

***

### getFeeConfig()

> **getFeeConfig**(`methodId`): [`MethodFeeConfigData`](MethodFeeConfigData.md)

Defined in: [packages/library/src/hooks/RuntimeFeeAnalyzerService.ts:169](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/hooks/RuntimeFeeAnalyzerService.ts#L169)

#### Parameters

##### methodId

`bigint`

#### Returns

[`MethodFeeConfigData`](MethodFeeConfigData.md)

***

### getFeeTree()

> **getFeeTree**(): `object`

Defined in: [packages/library/src/hooks/RuntimeFeeAnalyzerService.ts:161](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/hooks/RuntimeFeeAnalyzerService.ts#L161)

#### Returns

`object`

##### indexes

> **indexes**: [`FeeIndexes`](../interfaces/FeeIndexes.md)

##### tree

> **tree**: [`FeeTree`](FeeTree.md)

##### values

> **values**: [`FeeTreeValues`](../interfaces/FeeTreeValues.md)

***

### getRoot()

> **getRoot**(): `bigint`

Defined in: [packages/library/src/hooks/RuntimeFeeAnalyzerService.ts:185](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/hooks/RuntimeFeeAnalyzerService.ts#L185)

#### Returns

`bigint`

***

### getWitness()

> **getWitness**(`methodId`): [`AbstractMerkleWitness`](../../common/interfaces/AbstractMerkleWitness.md)

Defined in: [packages/library/src/hooks/RuntimeFeeAnalyzerService.ts:180](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/hooks/RuntimeFeeAnalyzerService.ts#L180)

#### Parameters

##### methodId

`bigint`

#### Returns

[`AbstractMerkleWitness`](../../common/interfaces/AbstractMerkleWitness.md)

***

### initializeFeeTree()

> **initializeFeeTree**(): `Promise`\<`void`\>

Defined in: [packages/library/src/hooks/RuntimeFeeAnalyzerService.ts:73](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/hooks/RuntimeFeeAnalyzerService.ts#L73)

#### Returns

`Promise`\<`void`\>

***

### getWitnessType()

> `static` **getWitnessType**(): [`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`AbstractMerkleWitness`](../../common/interfaces/AbstractMerkleWitness.md)\> & *typeof* `StructTemplate` & `object`

Defined in: [packages/library/src/hooks/RuntimeFeeAnalyzerService.ts:57](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/hooks/RuntimeFeeAnalyzerService.ts#L57)

#### Returns

[`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`AbstractMerkleWitness`](../../common/interfaces/AbstractMerkleWitness.md)\> & *typeof* `StructTemplate` & `object`
