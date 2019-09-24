import { fixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-input";

describe("chameleon-input", () => {
  it("renders", async () => {
    const el = await fixture(html`
      <chameleon-input></chameleon-input>
    `);
    expect(Boolean(el.shadowRoot)).to.equal(true);
  });
});
