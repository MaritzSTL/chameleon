import { fixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-sheet";

describe("chameleon-sheet", () => {
  it("renders", async () => {
    const el = await fixture(html`
      <chameleon-sheet></chameleon-sheet>
    `);
    expect(Boolean(el.shadowRoot)).to.equal(true);
  });
});
