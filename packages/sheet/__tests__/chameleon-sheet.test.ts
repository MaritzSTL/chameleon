import { litFixture, html, expect, aTimeout } from "@open-wc/testing";
import sinon from "sinon";
import "../src/chameleon-sheet";
import ChameleonSheet from "../src/chameleon-sheet";

const spy = sinon.spy();

const fixture = html`
  <chameleon-sheet @sheetchange=${spy}>
    <section>
      <h1 data-sheet-close>This is some content!</h1>
    </section>
  </chameleon-sheet>
`;

describe.only("chameleon-sheet", () => {
  let element: ChameleonSheet;

  beforeEach(async () => {
    element = await litFixture(fixture);
    element.open();
    await element.updateComplete;
  });
  afterEach(() => {
    spy.resetHistory();
  });

  it("renders slotted content in default slot", () => {
    expect(element.renderRoot instanceof ShadowRoot).to.equal(true);

    expect(element.renderRoot.innerHTML).to.equalSnapshot();
  });
  it.skip("uses and projects into top-level renderRoot", () => {
    expect(document.body.querySelector("span:last-child").shadowRoot).to.equal(
      element.renderRoot
    );
  });
  it("can slot new close button", async () => {
    const closeButtonFixture = html`
      <chameleon-sheet opened="${true}">
        <div slot="close-button">hey</div>
        <section>
          <h1>This is some content!</h1>
        </section>
      </chameleon-sheet>
    `;
    const el: ChameleonSheet = await litFixture(closeButtonFixture);
    expect(el.renderRoot.innerHTML).to.equalSnapshot();
  });
  it("data-sheet-close on clicked element closes sheet", () => {
    element.renderRoot.querySelector("[data-sheet-close]").click();
    expect(element.opened).to.equal(false);
  });
  it.skip("properly removes _mount", async () => {
    const initialCount = document.body.querySelectorAll("body > span").length;
    element.disconnectedCallback();
    await aTimeout(1);
    const newCount = document.body.querySelectorAll("body > span").length;
    expect(initialCount - 1).to.equal(newCount);
  });
  it("emits sheetchange events when opened changes", () => {
    element.opened = !element.opened;
    const event = spy.lastCall.args[0];
    expect(event.type).to.equal("sheetchange");
    expect(event.target).to.equal(element);
  });
  it("close()", () => {
    element.close();
    expect(element.opened).to.equal(false);
  });
  it("open()", () => {
    element.close();
    expect(element.opened).to.equal(false);
    element.open();
    expect(element.opened).to.equal(true);
  });
  it("can specify width-per-instance", async () => {
    const widthFixture = html`
      <chameleon-sheet width="75vw"> </chameleon-sheet>
    `;
    const otherElement: ChameleonSheet = await litFixture(widthFixture);

    expect(element.width).to.equal("320px");
    expect(otherElement.width).to.equal("75vw");
  });
});
