import { fixture, html, expect } from "@open-wc/testing";
import "@chameleon-ds/rice-ball-dessert/src/chameleon-rice-ball-dessert";

describe("chameleon-rice-ball-dessert", () => {
  it("renders", async () => {
    const el = await fixture(html`
      <chameleon-rice-ball-dessert></chameleon-rice-ball-dessert>
    `);
    expect(Boolean(el.shadowRoot)).to.equal(true);
  });
});
