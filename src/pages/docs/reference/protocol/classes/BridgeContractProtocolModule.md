---
title: BridgeContractProtocolModule
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / BridgeContractProtocolModule

# Class: BridgeContractProtocolModule

Defined in: [packages/protocol/src/settlement/contracts/BridgeContractProtocolModule.ts:18](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/contracts/BridgeContractProtocolModule.ts#L18)

This module type is used to define a contract module that can be used to
construct and inject smart contract instances.
It defines a method contractFactory, whose arguments can be configured via
the Argument generic. It returns a smart contract class that is a subclass
of SmartContract and implements a certain interface as specified by the
ContractType generic.

## Extends

- [`ContractModule`](ContractModule.md)\<[`BridgeContractType`](../type-aliases/BridgeContractType.md), [`BridgeContractConfig`](../type-aliases/BridgeContractConfig.md)\>

## Constructors

### new BridgeContractProtocolModule()

> **new BridgeContractProtocolModule**(): [`BridgeContractProtocolModule`](BridgeContractProtocolModule.md)

#### Returns

[`BridgeContractProtocolModule`](BridgeContractProtocolModule.md)

#### Inherited from

[`ContractModule`](ContractModule.md).[`constructor`](ContractModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`BridgeContractConfig`](../type-aliases/BridgeContractConfig.md)

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`ContractModule`](ContractModule.md).[`currentConfig`](ContractModule.md#currentconfig)

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

[`ContractModule`](ContractModule.md).[`config`](ContractModule.md#config)

## Methods

### compile()

> **compile**(`registry`): `Promise`\<\{ `BridgeContract`: [`CompileArtifact`](../../common/interfaces/CompileArtifact.md); \}\>

Defined in: [packages/protocol/src/settlement/contracts/BridgeContractProtocolModule.ts:38](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/contracts/BridgeContractProtocolModule.ts#L38)

#### Parameters

##### registry

[`CompileRegistry`](../../common/classes/CompileRegistry.md)

#### Returns

`Promise`\<\{ `BridgeContract`: [`CompileArtifact`](../../common/interfaces/CompileArtifact.md); \}\>

#### Overrides

[`ContractModule`](ContractModule.md).[`compile`](ContractModule.md#compile)

***

### contractFactory()

> **contractFactory**(): *typeof* [`BridgeContract`](BridgeContract.md)

Defined in: [packages/protocol/src/settlement/contracts/BridgeContractProtocolModule.ts:22](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/contracts/BridgeContractProtocolModule.ts#L22)

#### Returns

*typeof* [`BridgeContract`](BridgeContract.md)

#### Overrides

[`ContractModule`](ContractModule.md).[`contractFactory`](ContractModule.md#contractfactory)

***

### create()

> **create**(`childContainerProvider`): `void`

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:20

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../../common/interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Inherited from

[`ContractModule`](ContractModule.md).[`create`](ContractModule.md#create)
