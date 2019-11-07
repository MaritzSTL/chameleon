import { fixture, html, expect } from "@open-wc/testing";
import "@chameleon-ds/chip/src/chameleon-chip";

describe("chameleon-chip", () => {
  it("renders", async () => {
    const el = await fixture(html`
      <chameleon-chip></chameleon-chip>
    `);
    expect(Boolean(el.shadowRoot)).to.equal(true);
  });
});
