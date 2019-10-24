import { litFixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-hero";

const fixture = html`
  <chameleon-hero></chameleon-hero>
`;

describe("chameleon-hero", () => {
  let element;

  beforeEach(async () => {
    element = await litFixture(fixture);
  });

  it("renders", async () => {
    expect(Boolean(element.shadowRoot)).to.equal(true);
  });

  it("renders skeleton when loading", async () => {
    element.loading = true;
    element.requestUpdate();
    await element.updateComplete;

    expect(element).shadowDom.to.equal(
      "<chameleon-skeleton height='400' theme='primary' width='100%'></chameleon-skeleton>"
    );
  });

  it("renders title", async () => {
    element.title = "chameleon";
    element.requestUpdate();
    await element.updateComplete;

    expect(element).shadowDom.to.equal(`
      <div class="hero" style="background-image: linear-gradient(to right, var(--color-primary-dark),var(--color-secondary-dark));">
      <header class="heading">
        <h1 class="hero-title surface-color">
          chameleon
        </h1>
        <slot>
        </slot>
      </header>
      </div>
    `);
  });

  it("renders subTitle", async () => {
    element.subTitle = "chameleon";
    element.requestUpdate();
    await element.updateComplete;

    expect(element).shadowDom.to.equal(`
      <div class="hero" style="background-image: linear-gradient(to right, var(--color-primary-dark),var(--color-secondary-dark));">
      <header class="heading">
        <h3 class="hero-subtitle surface-color">
          chameleon
        </h3>
        <slot>
        </slot>
      </header>
      </div>
    `);
  });

  it("renders heroText", async () => {
    element.heroText = "chameleon";
    element.requestUpdate();
    await element.updateComplete;

    expect(element).shadowDom.to.equal(`
      <div class="hero" style="background-image: linear-gradient(to right, var(--color-primary-dark),var(--color-secondary-dark));">
      <header class="heading">
        <p class="hero-text surface-color">
          chameleon
        </p>
        <slot>
        </slot>
      </header>
      </div>
    `);
  });

  it("renders imageGradient", () => {
    element.type = "imageGradient";

    expect(element.backgroundImageStyles).to.deep.equal({
      backgroundImage: `linear-gradient(to right, ${element.gradientOverlay}), url(${element.imageUrl})`
    });
  });

  it("renders gradient", () => {
    element.type = "gradient";

    expect(element.backgroundImageStyles).to.deep.equal({
      backgroundImage: `linear-gradient(to right, ${element.gradientHex})`
    });
  });

  it("renders image", () => {
    element.type = "image";

    expect(element.backgroundImageStyles).to.deep.equal({
      backgroundImage: `url(${element.imageUrl})`
    });
  });

  it("renders default backgroundImageStyles", () => {
    element.type = "chameleon";

    expect(element.backgroundImageStyles).to.deep.equal({
      backgroundImage: `linear-gradient(to right, ${element.gradientHex})`
    });
  });

  it("computes hex2rgba", () => {
    expect(element.hex2rgba("#ffffff")).to.equal("rgba(255,255,255,0.5)");
  });
});
