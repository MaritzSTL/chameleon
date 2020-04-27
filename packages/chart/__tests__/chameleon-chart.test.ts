import { litFixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-chart";

const fixture = html`
  <chameleon-chart></chameleon-chart>
`;

describe("chameleon-chart", () => {
  let element;

  beforeEach(async () => {
    element = await litFixture(fixture);
  });

  it("renders", async () => {
    expect(Boolean(element.shadowRoot)).to.equal(true);
  });

  it("convert percentage to degrees", async () => {
    const percentage = 10;

    const degrees = element._percentageToDegrees(percentage);
    const expectedDegrees = -96;
    expect(degrees).to.be.equal(expectedDegrees);
  });

  it("returns the arc chart type", async () => {
    element.type = "arc";
    const chart = await litFixture(element.chart);

    expect(chart).lightDom.to.equalSnapshot();
  });
});
