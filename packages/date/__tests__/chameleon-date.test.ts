import { litFixture, html, expect } from "@open-wc/testing";
import sinon from "sinon";
import "../src/chameleon-date";

const fixture = html` <chameleon-date></chameleon-date> `;

describe("chameleon-date", () => {
  let element;

  beforeEach(async () => {
    element = await litFixture(fixture);
    element.date = new Date(2020, 0, 1);
    element.requestUpdate();
    await element.updateComplete;
  });

  it("renders", async () => {
    expect(Boolean(element.shadowRoot)).to.equal(true);
  });

  it("sets touched to true if a value is supplied", async () => {
    element = await litFixture(
      html` <chameleon-date value="2020-1-1"></chameleon-date> `
    );

    expect(element.touched).to.be.true;
  });

  it("deletes a date", async () => {
    element.value = "2020-04-20";
    element.delete();
    expect(element.value).to.eql("");
    expect(element.setDate(null)).to.be.called;
  });

  xit("renders overlay", async () => {
    element.active = true;
    element.requestUpdate();
    await element.updateComplete;

    expect(element).shadowDom.to.equalSnapshot();
  });

  it("get date() returns undefined if there is no value", async () => {
    element.value = undefined;
    element.requestUpdate();
    await element.updateComplete;

    expect(element.date).to.be.undefined;
  });

  it("set date() correctly updates value", async () => {
    element.date = new Date(2020, 0, 1);
    element.requestUpdate();
    await element.updateComplete;

    expect(element.value).to.equal("2020-1-1");
  });

  it("set date() ignores update if value is undefined", async () => {
    element.value = "2020-1-1";
    element.date = undefined;
    element.requestUpdate();
    await element.updateComplete;

    expect(element.value).to.equal("2020-1-1");
  });

  xit("renders year overlay", async () => {
    element.overlayRenderMode = "year";
    element.requestUpdate();
    await element.updateComplete;
    const overlay = await litFixture(element.overlay);

    expect(overlay).dom.to.equalSnapshot();
  });

  xit("renders date grid with min/max values", async () => {
    element.min = "2020-1-1";
    element.max = "2020-1-10";
    element.requestUpdate();
    await element.updateComplete;
    const dateGrid = await litFixture(element.dateGrid);

    expect(dateGrid).dom.to.equalSnapshot();
  });

  it("renders nothing for date grid if this.days is undefined", () => {
    sinon.stub(element, "days").get(() => undefined);

    expect(element.dateGrid).to.eql({});
  });

  it("get days() returns undefined if a year and month aren't set", () => {
    element.renderedDate = undefined;

    expect(element.days).to.be.undefined;
  });

  it("renderedDateValue returns an empty string if date isn't set", () => {
    element.touched = true;
    element.value = undefined;

    expect(element.renderedDateValue).to.equal("");
  });

  it("prevIcon() returns default icon if none is supplied", async () => {
    const prevIcon = await litFixture(element.prevIcon);

    expect(prevIcon).lightDom.to.equalSnapshot();
  });

  it("prevIcon() returns the slot if one is provided", async () => {
    element = await litFixture(
      html` <chameleon-date><svg slot="prev-icon"></svg></chameleon-date> `
    );
    const prevIcon = await litFixture(element.prevIcon);

    expect(prevIcon).dom.to.equalSnapshot();
  });

  it("nextIcon() returns default icon if none is supplied", async () => {
    const nextIcon = await litFixture(element.nextIcon);

    expect(nextIcon).lightDom.to.equalSnapshot();
  });

  it("nextIcon() returns the slot if one is provided", async () => {
    element = await litFixture(
      html` <chameleon-date><svg slot="next-icon"></svg></chameleon-date> `
    );
    const nextIcon = await litFixture(element.nextIcon);

    expect(nextIcon).dom.to.equalSnapshot();
  });

  it("toggleActive() sets this.active equal to true", () => {
    element.active = false;
    element.toggleActive();
    expect(element.active).to.be.true;
  });
  it("toggleActive() does not set this.active when disabled is true", () => {
    element.active = false;
    element.disabled = true;
    element.toggleActive();
    expect(element.active).to.be.false;
  });

  it("toggleActive() does not set this.active when readonly is true", () => {
    element.active = false;
    element.readonly = true;
    element.toggleActive();
    expect(element.active).to.be.false;
  });

  it("prevMonth() sets the rendered date to the previous month", () => {
    const date = new Date();
    element.renderedDate = date;
    date.setMonth(date.getMonth() - 1);
    element.prevMonth();

    expect(element.renderedDate).to.eql(date);
  });

  it("nextMonth() sets the rendered date to the next month", () => {
    const date = new Date();
    element.renderedDate = date;
    date.setMonth(date.getMonth() + 1);
    element.nextMonth();

    expect(element.renderedDate).to.eql(date);
  });

  it("prevYear() sets the rendered date to the previous year", () => {
    const date = new Date();
    element.renderedDate = date;
    date.setFullYear(date.getFullYear() - 1);
    element.prevYear();

    expect(element.renderedDate).to.eql(date);
  });

  it("nextYear() sets the rendered date to the next year", () => {
    const date = new Date();
    element.renderedDate = date;
    date.setFullYear(date.getFullYear() + 1);
    element.nextYear();

    expect(element.renderedDate).to.eql(date);
  });

  it("setDate() performs the proper actions", async () => {
    const date = new Date();
    const spy = sinon.spy();
    document.addEventListener("chameleon.date.input", spy);
    await element.setDate({ target: { value: date } });

    expect(element.touched).to.be.true;
    expect(element.active).to.be.false;
    expect(spy).to.be.calledOnce;
  });

  it("setMonth() performas the proper actions", () => {
    const date = new Date(2020, 0, new Date().getDate());
    element.setMonth({ target: { value: { year: 2020, month: 0 } } });

    expect(element.touched).to.be.true;
    expect({
      year: element.renderedDate.getFullYear(),
      month: element.renderedDate.getMonth(),
      day: element.renderedDate.getDate(),
    }).to.eql({
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
    });

    expect(element.overlayRenderMode).to.equal("month");
  });

  it("closeOverlay() closes overlay if chameleon-date is not in composedPath", () => {
    element.active = true;
    const mouseEvent = {
      composedPath() {
        return [{ tagName: "asdf" }];
      },
    };
    element.closeOverlay(mouseEvent);

    expect(element.active).to.be.false;
  });

  it("closeOverlay() doesn't close overlay if chameleon-date is in composedPath", () => {
    element.active = true;
    const mouseEvent = {
      composedPath() {
        return [{ tagName: "CHAMELEON-DATE" }];
      },
    };
    element.closeOverlay(mouseEvent);

    expect(element.active).to.be.true;
  });

  describe("toggleOverlayView()", () => {
    it("defaults to month", () => {
      element.overlayRenderMode = "year";
      element.toggleOverlayView();

      expect(element.overlayRenderMode).to.equal("month");
    });

    it("sets overlayRenderMode to year if currently month", async () => {
      element.overlayRenderMode = "month";
      element.toggleOverlayView();

      expect(element.overlayRenderMode).to.equal("year");
    });
  });
});
