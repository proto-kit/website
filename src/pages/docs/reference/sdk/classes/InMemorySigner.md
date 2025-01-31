---
title: InMemorySigner
---

[**@proto-kit/sdk**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sdk](../README.md) / InMemorySigner

# Class: InMemorySigner

Defined in: [sdk/src/transaction/InMemorySigner.ts:15](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/transaction/InMemorySigner.ts#L15)

Used by various module sub-types that may need to be configured

## Extends

- [`AppChainModule`](AppChainModule.md)\<[`InMemorySignerConfig`](../interfaces/InMemorySignerConfig.md)\>

## Implements

- [`Signer`](../interfaces/Signer.md)

## Constructors

### new InMemorySigner()

> **new InMemorySigner**(): [`InMemorySigner`](InMemorySigner.md)

Defined in: [sdk/src/transaction/InMemorySigner.ts:19](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/transaction/InMemorySigner.ts#L19)

#### Returns

[`InMemorySigner`](InMemorySigner.md)

#### Overrides

[`AppChainModule`](AppChainModule.md).[`constructor`](AppChainModule.md#constructors)

## Properties

### appChain?

> `optional` **appChain**: [`AppChain`](AppChain.md)\<[`RuntimeModulesRecord`](../../module/type-aliases/RuntimeModulesRecord.md), [`MandatoryProtocolModulesRecord`](../../protocol/type-aliases/MandatoryProtocolModulesRecord.md) & [`ProtocolModulesRecord`](../../protocol/type-aliases/ProtocolModulesRecord.md), [`SequencerModulesRecord`](../../sequencer/type-aliases/SequencerModulesRecord.md), [`AppChainModulesRecord`](../type-aliases/AppChainModulesRecord.md)\>

Defined in: [sdk/src/appChain/AppChainModule.ts:18](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/appChain/AppChainModule.ts#L18)

#### Inherited from

[`AppChainModule`](AppChainModule.md).[`appChain`](AppChainModule.md#appchain)

***

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`InMemorySignerConfig`](../interfaces/InMemorySignerConfig.md)

Defined in: common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`AppChainModule`](AppChainModule.md).[`currentConfig`](AppChainModule.md#currentconfig)

***

### presets

> `static` **presets**: [`Presets`](../../common/type-aliases/Presets.md)\<`unknown`\> = `{}`

Defined in: [sdk/src/appChain/AppChainModule.ts:16](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/appChain/AppChainModule.ts#L16)

#### Inherited from

[`AppChainModule`](AppChainModule.md).[`presets`](AppChainModule.md#presets)

## Accessors

### config

#### Get Signature

> **get** **config**(): `Config`

Defined in: common/dist/config/ConfigurableModule.d.ts:18

##### Returns

`Config`

#### Set Signature

> **set** **config**(`config`): `void`

Defined in: common/dist/config/ConfigurableModule.d.ts:19

##### Parameters

###### config

`Config`

##### Returns

`void`

#### Inherited from

[`AppChainModule`](AppChainModule.md).[`config`](AppChainModule.md#config)

## Methods

### create()

> **create**(`childContainerProvider`): `void`

Defined in: common/dist/config/ConfigurableModule.d.ts:20

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../../common/interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Inherited from

[`AppChainModule`](AppChainModule.md).[`create`](AppChainModule.md#create)

***

### sign()

> **sign**(`signatureData`): `Promise`\<`Signature`\>

Defined in: [sdk/src/transaction/InMemorySigner.ts:23](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/transaction/InMemorySigner.ts#L23)

#### Parameters

##### signatureData

`Field`[]

#### Returns

`Promise`\<`Signature`\>

#### Implementation of

[`Signer`](../interfaces/Signer.md).[`sign`](../interfaces/Signer.md#sign)
