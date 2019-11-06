import { fixture, html, expect } from "@open-wc/testing";
import "@chameleon-ds/button/src/chameleon-button";

describe("chameleon-button", () => {
  it("renders", async () => {
    const el = await fixture(html`
      <chameleon-button></chameleon-button>
    `);
    expect(Boolean(el.shadowRoot)).to.equal(true);
  });

  it("renders as a button when no href is set", async () => {
    const el = await fixture(
      html`
        <chameleon-button></chameleon-button>
      `
    );
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

  it("anchor sets target to _top when new-tab is missing", async () => {
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

  it("anchor sets target to _top when new-tab is false", async () => {
    const el = await fixture(
      html`
        <chameleon-button
          href="https://github.com/MaritzSTL/chameleon"
          ?new-tab="${false}"
        ></chameleon-button>
      `
    );

    expect(
      Boolean(el.shadowRoot.querySelector(":host > a[target='_top']"))
    ).to.equal(true);
  });

  it("anchor sets target to _blank when new-tab is true", async () => {
    const el = await fixture(
      html`
        <chameleon-button
          href="https://github.com/MaritzSTL/chameleon"
          new-tab="true"
        ></chameleon-button>
      `
    );

    expect(
      Boolean(el.shadowRoot.querySelector(":host > a[target='_blank']"))
    ).to.equal(true);
  });
});
