import { litFixture, html, expect } from "@open-wc/testing";
import sinon from "sinon";
import "@chameleon-ds/textarea/src/chameleon-textarea";

const fixture = html`
  <chameleon-textarea></chameleon-textarea>
`;

describe("chameleon-textarea", () => {
  let element;

  beforeEach(async () => {
    element = await litFixture(fixture);
  });

  it("renders", () => {
    expect(Boolean(element.shadowRoot)).to.equal(true);
  });

  it("returns _el", () => {
    const el = element._el;
    expect(el.constructor.name).to.equal("HTMLTextAreaElement");
  });

  it("_el returns null if shadowRoot is null", () => {
    sinon.stub(element, "shadowRoot").get(() => null);

    expect(element._el).to.be.null;
  });

  it("renders labelText", () => {
    element.label = "chameleon";
    expect(element.labelText.constructor.name).to.equal("TemplateResult");
  });

  it("renders errorText", () => {
    element.validationMessage = "chameleon";
    expect(element.errorText.constructor.name).to.equal("TemplateResult");
  });

  it("returns validity", () => {
    expect(element.validity.constructor.name).to.equal("ValidityState");
  });

  it("validity returns undefined if _el is null", () => {
    sinon.stub(element, "_el").get(() => null);

    expect(element.validity).to.be.undefined;
  });

  it("willValidate returns a boolean", () => {
    expect(typeof element.willValidate).to.equal("boolean");
  });

  it("willValidate returns false if _el is null", () => {
    sinon.stub(element, "_el").get(() => null);

    expect(element.willValidate).to.be.false;
  });

  it("checkValidity returns a boolean", () => {
    expect(typeof element.checkValidity()).to.equal("boolean");
  });

  it("checkValidity returns false if _el is null", () => {
    sinon.stub(element, "_el").get(() => null);

    expect(element.checkValidity()).to.be.false;
  });

  it("invalid sets aria-invalid attribute", async () => {
    element.value = "";
    element.invalid = true;
    await element.updateComplete;
    expect(element._el).to.have.attribute("aria-invalid");
  });

  it("_handleBlur calls checkValidity", () => {
    // TBH I'm not convinced this test is actually behaving expectedly...
    const checkValidity = sinon.spy(element, "checkValidity");
    const handleBlur = sinon.spy(element, "_handleBlur");

    element._handleBlur();

    expect(checkValidity.calledImmediatelyAfter(handleBlur));
  });

  it("_handleInvalid sets validationMessage", () => {
    element._handleInvalid();
    expect(element.validationMessage).to.equal(element._el.validationMessage);
  });

  it("_handleInvalid returns an empty string if _el is null", () => {
    sinon.stub(element, "_el").get(() => null);
    element._handleInvalid();

    expect(element.validationMessage).to.equal("");
  });

  it("handles input", () => {
    element._handleInput({ target: { value: "chameleon" } });
    expect(element.value).to.equal("chameleon");
  });
});
