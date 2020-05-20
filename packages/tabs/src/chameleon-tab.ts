import { LitElement, TemplateResult, html } from "lit-element";

export default class ChameleonTab extends LitElement {
  constructor() {
    super();
    this.addEventListener("click", this.handleToggle);
  }

  /**
   * Template
   */
  render(): TemplateResult {
    return html`<slot></slot>`;
  }

  handleToggle(): void {
    this.dispatchEvent(
      new CustomEvent("chameleon.tabs.selected-changed", {
        detail: {
          value: this.dataset.index,
        },
        bubbles: true,
        composed: true,
      })
    );
  }
}

if (!window.customElements.get("chameleon-tab"))
  window.customElements.define("chameleon-tab", ChameleonTab);
