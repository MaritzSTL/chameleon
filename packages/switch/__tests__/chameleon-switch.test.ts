import { litFixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-switch";

const fixture = html`
  <chameleon-switch></chameleon-switch>
`;

describe("chameleon-switch", () => {
  let element;

  it("renders", async () => {
    element = await litFixture(fixture);
    expect(Boolean(element.shadowRoot)).to.equal(true);
  });

  it("should have tag name defined", () => {
    expect(element.tagName.toLowerCase()).to.equal("chameleon-switch");
  });

  it("sets default values in constructor", () => {
    expect(element.label).to.equal("");
    expect(element.value).to.equal("");
    expect(element.checked).to.be.false;
  });
});
