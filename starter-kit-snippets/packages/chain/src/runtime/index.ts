import { Balance, VanillaRuntimeModules } from "@proto-kit/library";
import { ModulesConfig } from "@proto-kit/common";
import { Balances } from "./modules/balances";
import { GuestBook } from "./modules/guest-book";

export const modules = VanillaRuntimeModules.with({
  Balances,
  GuestBook,
});

export const config: ModulesConfig<typeof modules> = {
  Balances: {
    totalSupply: Balance.from(10_000),
  },
  GuestBook: {},
};

export default {
  modules,
  config,
};
