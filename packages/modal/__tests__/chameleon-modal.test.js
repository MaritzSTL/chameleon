import { litFixture, html, expect } from "@open-wc/testing";
import sinon from "sinon";
import "../chameleon-modal.js";

const fixture = html`<chameleon-modal></chameleon-modal>`;

describe("chameleon-modal", () => {
  let element;

  beforeEach(async () => {
    element = await litFixture(fixture);
  });

  it("renders", () => {
    expect(Boolean(element.shadowRoot)).to.equal(true);
  });

  describe("_togglemodal", () => {
    it("should set open to true", () => {
      element.open = false;
      element._togglemodal();

      expect(element.open).to.be.true;
    });

    it("should set open to false", () => {
      element.open = true;
      element._togglemodal();

      expect(element.open).to.be.false;
    });

    it("should dispatch a toggle-modal event", () => {
      const spy = sinon.spy();
      element.addEventListener("toggle-modal", spy);
      element._togglemodal({});
      expect(spy).to.be.calledOnce;
    });
  });

  describe("closeIcon", () => {
    it("closeIcon returns an Svg if close-icon slot is defined", async () => {
      element = await litFixture(
        html` <chameleon-modal><svg></svg></chameleon-modal> `
      );
      const closeIcon = await litFixture(element.closeIcon);

      expect(closeIcon).dom.to.equal(
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
      );
    });

    it("closeIcon returns a slot if close-icon is undefined", async () => {
      element = await litFixture(
        html` <chameleon-modal><svg slot="close-icon"></svg></chameleon-modal> `
      );
      const closeIcon = await litFixture(element.closeIcon);

      expect(closeIcon).dom.to.equal("<slot name='close-icon'></slot>");
    });
  });
});
