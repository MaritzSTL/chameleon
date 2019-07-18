import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property
} from "lit-element";
import base from "@cha/theme/base";
import style from "@cha/theme/base/button";

@customElement("cha-button")
export default class ChaButton extends LitElement {
  /**
   * Properties
   */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /**
   * Styles
   */
  static styles = [base, style];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <button ?disabled="${this.disabled}">
        <slot></slot>
      </button>
    `;
  }
}
