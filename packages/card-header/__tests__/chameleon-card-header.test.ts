import { fixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-card-header";

describe("chameleon-card-header", () => {
  it("renders", async () => {
    const el = await fixture(html`
      <chameleon-card-header></chameleon-card-header>
    `);
    expect(Boolean(el.shadowRoot)).to.equal(true);
  });
});
