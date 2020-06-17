import { litFixture, html, expect } from "@open-wc/testing";
import sinon from "sinon";
import "../chameleon-multiselect.js";

const fixture = html` <chameleon-multiselect></chameleon-multiselect> `;

const fixtureData = [
  {
    value: "arch",
    label: "Gateway Arch",
  },
  {
    value: "union-station",
    label: "Union Station",
  },
  {
    value: "scott-joplin-house",
    label: "Scott Joplin House",
  },
];

const fixtureDataWithLabels = [
  {
    value: "arch",
    label: "Gateway Arch",
    subLabel: "Historical Landmark",
    preLabel: "asdf",
    postLabel: "asdf",
  },
  {
    value: "union-station",
    label: "Union Station",
    subLabel: "Historical Landmark",
    preLabel: "asdf",
    postLabel: "asdf",
  },
  {
    value: "scott-joplin-house",
    label: "Scott Joplin House",
    subLabel: "Historical Landmark",
    preLabel: "asdf",
    postLabel: "asdf",
  },
];

describe("chameleon-multiselect", () => {
  let element;

  beforeEach(async () => {
    element = await litFixture(fixture);
  });

  describe("render", () => {
    it("renders", () => {
      expect(Boolean(element.shadowRoot)).to.equal(true);
    });

    it("renders placeholder", async () => {
      element.placeholder = "chameleon";
      element.instantSearch = true;
      element.requestUpdate();
      await element.updateComplete;

      const inputEl = element.shadowRoot.querySelector("input");

      expect(inputEl.placeholder).equals("chameleon");
    });

    it("renders loader when loading is true", async () => {
      element.loading = true;
      element.requestUpdate();
      await element.updateComplete;

      const loader = element.shadowRoot.querySelector("chameleon-loader");

      expect(loader).is.not.null;
    });

    it("renders data", async () => {
      const fixture = await litFixture(
        html`
          <chameleon-multiselect
            .options="${fixtureData}"
          ></chameleon-multiselect>
        `
      );

      fixture.active = true;
      fixture.requestUpdate();
      await fixture.updateComplete;

      expect(fixture).shadowDom.to.equalSnapshot();
    });

    it("renders data with labels", async () => {
      const fixture = await litFixture(
        html`
          <chameleon-multiselect
            .options="${fixtureDataWithLabels}"
          ></chameleon-multiselect>
        `
      );

      fixture.active = true;
      fixture.requestUpdate();
      await fixture.updateComplete;

      expect(fixture).shadowDom.to.equalSnapshot();
    });

    it("renders out errorText", async () => {
      const fixture = await litFixture(
        html`
          <chameleon-multiselect
            .validationMessage="Error Text"
          ></chameleon-multiselect>
        `
      );
      await fixture.updateComplete;
      debugger;
      expect(fixture).shadowDom.to.equalSnapshot();
    });

    it("filtered options are rendered", async () => {
      const fixture = await litFixture(
        html`
          <chameleon-multiselect
            name="multiselect-input"
            .options="${fixtureData}"
          ></chameleon-multiselect>
        `
      );

      fixture.active = true;
      fixture.requestUpdate();
      await fixture.updateComplete;

      const inputElement = fixture.shadowRoot.querySelector(
        `[name="multiselect-input"]`
      );
      inputElement.value = "gate";
      inputElement.dispatchEvent(new Event("input"));
      fixture.requestUpdate();
      await fixture.updateComplete;

      expect(fixture).shadowDom.to.equalSnapshot();
    });
  });

  describe("value", async () => {
    element = await litFixture(
      html`
        <chameleon-multiselect
          .options="${fixtureData}"
        ></chameleon-multiselect>
      `
    );

    it("sets value", () => {
      element.value = ["arch"];

      expect(element.selectedOptions).to.eql([fixtureData[0]]);
    });

    it("throws error if value doesn't exist in options array", () => {
      expect(() => (element.value = ["chameleon"])).to.throw(
        "chameleon doesn't exist within the options array"
      );
    });

    it("returns correct value", () => {
      element.value = ["arch"];

      expect(element.value).to.eql(["arch"]);
    });

    it("returns optionsList", async () => {
      element.active = true;

      const fixture = await litFixture(element.optionsList);

      expect(fixture).to.contain.html(`<ul class="options__list">`);
    });
  });

  it("sets active to true on focus", () => {
    element.active = false;
    element.setActive();

    expect(element.active).to.be.true;
  });

  describe("toggleActive", () => {
    it("should set active to true", () => {
      element.active = false;
      element.toggleActive();

      expect(element.active).to.be.true;
    });

    it("should set active to false", () => {
      element.active = true;
      element.toggleActive();

      expect(element.active).to.be.false;
    });
  });

  it("should dispatch a chameleon.select event", () => {
    const spy = sinon.spy();
    element.addEventListener("chameleon.select", spy);
    element.dispatchChangeEvent({});

    expect(spy).to.be.calledOnce;
  });

  it("should dispatch a chameleon.search event", () => {
    const spy = sinon.spy();
    element.addEventListener("chameleon.search", spy);
    element.dispatchSearchEvent({});

    expect(spy).to.be.calledOnce;
  });

  describe("getLabel", () => {
    it("renders a label tag when one is given", async () => {
      element.label = "This is a fantastic label.";
      element.requestUpdate();
      await element.updateComplete;

      const inputEl = element.shadowRoot.querySelector("label");

      expect(Boolean(inputEl)).to.equal(true);
    });

    it("does not render a label tag if none is given", async () => {
      element.label = "";
      element.requestUpdate();
      await element.updateComplete;

      const inputEl = element.shadowRoot.querySelector("label");

      expect(Boolean(inputEl)).to.equal(false);
    });
  });

  it("can add selection", async () => {
    const fixture = await litFixture(
      html`
        <chameleon-multiselect
          .options="${fixtureData}"
        ></chameleon-multiselect>
      `
    );
    const addSelectionSpy = sinon.spy(fixture, "addSelection");
    const dispatchChangeEventSpy = sinon.spy(fixture, "dispatchChangeEvent");
    const toggleActiveSpy = sinon.spy(fixture, "toggleActive");

    fixture.active = true;
    fixture.requestUpdate();
    await fixture.updateComplete;

    fixture.shadowRoot.querySelector(".options__option").click();

    expect(addSelectionSpy).to.be.called;
    expect(dispatchChangeEventSpy).to.be.called;
    expect(toggleActiveSpy).to.be.called;
  });

  it("handles instant search", () => {
    element.instantSearch = true;
    const dispatchSearchEventSpy = sinon.spy(element, "dispatchSearchEvent");

    element.handleSearch({ target: { value: "ASDF" } });

    expect(element.instantSearchValue).to.equal("asdf");
    expect(dispatchSearchEventSpy).to.be.called;
  });

  it("closeOptionsList ignores clicks on the multiselect itself", async () => {
    const fixture = await litFixture(
      html`
        <chameleon-multiselect
          .options="${fixtureData}"
        ></chameleon-multiselect>
      `
    );
    fixture.active = true;
    fixture.requestUpdate();
    await fixture.updateComplete;
    fixture.click();

    expect(fixture.active).to.be.true;
  });

  it("handles chip close", async () => {
    const fixture = await litFixture(
      html`
        <chameleon-multiselect
          .options="${fixtureData}"
        ></chameleon-multiselect>
      `
    );
    const dispatchChangeEventSpy = sinon.spy(fixture, "dispatchChangeEvent");

    fixture.selectedOptions = [
      {
        value: "arch",
        label: "Gateway Arch",
      },
    ];
    fixture.handleChipClose(
      new CustomEvent("remove-chip", { detail: { value: "arch" } })
    );

    expect(fixture.selectedOptions).to.eql([]);
    expect(dispatchChangeEventSpy).to.be.called;
  });
});
