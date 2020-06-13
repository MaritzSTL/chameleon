import { fixture, html, expect } from "@open-wc/testing";
import "../chameleon-progress-bar.js";

describe("chameleon-progress-bar", () => {
  it("renders", async () => {
    const el = await fixture(html`
      <chameleon-progress-bar></chameleon-progress-bar>
    `);
    expect(Boolean(el.shadowRoot)).to.equal(true);
  });
});
