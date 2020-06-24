import { fixture, html, expect } from "@open-wc/testing";
import sinon from "sinon";
import "../chameleon-accordion.js";

describe("chameleon-accordion", () => {
  it("fires `accordion-connected` event in firstUpdated", async () => {
    const spy = sinon.spy();
    const el = await fixture(
      html`<chameleon-accordion @accordion-connected=${spy}>
        <h4 slot="header">Tower Grove</h4>
        <section slot="panel">
          Tower Grove South is a neighborhood of south St. Louis, Missouri.
        </section>
      </chameleon-accordion>`
    );
    expect(spy.called).to.equal(true);
  });
  it("determines __connected from `accordion-connected` event", async () => {
    const handler = (e) => {
      e.detail.connected = true;
    };
    const el = await fixture(
      html`<chameleon-accordion
        @accordion-connected=${handler}
      ></chameleon-accordion>`
    );

    expect(el.__connected).to.equal(true);
  });
  it("renders !expanded correctly", async () => {
    const el = await fixture(
      html`<chameleon-accordion>
        <h4 slot="header">Tower Grove</h4>
        <section slot="panel">
          Tower Grove South is a neighborhood of south St. Louis, Missouri.
        </section>
      </chameleon-accordion>`
    );

    expect(el).shadowDom.to.equalSnapshot();
  });
  it("renders expanded correctly", async () => {
    const el = await fixture(
      html`<chameleon-accordion .expanded="${true}">
        <h4 slot="header">Tower Grove</h4>
        <section slot="panel">
          Tower Grove South is a neighborhood of south St. Louis, Missouri.
        </section>
      </chameleon-accordion>`
    );

    expect(el).shadowDom.to.equalSnapshot();
  });
  it("fires `accordion-disconnected` event on disconnectedCallback()", async () => {
    const spy = sinon.spy();
    const el = await fixture(
      html`<div @accordion-disconnected="${spy}">
        <chameleon-accordion></chameleon-accordion>
      </div>`
    );
    const accordion = el.querySelector("chameleon-accordion");
    accordion.disconnectedCallback();
    // accordion.parentElement.removeChild(accordion);
    expect(spy.called).to.equal(true);
  });
  it("toggles expanded if not connected", async () => {
    const el = await fixture(
      html`<chameleon-accordion>
        <h4 slot="header">Tower Grove</h4>
        <section slot="panel">
          Tower Grove South is a neighborhood of south St. Louis, Missourah.
        </section>
      </chameleon-accordion>`
    );

    const initialState = el.expanded;
    el.header.click();

    expect(initialState).to.equal(false);
    expect(el.expanded).to.equal(true);
  });
  it("fires toggle event if connected", async () => {
    const spy = sinon.spy();
    const el = await fixture(
      html` <chameleon-accordion @toggle-accordion="${spy}">
        <h4 slot="header">Tower Grove</h4>
        <section slot="panel">
          Tower Grove South is a neighborhood of south St. Louis, Missouri.
        </section>
      </chameleon-accordion>`
    );

    el.__connected = true;
    el.header.click();
    expect(spy.called).to.equal(true);
    expect(el.expanded).to.equal(false);
  });
  it("accepts slotted toggle icon", async () => {
    const el = await fixture(
      html`<chameleon-accordion>
        <span slot="toggle-icon">x</span>
        <h4 slot="header">Tower Grove</h4>
        <section slot="panel">
          Tower Grove South is a neighborhood of south St. Louis, Missouri.
        </section>
      </chameleon-accordion>`
    );
    expect(el.toggleIconSlot.textContent).to.equal("x");
  });
  it("provides an svg by default", async () => {
    const el = await fixture(
      html`<chameleon-accordion>
        <h4 slot="header">Tower Grove</h4>
        <section slot="panel">
          Tower Grove South is a neighborhood of south St. Louis, Missouri.
        </section>
      </chameleon-accordion>`
    );
    expect(el.toggleIcon).to.eql(el.defaultToggleIcon);
  });
  it("dispatches expanded-changed event when expanded changes", async () => {
    const spy = sinon.spy();
    // first expanded-changed occurs as component instantiates
    const el = await fixture(
      html`<chameleon-accordion
        @expanded-changed="${spy}"
      ></chameleon-accordion>`
    );
    // trigger second expanded-changed
    el.expanded = !el.expanded;
    await el.updateComplete;
    expect(spy.getCalls().length).to.equal(2);
  });
});
