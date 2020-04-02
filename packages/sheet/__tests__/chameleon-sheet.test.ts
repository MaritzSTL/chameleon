import { litFixture, html, expect } from "@open-wc/testing";
import sinon from "sinon";
import "../src/chameleon-sheet";

const fixture = html`
  <chameleon-sheet header="chameleon" subHeader="chameleon">
    <section slot="content">
      <h1>This is some content!</h1>
    </section>
  </chameleon-sheet>
`;

describe("chameleon-sheet", () => {
  let element;

  beforeEach(async () => {
    element = await litFixture(fixture);
  });

  it("renders", () => {
    expect(Boolean(element.shadowRoot)).to.equal(true);
  });

  it("opens sheet", () => {
    element.open();

    expect(element.sheetOpened).to.be.true;

    element.open();

    expect(element.sheetOpened).to.be.true;
  });

  it("closes sheet", () => {
    element.sheetOpened = true;
    element.close();

    expect(element.sheetOpened).to.be.false;

    element.close();

    expect(element.sheetOpened).to.be.false;
  });

  it("updatesSlot", async () => {
    element.updateSlot(
      "content",
      html`
        <div>test</div>
      `
    );
    await element.updateComplete;
    const fixture = await litFixture(
      html`
        ${element.querySelector("[slot='content']")}
      `
    );

    expect(fixture).to.equalSnapshot();
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
