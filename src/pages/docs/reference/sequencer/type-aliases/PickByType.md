---
title: PickByType
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / PickByType

# Type Alias: PickByType\<Type, Value\>

> **PickByType**\<`Type`, `Value`\>: \{ \[Key in keyof Type as Type\[Key\] extends Value \| undefined ? Key : never\]: Type\[Key\] \}

Defined in: [packages/sequencer/src/helpers/query/QueryBuilderFactory.ts:18](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/helpers/query/QueryBuilderFactory.ts#L18)

## Type Parameters

• **Type**

• **Value**
