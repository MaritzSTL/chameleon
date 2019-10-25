import { litFixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-checkbox";

const fixture = html`
  <chameleon-checkbox></chameleon-checkbox>
`;

describe("chameleon-checkbox", () => {
  let element;

  beforeEach(async () => {
    element = await litFixture(fixture);
  });

  it("renders", () => {
    expect(Boolean(element.shadowRoot)).to.equal(true);
  });

  it("shows label text", () => {
    element.label = "chameleon";
    expect(element.labelText).to.equal("chameleon");
  });
});
