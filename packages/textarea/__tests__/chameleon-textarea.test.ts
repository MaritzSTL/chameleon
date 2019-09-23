import { fixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-textarea";

describe("chameleon-textarea", () => {
  it("renders", async () => {
    const el = await fixture(html`
      <chameleon-textarea></chameleon-textarea>
    `);
    expect(Boolean(el.shadowRoot)).to.equal(true);
  });
});
