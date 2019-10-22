import { fixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-card-footer";

describe("chameleon-card-footer", () => {
  it("renders", async () => {
    const el = await fixture(html`
      <chameleon-card-footer></chameleon-card-footer>
    `);
    expect(Boolean(el.shadowRoot)).to.equal(true);
  });
});
