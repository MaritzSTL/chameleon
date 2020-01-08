import { litFixture, html, expect } from "@open-wc/testing";
import sinon from "sinon";
import "../src/chameleon-multiselect";

const fixture = html`
  <chameleon-multiselect></chameleon-multiselect>
`;

const fixtureData = [
  {
    value: "arch",
    label: "Gateway Arch",
    subLabel: "Historical Landmark"
  },
  {
    value: "union-station",
    label: "Union Station",
    subLabel: "Historical Landmark"
  },
  {
    value: "scott-joplin-house",
    label: "Scott Joplin House",
    subLabel: "Historical Landmark"
  }
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
});
