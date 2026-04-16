import { noop } from "@proto-kit/common";
import { Balance, Balances, TokenId } from "@proto-kit/library";
import {
  AfterTransactionHookArguments,
  BeforeTransactionHookArguments,
  ProvableTransactionHook,
} from "@proto-kit/protocol";
import { PublicKey } from "o1js";
import { inject } from "tsyringe";

// group transaction-fee-module
export class SimpleTransactionFeeModule extends ProvableTransactionHook {
  public constructor(@inject("Balances") private readonly balances: Balances) {
    super();
  }

  public async afterTransaction(
    execution: AfterTransactionHookArguments
  ): Promise<void> {
    await this.balances.transfer(
      TokenId.from(0),
      execution.transaction.transaction.sender.value,
      PublicKey.empty(),
      Balance.from(100)
    );
  }
  // group transaction-fee-module

  public async beforeTransaction(
    executionData: BeforeTransactionHookArguments
  ): Promise<void> {
    noop();
  }
}
