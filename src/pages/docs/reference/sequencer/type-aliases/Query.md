---
title: Query
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / Query

# Type Alias: Query\<ModuleType, ModuleRecord\>

> **Query**\<`ModuleType`, `ModuleRecord`\>: `{ [Key in keyof ModuleRecord]: ModuleQuery<InstanceType<ModuleRecord[Key]>> }`

Defined in: [packages/sequencer/src/helpers/query/QueryBuilderFactory.ts:58](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/helpers/query/QueryBuilderFactory.ts#L58)

## Type Parameters

• **ModuleType**

• **ModuleRecord** *extends* `Record`\<`string`, [`TypedClass`](TypedClass.md)\<`ModuleType`\>\>
