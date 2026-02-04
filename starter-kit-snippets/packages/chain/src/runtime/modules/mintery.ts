// group imports
import { Balances, TokenId, UInt64 } from "@proto-kit/library";
import { RuntimeModule, runtimeModule, runtimeMethod } from "@proto-kit/module";
import { assert } from "@proto-kit/protocol";
import { hash } from "crypto";
import { Field, PublicKey, Struct } from "o1js";
import { inject } from "tsyringe";

// group imports

class MintProof extends Struct({
  hash: Field,
}) {}

// group mintery-def
export const errors = {
  mintOnlyAtGenesis: "Minting is only allowed at the genesis block",
};

@runtimeModule()
export class Mintery extends RuntimeModule<Record<string, never>> {
  
  public constructor(@inject("Balances") public balances: Balances) {
    super();
  }

// group mintery-def
  // group mint
  @runtimeMethod()
  public async mint(tokenId: TokenId, address: PublicKey, amount: UInt64) {
    assert(
      UInt64.Safe.fromField(this.network.block.height.value).equals(UInt64.from(0)),
      errors.mintOnlyAtGenesis
    );
    await this.balances.setBalance(tokenId, address, amount);
  }
  // group mint

  // group mintPrivate
  @runtimeMethod()
  public async mintPrivate(proof: MintProof, amount: UInt64) {
    assert(this.network.previous.rootHash.equals(proof.hash), "Proof is not valid");
  }
  // group mintPrivate
}