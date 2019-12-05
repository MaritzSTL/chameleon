import { litFixture, html, expect } from "@open-wc/testing";
import sinon from "sinon";
import "@chameleon-ds/input/src/chameleon-input";

const fixture = html`
  <chameleon-input></chameleon-input>
`;

describe("chameleon-input", () => {
  let element;

  beforeEach(async () => {
    element = await litFixture(fixture);
  });

  it("renders", () => {
    expect(Boolean(element.shadowRoot)).to.equal(true);
  });

  it("_el returns null if shadowRoot is null", () => {
    sinon.stub(element, "shadowRoot").get(() => null);

    expect(element._el).to.be.null;
  });

  it("_inputEl renders number type", async () => {
    element = await litFixture(
      html`
        <chameleon-input type="number"></chameleon-input>
      `
    );

    const inputEl = await litFixture(element._inputEl);

    expect(inputEl).dom.to.equal(
      "<input max='null' min='null' name='cha-input' placeholder='' type='number' />"
    );
  });

  it("_inputEl renders default type", async () => {
    element = await litFixture(
      html`
        <chameleon-input type="email"></chameleon-input>
      `
    );

    const inputEl = await litFixture(element._inputEl);

    expect(inputEl).dom.to.equal(
      "<input name='cha-input' placeholder='' type='email' />"
    );
  });

  it("renders labelText", async () => {
    element.label = "chameleon";

    const labelEl = await litFixture(element.labelText);

    expect(labelEl).dom.to.equal(
      "<label for='cha-input' class=''>chameleon</label>"
    );
  });

  it("renders errorText", async () => {
    element.validationMessage = "chameleon";

    const errorText = await litFixture(element.errorText);

    expect(errorText).dom.to.equal("<span class='error'>chameleon</span>");
  });

  it("renders toggleText", async () => {
    element.type = "password";
    element.toggleable = true;

    const toggleableEl = await litFixture(element.toggleText);

    expect(toggleableEl).to.contain.html("<svg");
  });

  it("_toggleType to toggle this.type", async () => {
    element._toggleType();

    expect(element.type).to.equal("password");
  });

  it("returns validity", () => {
    expect(element.validity.constructor.name).to.equal("ValidityState");
  });

  it("validity returns false if _el is null", () => {
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

  it("handles input", () => {
    element._handleInput({ target: { value: "chameleon" } });

    expect(element.value).to.equal("chameleon");
  });

  it("_handleBlur calls checkValidity", () => {
    // TBH I'm not convinced this test is actually behaving expectedly...
    const checkValidity = sinon.spy(element, "checkValidity");
    const handleBlur = sinon.spy(element, "_handleBlur");

    element._handleBlur();

    expect(checkValidity.calledImmediatelyAfter(handleBlur));
  });

  it("_handleBlur calls checkRequired", () => {
    const checkRequired = sinon.spy(element, "_checkRequired");
    const handleBlur = sinon.spy(element, "_handleBlur");

    element._handleBlur();

    expect(checkRequired.calledImmediatelyAfter(handleBlur));
  });

  it("_handleBlur else path", () => {
    element.checkValidity = sinon.stub(() => false);
    element._handleBlur();

    expect(element.validationMessage).to.equal("");
  });

  it("checkValidity returns false if _el is null", () => {
    sinon.stub(element, "_el").get(() => null);

    expect(element.checkValidity()).to.be.false;
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

  it("_toggleType switches between password and text types of input", () => {
    element.type = "password";
    element.toggleable = true;
    element._toggleType();

    expect(element.type).to.equal("text");
  });

  it("checkRequired sets required attribute if there's no input", () => {
    element.value = "";
    element.requiredField = true;
    element._checkRequired();

    expect(element._el).to.have.attribute("required");
  });

  it("_acceptInput disables up-arrow key to increment value if noStepper is true", () => {
    element.value = "5";
    element.noStepper = true;
    element._acceptInput({ e: { which: "40" } });

    expect(element.value).to.equal("5");
  });

  it("_acceptInput disables down-arrow key to decrement value if noStepper is true", () => {
    element.value = "5";
    element.noStepper = true;
    element._acceptInput({ e: { which: "38" } });

    expect(element.value).to.equal("5");
  });
});
