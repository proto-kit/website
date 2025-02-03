---
title: Sequencer
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / Sequencer

# Class: Sequencer\<Modules\>

Defined in: [packages/sequencer/src/sequencer/executor/Sequencer.ts:30](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/sequencer/executor/Sequencer.ts#L30)

Reusable module container facilitating registration, resolution
configuration, decoration and validation of modules

## Extends

- [`ModuleContainer`](../../common/classes/ModuleContainer.md)\<`Modules`\>

## Type Parameters

• **Modules** *extends* [`SequencerModulesRecord`](../type-aliases/SequencerModulesRecord.md)

## Implements

- [`Sequenceable`](../interfaces/Sequenceable.md)

## Constructors

### new Sequencer()

> **new Sequencer**\<`Modules`\>(`definition`): [`Sequencer`](Sequencer.md)\<`Modules`\>

Defined in: packages/common/dist/config/ModuleContainer.d.ts:68

#### Parameters

##### definition

[`ModuleContainerDefinition`](../../common/interfaces/ModuleContainerDefinition.md)\<`Modules`\>

#### Returns

[`Sequencer`](Sequencer.md)\<`Modules`\>

#### Inherited from

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

> **definition**: [`ModuleContainerDefinition`](../../common/interfaces/ModuleContainerDefinition.md)\<`Modules`\>

Defined in: packages/common/dist/config/ModuleContainer.d.ts:60

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`definition`](../../common/classes/ModuleContainer.md#definition-1)

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

Defined in: [packages/sequencer/src/sequencer/executor/Sequencer.ts:61](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/sequencer/executor/Sequencer.ts#L61)

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

### protocol

#### Get Signature

> **get** **protocol**(): [`Protocol`](../../protocol/classes/Protocol.md)\<[`MandatoryProtocolModulesRecord`](../../protocol/type-aliases/MandatoryProtocolModulesRecord.md) & [`ProtocolModulesRecord`](../../protocol/type-aliases/ProtocolModulesRecord.md)\>

Defined in: [packages/sequencer/src/sequencer/executor/Sequencer.ts:53](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/sequencer/executor/Sequencer.ts#L53)

##### Returns

[`Protocol`](../../protocol/classes/Protocol.md)\<[`MandatoryProtocolModulesRecord`](../../protocol/type-aliases/MandatoryProtocolModulesRecord.md) & [`ProtocolModulesRecord`](../../protocol/type-aliases/ProtocolModulesRecord.md)\>

***

### runtime

#### Get Signature

> **get** **runtime**(): [`Runtime`](../../module/classes/Runtime.md)\<[`RuntimeModulesRecord`](../../module/type-aliases/RuntimeModulesRecord.md)\>

Defined in: [packages/sequencer/src/sequencer/executor/Sequencer.ts:49](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/sequencer/executor/Sequencer.ts#L49)

##### Returns

[`Runtime`](../../module/classes/Runtime.md)\<[`RuntimeModulesRecord`](../../module/type-aliases/RuntimeModulesRecord.md)\>

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

### close()

> **close**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/sequencer/executor/Sequencer.ts:125](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/sequencer/executor/Sequencer.ts#L125)

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

Defined in: packages/common/dist/config/ModuleContainer.d.ts:160

This is a placeholder for individual modules to override.
This method will be called whenever the underlying container fully
initialized

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../../common/interfaces/ChildContainerProvider.md)

#### Returns

`void`

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

[`StringKeyOf`](../../common/type-aliases/StringKeyOf.md)\<`Modules`\>

##### containedModule

`InstanceType`\<`Modules`\[[`StringKeyOf`](../../common/type-aliases/StringKeyOf.md)\<`Modules`\>\]\>

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

[`TypedClass`](../type-aliases/TypedClass.md)\<`ModuleType`\>

#### Returns

`ModuleType`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`resolveOrFail`](../../common/classes/ModuleContainer.md#resolveorfail)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/sequencer/executor/Sequencer.ts:69](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/sequencer/executor/Sequencer.ts#L69)

Starts the sequencer by iterating over all provided
modules to start each

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Sequenceable`](../interfaces/Sequenceable.md).[`start`](../interfaces/Sequenceable.md#start)

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

> `static` **from**\<`Modules`\>(`definition`): [`TypedClass`](../type-aliases/TypedClass.md)\<[`Sequencer`](Sequencer.md)\<`Modules`\>\>

Defined in: [packages/sequencer/src/sequencer/executor/Sequencer.ts:39](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/sequencer/executor/Sequencer.ts#L39)

Alternative constructor for Sequencer

#### Type Parameters

• **Modules** *extends* [`SequencerModulesRecord`](../type-aliases/SequencerModulesRecord.md)

#### Parameters

##### definition

[`ModuleContainerDefinition`](../../common/interfaces/ModuleContainerDefinition.md)\<`Modules`\>

#### Returns

[`TypedClass`](../type-aliases/TypedClass.md)\<[`Sequencer`](Sequencer.md)\<`Modules`\>\>

Sequencer
