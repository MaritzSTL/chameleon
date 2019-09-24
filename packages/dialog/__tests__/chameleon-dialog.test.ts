import { fixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-dialog";

describe("chameleon-dialog", () => {
  it("renders", async () => {
    const el = await fixture(html`
      <chameleon-dialog></chameleon-dialog>
    `);
    expect(Boolean(el.shadowRoot)).to.equal(true);
  });
});
