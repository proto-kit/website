---
title: SettlementContractModule
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / SettlementContractModule

# Class: SettlementContractModule\<SettlementModules\>

Defined in: [packages/protocol/src/settlement/SettlementContractModule.ts:46](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/SettlementContractModule.ts#L46)

Used by various module sub-types that may need to be configured

## Extends

- [`ModuleContainer`](../../common/classes/ModuleContainer.md)\<`SettlementModules`\>

## Type Parameters

• **SettlementModules** *extends* [`SettlementModulesRecord`](../type-aliases/SettlementModulesRecord.md) & [`MandatorySettlementModulesRecord`](../type-aliases/MandatorySettlementModulesRecord.md)

## Implements

- [`ProtocolModule`](ProtocolModule.md)\<`unknown`\>

## Constructors

### new SettlementContractModule()

> **new SettlementContractModule**\<`SettlementModules`\>(`definition`): [`SettlementContractModule`](SettlementContractModule.md)\<`SettlementModules`\>

Defined in: [packages/protocol/src/settlement/SettlementContractModule.ts:53](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/SettlementContractModule.ts#L53)

#### Parameters

##### definition

###### modules

`SettlementModules`

#### Returns

[`SettlementContractModule`](SettlementContractModule.md)\<`SettlementModules`\>

#### Overrides

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`constructor`](../../common/classes/ModuleContainer.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`ModulesConfig`](../../common/type-aliases/ModulesConfig.md)\<`SettlementModules`\>

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Implementation of

[`ProtocolModule`](ProtocolModule.md).[`currentConfig`](ProtocolModule.md#currentconfig)

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`currentConfig`](../../common/classes/ModuleContainer.md#currentconfig)

***

### definition

> **definition**: [`ModuleContainerDefinition`](../../common/interfaces/ModuleContainerDefinition.md)\<`SettlementModules`\>

Defined in: packages/common/dist/config/ModuleContainer.d.ts:60

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`definition`](../../common/classes/ModuleContainer.md#definition-1)

***

### protocol?

> `optional` **protocol**: [`ProtocolEnvironment`](../interfaces/ProtocolEnvironment.md)

Defined in: [packages/protocol/src/settlement/SettlementContractModule.ts:94](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/SettlementContractModule.ts#L94)

#### Implementation of

[`ProtocolModule`](ProtocolModule.md).[`protocol`](ProtocolModule.md#protocol)

## Accessors

### areProofsEnabled

#### Get Signature

> **get** **areProofsEnabled**(): `undefined` \| [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

Defined in: [packages/protocol/src/settlement/SettlementContractModule.ts:96](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/SettlementContractModule.ts#L96)

##### Returns

`undefined` \| [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

#### Implementation of

[`ProtocolModule`](ProtocolModule.md).[`areProofsEnabled`](ProtocolModule.md#areproofsenabled)

***

### config

#### Get Signature

> **get** **config**(): [`ModulesConfig`](../../common/type-aliases/ModulesConfig.md)\<`Modules`\>

Defined in: packages/common/dist/config/ModuleContainer.d.ts:116

##### Returns

[`ModulesConfig`](../../common/type-aliases/ModulesConfig.md)\<`Modules`\>

#### Set Signature

> **set** **config**(`config`): `void`

Defined in: packages/common/dist/config/ModuleContainer.d.ts:117

##### Parameters

###### config

[`ModulesConfig`](../../common/type-aliases/ModulesConfig.md)\<`Modules`\>

##### Returns

`void`

#### Implementation of

[`ProtocolModule`](ProtocolModule.md).[`config`](ProtocolModule.md#config)

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`config`](../../common/classes/ModuleContainer.md#config)

***

### container

#### Get Signature

> **get** `protected` **container**(): `DependencyContainer`

Defined in: packages/common/dist/config/ModuleContainer.d.ts:81

##### Returns

`DependencyContainer`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`container`](../../common/classes/ModuleContainer.md#container)

***

### events

#### Get Signature

> **get** **events**(): [`EventEmitterProxy`](../../common/classes/EventEmitterProxy.md)\<`Modules`\>

Defined in: packages/common/dist/config/ModuleContainer.d.ts:99

##### Returns

[`EventEmitterProxy`](../../common/classes/EventEmitterProxy.md)\<`Modules`\>

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`events`](../../common/classes/ModuleContainer.md#events)

***

### moduleNames

#### Get Signature

> **get** **moduleNames**(): `string`[]

Defined in: packages/common/dist/config/ModuleContainer.d.ts:72

##### Returns

`string`[]

list of module names

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`moduleNames`](../../common/classes/ModuleContainer.md#modulenames)

## Methods

### assertContainerInitialized()

> **assertContainerInitialized**(`container`): `asserts container is DependencyContainer`

Defined in: packages/common/dist/config/ModuleContainer.d.ts:89

#### Parameters

##### container

`undefined` | `DependencyContainer`

#### Returns

`asserts container is DependencyContainer`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`assertContainerInitialized`](../../common/classes/ModuleContainer.md#assertcontainerinitialized)

***

### assertIsValidModuleName()

> **assertIsValidModuleName**(`moduleName`): `asserts moduleName is StringKeyOf<SettlementModules>`

Defined in: packages/common/dist/config/ModuleContainer.d.ts:87

Assert that the iterated `moduleName` is of ModuleName type,
otherwise it may be just string e.g. when modules are iterated over
using e.g. a for loop.

#### Parameters

##### moduleName

`string`

#### Returns

`asserts moduleName is StringKeyOf<SettlementModules>`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`assertIsValidModuleName`](../../common/classes/ModuleContainer.md#assertisvalidmodulename)

***

### configure()

> **configure**(`config`): `void`

Defined in: packages/common/dist/config/ModuleContainer.d.ts:114

Provide additional configuration after the ModuleContainer was created.

Keep in mind that modules are only decorated once after they are resolved,
therefore applying any configuration must happen
before the first resolution.

#### Parameters

##### config

[`ModulesConfig`](../../common/type-aliases/ModulesConfig.md)\<`SettlementModules`\>

#### Returns

`void`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`configure`](../../common/classes/ModuleContainer.md#configure)

***

### configurePartial()

> **configurePartial**(`config`): `void`

Defined in: packages/common/dist/config/ModuleContainer.d.ts:115

#### Parameters

##### config

[`RecursivePartial`](../../common/type-aliases/RecursivePartial.md)\<[`ModulesConfig`](../../common/type-aliases/ModulesConfig.md)\<`SettlementModules`\>\>

#### Returns

`void`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`configurePartial`](../../common/classes/ModuleContainer.md#configurepartial)

***

### create()

> **create**(`childContainerProvider`): `void`

Defined in: [packages/protocol/src/settlement/SettlementContractModule.ts:101](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/SettlementContractModule.ts#L101)

This is a placeholder for individual modules to override.
This method will be called whenever the underlying container fully
initialized

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../../common/interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Implementation of

[`ProtocolModule`](ProtocolModule.md).[`create`](ProtocolModule.md#create)

#### Overrides

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`create`](../../common/classes/ModuleContainer.md#create)

***

### createBridgeContract()

> **createBridgeContract**(`address`, `tokenId`?): [`BridgeContractType`](../type-aliases/BridgeContractType.md) & `SmartContract`

Defined in: [packages/protocol/src/settlement/SettlementContractModule.ts:137](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/SettlementContractModule.ts#L137)

#### Parameters

##### address

`PublicKey`

##### tokenId?

`Field`

#### Returns

[`BridgeContractType`](../type-aliases/BridgeContractType.md) & `SmartContract`

***

### createContracts()

> **createContracts**(`addresses`): `object`

Defined in: [packages/protocol/src/settlement/SettlementContractModule.ts:119](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/SettlementContractModule.ts#L119)

#### Parameters

##### addresses

###### dispatch

`PublicKey`

###### settlement

`PublicKey`

#### Returns

`object`

##### dispatch

> **dispatch**: [`DispatchContractType`](../interfaces/DispatchContractType.md) & `SmartContract`

##### settlement

> **settlement**: [`SettlementContractType`](../interfaces/SettlementContractType.md) & `SmartContract`

***

### decorateModule()

> `protected` **decorateModule**(`moduleName`, `containedModule`): `void`

Defined in: packages/common/dist/config/ModuleContainer.d.ts:134

Override this in the child class to provide custom
features or module checks

#### Parameters

##### moduleName

[`StringKeyOf`](../../common/type-aliases/StringKeyOf.md)\<`SettlementModules`\>

##### containedModule

`InstanceType`\<`SettlementModules`\[[`StringKeyOf`](../../common/type-aliases/StringKeyOf.md)\<`SettlementModules`\>\]\>

#### Returns

`void`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`decorateModule`](../../common/classes/ModuleContainer.md#decoratemodule)

***

### getContractClasses()

> **getContractClasses**(): `GetContracts`\<`SettlementModules`\>

Defined in: [packages/protocol/src/settlement/SettlementContractModule.ts:109](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/SettlementContractModule.ts#L109)

#### Returns

`GetContracts`\<`SettlementModules`\>

***

### initializeDependencyFactories()

> `protected` **initializeDependencyFactories**(`factories`): `void`

Defined in: packages/common/dist/config/ModuleContainer.d.ts:140

Inject a set of dependencies using the given list of DependencyFactories
This method should be called during startup

#### Parameters

##### factories

[`StringKeyOf`](../../common/type-aliases/StringKeyOf.md)\<`SettlementModules`\>[]

#### Returns

`void`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`initializeDependencyFactories`](../../common/classes/ModuleContainer.md#initializedependencyfactories)

***

### isValidModuleName()

> **isValidModuleName**(`modules`, `moduleName`): `moduleName is StringKeyOf<SettlementModules>`

Defined in: packages/common/dist/config/ModuleContainer.d.ts:88

#### Parameters

##### modules

`SettlementModules`

##### moduleName

`string` | `number` | `symbol`

#### Returns

`moduleName is StringKeyOf<SettlementModules>`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`isValidModuleName`](../../common/classes/ModuleContainer.md#isvalidmodulename)

***

### onAfterModuleResolution()

> `protected` **onAfterModuleResolution**(`moduleName`): `void`

Defined in: packages/common/dist/config/ModuleContainer.d.ts:154

Handle module resolution, e.g. by decorating resolved modules

#### Parameters

##### moduleName

[`StringKeyOf`](../../common/type-aliases/StringKeyOf.md)\<`SettlementModules`\>

#### Returns

`void`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`onAfterModuleResolution`](../../common/classes/ModuleContainer.md#onaftermoduleresolution)

***

### registerAliases()

> `protected` **registerAliases**(`originalToken`, `clas`): `void`

Defined in: packages/common/dist/config/ModuleContainer.d.ts:90

#### Parameters

##### originalToken

`string`

##### clas

[`TypedClass`](../../common/type-aliases/TypedClass.md)\<`any`\>

#### Returns

`void`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`registerAliases`](../../common/classes/ModuleContainer.md#registeraliases)

***

### registerClasses()

> `protected` **registerClasses**(`modules`): `void`

Defined in: packages/common/dist/config/ModuleContainer.d.ts:105

#### Parameters

##### modules

`Record`\<`string`, [`TypedClass`](../../common/type-aliases/TypedClass.md)\<`unknown`\>\>

#### Returns

`void`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`registerClasses`](../../common/classes/ModuleContainer.md#registerclasses)

***

### registerModules()

> `protected` **registerModules**(`modules`): `void`

Defined in: packages/common/dist/config/ModuleContainer.d.ts:98

Register modules into the current container, and registers
a respective resolution hook in order to decorate the module
upon/after resolution.

#### Parameters

##### modules

`SettlementModules`

#### Returns

`void`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`registerModules`](../../common/classes/ModuleContainer.md#registermodules)

***

### registerValue()

> **registerValue**\<`Value`\>(`modules`): `void`

Defined in: packages/common/dist/config/ModuleContainer.d.ts:104

Register a non-module value into the current container

#### Type Parameters

• **Value**

#### Parameters

##### modules

`Record`\<`string`, `Value`\>

#### Returns

`void`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`registerValue`](../../common/classes/ModuleContainer.md#registervalue)

***

### resolve()

> **resolve**\<`KeyType`\>(`moduleName`): `InstanceType`\<[`ResolvableModules`](../../common/type-aliases/ResolvableModules.md)\<`SettlementModules`\>\[`KeyType`\]\>

Defined in: packages/common/dist/config/ModuleContainer.d.ts:128

Resolves a module from the current module container

We have to narrow down the `ModuleName` type here to
`ResolvableModuleName`, otherwise the resolved value might
be any module instance, not the one specifically requested as argument.

#### Type Parameters

• **KeyType** *extends* `string`

#### Parameters

##### moduleName

`KeyType`

#### Returns

`InstanceType`\<[`ResolvableModules`](../../common/type-aliases/ResolvableModules.md)\<`SettlementModules`\>\[`KeyType`\]\>

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`resolve`](../../common/classes/ModuleContainer.md#resolve)

***

### resolveOrFail()

> **resolveOrFail**\<`ModuleType`\>(`moduleName`, `moduleType`): `ModuleType`

Defined in: packages/common/dist/config/ModuleContainer.d.ts:129

#### Type Parameters

• **ModuleType**

#### Parameters

##### moduleName

`string`

##### moduleType

[`TypedClass`](../../common/type-aliases/TypedClass.md)\<`ModuleType`\>

#### Returns

`ModuleType`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`resolveOrFail`](../../common/classes/ModuleContainer.md#resolveorfail)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/protocol/src/settlement/SettlementContractModule.ts:105](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/SettlementContractModule.ts#L105)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ProtocolModule`](ProtocolModule.md).[`start`](ProtocolModule.md#start)

***

### validateModule()

> `protected` **validateModule**(`moduleName`, `containedModule`): `void`

Defined in: packages/common/dist/config/ModuleContainer.d.ts:80

Check if the provided module satisfies the container requirements,
such as only injecting other known modules.

#### Parameters

##### moduleName

[`StringKeyOf`](../../common/type-aliases/StringKeyOf.md)\<`SettlementModules`\>

##### containedModule

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md)\<`unknown`\>

#### Returns

`void`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`validateModule`](../../common/classes/ModuleContainer.md#validatemodule)

***

### from()

> `static` **from**\<`SettlementModules`\>(`modules`): [`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`SettlementContractModule`](SettlementContractModule.md)\<`SettlementModules`\>\>

Defined in: [packages/protocol/src/settlement/SettlementContractModule.ts:57](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/SettlementContractModule.ts#L57)

#### Type Parameters

• **SettlementModules** *extends* [`SettlementModulesRecord`](../type-aliases/SettlementModulesRecord.md) & [`MandatorySettlementModulesRecord`](../type-aliases/MandatorySettlementModulesRecord.md)

#### Parameters

##### modules

`SettlementModules`

#### Returns

[`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`SettlementContractModule`](SettlementContractModule.md)\<`SettlementModules`\>\>

***

### fromDefaults()

> `static` **fromDefaults**(): [`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`SettlementContractModule`](SettlementContractModule.md)\<\{ `BridgeContract`: *typeof* [`BridgeContractProtocolModule`](BridgeContractProtocolModule.md); `DispatchContract`: *typeof* [`DispatchContractProtocolModule`](DispatchContractProtocolModule.md); `SettlementContract`: *typeof* [`SettlementContractProtocolModule`](SettlementContractProtocolModule.md); \}\>\>

Defined in: [packages/protocol/src/settlement/SettlementContractModule.ts:78](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/SettlementContractModule.ts#L78)

#### Returns

[`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`SettlementContractModule`](SettlementContractModule.md)\<\{ `BridgeContract`: *typeof* [`BridgeContractProtocolModule`](BridgeContractProtocolModule.md); `DispatchContract`: *typeof* [`DispatchContractProtocolModule`](DispatchContractProtocolModule.md); `SettlementContract`: *typeof* [`SettlementContractProtocolModule`](SettlementContractProtocolModule.md); \}\>\>

***

### mandatoryModules()

> `static` **mandatoryModules**(): `object`

Defined in: [packages/protocol/src/settlement/SettlementContractModule.ts:70](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/SettlementContractModule.ts#L70)

#### Returns

`object`

##### BridgeContract

> `readonly` **BridgeContract**: *typeof* [`BridgeContractProtocolModule`](BridgeContractProtocolModule.md) = `BridgeContractProtocolModule`

##### DispatchContract

> `readonly` **DispatchContract**: *typeof* [`DispatchContractProtocolModule`](DispatchContractProtocolModule.md) = `DispatchContractProtocolModule`

##### SettlementContract

> `readonly` **SettlementContract**: *typeof* [`SettlementContractProtocolModule`](SettlementContractProtocolModule.md) = `SettlementContractProtocolModule`

***

### with()

> `static` **with**\<`AdditionalModules`\>(`additionalModules`): [`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`SettlementContractModule`](SettlementContractModule.md)\<`object` & `AdditionalModules`\>\>

Defined in: [packages/protocol/src/settlement/SettlementContractModule.ts:84](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/SettlementContractModule.ts#L84)

#### Type Parameters

• **AdditionalModules** *extends* [`SettlementModulesRecord`](../type-aliases/SettlementModulesRecord.md)

#### Parameters

##### additionalModules

`AdditionalModules`

#### Returns

[`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`SettlementContractModule`](SettlementContractModule.md)\<`object` & `AdditionalModules`\>\>
