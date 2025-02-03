---
title: ModulesConfig
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / ModulesConfig

# Type Alias: ModulesConfig\<Modules\>

> **ModulesConfig**\<`Modules`\>: \{ \[ConfigKey in StringKeyOf\<Modules\>\]: InstanceType\<Modules\[ConfigKey\]\> extends Configurable\<infer Config\> ? Config extends NoConfig ? Config \| undefined : Config : never \}

Defined in: [packages/common/src/config/ModuleContainer.ts:89](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/config/ModuleContainer.ts#L89)

## Type Parameters

• **Modules** *extends* [`ModulesRecord`](../interfaces/ModulesRecord.md)
