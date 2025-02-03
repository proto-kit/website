---
title: SettlementContractProtocolModule
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / SettlementContractProtocolModule

# Class: SettlementContractProtocolModule

Defined in: [packages/protocol/src/settlement/contracts/SettlementContractProtocolModule.ts:34](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/contracts/SettlementContractProtocolModule.ts#L34)

This module type is used to define a contract module that can be used to
construct and inject smart contract instances.
It defines a method contractFactory, whose arguments can be configured via
the Argument generic. It returns a smart contract class that is a subclass
of SmartContract and implements a certain interface as specified by the
ContractType generic.

## Extends

- [`ContractModule`](ContractModule.md)\<[`SettlementContractType`](../interfaces/SettlementContractType.md), [`SettlementContractConfig`](../type-aliases/SettlementContractConfig.md)\>

## Constructors

### new SettlementContractProtocolModule()

> **new SettlementContractProtocolModule**(`hooks`, `blockProver`, `dispatchContractModule`, `bridgeContractModule`, `childVerificationKeyService`): [`SettlementContractProtocolModule`](SettlementContractProtocolModule.md)

Defined in: [packages/protocol/src/settlement/contracts/SettlementContractProtocolModule.ts:38](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/contracts/SettlementContractProtocolModule.ts#L38)

#### Parameters

##### hooks

[`ProvableSettlementHook`](ProvableSettlementHook.md)\<`unknown`\>[]

##### blockProver

[`BlockProvable`](../interfaces/BlockProvable.md)

##### dispatchContractModule

[`DispatchContractProtocolModule`](DispatchContractProtocolModule.md)

##### bridgeContractModule

[`BridgeContractProtocolModule`](BridgeContractProtocolModule.md)

##### childVerificationKeyService

[`ChildVerificationKeyService`](../../common/classes/ChildVerificationKeyService.md)

#### Returns

[`SettlementContractProtocolModule`](SettlementContractProtocolModule.md)

#### Overrides

[`ContractModule`](ContractModule.md).[`constructor`](ContractModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`SettlementContractConfig`](../type-aliases/SettlementContractConfig.md)

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

> **compile**(`registry`): `Promise`\<`undefined` \| [`ArtifactRecord`](../../common/type-aliases/ArtifactRecord.md)\>

Defined in: [packages/protocol/src/settlement/contracts/SettlementContractProtocolModule.ts:82](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/contracts/SettlementContractProtocolModule.ts#L82)

#### Parameters

##### registry

[`CompileRegistry`](../../common/classes/CompileRegistry.md)

#### Returns

`Promise`\<`undefined` \| [`ArtifactRecord`](../../common/type-aliases/ArtifactRecord.md)\>

#### Overrides

[`ContractModule`](ContractModule.md).[`compile`](ContractModule.md#compile)

***

### contractFactory()

> **contractFactory**(): [`SmartContractClassFromInterface`](../type-aliases/SmartContractClassFromInterface.md)\<[`SettlementContractType`](../interfaces/SettlementContractType.md)\>

Defined in: [packages/protocol/src/settlement/contracts/SettlementContractProtocolModule.ts:52](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/contracts/SettlementContractProtocolModule.ts#L52)

#### Returns

[`SmartContractClassFromInterface`](../type-aliases/SmartContractClassFromInterface.md)\<[`SettlementContractType`](../interfaces/SettlementContractType.md)\>

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
