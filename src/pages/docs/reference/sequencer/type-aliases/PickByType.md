---
title: PickByType
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / PickByType

# Type Alias: PickByType\<Type, Value\>

> **PickByType**\<`Type`, `Value`\>: \{ \[Key in keyof Type as Type\[Key\] extends Value \| undefined ? Key : never\]: Type\[Key\] \}

Defined in: [packages/sequencer/src/helpers/query/QueryBuilderFactory.ts:18](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/helpers/query/QueryBuilderFactory.ts#L18)

## Type Parameters

• **Type**

• **Value**
