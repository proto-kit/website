---
title: BridgeContract
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / BridgeContract

# Class: BridgeContract

Defined in: [packages/protocol/src/settlement/contracts/BridgeContract.ts:211](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/contracts/BridgeContract.ts#L211)

## Extends

- [`BridgeContractBase`](BridgeContractBase.md)

## Implements

- [`BridgeContractType`](../type-aliases/BridgeContractType.md)

## Constructors

### new BridgeContract()

> **new BridgeContract**(`address`, `tokenId`?): [`BridgeContract`](BridgeContract.md)

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:138

#### Parameters

##### address

`PublicKey`

##### tokenId?

`Field`

#### Returns

[`BridgeContract`](BridgeContract.md)

#### Inherited from

[`BridgeContractBase`](BridgeContractBase.md).[`constructor`](BridgeContractBase.md#constructors)

## Properties

### address

> **address**: `PublicKey`

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:50

#### Inherited from

[`BridgeContractBase`](BridgeContractBase.md).[`address`](BridgeContractBase.md#address-1)

***

### events

> **events**: `object`

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:315

A list of event types that can be emitted using this.emitEvent()`.

#### Index Signature

\[`key`: `string`\]: `FlexibleProvablePure`\<`any`\>

#### Inherited from

[`BridgeContractBase`](BridgeContractBase.md).[`events`](BridgeContractBase.md#events)

***

### outgoingMessageCursor

> **outgoingMessageCursor**: `State`\<`Field`\>

Defined in: [packages/protocol/src/settlement/contracts/BridgeContract.ts:219](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/contracts/BridgeContract.ts#L219)

#### Implementation of

`BridgeContractType.outgoingMessageCursor`

#### Overrides

[`BridgeContractBase`](BridgeContractBase.md).[`outgoingMessageCursor`](BridgeContractBase.md#outgoingmessagecursor)

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

[`BridgeContractBase`](BridgeContractBase.md).[`sender`](BridgeContractBase.md#sender)

***

### settlementContractAddress

> **settlementContractAddress**: `State`\<`PublicKey`\>

Defined in: [packages/protocol/src/settlement/contracts/BridgeContract.ts:215](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/contracts/BridgeContract.ts#L215)

#### Overrides

[`BridgeContractBase`](BridgeContractBase.md).[`settlementContractAddress`](BridgeContractBase.md#settlementcontractaddress)

***

### stateRoot

> **stateRoot**: `State`\<`Field`\>

Defined in: [packages/protocol/src/settlement/contracts/BridgeContract.ts:217](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/contracts/BridgeContract.ts#L217)

#### Implementation of

`BridgeContractType.stateRoot`

#### Overrides

[`BridgeContractBase`](BridgeContractBase.md).[`stateRoot`](BridgeContractBase.md#stateroot)

***

### tokenId

> **tokenId**: `Field`

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:51

#### Inherited from

[`BridgeContractBase`](BridgeContractBase.md).[`tokenId`](BridgeContractBase.md#tokenid-1)

***

### \_maxProofsVerified?

> `static` `optional` **\_maxProofsVerified**: `0` \| `2` \| `1`

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:60

#### Inherited from

[`BridgeContractBase`](BridgeContractBase.md).[`_maxProofsVerified`](BridgeContractBase.md#_maxproofsverified)

***

### \_methodMetadata?

> `static` `optional` **\_methodMetadata**: `Record`\<`string`, \{ `actions`: `number`; `digest`: `string`; `gates`: `Gate`[]; `rows`: `number`; \}\>

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:53

#### Inherited from

[`BridgeContractBase`](BridgeContractBase.md).[`_methodMetadata`](BridgeContractBase.md#_methodmetadata)

***

### \_methods?

> `static` `optional` **\_methods**: `MethodInterface`[]

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:52

#### Inherited from

[`BridgeContractBase`](BridgeContractBase.md).[`_methods`](BridgeContractBase.md#_methods)

***

### \_provers?

> `static` `optional` **\_provers**: `Prover`[]

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:59

#### Inherited from

[`BridgeContractBase`](BridgeContractBase.md).[`_provers`](BridgeContractBase.md#_provers)

***

### \_verificationKey?

> `static` `optional` **\_verificationKey**: `object`

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:61

#### data

> **data**: `string`

#### hash

> **hash**: `Field`

#### Inherited from

[`BridgeContractBase`](BridgeContractBase.md).[`_verificationKey`](BridgeContractBase.md#_verificationkey)

***

### args

> `static` **args**: `object`

Defined in: [packages/protocol/src/settlement/contracts/BridgeContract.ts:55](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/contracts/BridgeContract.ts#L55)

#### SettlementContract

> **SettlementContract**: `undefined` \| [`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`SettlementContractType`](../interfaces/SettlementContractType.md)\> & *typeof* `SmartContract`

#### withdrawalStatePath

> **withdrawalStatePath**: \[`string`, `string`\]

#### Inherited from

[`BridgeContractBase`](BridgeContractBase.md).[`args`](BridgeContractBase.md#args)

***

### MAX\_ACCOUNT\_UPDATES

> `static` **MAX\_ACCOUNT\_UPDATES**: `number`

Defined in: node\_modules/o1js/dist/node/lib/mina/token/token-contract.d.ts:94

The maximum number of account updates using the token in a single
transaction that this contract supports.

#### Inherited from

[`BridgeContractBase`](BridgeContractBase.md).[`MAX_ACCOUNT_UPDATES`](BridgeContractBase.md#max_account_updates)

## Accessors

### account

#### Get Signature

> **get** **account**(): `Account`

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:268

Current account of the SmartContract.

##### Returns

`Account`

#### Inherited from

[`BridgeContractBase`](BridgeContractBase.md).[`account`](BridgeContractBase.md#account)

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

[`BridgeContractBase`](BridgeContractBase.md).[`balance`](BridgeContractBase.md#balance)

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

[`BridgeContractBase`](BridgeContractBase.md).[`currentSlot`](BridgeContractBase.md#currentslot)

***

### internal

#### Get Signature

> **get** **internal**(): `object`

Defined in: node\_modules/o1js/dist/node/lib/mina/token/token-contract.d.ts:47

Helper methods to use from within a token contract.

##### Returns

`object`

###### burn()

###### Parameters

###### \_\_namedParameters

###### address

`PublicKey` \| `SmartContract` \| `AccountUpdate`

###### amount

`number` \| `bigint` \| `UInt64`

###### Returns

`AccountUpdate`

###### mint()

###### Parameters

###### \_\_namedParameters

###### address

`PublicKey` \| `SmartContract` \| `AccountUpdate`

###### amount

`number` \| `bigint` \| `UInt64`

###### Returns

`AccountUpdate`

###### send()

###### Parameters

###### \_\_namedParameters

###### amount

`number` \| `bigint` \| `UInt64`

###### from

`PublicKey` \| `SmartContract` \| `AccountUpdate`

###### to

`PublicKey` \| `SmartContract` \| `AccountUpdate`

###### Returns

`AccountUpdate`

#### Inherited from

[`BridgeContractBase`](BridgeContractBase.md).[`internal`](BridgeContractBase.md#internal)

***

### network

#### Get Signature

> **get** **network**(): `Network`

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:272

Current network state of the SmartContract.

##### Returns

`Network`

#### Inherited from

[`BridgeContractBase`](BridgeContractBase.md).[`network`](BridgeContractBase.md#network)

***

### self

#### Get Signature

> **get** **self**(): `AccountUpdate`

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:226

Returns the current AccountUpdate associated to this SmartContract.

##### Returns

`AccountUpdate`

#### Inherited from

[`BridgeContractBase`](BridgeContractBase.md).[`self`](BridgeContractBase.md#self)

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

[`BridgeContractBase`](BridgeContractBase.md).[`approve`](BridgeContractBase.md#approve)

***

### approveAccountUpdate()

> **approveAccountUpdate**(`accountUpdate`): `Promise`\<`void`\>

Defined in: node\_modules/o1js/dist/node/lib/mina/token/token-contract.d.ts:78

Approve a single account update (with arbitrarily many children).

#### Parameters

##### accountUpdate

`AccountUpdate` | `AccountUpdateTree`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`BridgeContractBase`](BridgeContractBase.md).[`approveAccountUpdate`](BridgeContractBase.md#approveaccountupdate)

***

### approveAccountUpdates()

> **approveAccountUpdates**(`accountUpdates`): `Promise`\<`void`\>

Defined in: node\_modules/o1js/dist/node/lib/mina/token/token-contract.d.ts:82

Approve a list of account updates (with arbitrarily many children).

#### Parameters

##### accountUpdates

(`AccountUpdate` \| `AccountUpdateTree`)[]

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`BridgeContractBase`](BridgeContractBase.md).[`approveAccountUpdates`](BridgeContractBase.md#approveaccountupdates)

***

### approveBase()

> **approveBase**(): `Promise`\<`void`\>

Defined in: [packages/protocol/src/settlement/contracts/BridgeContract.ts:110](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/contracts/BridgeContract.ts#L110)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`BridgeContractBase`](BridgeContractBase.md).[`approveBase`](BridgeContractBase.md#approvebase)

***

### checkZeroBalanceChange()

> **checkZeroBalanceChange**(`updates`): `void`

Defined in: node\_modules/o1js/dist/node/lib/mina/token/token-contract.d.ts:74

Use `forEachUpdate()` to prove that the total balance change of child account updates is zero.

This is provided out of the box as it is both a good example, and probably the most common implementation, of `approveBase()`.

#### Parameters

##### updates

`AccountUpdateForest`

#### Returns

`void`

#### Inherited from

[`BridgeContractBase`](BridgeContractBase.md).[`checkZeroBalanceChange`](BridgeContractBase.md#checkzerobalancechange)

***

### deploy()

> **deploy**(`args`?): `Promise`\<`void`\>

Defined in: node\_modules/o1js/dist/node/lib/mina/token/token-contract.d.ts:39

Deploys a TokenContract.

In addition to base smart contract deployment, this adds two steps:
- set the `access` permission to `proofOrSignature()`, to prevent against unauthorized token operations
  - not doing this would imply that anyone can bypass token contract authorization and simply mint themselves tokens
- require the zkapp account to be new, using the `isNew` precondition.
  this guarantees that the access permission is set from the very start of the existence of this account.
  creating the zkapp account before deployment would otherwise be a security vulnerability that is too easy to introduce.

Note that because of the `isNew` precondition, the zkapp account must not be created prior to calling `deploy()`.

If the contract needs to be re-deployed, you can switch off this behaviour by overriding the `isNew` precondition:
```ts
async deploy() {
  await super.deploy();
  // DON'T DO THIS ON THE INITIAL DEPLOYMENT!
  this.account.isNew.requireNothing();
}
```

#### Parameters

##### args?

`DeployArgs`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`BridgeContractBase`](BridgeContractBase.md).[`deploy`](BridgeContractBase.md#deploy)

***

### deployProvable()

> **deployProvable**(`verificationKey`, `signedSettlement`, `permissions`, `settlementContractAddress`): `Promise`\<`AccountUpdate`\>

Defined in: [packages/protocol/src/settlement/contracts/BridgeContract.ts:74](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/contracts/BridgeContract.ts#L74)

Function to deploy the bridging contract in a provable way, so that it can be
a provable process initiated by the settlement contract with a baked-in vk

#### Parameters

##### verificationKey

`undefined` | `VerificationKey`

##### signedSettlement

`boolean`

##### permissions

`Permissions`

##### settlementContractAddress

`PublicKey`

#### Returns

`Promise`\<`AccountUpdate`\>

Creates and returns an account update deploying the bridge contract

#### Implementation of

`BridgeContractType.deployProvable`

#### Inherited from

[`BridgeContractBase`](BridgeContractBase.md).[`deployProvable`](BridgeContractBase.md#deployprovable)

***

### deriveTokenId()

> **deriveTokenId**(): `Field`

Defined in: node\_modules/o1js/dist/node/lib/mina/token/token-contract.d.ts:43

Returns the `tokenId` of the token managed by this contract.

#### Returns

`Field`

#### Inherited from

[`BridgeContractBase`](BridgeContractBase.md).[`deriveTokenId`](BridgeContractBase.md#derivetokenid)

***

### emitEvent()

> **emitEvent**\<`K`\>(`type`, `event`): `void`

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:327

Emits an event. Events will be emitted as a part of the transaction and can be collected by archive nodes.

#### Type Parameters

• **K** *extends* `string` \| `number`

#### Parameters

##### type

`K`

##### event

`any`

#### Returns

`void`

#### Inherited from

[`BridgeContractBase`](BridgeContractBase.md).[`emitEvent`](BridgeContractBase.md#emitevent)

***

### emitEventIf()

> **emitEventIf**\<`K`\>(`condition`, `type`, `event`): `void`

Defined in: node\_modules/o1js/dist/node/lib/mina/zkapp.d.ts:323

Conditionally emits an event.

Events will be emitted as a part of the transaction and can be collected by archive nodes.

#### Type Parameters

• **K** *extends* `string` \| `number`

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

[`BridgeContractBase`](BridgeContractBase.md).[`emitEventIf`](BridgeContractBase.md#emiteventif)

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

[`BridgeContractBase`](BridgeContractBase.md).[`fetchEvents`](BridgeContractBase.md#fetchevents)

***

### forEachUpdate()

> **forEachUpdate**(`updates`, `callback`): `void`

Defined in: node\_modules/o1js/dist/node/lib/mina/token/token-contract.d.ts:68

Iterate through the account updates in `updates` and apply `callback` to each.

This method is provable and is suitable as a base for implementing `approveUpdates()`.

#### Parameters

##### updates

`AccountUpdateForest`

##### callback

(`update`, `usesToken`) => `void`

#### Returns

`void`

#### Inherited from

[`BridgeContractBase`](BridgeContractBase.md).[`forEachUpdate`](BridgeContractBase.md#foreachupdate)

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

[`BridgeContractBase`](BridgeContractBase.md).[`init`](BridgeContractBase.md#init)

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

[`BridgeContractBase`](BridgeContractBase.md).[`newSelf`](BridgeContractBase.md#newself)

***

### redeem()

> **redeem**(`additionUpdate`): `Promise`\<`void`\>

Defined in: [packages/protocol/src/settlement/contracts/BridgeContract.ts:234](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/contracts/BridgeContract.ts#L234)

#### Parameters

##### additionUpdate

`AccountUpdate`

#### Returns

`Promise`\<`void`\>

#### Implementation of

`BridgeContractType.redeem`

***

### redeemBase()

> `protected` **redeemBase**(`additionUpdate`): `Promise`\<`void`\>

Defined in: [packages/protocol/src/settlement/contracts/BridgeContract.ts:183](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/contracts/BridgeContract.ts#L183)

#### Parameters

##### additionUpdate

`AccountUpdate`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`BridgeContractBase`](BridgeContractBase.md).[`redeemBase`](BridgeContractBase.md#redeembase)

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

[`BridgeContractBase`](BridgeContractBase.md).[`requireSignature`](BridgeContractBase.md#requiresignature)

***

### rollupOutgoingMessages()

> **rollupOutgoingMessages**(`batch`): `Promise`\<`Field`\>

Defined in: [packages/protocol/src/settlement/contracts/BridgeContract.ts:227](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/contracts/BridgeContract.ts#L227)

#### Parameters

##### batch

[`OutgoingMessageArgumentBatch`](OutgoingMessageArgumentBatch.md)

#### Returns

`Promise`\<`Field`\>

#### Implementation of

`BridgeContractType.rollupOutgoingMessages`

***

### rollupOutgoingMessagesBase()

> **rollupOutgoingMessagesBase**(`batch`): `Promise`\<`Field`\>

Defined in: [packages/protocol/src/settlement/contracts/BridgeContract.ts:132](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/contracts/BridgeContract.ts#L132)

#### Parameters

##### batch

[`OutgoingMessageArgumentBatch`](OutgoingMessageArgumentBatch.md)

#### Returns

`Promise`\<`Field`\>

#### Inherited from

[`BridgeContractBase`](BridgeContractBase.md).[`rollupOutgoingMessagesBase`](BridgeContractBase.md#rollupoutgoingmessagesbase)

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

[`BridgeContractBase`](BridgeContractBase.md).[`send`](BridgeContractBase.md#send-2)

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

[`BridgeContractBase`](BridgeContractBase.md).[`skipAuthorization`](BridgeContractBase.md#skipauthorization)

***

### transfer()

> **transfer**(`from`, `to`, `amount`): `Promise`\<`void`\>

Defined in: node\_modules/o1js/dist/node/lib/mina/token/token-contract.d.ts:86

Transfer `amount` of tokens from `from` to `to`.

#### Parameters

##### from

`PublicKey` | `AccountUpdate`

##### to

`PublicKey` | `AccountUpdate`

##### amount

`number` | `bigint` | `UInt64`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`BridgeContractBase`](BridgeContractBase.md).[`transfer`](BridgeContractBase.md#transfer)

***

### updateStateRoot()

> **updateStateRoot**(`root`): `Promise`\<`void`\>

Defined in: [packages/protocol/src/settlement/contracts/BridgeContract.ts:222](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/contracts/BridgeContract.ts#L222)

#### Parameters

##### root

`Field`

#### Returns

`Promise`\<`void`\>

#### Implementation of

`BridgeContractType.updateStateRoot`

***

### updateStateRootBase()

> **updateStateRootBase**(`root`): `Promise`\<`void`\>

Defined in: [packages/protocol/src/settlement/contracts/BridgeContract.ts:114](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/contracts/BridgeContract.ts#L114)

#### Parameters

##### root

`Field`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`BridgeContractBase`](BridgeContractBase.md).[`updateStateRootBase`](BridgeContractBase.md#updatestaterootbase)

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

[`BridgeContractBase`](BridgeContractBase.md).[`analyzeMethods`](BridgeContractBase.md#analyzemethods)

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

[`BridgeContractBase`](BridgeContractBase.md).[`compile`](BridgeContractBase.md#compile)

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

[`BridgeContractBase`](BridgeContractBase.md).[`digest`](BridgeContractBase.md#digest)

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

[`BridgeContractBase`](BridgeContractBase.md).[`Proof`](BridgeContractBase.md#proof)

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

[`BridgeContractBase`](BridgeContractBase.md).[`runOutsideCircuit`](BridgeContractBase.md#runoutsidecircuit)
