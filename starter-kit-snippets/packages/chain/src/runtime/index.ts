import { Balance, VanillaRuntimeModules } from "@proto-kit/library";
import { ModulesConfig } from "@proto-kit/common";
import { Balances } from "./modules/balances";
import { GuestBook } from "./modules/guest-book";
import { Withdrawals } from "./modules/withdrawals";

export const modules = VanillaRuntimeModules.with({
  Balances,
  Withdrawals,
  GuestBook
});

export const config: ModulesConfig<typeof modules> = {
  Balances: {
    totalSupply: Balance.from(10_000 * 1e9),
  },
  Withdrawals: {},
  GuestBook: {},
};

export default {
  modules,
  config,
};
