// group imports
import { RuntimeModule, runtimeModule } from "@proto-kit/module";
import { NoConfig } from "@proto-kit/common";
// group imports

// group balances-empty
@runtimeModule()
export class Balances extends RuntimeModule<NoConfig> {}
// group balances-empty

// group balances-config
import { UInt64 } from "@proto-kit/library";

interface BalancesConfig {
  totalSupply: UInt64;
}

@runtimeModule()
export class BalancesConfigured extends RuntimeModule<BalancesConfig> {
  public getTotalSupply() {
    return this.config.totalSupply;
  }
}
// group balances-config
