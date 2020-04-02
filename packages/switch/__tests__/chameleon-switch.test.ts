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

  it("renders labelText", () => {
    element.label = "chameleon";

    expect(element.labelText).to.equal("chameleon");
  });
});
