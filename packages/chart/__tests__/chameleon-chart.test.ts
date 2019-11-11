import { fixture, html, expect } from "@open-wc/testing";
import "@chameleon-ds/chart/src/chameleon-chart";

describe("chameleon-chart", () => {
  it("renders", async () => {
    const el = await fixture(html`
      <chameleon-chart></chameleon-chart>
    `);
    expect(Boolean(el.shadowRoot)).to.equal(true);
  });
});
