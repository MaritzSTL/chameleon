import { litFixture, html, expect } from "@open-wc/testing";
import sinon from "sinon";
import "../src/chameleon-chip";

const fixture = html` <chameleon-chip>chameleon</chameleon-chip> `;

describe("chameleon-chip", () => {
  let element;

  beforeEach(async () => {
    element = await litFixture(fixture);
  });

  it("renders", async () => {
    expect(Boolean(element.shadowRoot)).to.equal(true);
  });

  it("_remove dispatches an event with the value", () => {
    const dispatchEvent = sinon.spy(element, "dispatchEvent");

    element._remove();

    expect(dispatchEvent).to.be.calledOnce;
  });

  // Would like to rewrite this to be better
  it("renders the removeIcon", async () => {
    const icon = await litFixture(element.removeIcon);

    expect(icon).to.contain.html("<line");
  });

  it("value returns the value if it's set", async () => {
    element.value = "chameleon";
    element.requestUpdate();
    await element.updateComplete;

    expect(element.value).to.equal("chameleon");
  });

  it("renders close icon if [closeable] is true", async () => {
    element.closeable = true;
    element.requestUpdate();
    await element.updateComplete;

    expect(element).shadowDom.to.equal(`<slot></slot><span></span>`);
  });
});
