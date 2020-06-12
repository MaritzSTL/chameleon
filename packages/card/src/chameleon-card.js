import { LitElement, html, property } from "lit-element";
import style from "./chameleon-card-style.js";
import { nothing } from "lit-html";

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

  @property({ type: String, reflect: true })
  complication = null;

  /**
   * Template
   */
  render() {
    return html`
      ${this.complicationText}
      <slot></slot>
    `;
  }

  get complicationText() {
    return this.complication !== null
      ? html` <div class="complication">${this.complication}</div> `
      : nothing;
  }

  updated(changedProperties) {
    if (changedProperties.has("accentColor") && this.accentColor !== "")
      this.style.borderTop = `7px solid ${this.accentColor}`;

    if (
      changedProperties.has("accentColor") &&
      this.accentColor === "" &&
      this.accentColor !== undefined
    ) {
      this.style.borderTop = `7px solid var(--color-primary, #2c6fb7)`;
    }
  }
}

if (!window.customElements.get("chameleon-card"))
  window.customElements.define("chameleon-card", ChameleonCard);
