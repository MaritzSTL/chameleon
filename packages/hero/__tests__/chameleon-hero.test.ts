import { fixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-hero";

describe("chameleon-hero", () => {
  it("renders", async () => {
    const el = await fixture(html`
      <chameleon-hero></chameleon-hero>
    `);
    expect(Boolean(el.shadowRoot)).to.equal(true);
  });
});
