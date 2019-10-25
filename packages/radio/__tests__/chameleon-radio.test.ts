import { litFixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-radio";

const fixture = html`
  <chameleon-radio></chameleon-radio>
`;

describe("chameleon-radio", () => {
  let element;

  beforeEach(async () => {
    element = await litFixture(fixture);
  });

  it("renders", () => {
    expect(Boolean(element.shadowRoot)).to.equal(true);
  });

  it("renders disabled", async () => {
    element.disabled = true;
    element.requestUpdate();
    await element.updateComplete;

    expect(element).shadowDom.to.equal(
      "<input disabled='' type='radio' value='' /><span class='checkmark disabled'></span>"
    );
  });

  it("renders labelText", () => {
    element.label = "chameleon";

    expect(element.labelText).to.equal("chameleon");
  });
});
