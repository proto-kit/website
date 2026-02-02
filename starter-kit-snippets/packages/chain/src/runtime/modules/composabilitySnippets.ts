import {
  RuntimeModule,
  runtimeModule,
  state,
  runtimeMethod,
} from "@proto-kit/module";
import { State, StateMap, Option, assert } from "@proto-kit/protocol";
import { PublicKey } from "o1js";
import { UInt64 } from "@proto-kit/library";
 
interface BalancesConfig {
  totalSupply: UInt64;
}
 
@runtimeModule()
export class Balances extends RuntimeModule<BalancesConfig> {
  @state() public balances = StateMap.from(PublicKey, UInt64);
 
  @runtimeMethod()
  public mint(amount: UInt64) {
    assert(this.transaction.nonce.equals(UInt64.from(0)), "Only new users can mint");
    this.balances.set(this.transaction.sender, amount);
  }
}

@runtimeModule()
export class CustomBalances extends Balances {
  @runtimeMethod()
  public override mint() {
    this.balances.set(this.transaction.sender, UInt64.from(1));
  }
}

@runtimeModule()
export class NoMintBalances extends Balances {
  @runtimeMethod()
  public override mint() {
    assert(Bool(false), "Minting is disabled");
  }
}