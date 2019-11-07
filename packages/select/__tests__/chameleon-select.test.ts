import { litFixture, html, expect } from "@open-wc/testing";

import "../src/chameleon-select";

const fixture = html`
  <chameleon-select></chameleon-select>
`;

describe("chameleon-select", () => {
  let element;

  it("renders", async () => {
    element = await litFixture(fixture);
    expect(Boolean(element.shadowRoot)).to.equal(true);
  });
});