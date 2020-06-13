import { litFixture, html, expect } from "@open-wc/testing";
import "../chameleon-checkbox.js";

const fixture = html` <chameleon-checkbox></chameleon-checkbox> `;

describe("chameleon-checkbox", () => {
  let element;

  beforeEach(async () => {
    element = await litFixture(fixture);
  });

  it("renders", () => {
    expect(Boolean(element.shadowRoot)).to.equal(true);
  });

  it("shows label text", () => {
    element.label = "chameleon";
    expect(element.labelText).to.equal("chameleon");
  });
  it("shows aria-invalid when invalid", () => {
    element.invalid = true;
    expect(element).shadowDom.to.equalSnapshot();
  });
  it("shows name attribute", () => {
    element.name = "formName";
    expect(element).shadowDom.to.equalSnapshot();
  });
  it("shows required attribute", async () => {
    element.required = true;
    await element.updateComplete;
    expect(element).shadowDom.to.equalSnapshot();
  });
  it("shows readonly attribute", () => {
    element.readonly = true;
    expect(element).shadowDom.to.equalSnapshot();
  });
});
