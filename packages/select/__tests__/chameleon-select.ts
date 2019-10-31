import { litFixture, html, expect } from "@open-wc/testing";
import sinon from "sinon";
import "../src/chameleon-select";

const fixture = html`
  <chameleon-select></chameleon-select>
`;

describe("chameleon-select", () => {
  let element;

  it("renders", () => {
    expect(Boolean(element.shadowRoot)).to.equal(true);
  });
});
