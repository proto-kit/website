---
title: LocalTaskWorkerModule
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / LocalTaskWorkerModule

# Class: LocalTaskWorkerModule\<Tasks\>

Defined in: [packages/sequencer/src/worker/worker/LocalTaskWorkerModule.ts:56](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/worker/worker/LocalTaskWorkerModule.ts#L56)

This module spins up a worker in the current local node instance.
This should only be used for local testing/development and not in a
production setup. Use the proper worker execution method for spinning up
cloud workers.

## Extends

- [`ModuleContainer`](../../common/classes/ModuleContainer.md)\<`Tasks`\>

## Type Parameters

• **Tasks** *extends* [`TaskWorkerModulesRecord`](../type-aliases/TaskWorkerModulesRecord.md)

## Implements

- [`SequencerModule`](SequencerModule.md)
- [`EventEmittingContainer`](../../common/interfaces/EventEmittingContainer.md)\<`LocalTaskWorkerModuleEvents`\>

## Constructors

### new LocalTaskWorkerModule()

> **new LocalTaskWorkerModule**\<`Tasks`\>(`modules`): [`LocalTaskWorkerModule`](LocalTaskWorkerModule.md)\<`Tasks`\>

Defined in: [packages/sequencer/src/worker/worker/LocalTaskWorkerModule.ts:80](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/worker/worker/LocalTaskWorkerModule.ts#L80)

#### Parameters

##### modules

`Tasks`

#### Returns

[`LocalTaskWorkerModule`](LocalTaskWorkerModule.md)\<`Tasks`\>

#### Overrides

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`constructor`](../../common/classes/ModuleContainer.md#constructors)

## Properties

### containerEvents

> **containerEvents**: [`EventEmitter`](../../common/classes/EventEmitter.md)\<`LocalTaskWorkerModuleEvents`\>

Defined in: [packages/sequencer/src/worker/worker/LocalTaskWorkerModule.ts:64](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/worker/worker/LocalTaskWorkerModule.ts#L64)

#### Implementation of

[`EventEmittingContainer`](../../common/interfaces/EventEmittingContainer.md).[`containerEvents`](../../common/interfaces/EventEmittingContainer.md#containerevents)

***

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`ModulesConfig`](../../common/type-aliases/ModulesConfig.md)\<`Tasks`\>

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Implementation of

[`SequencerModule`](SequencerModule.md).[`currentConfig`](SequencerModule.md#currentconfig)

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`currentConfig`](../../common/classes/ModuleContainer.md#currentconfig)

***

### definition

> **definition**: [`ModuleContainerDefinition`](../../common/interfaces/ModuleContainerDefinition.md)\<`Tasks`\>

Defined in: packages/common/dist/config/ModuleContainer.d.ts:60

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`definition`](../../common/classes/ModuleContainer.md#definition-1)

***

### presets

> `static` **presets**: [`Presets`](../../common/type-aliases/Presets.md)\<`unknown`\> = `{}`

Defined in: [packages/sequencer/src/worker/worker/LocalTaskWorkerModule.ts:62](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/worker/worker/LocalTaskWorkerModule.ts#L62)

#### Implementation of

[`SequencerModule`](SequencerModule.md).[`presets`](SequencerModule.md#presets)

## Accessors

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

[`SequencerModule`](SequencerModule.md).[`config`](SequencerModule.md#config)

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

> **assertIsValidModuleName**(`moduleName`): `asserts moduleName is StringKeyOf<Tasks>`

Defined in: packages/common/dist/config/ModuleContainer.d.ts:87

Assert that the iterated `moduleName` is of ModuleName type,
otherwise it may be just string e.g. when modules are iterated over
using e.g. a for loop.

#### Parameters

##### moduleName

`string`

#### Returns

`asserts moduleName is StringKeyOf<Tasks>`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`assertIsValidModuleName`](../../common/classes/ModuleContainer.md#assertisvalidmodulename)

***

### close()

> **close**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/worker/worker/LocalTaskWorkerModule.ts:124](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/worker/worker/LocalTaskWorkerModule.ts#L124)

#### Returns

`Promise`\<`void`\>

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

[`ModulesConfig`](../../common/type-aliases/ModulesConfig.md)\<`Tasks`\>

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

[`RecursivePartial`](../../common/type-aliases/RecursivePartial.md)\<[`ModulesConfig`](../../common/type-aliases/ModulesConfig.md)\<`Tasks`\>\>

#### Returns

`void`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`configurePartial`](../../common/classes/ModuleContainer.md#configurepartial)

***

### create()

> **create**(`childContainerProvider`): `void`

Defined in: packages/common/dist/config/ModuleContainer.d.ts:160

This is a placeholder for individual modules to override.
This method will be called whenever the underlying container fully
initialized

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../../common/interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Implementation of

[`SequencerModule`](SequencerModule.md).[`create`](SequencerModule.md#create)

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`create`](../../common/classes/ModuleContainer.md#create)

***

### decorateModule()

> `protected` **decorateModule**(`moduleName`, `containedModule`): `void`

Defined in: packages/common/dist/config/ModuleContainer.d.ts:134

Override this in the child class to provide custom
features or module checks

#### Parameters

##### moduleName

[`StringKeyOf`](../../common/type-aliases/StringKeyOf.md)\<`Tasks`\>

##### containedModule

`InstanceType`\<`Tasks`\[[`StringKeyOf`](../../common/type-aliases/StringKeyOf.md)\<`Tasks`\>\]\>

#### Returns

`void`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`decorateModule`](../../common/classes/ModuleContainer.md#decoratemodule)

***

### initializeDependencyFactories()

> `protected` **initializeDependencyFactories**(`factories`): `void`

Defined in: packages/common/dist/config/ModuleContainer.d.ts:140

Inject a set of dependencies using the given list of DependencyFactories
This method should be called during startup

#### Parameters

##### factories

[`StringKeyOf`](../../common/type-aliases/StringKeyOf.md)\<`Tasks`\>[]

#### Returns

`void`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`initializeDependencyFactories`](../../common/classes/ModuleContainer.md#initializedependencyfactories)

***

### isValidModuleName()

> **isValidModuleName**(`modules`, `moduleName`): `moduleName is StringKeyOf<Tasks>`

Defined in: packages/common/dist/config/ModuleContainer.d.ts:88

#### Parameters

##### modules

`Tasks`

##### moduleName

`string` | `number` | `symbol`

#### Returns

`moduleName is StringKeyOf<Tasks>`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`isValidModuleName`](../../common/classes/ModuleContainer.md#isvalidmodulename)

***

### onAfterModuleResolution()

> `protected` **onAfterModuleResolution**(`moduleName`): `void`

Defined in: packages/common/dist/config/ModuleContainer.d.ts:154

Handle module resolution, e.g. by decorating resolved modules

#### Parameters

##### moduleName

[`StringKeyOf`](../../common/type-aliases/StringKeyOf.md)\<`Tasks`\>

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

[`TypedClass`](../type-aliases/TypedClass.md)\<`any`\>

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

`Record`\<`string`, [`TypedClass`](../type-aliases/TypedClass.md)\<`unknown`\>\>

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

`Tasks`

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

> **resolve**\<`KeyType`\>(`moduleName`): `InstanceType`\<[`ResolvableModules`](../../common/type-aliases/ResolvableModules.md)\<`Tasks`\>\[`KeyType`\]\>

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

`InstanceType`\<[`ResolvableModules`](../../common/type-aliases/ResolvableModules.md)\<`Tasks`\>\[`KeyType`\]\>

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

[`TypedClass`](../type-aliases/TypedClass.md)\<`ModuleType`\>

#### Returns

`ModuleType`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`resolveOrFail`](../../common/classes/ModuleContainer.md#resolveorfail)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/worker/worker/LocalTaskWorkerModule.ts:100](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/worker/worker/LocalTaskWorkerModule.ts#L100)

Start the module and all it's functionality.
The returned Promise has to resolve after initialization,
since it will block in the sequencer init.
That means that you mustn't await server.start() for example.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`SequencerModule`](SequencerModule.md).[`start`](SequencerModule.md#start)

***

### validateModule()

> `protected` **validateModule**(`moduleName`, `containedModule`): `void`

Defined in: packages/common/dist/config/ModuleContainer.d.ts:80

Check if the provided module satisfies the container requirements,
such as only injecting other known modules.

#### Parameters

##### moduleName

[`StringKeyOf`](../../common/type-aliases/StringKeyOf.md)\<`Tasks`\>

##### containedModule

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md)\<`unknown`\>

#### Returns

`void`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`validateModule`](../../common/classes/ModuleContainer.md#validatemodule)

***

### from()

> `static` **from**\<`Tasks`\>(`modules`): [`TypedClass`](../type-aliases/TypedClass.md)\<[`LocalTaskWorkerModule`](LocalTaskWorkerModule.md)\<`Tasks`\>\>

Defined in: [packages/sequencer/src/worker/worker/LocalTaskWorkerModule.ts:70](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/worker/worker/LocalTaskWorkerModule.ts#L70)

#### Type Parameters

• **Tasks** *extends* [`TaskWorkerModulesRecord`](../type-aliases/TaskWorkerModulesRecord.md)

#### Parameters

##### modules

`Tasks`

#### Returns

[`TypedClass`](../type-aliases/TypedClass.md)\<[`LocalTaskWorkerModule`](LocalTaskWorkerModule.md)\<`Tasks`\>\>
