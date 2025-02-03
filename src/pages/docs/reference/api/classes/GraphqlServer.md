---
title: GraphqlServer
---

[**@proto-kit/api**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/api](../README.md) / GraphqlServer

# Class: GraphqlServer

Defined in: [api/src/graphql/GraphqlServer.ts:30](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/api/src/graphql/GraphqlServer.ts#L30)

Lifecycle of a SequencerModule

start(): Executed to execute any logic required to start the module

## Extends

- [`SequencerModule`](../../sequencer/classes/SequencerModule.md)\<`GraphqlServerOptions`\>

## Constructors

### new GraphqlServer()

> **new GraphqlServer**(): [`GraphqlServer`](GraphqlServer.md)

#### Returns

[`GraphqlServer`](GraphqlServer.md)

#### Inherited from

[`SequencerModule`](../../sequencer/classes/SequencerModule.md).[`constructor`](../../sequencer/classes/SequencerModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| `GraphqlServerOptions`

Defined in: common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`SequencerModule`](../../sequencer/classes/SequencerModule.md).[`currentConfig`](../../sequencer/classes/SequencerModule.md#currentconfig)

***

### presets

> `static` **presets**: [`Presets`](../../common/type-aliases/Presets.md)\<`unknown`\>

Defined in: sequencer/dist/sequencer/builder/SequencerModule.d.ts:8

#### Inherited from

[`SequencerModule`](../../sequencer/classes/SequencerModule.md).[`presets`](../../sequencer/classes/SequencerModule.md#presets)

## Accessors

### config

#### Get Signature

> **get** **config**(): `Config`

Defined in: common/dist/config/ConfigurableModule.d.ts:18

##### Returns

`Config`

#### Set Signature

> **set** **config**(`config`): `void`

Defined in: common/dist/config/ConfigurableModule.d.ts:19

##### Parameters

###### config

`Config`

##### Returns

`void`

#### Inherited from

[`SequencerModule`](../../sequencer/classes/SequencerModule.md).[`config`](../../sequencer/classes/SequencerModule.md#config)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

Defined in: [api/src/graphql/GraphqlServer.ts:148](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/api/src/graphql/GraphqlServer.ts#L148)

#### Returns

`Promise`\<`void`\>

***

### create()

> **create**(`childContainerProvider`): `void`

Defined in: common/dist/config/ConfigurableModule.d.ts:20

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../../common/interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Inherited from

[`SequencerModule`](../../sequencer/classes/SequencerModule.md).[`create`](../../sequencer/classes/SequencerModule.md#create)

***

### registerModule()

> **registerModule**(`module`): `void`

Defined in: [api/src/graphql/GraphqlServer.ts:55](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/api/src/graphql/GraphqlServer.ts#L55)

#### Parameters

##### module

[`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`GraphqlModule`](GraphqlModule.md)\<`unknown`\>\>

#### Returns

`void`

***

### registerResolvers()

> **registerResolvers**(`resolvers`): `void`

Defined in: [api/src/graphql/GraphqlServer.ts:63](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/api/src/graphql/GraphqlServer.ts#L63)

#### Parameters

##### resolvers

`NonEmptyArray`\<`Function`\>

#### Returns

`void`

***

### registerSchema()

> **registerSchema**(`schema`): `void`

Defined in: [api/src/graphql/GraphqlServer.ts:59](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/api/src/graphql/GraphqlServer.ts#L59)

#### Parameters

##### schema

`GraphQLSchema`

#### Returns

`void`

***

### setContainer()

> **setContainer**(`container`): `void`

Defined in: [api/src/graphql/GraphqlServer.ts:43](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/api/src/graphql/GraphqlServer.ts#L43)

#### Parameters

##### container

`DependencyContainer`

#### Returns

`void`

***

### setContext()

> **setContext**(`context`): `void`

Defined in: [api/src/graphql/GraphqlServer.ts:71](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/api/src/graphql/GraphqlServer.ts#L71)

#### Parameters

##### context

#### Returns

`void`

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [api/src/graphql/GraphqlServer.ts:75](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/api/src/graphql/GraphqlServer.ts#L75)

Start the module and all it's functionality.
The returned Promise has to resolve after initialization,
since it will block in the sequencer init.
That means that you mustn't await server.start() for example.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`SequencerModule`](../../sequencer/classes/SequencerModule.md).[`start`](../../sequencer/classes/SequencerModule.md#start)

***

### startServer()

> **startServer**(): `Promise`\<`void`\>

Defined in: [api/src/graphql/GraphqlServer.ts:79](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/api/src/graphql/GraphqlServer.ts#L79)

#### Returns

`Promise`\<`void`\>
