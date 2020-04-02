import { fixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-loader";

describe("chameleon-loader", () => {
  it("renders", async () => {
    const el = await fixture(html`
      <chameleon-loader></chameleon-loader>
    `);
    expect(Boolean(el.shadowRoot)).to.equal(true);
  });

  it("renders a spinner by default", async () => {
    const el = await fixture(html`
      <chameleon-loader></chameleon-loader>
    `);
    expect(Boolean(el.shadowRoot.querySelector(".spinner"))).to.equal(true);
  });

  it("renders a spinner", async () => {
    const el = await fixture(html`
      <chameleon-loader loader="spinner"></chameleon-loader>
    `);
    expect(Boolean(el.shadowRoot.querySelector(".spinner"))).to.equal(true);
  });

  it("renders an ellipsis", async () => {
    const el = await fixture(html`
      <chameleon-loader loader="ellipsis"></chameleon-loader>
    `);
    expect(Boolean(el.shadowRoot.querySelector(".ellipsis"))).to.equal(true);
  });
});
