import { litFixture, html, expect } from "@open-wc/testing";
import { LitElement, property, TemplateResult } from "lit-element";
import sinon from "sinon";
import { dataBehavior } from "../src/dataBehavior";

const consoleSpy = sinon.spy(console);

class DataBehaviorTestElement extends LitElement {
  static get properties() {
    return {
      handlerCalled: { type: Boolean },
    };
  }

  event: Event;
  clickedEl: HTMLElement;
  handlerCalled: Boolean;

  constructor() {
    super();
    this.handlerCalled = false;
    this.clickedEl = null;
    this.event = null;
  }

  @dataBehavior("click", "dismiss")
  handleDismiss(e, el) {
    this.event = e;
    this.clickedEl = el;
    this.handlerCalled = true;
  }

  render(): TemplateResult {
    return html`
      <div>
        <span id="dismissWithAria" data-dismiss aria-role="button">
          dismiss
        </span>
        <span id="dismissWithoutAria" data-dismiss>dismiss</span>
        <span id="noDismiss">dismiss</span>
      </div>
      <slot></slot>
    `;
  }
}

customElements.define("data-behavior-test-element", DataBehaviorTestElement);

const fixture = html`<data-behavior-test-element></data-behavior-test-element>`;
const nestedFixture = html`
  <data-behavior-test-element id="outer">
    <data-behavior-test-element
      id="inner"
      data-disimss
      aria-role="button"
    ></data-behavior-test-element>
  </data-behavior-test-element>
`;

describe("dataBehavior", () => {
  beforeEach(() => {
    consoleSpy.restore();
  });
  it("will invoke handler when data-* is present in descendants", async () => {
    const element = await litFixture(fixture);
    const targetEl = element.shadowRoot.querySelector("#dismissWithAria");

    targetEl.dispatchEvent("click");

    expect(element.handlerCalled).to.equal(true);
    expect(element.event.type).to.equal("click");
    expect(element.clickedEl).to.equal(targetEl);
  });
  it("will log an error when no aria-role is present", async () => {
    const element = await litFixture(fixture);
    const targetEl = element.shadowRoot.querySelector("#dismissWithoutAria");

    targetEl.dispatchEvent("click");

    expect(consoleSpy.called).to.equal(true);
  });
  it("will invoke handler when declared on slotted content", async () => {
    const outer = await litFixture(nestedFixture);
    const targetEl = outer.shadowRoot.querySelector("#inner");

    targetEl.dispatchEvent("click");

    expect(element.handlerCalled).to.equal(true);
    expect(element.event.type).to.equal("click");
    expect(element.clickedEl).to.equal(targetEl);
  });
  it("won't invoke handler when data-* is present in ancestors", async () => {
    const outer = await litFixture(nestedFixture);
    const inner = outer.shadowRoot.querySelector("#inner");
    const targetEl = outer.shadowRoot.querySelector("#dismissWithAria");

    targetEl.dispatchEvent("click");

    expect(inner.handlerCalled).to.equal(false);
  });
});
