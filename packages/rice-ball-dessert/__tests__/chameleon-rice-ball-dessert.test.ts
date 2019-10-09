import { fixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-rice-ball";

describe("chameleon-rice-ball-dessert", () => {
  it("renders", async () => {
    const el = await fixture(html`
      <chameleon-rice-ball-dessert></chameleon-rice-ball-dessert>
    `);
    expect(Boolean(el.shadowRoot)).to.equal(true);
  });
});
