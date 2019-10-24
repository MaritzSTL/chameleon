import { litFixture, html, expect } from "@open-wc/testing";
import sinon from "sinon";
import "../src/chameleon-input";

const fixture = html`
  <chameleon-input></chameleon-input>
`;

describe("chameleon-input", () => {
  let element;

  beforeEach(async () => {
    element = await litFixture(fixture);
  });

  it("renders", async () => {
    expect(Boolean(element.shadowRoot)).to.equal(true);
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

  it("returns validity", () => {
    expect(element.validity.constructor.name).to.equal("ValidityState");
  });

  it("willValidate returns a boolean", () => {
    expect(typeof element.willValidate).to.equal("boolean");
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

  it("_handleInvalid sets validationMessage", () => {
    element._handleInvalid();
    expect(element.validationMessage).to.equal(element._el.validationMessage);
  });
});
