import { litFixture, html, expect } from "@open-wc/testing";
import "@chameleon-ds/radio/src/chameleon-radio";

const fixture = html`
  <chameleon-radio></chameleon-radio>
`;

describe("chameleon-radio", () => {
  let element;

  beforeEach(async () => {
    element = await litFixture(fixture);
  });

  it("renders", () => {
    expect(Boolean(element.shadowRoot)).to.equal(true);
  });

  it("shows aria-invalid when invalid", () => {
    element.invalid = true;
    expect(element).shadowDom.to.equalSnapshot();
  });
  it("shows name attribute", () => {
    element.name = "formName";
    expect(element).shadowDom.to.equalSnapshot();
  });
  it("shows disabled attribute", () => {
    element.required = true;
    expect(element).shadowDom.to.equalSnapshot();
  });
  it("shows readonly attribute", () => {
    element.readonly = true;
    expect(element).shadowDom.to.equalSnapshot();
  });

  it("renders labelText", () => {
    element.label = "chameleon";

    expect(element.labelText).to.equal("chameleon");
  });
});
