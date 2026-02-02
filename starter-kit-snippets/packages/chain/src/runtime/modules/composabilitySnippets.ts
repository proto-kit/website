import {
  RuntimeModule,
  runtimeModule,
  runtimeMethod,
} from "@proto-kit/module";
import { StateMap, assert, state } from "@proto-kit/protocol";
import { Bool, PublicKey, UInt64 } from "o1js";
import { inject } from "tsyringe";
 
interface BalancesConfig {
  totalSupply: UInt64;
}
 
@runtimeModule()
export class Balances extends RuntimeModule<BalancesConfig> {
  @state() public balances = StateMap.from(PublicKey, UInt64);
 
  public getTotalSupply() {
    return this.config.totalSupply
  }

  @runtimeMethod()
  public async mint(amount: UInt64) {
    assert(this.transaction.nonce.value.equals(UInt64.from(0)), "Only new users can mint");
    await this.balances.set(this.transaction.sender.value, amount);
  }
}

@runtimeModule()
export class CustomBalances extends Balances {
  @runtimeMethod()
  public override async mint() {
    await this.balances.set(this.transaction.sender.value, UInt64.from(1));
  }
}

@runtimeModule()
export class NoMintBalances extends Balances {
  @runtimeMethod()
  public override async mint() {
    assert(Bool(false), "Minting is disabled");
  }
}

@runtimeModule()
export class Vesting extends RuntimeModule<Record<string, never>> {
  public constructor(@inject("Balances") private balances: Balances) {
    super();
  }

  @runtimeMethod()
  public async claim() {
    await this.balances.mint(UInt64.from(1000))
  }
}