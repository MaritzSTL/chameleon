import { litFixture, html, expect } from "@open-wc/testing";
import sinon from "sinon";
import "../src/chameleon-sheet";

const fixture = html`
  <chameleon-sheet></chameleon-sheet>
`;

describe("chameleon-sheet", () => {
  let element;

  beforeEach(async () => {
    element = await litFixture(fixture);
  });

  it("renders", () => {
    expect(Boolean(element.shadowRoot)).to.equal(true);
  });

  it("renders subheader", async () => {
    element.subHeader = "chameleon";
    element.requestUpdate();
    await element.updateComplete;

    expect(element).shadowDom.to.equal(`
      <header class="head-container">
        <div class="close-icon"></div>
        <h3 class="header"></h3>
        <slot name="details"></slot>
      </header>
      <slot name="actions"></slot>
      <span class="sub-header">chameleon</span>
      <slot name="content"></slot>
    `);
  });

  describe("_toggleSheet", () => {
    it("should set sheetOpened to true", () => {
      element.sheetOpened = false;
      element._toggleSheet();

      expect(element.sheetOpened).to.be.true;
    });

    it("should set sheetOpened to false", () => {
      element.sheetOpened = true;
      element._toggleSheet();

      expect(element.sheetOpened).to.be.false;
    });

    it("should dispatch a toggle-sheet event", () => {
      const spy = sinon.spy();
      element.addEventListener("toggle-sheet", spy);
      element._toggleSheet({});
      expect(spy).to.be.calledOnce;
    });
  });

  it("closeIcon returns a slot if one doesn't exist", async () => {
    element = await litFixture(
      html`
        <chameleon-sheet><svg slot="close-icon"></svg></chameleon-sheet>
      `
    );
    const closeIcon = await litFixture(element.closeIcon);

    expect(closeIcon).dom.to.equal("<slot name='close-icon'></slot>");
  });
});
