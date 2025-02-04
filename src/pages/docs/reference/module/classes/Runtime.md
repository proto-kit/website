---
title: Runtime
---

[**@proto-kit/module**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/module](../README.md) / Runtime

# Class: Runtime\<Modules\>

Defined in: [module/src/runtime/Runtime.ts:270](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/module/src/runtime/Runtime.ts#L270)

Wrapper for an application specific runtime, which helps orchestrate
runtime modules into an interoperable runtime.

## Extends

- [`ModuleContainer`](../../common/classes/ModuleContainer.md)\<`Modules`\>

## Type Parameters

• **Modules** *extends* [`RuntimeModulesRecord`](../type-aliases/RuntimeModulesRecord.md)

## Implements

- [`RuntimeEnvironment`](../interfaces/RuntimeEnvironment.md)
- [`CompilableModule`](../../common/interfaces/CompilableModule.md)

## Constructors

### new Runtime()

> **new Runtime**\<`Modules`\>(`definition`): [`Runtime`](Runtime.md)\<`Modules`\>

Defined in: [module/src/runtime/Runtime.ts:296](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/module/src/runtime/Runtime.ts#L296)

Creates a new Runtime from the provided config

#### Parameters

##### definition

[`RuntimeDefinition`](../interfaces/RuntimeDefinition.md)\<`Modules`\>

#### Returns

[`Runtime`](Runtime.md)\<`Modules`\>

#### Overrides

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`constructor`](../../common/classes/ModuleContainer.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`ModulesConfig`](../../common/type-aliases/ModulesConfig.md)\<`Modules`\>

Defined in: common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`currentConfig`](../../common/classes/ModuleContainer.md#currentconfig)

***

### definition

> **definition**: [`RuntimeDefinition`](../interfaces/RuntimeDefinition.md)\<`Modules`\>

Defined in: [module/src/runtime/Runtime.ts:287](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/module/src/runtime/Runtime.ts#L287)

#### Overrides

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`definition`](../../common/classes/ModuleContainer.md#definition-1)

***

### program?

> `optional` **program**: `any`

Defined in: [module/src/runtime/Runtime.ts:285](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/module/src/runtime/Runtime.ts#L285)

***

### zkProgrammable

> **zkProgrammable**: [`ZkProgrammable`](../../common/classes/ZkProgrammable.md)\<[`MethodPublicOutput`](../../protocol/classes/MethodPublicOutput.md)\>

Defined in: [module/src/runtime/Runtime.ts:289](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/module/src/runtime/Runtime.ts#L289)

#### Implementation of

[`RuntimeEnvironment`](../interfaces/RuntimeEnvironment.md).[`zkProgrammable`](../interfaces/RuntimeEnvironment.md#zkprogrammable)

## Accessors

### areProofsEnabled

#### Get Signature

> **get** **areProofsEnabled**(): `undefined` \| [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

Defined in: [module/src/runtime/Runtime.ts:309](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/module/src/runtime/Runtime.ts#L309)

##### Returns

`undefined` \| [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

#### Implementation of

[`RuntimeEnvironment`](../interfaces/RuntimeEnvironment.md).[`areProofsEnabled`](../interfaces/RuntimeEnvironment.md#areproofsenabled)

***

### config

#### Get Signature

> **get** **config**(): [`ModulesConfig`](../../common/type-aliases/ModulesConfig.md)\<`Modules`\>

Defined in: common/dist/config/ModuleContainer.d.ts:116

##### Returns

[`ModulesConfig`](../../common/type-aliases/ModulesConfig.md)\<`Modules`\>

#### Set Signature

> **set** **config**(`config`): `void`

Defined in: common/dist/config/ModuleContainer.d.ts:117

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

Defined in: common/dist/config/ModuleContainer.d.ts:81

##### Returns

`DependencyContainer`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`container`](../../common/classes/ModuleContainer.md#container)

***

### dependencyContainer

#### Get Signature

> **get** **dependencyContainer**(): `DependencyContainer`

Defined in: [module/src/runtime/Runtime.ts:330](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/module/src/runtime/Runtime.ts#L330)

##### Returns

`DependencyContainer`

The dependency injection container of this runtime

***

### events

#### Get Signature

> **get** **events**(): [`EventEmitterProxy`](../../common/classes/EventEmitterProxy.md)\<`Modules`\>

Defined in: common/dist/config/ModuleContainer.d.ts:99

##### Returns

[`EventEmitterProxy`](../../common/classes/EventEmitterProxy.md)\<`Modules`\>

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`events`](../../common/classes/ModuleContainer.md#events)

***

### methodIdResolver

#### Get Signature

> **get** **methodIdResolver**(): [`MethodIdResolver`](MethodIdResolver.md)

Defined in: [module/src/runtime/Runtime.ts:323](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/module/src/runtime/Runtime.ts#L323)

##### Returns

[`MethodIdResolver`](MethodIdResolver.md)

#### Implementation of

[`RuntimeEnvironment`](../interfaces/RuntimeEnvironment.md).[`methodIdResolver`](../interfaces/RuntimeEnvironment.md#methodidresolver)

***

### moduleNames

#### Get Signature

> **get** **moduleNames**(): `string`[]

Defined in: common/dist/config/ModuleContainer.d.ts:72

##### Returns

`string`[]

list of module names

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`moduleNames`](../../common/classes/ModuleContainer.md#modulenames)

***

### runtimeModuleNames

#### Get Signature

> **get** **runtimeModuleNames**(): `string`[]

Defined in: [module/src/runtime/Runtime.ts:382](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/module/src/runtime/Runtime.ts#L382)

##### Returns

`string`[]

A list of names of all the registered module names

***

### stateService

#### Get Signature

> **get** **stateService**(): [`SimpleAsyncStateService`](../../protocol/interfaces/SimpleAsyncStateService.md)

Defined in: [module/src/runtime/Runtime.ts:319](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/module/src/runtime/Runtime.ts#L319)

##### Returns

[`SimpleAsyncStateService`](../../protocol/interfaces/SimpleAsyncStateService.md)

#### Implementation of

[`RuntimeEnvironment`](../interfaces/RuntimeEnvironment.md).[`stateService`](../interfaces/RuntimeEnvironment.md#stateservice)

***

### stateServiceProvider

#### Get Signature

> **get** **stateServiceProvider**(): [`StateServiceProvider`](../../protocol/classes/StateServiceProvider.md)

Defined in: [module/src/runtime/Runtime.ts:313](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/module/src/runtime/Runtime.ts#L313)

##### Returns

[`StateServiceProvider`](../../protocol/classes/StateServiceProvider.md)

#### Implementation of

[`RuntimeEnvironment`](../interfaces/RuntimeEnvironment.md).[`stateServiceProvider`](../interfaces/RuntimeEnvironment.md#stateserviceprovider)

## Methods

### assertContainerInitialized()

> **assertContainerInitialized**(`container`): `asserts container is DependencyContainer`

Defined in: common/dist/config/ModuleContainer.d.ts:89

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

Defined in: common/dist/config/ModuleContainer.d.ts:87

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

### compile()

> **compile**(`registry`): `Promise`\<`Record`\<`string`, [`CompileArtifact`](../../common/interfaces/CompileArtifact.md)\>\>

Defined in: [module/src/runtime/Runtime.ts:386](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/module/src/runtime/Runtime.ts#L386)

#### Parameters

##### registry

[`CompileRegistry`](../../common/classes/CompileRegistry.md)

#### Returns

`Promise`\<`Record`\<`string`, [`CompileArtifact`](../../common/interfaces/CompileArtifact.md)\>\>

#### Implementation of

[`CompilableModule`](../../common/interfaces/CompilableModule.md).[`compile`](../../common/interfaces/CompilableModule.md#compile)

***

### configure()

> **configure**(`config`): `void`

Defined in: common/dist/config/ModuleContainer.d.ts:114

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

Defined in: common/dist/config/ModuleContainer.d.ts:115

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

Defined in: [module/src/runtime/Runtime.ts:303](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/module/src/runtime/Runtime.ts#L303)

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

Defined in: [module/src/runtime/Runtime.ts:369](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/module/src/runtime/Runtime.ts#L369)

Add a name and other respective properties required by RuntimeModules,
that come from the current Runtime

#### Parameters

##### moduleName

[`StringKeyOf`](../../common/type-aliases/StringKeyOf.md)\<`Modules`\>

Name of the runtime module to decorate

##### containedModule

`InstanceType`\<`Modules`\[[`StringKeyOf`](../../common/type-aliases/StringKeyOf.md)\<`Modules`\>\]\>

#### Returns

`void`

#### Overrides

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`decorateModule`](../../common/classes/ModuleContainer.md#decoratemodule)

***

### getMethodById()

> **getMethodById**(`methodId`): `undefined` \| (...`args`) => `Promise`\<`unknown`\>

Defined in: [module/src/runtime/Runtime.ts:338](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/module/src/runtime/Runtime.ts#L338)

#### Parameters

##### methodId

`bigint`

The encoded name of the method to call.
Encoding: "stringToField(module.name) << 128 + stringToField(method-name)"

#### Returns

`undefined` \| (...`args`) => `Promise`\<`unknown`\>

***

### initializeDependencyFactories()

> `protected` **initializeDependencyFactories**(`factories`): `void`

Defined in: common/dist/config/ModuleContainer.d.ts:140

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

Defined in: common/dist/config/ModuleContainer.d.ts:88

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

Defined in: common/dist/config/ModuleContainer.d.ts:154

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

Defined in: common/dist/config/ModuleContainer.d.ts:90

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

Defined in: common/dist/config/ModuleContainer.d.ts:105

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

Defined in: common/dist/config/ModuleContainer.d.ts:98

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

Defined in: common/dist/config/ModuleContainer.d.ts:104

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

Defined in: common/dist/config/ModuleContainer.d.ts:128

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

Defined in: common/dist/config/ModuleContainer.d.ts:129

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

### validateModule()

> `protected` **validateModule**(`moduleName`, `containedModule`): `void`

Defined in: common/dist/config/ModuleContainer.d.ts:80

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

> `static` **from**\<`Modules`\>(`definition`): [`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`Runtime`](Runtime.md)\<`Modules`\>\>

Defined in: [module/src/runtime/Runtime.ts:274](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/module/src/runtime/Runtime.ts#L274)

#### Type Parameters

• **Modules** *extends* [`RuntimeModulesRecord`](../type-aliases/RuntimeModulesRecord.md)

#### Parameters

##### definition

[`RuntimeDefinition`](../interfaces/RuntimeDefinition.md)\<`Modules`\>

#### Returns

[`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`Runtime`](Runtime.md)\<`Modules`\>\>
