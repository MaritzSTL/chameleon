import { litFixture, html, expect } from "@open-wc/testing";
import sinon from "sinon";
import ChameleonTabs from "../src/chameleon-tabs";
import "../src/chameleon-tabs";
import "../src/chameleon-tab";

const fixture = html`
  <chameleon-tabs><chameleon-tab></chameleon-tab></chameleon-tabs>
`;

describe("chameleon-tabs", () => {
  let element;

  beforeEach(async () => {
    element = await litFixture(fixture);
  });

  it("renders", async () => {
    expect(Boolean(element.shadowRoot)).to.equal(true);
  });

  it("dispatches an event on handleToggle", () => {
    const tab = element.querySelector("chameleon-tab");
    const spy = sinon.spy(tab, "dispatchEvent");

    tab.handleToggle();

    expect(spy).to.be.calledOnce;
  });

  // it("throws error if no tabs are given", () => {
  //   const tabs = () => new ChameleonTabs();
  //   expect(tabs()).to.throw();
  // });
});
