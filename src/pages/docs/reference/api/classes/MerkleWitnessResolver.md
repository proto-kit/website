---
title: MerkleWitnessResolver
---

[**@proto-kit/api**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/api](../README.md) / MerkleWitnessResolver

# Class: MerkleWitnessResolver

Defined in: [api/src/graphql/modules/MerkleWitnessResolver.ts:35](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/api/src/graphql/modules/MerkleWitnessResolver.ts#L35)

Used by various module sub-types that may need to be configured

## Extends

- [`GraphqlModule`](GraphqlModule.md)\<`object`\>

## Constructors

### new MerkleWitnessResolver()

> **new MerkleWitnessResolver**(`treeStore`): [`MerkleWitnessResolver`](MerkleWitnessResolver.md)

Defined in: [api/src/graphql/modules/MerkleWitnessResolver.ts:36](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/api/src/graphql/modules/MerkleWitnessResolver.ts#L36)

#### Parameters

##### treeStore

[`AsyncMerkleTreeStore`](../../sequencer/interfaces/AsyncMerkleTreeStore.md)

#### Returns

[`MerkleWitnessResolver`](MerkleWitnessResolver.md)

#### Overrides

[`GraphqlModule`](GraphqlModule.md).[`constructor`](GraphqlModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| `object`

Defined in: common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`GraphqlModule`](GraphqlModule.md).[`currentConfig`](GraphqlModule.md#currentconfig)

## Accessors

### config

#### Get Signature

> **get** **config**(): `Config`

Defined in: common/dist/config/ConfigurableModule.d.ts:18

##### Returns

`Config`

#### Set Signature

> **set** **config**(`config`): `void`

Defined in: common/dist/config/ConfigurableModule.d.ts:19

##### Parameters

###### config

`Config`

##### Returns

`void`

#### Inherited from

[`GraphqlModule`](GraphqlModule.md).[`config`](GraphqlModule.md#config)

## Methods

### create()

> **create**(`childContainerProvider`): `void`

Defined in: common/dist/config/ConfigurableModule.d.ts:20

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../../common/interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Inherited from

[`GraphqlModule`](GraphqlModule.md).[`create`](GraphqlModule.md#create)

***

### witness()

> **witness**(`path`): `Promise`\<[`MerkleWitnessDTO`](MerkleWitnessDTO.md)\>

Defined in: [api/src/graphql/modules/MerkleWitnessResolver.ts:46](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/api/src/graphql/modules/MerkleWitnessResolver.ts#L46)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`MerkleWitnessDTO`](MerkleWitnessDTO.md)\>
