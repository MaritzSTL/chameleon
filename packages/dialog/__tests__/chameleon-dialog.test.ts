import { litFixture, html, expect } from "@open-wc/testing";
import sinon from "sinon";
import "../src/chameleon-dialog";

const fixture = html`
  <chameleon-dialog></chameleon-dialog>
`;

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

  it("closeIcon returns a slot if one doesn't exist", async () => {
    element = await litFixture(
      html`
        <chameleon-dialog><svg slot="close-icon"></svg></chameleon-dialog>
      `
    );
    const closeIcon = await litFixture(element.closeIcon);

    expect(closeIcon).dom.to.equal("<slot name='close-icon'></slot>");
  });
});
