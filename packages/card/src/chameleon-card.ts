import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property,
  PropertyValues
} from "lit-element";
import style from "./chameleon-card-style";

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

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <slot></slot>
    `;
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
