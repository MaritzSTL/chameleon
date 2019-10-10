import { fixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-tabs";
import "../src/chameleon-tab";

describe("chameleon-tabs", () => {
  it("renders", async () => {
    const el = await fixture(html`
      <chameleon-tabs><chameleon-tab></chameleon-tab></chameleon-tabs>
    `);
    expect(Boolean(el.shadowRoot)).to.equal(true);
  });
});
