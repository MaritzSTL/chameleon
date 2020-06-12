import { litFixture, html, expect } from "@open-wc/testing";
import "../chameleon-card-footer.js";

describe("chameleon-card-footer", () => {
  it("renders", async () => {
    const el = await litFixture(html`
      <chameleon-card-footer></chameleon-card-footer>
    `);
    expect(Boolean(el.shadowRoot)).to.equal(true);
  });
});
