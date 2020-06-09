import { litFixture, html, expect } from "@open-wc/testing";
import sinon from "sinon";
import "../src/chameleon-dialog";

const fixture = html` <chameleon-dialog></chameleon-dialog> `;

describe("chameleon-dialog", () => {
  let element;

  beforeEach(async () => {
    element = await litFixture(fixture);
  });

  it("renders", () => {
    expect(Boolean(element.shadowRoot)).to.equal(true);
  });

  describe("_toggleDialog", () => {
    it("should set open to true", () => {
      element.open = false;
      element._toggleDialog();

      expect(element.open).to.be.true;
    });

    it("should set open to false", () => {
      element.open = true;
      element._toggleDialog();

      expect(element.open).to.be.false;
    });

    it("should dispatch a toggle-dialog event", () => {
      const spy = sinon.spy();
      element.addEventListener("toggle-dialog", spy);
      element._toggleDialog({});
      expect(spy).to.be.calledOnce;
    });
  });

  describe("_goBack", () => {
    it("should dispatch a go-back event", () => {
      const spy = sinon.spy();
      element.addEventListener("go-back", spy);
      element._goBack({});
      expect(spy).to.be.calledOnce;
    });
  });

  describe("closeIcon", () => {
    it("closeIcon returns an Svg if close-icon slot is defined", async () => {
      element = await litFixture(
        html` <chameleon-dialog><svg></svg></chameleon-dialog> `
      );
      const closeIcon = await litFixture(element.closeIcon);

      expect(closeIcon).dom.to.equal(
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
      );
    });

    it("closeIcon returns a slot if close-icon is undefined", async () => {
      element = await litFixture(
        html`
          <chameleon-dialog><svg slot="close-icon"></svg></chameleon-dialog>
        `
      );
      const closeIcon = await litFixture(element.closeIcon);

      expect(closeIcon).dom.to.equal("<slot name='close-icon'></slot>");
    });
  });

  describe("backIcon", () => {
    it("backIcon returns an Svg if back-icon slot is defined", async () => {
      element = await litFixture(
        html` <chameleon-dialog><svg></svg></chameleon-dialog> `
      );
      const backIcon = await litFixture(element.backIcon);

      expect(backIcon).dom.to.equal(
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="6" y1="12" x2="24" y2="12"></line><line x1="6" y1="12" x2="12" y2="18"></line><line x1="6" y1="12" x2="12" y2="6"></line></svg>`
      );
    });

    it("backIcon returns a slot if back-icon is undefined", async () => {
      element = await litFixture(
        html`
          <chameleon-dialog><svg slot="back-icon"></svg></chameleon-dialog>
        `
      );
      const backIcon = await litFixture(element.backIcon);

      expect(backIcon).dom.to.equal("<slot name='back-icon'></slot>");
    });
  });
});
