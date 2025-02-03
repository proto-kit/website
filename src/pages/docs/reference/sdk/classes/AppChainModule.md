---
title: AppChainModule
---

[**@proto-kit/sdk**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sdk](../README.md) / AppChainModule

# Class: AppChainModule\<Config\>

Defined in: [sdk/src/appChain/AppChainModule.ts:13](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sdk/src/appChain/AppChainModule.ts#L13)

Used by various module sub-types that may need to be configured

## Extends

- [`ConfigurableModule`](../../common/classes/ConfigurableModule.md)\<`Config`\>

## Extended by

- [`StateServiceQueryModule`](StateServiceQueryModule.md)
- [`BlockStorageNetworkStateModule`](BlockStorageNetworkStateModule.md)
- [`InMemorySigner`](InMemorySigner.md)
- [`TransactionSender`](../interfaces/TransactionSender.md)
- [`InMemoryTransactionSender`](InMemoryTransactionSender.md)
- [`AuroSigner`](AuroSigner.md)
- [`GraphqlClient`](GraphqlClient.md)
- [`GraphqlQueryTransportModule`](GraphqlQueryTransportModule.md)
- [`GraphqlTransactionSender`](GraphqlTransactionSender.md)
- [`GraphqlNetworkStateTransportModule`](GraphqlNetworkStateTransportModule.md)

## Type Parameters

• **Config** = [`NoConfig`](../../common/type-aliases/NoConfig.md)

## Constructors

### new AppChainModule()

> **new AppChainModule**\<`Config`\>(): [`AppChainModule`](AppChainModule.md)\<`Config`\>

#### Returns

[`AppChainModule`](AppChainModule.md)\<`Config`\>

#### Inherited from

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md).[`constructor`](../../common/classes/ConfigurableModule.md#constructors)

## Properties

### appChain?

> `optional` **appChain**: [`AppChain`](AppChain.md)\<[`RuntimeModulesRecord`](../../module/type-aliases/RuntimeModulesRecord.md), [`MandatoryProtocolModulesRecord`](../../protocol/type-aliases/MandatoryProtocolModulesRecord.md) & [`ProtocolModulesRecord`](../../protocol/type-aliases/ProtocolModulesRecord.md), [`SequencerModulesRecord`](../../sequencer/type-aliases/SequencerModulesRecord.md), [`AppChainModulesRecord`](../type-aliases/AppChainModulesRecord.md)\>

Defined in: [sdk/src/appChain/AppChainModule.ts:18](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sdk/src/appChain/AppChainModule.ts#L18)

***

### currentConfig

> `protected` **currentConfig**: `undefined` \| `Config`

Defined in: common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md).[`currentConfig`](../../common/classes/ConfigurableModule.md#currentconfig)

***

### presets

> `static` **presets**: [`Presets`](../../common/type-aliases/Presets.md)\<`unknown`\> = `{}`

Defined in: [sdk/src/appChain/AppChainModule.ts:16](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sdk/src/appChain/AppChainModule.ts#L16)

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

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md).[`config`](../../common/classes/ConfigurableModule.md#config)

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

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md).[`create`](../../common/classes/ConfigurableModule.md#create)
