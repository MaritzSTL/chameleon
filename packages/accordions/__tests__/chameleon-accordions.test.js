import { litFixture, html, expect } from "@open-wc/testing";
import sinon from "sinon";
import "../chameleon-accordion.js";
import "../chameleon-accordions.js";

const fixture = html`
  <chameleon-accordions>
    <chameleon-accordion></chameleon-accordion>
    <chameleon-accordion></chameleon-accordion>
  </chameleon-accordions>
`;

describe("chameleon-accordions", () => {
  let el;

  beforeEach(async () => {
    el = await litFixture(fixture);
  });

  it("renders any slotted content", () => {
    expect(el).dom.to.equalSnapshot({ ignoreAttributes: ["uid"] });
    expect(el).shadowDom.to.equalSnapshot();
  });
  it("registers accordions on `accordion-connected`", () => {
    expect(el.accordions.length).to.equal(2);
  });
  it("unregisters accordions on `accordion-disconnected`", async () => {
    const initialAccordions = Array.from(
      el.querySelectorAll("chameleon-accordion")
    ).map((acc) => acc.uid);
    const accordion = el.querySelector("chameleon-accordion");
    const removedUid = accordion.uid;

    accordion.disconnectedCallback();

    expect(initialAccordions.length).to.equal(2);
    expect(el.accordions.length).to.equal(1);
    expect(el.accordions.indexOf(removedUid)).to.equal(-1);
  });
  it("toggles targeted accordion on `toggle-accordion`", () => {
    const accordion = el.querySelector("chameleon-accordion");
    expect(accordion.expanded).to.equal(false);
    accordion.header.click();
    expect(accordion.expanded).to.equal(true);
  });
  it("closes all other registered accordions of targeted accordion is expanded", () => {
    const accordions = Array.from(el.querySelectorAll("chameleon-accordion"));
    accordions[0].expanded = true;

    expect(accordions[0].expanded).to.equal(true);
    expect(accordions[1].expanded).to.equal(false);

    accordions[1].header.click();

    expect(accordions[0].expanded).to.equal(false);
    expect(accordions[1].expanded).to.equal(true);
  });
});
