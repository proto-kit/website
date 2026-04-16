import { runtimeModule, runtimeMethod, RuntimeModule } from "@proto-kit/module";
import { State, StateMap, assert, state } from "@proto-kit/protocol";
import { Bool, PrivateKey, PublicKey, UInt64, ZkProgram } from "o1js";
import { Pickles } from "o1js/dist/node/bindings";
import { dummyBase64Proof } from "o1js/dist/node/lib/proof-system/zkprogram";

// group start
interface BalancesConfig {
  totalSupply: UInt64;
}

@runtimeModule()
export class Balances extends RuntimeModule<BalancesConfig> {
  @state() public balances = StateMap.from(PublicKey, UInt64);

  // group start
  // group getBalance
  public async getBalance(address: PublicKey): Promise<UInt64> {
    const balance = await this.balances.get(address);
    return UInt64.from(balance.value);
  }
  // group getBalance

  // group mint
  @runtimeMethod()
  public async mint(address: PublicKey, amount: UInt64) {
    assert(
      this.transaction.nonce.value.equals(UInt64.from(0)),
      "Only new users can mint"
    );
    await this.balances.set(address, amount);
  }
  // group mint

  // group transfer
  @runtimeMethod()
  public async transfer(from: PublicKey, to: PublicKey, amount: UInt64) {
    const fromBalance = await this.balances.get(from);
    const isFromBalanceSufficient = amount.lessThanOrEqual(fromBalance.value);
    assert(isFromBalanceSufficient, "From balance insufficient");
    // ... additional transfer logic
  }
  // group transfer

  // group mintWithZkProof
  @runtimeMethod()
  public async mintWithProof(canMintProof: CanMintProof, amount: UInt64) {
    canMintProof.verify();
    await this.balances.set(canMintProof.publicOutput, amount);
  }
  // group mintWithZkProof
}

// group zk-program-setup
// your zk-circuit proving the user is eligible to mint
const canMint = () => {
  return Bool(true);
};

// your zk program goes here
const canMintProgram = ZkProgram({
  name: "CanMint",
  publicOutput: PublicKey,
  publicInput: Bool,
  methods: {
    canMint: {
      privateInputs: [],
      method: async () => {
        return { publicOutput: PublicKey.fromPrivateKey(PrivateKey.random()) };
      },
    },
  },
});

// define the type of the proof
class CanMintProof extends ZkProgram.Proof(canMintProgram) {}

// generate a dummy proof, to be used when testing the runtime method
const [, dummy] = Pickles.proofOfBase64(await dummyBase64Proof(), 2);
const proof = new CanMintProof({
  proof: dummy,
  publicOutput: PublicKey.fromPrivateKey(PrivateKey.random()),
  publicInput: Bool(true),
  maxProofsVerified: 2,
});
// group zk-program-setup
