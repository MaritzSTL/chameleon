import { litFixture, html, expect } from "@open-wc/testing";
import "@chameleon-ds/accordion/src/chameleon-accordion";
import Chameleonaccordion from "@chameleon-ds/accordion/src/chameleon-accordion";

describe("chameleon-accordion", () => {
  it("renders", async () => {
    const element = await litFixture(
      html`
        <chameleon-accordion></chameleon-accordion>
      `
    );

    expect(Boolean(element.shadowRoot)).to.equal(true);
  });

  it("should set default accentColor", async () => {
    const element: Chameleonaccordion = await litFixture(
      html`
        <chameleon-accordion accentColor></chameleon-accordion>
      `
    );

    expect(element.style.borderTop).to.equal("7px solid var(--color-primary)");
  });

  it("should set accentColor", async () => {
    const element: Chameleonaccordion = await litFixture(
      html`
        <chameleon-accordion accentColor="green"></chameleon-accordion>
      `
    );

    expect(element.style.borderTop).to.equal("7px solid green");
  });
});
