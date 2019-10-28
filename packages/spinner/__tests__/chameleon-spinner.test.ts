import { litFixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-spinner";

const fixture = html`
  <chameleon-spinner></chameleon-spinner>
`;

describe("chameleon-spinner", () => {
  let element;

  beforeEach(async () => {
    element = await litFixture(fixture);
  });

  it("renders", () => {
    expect(Boolean(element.shadowRoot)).to.equal(true);
  });
});
