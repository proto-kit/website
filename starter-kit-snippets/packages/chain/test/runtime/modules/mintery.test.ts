// group imports
import { TestingAppChain } from "@proto-kit/sdk";
import { PrivateKey } from "o1js";
import { Mintery, errors } from "../../../src/runtime/modules/mintery";
import { BalancesKey, TokenId, UInt64 } from "@proto-kit/library";

// group imports
// group test-setup
describe("mintery", () => {
  let appChain: ReturnType<
    typeof TestingAppChain.fromRuntime<{ Mintery: typeof Mintery }>
  >;

  let mintery: Mintery;

  const alicePrivateKey = PrivateKey.random();
  const alice = alicePrivateKey.toPublicKey();
  const tokenId = TokenId.from(0);

  beforeAll(async () => {
    appChain = TestingAppChain.fromRuntime({
      Mintery,
    });

    appChain.configurePartial({
      Runtime: {
        Balances: {},
        Mintery: {},
      },
    });

    await appChain.start();

    appChain.setSigner(alicePrivateKey);

    mintery = appChain.runtime.resolve("Mintery");
  });
// group test-setup
  // group test-mint-at-genesis
  it("should mint at the genesis block", async () => {
    const tx = await appChain.transaction(alice, async () => {
      await mintery.mint(tokenId, alice, UInt64.from(1000));
    });
  
    await tx.sign();
    await tx.send();
  
    const block = await appChain.produceBlock();
    const balance = await appChain.query.runtime.Balances.balances.get(
      new BalancesKey({ tokenId, address: alice })
    );
  
    expect(block?.transactions[0].status.toBoolean()).toBe(true);
    expect(balance?.toBigInt()).toBe(1000n);
  }, 1_000_000);
  // group test-mint-at-genesis

  // group test-mint-at-second-block
  it("should not mint at the second block", async () => {
    const tx = await appChain.transaction(alice, async() => {
      await mintery.mint(tokenId, alice, UInt64.from(1000));
    });
  
    await tx.sign();
    await tx.send();
  
    const block = await appChain.produceBlock();
    const balance = await appChain.query.runtime.Balances.balances.get(
      new BalancesKey({ tokenId, address: alice })
    );
  
    expect(block?.transactions[0].status.toBoolean()).toBe(false);
    expect(block?.transactions[0].statusMessage).toBe(errors.mintOnlyAtGenesis);
    expect(balance?.toBigInt()).toBe(1000n);
  }, 1_000_000);
  // group test-mint-at-second-block
});
