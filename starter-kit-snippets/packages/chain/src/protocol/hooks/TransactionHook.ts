import {
  AccountState,
  AfterTransactionHookArguments,
  BeforeTransactionHookArguments,
  ProvableTransactionHook,
} from "@proto-kit/protocol";
import { PublicKey } from "o1js";
import { NoConfig } from "@proto-kit/common";

// group transaction-hook
import { state, StateMap } from "@proto-kit/protocol";

export class TransactionHook extends ProvableTransactionHook<NoConfig> {
  @state() public accountState = StateMap.from(PublicKey, AccountState);

  public async beforeTransaction(
    executionData: BeforeTransactionHookArguments
  ): Promise<void> {
    const { value: accountState } = await this.accountState.get(
      executionData.transaction.transaction.sender.value
    );

    await this.accountState.set(
      executionData.transaction.transaction.sender.value,
      accountState
    );
  }

  public async afterTransaction(
    execution: AfterTransactionHookArguments
  ): Promise<void> {}
}
// group transaction-hook
