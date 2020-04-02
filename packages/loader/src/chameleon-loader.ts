import { LitElement, TemplateResult, html, property } from "lit-element";
import style from "./chameleon-loader-style";
import spinnerStyle from "./chameleon-loader-spinner-style";
import ellipsisStyle from "./chameleon-loader-ellipsis-style";

export default class ChameleonLoader extends LitElement {
  /**
   * Styles
   */
  static styles = [style];

  @property({ type: String, reflect: true })
  loader = "spinner";

  @property({ type: String, reflect: true })
  size = "auto";

  /**
   * Template
   */
  render(): TemplateResult {
    switch (this.loader) {
      case "ellipsis":
        return this.renderEllipsisLoader();
      case "spinner":
      default:
        return this.renderSpinnerLoader();
    }
  }

  renderEllipsisLoader(): TemplateResult {
    return html`
      <style>
        ${ellipsisStyle}
      </style>

      <div class="ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    `;
  }

  renderSpinnerLoader(): TemplateResult {
    return html`
      <style>
        ${spinnerStyle}
      </style>

      <svg
        class="spinner"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        height=${this.size}
        width=${this.size}
      >
        <circle cx="50" cy="50" r="45" />
      </svg>
    `;
  }
}

if (!window.customElements.get("chameleon-loader"))
  window.customElements.define("chameleon-loader", ChameleonLoader);
