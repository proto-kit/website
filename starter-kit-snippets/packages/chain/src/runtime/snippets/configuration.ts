import { Balance } from "@proto-kit/library";
import { ModulesConfig } from "@proto-kit/common";
import { Balances } from "../modules/balances";

export const modules = {
  Balances,
};

export const config: ModulesConfig<typeof modules> = {
  Balances: {
    totalSupply: Balance.from(10_000 * 1e9),
  },
};

export default {
  modules,
  config,
};
