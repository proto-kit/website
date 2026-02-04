// group imports
import {
  RuntimeEvents,
  RuntimeModule,
  runtimeMethod,
  runtimeModule,
} from "@proto-kit/module";
import { Bool, Struct } from "o1js";
// group imports

// group events-example
export class TestEvent extends Struct({
  message: Bool,
}) {}

@runtimeModule()
export class EventMaker extends RuntimeModule<Record<string, never>> {
  public events = new RuntimeEvents({
    primary: TestEvent,
  });

  @runtimeMethod()
  public async makeEvent() {
    this.events.emit("primary", new TestEvent({ message: Bool(false) }));
  }
}
// group events-example

@runtimeModule()
export class ConditionalEventMaker extends RuntimeModule<Record<string, never>> {
  public events = new RuntimeEvents({
    primary: TestEvent,
  });

  public async makeConditionalEvent() {
    const someCondition = Bool(true);

    // group conditional-events
    const doEmit: Bool = someCondition;
    this.events.emitIf(doEmit, "primary", new TestEvent({ message: Bool(false) }));
    // group conditional-events
  }
}
