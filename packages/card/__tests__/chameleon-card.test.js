import { litFixture, html, expect } from "@open-wc/testing";
import "../chameleon-card.js";

describe("chameleon-card", () => {
  it("renders", async () => {
    const element = await litFixture(html` <chameleon-card></chameleon-card> `);

    expect(Boolean(element.shadowRoot)).to.equal(true);
  });

  it("should set default accentColor", async () => {
    const element = await litFixture(
      html` <chameleon-card accentColor></chameleon-card> `
    );

    expect(element.style.borderTop).to.equal("7px solid var(--color-primary)");
  });

  it("should set accentColor", async () => {
    const element = await litFixture(
      html` <chameleon-card accentColor="green"></chameleon-card> `
    );

    expect(element.style.borderTop).to.equal("7px solid green");
  });
});
