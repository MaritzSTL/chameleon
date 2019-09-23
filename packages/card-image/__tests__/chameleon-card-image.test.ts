import { fixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-card-image";

describe("chameleon-card-image", () => {
  it("renders", async () => {
    const el = await fixture(html`
      <chameleon-card-image></chameleon-card-image>
    `);
    expect(Boolean(el.shadowRoot)).to.equal(true);
  });
});
