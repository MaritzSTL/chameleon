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
  theme = "gradient";

  @property({ type: String })
  gradient = "var(--color-primary-dark), var(--color-secondary-dark)";

  @property({ type: String })
  overlay = `${this.hex2rgba("#002D72", 0.7)}, ${this.hex2rgba(
    "#FF5910",
    0.45
  )}`;

  /**
   * Styles
   */
  static styles = [base, style];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <div class="hero" style="${styleMap(this.heroBackgroundImageStyles())}">
        <header class="heading">
          ${this.title
            ? html`
                <h1 class="surface-color">${this.title}</h1>
              `
            : nothing}
          ${this.subTitle
            ? html`
                <p class="hero-subtitle surface-color">
                  ${this.subTitle}
                </p>
              `
            : nothing}
          ${this.heroText
            ? html`
                <p class="surface-color">
                  ${this.heroText}
                </p>
              `
            : nothing}
          <slot></slot>
        </header>
      </div>
    `;
  }

  heroBackgroundImageStyles() {
    if (this.theme === "imageGradient") {
      return {
        backgroundImage: `linear-gradient(to right, ${this.overlay}), url(${this.imageUrl}?w=1920)`
      };
    } else if (this.theme === "image") {
      return {
        backgroundImage: `url(${this.imageUrl}?w=1920)`
      };
    } else {
      return {
        backgroundImage: `linear-gradient(to right, ${this.gradient})`
      };
    }
    // return this.imageUrl
    //   ? {
    //       backgroundImage: `linear-gradient(to right, ${this.overlay}), url(${this.imageUrl}?w=1920)`
    //     }
    //   : {
    //       backgroundImage: `linear-gradient(to right, ${this.gradient})`
    //     };
  }

  hex2rgba(hex, alpha = 0.5) {
    const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
  }
}
