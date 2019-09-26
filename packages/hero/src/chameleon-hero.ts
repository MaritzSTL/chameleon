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
  backgroundImageUrl = "";

  // @property({ type: String })
  // primaryDarkHex = "";

  // @property({ type: String })
  // primaryLightHex = "";

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
        <div class="gd ${this.hasHeading ? "heading" : ""}">
          ${this.hasHeading
            ? html`
                <div class="col-12 col-md-12 col-lg-6 col-xl-6 title-subtitle">
                  <div>
                    <h1 class="pax surface-color">${this.title}</h1>
                    <p class="landing-subtitle surface-color">
                      ${this.subTitle}
                    </p>
                    <slot name="search"></slot>
                  </div>
                </div>
              `
            : nothing}
          <slot name="in-grid"></slot>
        </div>
        <slot></slot>
      </div>
    `;
  }

  heroBackgroundImageStyles() {
    return this.backgroundImageUrl
      ? {
          backgroundImage: `url(${
            this.backgroundImageUrl
          }?w=1920), linear-gradient(to right, ${hexToRgba(
            this.primaryDarkHex,
            false,
            "1"
          )},
          ${hexToRgba(this.primaryLightHex, false, "1")})
                          `
        }
      : {
          backgroundImage: `linear-gradient(to right, ${hexToRgba(
            this.primaryDarkHex,
            false,
            "1"
          )},
                          ${hexToRgba(this.primaryLightHex, false, "1")}
                          )
                          `
        };
  }

  get hasHeading() {
    return this.title || this.subTitle;
  }
  get primaryDarkHex() {
    return window.ShadyCSS.getComputedStyleValue(this, "--primary-color-dark");
  }

  get primaryLightHex() {
    return window.ShadyCSS.getComputedStyleValue(this, "--primary-color-light");
  }
}
