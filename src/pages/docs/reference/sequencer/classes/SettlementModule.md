---
title: SettlementModule
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / SettlementModule

# Class: SettlementModule

Defined in: [packages/sequencer/src/settlement/SettlementModule.ts:62](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/settlement/SettlementModule.ts#L62)

Lifecycle of a SequencerModule

start(): Executed to execute any logic required to start the module

## Extends

- [`SequencerModule`](SequencerModule.md)\<[`SettlementModuleConfig`](../interfaces/SettlementModuleConfig.md)\>

## Implements

- [`EventEmittingComponent`](../../common/interfaces/EventEmittingComponent.md)\<[`SettlementModuleEvents`](../type-aliases/SettlementModuleEvents.md)\>
- [`DependencyFactory`](../../common/interfaces/DependencyFactory.md)

## Constructors

### new SettlementModule()

> **new SettlementModule**(`baseLayer`, `protocol`, `incomingMessagesAdapter`, `messageStorage`, `blockProofSerializer`, `transactionSender`, `areProofsEnabled`, `feeStrategy`, `settlementStartupModule`): [`SettlementModule`](SettlementModule.md)

Defined in: [packages/sequencer/src/settlement/SettlementModule.ts:86](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/settlement/SettlementModule.ts#L86)

#### Parameters

##### baseLayer

[`MinaBaseLayer`](MinaBaseLayer.md)

##### protocol

[`Protocol`](../../protocol/classes/Protocol.md)\<[`MandatoryProtocolModulesRecord`](../../protocol/type-aliases/MandatoryProtocolModulesRecord.md)\>

##### incomingMessagesAdapter

[`IncomingMessageAdapter`](../interfaces/IncomingMessageAdapter.md)

##### messageStorage

[`MessageStorage`](../interfaces/MessageStorage.md)

##### blockProofSerializer

[`BlockProofSerializer`](BlockProofSerializer.md)

##### transactionSender

[`MinaTransactionSender`](MinaTransactionSender.md)

##### areProofsEnabled

[`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

##### feeStrategy

`FeeStrategy`

##### settlementStartupModule

`SettlementStartupModule`

#### Returns

[`SettlementModule`](SettlementModule.md)

#### Overrides

[`SequencerModule`](SequencerModule.md).[`constructor`](SequencerModule.md#constructors)

## Properties

### addresses?

> `optional` **addresses**: `object`

Defined in: [packages/sequencer/src/settlement/SettlementModule.ts:71](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/settlement/SettlementModule.ts#L71)

#### dispatch

> **dispatch**: `PublicKey`

#### settlement

> **settlement**: `PublicKey`

***

### contracts?

> `protected` `optional` **contracts**: `object`

Defined in: [packages/sequencer/src/settlement/SettlementModule.ts:66](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/settlement/SettlementModule.ts#L66)

#### dispatch

> **dispatch**: [`DispatchSmartContract`](../../protocol/classes/DispatchSmartContract.md)

#### settlement

> **settlement**: [`SettlementSmartContract`](../../protocol/classes/SettlementSmartContract.md)

***

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`SettlementModuleConfig`](../interfaces/SettlementModuleConfig.md)

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`SequencerModule`](SequencerModule.md).[`currentConfig`](SequencerModule.md#currentconfig)

***

### events

> **events**: [`EventEmitter`](../../common/classes/EventEmitter.md)\<[`SettlementModuleEvents`](../type-aliases/SettlementModuleEvents.md)\>

Defined in: [packages/sequencer/src/settlement/SettlementModule.ts:84](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/settlement/SettlementModule.ts#L84)

#### Implementation of

[`EventEmittingComponent`](../../common/interfaces/EventEmittingComponent.md).[`events`](../../common/interfaces/EventEmittingComponent.md#events)

***

### keys?

> `optional` **keys**: `object`

Defined in: [packages/sequencer/src/settlement/SettlementModule.ts:76](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/settlement/SettlementModule.ts#L76)

#### dispatch

> **dispatch**: `PrivateKey`

#### minaBridge

> **minaBridge**: `PrivateKey`

#### settlement

> **settlement**: `PrivateKey`

***

### utils

> **utils**: `SettlementUtils`

Defined in: [packages/sequencer/src/settlement/SettlementModule.ts:82](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/settlement/SettlementModule.ts#L82)

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

### dependencies()

> **dependencies**(): `object`

Defined in: [packages/sequencer/src/settlement/SettlementModule.ts:106](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/settlement/SettlementModule.ts#L106)

#### Returns

`object`

##### BridgingModule

> **BridgingModule**: `object`

###### BridgingModule.useClass

> **BridgingModule.useClass**: *typeof* `BridgingModule` = `BridgingModule`

#### Implementation of

[`DependencyFactory`](../../common/interfaces/DependencyFactory.md).[`dependencies`](../../common/interfaces/DependencyFactory.md#dependencies)

***

### deploy()

> **deploy**(`settlementKey`, `dispatchKey`, `minaBridgeKey`, `options`): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/settlement/SettlementModule.ts:243](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/settlement/SettlementModule.ts#L243)

#### Parameters

##### settlementKey

`PrivateKey`

##### dispatchKey

`PrivateKey`

##### minaBridgeKey

`PrivateKey`

##### options

###### nonce

`number`

#### Returns

`Promise`\<`void`\>

***

### deployTokenBridge()

> **deployTokenBridge**(`owner`, `ownerKey`, `contractKey`, `options`): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/settlement/SettlementModule.ts:343](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/settlement/SettlementModule.ts#L343)

#### Parameters

##### owner

`TokenContractV2`

##### ownerKey

`PrivateKey`

##### contractKey

`PrivateKey`

##### options

###### nonce

`number`

#### Returns

`Promise`\<`void`\>

***

### getContracts()

> **getContracts**(): `object`

Defined in: [packages/sequencer/src/settlement/SettlementModule.ts:127](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/settlement/SettlementModule.ts#L127)

#### Returns

`object`

##### dispatch

> **dispatch**: [`DispatchSmartContract`](../../protocol/classes/DispatchSmartContract.md)

##### settlement

> **settlement**: [`SettlementSmartContract`](../../protocol/classes/SettlementSmartContract.md)

***

### settleBatch()

> **settleBatch**(`batch`, `options`): `Promise`\<[`Settlement`](../interfaces/Settlement.md)\>

Defined in: [packages/sequencer/src/settlement/SettlementModule.ts:164](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/settlement/SettlementModule.ts#L164)

#### Parameters

##### batch

[`SettleableBatch`](../interfaces/SettleableBatch.md)

##### options

###### nonce

`number`

#### Returns

`Promise`\<[`Settlement`](../interfaces/Settlement.md)\>

***

### settlementContractModule()

> `protected` **settlementContractModule**(): [`SettlementContractModule`](../../protocol/classes/SettlementContractModule.md)\<[`MandatorySettlementModulesRecord`](../../protocol/type-aliases/MandatorySettlementModulesRecord.md)\>

Defined in: [packages/sequencer/src/settlement/SettlementModule.ts:114](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/settlement/SettlementModule.ts#L114)

#### Returns

[`SettlementContractModule`](../../protocol/classes/SettlementContractModule.md)\<[`MandatorySettlementModulesRecord`](../../protocol/type-aliases/MandatorySettlementModulesRecord.md)\>

***

### signTransaction()

> **signTransaction**(`tx`, `pks`): `Transaction`\<`false`, `true`\>

Defined in: [packages/sequencer/src/settlement/SettlementModule.ts:149](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/settlement/SettlementModule.ts#L149)

#### Parameters

##### tx

`Transaction`\<`false`, `false`\>

##### pks

`PrivateKey`[]

#### Returns

`Transaction`\<`false`, `true`\>

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/settlement/SettlementModule.ts:387](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/settlement/SettlementModule.ts#L387)

Start the module and all it's functionality.
The returned Promise has to resolve after initialization,
since it will block in the sequencer init.
That means that you mustn't await server.start() for example.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`SequencerModule`](SequencerModule.md).[`start`](SequencerModule.md#start)
