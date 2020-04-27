import { fixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-skeleton";

describe("chameleon-skeleton", () => {
  it("renders", async () => {
    const el = await fixture(html`
      <chameleon-skeleton></chameleon-skeleton>
    `);
    expect(Boolean(el.shadowRoot)).to.equal(true);
  });
});
