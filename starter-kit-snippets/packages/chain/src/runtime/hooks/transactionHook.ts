import { 
  AccountState, 
  AfterTransactionHookArguments, 
  BeforeTransactionHookArguments, 
  ProvableTransactionHook, 
  state, 
  StateMap
} from "@proto-kit/protocol";
import { PublicKey } from "o1js";

export class TransactionHook extends ProvableTransactionHook<Record<string, never>> {
  @state() public accountState = StateMap.from(PublicKey, AccountState);
  
  public async beforeTransaction(
    executionData: BeforeTransactionHookArguments
  ): Promise<void> {
    const {value: accountState} = await this.accountState.get(executionData.transaction.sender.value)
    
    await this.accountState.set(executionData.transaction.sender.value, accountState);
  }

  public async afterTransaction(execution: AfterTransactionHookArguments): Promise<void> { } 
}