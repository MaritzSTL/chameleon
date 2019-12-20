import { html, fixture, expect } from "@open-wc/testing";
import sinon from "sinon";
import "@chameleon-ds/timezone/src/chameleon-timezone";

describe.only("chameleon-timezone", () => {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let element;
  let spy;

  beforeEach(async () => {
    spy = sinon.spy();
    element = await fixture(
      html`
        <chameleon-timezone
          .timeZone="${timeZone}"
          @chameleon.input=${spy}
        ></chameleon-timezone>
      `
    );
  });

  it("should have tag name defined", () => {
    expect(element.tagName.toLowerCase()).to.equal("chameleon-timezone");
  });

  describe("timeZone()", () => {
    it("should set timeZone", async () => {
      element = await fixture(
        html`
          <chameleon-timezone
            .timeZone="${timeZone}"
            @chameleon.input=${spy}
          ></chameleon-timezone>
        `
      );
      expect(element.timeZone).to.equal(element._timeZoneValue);
    });

    it("should get timeZone", () => {
      expect(element.timeZone).to.equal(element._timeZoneValue);
    });

    it("should default to local timezone if none is supplied", () => {
      element.timeZone = "";
      element.firstUpdated();
      expect(element._timeZoneValue).to.equal(element.localtimeZone);
    });
  });

  describe("render()", () => {
    it("should render shadowDom", () => {
      expect(element).shadowDom.to.equal(`
        <div class="datetime-inputs">
          <div>
            <chameleon-select
              name="timeZone"
              searchable=""
            ></chameleon-select>
          </div>
        </div>
      `);
    });

    it("should render lightDom", () => {
      expect(element).lightDom.to.equal(``);
    });

    /**
     * Labels
     */

    it("should render timeZoneLabel", async () => {
      element = await fixture(
        html`
          <chameleon-timezone timeZoneLabel="asdf"></chameleon-timezone>
        `
      );
      expect(element).shadowDom.to.equal(`
        <div class="datetime-inputs">
          <div>
            <label class="label">asdf</label>
            <chameleon-select
              name="timeZone"
              searchable=""
            ></chameleon-timezone>
          </div>
        </div>
      `);
    });

    it("should render timeZoneSubLabel", async () => {
      element = await fixture(
        html`
          <chameleon-timezone timeZoneSubLabel="asdf"></chameleon-timezone>
        `
      );
      expect(element).shadowDom.to.equal(`
        <div class="datetime-inputs">
          <div>
            <chameleon-select
              name="timeZone"
              searchable=""
            ></chameleon-select>
            <label class="label">asdf</label>
          </div>
        </div>

      `);
    });

    it("should render errors", async () => {
      element.errors = ["asdf"];
      expect(
        element.shadowRoot.querySelector(".mdc-text-field-error-text")
      ).to.not.equal(undefined);
    });
  });

  describe("localTimeZone()", () => {
    it("should return the users's local timeZone", () => {
      expect(element.timeZone).to.equal(
        Intl.DateTimeFormat().resolvedOptions().timeZone
      );
    });
  });

  describe("handleInput()", () => {
    it("should update timeZone value", async () => {
      const timeZonePicker = element.shadowRoot.querySelector(
        "[name='timeZone']"
      );
      timeZonePicker.setSelection("US/Pacific");
      timeZonePicker.dispatchEvent(new CustomEvent("chameleon.select"));
      expect(element._timeZoneValue).to.equal("US/Pacific");
    });
  });
});
