import { LitElement, TemplateResult, customElement, html } from "lit-element";

@customElement("chameleon-tab")
export default class ChameleonTab extends LitElement {
  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }
}
