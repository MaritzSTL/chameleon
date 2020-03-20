import { litFixture, html, expect } from "@open-wc/testing";
import sinon from "sinon";

import "@chameleon-ds/select/src/chameleon-select";

const fixture = html`
  <chameleon-select></chameleon-select>
`;

describe("chameleon-select", () => {
  let element;

  beforeEach(async () => {
    element = await litFixture(fixture);
  });

  it("renders", async () => {
    element = await litFixture(fixture);
    expect(Boolean(element.shadowRoot)).to.equal(true);
  });

  it("renders labelText", async () => {
    element.label = "chameleon";

    const labelEl = await litFixture(element.labelText);

    expect(labelEl).dom.to.equalSnapshot();
  });

  it("renders the loading spinner when loading is set to true", async () => {
    element.loading = true;
    element.requestUpdate();
    await element.updateComplete;
    expect(element).shadowDom.to.equalSnapshot();
  });

  it("returns the canonical value", () => {
    element.selectedOption = { label: "asdf", value: "asdf" };
    expect(element.value).to.equal("asdf");
  });

  it("sets the canonical value", () => {
    element.options = [{ label: "asdf", value: "asdf" }];
    element.value = "asdf";
    expect(element.value).to.equal("asdf");
  });

  it("throws an error if the value is not in options array", () => {
    element.options = [{ label: "asdf", value: "asdf" }];
    expect(() => (element.value = "SIKE")).to.throw(
      "Value not found within the options array!"
    );
  });

  it("displays up caret if this.active is true", async () => {
    element.active = true;
    const caret = await litFixture(element.selectCaret);
    const caretUp = await litFixture(element.caretUp);
    expect(caret).dom.to.equal(caretUp);
  });

  it("displays down caret if this.active is false", async () => {
    element.active = false;
    const caret = await litFixture(element.selectCaret);
    const caretDown = await litFixture(element.caretDown);
    expect(caret).dom.to.equal(caretDown);
  });

  it("renders filtered options", async () => {
    element.filteredOptions = [{ label: "asdf", value: "asdf" }];
    element.active = true;
    const optionsList = await litFixture(element.optionsList);
    expect(optionsList).dom.to.equalSnapshot();
  });

  it("renders preLabel, subLabel, and postLabel", async () => {
    element.filteredOptions = [
      {
        label: "asdf",
        value: "asdf",
        preLabel: "asdf",
        postLabel: "asdf",
        subLabel: "asdf"
      }
    ];
    element.active = true;
    const optionsList = await litFixture(element.optionsList);
    expect(optionsList).dom.to.equalSnapshot();
  });

  describe("renders the renderedSelectedOption", () => {
    it("renderedSelectedOption without labels", async () => {
      element.selectedOption = { value: "asdf", label: "asdf" };
      element.requestUpdate();
      await element.updateComplete;

      expect(element).shadowDom.to.equalSnapshot();
    });

    it("renderedSelectedOption with labels", async () => {
      element.selectedOption = {
        value: "asdf",
        label: "asdf",
        subLabel: "asdf",
        postLabel: "asdf",
        preLabel: "asdf"
      };
      element.requestUpdate();
      await element.updateComplete;

      expect(element).shadowDom.to.equalSnapshot();
    });

    it("renders search bar", async () => {
      element.searchable = true;
      element.active = true;
      element.requestUpdate();
      await element.updateComplete;

      expect(element).shadowDom.to.equalSnapshot();
    });
  });

  it("clears selections", () => {
    element.selectedOption = { value: "asdf", label: "asdf" };
    element.clearSelections();

    expect(element.selectedOption).to.eql({});
  });

  it("can add selection", async () => {
    element.options = [
      { label: "asdf", value: "asdf" },
      { label: "asdf1", value: "asdf1" }
    ];
    const addSelectionSpy = sinon.spy(element, "addSelection");
    const dispatchEventSpy = sinon.spy(element, "dispatchEvent");

    element.active = true;
    element.requestUpdate();
    await element.updateComplete;
    element.shadowRoot.querySelector(".options__option").click();

    expect(addSelectionSpy).to.be.called;
    expect(dispatchEventSpy).to.be.called;
  });

  it("closeOptionsList ignores clicks on the multiselect itself", async () => {
    element.active = true;
    element.requestUpdate();
    await element.updateComplete;
    element.click();

    expect(element.active).to.be.true;
  });

  it("activates selections", async () => {
    await element.activateSelections();

    expect(element).shadowDom.to.equalSnapshot();
  });

  it("activate selections fails if disabled", async () => {
    element.disabled = true;
    await element.activateSelections();

    expect(element).shadowDom.to.equalSnapshot();
  });

  it("activates searchable selections", async () => {
    element.searchable = true;
    await element.activateSelections();

    expect(element).shadowDom.to.equalSnapshot();
  });

  it("handles search", () => {
    element.options = [{ value: "asdf", label: "asdf" }];
    element.handleSearch({ target: { value: "asdf" } });

    expect(element.filteredOptions).to.eql([{ value: "asdf", label: "asdf" }]);
  });
});
