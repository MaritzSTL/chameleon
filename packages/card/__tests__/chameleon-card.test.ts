import { fixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-card";

describe("chameleon-card", () => {
  it("renders", async () => {
    const el = await fixture(html`
      <chameleon-card></chameleon-card>
    `);
    expect(Boolean(el.shadowRoot)).to.equal(true);
  });
});
