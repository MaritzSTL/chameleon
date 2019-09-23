import { fixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-switch";

describe("chameleon-switch", () => {
  it("renders", async () => {
    const el = await fixture(html`
      <chameleon-switch></chameleon-switch>
    `);
    expect(Boolean(el.shadowRoot)).to.equal(true);
  });
});
