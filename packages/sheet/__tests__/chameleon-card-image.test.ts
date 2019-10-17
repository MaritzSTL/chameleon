import { html, expect } from "@open-wc/testing";
import "./mtzwc-sheet.js";
import { litFixture } from "@open-wc/testing-helpers";
import sinon from "sinon";

const fixture = html`
  <mtzwc-sheet></mtzwc-sheet>
`;

describe("mtzwc-sheet", () => {
  let element;

  beforeEach(async () => {
    element = await litFixture(fixture);
  });

  it("should have tag name defined", () => {
    expect(element.tagName.toLowerCase()).to.equal("mtzwc-sheet");
  });

  it("sets default values in constructor", () => {
    expect(element.header).to.equal("");
    expect(element.subHeader).to.equal("");
    expect(element.__sheetOpened).to.be.false;
  });

  describe("openSheet", () => {
    it("should set item and set __sheetOpened to true", () => {
      element.__sheetOpened = false;
      const heading = {
        header: "Item 1",
        subHeader: "Category 1"
      };
      element.openSheet(heading);

      expect(element.header).to.equal("Item 1");
      expect(element.subHeader).to.equal("Category 1");
    });
  });

  describe("closeSheet", () => {
    it("should close sheet", () => {
      element.__sheetOpened = true;
      element.closeSheet();

      expect(element.__sheetOpened).to.be.false;
    });

    it("should dispatch a mtz.closesheet event", () => {
      const spy = sinon.spy();
      element.addEventListener("mtz.closesheet", spy);
      element.closeSheet({});
      expect(spy).to.be.calledOnce;
    });
