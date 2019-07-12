import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property
} from "lit-element";

@customElement("cha-button")
export default class ChaButton extends LitElement {
  /**
   * Properties
   */
  @property({ type: Boolean, reflect: true })
  disabled = false;

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
