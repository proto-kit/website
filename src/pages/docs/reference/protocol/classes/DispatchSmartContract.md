---
title: DispatchSmartContract
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / DispatchSmartContract

# Class: DispatchSmartContract

Defined in: [packages/protocol/src/settlement/contracts/DispatchSmartContract.ts:229](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/contracts/DispatchSmartContract.ts#L229)

## Extends

- [`DispatchSmartContractBase`](DispatchSmartContractBase.md)

## Implements

- [`DispatchContractType`](../interfaces/DispatchContractType.md)

## Constructors

### new DispatchSmartContract()

> **new DispatchSmartContract**(`address`, `tokenId`?): [`DispatchSmartContract`](DispatchSmartContract.md)

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:138

#### Parameters

##### address

`PublicKey`

##### tokenId?

`Field`

#### Returns

[`DispatchSmartContract`](DispatchSmartContract.md)

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`constructor`](DispatchSmartContractBase.md#constructors)

## Properties

### address

> **address**: `PublicKey`

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:50

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`address`](DispatchSmartContractBase.md#address-1)

***

### events

> **events**: `object`

Defined in: [packages/protocol/src/settlement/contracts/DispatchSmartContract.ts:67](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/contracts/DispatchSmartContract.ts#L67)

A list of event types that can be emitted using this.emitEvent()`.

#### incoming-message-placeholder

> **incoming-message-placeholder**: *typeof* `Field` & (`x`) => `Field` = `Field`

#### token-bridge-added

> **token-bridge-added**: *typeof* [`TokenBridgeTreeAddition`](TokenBridgeTreeAddition.md) = `TokenBridgeTreeAddition`

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`events`](DispatchSmartContractBase.md#events)

***

### honoredMessagesHash

> **honoredMessagesHash**: `State`\<`Field`\>

Defined in: [packages/protocol/src/settlement/contracts/DispatchSmartContract.ts:235](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/contracts/DispatchSmartContract.ts#L235)

#### Overrides

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`honoredMessagesHash`](DispatchSmartContractBase.md#honoredmessageshash)

***

### promisedMessagesHash

> **promisedMessagesHash**: `State`\<`Field`\>

Defined in: [packages/protocol/src/settlement/contracts/DispatchSmartContract.ts:233](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/contracts/DispatchSmartContract.ts#L233)

#### Implementation of

[`DispatchContractType`](../interfaces/DispatchContractType.md).[`promisedMessagesHash`](../interfaces/DispatchContractType.md#promisedmessageshash)

#### Overrides

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`promisedMessagesHash`](DispatchSmartContractBase.md#promisedmessageshash)

***

### sender

> **sender**: `object`

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:231

#### self

> **self**: `SmartContract`

#### ~~getAndRequireSignature()~~

##### Returns

`PublicKey`

##### Deprecated

Deprecated in favor of `this.sender.getAndRequireSignatureV2()`.
This method is vulnerable because it allows the prover to return a dummy (empty) public key.

#### getAndRequireSignatureV2()

Return a public key that is forced to sign this transaction.

Note: This doesn't prove that the return value is the transaction sender, but it proves that whoever created
the transaction controls the private key associated with the returned public key.

##### Returns

`PublicKey`

#### ~~getUnconstrained()~~

##### Returns

`PublicKey`

##### Deprecated

Deprecated in favor of `this.sender.getUnconstrainedV2()`.
This method is vulnerable because it allows the prover to return a dummy (empty) public key,
which would cause an account update with that public key to not be included.

#### getUnconstrainedV2()

The public key of the current transaction's sender account.

Throws an error if not inside a transaction, or the sender wasn't passed in.

**Warning**: The fact that this public key equals the current sender is not part of the proof.
A malicious prover could use any other public key without affecting the validity of the proof.

Consider using `this.sender.getAndRequireSignatureV2()` if you need to prove that the sender controls this account.

##### Returns

`PublicKey`

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`sender`](DispatchSmartContractBase.md#sender)

***

### settlementContract

> **settlementContract**: `State`\<`PublicKey`\>

Defined in: [packages/protocol/src/settlement/contracts/DispatchSmartContract.ts:237](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/contracts/DispatchSmartContract.ts#L237)

#### Overrides

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`settlementContract`](DispatchSmartContractBase.md#settlementcontract)

***

### tokenBridgeCount

> **tokenBridgeCount**: `State`\<`Field`\>

Defined in: [packages/protocol/src/settlement/contracts/DispatchSmartContract.ts:241](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/contracts/DispatchSmartContract.ts#L241)

#### Overrides

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`tokenBridgeCount`](DispatchSmartContractBase.md#tokenbridgecount)

***

### tokenBridgeRoot

> **tokenBridgeRoot**: `State`\<`Field`\>

Defined in: [packages/protocol/src/settlement/contracts/DispatchSmartContract.ts:239](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/contracts/DispatchSmartContract.ts#L239)

#### Overrides

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`tokenBridgeRoot`](DispatchSmartContractBase.md#tokenbridgeroot)

***

### tokenId

> **tokenId**: `Field`

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:51

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`tokenId`](DispatchSmartContractBase.md#tokenid-1)

***

### \_maxProofsVerified?

> `static` `optional` **\_maxProofsVerified**: `0` \| `2` \| `1`

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:60

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`_maxProofsVerified`](DispatchSmartContractBase.md#_maxproofsverified)

***

### \_methodMetadata?

> `static` `optional` **\_methodMetadata**: `Record`\<`string`, \{ `actions`: `number`; `digest`: `string`; `gates`: `Gate`[]; `rows`: `number`; \}\>

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:53

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`_methodMetadata`](DispatchSmartContractBase.md#_methodmetadata)

***

### \_methods?

> `static` `optional` **\_methods**: `MethodInterface`[]

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:52

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`_methods`](DispatchSmartContractBase.md#_methods)

***

### \_provers?

> `static` `optional` **\_provers**: `Prover`[]

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:59

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`_provers`](DispatchSmartContractBase.md#_provers)

***

### \_verificationKey?

> `static` `optional` **\_verificationKey**: `object`

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:61

#### data

> **data**: `string`

#### hash

> **hash**: `Field`

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`_verificationKey`](DispatchSmartContractBase.md#_verificationkey)

***

### args

> `static` **args**: `object`

Defined in: [packages/protocol/src/settlement/contracts/DispatchSmartContract.ts:60](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/contracts/DispatchSmartContract.ts#L60)

#### incomingMessagesPaths

> **incomingMessagesPaths**: `Record`\<`string`, `` `${string}.${string}` ``\>

#### methodIdMappings

> **methodIdMappings**: [`RuntimeMethodIdMapping`](../type-aliases/RuntimeMethodIdMapping.md)

#### settlementContractClass?

> `optional` **settlementContractClass**: [`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`SettlementContractType`](../interfaces/SettlementContractType.md)\> & *typeof* `SmartContract`

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`args`](DispatchSmartContractBase.md#args)

## Accessors

### account

#### Get Signature

> **get** **account**(): `Account`

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:268

Current account of the SmartContract.

##### Returns

`Account`

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`account`](DispatchSmartContractBase.md#account)

***

### balance

#### Get Signature

> **get** **balance**(): `object`

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:308

Balance of this SmartContract.

##### Returns

`object`

###### addInPlace()

###### Parameters

###### x

`string` | `number` | `bigint` | `UInt64` | `UInt32` | `Int64`

###### Returns

`void`

###### subInPlace()

###### Parameters

###### x

`string` | `number` | `bigint` | `UInt64` | `UInt32` | `Int64`

###### Returns

`void`

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`balance`](DispatchSmartContractBase.md#balance)

***

### currentSlot

#### Get Signature

> **get** **currentSlot**(): `CurrentSlot`

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:278

Current global slot on the network. This is the slot at which this transaction is included in a block. Since we cannot know this value
at the time of transaction construction, this only has the `assertBetween()` method but no `get()` (impossible to implement)
or `assertEquals()` (confusing, because the developer can't know the exact slot at which this will be included either)

##### Returns

`CurrentSlot`

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`currentSlot`](DispatchSmartContractBase.md#currentslot)

***

### network

#### Get Signature

> **get** **network**(): `Network`

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:272

Current network state of the SmartContract.

##### Returns

`Network`

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`network`](DispatchSmartContractBase.md#network)

***

### self

#### Get Signature

> **get** **self**(): `AccountUpdate`

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:226

Returns the current AccountUpdate associated to this SmartContract.

##### Returns

`AccountUpdate`

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`self`](DispatchSmartContractBase.md#self)

## Methods

### approve()

> **approve**(`update`): `void`

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:300

Approve an account update or tree / forest of updates. Doing this means you include the account update in the zkApp's public input,
which allows you to read and use its content in a proof, make assertions about it, and modify it.

```ts
`@method` myApprovingMethod(update: AccountUpdate) {
  this.approve(update);

  // read balance on the account (for example)
  let balance = update.account.balance.getAndRequireEquals();
}
```

Under the hood, "approving" just means that the account update is made a child of the zkApp in the
tree of account updates that forms the transaction. Similarly, if you pass in an AccountUpdateTree,
the entire tree will become a subtree of the zkApp's account update.

Passing in a forest is a bit different, because it means you set the entire children of the zkApp's account update
at once. `approve()` will fail if the zkApp's account update already has children, to prevent you from accidentally
excluding important information from the public input.

#### Parameters

##### update

`AccountUpdate` | `AccountUpdateTree` | `AccountUpdateForest`

#### Returns

`void`

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`approve`](DispatchSmartContractBase.md#approve)

***

### deploy()

> **deploy**(`__namedParameters`?): `Promise`\<`void`\>

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:182

Deploys a SmartContract.

```ts
let tx = await Mina.transaction(sender, async () => {
  AccountUpdate.fundNewAccount(sender);
  await zkapp.deploy();
});
tx.sign([senderKey, zkAppKey]);
```

#### Parameters

##### \_\_namedParameters?

###### verificationKey

\{ `data`: `string`; `hash`: `string` \| `Field`; \}

###### verificationKey.data

`string`

###### verificationKey.hash

`string` \| `Field`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`deploy`](DispatchSmartContractBase.md#deploy)

***

### deposit()

> **deposit**(`amount`, `tokenId`, `bridgingContract`, `bridgingContractAttestation`, `l2Receiver`): `Promise`\<`void`\>

Defined in: [packages/protocol/src/settlement/contracts/DispatchSmartContract.ts:273](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/contracts/DispatchSmartContract.ts#L273)

#### Parameters

##### amount

`UInt64`

##### tokenId

`Field`

##### bridgingContract

`PublicKey`

##### bridgingContractAttestation

[`TokenBridgeAttestation`](TokenBridgeAttestation.md)

##### l2Receiver

`PublicKey`

#### Returns

`Promise`\<`void`\>

***

### dispatchMessage()

> `protected` **dispatchMessage**\<`Type`\>(`methodId`, `value`, `valueType`): `void`

Defined in: [packages/protocol/src/settlement/contracts/DispatchSmartContract.ts:130](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/contracts/DispatchSmartContract.ts#L130)

#### Type Parameters

• **Type**

#### Parameters

##### methodId

`Field`

##### value

`Type`

##### valueType

`ProvableExtended`\<`Type`\>

#### Returns

`void`

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`dispatchMessage`](DispatchSmartContractBase.md#dispatchmessage)

***

### emitEvent()

> **emitEvent**\<`K`\>(`type`, `event`): `void`

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:327

Emits an event. Events will be emitted as a part of the transaction and can be collected by archive nodes.

#### Type Parameters

• **K** *extends* `"token-bridge-added"` \| `"incoming-message-placeholder"`

#### Parameters

##### type

`K`

##### event

`any`

#### Returns

`void`

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`emitEvent`](DispatchSmartContractBase.md#emitevent)

***

### emitEventIf()

> **emitEventIf**\<`K`\>(`condition`, `type`, `event`): `void`

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:323

Conditionally emits an event.

Events will be emitted as a part of the transaction and can be collected by archive nodes.

#### Type Parameters

• **K** *extends* `"token-bridge-added"` \| `"incoming-message-placeholder"`

#### Parameters

##### condition

`Bool`

##### type

`K`

##### event

`any`

#### Returns

`void`

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`emitEventIf`](DispatchSmartContractBase.md#emiteventif)

***

### enableTokenDeposits()

> **enableTokenDeposits**(`tokenId`, `bridgeContractAddress`, `settlementContractAddress`): `Promise`\<`void`\>

Defined in: [packages/protocol/src/settlement/contracts/DispatchSmartContract.ts:244](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/contracts/DispatchSmartContract.ts#L244)

#### Parameters

##### tokenId

`Field`

##### bridgeContractAddress

`PublicKey`

##### settlementContractAddress

`PublicKey`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`DispatchContractType`](../interfaces/DispatchContractType.md).[`enableTokenDeposits`](../interfaces/DispatchContractType.md#enabletokendeposits)

***

### enableTokenDepositsBase()

> `protected` **enableTokenDepositsBase**(`tokenId`, `bridgeContractAddress`, `settlementContractAddress`): `Promise`\<`void`\>

Defined in: [packages/protocol/src/settlement/contracts/DispatchSmartContract.ts:168](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/contracts/DispatchSmartContract.ts#L168)

#### Parameters

##### tokenId

`Field`

##### bridgeContractAddress

`PublicKey`

##### settlementContractAddress

`PublicKey`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`enableTokenDepositsBase`](DispatchSmartContractBase.md#enabletokendepositsbase)

***

### fetchEvents()

> **fetchEvents**(`start`?, `end`?): `Promise`\<`object`[]\>

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:341

Asynchronously fetches events emitted by this SmartContract and returns an array of events with their corresponding types.

#### Parameters

##### start?

`UInt32`

The start height of the events to fetch.

##### end?

`UInt32`

The end height of the events to fetch. If not provided, fetches events up to the latest height.

#### Returns

`Promise`\<`object`[]\>

A promise that resolves to an array of objects, each containing the event type and event data for the specified range.

#### Async

#### Throws

If there is an error fetching events from the Mina network.

#### Example

```ts
const startHeight = UInt32.from(1000);
const endHeight = UInt32.from(2000);
const events = await myZkapp.fetchEvents(startHeight, endHeight);
console.log(events);
```

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`fetchEvents`](DispatchSmartContractBase.md#fetchevents)

***

### init()

> **init**(): `void`

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:201

`SmartContract.init()` will be called only when a SmartContract will be first deployed, not for redeployment.
This method can be overridden as follows
```
class MyContract extends SmartContract {
 init() {
   super.init();
   this.account.permissions.set(...);
   this.x.set(Field(1));
 }
}
```

#### Returns

`void`

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`init`](DispatchSmartContractBase.md#init)

***

### initialize()

> **initialize**(`settlementContract`): `Promise`\<`void`\>

Defined in: [packages/protocol/src/settlement/contracts/DispatchSmartContract.ts:268](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/contracts/DispatchSmartContract.ts#L268)

#### Parameters

##### settlementContract

`PublicKey`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`DispatchContractType`](../interfaces/DispatchContractType.md).[`initialize`](../interfaces/DispatchContractType.md#initialize)

***

### initializeBase()

> `protected` **initializeBase**(`settlementContract`): `void`

Defined in: [packages/protocol/src/settlement/contracts/DispatchSmartContract.ts:118](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/contracts/DispatchSmartContract.ts#L118)

#### Parameters

##### settlementContract

`PublicKey`

#### Returns

`void`

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`initializeBase`](DispatchSmartContractBase.md#initializebase)

***

### newSelf()

> **newSelf**(`methodName`?): `AccountUpdate`

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:230

Same as `SmartContract.self` but explicitly creates a new AccountUpdate.

#### Parameters

##### methodName?

`string`

#### Returns

`AccountUpdate`

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`newSelf`](DispatchSmartContractBase.md#newself)

***

### requireSignature()

> **requireSignature**(): `void`

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:213

Use this command if the account update created by this SmartContract should be signed by the account owner,
instead of authorized with a proof.

Note that the smart contract's Permissions determine which updates have to be (can be) authorized by a signature.

If you only want to avoid creating proofs for quicker testing, we advise you to
use `LocalBlockchain({ proofsEnabled: false })` instead of `requireSignature()`. Setting
`proofsEnabled` to `false` allows you to test your transactions with the same authorization flow as in production,
with the only difference being that quick mock proofs are filled in instead of real proofs.

#### Returns

`void`

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`requireSignature`](DispatchSmartContractBase.md#requiresignature)

***

### send()

> **send**(`args`): `AccountUpdate`

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:301

#### Parameters

##### args

###### amount

`number` \| `bigint` \| `UInt64`

###### to

`PublicKey` \| `SmartContract` \| `AccountUpdate`

#### Returns

`AccountUpdate`

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`send`](DispatchSmartContractBase.md#send)

***

### skipAuthorization()

> **skipAuthorization**(): `void`

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:222

Use this command if the account update created by this SmartContract should have no authorization on it,
instead of being authorized with a proof.

WARNING: This is a method that should rarely be useful. If you want to disable proofs for quicker testing, take a look
at `LocalBlockchain({ proofsEnabled: false })`, which causes mock proofs to be created and doesn't require changing the
authorization flow.

#### Returns

`void`

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`skipAuthorization`](DispatchSmartContractBase.md#skipauthorization)

***

### updateMessagesHash()

> **updateMessagesHash**(`executedMessagesHash`, `newPromisedMessagesHash`): `Promise`\<`void`\>

Defined in: [packages/protocol/src/settlement/contracts/DispatchSmartContract.ts:257](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/contracts/DispatchSmartContract.ts#L257)

#### Parameters

##### executedMessagesHash

`Field`

##### newPromisedMessagesHash

`Field`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`DispatchContractType`](../interfaces/DispatchContractType.md).[`updateMessagesHash`](../interfaces/DispatchContractType.md#updatemessageshash)

***

### updateMessagesHashBase()

> `protected` **updateMessagesHashBase**(`executedMessagesHash`, `newPromisedMessagesHash`): `void`

Defined in: [packages/protocol/src/settlement/contracts/DispatchSmartContract.ts:85](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/contracts/DispatchSmartContract.ts#L85)

#### Parameters

##### executedMessagesHash

`Field`

##### newPromisedMessagesHash

`Field`

#### Returns

`void`

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`updateMessagesHashBase`](DispatchSmartContractBase.md#updatemessageshashbase)

***

### analyzeMethods()

> `static` **analyzeMethods**(`__namedParameters`?): `Promise`\<`Record`\<`string`, \{ `actions`: `number`; `digest`: `string`; `gates`: `Gate`[]; `rows`: `number`; \}\>\>

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:377

This function is run internally before compiling a smart contract, to collect metadata about what each of your
smart contract methods does.

For external usage, this function can be handy because calling it involves running all methods in the same "mode" as `compile()` does,
so it serves as a quick-to-run check for whether your contract can be compiled without errors, which can greatly speed up iterating.

`analyzeMethods()` will also return the number of `rows` of each of your method circuits (i.e., the number of constraints in the underlying proof system),
which is a good indicator for circuit size and the time it will take to create proofs.
To inspect the created circuit in detail, you can look at the returned `gates`.

Note: If this function was already called before, it will short-circuit and just return the metadata collected the first time.

#### Parameters

##### \_\_namedParameters?

###### printSummary

`boolean`

#### Returns

`Promise`\<`Record`\<`string`, \{ `actions`: `number`; `digest`: `string`; `gates`: `Gate`[]; `rows`: `number`; \}\>\>

an object, keyed by method name, each entry containing:
 - `rows` the size of the constraint system created by this method
 - `digest` a digest of the method circuit
 - `actions` the number of actions the method dispatches
 - `gates` the constraint system, represented as an array of gates

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`analyzeMethods`](DispatchSmartContractBase.md#analyzemethods)

***

### compile()

> `static` **compile**(`__namedParameters`?): `Promise`\<\{ `provers`: `Prover`[]; `verificationKey`: \{ `data`: `string`; `hash`: `Field`; \}; `verify`: (`statement`, `proof`) => `Promise`\<`boolean`\>; \}\>

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:153

Compile your smart contract.

This generates both the prover functions, needed to create proofs for running `@method`s,
and the verification key, needed to deploy your zkApp.

Although provers and verification key are returned by this method, they are also cached internally and used when needed,
so you don't actually have to use the return value of this function.

Under the hood, "compiling" means calling into the lower-level [Pickles and Kimchi libraries](https://o1-labs.github.io/proof-systems/kimchi/overview.html) to
create multiple prover & verifier indices (one for each smart contract method as part of a "step circuit" and one for the "wrap circuit" which recursively wraps
it so that proofs end up in the original finite field). These are fairly expensive operations, so **expect compiling to take at least 20 seconds**,
up to several minutes if your circuit is large or your hardware is not optimal for these operations.

#### Parameters

##### \_\_namedParameters?

###### cache

`Cache`

###### forceRecompile

`boolean`

#### Returns

`Promise`\<\{ `provers`: `Prover`[]; `verificationKey`: \{ `data`: `string`; `hash`: `Field`; \}; `verify`: (`statement`, `proof`) => `Promise`\<`boolean`\>; \}\>

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`compile`](DispatchSmartContractBase.md#compile)

***

### digest()

> `static` **digest**(): `Promise`\<`string`\>

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:170

Computes a hash of your smart contract, which will reliably change _whenever one of your method circuits changes_.
This digest is quick to compute. it is designed to help with deciding whether a contract should be re-compiled or
a cached verification key can be used.

#### Returns

`Promise`\<`string`\>

the digest, as a hex string

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`digest`](DispatchSmartContractBase.md#digest)

***

### Proof()

> `static` **Proof**(): (`__namedParameters`) => `object`

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:68

Returns a Proof type that belongs to this SmartContract.

#### Returns

`Function`

##### Parameters

###### \_\_namedParameters

###### maxProofsVerified

`0` \| `1` \| `2`

###### proof

`unknown`

###### publicInput

`ZkappPublicInput`

###### publicOutput

`undefined`

##### Returns

`object`

###### maxProofsVerified

> **maxProofsVerified**: `0` \| `1` \| `2`

###### proof

> **proof**: `unknown`

###### publicInput

> **publicInput**: `ZkappPublicInput`

###### publicOutput

> **publicOutput**: `undefined`

###### shouldVerify

> **shouldVerify**: `Bool`

###### toJSON()

###### Returns

`JsonProof`

###### verify()

###### Returns

`void`

###### verifyIf()

###### Parameters

###### condition

`Bool`

###### Returns

`void`

##### publicInputType

> **publicInputType**: `Omit`\<`Provable`\<\{ `accountUpdate`: `Field`; `calls`: `Field`; \}, \{ `accountUpdate`: `bigint`; `calls`: `bigint`; \}\>, `"fromFields"`\> & `object` & `object`

###### Type declaration

###### fromFields()

> **fromFields**: (`fields`) => `object`

###### Parameters

###### fields

`Field`[]

###### Returns

`object`

###### accountUpdate

> **accountUpdate**: `Field`

###### calls

> **calls**: `Field`

###### Type declaration

###### empty()

> **empty**: () => `object`

###### Returns

`object`

###### accountUpdate

> **accountUpdate**: `Field`

###### calls

> **calls**: `Field`

###### fromJSON()

> **fromJSON**: (`x`) => `object`

###### Parameters

###### x

###### accountUpdate

`string`

###### calls

`string`

###### Returns

`object`

###### accountUpdate

> **accountUpdate**: `Field`

###### calls

> **calls**: `Field`

###### toInput()

> **toInput**: (`x`) => `object`

###### Parameters

###### x

###### accountUpdate

`Field`

###### calls

`Field`

###### Returns

`object`

###### fields?

> `optional` **fields**: `Field`[]

###### packed?

> `optional` **packed**: \[`Field`, `number`\][]

###### toJSON()

> **toJSON**: (`x`) => `object`

###### Parameters

###### x

###### accountUpdate

`Field`

###### calls

`Field`

###### Returns

`object`

###### accountUpdate

> **accountUpdate**: `string`

###### calls

> **calls**: `string`

##### publicOutputType

> **publicOutputType**: `ProvablePureExtended`\<`undefined`, `undefined`, `null`\>

##### tag()

> **tag**: () => *typeof* `SmartContract`

###### Returns

*typeof* `SmartContract`

##### dummy()

###### Type Parameters

• **Input**

• **OutPut**

###### Parameters

###### publicInput

`Input`

###### publicOutput

`OutPut`

###### maxProofsVerified

`0` | `1` | `2`

###### domainLog2?

`number`

###### Returns

`Promise`\<`Proof`\<`Input`, `OutPut`\>\>

##### fromJSON()

###### Type Parameters

• **S** *extends* (...`args`) => `Proof`\<`unknown`, `unknown`\> & `object` & `object`

###### Parameters

###### this

`S`

###### \_\_namedParameters

`JsonProof`

###### Returns

`Promise`\<`Proof`\<`InferProvable`\<`S`\[`"publicInputType"`\]\>, `InferProvable`\<`S`\[`"publicOutputType"`\]\>\>\>

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`Proof`](DispatchSmartContractBase.md#proof)

***

### runOutsideCircuit()

> `static` **runOutsideCircuit**(`run`): `void`

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:357

#### Parameters

##### run

() => `void`

#### Returns

`void`

#### Inherited from

[`DispatchSmartContractBase`](DispatchSmartContractBase.md).[`runOutsideCircuit`](DispatchSmartContractBase.md#runoutsidecircuit)
