import { noop } from "@proto-kit/common";
import { Balance, Balances, TokenId } from "@proto-kit/library";
import { Runtime, RuntimeModulesRecord } from "@proto-kit/module";
import { 
  AfterTransactionHookArguments, 
  BeforeTransactionHookArguments, 
  ProvableTransactionHook, 
} from "@proto-kit/protocol";
import { PublicKey } from "o1js";
import { inject } from "tsyringe";

export class SimpleTransactionFeeModule extends ProvableTransactionHook {
  private balances: Balances;

  public constructor(
    @inject("Runtime") runtime: Runtime<RuntimeModulesRecord>
  ) {
    super();
    this.balances = runtime.resolveOrFail("Balances", Balances);
  }
  
  public async afterTransaction(execution: AfterTransactionHookArguments): Promise<void> {
    this.balances.transfer(
      TokenId.from(0),
      execution.transaction.sender.value,
      PublicKey.empty(),
      Balance.from(100)
    );
  }
  
  public async beforeTransaction(
    executionData: BeforeTransactionHookArguments
  ): Promise<void> {
    noop();
  }
}