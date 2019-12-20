// import "@chameleon-ds/timezone/src/chameleon-timezone";
import { html, fixture, expect } from "@open-wc/testing";
import sinon from "sinon";

describe("chameleon-timezone", () => {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let element;
  let spy;

  beforeEach(async () => {
    spy = sinon.spy();
    element = await fixture(
      html`
        <chameleon-timezone
          .timeZone="${timeZone}"
          @chameleon.input=${spy}
        ></chameleon-timezone>
      `
    );
  });

  it("should have tag name defined", () => {
    expect(element.tagName.toLowerCase()).to.equal("chameleon-timezone");
  });
});
