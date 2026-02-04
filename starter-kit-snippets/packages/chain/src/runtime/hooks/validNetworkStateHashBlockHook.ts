import { AfterBlockHookArguments, BeforeBlockHookArguments, NetworkState, ProvableBlockHook, StateMap, state } from "@proto-kit/protocol";
import { Bool, Field } from "o1js";

export class validNetworkStateHashBlockHook extends ProvableBlockHook<
  Record<string, never>
> {

  @state() public validNetworkStateHash = StateMap.from(Field, Bool);

  public async afterBlock(
    networkState: NetworkState,
    state: AfterBlockHookArguments
  ): Promise<NetworkState> {
    await this.validNetworkStateHash.set(networkState.hash(), Bool(true));
    return networkState;
  }

  public async beforeBlock(
    networkState: NetworkState,
    state: BeforeBlockHookArguments
  ): Promise<NetworkState> {
    return networkState;
  }
}