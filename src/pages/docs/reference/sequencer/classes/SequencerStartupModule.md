---
title: SequencerStartupModule
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / SequencerStartupModule

# Class: SequencerStartupModule

Defined in: [packages/sequencer/src/sequencer/SequencerStartupModule.ts:28](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/sequencer/SequencerStartupModule.ts#L28)

Lifecycle of a SequencerModule

start(): Executed to execute any logic required to start the module

## Extends

- [`SequencerModule`](SequencerModule.md)

## Implements

- [`Closeable`](../interfaces/Closeable.md)

## Constructors

### new SequencerStartupModule()

> **new SequencerStartupModule**(`flowCreator`, `protocol`, `compileTask`, `verificationKeyService`, `registrationFlow`, `compileRegistry`): [`SequencerStartupModule`](SequencerStartupModule.md)

Defined in: [packages/sequencer/src/sequencer/SequencerStartupModule.ts:32](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/sequencer/SequencerStartupModule.ts#L32)

#### Parameters

##### flowCreator

[`FlowCreator`](FlowCreator.md)

##### protocol

[`Protocol`](../../protocol/classes/Protocol.md)\<[`MandatoryProtocolModulesRecord`](../../protocol/type-aliases/MandatoryProtocolModulesRecord.md)\>

##### compileTask

`CircuitCompilerTask`

##### verificationKeyService

`VerificationKeyService`

##### registrationFlow

`WorkerRegistrationFlow`

##### compileRegistry

[`CompileRegistry`](../../common/classes/CompileRegistry.md)

#### Returns

[`SequencerStartupModule`](SequencerStartupModule.md)

#### Overrides

[`SequencerModule`](SequencerModule.md).[`constructor`](SequencerModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`NoConfig`](../../common/type-aliases/NoConfig.md)

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`SequencerModule`](SequencerModule.md).[`currentConfig`](SequencerModule.md#currentconfig)

***

### presets

> `static` **presets**: [`Presets`](../../common/type-aliases/Presets.md)\<`unknown`\> = `{}`

Defined in: [packages/sequencer/src/sequencer/builder/SequencerModule.ts:18](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/sequencer/builder/SequencerModule.ts#L18)

#### Inherited from

[`SequencerModule`](SequencerModule.md).[`presets`](SequencerModule.md#presets)

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

[`SequencerModule`](SequencerModule.md).[`config`](SequencerModule.md#config)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/sequencer/SequencerStartupModule.ts:153](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/sequencer/SequencerStartupModule.ts#L153)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Closeable`](../interfaces/Closeable.md).[`close`](../interfaces/Closeable.md#close)

***

### compileRuntime()

> **compileRuntime**(`flow`): `Promise`\<`bigint`\>

Defined in: [packages/sequencer/src/sequencer/SequencerStartupModule.ts:55](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/sequencer/SequencerStartupModule.ts#L55)

#### Parameters

##### flow

[`Flow`](Flow.md)\<\{\}\>

#### Returns

`Promise`\<`bigint`\>

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

[`SequencerModule`](SequencerModule.md).[`create`](SequencerModule.md#create)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/sequencer/SequencerStartupModule.ts:122](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/sequencer/SequencerStartupModule.ts#L122)

Start the module and all it's functionality.
The returned Promise has to resolve after initialization,
since it will block in the sequencer init.
That means that you mustn't await server.start() for example.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`SequencerModule`](SequencerModule.md).[`start`](SequencerModule.md#start)
