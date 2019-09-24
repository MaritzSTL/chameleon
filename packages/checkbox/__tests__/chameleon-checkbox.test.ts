import { fixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-checkbox";

describe("chameleon-checkbox", () => {
  it("renders", async () => {
    const el = await fixture(html`
      <chameleon-checkbox></chameleon-checkbox>
    `);
    expect(Boolean(el.shadowRoot)).to.equal(true);
  });
});
