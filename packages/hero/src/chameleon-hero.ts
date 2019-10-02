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
        <header class="${this.hasHeading ? "heading" : ""}">
          ${
            this.hasHeading
              ? html`
                  <div class="title-subtitle">
                    <div>
                      <h1 class="pax surface-color">${this.title}</h1>
                      <p class="landing-subtitle surface-color">
                        ${this.subTitle}
                      </p>
                      <p class="hero-text surface-color">${this.heroText}</p>
                    </div>
                  </div>
                `
              : nothing
          }
          <slot name="in-grid"></slot>
        </div>
        <slot></slot>
      </div>
    `;
  }

  heroBackgroundImageStyles() {
    return this.imageUrl
      ? {
          backgroundImage: `url(${this.imageUrl}?w=1920)
        `
        }
      : {
          backgroundImage: `linear-gradient(to right, var(--color-primary-dark), var(--color-secondary-dark)) 
        `
        };
  }

  get hasHeading() {
    return this.title || this.subTitle;
  }
}
