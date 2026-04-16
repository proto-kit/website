import {
  AfterBlockHookArguments,
  BeforeBlockHookArguments,
  NetworkState,
  ProvableBlockHook,
  StateMap,
  state,
} from "@proto-kit/protocol";
import { Field } from "o1js";
// group state-root-history-hook
import { UInt64 } from "@proto-kit/library";

export class StateRootHistoryHook extends ProvableBlockHook {
  // Mapping (block height) => (state root)
  @state() public stateRootHistory = StateMap.from(UInt64, Field);

  /**
   * Safes every block's state root into protokit state so that runtime
   * modules have access to a complete state root history (e.g. for state proofs)
   */
  public async afterBlock(
    networkState: NetworkState,
    state: AfterBlockHookArguments
  ): Promise<NetworkState> {
    await this.stateRootHistory.set(
      UInt64.Safe.fromField(networkState.block.height.value),
      state.stateRoot
    );
    return networkState;
  }

  public async beforeBlock(
    networkState: NetworkState,
    state: BeforeBlockHookArguments
  ): Promise<NetworkState> {
    return networkState;
  }
}
// group state-root-history-hook
