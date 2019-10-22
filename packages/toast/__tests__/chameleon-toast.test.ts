import { fixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-toast";

describe("chameleon-toastt", () => {
  it("renders", async () => {
    const el = await fixture(html`
      <chameleon-toast></chameleon-toast>
    `);
    expect(Boolean(el.shadowRoot)).to.equal(true);
  });
});
