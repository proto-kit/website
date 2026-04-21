import { runtimeModule, runtimeMessage } from "@proto-kit/module";
import { Deposit } from "@proto-kit/protocol";
import { Balances, UInt64 } from "@proto-kit/library";

@runtimeModule()
export class DepositBalances extends Balances {
  // ...
  @runtimeMessage()
  public async deposit(deposit: Deposit) {
    await this.mint(
      deposit.tokenId,
      deposit.address,
      new UInt64(deposit.amount)
    );
  }
}
