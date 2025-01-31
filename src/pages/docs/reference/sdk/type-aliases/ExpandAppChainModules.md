---
title: ExpandAppChainModules
---

[**@proto-kit/sdk**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sdk](../README.md) / ExpandAppChainModules

# Type Alias: ExpandAppChainModules\<RuntimeModules, ProtocolModules, SequencerModules, AppChainModules\>

> **ExpandAppChainModules**\<`RuntimeModules`, `ProtocolModules`, `SequencerModules`, `AppChainModules`\>: `AppChainModules` & `object`

Defined in: [sdk/src/appChain/AppChain.ts:66](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/appChain/AppChain.ts#L66)

## Type declaration

### Protocol

> **Protocol**: [`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`Protocol`](../../protocol/classes/Protocol.md)\<`ProtocolModules`\>\>

### Runtime

> **Runtime**: [`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`Runtime`](../../module/classes/Runtime.md)\<`RuntimeModules`\>\>

### Sequencer

> **Sequencer**: [`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`Sequencer`](../../sequencer/classes/Sequencer.md)\<`SequencerModules`\>\>

## Type Parameters

• **RuntimeModules** *extends* [`RuntimeModulesRecord`](../../module/type-aliases/RuntimeModulesRecord.md)

• **ProtocolModules** *extends* [`ProtocolModulesRecord`](../../protocol/type-aliases/ProtocolModulesRecord.md) & [`MandatoryProtocolModulesRecord`](../../protocol/type-aliases/MandatoryProtocolModulesRecord.md)

• **SequencerModules** *extends* [`SequencerModulesRecord`](../../sequencer/type-aliases/SequencerModulesRecord.md)

• **AppChainModules** *extends* [`AppChainModulesRecord`](AppChainModulesRecord.md)
