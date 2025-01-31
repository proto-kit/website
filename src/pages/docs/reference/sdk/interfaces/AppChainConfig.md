---
title: AppChainConfig
---

[**@proto-kit/sdk**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sdk](../README.md) / AppChainConfig

# Interface: AppChainConfig\<RuntimeModules, ProtocolModules, SequencerModules, AppChainModules\>

Defined in: [sdk/src/appChain/AppChain.ts:96](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/appChain/AppChain.ts#L96)

Definition of required arguments for AppChain

## Type Parameters

• **RuntimeModules** *extends* [`RuntimeModulesRecord`](../../module/type-aliases/RuntimeModulesRecord.md)

• **ProtocolModules** *extends* [`ProtocolModulesRecord`](../../protocol/type-aliases/ProtocolModulesRecord.md) & [`MandatoryProtocolModulesRecord`](../../protocol/type-aliases/MandatoryProtocolModulesRecord.md)

• **SequencerModules** *extends* [`SequencerModulesRecord`](../../sequencer/type-aliases/SequencerModulesRecord.md)

• **AppChainModules** *extends* [`AppChainModulesRecord`](../type-aliases/AppChainModulesRecord.md)

## Properties

### AppChain

> **AppChain**: [`ModulesConfig`](../../common/type-aliases/ModulesConfig.md)\<`AppChainModules`\>

Defined in: [sdk/src/appChain/AppChain.ts:106](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/appChain/AppChain.ts#L106)

***

### Protocol

> **Protocol**: [`ModulesConfig`](../../common/type-aliases/ModulesConfig.md)\<`ProtocolModules`\>

Defined in: [sdk/src/appChain/AppChain.ts:104](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/appChain/AppChain.ts#L104)

***

### Runtime

> **Runtime**: [`ModulesConfig`](../../common/type-aliases/ModulesConfig.md)\<`RuntimeModules`\>

Defined in: [sdk/src/appChain/AppChain.ts:103](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/appChain/AppChain.ts#L103)

***

### Sequencer

> **Sequencer**: [`ModulesConfig`](../../common/type-aliases/ModulesConfig.md)\<`SequencerModules`\>

Defined in: [sdk/src/appChain/AppChain.ts:105](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/appChain/AppChain.ts#L105)
