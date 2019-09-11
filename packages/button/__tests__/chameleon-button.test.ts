import { fixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-button";

describe("chameleon-button", () => {
  it("renders", async () => {
    const el = await fixture(html`
      <chameleon-button></chameleon-button>
    `);
    expect(Boolean(el.shadowRoot)).to.equal(true);
  });
});
