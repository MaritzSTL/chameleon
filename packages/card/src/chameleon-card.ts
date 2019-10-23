import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property,
  PropertyValues
} from "lit-element";
import base from "@chameleon-ds/theme/base";
import style from "@chameleon-ds/theme/base/card";

@customElement("chameleon-card")
export default class ChameleonCard extends LitElement {
  /**
   * Styles
   */
  static styles = [base, style];

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
    else if (
      changedProperties.has("accentColor") &&
      this.accentColor !== undefined
    ) {
      this.style.borderTop = `7px solid var(--color-primary)`;
    }
  }
}
