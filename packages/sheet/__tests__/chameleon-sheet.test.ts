import {
  litFixture,
  html,
  expect,
  unsafeStatic,
  aTimeout,
  elementUpdated,
} from "@open-wc/testing";
import { runOverlayMixinSuite } from "@lion/overlays/test-suites/OverlayMixin.suite.js";
import "../src/chameleon-sheet";

describe.only("chameleon-sheet", () => {
  describe("Integration tests", () => {
    const tagString = "chameleon-sheet";
    const tag = unsafeStatic(tagString);

    // beforeEach(async () => {
    //   await aTimeout(0);
    //   await aTimeout(0);
    // });

    runOverlayMixinSuite({
      tagString,
      tag,
      suffix: " for chameleon sheet",
    });
  });

  describe("Basic", () => {
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
    it("opens when invoker is clicked", () => {});
    it("relocates content slot", () => {});
  });
});
