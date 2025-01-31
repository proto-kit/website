---
title: QueryGraphqlModule
---

[**@proto-kit/api**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/api](../README.md) / QueryGraphqlModule

# Class: QueryGraphqlModule\<RuntimeModules\>

Defined in: [api/src/graphql/modules/QueryGraphqlModule.ts:69](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/api/src/graphql/modules/QueryGraphqlModule.ts#L69)

Used by various module sub-types that may need to be configured

## Extends

- [`SchemaGeneratingGraphqlModule`](SchemaGeneratingGraphqlModule.md)

## Type Parameters

• **RuntimeModules** *extends* [`RuntimeModulesRecord`](../../module/type-aliases/RuntimeModulesRecord.md)

## Constructors

### new QueryGraphqlModule()

> **new QueryGraphqlModule**\<`RuntimeModules`\>(`queryTransportModule`, `networkStateTransportModule`, `runtime`, `protocol`, `blockStorage`): [`QueryGraphqlModule`](QueryGraphqlModule.md)\<`RuntimeModules`\>

Defined in: [api/src/graphql/modules/QueryGraphqlModule.ts:72](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/api/src/graphql/modules/QueryGraphqlModule.ts#L72)

#### Parameters

##### queryTransportModule

[`QueryTransportModule`](../../sequencer/interfaces/QueryTransportModule.md)

##### networkStateTransportModule

[`NetworkStateTransportModule`](../../sequencer/interfaces/NetworkStateTransportModule.md)

##### runtime

[`Runtime`](../../module/classes/Runtime.md)\<`RuntimeModules`\>

##### protocol

[`Protocol`](../../protocol/classes/Protocol.md)\<[`MandatoryProtocolModulesRecord`](../../protocol/type-aliases/MandatoryProtocolModulesRecord.md) & [`ProtocolModulesRecord`](../../protocol/type-aliases/ProtocolModulesRecord.md)\>

##### blockStorage

[`BlockStorage`](../../sequencer/interfaces/BlockStorage.md) & [`HistoricalBlockStorage`](../../sequencer/interfaces/HistoricalBlockStorage.md)

#### Returns

[`QueryGraphqlModule`](QueryGraphqlModule.md)\<`RuntimeModules`\>

#### Overrides

[`SchemaGeneratingGraphqlModule`](SchemaGeneratingGraphqlModule.md).[`constructor`](SchemaGeneratingGraphqlModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`NoConfig`](../../common/type-aliases/NoConfig.md)

Defined in: common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`SchemaGeneratingGraphqlModule`](SchemaGeneratingGraphqlModule.md).[`currentConfig`](SchemaGeneratingGraphqlModule.md#currentconfig)

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

[`SchemaGeneratingGraphqlModule`](SchemaGeneratingGraphqlModule.md).[`config`](SchemaGeneratingGraphqlModule.md#config)

## Methods

### create()

> **create**(`childContainerProvider`): `void`

Defined in: common/dist/config/ConfigurableModule.d.ts:20

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../../common/interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Inherited from

[`SchemaGeneratingGraphqlModule`](SchemaGeneratingGraphqlModule.md).[`create`](SchemaGeneratingGraphqlModule.md#create)

***

### generateSchema()

> **generateSchema**(): `GraphQLSchema`

Defined in: [api/src/graphql/modules/QueryGraphqlModule.ts:361](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/api/src/graphql/modules/QueryGraphqlModule.ts#L361)

#### Returns

`GraphQLSchema`

#### Overrides

[`SchemaGeneratingGraphqlModule`](SchemaGeneratingGraphqlModule.md).[`generateSchema`](SchemaGeneratingGraphqlModule.md#generateschema)

***

### generateSchemaForQuery()

> **generateSchemaForQuery**\<`ModuleType`, `ContainerModulesRecord`\>(`container`, `containerQuery`, `namePrefix`): `ObjMap`\<`GraphQLFieldConfig`\<`unknown`, `unknown`\>\>

Defined in: [api/src/graphql/modules/QueryGraphqlModule.ts:310](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/api/src/graphql/modules/QueryGraphqlModule.ts#L310)

#### Type Parameters

• **ModuleType** *extends* [`BaseModuleType`](../../common/type-aliases/BaseModuleType.md)

• **ContainerModulesRecord** *extends* [`ModulesRecord`](../../common/interfaces/ModulesRecord.md)

#### Parameters

##### container

[`ModuleContainer`](../../common/classes/ModuleContainer.md)\<`ContainerModulesRecord`\>

##### containerQuery

[`Query`](../../sequencer/type-aliases/Query.md)\<`ModuleType`, `any`\>

##### namePrefix

`string`

#### Returns

`ObjMap`\<`GraphQLFieldConfig`\<`unknown`, `unknown`\>\>

***

### generateStateMapResolver()

> **generateStateMapResolver**\<`Key`, `Value`\>(`fieldKey`, `query`, `stateMap`): `GraphQLFieldConfig`\<`unknown`, `unknown`\>

Defined in: [api/src/graphql/modules/QueryGraphqlModule.ts:222](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/api/src/graphql/modules/QueryGraphqlModule.ts#L222)

#### Type Parameters

• **Key**

• **Value**

#### Parameters

##### fieldKey

`string`

##### query

[`QueryGetterStateMap`](../../sequencer/interfaces/QueryGetterStateMap.md)\<`Key`, `Value`\>

##### stateMap

[`StateMap`](../../protocol/classes/StateMap.md)\<`Key`, `Value`\>

#### Returns

`GraphQLFieldConfig`\<`unknown`, `unknown`\>

***

### generateStateResolver()

> **generateStateResolver**\<`Value`\>(`fieldKey`, `query`, `state`): `object`

Defined in: [api/src/graphql/modules/QueryGraphqlModule.ts:276](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/api/src/graphql/modules/QueryGraphqlModule.ts#L276)

#### Type Parameters

• **Value**

#### Parameters

##### fieldKey

`string`

##### query

[`QueryGetterState`](../../sequencer/interfaces/QueryGetterState.md)\<`Value`\>

##### state

[`State`](../../protocol/classes/State.md)\<`Value`\>

#### Returns

`object`

##### args

> **args**: `object` = `{}`

##### resolve()

> **resolve**: () => `Promise`\<`any`\>

###### Returns

`Promise`\<`any`\>

##### type

> **type**: `GraphQLScalarType` \| `GraphQLObjectType` = `valueType`

***

### state()

> **state**(`path`): `Promise`\<`undefined` \| `string`[]\>

Defined in: [api/src/graphql/modules/QueryGraphqlModule.ts:93](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/api/src/graphql/modules/QueryGraphqlModule.ts#L93)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`undefined` \| `string`[]\>
