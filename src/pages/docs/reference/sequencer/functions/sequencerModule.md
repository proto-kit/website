---
title: sequencerModule
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / sequencerModule

# Function: sequencerModule()

> **sequencerModule**(): (`target`) => `void`

Defined in: [packages/sequencer/src/sequencer/builder/SequencerModule.ts:33](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/sequencer/builder/SequencerModule.ts#L33)

Marks the decorated class as a sequencer module, while also
making it injectable with our dependency injection solution.

## Returns

`Function`

### Parameters

#### target

[`StaticConfigurableModule`](../../common/interfaces/StaticConfigurableModule.md)\<`unknown`\> & [`TypedClass`](../type-aliases/TypedClass.md)\<[`SequencerModule`](../classes/SequencerModule.md)\<`unknown`\>\>

### Returns

`void`
