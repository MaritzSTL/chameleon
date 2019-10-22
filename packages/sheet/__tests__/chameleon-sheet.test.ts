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
    expect(element.sheetOpened).to.be.false;
  });
});
