---
title: WithdrawalQueue
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / WithdrawalQueue

# Class: WithdrawalQueue

Defined in: [packages/sequencer/src/settlement/messages/WithdrawalQueue.ts:44](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/settlement/messages/WithdrawalQueue.ts#L44)

This interface allows the SettlementModule to retrieve information about
pending L2-dispatched (outgoing) messages that it can then use to roll
them up on the L1 contract.

In the future, this interface should be flexibly typed so that the
outgoing message type is not limited to Withdrawals

## Extends

- [`SequencerModule`](SequencerModule.md)

## Implements

- [`OutgoingMessageQueue`](../interfaces/OutgoingMessageQueue.md)

## Constructors

### new WithdrawalQueue()

> **new WithdrawalQueue**(`sequencer`): [`WithdrawalQueue`](WithdrawalQueue.md)

Defined in: [packages/sequencer/src/settlement/messages/WithdrawalQueue.ts:54](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/settlement/messages/WithdrawalQueue.ts#L54)

#### Parameters

##### sequencer

[`Sequencer`](Sequencer.md)\<\{ `BlockTrigger`: *typeof* [`BlockTriggerBase`](BlockTriggerBase.md); `SettlementModule`: *typeof* [`SettlementModule`](SettlementModule.md); \}\>

#### Returns

[`WithdrawalQueue`](WithdrawalQueue.md)

#### Overrides

[`SequencerModule`](SequencerModule.md).[`constructor`](SequencerModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`NoConfig`](../../common/type-aliases/NoConfig.md)

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`SequencerModule`](SequencerModule.md).[`currentConfig`](SequencerModule.md#currentconfig)

***

### presets

> `static` **presets**: [`Presets`](../../common/type-aliases/Presets.md)\<`unknown`\> = `{}`

Defined in: [packages/sequencer/src/sequencer/builder/SequencerModule.ts:18](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/sequencer/builder/SequencerModule.ts#L18)

#### Inherited from

[`SequencerModule`](SequencerModule.md).[`presets`](SequencerModule.md#presets)

## Accessors

### config

#### Get Signature

> **get** **config**(): `Config`

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:18

##### Returns

`Config`

#### Set Signature

> **set** **config**(`config`): `void`

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:19

##### Parameters

###### config

`Config`

##### Returns

`void`

#### Inherited from

[`SequencerModule`](SequencerModule.md).[`config`](SequencerModule.md#config)

## Methods

### create()

> **create**(`childContainerProvider`): `void`

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:20

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../../common/interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Inherited from

[`SequencerModule`](SequencerModule.md).[`create`](SequencerModule.md#create)

***

### length()

> **length**(): `number`

Defined in: [packages/sequencer/src/settlement/messages/WithdrawalQueue.ts:74](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/settlement/messages/WithdrawalQueue.ts#L74)

#### Returns

`number`

#### Implementation of

[`OutgoingMessageQueue`](../interfaces/OutgoingMessageQueue.md).[`length`](../interfaces/OutgoingMessageQueue.md#length)

***

### peek()

> **peek**(`num`): [`OutgoingMessage`](../interfaces/OutgoingMessage.md)\<[`Withdrawal`](../../protocol/classes/Withdrawal.md)\>[]

Defined in: [packages/sequencer/src/settlement/messages/WithdrawalQueue.ts:64](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/settlement/messages/WithdrawalQueue.ts#L64)

#### Parameters

##### num

`number`

#### Returns

[`OutgoingMessage`](../interfaces/OutgoingMessage.md)\<[`Withdrawal`](../../protocol/classes/Withdrawal.md)\>[]

#### Implementation of

[`OutgoingMessageQueue`](../interfaces/OutgoingMessageQueue.md).[`peek`](../interfaces/OutgoingMessageQueue.md#peek)

***

### pop()

> **pop**(`num`): [`OutgoingMessage`](../interfaces/OutgoingMessage.md)\<[`Withdrawal`](../../protocol/classes/Withdrawal.md)\>[]

Defined in: [packages/sequencer/src/settlement/messages/WithdrawalQueue.ts:68](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/settlement/messages/WithdrawalQueue.ts#L68)

#### Parameters

##### num

`number`

#### Returns

[`OutgoingMessage`](../interfaces/OutgoingMessage.md)\<[`Withdrawal`](../../protocol/classes/Withdrawal.md)\>[]

#### Implementation of

[`OutgoingMessageQueue`](../interfaces/OutgoingMessageQueue.md).[`pop`](../interfaces/OutgoingMessageQueue.md#pop)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/settlement/messages/WithdrawalQueue.ts:78](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/settlement/messages/WithdrawalQueue.ts#L78)

Start the module and all it's functionality.
The returned Promise has to resolve after initialization,
since it will block in the sequencer init.
That means that you mustn't await server.start() for example.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`SequencerModule`](SequencerModule.md).[`start`](SequencerModule.md#start)
