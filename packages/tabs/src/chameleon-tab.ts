import { LitElement, TemplateResult, customElement, html } from "lit-element";

@customElement("chameleon-tab")
export default class ChameleonTab extends LitElement {
  constructor() {
    super();
    this.addEventListener("click", this.handleToggle);
  }

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }

  handleToggle(): void {
    this.dispatchEvent(
      new CustomEvent("selected-changed", {
        detail: {
          value: this.dataset.index
        },
        bubbles: true,
        composed: true
      })
    );
  }
}
