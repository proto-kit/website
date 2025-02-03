---
title: NoopBaseLayer
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / NoopBaseLayer

# Class: NoopBaseLayer

Defined in: [packages/sequencer/src/protocol/baselayer/NoopBaseLayer.ts:53](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/baselayer/NoopBaseLayer.ts#L53)

Lifecycle of a SequencerModule

start(): Executed to execute any logic required to start the module

## Extends

- [`SequencerModule`](SequencerModule.md)

## Implements

- [`BaseLayer`](../interfaces/BaseLayer.md)

## Constructors

### new NoopBaseLayer()

> **new NoopBaseLayer**(): [`NoopBaseLayer`](NoopBaseLayer.md)

#### Returns

[`NoopBaseLayer`](NoopBaseLayer.md)

#### Inherited from

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

### blockProduced()

> **blockProduced**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/protocol/baselayer/NoopBaseLayer.ts:54](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/baselayer/NoopBaseLayer.ts#L54)

#### Returns

`Promise`\<`void`\>

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

### dependencies()

> **dependencies**(): [`BaseLayerDependencyRecord`](../interfaces/BaseLayerDependencyRecord.md)

Defined in: [packages/sequencer/src/protocol/baselayer/NoopBaseLayer.ts:62](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/baselayer/NoopBaseLayer.ts#L62)

#### Returns

[`BaseLayerDependencyRecord`](../interfaces/BaseLayerDependencyRecord.md)

#### Implementation of

[`BaseLayer`](../interfaces/BaseLayer.md).[`dependencies`](../interfaces/BaseLayer.md#dependencies)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/protocol/baselayer/NoopBaseLayer.ts:58](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/baselayer/NoopBaseLayer.ts#L58)

Start the module and all it's functionality.
The returned Promise has to resolve after initialization,
since it will block in the sequencer init.
That means that you mustn't await server.start() for example.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`SequencerModule`](SequencerModule.md).[`start`](SequencerModule.md#start)
