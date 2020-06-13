import { litFixture, html, expect } from "@open-wc/testing";
import sinon from "sinon";
import { ChameleonAccordions } from "../index.js";
import "../chameleon-accordion.js";
import "../chameleon-accordions.js";

const fixture = html`
  <chameleon-accordions>
    <chameleon-accordion></chameleon-accordion>
    <chameleon-accordion></chameleon-accordion>
  </chameleon-accordions>
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
    expect(() => new ChameleonAccordions().firstUpdated()).to.throw();
  });

  xit("applies rotated class to icon button if panel is open and fixed property is false", () => {
    const accordion = element.querySelector("chameleon-accordion");
    accordion.setAttribute("fixed", false);
    accordion.handleToggle();

    expect(() =>
      accordion.shadowRoot.querySelector("chameleon-button")
    ).to.have.class("rotated");
  });

  xit("does not apply rotated class to icon button if panel is open and fixed property is true", () => {
    const accordion = element.querySelector("chameleon-accordion");
    accordion.setAttribute("fixed", true);
    accordion.handleToggle();

    expect(() =>
      accordion.shadowRoot.querySelector(".toggle-icon")
    ).not.to.have.class("rotated");
  });

  it("updates expandedIndex", async () => {
    element.expanded = -1;
    const accordion = element.querySelector("chameleon-accordion");
    accordion.handleToggle();

    expect(element.expandedIndex).to.equal(0);
  });
});
