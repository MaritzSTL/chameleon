import { fixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-paginator";

describe("chameleon-paginator", () => {
  it("renders", async () => {
    const el = await fixture(html`
      <chameleon-paginator></chameleon-paginator>
    `);
    expect(Boolean(el.shadowRoot)).to.equal(true);
  });
});
