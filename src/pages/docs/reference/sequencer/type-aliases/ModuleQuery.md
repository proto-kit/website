---
title: ModuleQuery
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / ModuleQuery

# Type Alias: ModuleQuery\<Module\>

> **ModuleQuery**\<`Module`\>: `{ [Key in keyof PickStateMapProperties<Module>]: MapStateMapToQuery<PickStateMapProperties<Module>[Key]> }` & `{ [Key in keyof PickStateProperties<Module>]: MapStateToQuery<PickStateProperties<Module>[Key]> }`

Defined in: [packages/sequencer/src/helpers/query/QueryBuilderFactory.ts:48](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/helpers/query/QueryBuilderFactory.ts#L48)

## Type Parameters

• **Module**
