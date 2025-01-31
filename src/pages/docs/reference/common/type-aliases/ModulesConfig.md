---
title: ModulesConfig
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / ModulesConfig

# Type Alias: ModulesConfig\<Modules\>

> **ModulesConfig**\<`Modules`\>: \{ \[ConfigKey in StringKeyOf\<Modules\>\]: InstanceType\<Modules\[ConfigKey\]\> extends Configurable\<infer Config\> ? Config extends NoConfig ? Config \| undefined : Config : never \}

Defined in: [packages/common/src/config/ModuleContainer.ts:89](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/config/ModuleContainer.ts#L89)

## Type Parameters

• **Modules** *extends* [`ModulesRecord`](../interfaces/ModulesRecord.md)
