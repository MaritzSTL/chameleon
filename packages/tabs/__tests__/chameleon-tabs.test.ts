import { fixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-tabs";

describe("chameleon-tabs", () => {
  it("renders", async () => {
    const el = await fixture(html`
      <chameleon-tabs></chameleon-tabs>
    `);
    expect(Boolean(el.shadowRoot)).to.equal(true);
  });
});
