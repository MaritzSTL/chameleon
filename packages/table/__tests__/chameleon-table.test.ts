import { fixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-table";

describe("chameleon-table", () => {
  it("renders", async () => {
    const el = await fixture(html`
      <chameleon-table></chameleon-table>
    `);
    expect(Boolean(el.shadowRoot)).to.equal(true);
  });
});
