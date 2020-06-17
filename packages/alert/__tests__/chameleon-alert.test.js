import { litFixture, html, expect } from "@open-wc/testing";
import "../chameleon-alert.js";

const fixture = html` <chameleon-alert></chameleon-alert> `;

describe("chameleon-alert", () => {
  let element;

  beforeEach(async () => {
    element = await litFixture(fixture);
  });

  it("renders", () => {
    expect(Boolean(element.shadowRoot)).to.equal(true);
  });

  // TODO: this test passes when it shouldn't
  xit("handle close removes the element from the DOM", async () => {
    // element.handleClose();
    // element.requestUpdate();
    // await element.updateComplete;

    expect(element).lightDom.to.equal("");
  });
});
