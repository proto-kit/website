---
title: TransactionSender
---

[**@proto-kit/sdk**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sdk](../README.md) / TransactionSender

# Interface: TransactionSender

Defined in: [sdk/src/transaction/InMemoryTransactionSender.ts:11](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sdk/src/transaction/InMemoryTransactionSender.ts#L11)

Used by various module sub-types that may need to be configured

## Extends

- [`AppChainModule`](../classes/AppChainModule.md)\<`unknown`\>

## Properties

### appChain?

> `optional` **appChain**: [`AppChain`](../classes/AppChain.md)\<[`RuntimeModulesRecord`](../../module/type-aliases/RuntimeModulesRecord.md), [`MandatoryProtocolModulesRecord`](../../protocol/type-aliases/MandatoryProtocolModulesRecord.md) & [`ProtocolModulesRecord`](../../protocol/type-aliases/ProtocolModulesRecord.md), [`SequencerModulesRecord`](../../sequencer/type-aliases/SequencerModulesRecord.md), [`AppChainModulesRecord`](../type-aliases/AppChainModulesRecord.md)\>

Defined in: [sdk/src/appChain/AppChainModule.ts:18](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sdk/src/appChain/AppChainModule.ts#L18)

#### Inherited from

[`AppChainModule`](../classes/AppChainModule.md).[`appChain`](../classes/AppChainModule.md#appchain)

***

### currentConfig

> `protected` **currentConfig**: `unknown`

Defined in: common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`AppChainModule`](../classes/AppChainModule.md).[`currentConfig`](../classes/AppChainModule.md#currentconfig)

***

### send()

> **send**: (`transaction`) => `Promise`\<`void`\>

Defined in: [sdk/src/transaction/InMemoryTransactionSender.ts:12](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sdk/src/transaction/InMemoryTransactionSender.ts#L12)

#### Parameters

##### transaction

[`PendingTransaction`](../../sequencer/classes/PendingTransaction.md)

#### Returns

`Promise`\<`void`\>

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

[`AppChainModule`](../classes/AppChainModule.md).[`config`](../classes/AppChainModule.md#config)

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

[`AppChainModule`](../classes/AppChainModule.md).[`create`](../classes/AppChainModule.md#create)
