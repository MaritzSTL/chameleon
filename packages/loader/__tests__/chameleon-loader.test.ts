import { fixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-loader";

describe("chameleon-loader", () => {
  it("renders", async () => {
    const el = await fixture(html`
      <chameleon-loader></chameleon-loader>
    `);
    expect(Boolean(el.shadowRoot)).to.equal(true);
  });
});
