import { litFixture, html, expect } from "@open-wc/testing";
import sinon from "sinon";
import "../src/chameleon-multiselect";

const fixture = html`
  <chameleon-multiselect></chameleon-multiselect>
`;

describe("chameleon-multiselect", () => {
  let element;

  beforeEach(async () => {
    element = await litFixture(fixture);
  });

  it("renders", () => {
    expect(Boolean(element.shadowRoot)).to.equal(true);
  });

  describe("get renderedOptions", () => {
    it("should return options", async () => {
      element.options = [
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

      const expectedOptions = [
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
      expect(element.options).to.eql(expectedOptions);
    });
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

  it("sets active to true on focus", () => {
    // const onFocus = sinon.spy(element, "focus");
    element.setActive();
    expect(element.active).to.be.true;
  });
});
