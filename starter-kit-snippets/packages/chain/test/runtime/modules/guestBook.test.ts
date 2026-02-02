// group start
import { InMemorySigner } from "@proto-kit/sdk";
import { UInt64 } from "@proto-kit/library";
import { client as appChain } from "../../../src/environments/client.config";
import { PrivateKey, Provable } from "o1js";
import { GuestBook } from "../../../src/runtime/modules/guest-book";
import { sleep } from "@proto-kit/common";

const signer = PrivateKey.random();
const sender = signer.toPublicKey();

describe("interaction", () => {
  let guestBook: GuestBook;

  beforeAll(async () => {
    await appChain.start();

    const inMemorySigner = new InMemorySigner();

    appChain.registerValue({
      Signer: inMemorySigner,
    });

    const resolvedInMemorySigner = appChain.resolve("Signer") as InMemorySigner;
    resolvedInMemorySigner.config = { signer };

    guestBook = appChain.runtime.resolve("GuestBook");
  });
  
// group start

  // group onlyTransaction
  it("should interact with the app-chain", async () => {
    const rating = UInt64.from(3);
    const tx = await appChain.transaction(sender, async () => {
      await guestBook.checkIn(rating);
    });

    await tx.sign();
    await tx.send();
  });
  // group onlyTransaction

  // group withQuery
  it("should query the app-chain", async () => {
    const rating = UInt64.from(3);
    const tx = await appChain.transaction(sender, async () => {
      await guestBook.checkIn(rating);
    });

    await tx.sign();
    await tx.send();

    await sleep(8000);

    const checkIn = await appChain.query.runtime.GuestBook.checkIns.get(sender);
    Provable.log("checkIn", sender, checkIn);
  });
  // group withQuery
});