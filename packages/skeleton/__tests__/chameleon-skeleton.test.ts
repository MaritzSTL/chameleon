import { fixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-skeleton";

describe("chameleon-skeleton", () => {
  it("renders", async () => {
    const el = await fixture(html` <chameleon-skeleton></chameleon-skeleton> `);
    expect(Boolean(el.shadowRoot)).to.equal(true);
  });
  it("returns a radius half the size of the circle height if theme is secondary", async () => {
    const el = await fixture(html` <chameleon-skeleton></chameleon-skeleton> `);
    el.theme = "secondary";
    el.cHeight = 50;
    expect(el.circleRadius).to.eql(25);
  });
});
