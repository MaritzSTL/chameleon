import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property,
  PropertyValues
} from "lit-element";
import style from "./chameleon-card-image-style";
import { nothing } from "lit-html";

@customElement("chameleon-card-image")
export default class ChameleonCardImage extends LitElement {
  /**
   * Properties
   */

  // The image's source URL
  @property({ type: String })
  src = "";

  // The image's alt text
  @property({ type: String })
  alt = "";

  @property({ type: Boolean })
  hasImage = true;

  /**
   * Styles
   */
  static styles = [style];
  style: any;

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      ${this.hasImageProps}
      <slot></slot>
    `;
  }

  get hasImageProps(): TemplateResult | object {
    return this.hasImage !== false
      ? html`
        <img src="${this.src}" alt="${this.alt}"</div>
      `
      : nothing;
  }

  updated(changedProperties: PropertyValues) {
    if (
      changedProperties.has("src") &&
      this.src === "" &&
      this.src !== undefined
    ) {
      this.hasImage = false;
      this.style.backgroundImage =
        "linear-gradient(to top, var(--color-primary-dark, #004587), var(--color-primary-light, #679dea))";
      this.style.borderRadius = "var(--border-radius, 0.5rem)";
      this.style.height = "100px";
    }
  }
}
