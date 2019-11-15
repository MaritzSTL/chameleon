import { litFixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-table";

const fixture = html`
  <chameleon-table></chameleon-table>
`;

describe("chameleon-table", () => {
  let element;

  beforeEach(async () => {
    element = await litFixture(fixture);
  });

  it("renders", () => {
    expect(Boolean(element.shadowRoot)).to.equal(true);
  });
});
