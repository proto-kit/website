// group imports
import { runtimeModule, runtimeMethod, RuntimeModule } from "@proto-kit/module";
import { StateMap, assert, state } from "@proto-kit/protocol";
import { Field, PublicKey, Struct } from "o1js";
import { UInt64 } from "@proto-kit/library";

// group imports
// group storage
export class CheckInId extends Field {}
export class CheckIn extends Struct({
  guest: PublicKey,
  createdAt: UInt64,
  rating: UInt64,
}) {}
// group storage

// group runtime-module-def
@runtimeModule()
export class GuestBook extends RuntimeModule<Record<string, never>> {
  @state() public checkIns = StateMap.from(PublicKey, CheckIn);
  // group runtime-module-def

  // group checkIn
  @runtimeMethod()
  public async checkIn(rating: UInt64) {
    assert(rating.lessThanOrEqual(UInt64.from(5)), "Maximum rating can be 5");

    const guest = this.transaction.sender.value;
    const createdAt = UInt64.Safe.fromField(this.network.block.height.value);
    const checkIn = new CheckIn({
      guest,
      createdAt,
      rating,
    });

    await this.checkIns.set(checkIn.guest, checkIn);
  }
  // group checkIn
}
