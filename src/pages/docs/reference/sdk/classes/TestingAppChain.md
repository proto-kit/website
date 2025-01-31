---
title: TestingAppChain
---

[**@proto-kit/sdk**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sdk](../README.md) / TestingAppChain

# Class: TestingAppChain\<RuntimeModules, ProtocolModules, SequencerModules, AppChainModules\>

Defined in: [sdk/src/appChain/TestingAppChain.ts:58](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/appChain/TestingAppChain.ts#L58)

AppChain acts as a wrapper connecting Runtime, Protocol and Sequencer

## Extends

- [`AppChain`](AppChain.md)\<`RuntimeModules`, `ProtocolModules`, `SequencerModules`, `AppChainModules`\>

## Type Parameters

• **RuntimeModules** *extends* [`RuntimeModulesRecord`](../../module/type-aliases/RuntimeModulesRecord.md) & [`VanillaRuntimeModulesRecord`](../../library/type-aliases/VanillaRuntimeModulesRecord.md)

• **ProtocolModules** *extends* [`ProtocolModulesRecord`](../../protocol/type-aliases/ProtocolModulesRecord.md) & [`MandatoryProtocolModulesRecord`](../../protocol/type-aliases/MandatoryProtocolModulesRecord.md)

• **SequencerModules** *extends* [`SequencerModulesRecord`](../../sequencer/type-aliases/SequencerModulesRecord.md)

• **AppChainModules** *extends* [`AppChainModulesRecord`](../type-aliases/AppChainModulesRecord.md)

## Constructors

### new TestingAppChain()

> **new TestingAppChain**\<`RuntimeModules`, `ProtocolModules`, `SequencerModules`, `AppChainModules`\>(`definition`): [`TestingAppChain`](TestingAppChain.md)\<`RuntimeModules`, `ProtocolModules`, `SequencerModules`, `AppChainModules`\>

Defined in: [sdk/src/appChain/AppChain.ts:151](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/appChain/AppChain.ts#L151)

#### Parameters

##### definition

[`AppChainDefinition`](../interfaces/AppChainDefinition.md)\<`RuntimeModules`, `ProtocolModules`, `SequencerModules`, `AppChainModules`\>

#### Returns

[`TestingAppChain`](TestingAppChain.md)\<`RuntimeModules`, `ProtocolModules`, `SequencerModules`, `AppChainModules`\>

#### Inherited from

[`AppChain`](AppChain.md).[`constructor`](AppChain.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`ModulesConfig`](../../common/type-aliases/ModulesConfig.md)\<[`ExpandAppChainModules`](../type-aliases/ExpandAppChainModules.md)\<`RuntimeModules`, `ProtocolModules`, `SequencerModules`, `AppChainModules`\>\>

Defined in: common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`AppChain`](AppChain.md).[`currentConfig`](AppChain.md#currentconfig)

***

### definition

> **definition**: [`ExpandAppChainDefinition`](../interfaces/ExpandAppChainDefinition.md)\<`RuntimeModules`, `ProtocolModules`, `SequencerModules`, `AppChainModules`\>

Defined in: [sdk/src/appChain/AppChain.ts:144](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/appChain/AppChain.ts#L144)

#### Inherited from

[`AppChain`](AppChain.md).[`definition`](AppChain.md#definition-1)

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

[`AppChain`](AppChain.md).[`config`](AppChain.md#config)

***

### container

#### Get Signature

> **get** `protected` **container**(): `DependencyContainer`

Defined in: common/dist/config/ModuleContainer.d.ts:81

##### Returns

`DependencyContainer`

#### Inherited from

[`AppChain`](AppChain.md).[`container`](AppChain.md#container)

***

### events

#### Get Signature

> **get** **events**(): [`EventEmitterProxy`](../../common/classes/EventEmitterProxy.md)\<`Modules`\>

Defined in: common/dist/config/ModuleContainer.d.ts:99

##### Returns

[`EventEmitterProxy`](../../common/classes/EventEmitterProxy.md)\<`Modules`\>

#### Inherited from

[`AppChain`](AppChain.md).[`events`](AppChain.md#events)

***

### moduleNames

#### Get Signature

> **get** **moduleNames**(): `string`[]

Defined in: common/dist/config/ModuleContainer.d.ts:72

##### Returns

`string`[]

list of module names

#### Inherited from

[`AppChain`](AppChain.md).[`moduleNames`](AppChain.md#modulenames)

***

### protocol

#### Get Signature

> **get** **protocol**(): [`Protocol`](../../protocol/classes/Protocol.md)\<`ProtocolModules`\>

Defined in: [sdk/src/appChain/AppChain.ts:215](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/appChain/AppChain.ts#L215)

##### Returns

[`Protocol`](../../protocol/classes/Protocol.md)\<`ProtocolModules`\>

#### Inherited from

[`AppChain`](AppChain.md).[`protocol`](AppChain.md#protocol)

***

### query

#### Get Signature

> **get** **query**(): `object`

Defined in: [sdk/src/appChain/AppChain.ts:176](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/appChain/AppChain.ts#L176)

##### Returns

`object`

###### network

> **network**: [`NetworkStateQuery`](../../sequencer/classes/NetworkStateQuery.md)

###### protocol

> **protocol**: [`Query`](../../sequencer/type-aliases/Query.md)\<[`ProtocolModule`](../../protocol/classes/ProtocolModule.md)\<`unknown`\>, `ProtocolModules`\>

###### runtime

> **runtime**: [`Query`](../../sequencer/type-aliases/Query.md)\<[`RuntimeModule`](../../module/classes/RuntimeModule.md)\<`unknown`\>, `RuntimeModules`\>

#### Inherited from

[`AppChain`](AppChain.md).[`query`](AppChain.md#query)

***

### runtime

#### Get Signature

> **get** **runtime**(): [`Runtime`](../../module/classes/Runtime.md)\<`RuntimeModules`\>

Defined in: [sdk/src/appChain/AppChain.ts:207](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/appChain/AppChain.ts#L207)

##### Returns

[`Runtime`](../../module/classes/Runtime.md)\<`RuntimeModules`\>

#### Inherited from

[`AppChain`](AppChain.md).[`runtime`](AppChain.md#runtime-1)

***

### sequencer

#### Get Signature

> **get** **sequencer**(): [`Sequencer`](../../sequencer/classes/Sequencer.md)\<`SequencerModules`\>

Defined in: [sdk/src/appChain/AppChain.ts:211](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/appChain/AppChain.ts#L211)

##### Returns

[`Sequencer`](../../sequencer/classes/Sequencer.md)\<`SequencerModules`\>

#### Inherited from

[`AppChain`](AppChain.md).[`sequencer`](AppChain.md#sequencer)

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

[`AppChain`](AppChain.md).[`assertContainerInitialized`](AppChain.md#assertcontainerinitialized)

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

[`AppChain`](AppChain.md).[`assertIsValidModuleName`](AppChain.md#assertisvalidmodulename)

***

### close()

> **close**(): `Promise`\<`void`\>

Defined in: [sdk/src/appChain/AppChain.ts:352](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/appChain/AppChain.ts#L352)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`AppChain`](AppChain.md).[`close`](AppChain.md#close)

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

[`AppChain`](AppChain.md).[`configure`](AppChain.md#configure)

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

[`AppChain`](AppChain.md).[`configurePartial`](AppChain.md#configurepartial)

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

[`AppChain`](AppChain.md).[`create`](AppChain.md#create)

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

[`AppChain`](AppChain.md).[`decorateModule`](AppChain.md#decoratemodule)

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

[`AppChain`](AppChain.md).[`initializeDependencyFactories`](AppChain.md#initializedependencyfactories)

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

[`AppChain`](AppChain.md).[`isValidModuleName`](AppChain.md#isvalidmodulename)

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

[`AppChain`](AppChain.md).[`onAfterModuleResolution`](AppChain.md#onaftermoduleresolution)

***

### produceBlock()

> **produceBlock**(): `Promise`\<`undefined` \| [`Block`](../../sequencer/interfaces/Block.md)\>

Defined in: [sdk/src/appChain/TestingAppChain.ts:135](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/appChain/TestingAppChain.ts#L135)

#### Returns

`Promise`\<`undefined` \| [`Block`](../../sequencer/interfaces/Block.md)\>

***

### produceBlockWithResult()

> **produceBlockWithResult**(): `Promise`\<`undefined` \| [`BlockWithResult`](../../sequencer/interfaces/BlockWithResult.md)\>

Defined in: [sdk/src/appChain/TestingAppChain.ts:144](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/appChain/TestingAppChain.ts#L144)

#### Returns

`Promise`\<`undefined` \| [`BlockWithResult`](../../sequencer/interfaces/BlockWithResult.md)\>

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

[`AppChain`](AppChain.md).[`registerAliases`](AppChain.md#registeraliases)

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

[`AppChain`](AppChain.md).[`registerClasses`](AppChain.md#registerclasses)

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

[`AppChain`](AppChain.md).[`registerModules`](AppChain.md#registermodules)

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

[`AppChain`](AppChain.md).[`registerValue`](AppChain.md#registervalue)

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

[`AppChain`](AppChain.md).[`resolve`](AppChain.md#resolve)

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

[`AppChain`](AppChain.md).[`resolveOrFail`](AppChain.md#resolveorfail)

***

### setSigner()

> **setSigner**(`signer`): `void`

Defined in: [sdk/src/appChain/TestingAppChain.ts:130](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/appChain/TestingAppChain.ts#L130)

#### Parameters

##### signer

`PrivateKey`

#### Returns

`void`

***

### start()

> **start**(`proofsEnabled`, `dependencyContainer`): `Promise`\<`void`\>

Defined in: [sdk/src/appChain/AppChain.ts:309](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/appChain/AppChain.ts#L309)

Starts the appchain and cross-registers runtime to sequencer

#### Parameters

##### proofsEnabled

`boolean` = `false`

##### dependencyContainer

`DependencyContainer` = `container`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`AppChain`](AppChain.md).[`start`](AppChain.md#start)

***

### transaction()

> **transaction**(`sender`, `callback`, `options`?): `Promise`\<[`AppChainTransaction`](AppChainTransaction.md)\>

Defined in: [sdk/src/appChain/AppChain.ts:219](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/appChain/AppChain.ts#L219)

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

#### Inherited from

[`AppChain`](AppChain.md).[`transaction`](AppChain.md#transaction)

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

[`AppChain`](AppChain.md).[`validateModule`](AppChain.md#validatemodule)

***

### from()

> `static` **from**\<`RuntimeModules`, `ProtocolModules`, `SequencerModules`, `AppChainModules`\>(`definition`): [`AppChain`](AppChain.md)\<`RuntimeModules`, `ProtocolModules`, `SequencerModules`, `AppChainModules`\>

Defined in: [sdk/src/appChain/AppChain.ts:127](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/appChain/AppChain.ts#L127)

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

#### Inherited from

[`AppChain`](AppChain.md).[`from`](AppChain.md#from)

***

### fromRuntime()

> `static` **fromRuntime**\<`RuntimeModules`\>(`runtimeModules`): [`TestingAppChain`](TestingAppChain.md)\<`object` & `RuntimeModules`, [`MandatoryProtocolModulesRecord`](../../protocol/type-aliases/MandatoryProtocolModulesRecord.md) & `object`, \{ `BaseLayer`: *typeof* [`NoopBaseLayer`](../../sequencer/classes/NoopBaseLayer.md); `BatchProducerModule`: *typeof* [`BatchProducerModule`](../../sequencer/classes/BatchProducerModule.md); `BlockProducerModule`: *typeof* [`BlockProducerModule`](../../sequencer/classes/BlockProducerModule.md); `BlockTrigger`: *typeof* [`ManualBlockTrigger`](../../sequencer/classes/ManualBlockTrigger.md); `Database`: *typeof* [`InMemoryDatabase`](../../sequencer/classes/InMemoryDatabase.md); `LocalTaskWorkerModule`: [`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`LocalTaskWorkerModule`](../../sequencer/classes/LocalTaskWorkerModule.md)\<\{ `BlockBuildingTask`: *typeof* [`NewBlockTask`](../../sequencer/classes/NewBlockTask.md); `BlockReductionTask`: *typeof* `BlockReductionTask`; `CircuitCompilerTask`: *typeof* `CircuitCompilerTask`; `RuntimeProvingTask`: *typeof* [`RuntimeProvingTask`](../../sequencer/classes/RuntimeProvingTask.md); `StateTransitionReductionTask`: *typeof* [`StateTransitionReductionTask`](../../sequencer/classes/StateTransitionReductionTask.md); `StateTransitionTask`: *typeof* [`StateTransitionTask`](../../sequencer/classes/StateTransitionTask.md); `TransactionProvingTask`: *typeof* [`TransactionProvingTask`](../../sequencer/classes/TransactionProvingTask.md); `WorkerRegistrationTask`: *typeof* `WorkerRegistrationTask`; \}\>\>; `Mempool`: *typeof* [`PrivateMempool`](../../sequencer/classes/PrivateMempool.md); `TaskQueue`: *typeof* [`LocalTaskQueue`](../../sequencer/classes/LocalTaskQueue.md); \}, \{ `NetworkStateTransportModule`: *typeof* [`BlockStorageNetworkStateModule`](BlockStorageNetworkStateModule.md); `QueryTransportModule`: *typeof* [`StateServiceQueryModule`](StateServiceQueryModule.md); `Signer`: *typeof* [`InMemorySigner`](InMemorySigner.md); `TransactionSender`: *typeof* [`InMemoryTransactionSender`](InMemoryTransactionSender.md); \}\>

Defined in: [sdk/src/appChain/TestingAppChain.ts:70](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/appChain/TestingAppChain.ts#L70)

#### Type Parameters

• **RuntimeModules** *extends* [`RuntimeModulesRecord`](../../module/type-aliases/RuntimeModulesRecord.md) & [`PartialVanillaRuntimeModulesRecord`](../type-aliases/PartialVanillaRuntimeModulesRecord.md)

#### Parameters

##### runtimeModules

`RuntimeModules`

#### Returns

[`TestingAppChain`](TestingAppChain.md)\<`object` & `RuntimeModules`, [`MandatoryProtocolModulesRecord`](../../protocol/type-aliases/MandatoryProtocolModulesRecord.md) & `object`, \{ `BaseLayer`: *typeof* [`NoopBaseLayer`](../../sequencer/classes/NoopBaseLayer.md); `BatchProducerModule`: *typeof* [`BatchProducerModule`](../../sequencer/classes/BatchProducerModule.md); `BlockProducerModule`: *typeof* [`BlockProducerModule`](../../sequencer/classes/BlockProducerModule.md); `BlockTrigger`: *typeof* [`ManualBlockTrigger`](../../sequencer/classes/ManualBlockTrigger.md); `Database`: *typeof* [`InMemoryDatabase`](../../sequencer/classes/InMemoryDatabase.md); `LocalTaskWorkerModule`: [`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`LocalTaskWorkerModule`](../../sequencer/classes/LocalTaskWorkerModule.md)\<\{ `BlockBuildingTask`: *typeof* [`NewBlockTask`](../../sequencer/classes/NewBlockTask.md); `BlockReductionTask`: *typeof* `BlockReductionTask`; `CircuitCompilerTask`: *typeof* `CircuitCompilerTask`; `RuntimeProvingTask`: *typeof* [`RuntimeProvingTask`](../../sequencer/classes/RuntimeProvingTask.md); `StateTransitionReductionTask`: *typeof* [`StateTransitionReductionTask`](../../sequencer/classes/StateTransitionReductionTask.md); `StateTransitionTask`: *typeof* [`StateTransitionTask`](../../sequencer/classes/StateTransitionTask.md); `TransactionProvingTask`: *typeof* [`TransactionProvingTask`](../../sequencer/classes/TransactionProvingTask.md); `WorkerRegistrationTask`: *typeof* `WorkerRegistrationTask`; \}\>\>; `Mempool`: *typeof* [`PrivateMempool`](../../sequencer/classes/PrivateMempool.md); `TaskQueue`: *typeof* [`LocalTaskQueue`](../../sequencer/classes/LocalTaskQueue.md); \}, \{ `NetworkStateTransportModule`: *typeof* [`BlockStorageNetworkStateModule`](BlockStorageNetworkStateModule.md); `QueryTransportModule`: *typeof* [`StateServiceQueryModule`](StateServiceQueryModule.md); `Signer`: *typeof* [`InMemorySigner`](InMemorySigner.md); `TransactionSender`: *typeof* [`InMemoryTransactionSender`](InMemoryTransactionSender.md); \}\>
