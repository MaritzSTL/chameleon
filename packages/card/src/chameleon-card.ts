import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property,
  PropertyValues
} from "lit-element";
import style from "./chameleon-card-style";
import { nothing } from "lit-html";

@customElement("chameleon-card")
export default class ChameleonCard extends LitElement {
  /**
   * Styles
   */
  static styles = [style];

  /**
   * Properties
   */
  @property({ type: String })
  accentColor = null;

  @property({ type: String })
  complication = null;

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      ${this.complicationText}
      <slot></slot>
    `;
  }

  get complicationText(): TemplateResult | object {
    return this.complication !== null
      ? html`
          <div class="complication">${this.complication}</div>
        `
      : nothing;
  }

  updated(changedProperties: PropertyValues) {
    if (changedProperties.has("accentColor") && this.accentColor !== "")
      this.style.borderTop = `7px solid ${this.accentColor}`;

    if (
      changedProperties.has("accentColor") &&
      this.accentColor === "" &&
      this.accentColor !== undefined
    ) {
      this.style.borderTop = `7px solid var(--color-primary)`;
    }
  }
}
