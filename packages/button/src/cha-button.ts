import { LitElement, TemplateResult, customElement, html } from "lit-element";

@customElement("cha-button")
export default class ChaButton extends LitElement {
  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <button></button>
    `;
  }
}
