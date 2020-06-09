import { fixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-progress-bar";

describe("chameleon-progress-bar", () => {
  it("renders", async () => {
    const el = await fixture(html`
      <chameleon-progress-bar></chameleon-progress-bar>
    `);
    expect(Boolean(el.shadowRoot)).to.equal(true);
  });
});
