---
title: PickByType
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / PickByType

# Type Alias: PickByType\<Type, Value\>

> **PickByType**\<`Type`, `Value`\>: \{ \[Key in keyof Type as Type\[Key\] extends Value \| undefined ? Key : never\]: Type\[Key\] \}

Defined in: [packages/sequencer/src/helpers/query/QueryBuilderFactory.ts:18](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/helpers/query/QueryBuilderFactory.ts#L18)

## Type Parameters

• **Type**

• **Value**
