import { litFixture, html, expect } from "@open-wc/testing";
import "../chameleon-sheet.js";
import "../sheet-content.js";

describe("sheet-content", () => {
  let el;
  beforeEach(async () => {
    el = await litFixture(html`
      <sheet-content>
        <p id="myContent">content</p>
      </sheet-content>
    `);
  });

  it("has customizable width", async () => {
    expect(el.width).to.equal("320px");
    el.width = "75vw";
    await el.updateComplete;
    const styleNode = el.shadowRoot.querySelector("style");
    expect(styleNode.textContent.includes("75vw")).to.equal(true);
  });
  it("maintains width-per-instance", async () => {
    const el2 = await litFixture(html`
      <sheet-content .width="${`75vw`}">
        <p id="myContent">content</p>
      </sheet-content>
    `);
    const styleNode = el.shadowRoot.querySelector("style");
    const styleNode2 = el2.shadowRoot.querySelector("style");
    expect(el.width).to.equal("320px");
    expect(styleNode.textContent.includes("320px")).to.equal(true);
    expect(el2.width).to.equal(`75vw`);
    expect(styleNode2.textContent.includes("75vw")).to.equal(true);
  });
  it("accepts default slotted content", () => {
    const assignedElement = el.querySelector("#myContent");
    const slot = el.shadowRoot.querySelector("slot");
    expect(slot.assignedElements().includes(assignedElement)).to.equal(true);
  });
  it("is dismissable by default", () => {
    expect(el.dismissable).to.equal(true);
  });
  it("displays close icon when dismissable", () => {
    expect(
      el.shadowRoot.querySelector(".close-icon").innerHTML.includes("svg")
    ).to.equal(true);
    expect(el.shadowRoot.querySelector(".close-icon")).to.not.equal(null);
  });
  it("doesn't show close icon when not dismissable", async () => {
    el.dismissable = false;
    await el.updateComplete;
    expect(el.shadowRoot.querySelector(".close-icon")).to.equal(null);
  });
  it("close icon dispatches close-overlay event when clicked", () => {
    let called = false;
    const listener = (e) => {
      called = true;
    };
    el.addEventListener("close-overlay", listener);
    el.shadowRoot.querySelector(".close-icon").click();
    expect(called).to.equal(true);
  });
});
