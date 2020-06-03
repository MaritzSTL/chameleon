import { litFixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-sheet";

describe("chameleon-sheet", () => {
  let el;
  beforeEach(async () => {
    el = await litFixture(html`
      <chameleon-sheet>
        <div slot="content">content</div>
        <button slot="invoker">invoker</button>
      </chameleon-sheet>
    `);
  });

  it("is not opened by default", () => {
    expect(el.opened).not.to.equal(true);
  });
  it("opens when invoker is clicked", () => {
    const invoker = el.querySelector("[slot='invoker']");
    invoker.click();
    expect(el.opened).to.equal(true);
  });
  it("relocates content slot", () => {
    const globalRootNode = document.body.querySelector(".global-overlays");
    const relocatedNode = globalRootNode.lastChild;
    expect(relocatedNode.innerHTML).to.equal(
      `<div slot="content">content</div>`
    );
  });
});
