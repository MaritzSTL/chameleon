import { litFixture, html, expect } from "@open-wc/testing";
import "@chameleon-ds/date/src/chameleon-date";

const fixture = html`
  <chameleon-date></chameleon-date>
`;

describe("chameleon-date", () => {
  let element;

  beforeEach(async () => {
    element = await litFixture(fixture);
  });

  it("renders", async () => {
    expect(Boolean(element.shadowRoot)).to.equal(true);
  });
});
