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
  gradient = "var(--color-primary-dark), var(--color-secondary-dark)";

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
    return this.imageUrl
      ? {
          backgroundImage: `url(${this.imageUrl}?w=1920)
        `
        }
      : {
          backgroundImage: `linear-gradient(to right, ${this.gradient}) 
        `
        };
  }
}
