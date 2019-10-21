import { fixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-filterable-table";

describe("chameleon-filterable-table", () => {
  it("renders", async () => {
    const el = await fixture(html`
      <chameleon-filterable-table></chameleon-filterable-table>
    `);
    expect(Boolean(el.shadowRoot)).to.equal(true);
  });
});
