---
title: QueryBuilderFactory
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / QueryBuilderFactory

# Variable: QueryBuilderFactory

> `const` **QueryBuilderFactory**: `object`

Defined in: [packages/sequencer/src/helpers/query/QueryBuilderFactory.ts:71](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/helpers/query/QueryBuilderFactory.ts#L71)

## Type declaration

### fillQuery()

#### Type Parameters

• **Module** *extends* `Object`

#### Parameters

##### runtimeModule

`Module`

##### queryTransportModule

[`QueryTransportModule`](../interfaces/QueryTransportModule.md)

#### Returns

[`ModuleQuery`](../type-aliases/ModuleQuery.md)\<`Module`\>

### fromProtocol()

#### Type Parameters

• **ProtocolModules** *extends* [`MandatoryProtocolModulesRecord`](../../protocol/type-aliases/MandatoryProtocolModulesRecord.md) & [`ProtocolModulesRecord`](../../protocol/type-aliases/ProtocolModulesRecord.md)

#### Parameters

##### protocol

[`Protocol`](../../protocol/classes/Protocol.md)\<`ProtocolModules`\>

##### queryTransportModule

[`QueryTransportModule`](../interfaces/QueryTransportModule.md)

#### Returns

[`Query`](../type-aliases/Query.md)\<[`ProtocolModule`](../../protocol/classes/ProtocolModule.md)\<`unknown`\>, `ProtocolModules`\>

### fromRuntime()

#### Type Parameters

• **RuntimeModules** *extends* [`RuntimeModulesRecord`](../../module/type-aliases/RuntimeModulesRecord.md)

#### Parameters

##### runtime

[`Runtime`](../../module/classes/Runtime.md)\<`RuntimeModules`\>

##### queryTransportModule

[`QueryTransportModule`](../interfaces/QueryTransportModule.md)

#### Returns

[`Query`](../type-aliases/Query.md)\<[`RuntimeModule`](../../module/classes/RuntimeModule.md)\<`unknown`\>, `RuntimeModules`\>
