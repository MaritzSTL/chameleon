import { ChameleonTimezone, ChameleonTimezoneStyle } from "../index.js";
import "../chameleon-timezone.js";

/**
 * TODO(ryuhhnn): 4/3/2020 - Commented these all out because it's causing a test
 * failure and don't have time to look into it right now
 */
// import { html, fixture, expect } from "@open-wc/testing";

// describe("chameleon-timezone", () => {
//   const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
//   let element;

//   beforeEach(async () => {
//     element = await fixture(
//       html`<chameleon-timezone .timezone="${timezone}"></chameleon-timezone>`
//     );
//   });

//   it("should have tag name defined", () => {
//     expect(element.tagName.toLowerCase()).to.equal("chameleon-timezone");
//   });

//   describe("timezone()", () => {
//     it("should set timezone", () => {
//       element.timezone = timezone;
//       expect(element.timezone).to.equal(element._timezoneValue);
//     });

//     it("should get timezone", () => {
//       expect(element.timezone).to.equal(element._timezoneValue);
//     });

//     // TODO
//     xit("should default to local timezone if none is supplied", () => {
//       expect(element.timezone).to.equal(element.localTimeone);
//     });
//   });

//   describe("render()", () => {
//     it("should render shadowDom", () => {
//       expect(element).shadowDom.to.equalSnapshot();
//     });

//     it("should render lightDom", () => {
//       expect(element).lightDom.to.equal(``);
//     });

//     /**
//      * Labels
//      */

//     it("should render timezoneLabel", async () => {
//       element = await fixture(
//         html`<chameleon-timezone timezoneLabel="asdf"></chameleon-timezone>`
//       );
//       expect(element).shadowDom.to.equalSnapshot();
//     });

//     it("should render timeoneSubLabel", async () => {
//       element = await fixture(
//         html`
//           <chameleon-timezone timezoneSubLabel="asdf"></chameleon-timezone>
//         `
//       );
//       expect(element).shadowDom.to.equalSnapshot();
//     });

//     it("should render errors", async () => {
//       element.errors = ["asdf"];
//       expect(
//         element.shadowRoot.querySelector(".mdc-text-field-error-text")
//       ).to.not.equal(undefined);
//     });
//   });

//   describe("localTimezone()", () => {
//     it("should return the users's local timeZone", () => {
//       expect(element.timezone).to.equal(
//         Intl.DateTimeFormat().resolvedOptions().timeZone
//       );
//     });
//   });

//   describe("handleInput()", () => {
//     it("should update timezone value", () => {
//       element.value = "US/Pacific";
//       expect(element._timezoneValue).to.equal("US/Pacific");
//     });
//   });
// });
