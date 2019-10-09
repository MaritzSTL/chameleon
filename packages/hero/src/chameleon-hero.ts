import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property
} from "lit-element";
import { styleMap } from "lit-html/directives/style-map.js";
import { nothing } from "lit-html";
import base from "@chameleon-ds/theme/base";
import style from "@chameleon-ds/theme/base/hero";
import "@chameleon-ds/skeleton/src/chameleon-skeleton";

@customElement("chameleon-hero")
export default class ChameleonHero extends LitElement {
  /**
   * Properties
   */
  @property({ type: String })
  title = "";

  @property({ type: String })
  subTitle = "";

  @property({ type: String })
  heroText = "";

  @property({ type: String })
  imageUrl = "";

  @property({ type: String })
  type = "gradient";

  @property({ type: String })
  gradient = "var(--color-primary-dark), var(--color-secondary-dark)";

  @property({ type: Number })
  gradientAlpha = 0.5;

  @property({ type: Boolean })
  loading = false;

  /**
   * Styles
   */
  static styles = [base, style];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      ${this.loading
        ? html`
            <chameleon-skeleton height="${400}"></chameleon-skeleton>
          `
        : html`
            <div class="hero" style="${styleMap(this.backgroundImageStyles)}">
              <header class="heading">
                ${this.title
                  ? html`
                      <h1 class="hero-title surface-color">${this.title}</h1>
                    `
                  : nothing}
                ${this.subTitle
                  ? html`
                      <h3 class="hero-subtitle surface-color">
                        ${this.subTitle}
                      </h3>
                    `
                  : nothing}
                ${this.heroText
                  ? html`
                      <p class="hero-text surface-color">
                        ${this.heroText}
                      </p>
                    `
                  : nothing}
                <slot></slot>
              </header>
            </div>
          `}
    `;
  }

  get backgroundImageStyles() {
    switch (this.type) {
      case "imageGradient":
        return {
          backgroundImage: `linear-gradient(to right, ${this.gradientOverlay}), url(${this.imageUrl})`
        };
      case "gradient":
        return {
          backgroundImage: `linear-gradient(to right, ${this.gradientHex})`
        };
      case "image":
        return {
          backgroundImage: `url(${this.imageUrl})`
        };
      default:
        return {
          backgroundImage: `linear-gradient(to right, ${this.gradientHex})`
        };
    }
  }

  get gradientHex() {
    return this.gradient.split(",").map(h => h.trim());
  }

  get gradientOverlay() {
    return this.gradient
      .split(",")
      .map(h => this.hex2rgba(h.trim(), this.gradientAlpha));
  }

  private hex2rgba(hex, alpha = 0.5) {
    const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
  }
}
