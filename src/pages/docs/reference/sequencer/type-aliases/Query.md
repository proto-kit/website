---
title: Query
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / Query

# Type Alias: Query\<ModuleType, ModuleRecord\>

> **Query**\<`ModuleType`, `ModuleRecord`\>: `{ [Key in keyof ModuleRecord]: ModuleQuery<InstanceType<ModuleRecord[Key]>> }`

Defined in: [packages/sequencer/src/helpers/query/QueryBuilderFactory.ts:58](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/helpers/query/QueryBuilderFactory.ts#L58)

## Type Parameters

• **ModuleType**

• **ModuleRecord** *extends* `Record`\<`string`, [`TypedClass`](TypedClass.md)\<`ModuleType`\>\>
