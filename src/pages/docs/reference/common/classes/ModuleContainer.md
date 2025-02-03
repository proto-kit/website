---
title: ModuleContainer
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / ModuleContainer

# Class: ModuleContainer\<Modules\>

Defined in: [packages/common/src/config/ModuleContainer.ts:145](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/config/ModuleContainer.ts#L145)

Reusable module container facilitating registration, resolution
configuration, decoration and validation of modules

## Extends

- [`ConfigurableModule`](ConfigurableModule.md)\<[`ModulesConfig`](../type-aliases/ModulesConfig.md)\<`Modules`\>\>

## Extended by

- [`GraphqlSequencerModule`](../../api/classes/GraphqlSequencerModule.md)
- [`Indexer`](../../indexer/classes/Indexer.md)
- [`Runtime`](../../module/classes/Runtime.md)
- [`Processor`](../../processor/classes/Processor.md)
- [`Protocol`](../../protocol/classes/Protocol.md)
- [`SettlementContractModule`](../../protocol/classes/SettlementContractModule.md)
- [`AppChain`](../../sdk/classes/AppChain.md)
- [`LocalTaskWorkerModule`](../../sequencer/classes/LocalTaskWorkerModule.md)
- [`Sequencer`](../../sequencer/classes/Sequencer.md)

## Type Parameters

• **Modules** *extends* [`ModulesRecord`](../interfaces/ModulesRecord.md)

## Constructors

### new ModuleContainer()

> **new ModuleContainer**\<`Modules`\>(`definition`): [`ModuleContainer`](ModuleContainer.md)\<`Modules`\>

Defined in: [packages/common/src/config/ModuleContainer.ts:159](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/config/ModuleContainer.ts#L159)

#### Parameters

##### definition

[`ModuleContainerDefinition`](../interfaces/ModuleContainerDefinition.md)\<`Modules`\>

#### Returns

[`ModuleContainer`](ModuleContainer.md)\<`Modules`\>

#### Overrides

[`ConfigurableModule`](ConfigurableModule.md).[`constructor`](ConfigurableModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`ModulesConfig`](../type-aliases/ModulesConfig.md)\<`Modules`\>

Defined in: [packages/common/src/config/ConfigurableModule.ts:34](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/config/ConfigurableModule.ts#L34)

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`ConfigurableModule`](ConfigurableModule.md).[`currentConfig`](ConfigurableModule.md#currentconfig)

***

### definition

> **definition**: [`ModuleContainerDefinition`](../interfaces/ModuleContainerDefinition.md)\<`Modules`\>

Defined in: [packages/common/src/config/ModuleContainer.ts:159](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/config/ModuleContainer.ts#L159)

## Accessors

### config

#### Get Signature

> **get** **config**(): [`ModulesConfig`](../type-aliases/ModulesConfig.md)\<`Modules`\>

Defined in: [packages/common/src/config/ModuleContainer.ts:317](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/config/ModuleContainer.ts#L317)

##### Returns

[`ModulesConfig`](../type-aliases/ModulesConfig.md)\<`Modules`\>

#### Set Signature

> **set** **config**(`config`): `void`

Defined in: [packages/common/src/config/ModuleContainer.ts:321](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/config/ModuleContainer.ts#L321)

##### Parameters

###### config

[`ModulesConfig`](../type-aliases/ModulesConfig.md)\<`Modules`\>

##### Returns

`void`

#### Overrides

[`ConfigurableModule`](ConfigurableModule.md).[`config`](ConfigurableModule.md#config)

***

### container

#### Get Signature

> **get** `protected` **container**(): `DependencyContainer`

Defined in: [packages/common/src/config/ModuleContainer.ts:199](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/config/ModuleContainer.ts#L199)

##### Returns

`DependencyContainer`

***

### events

#### Get Signature

> **get** **events**(): [`EventEmitterProxy`](EventEmitterProxy.md)\<`Modules`\>

Defined in: [packages/common/src/config/ModuleContainer.ts:270](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/config/ModuleContainer.ts#L270)

##### Returns

[`EventEmitterProxy`](EventEmitterProxy.md)\<`Modules`\>

***

### moduleNames

#### Get Signature

> **get** **moduleNames**(): `string`[]

Defined in: [packages/common/src/config/ModuleContainer.ts:166](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/config/ModuleContainer.ts#L166)

##### Returns

`string`[]

list of module names

## Methods

### assertContainerInitialized()

> **assertContainerInitialized**(`container`): `asserts container is DependencyContainer`

Defined in: [packages/common/src/config/ModuleContainer.ts:224](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/config/ModuleContainer.ts#L224)

#### Parameters

##### container

`undefined` | `DependencyContainer`

#### Returns

`asserts container is DependencyContainer`

***

### assertIsValidModuleName()

> **assertIsValidModuleName**(`moduleName`): `asserts moduleName is StringKeyOf<Modules>`

Defined in: [packages/common/src/config/ModuleContainer.ts:209](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/config/ModuleContainer.ts#L209)

Assert that the iterated `moduleName` is of ModuleName type,
otherwise it may be just string e.g. when modules are iterated over
using e.g. a for loop.

#### Parameters

##### moduleName

`string`

#### Returns

`asserts moduleName is StringKeyOf<Modules>`

***

### configure()

> **configure**(`config`): `void`

Defined in: [packages/common/src/config/ModuleContainer.ts:306](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/config/ModuleContainer.ts#L306)

Provide additional configuration after the ModuleContainer was created.

Keep in mind that modules are only decorated once after they are resolved,
therefore applying any configuration must happen
before the first resolution.

#### Parameters

##### config

[`ModulesConfig`](../type-aliases/ModulesConfig.md)\<`Modules`\>

#### Returns

`void`

***

### configurePartial()

> **configurePartial**(`config`): `void`

Defined in: [packages/common/src/config/ModuleContainer.ts:310](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/config/ModuleContainer.ts#L310)

#### Parameters

##### config

[`RecursivePartial`](../type-aliases/RecursivePartial.md)\<[`ModulesConfig`](../type-aliases/ModulesConfig.md)\<`Modules`\>\>

#### Returns

`void`

***

### create()

> **create**(`childContainerProvider`): `void`

Defined in: [packages/common/src/config/ModuleContainer.ts:479](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/config/ModuleContainer.ts#L479)

This is a placeholder for individual modules to override.
This method will be called whenever the underlying container fully
initialized

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Overrides

[`ConfigurableModule`](ConfigurableModule.md).[`create`](ConfigurableModule.md#create)

***

### decorateModule()

> `protected` **decorateModule**(`moduleName`, `containedModule`): `void`

Defined in: [packages/common/src/config/ModuleContainer.ts:364](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/config/ModuleContainer.ts#L364)

Override this in the child class to provide custom
features or module checks

#### Parameters

##### moduleName

[`StringKeyOf`](../type-aliases/StringKeyOf.md)\<`Modules`\>

##### containedModule

`InstanceType`\<`Modules`\[[`StringKeyOf`](../type-aliases/StringKeyOf.md)\<`Modules`\>\]\>

#### Returns

`void`

***

### initializeDependencyFactories()

> `protected` **initializeDependencyFactories**(`factories`): `void`

Defined in: [packages/common/src/config/ModuleContainer.ts:389](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/config/ModuleContainer.ts#L389)

Inject a set of dependencies using the given list of DependencyFactories
This method should be called during startup

#### Parameters

##### factories

[`StringKeyOf`](../type-aliases/StringKeyOf.md)\<`Modules`\>[]

#### Returns

`void`

***

### isValidModuleName()

> **isValidModuleName**(`modules`, `moduleName`): `moduleName is StringKeyOf<Modules>`

Defined in: [packages/common/src/config/ModuleContainer.ts:217](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/config/ModuleContainer.ts#L217)

#### Parameters

##### modules

`Modules`

##### moduleName

`string` | `number` | `symbol`

#### Returns

`moduleName is StringKeyOf<Modules>`

***

### onAfterModuleResolution()

> `protected` **onAfterModuleResolution**(`moduleName`): `void`

Defined in: [packages/common/src/config/ModuleContainer.ts:451](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/config/ModuleContainer.ts#L451)

Handle module resolution, e.g. by decorating resolved modules

#### Parameters

##### moduleName

[`StringKeyOf`](../type-aliases/StringKeyOf.md)\<`Modules`\>

#### Returns

`void`

***

### registerAliases()

> `protected` **registerAliases**(`originalToken`, `clas`): `void`

Defined in: [packages/common/src/config/ModuleContainer.ts:232](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/config/ModuleContainer.ts#L232)

#### Parameters

##### originalToken

`string`

##### clas

[`TypedClass`](../type-aliases/TypedClass.md)\<`any`\>

#### Returns

`void`

***

### registerClasses()

> `protected` **registerClasses**(`modules`): `void`

Defined in: [packages/common/src/config/ModuleContainer.ts:288](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/config/ModuleContainer.ts#L288)

#### Parameters

##### modules

`Record`\<`string`, [`TypedClass`](../type-aliases/TypedClass.md)\<`unknown`\>\>

#### Returns

`void`

***

### registerModules()

> `protected` **registerModules**(`modules`): `void`

Defined in: [packages/common/src/config/ModuleContainer.ts:249](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/config/ModuleContainer.ts#L249)

Register modules into the current container, and registers
a respective resolution hook in order to decorate the module
upon/after resolution.

#### Parameters

##### modules

`Modules`

#### Returns

`void`

***

### registerValue()

> **registerValue**\<`Value`\>(`modules`): `void`

Defined in: [packages/common/src/config/ModuleContainer.ts:282](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/config/ModuleContainer.ts#L282)

Register a non-module value into the current container

#### Type Parameters

• **Value**

#### Parameters

##### modules

`Record`\<`string`, `Value`\>

#### Returns

`void`

***

### resolve()

> **resolve**\<`KeyType`\>(`moduleName`): `InstanceType`\<[`ResolvableModules`](../type-aliases/ResolvableModules.md)\<`Modules`\>\[`KeyType`\]\>

Defined in: [packages/common/src/config/ModuleContainer.ts:338](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/config/ModuleContainer.ts#L338)

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

`InstanceType`\<[`ResolvableModules`](../type-aliases/ResolvableModules.md)\<`Modules`\>\[`KeyType`\]\>

***

### resolveOrFail()

> **resolveOrFail**\<`ModuleType`\>(`moduleName`, `moduleType`): `ModuleType`

Defined in: [packages/common/src/config/ModuleContainer.ts:346](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/config/ModuleContainer.ts#L346)

#### Type Parameters

• **ModuleType**

#### Parameters

##### moduleName

`string`

##### moduleType

[`TypedClass`](../type-aliases/TypedClass.md)\<`ModuleType`\>

#### Returns

`ModuleType`

***

### validateModule()

> `protected` **validateModule**(`moduleName`, `containedModule`): `void`

Defined in: [packages/common/src/config/ModuleContainer.ts:177](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/config/ModuleContainer.ts#L177)

Check if the provided module satisfies the container requirements,
such as only injecting other known modules.

#### Parameters

##### moduleName

[`StringKeyOf`](../type-aliases/StringKeyOf.md)\<`Modules`\>

##### containedModule

[`ConfigurableModule`](ConfigurableModule.md)\<`unknown`\>

#### Returns

`void`
