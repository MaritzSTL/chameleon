import { LitElement, html } from "lit-element";

export default class ChameleonTab extends LitElement {
  constructor() {
    super();

    this.addEventListener("click", this.handleToggle);
  }

  /**
   * Template
   */
  render() {
    return html`<slot></slot>`;
  }

  handleToggle() {
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
