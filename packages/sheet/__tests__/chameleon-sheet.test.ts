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

  it("should have tag name defined", () => {
    expect(element.tagName.toLowerCase()).to.equal("chameleon-sheet");
  });

  it("sets default values in constructor", () => {
    expect(element.header).to.equal("");
    expect(element.subHeader).to.equal("");
    expect(element.sheetOpened).to.be.false;
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

    it("should dispatch a mtz.closesheet event", () => {
      const spy = sinon.spy();
      element.addEventListener("toggle-sheet", spy);
      element._toggleSheet({});
      expect(spy).to.be.calledOnce;
    });
  });
});
