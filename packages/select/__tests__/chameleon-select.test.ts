import { litFixture, html, expect } from "@open-wc/testing";

import "@chameleon-ds/select/src/chameleon-select";

const fixture = html`
  <chameleon-select></chameleon-select>
`;

describe("chameleon-select", () => {
  let element;

  it("renders", async () => {
    element = await litFixture(fixture);
    expect(Boolean(element.shadowRoot)).to.equal(true);
  });

  it("renders labelText", async () => {
    element.label = "chameleon";

    const labelEl = await litFixture(element.labelText);

    expect(labelEl).dom.to.equal(
      "<div class=label-container><label>chameleon</label></div>"
    );
  });
});
