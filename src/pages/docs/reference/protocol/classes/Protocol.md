---
title: Protocol
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / Protocol

# Class: Protocol\<Modules\>

Defined in: [packages/protocol/src/protocol/Protocol.ts:60](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/protocol/Protocol.ts#L60)

Reusable module container facilitating registration, resolution
configuration, decoration and validation of modules

## Extends

- [`ModuleContainer`](../../common/classes/ModuleContainer.md)\<`Modules`\>

## Type Parameters

• **Modules** *extends* [`ProtocolModulesRecord`](../type-aliases/ProtocolModulesRecord.md) & [`MandatoryProtocolModulesRecord`](../type-aliases/MandatoryProtocolModulesRecord.md)

## Implements

- [`ProtocolEnvironment`](../interfaces/ProtocolEnvironment.md)

## Constructors

### new Protocol()

> **new Protocol**\<`Modules`\>(`definition`): [`Protocol`](Protocol.md)\<`Modules`\>

Defined in: [packages/protocol/src/protocol/Protocol.ts:78](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/protocol/Protocol.ts#L78)

#### Parameters

##### definition

[`ProtocolDefinition`](../interfaces/ProtocolDefinition.md)\<`Modules`\>

#### Returns

[`Protocol`](Protocol.md)\<`Modules`\>

#### Overrides

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`constructor`](../../common/classes/ModuleContainer.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`ModulesConfig`](../../common/type-aliases/ModulesConfig.md)\<`Modules`\>

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`currentConfig`](../../common/classes/ModuleContainer.md#currentconfig)

***

### definition

> **definition**: [`ProtocolDefinition`](../interfaces/ProtocolDefinition.md)\<`Modules`\>

Defined in: [packages/protocol/src/protocol/Protocol.ts:76](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/protocol/Protocol.ts#L76)

#### Overrides

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`definition`](../../common/classes/ModuleContainer.md#definition-1)

## Accessors

### blockProver

#### Get Signature

> **get** **blockProver**(): [`BlockProvable`](../interfaces/BlockProvable.md)

Defined in: [packages/protocol/src/protocol/Protocol.ts:115](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/protocol/Protocol.ts#L115)

##### Returns

[`BlockProvable`](../interfaces/BlockProvable.md)

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

### dependencyContainer

#### Get Signature

> **get** **dependencyContainer**(): `DependencyContainer`

Defined in: [packages/protocol/src/protocol/Protocol.ts:105](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/protocol/Protocol.ts#L105)

##### Returns

`DependencyContainer`

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

***

### stateService

#### Get Signature

> **get** **stateService**(): [`SimpleAsyncStateService`](../interfaces/SimpleAsyncStateService.md)

Defined in: [packages/protocol/src/protocol/Protocol.ts:83](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/protocol/Protocol.ts#L83)

##### Returns

[`SimpleAsyncStateService`](../interfaces/SimpleAsyncStateService.md)

#### Implementation of

[`ProtocolEnvironment`](../interfaces/ProtocolEnvironment.md).[`stateService`](../interfaces/ProtocolEnvironment.md#stateservice)

***

### stateServiceProvider

#### Get Signature

> **get** **stateServiceProvider**(): [`StateServiceProvider`](StateServiceProvider.md)

Defined in: [packages/protocol/src/protocol/Protocol.ts:87](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/protocol/Protocol.ts#L87)

##### Returns

[`StateServiceProvider`](StateServiceProvider.md)

#### Implementation of

[`ProtocolEnvironment`](../interfaces/ProtocolEnvironment.md).[`stateServiceProvider`](../interfaces/ProtocolEnvironment.md#stateserviceprovider)

***

### stateTransitionProver

#### Get Signature

> **get** **stateTransitionProver**(): [`StateTransitionProvable`](../interfaces/StateTransitionProvable.md)

Defined in: [packages/protocol/src/protocol/Protocol.ts:123](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/protocol/Protocol.ts#L123)

##### Returns

[`StateTransitionProvable`](../interfaces/StateTransitionProvable.md)

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

> **assertIsValidModuleName**(`moduleName`): `asserts moduleName is StringKeyOf<Modules>`

Defined in: packages/common/dist/config/ModuleContainer.d.ts:87

Assert that the iterated `moduleName` is of ModuleName type,
otherwise it may be just string e.g. when modules are iterated over
using e.g. a for loop.

#### Parameters

##### moduleName

`string`

#### Returns

`asserts moduleName is StringKeyOf<Modules>`

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

[`ModulesConfig`](../../common/type-aliases/ModulesConfig.md)\<`Modules`\>

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

[`RecursivePartial`](../../common/type-aliases/RecursivePartial.md)\<[`ModulesConfig`](../../common/type-aliases/ModulesConfig.md)\<`Modules`\>\>

#### Returns

`void`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`configurePartial`](../../common/classes/ModuleContainer.md#configurepartial)

***

### create()

> **create**(`childContainerProvider`): `void`

Defined in: [packages/protocol/src/protocol/Protocol.ts:133](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/protocol/Protocol.ts#L133)

This is a placeholder for individual modules to override.
This method will be called whenever the underlying container fully
initialized

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../../common/interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Overrides

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`create`](../../common/classes/ModuleContainer.md#create)

***

### decorateModule()

> **decorateModule**(`moduleName`, `containedModule`): `void`

Defined in: [packages/protocol/src/protocol/Protocol.ts:91](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/protocol/Protocol.ts#L91)

Override this in the child class to provide custom
features or module checks

#### Parameters

##### moduleName

[`StringKeyOf`](../../common/type-aliases/StringKeyOf.md)\<`Modules`\>

##### containedModule

`InstanceType`\<`Modules`\[[`StringKeyOf`](../../common/type-aliases/StringKeyOf.md)\<`Modules`\>\]\>

#### Returns

`void`

#### Overrides

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`decorateModule`](../../common/classes/ModuleContainer.md#decoratemodule)

***

### getAreProofsEnabled()

> **getAreProofsEnabled**(): [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

Defined in: [packages/protocol/src/protocol/Protocol.ts:129](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/protocol/Protocol.ts#L129)

#### Returns

[`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

#### Implementation of

[`ProtocolEnvironment`](../interfaces/ProtocolEnvironment.md).[`getAreProofsEnabled`](../interfaces/ProtocolEnvironment.md#getareproofsenabled)

***

### initializeDependencyFactories()

> `protected` **initializeDependencyFactories**(`factories`): `void`

Defined in: packages/common/dist/config/ModuleContainer.d.ts:140

Inject a set of dependencies using the given list of DependencyFactories
This method should be called during startup

#### Parameters

##### factories

[`StringKeyOf`](../../common/type-aliases/StringKeyOf.md)\<`Modules`\>[]

#### Returns

`void`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`initializeDependencyFactories`](../../common/classes/ModuleContainer.md#initializedependencyfactories)

***

### isValidModuleName()

> **isValidModuleName**(`modules`, `moduleName`): `moduleName is StringKeyOf<Modules>`

Defined in: packages/common/dist/config/ModuleContainer.d.ts:88

#### Parameters

##### modules

`Modules`

##### moduleName

`string` | `number` | `symbol`

#### Returns

`moduleName is StringKeyOf<Modules>`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`isValidModuleName`](../../common/classes/ModuleContainer.md#isvalidmodulename)

***

### onAfterModuleResolution()

> `protected` **onAfterModuleResolution**(`moduleName`): `void`

Defined in: packages/common/dist/config/ModuleContainer.d.ts:154

Handle module resolution, e.g. by decorating resolved modules

#### Parameters

##### moduleName

[`StringKeyOf`](../../common/type-aliases/StringKeyOf.md)\<`Modules`\>

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

`Modules`

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

> **resolve**\<`KeyType`\>(`moduleName`): `InstanceType`\<[`ResolvableModules`](../../common/type-aliases/ResolvableModules.md)\<`Modules`\>\[`KeyType`\]\>

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

`InstanceType`\<[`ResolvableModules`](../../common/type-aliases/ResolvableModules.md)\<`Modules`\>\[`KeyType`\]\>

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

Defined in: [packages/protocol/src/protocol/Protocol.ts:186](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/protocol/Protocol.ts#L186)

#### Returns

`Promise`\<`void`\>

***

### validateModule()

> `protected` **validateModule**(`moduleName`, `containedModule`): `void`

Defined in: packages/common/dist/config/ModuleContainer.d.ts:80

Check if the provided module satisfies the container requirements,
such as only injecting other known modules.

#### Parameters

##### moduleName

[`StringKeyOf`](../../common/type-aliases/StringKeyOf.md)\<`Modules`\>

##### containedModule

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md)\<`unknown`\>

#### Returns

`void`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`validateModule`](../../common/classes/ModuleContainer.md#validatemodule)

***

### from()

> `static` **from**\<`Modules`\>(`modules`): [`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`Protocol`](Protocol.md)\<`Modules`\>\>

Defined in: [packages/protocol/src/protocol/Protocol.ts:66](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/protocol/Protocol.ts#L66)

#### Type Parameters

• **Modules** *extends* [`ProtocolModulesRecord`](../type-aliases/ProtocolModulesRecord.md) & [`MandatoryProtocolModulesRecord`](../type-aliases/MandatoryProtocolModulesRecord.md)

#### Parameters

##### modules

[`ProtocolDefinition`](../interfaces/ProtocolDefinition.md)\<`Modules`\>

#### Returns

[`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`Protocol`](Protocol.md)\<`Modules`\>\>
