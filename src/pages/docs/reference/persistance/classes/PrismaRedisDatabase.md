---
title: PrismaRedisDatabase
---

[**@proto-kit/persistance**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/persistance](../README.md) / PrismaRedisDatabase

# Class: PrismaRedisDatabase

Defined in: [packages/persistance/src/PrismaRedisDatabase.ts:31](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/PrismaRedisDatabase.ts#L31)

This is an abstract class for creating DependencyFactories, a pattern
to bundle multiple smaller services into one and register them into the
injection context.

This can for example be a StorageDependencyFactory that creates dependencies
like StateService, MerkleWitnessService, etc. So in general, services that
are not ConfigurableModules, but still are their own logical unit.

DependencyFactories are designed to only be used statically for sets of
deps that are necessary for the sequencer to work.

## Extends

- [`SequencerModule`](../../sequencer/classes/SequencerModule.md)\<[`PrismaRedisCombinedConfig`](../interfaces/PrismaRedisCombinedConfig.md)\>

## Implements

- [`PrismaConnection`](../interfaces/PrismaConnection.md)
- [`RedisConnection`](../interfaces/RedisConnection.md)
- [`Database`](../../sequencer/interfaces/Database.md)

## Constructors

### new PrismaRedisDatabase()

> **new PrismaRedisDatabase**(): [`PrismaRedisDatabase`](PrismaRedisDatabase.md)

Defined in: [packages/persistance/src/PrismaRedisDatabase.ts:39](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/PrismaRedisDatabase.ts#L39)

#### Returns

[`PrismaRedisDatabase`](PrismaRedisDatabase.md)

#### Overrides

[`SequencerModule`](../../sequencer/classes/SequencerModule.md).[`constructor`](../../sequencer/classes/SequencerModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`PrismaRedisCombinedConfig`](../interfaces/PrismaRedisCombinedConfig.md)

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`SequencerModule`](../../sequencer/classes/SequencerModule.md).[`currentConfig`](../../sequencer/classes/SequencerModule.md#currentconfig)

***

### prisma

> **prisma**: [`PrismaDatabaseConnection`](PrismaDatabaseConnection.md)

Defined in: [packages/persistance/src/PrismaRedisDatabase.ts:35](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/PrismaRedisDatabase.ts#L35)

***

### redis

> **redis**: [`RedisConnectionModule`](RedisConnectionModule.md)

Defined in: [packages/persistance/src/PrismaRedisDatabase.ts:37](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/PrismaRedisDatabase.ts#L37)

***

### presets

> `static` **presets**: [`Presets`](../../common/type-aliases/Presets.md)\<`unknown`\>

Defined in: packages/sequencer/dist/sequencer/builder/SequencerModule.d.ts:8

#### Inherited from

[`SequencerModule`](../../sequencer/classes/SequencerModule.md).[`presets`](../../sequencer/classes/SequencerModule.md#presets)

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

[`SequencerModule`](../../sequencer/classes/SequencerModule.md).[`config`](../../sequencer/classes/SequencerModule.md#config)

***

### currentMulti

#### Get Signature

> **get** **currentMulti**(): `RedisClientMultiCommandType`\<\{ `bf`: \{ `add`: `__module`; `ADD`: `__module`; `card`: `__module`; `CARD`: `__module`; `exists`: `__module`; `EXISTS`: `__module`; `info`: `__module`; `INFO`: `__module`; `insert`: `__module`; `INSERT`: `__module`; `loadChunk`: `__module`; `LOADCHUNK`: `__module`; `mAdd`: `__module`; `MADD`: `__module`; `mExists`: `__module`; `MEXISTS`: `__module`; `reserve`: `__module`; `RESERVE`: `__module`; `scanDump`: `__module`; `SCANDUMP`: `__module`; \}; `cf`: \{ `add`: `__module`; `ADD`: `__module`; `addNX`: `__module`; `ADDNX`: `__module`; `count`: `__module`; `COUNT`: `__module`; `del`: `__module`; `DEL`: `__module`; `exists`: `__module`; `EXISTS`: `__module`; `info`: `__module`; `INFO`: `__module`; `insert`: `__module`; `INSERT`: `__module`; `insertNX`: `__module`; `INSERTNX`: `__module`; `loadChunk`: `__module`; `LOADCHUNK`: `__module`; `reserve`: `__module`; `RESERVE`: `__module`; `scanDump`: `__module`; `SCANDUMP`: `__module`; \}; `cms`: \{ `incrBy`: `__module`; `INCRBY`: `__module`; `info`: `__module`; `INFO`: `__module`; `initByDim`: `__module`; `INITBYDIM`: `__module`; `initByProb`: `__module`; `INITBYPROB`: `__module`; `merge`: `__module`; `MERGE`: `__module`; `query`: `__module`; `QUERY`: `__module`; \}; `ft`: \{ `_list`: `__module`; `_LIST`: `__module`; `aggregate`: `__module`; `AGGREGATE`: `__module`; `AGGREGATE_WITHCURSOR`: `__module`; `aggregateWithCursor`: `__module`; `aliasAdd`: `__module`; `ALIASADD`: `__module`; `aliasDel`: `__module`; `ALIASDEL`: `__module`; `aliasUpdate`: `__module`; `ALIASUPDATE`: `__module`; `alter`: `__module`; `ALTER`: `__module`; `CONFIG_GET`: `__module`; `CONFIG_SET`: `__module`; `configGet`: `__module`; `configSet`: `__module`; `create`: `__module`; `CREATE`: `__module`; `CURSOR_DEL`: `__module`; `CURSOR_READ`: `__module`; `cursorDel`: `__module`; `cursorRead`: `__module`; `dictAdd`: `__module`; `DICTADD`: `__module`; `dictDel`: `__module`; `DICTDEL`: `__module`; `dictDump`: `__module`; `DICTDUMP`: `__module`; `dropIndex`: `__module`; `DROPINDEX`: `__module`; `explain`: `__module`; `EXPLAIN`: `__module`; `explainCli`: `__module`; `EXPLAINCLI`: `__module`; `info`: `__module`; `INFO`: `__module`; `profileAggregate`: `__module`; `PROFILEAGGREGATE`: `__module`; `profileSearch`: `__module`; `PROFILESEARCH`: `__module`; `search`: `__module`; `SEARCH`: `__module`; `SEARCH_NOCONTENT`: `__module`; `searchNoContent`: `__module`; `spellCheck`: `__module`; `SPELLCHECK`: `__module`; `sugAdd`: `__module`; `SUGADD`: `__module`; `sugDel`: `__module`; `SUGDEL`: `__module`; `sugGet`: `__module`; `SUGGET`: `__module`; `SUGGET_WITHPAYLOADS`: `__module`; `SUGGET_WITHSCORES`: `__module`; `SUGGET_WITHSCORES_WITHPAYLOADS`: `__module`; `sugGetWithPayloads`: `__module`; `sugGetWithScores`: `__module`; `sugGetWithScoresWithPayloads`: `__module`; `sugLen`: `__module`; `SUGLEN`: `__module`; `synDump`: `__module`; `SYNDUMP`: `__module`; `synUpdate`: `__module`; `SYNUPDATE`: `__module`; `tagVals`: `__module`; `TAGVALS`: `__module`; \}; `graph`: \{ `CONFIG_GET`: `__module`; `CONFIG_SET`: `__module`; `configGet`: `__module`; `configSet`: `__module`; `delete`: `__module`; `DELETE`: `__module`; `explain`: `__module`; `EXPLAIN`: `__module`; `list`: `__module`; `LIST`: `__module`; `profile`: `__module`; `PROFILE`: `__module`; `query`: `__module`; `QUERY`: `__module`; `RO_QUERY`: `__module`; `roQuery`: `__module`; `slowLog`: `__module`; `SLOWLOG`: `__module`; \}; `json`: \{ `arrAppend`: `__module`; `ARRAPPEND`: `__module`; `arrIndex`: `__module`; `ARRINDEX`: `__module`; `arrInsert`: `__module`; `ARRINSERT`: `__module`; `arrLen`: `__module`; `ARRLEN`: `__module`; `arrPop`: `__module`; `ARRPOP`: `__module`; `arrTrim`: `__module`; `ARRTRIM`: `__module`; `DEBUG_MEMORY`: `__module`; `debugMemory`: `__module`; `del`: `__module`; `DEL`: `__module`; `forget`: `__module`; `FORGET`: `__module`; `get`: `__module`; `GET`: `__module`; `merge`: `__module`; `MERGE`: `__module`; `mGet`: `__module`; `MGET`: `__module`; `mSet`: `__module`; `MSET`: `__module`; `numIncrBy`: `__module`; `NUMINCRBY`: `__module`; `numMultBy`: `__module`; `NUMMULTBY`: `__module`; `objKeys`: `__module`; `OBJKEYS`: `__module`; `objLen`: `__module`; `OBJLEN`: `__module`; `resp`: `__module`; `RESP`: `__module`; `set`: `__module`; `SET`: `__module`; `strAppend`: `__module`; `STRAPPEND`: `__module`; `strLen`: `__module`; `STRLEN`: `__module`; `type`: `__module`; `TYPE`: `__module`; \}; `tDigest`: \{ `add`: `__module`; `ADD`: `__module`; `byRank`: `__module`; `BYRANK`: `__module`; `byRevRank`: `__module`; `BYREVRANK`: `__module`; `cdf`: `__module`; `CDF`: `__module`; `create`: `__module`; `CREATE`: `__module`; `info`: `__module`; `INFO`: `__module`; `max`: `__module`; `MAX`: `__module`; `merge`: `__module`; `MERGE`: `__module`; `min`: `__module`; `MIN`: `__module`; `quantile`: `__module`; `QUANTILE`: `__module`; `rank`: `__module`; `RANK`: `__module`; `reset`: `__module`; `RESET`: `__module`; `revRank`: `__module`; `REVRANK`: `__module`; `TRIMMED_MEAN`: `__module`; `trimmedMean`: `__module`; \}; `topK`: \{ `add`: `__module`; `ADD`: `__module`; `count`: `__module`; `COUNT`: `__module`; `incrBy`: `__module`; `INCRBY`: `__module`; `info`: `__module`; `INFO`: `__module`; `list`: `__module`; `LIST`: `__module`; `LIST_WITHCOUNT`: `__module`; `listWithCount`: `__module`; `query`: `__module`; `QUERY`: `__module`; `reserve`: `__module`; `RESERVE`: `__module`; \}; `ts`: \{ `add`: `__module`; `ADD`: `__module`; `alter`: `__module`; `ALTER`: `__module`; `create`: `__module`; `CREATE`: `__module`; `createRule`: `__module`; `CREATERULE`: `__module`; `decrBy`: `__module`; `DECRBY`: `__module`; `del`: `__module`; `DEL`: `__module`; `deleteRule`: `__module`; `DELETERULE`: `__module`; `get`: `__module`; `GET`: `__module`; `incrBy`: `__module`; `INCRBY`: `__module`; `info`: `__module`; `INFO`: `__module`; `INFO_DEBUG`: `__module`; `infoDebug`: `__module`; `mAdd`: `__module`; `MADD`: `__module`; `mGet`: `__module`; `MGET`: `__module`; `MGET_WITHLABELS`: `__module`; `mGetWithLabels`: `__module`; `mRange`: `__module`; `MRANGE`: `__module`; `MRANGE_WITHLABELS`: `__module`; `mRangeWithLabels`: `__module`; `mRevRange`: `__module`; `MREVRANGE`: `__module`; `MREVRANGE_WITHLABELS`: `__module`; `mRevRangeWithLabels`: `__module`; `queryIndex`: `__module`; `QUERYINDEX`: `__module`; `range`: `__module`; `RANGE`: `__module`; `revRange`: `__module`; `REVRANGE`: `__module`; \}; \}, `Record`\<`string`, `never`\>, `Record`\<`string`, `never`\>\>

Defined in: [packages/persistance/src/PrismaRedisDatabase.ts:53](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/PrismaRedisDatabase.ts#L53)

##### Returns

`RedisClientMultiCommandType`\<\{ `bf`: \{ `add`: `__module`; `ADD`: `__module`; `card`: `__module`; `CARD`: `__module`; `exists`: `__module`; `EXISTS`: `__module`; `info`: `__module`; `INFO`: `__module`; `insert`: `__module`; `INSERT`: `__module`; `loadChunk`: `__module`; `LOADCHUNK`: `__module`; `mAdd`: `__module`; `MADD`: `__module`; `mExists`: `__module`; `MEXISTS`: `__module`; `reserve`: `__module`; `RESERVE`: `__module`; `scanDump`: `__module`; `SCANDUMP`: `__module`; \}; `cf`: \{ `add`: `__module`; `ADD`: `__module`; `addNX`: `__module`; `ADDNX`: `__module`; `count`: `__module`; `COUNT`: `__module`; `del`: `__module`; `DEL`: `__module`; `exists`: `__module`; `EXISTS`: `__module`; `info`: `__module`; `INFO`: `__module`; `insert`: `__module`; `INSERT`: `__module`; `insertNX`: `__module`; `INSERTNX`: `__module`; `loadChunk`: `__module`; `LOADCHUNK`: `__module`; `reserve`: `__module`; `RESERVE`: `__module`; `scanDump`: `__module`; `SCANDUMP`: `__module`; \}; `cms`: \{ `incrBy`: `__module`; `INCRBY`: `__module`; `info`: `__module`; `INFO`: `__module`; `initByDim`: `__module`; `INITBYDIM`: `__module`; `initByProb`: `__module`; `INITBYPROB`: `__module`; `merge`: `__module`; `MERGE`: `__module`; `query`: `__module`; `QUERY`: `__module`; \}; `ft`: \{ `_list`: `__module`; `_LIST`: `__module`; `aggregate`: `__module`; `AGGREGATE`: `__module`; `AGGREGATE_WITHCURSOR`: `__module`; `aggregateWithCursor`: `__module`; `aliasAdd`: `__module`; `ALIASADD`: `__module`; `aliasDel`: `__module`; `ALIASDEL`: `__module`; `aliasUpdate`: `__module`; `ALIASUPDATE`: `__module`; `alter`: `__module`; `ALTER`: `__module`; `CONFIG_GET`: `__module`; `CONFIG_SET`: `__module`; `configGet`: `__module`; `configSet`: `__module`; `create`: `__module`; `CREATE`: `__module`; `CURSOR_DEL`: `__module`; `CURSOR_READ`: `__module`; `cursorDel`: `__module`; `cursorRead`: `__module`; `dictAdd`: `__module`; `DICTADD`: `__module`; `dictDel`: `__module`; `DICTDEL`: `__module`; `dictDump`: `__module`; `DICTDUMP`: `__module`; `dropIndex`: `__module`; `DROPINDEX`: `__module`; `explain`: `__module`; `EXPLAIN`: `__module`; `explainCli`: `__module`; `EXPLAINCLI`: `__module`; `info`: `__module`; `INFO`: `__module`; `profileAggregate`: `__module`; `PROFILEAGGREGATE`: `__module`; `profileSearch`: `__module`; `PROFILESEARCH`: `__module`; `search`: `__module`; `SEARCH`: `__module`; `SEARCH_NOCONTENT`: `__module`; `searchNoContent`: `__module`; `spellCheck`: `__module`; `SPELLCHECK`: `__module`; `sugAdd`: `__module`; `SUGADD`: `__module`; `sugDel`: `__module`; `SUGDEL`: `__module`; `sugGet`: `__module`; `SUGGET`: `__module`; `SUGGET_WITHPAYLOADS`: `__module`; `SUGGET_WITHSCORES`: `__module`; `SUGGET_WITHSCORES_WITHPAYLOADS`: `__module`; `sugGetWithPayloads`: `__module`; `sugGetWithScores`: `__module`; `sugGetWithScoresWithPayloads`: `__module`; `sugLen`: `__module`; `SUGLEN`: `__module`; `synDump`: `__module`; `SYNDUMP`: `__module`; `synUpdate`: `__module`; `SYNUPDATE`: `__module`; `tagVals`: `__module`; `TAGVALS`: `__module`; \}; `graph`: \{ `CONFIG_GET`: `__module`; `CONFIG_SET`: `__module`; `configGet`: `__module`; `configSet`: `__module`; `delete`: `__module`; `DELETE`: `__module`; `explain`: `__module`; `EXPLAIN`: `__module`; `list`: `__module`; `LIST`: `__module`; `profile`: `__module`; `PROFILE`: `__module`; `query`: `__module`; `QUERY`: `__module`; `RO_QUERY`: `__module`; `roQuery`: `__module`; `slowLog`: `__module`; `SLOWLOG`: `__module`; \}; `json`: \{ `arrAppend`: `__module`; `ARRAPPEND`: `__module`; `arrIndex`: `__module`; `ARRINDEX`: `__module`; `arrInsert`: `__module`; `ARRINSERT`: `__module`; `arrLen`: `__module`; `ARRLEN`: `__module`; `arrPop`: `__module`; `ARRPOP`: `__module`; `arrTrim`: `__module`; `ARRTRIM`: `__module`; `DEBUG_MEMORY`: `__module`; `debugMemory`: `__module`; `del`: `__module`; `DEL`: `__module`; `forget`: `__module`; `FORGET`: `__module`; `get`: `__module`; `GET`: `__module`; `merge`: `__module`; `MERGE`: `__module`; `mGet`: `__module`; `MGET`: `__module`; `mSet`: `__module`; `MSET`: `__module`; `numIncrBy`: `__module`; `NUMINCRBY`: `__module`; `numMultBy`: `__module`; `NUMMULTBY`: `__module`; `objKeys`: `__module`; `OBJKEYS`: `__module`; `objLen`: `__module`; `OBJLEN`: `__module`; `resp`: `__module`; `RESP`: `__module`; `set`: `__module`; `SET`: `__module`; `strAppend`: `__module`; `STRAPPEND`: `__module`; `strLen`: `__module`; `STRLEN`: `__module`; `type`: `__module`; `TYPE`: `__module`; \}; `tDigest`: \{ `add`: `__module`; `ADD`: `__module`; `byRank`: `__module`; `BYRANK`: `__module`; `byRevRank`: `__module`; `BYREVRANK`: `__module`; `cdf`: `__module`; `CDF`: `__module`; `create`: `__module`; `CREATE`: `__module`; `info`: `__module`; `INFO`: `__module`; `max`: `__module`; `MAX`: `__module`; `merge`: `__module`; `MERGE`: `__module`; `min`: `__module`; `MIN`: `__module`; `quantile`: `__module`; `QUANTILE`: `__module`; `rank`: `__module`; `RANK`: `__module`; `reset`: `__module`; `RESET`: `__module`; `revRank`: `__module`; `REVRANK`: `__module`; `TRIMMED_MEAN`: `__module`; `trimmedMean`: `__module`; \}; `topK`: \{ `add`: `__module`; `ADD`: `__module`; `count`: `__module`; `COUNT`: `__module`; `incrBy`: `__module`; `INCRBY`: `__module`; `info`: `__module`; `INFO`: `__module`; `list`: `__module`; `LIST`: `__module`; `LIST_WITHCOUNT`: `__module`; `listWithCount`: `__module`; `query`: `__module`; `QUERY`: `__module`; `reserve`: `__module`; `RESERVE`: `__module`; \}; `ts`: \{ `add`: `__module`; `ADD`: `__module`; `alter`: `__module`; `ALTER`: `__module`; `create`: `__module`; `CREATE`: `__module`; `createRule`: `__module`; `CREATERULE`: `__module`; `decrBy`: `__module`; `DECRBY`: `__module`; `del`: `__module`; `DEL`: `__module`; `deleteRule`: `__module`; `DELETERULE`: `__module`; `get`: `__module`; `GET`: `__module`; `incrBy`: `__module`; `INCRBY`: `__module`; `info`: `__module`; `INFO`: `__module`; `INFO_DEBUG`: `__module`; `infoDebug`: `__module`; `mAdd`: `__module`; `MADD`: `__module`; `mGet`: `__module`; `MGET`: `__module`; `MGET_WITHLABELS`: `__module`; `mGetWithLabels`: `__module`; `mRange`: `__module`; `MRANGE`: `__module`; `MRANGE_WITHLABELS`: `__module`; `mRangeWithLabels`: `__module`; `mRevRange`: `__module`; `MREVRANGE`: `__module`; `MREVRANGE_WITHLABELS`: `__module`; `mRevRangeWithLabels`: `__module`; `queryIndex`: `__module`; `QUERYINDEX`: `__module`; `range`: `__module`; `RANGE`: `__module`; `revRange`: `__module`; `REVRANGE`: `__module`; \}; \}, `Record`\<`string`, `never`\>, `Record`\<`string`, `never`\>\>

#### Implementation of

[`RedisConnection`](../interfaces/RedisConnection.md).[`currentMulti`](../interfaces/RedisConnection.md#currentmulti)

***

### prismaClient

#### Get Signature

> **get** **prismaClient**(): `PrismaClient`\<`never`\>

Defined in: [packages/persistance/src/PrismaRedisDatabase.ts:45](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/PrismaRedisDatabase.ts#L45)

##### Returns

`PrismaClient`\<`never`\>

#### Implementation of

[`PrismaConnection`](../interfaces/PrismaConnection.md).[`prismaClient`](../interfaces/PrismaConnection.md#prismaclient)

***

### redisClient

#### Get Signature

> **get** **redisClient**(): `RedisClientType`

Defined in: [packages/persistance/src/PrismaRedisDatabase.ts:49](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/PrismaRedisDatabase.ts#L49)

##### Returns

`RedisClientType`

#### Implementation of

[`RedisConnection`](../interfaces/RedisConnection.md).[`redisClient`](../interfaces/RedisConnection.md#redisclient)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

Defined in: [packages/persistance/src/PrismaRedisDatabase.ts:78](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/PrismaRedisDatabase.ts#L78)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Database`](../../sequencer/interfaces/Database.md).[`close`](../../sequencer/interfaces/Database.md#close)

***

### create()

> **create**(`childContainerProvider`): `void`

Defined in: [packages/persistance/src/PrismaRedisDatabase.ts:57](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/PrismaRedisDatabase.ts#L57)

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../../common/interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Overrides

[`SequencerModule`](../../sequencer/classes/SequencerModule.md).[`create`](../../sequencer/classes/SequencerModule.md#create)

***

### dependencies()

> **dependencies**(): [`StorageDependencyMinimumDependencies`](../../sequencer/interfaces/StorageDependencyMinimumDependencies.md)

Defined in: [packages/persistance/src/PrismaRedisDatabase.ts:63](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/PrismaRedisDatabase.ts#L63)

#### Returns

[`StorageDependencyMinimumDependencies`](../../sequencer/interfaces/StorageDependencyMinimumDependencies.md)

#### Implementation of

[`Database`](../../sequencer/interfaces/Database.md).[`dependencies`](../../sequencer/interfaces/Database.md#dependencies)

***

### executeInTransaction()

> **executeInTransaction**(`f`): `Promise`\<`void`\>

Defined in: [packages/persistance/src/PrismaRedisDatabase.ts:88](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/PrismaRedisDatabase.ts#L88)

#### Parameters

##### f

() => `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Database`](../../sequencer/interfaces/Database.md).[`executeInTransaction`](../../sequencer/interfaces/Database.md#executeintransaction)

***

### pruneDatabase()

> **pruneDatabase**(): `Promise`\<`void`\>

Defined in: [packages/persistance/src/PrismaRedisDatabase.ts:83](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/PrismaRedisDatabase.ts#L83)

Prunes all data from the database connection.
Note: This function should only be called immediately at startup,
everything else will lead to unexpected behaviour and errors

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Database`](../../sequencer/interfaces/Database.md).[`pruneDatabase`](../../sequencer/interfaces/Database.md#prunedatabase)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/persistance/src/PrismaRedisDatabase.ts:70](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/PrismaRedisDatabase.ts#L70)

Start the module and all it's functionality.
The returned Promise has to resolve after initialization,
since it will block in the sequencer init.
That means that you mustn't await server.start() for example.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`SequencerModule`](../../sequencer/classes/SequencerModule.md).[`start`](../../sequencer/classes/SequencerModule.md#start)
