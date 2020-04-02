import { litFixture, html, expect } from "@open-wc/testing";
import sinon from "sinon";
import ChameleonTabs from "@chameleon-ds/tabs/src/chameleon-tabs";
import "../src";

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

  it("throws error if no tabs are given", () => {
    expect(() => new ChameleonTabs().firstUpdated()).to.throw();
  });

  it("updates selected tab", async () => {
    element.selected = 0;
    element.requestUpdate();
    await element.updateComplete;

    expect(element.selected).to.equal(0);
  });

  it("sets active attribute to true", async () => {
    element = await litFixture(
      html`
        <chameleon-tabs>
          <chameleon-tab></chameleon-tab>
          <chameleon-tab></chameleon-tab>
        </chameleon-tabs>
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
