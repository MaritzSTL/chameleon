import { litFixture, html, expect } from "@open-wc/testing";
import sinon from "sinon";
import Chameleonaccordions from "@chameleon-ds/accordions/src/chameleon-accordions";
import "@chameleon-ds/accordions/src";

const fixture = html`
  <chameleon-accordions
    ><chameleon-accordion></chameleon-accordion
  ></chameleon-accordions>
`;

describe("chameleon-accordions", () => {
  let element;

  beforeEach(async () => {
    element = await litFixture(fixture);
  });

  it("renders", async () => {
    expect(Boolean(element.shadowRoot)).to.equal(true);
  });

  it("dispatches an event on handleToggle", () => {
    const accordion = element.querySelector("chameleon-accordion");
    const spy = sinon.spy(accordion, "dispatchEvent");

    accordion.handleToggle();

    expect(spy).to.be.calledOnce;
  });

  it("throws error if no accordions are given", () => {
    expect(() => new Chameleonaccordions().firstUpdated()).to.throw();
  });

  it("updates selected accordion", async () => {
    element.selected = 0;
    element.requestUpdate();
    await element.updateComplete;

    expect(element.selected).to.equal(0);
  });

  it("sets active attribute to true", async () => {
    element = await litFixture(
      html`
        <chameleon-accordions>
          <chameleon-accordion></chameleon-accordion>
          <chameleon-accordion></chameleon-accordion>
        </chameleon-accordions>
      `
    );
    element.selected = 0;
    element.requestUpdate();
    await element.updateComplete;

    expect(element.selected).to.equal(0);

    element.selected = 1;
    element.requestUpdate();
    await element.updateComplete;

    expect(element.selected).to.equal(1);
  });
});
