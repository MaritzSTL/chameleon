import { fixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-button";

describe("chameleon-button", () => {
  it("renders", async () => {
    const el = await fixture(html` <chameleon-button></chameleon-button> `);
    expect(Boolean(el.shadowRoot)).to.equal(true);
  });

  it("renders as a button when no href is set", async () => {
    const el = await fixture(html` <chameleon-button></chameleon-button> `);
    expect(Boolean(el.shadowRoot.querySelector(":host > button"))).to.equal(
      true
    );
    expect(Boolean(el.shadowRoot.querySelector(":host > a"))).to.equal(false);
  });

  it("renders as a link when an href is set", async () => {
    const el = await fixture(
      html`
        <chameleon-button
          href="https://github.com/MaritzSTL/chameleon"
        ></chameleon-button>
      `
    );

    expect(Boolean(el.shadowRoot.querySelector(":host > a"))).to.equal(true);
    expect(Boolean(el.shadowRoot.querySelector(":host > button"))).to.equal(
      false
    );
  });

  it("anchor sets target to _top when target is missing", async () => {
    const el = await fixture(
      html`
        <chameleon-button
          href="https://github.com/MaritzSTL/chameleon"
        ></chameleon-button>
      `
    );

    expect(
      Boolean(el.shadowRoot.querySelector(":host > a[target='_top']"))
    ).to.equal(true);
  });

  it("anchor sets target to _top when target set to _top", async () => {
    const el = await fixture(
      html`
        <chameleon-button
          href="https://github.com/MaritzSTL/chameleon"
          target="_top"
        ></chameleon-button>
      `
    );

    expect(
      Boolean(el.shadowRoot.querySelector(":host > a[target='_top']"))
    ).to.equal(true);
  });

  it("anchor sets target to _blank when target set to _blank", async () => {
    const el = await fixture(
      html`
        <chameleon-button
          href="https://github.com/MaritzSTL/chameleon"
          target="_blank"
        ></chameleon-button>
      `
    );

    expect(
      Boolean(el.shadowRoot.querySelector(":host > a[target='_blank']"))
    ).to.equal(true);
  });
});
