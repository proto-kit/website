---
title: AppChain
---

[**@proto-kit/sdk**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sdk](../README.md) / AppChain

# Class: AppChain\<RuntimeModules, ProtocolModules, SequencerModules, AppChainModules\>

Defined in: [sdk/src/appChain/AppChain.ts:112](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sdk/src/appChain/AppChain.ts#L112)

AppChain acts as a wrapper connecting Runtime, Protocol and Sequencer

## Extends

- [`ModuleContainer`](../../common/classes/ModuleContainer.md)\<[`ExpandAppChainModules`](../type-aliases/ExpandAppChainModules.md)\<`RuntimeModules`, `ProtocolModules`, `SequencerModules`, `AppChainModules`\>\>

## Extended by

- [`TestingAppChain`](TestingAppChain.md)
- [`ClientAppChain`](ClientAppChain.md)

## Type Parameters

• **RuntimeModules** *extends* [`RuntimeModulesRecord`](../../module/type-aliases/RuntimeModulesRecord.md)

• **ProtocolModules** *extends* [`ProtocolModulesRecord`](../../protocol/type-aliases/ProtocolModulesRecord.md) & [`MandatoryProtocolModulesRecord`](../../protocol/type-aliases/MandatoryProtocolModulesRecord.md)

• **SequencerModules** *extends* [`SequencerModulesRecord`](../../sequencer/type-aliases/SequencerModulesRecord.md)

• **AppChainModules** *extends* [`AppChainModulesRecord`](../type-aliases/AppChainModulesRecord.md)

## Constructors

### new AppChain()

> **new AppChain**\<`RuntimeModules`, `ProtocolModules`, `SequencerModules`, `AppChainModules`\>(`definition`): [`AppChain`](AppChain.md)\<`RuntimeModules`, `ProtocolModules`, `SequencerModules`, `AppChainModules`\>

Defined in: [sdk/src/appChain/AppChain.ts:151](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sdk/src/appChain/AppChain.ts#L151)

#### Parameters

##### definition

[`AppChainDefinition`](../interfaces/AppChainDefinition.md)\<`RuntimeModules`, `ProtocolModules`, `SequencerModules`, `AppChainModules`\>

#### Returns

[`AppChain`](AppChain.md)\<`RuntimeModules`, `ProtocolModules`, `SequencerModules`, `AppChainModules`\>

#### Overrides

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`constructor`](../../common/classes/ModuleContainer.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`ModulesConfig`](../../common/type-aliases/ModulesConfig.md)\<[`ExpandAppChainModules`](../type-aliases/ExpandAppChainModules.md)\<`RuntimeModules`, `ProtocolModules`, `SequencerModules`, `AppChainModules`\>\>

Defined in: common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`currentConfig`](../../common/classes/ModuleContainer.md#currentconfig)

***

### definition

> **definition**: [`ExpandAppChainDefinition`](../interfaces/ExpandAppChainDefinition.md)\<`RuntimeModules`, `ProtocolModules`, `SequencerModules`, `AppChainModules`\>

Defined in: [sdk/src/appChain/AppChain.ts:144](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sdk/src/appChain/AppChain.ts#L144)

#### Overrides

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`definition`](../../common/classes/ModuleContainer.md#definition-1)

## Accessors

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

### events

#### Get Signature

> **get** **events**(): [`EventEmitterProxy`](../../common/classes/EventEmitterProxy.md)\<`Modules`\>

Defined in: common/dist/config/ModuleContainer.d.ts:99

##### Returns

[`EventEmitterProxy`](../../common/classes/EventEmitterProxy.md)\<`Modules`\>

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`events`](../../common/classes/ModuleContainer.md#events)

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

### protocol

#### Get Signature

> **get** **protocol**(): [`Protocol`](../../protocol/classes/Protocol.md)\<`ProtocolModules`\>

Defined in: [sdk/src/appChain/AppChain.ts:215](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sdk/src/appChain/AppChain.ts#L215)

##### Returns

[`Protocol`](../../protocol/classes/Protocol.md)\<`ProtocolModules`\>

***

### query

#### Get Signature

> **get** **query**(): `object`

Defined in: [sdk/src/appChain/AppChain.ts:176](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sdk/src/appChain/AppChain.ts#L176)

##### Returns

`object`

###### network

> **network**: [`NetworkStateQuery`](../../sequencer/classes/NetworkStateQuery.md)

###### protocol

> **protocol**: [`Query`](../../sequencer/type-aliases/Query.md)\<[`ProtocolModule`](../../protocol/classes/ProtocolModule.md)\<`unknown`\>, `ProtocolModules`\>

###### runtime

> **runtime**: [`Query`](../../sequencer/type-aliases/Query.md)\<[`RuntimeModule`](../../module/classes/RuntimeModule.md)\<`unknown`\>, `RuntimeModules`\>

***

### runtime

#### Get Signature

> **get** **runtime**(): [`Runtime`](../../module/classes/Runtime.md)\<`RuntimeModules`\>

Defined in: [sdk/src/appChain/AppChain.ts:207](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sdk/src/appChain/AppChain.ts#L207)

##### Returns

[`Runtime`](../../module/classes/Runtime.md)\<`RuntimeModules`\>

***

### sequencer

#### Get Signature

> **get** **sequencer**(): [`Sequencer`](../../sequencer/classes/Sequencer.md)\<`SequencerModules`\>

Defined in: [sdk/src/appChain/AppChain.ts:211](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sdk/src/appChain/AppChain.ts#L211)

##### Returns

[`Sequencer`](../../sequencer/classes/Sequencer.md)\<`SequencerModules`\>

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

> **assertIsValidModuleName**(`moduleName`): `asserts moduleName is StringKeyOf<ExpandAppChainModules<RuntimeModules, ProtocolModules, SequencerModules, AppChainModules>>`

Defined in: common/dist/config/ModuleContainer.d.ts:87

Assert that the iterated `moduleName` is of ModuleName type,
otherwise it may be just string e.g. when modules are iterated over
using e.g. a for loop.

#### Parameters

##### moduleName

`string`

#### Returns

`asserts moduleName is StringKeyOf<ExpandAppChainModules<RuntimeModules, ProtocolModules, SequencerModules, AppChainModules>>`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`assertIsValidModuleName`](../../common/classes/ModuleContainer.md#assertisvalidmodulename)

***

### close()

> **close**(): `Promise`\<`void`\>

Defined in: [sdk/src/appChain/AppChain.ts:352](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sdk/src/appChain/AppChain.ts#L352)

#### Returns

`Promise`\<`void`\>

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

[`ModulesConfig`](../../common/type-aliases/ModulesConfig.md)\<[`ExpandAppChainModules`](../type-aliases/ExpandAppChainModules.md)\<`RuntimeModules`, `ProtocolModules`, `SequencerModules`, `AppChainModules`\>\>

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

[`RecursivePartial`](../../common/type-aliases/RecursivePartial.md)\<[`ModulesConfig`](../../common/type-aliases/ModulesConfig.md)\<[`ExpandAppChainModules`](../type-aliases/ExpandAppChainModules.md)\<`RuntimeModules`, `ProtocolModules`, `SequencerModules`, `AppChainModules`\>\>\>

#### Returns

`void`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`configurePartial`](../../common/classes/ModuleContainer.md#configurepartial)

***

### create()

> **create**(`childContainerProvider`): `void`

Defined in: common/dist/config/ModuleContainer.d.ts:160

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

Defined in: common/dist/config/ModuleContainer.d.ts:134

Override this in the child class to provide custom
features or module checks

#### Parameters

##### moduleName

[`StringKeyOf`](../../common/type-aliases/StringKeyOf.md)\<[`ExpandAppChainModules`](../type-aliases/ExpandAppChainModules.md)\<`RuntimeModules`, `ProtocolModules`, `SequencerModules`, `AppChainModules`\>\>

##### containedModule

`InstanceType`\<[`ExpandAppChainModules`](../type-aliases/ExpandAppChainModules.md)\<`RuntimeModules`, `ProtocolModules`, `SequencerModules`, `AppChainModules`\>\[[`StringKeyOf`](../../common/type-aliases/StringKeyOf.md)\<[`ExpandAppChainModules`](../type-aliases/ExpandAppChainModules.md)\<`RuntimeModules`, `ProtocolModules`, `SequencerModules`, `AppChainModules`\>\>\]\>

#### Returns

`void`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`decorateModule`](../../common/classes/ModuleContainer.md#decoratemodule)

***

### initializeDependencyFactories()

> `protected` **initializeDependencyFactories**(`factories`): `void`

Defined in: common/dist/config/ModuleContainer.d.ts:140

Inject a set of dependencies using the given list of DependencyFactories
This method should be called during startup

#### Parameters

##### factories

[`StringKeyOf`](../../common/type-aliases/StringKeyOf.md)\<[`ExpandAppChainModules`](../type-aliases/ExpandAppChainModules.md)\<`RuntimeModules`, `ProtocolModules`, `SequencerModules`, `AppChainModules`\>\>[]

#### Returns

`void`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`initializeDependencyFactories`](../../common/classes/ModuleContainer.md#initializedependencyfactories)

***

### isValidModuleName()

> **isValidModuleName**(`modules`, `moduleName`): `moduleName is StringKeyOf<ExpandAppChainModules<RuntimeModules, ProtocolModules, SequencerModules, AppChainModules>>`

Defined in: common/dist/config/ModuleContainer.d.ts:88

#### Parameters

##### modules

[`ExpandAppChainModules`](../type-aliases/ExpandAppChainModules.md)\<`RuntimeModules`, `ProtocolModules`, `SequencerModules`, `AppChainModules`\>

##### moduleName

`string` | `number` | `symbol`

#### Returns

`moduleName is StringKeyOf<ExpandAppChainModules<RuntimeModules, ProtocolModules, SequencerModules, AppChainModules>>`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`isValidModuleName`](../../common/classes/ModuleContainer.md#isvalidmodulename)

***

### onAfterModuleResolution()

> `protected` **onAfterModuleResolution**(`moduleName`): `void`

Defined in: common/dist/config/ModuleContainer.d.ts:154

Handle module resolution, e.g. by decorating resolved modules

#### Parameters

##### moduleName

[`StringKeyOf`](../../common/type-aliases/StringKeyOf.md)\<[`ExpandAppChainModules`](../type-aliases/ExpandAppChainModules.md)\<`RuntimeModules`, `ProtocolModules`, `SequencerModules`, `AppChainModules`\>\>

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

[`ExpandAppChainModules`](../type-aliases/ExpandAppChainModules.md)\<`RuntimeModules`, `ProtocolModules`, `SequencerModules`, `AppChainModules`\>

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

> **resolve**\<`KeyType`\>(`moduleName`): `InstanceType`\<[`ResolvableModules`](../../common/type-aliases/ResolvableModules.md)\<[`ExpandAppChainModules`](../type-aliases/ExpandAppChainModules.md)\<`RuntimeModules`, `ProtocolModules`, `SequencerModules`, `AppChainModules`\>\>\[`KeyType`\]\>

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

`InstanceType`\<[`ResolvableModules`](../../common/type-aliases/ResolvableModules.md)\<[`ExpandAppChainModules`](../type-aliases/ExpandAppChainModules.md)\<`RuntimeModules`, `ProtocolModules`, `SequencerModules`, `AppChainModules`\>\>\[`KeyType`\]\>

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

### start()

> **start**(`proofsEnabled`, `dependencyContainer`): `Promise`\<`void`\>

Defined in: [sdk/src/appChain/AppChain.ts:309](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sdk/src/appChain/AppChain.ts#L309)

Starts the appchain and cross-registers runtime to sequencer

#### Parameters

##### proofsEnabled

`boolean` = `false`

##### dependencyContainer

`DependencyContainer` = `container`

#### Returns

`Promise`\<`void`\>

***

### transaction()

> **transaction**(`sender`, `callback`, `options`?): `Promise`\<[`AppChainTransaction`](AppChainTransaction.md)\>

Defined in: [sdk/src/appChain/AppChain.ts:219](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sdk/src/appChain/AppChain.ts#L219)

#### Parameters

##### sender

`PublicKey`

##### callback

() => `Promise`\<`void`\>

##### options?

###### nonce

`number`

#### Returns

`Promise`\<[`AppChainTransaction`](AppChainTransaction.md)\>

***

### validateModule()

> `protected` **validateModule**(`moduleName`, `containedModule`): `void`

Defined in: common/dist/config/ModuleContainer.d.ts:80

Check if the provided module satisfies the container requirements,
such as only injecting other known modules.

#### Parameters

##### moduleName

[`StringKeyOf`](../../common/type-aliases/StringKeyOf.md)\<[`ExpandAppChainModules`](../type-aliases/ExpandAppChainModules.md)\<`RuntimeModules`, `ProtocolModules`, `SequencerModules`, `AppChainModules`\>\>

##### containedModule

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md)\<`unknown`\>

#### Returns

`void`

#### Inherited from

[`ModuleContainer`](../../common/classes/ModuleContainer.md).[`validateModule`](../../common/classes/ModuleContainer.md#validatemodule)

***

### from()

> `static` **from**\<`RuntimeModules`, `ProtocolModules`, `SequencerModules`, `AppChainModules`\>(`definition`): [`AppChain`](AppChain.md)\<`RuntimeModules`, `ProtocolModules`, `SequencerModules`, `AppChainModules`\>

Defined in: [sdk/src/appChain/AppChain.ts:127](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sdk/src/appChain/AppChain.ts#L127)

#### Type Parameters

• **RuntimeModules** *extends* [`RuntimeModulesRecord`](../../module/type-aliases/RuntimeModulesRecord.md)

• **ProtocolModules** *extends* [`ProtocolModulesRecord`](../../protocol/type-aliases/ProtocolModulesRecord.md) & [`MandatoryProtocolModulesRecord`](../../protocol/type-aliases/MandatoryProtocolModulesRecord.md)

• **SequencerModules** *extends* [`SequencerModulesRecord`](../../sequencer/type-aliases/SequencerModulesRecord.md)

• **AppChainModules** *extends* [`AppChainModulesRecord`](../type-aliases/AppChainModulesRecord.md)

#### Parameters

##### definition

[`AppChainDefinition`](../interfaces/AppChainDefinition.md)\<`RuntimeModules`, `ProtocolModules`, `SequencerModules`, `AppChainModules`\>

#### Returns

[`AppChain`](AppChain.md)\<`RuntimeModules`, `ProtocolModules`, `SequencerModules`, `AppChainModules`\>
