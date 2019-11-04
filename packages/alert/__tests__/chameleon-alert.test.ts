import { litFixture, html, expect } from "@open-wc/testing";
import sinon from "sinon";
import "../src/chameleon-alert";

const fixture = html`
  <chameleon-alert></chameleon-alert>
`;

describe("chameleon-alert", () => {
  let element;

  beforeEach(async () => {
    element = await litFixture(fixture);
  });

  it("renders", () => {
    expect(Boolean(element.shadowRoot)).to.equal(true);
  });

  it("_el returns null if shadowRoot is null", () => {
    sinon.stub(element, "shadowRoot").get(() => null);

    expect(element._el).to.be.null;
  });
});
