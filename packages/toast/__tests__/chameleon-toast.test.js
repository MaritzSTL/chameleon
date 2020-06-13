import { ChameleonToast, ChameleonToastStyle } from "../index.js";
import "../chameleon-toast.js";
import { litFixture, html, expect } from "@open-wc/testing";
import sinon from "sinon";

const fixture = html` <chameleon-toast></chameleon-toast> `;

describe("chameleon-toast", () => {
  let element;

  beforeEach(async () => {
    element = await litFixture(fixture);
  });

  it("renders", async () => {
    expect(Boolean(element.shadowRoot)).to.equal(true);
  });

  it("closes toast", () => {
    const dispatchEvent = sinon.spy(element, "dispatchEvent");
    const showCloseable = element.showCloseable;

    element.closeToast();

    expect(dispatchEvent).to.be.calledOnce;
    expect(element.showCloseable).to.not.equal(showCloseable);
  });
});
