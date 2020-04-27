import { litFixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-card-header";

const fixture = html`
  <chameleon-card-header></chameleon-card-header>
`;

describe("chameleon-card-header", () => {
  let element;

  beforeEach(async () => {
    element = await litFixture(fixture);
  });

  it("renders", () => {
    expect(Boolean(element.shadowRoot)).to.equal(true);
  });

  it("renders subtitle", async () => {
    element.subtitle = "chameleon";
    element.requestUpdate();
    await element.updateComplete;

    expect(element).shadowDom.to.equal("<h3>chameleon</h3>");
  });

  it("renders title", async () => {
    element.title = "chameleon";
    element.requestUpdate();
    await element.updateComplete;

    expect(element).shadowDom.to.equal("<h2>chameleon</h2>");
  });
});
