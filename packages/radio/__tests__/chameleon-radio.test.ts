import { fixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-radio";

describe("chameleon-radio", () => {
  it("renders", async () => {
    const el = await fixture(html`
      <chameleon-radio></chameleon-radio>
    `);
    expect(Boolean(el.shadowRoot)).to.equal(true);
  });
});
