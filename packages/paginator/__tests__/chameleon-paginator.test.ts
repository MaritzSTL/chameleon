import { litFixture, html, expect } from "@open-wc/testing";
import sinon from "sinon";
import "../src/chameleon-paginator";

const fixture = html`
  <chameleon-paginator totalItems="100" pageSize="10"></chameleon-paginator>
`;

describe("chameleon-paginator", () => {
  let element;

  beforeEach(async () => {
    element = await litFixture(fixture);
  });

  it("renders", () => {
    expect(Boolean(element.shadowRoot)).to.equal(true);
  });

  it("doesn't render previous button on first page", () => {
    expect(Boolean(element.shadowRoot.querySelector(":host > [name='prev']")))
      .to.be.false;
  });

  it("renders previous button", async () => {
    element.currentPage = 2;
    element.requestUpdate();
    await element.updateComplete;

    expect(Boolean(element.shadowRoot.querySelector(":host > [name='prev']")))
      .to.be.true;
  });

  it("renders next button", () => {
    expect(Boolean(element.shadowRoot.querySelector(":host > [name='next']")))
      .to.be.true;
  });

  it("doesn't render next button on last page", async () => {
    element.currentPage = 10;
    element.requestUpdate();
    await element.updateComplete;

    expect(Boolean(element.shadowRoot.querySelector(":host > [name='name']")))
      .to.be.false;
  });

  it("totalPages returns 0 if totalItems and pageSize are null", async () => {
    element.totalItems = null;
    element.pageSize = null;
    element.requestUpdate();
    await element.updateComplete;

    expect(element.totalPages).to.equal(0);
  });

  it("goes to previous page", async () => {
    element.currentPage = 2;
    element.requestUpdate();
    await element.updateComplete;

    const spy = sinon.spy(element, "dispatchChange");
    element._previous();

    expect(element.currentPage).to.equal(1);
    expect(spy).to.be.calledOnce;
  });

  it("goes to next page", async () => {
    const spy = sinon.spy(element, "dispatchChange");
    element._next();

    expect(element.currentPage).to.equal(2);
    expect(spy).to.be.calledOnce;
  });

  it("can navigate directly to page", () => {
    const page = element.shadowRoot.querySelector("[data-page='2'] > span");
    const spy = sinon.spy(element, "dispatchChange");

    page.click();

    expect(element.currentPage).to.equal(2);
    expect(spy).to.be.calledOnce;
  });

  it("goes to first page if navigating directly fails", async () => {
    element.shadowRoot.querySelector("[data-page='2']").dataset.page = "";
    const page = element.shadowRoot.querySelector(
      ".page:nth-of-type(2) > span"
    );

    page.click();

    await element.updateComplete;

    expect(element.currentPage).to.equal(1);
  });

  it("renders two separators", async () => {
    const page = element.shadowRoot.querySelector("[data-page='5'] > span");

    page.click();

    await element.updateComplete;

    const separators = Array.from(
      element.shadowRoot.querySelectorAll(".separator")
    );

    expect(element.currentPage).to.equal(5);
    expect(separators.length).to.equal(2);
  });

  it("renders when totalPages is less than maxLength", async () => {
    element = await litFixture(
      html`
        <chameleon-paginator totalItems="5" pageSize="1"></chameleon-paginator>
      `
    );
    const pages = Array.from(element.shadowRoot.querySelectorAll(".page"));

    expect(pages.length).to.equal(5);
  });
});
