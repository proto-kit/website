---
title: AppChainDefinition
---

[**@proto-kit/sdk**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sdk](../README.md) / AppChainDefinition

# Interface: AppChainDefinition\<RuntimeModules, ProtocolModules, SequencerModules, AppChainModules\>

Defined in: [sdk/src/appChain/AppChain.ts:53](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sdk/src/appChain/AppChain.ts#L53)

## Type Parameters

• **RuntimeModules** *extends* [`RuntimeModulesRecord`](../../module/type-aliases/RuntimeModulesRecord.md)

• **ProtocolModules** *extends* [`ProtocolModulesRecord`](../../protocol/type-aliases/ProtocolModulesRecord.md) & [`MandatoryProtocolModulesRecord`](../../protocol/type-aliases/MandatoryProtocolModulesRecord.md)

• **SequencerModules** *extends* [`SequencerModulesRecord`](../../sequencer/type-aliases/SequencerModulesRecord.md)

• **AppChainModules** *extends* [`AppChainModulesRecord`](../type-aliases/AppChainModulesRecord.md)

## Properties

### modules

> **modules**: `AppChainModules`

Defined in: [sdk/src/appChain/AppChain.ts:63](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sdk/src/appChain/AppChain.ts#L63)

***

### Protocol

> **Protocol**: [`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`Protocol`](../../protocol/classes/Protocol.md)\<`ProtocolModules`\>\>

Defined in: [sdk/src/appChain/AppChain.ts:61](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sdk/src/appChain/AppChain.ts#L61)

***

### Runtime

> **Runtime**: [`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`Runtime`](../../module/classes/Runtime.md)\<`RuntimeModules`\>\>

Defined in: [sdk/src/appChain/AppChain.ts:60](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sdk/src/appChain/AppChain.ts#L60)

***

### Sequencer

> **Sequencer**: [`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`Sequencer`](../../sequencer/classes/Sequencer.md)\<`SequencerModules`\>\>

Defined in: [sdk/src/appChain/AppChain.ts:62](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sdk/src/appChain/AppChain.ts#L62)
