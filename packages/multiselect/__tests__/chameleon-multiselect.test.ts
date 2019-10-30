import { litFixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-multiselect";

const fixture = html`
  <chameleon-multiselect></chameleon-multiselect>
`;

describe("chameleon-multiselect", () => {
  let element;

  beforeEach(async () => {
    element = await litFixture(fixture);
  });

  it("renders", () => {
    expect(Boolean(element.shadowRoot)).to.equal(true);
  });
});
