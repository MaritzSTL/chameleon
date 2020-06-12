import { LitElement, html, property } from "lit-element";
import { ChameleonLoaderStyle } from "./ChameleonLoaderStyle.js";
import { ChameleonLoaderSpinnerStyle } from "./ChameleonLoaderSpinnerStyle.js";
import { ChameleonLoaderEllipsisStyle } from "./ChameleonLoaderEllipsisStyle.js";

export class ChameleonLoader extends LitElement {
  /**
   * Styles
   */
  static styles = [ChameleonLoaderStyle];

  @property({ type: String, reflect: true })
  loader = "spinner";

  @property({ type: String, reflect: true })
  size = "auto";

  /**
   * Template
   */
  render() {
    switch (this.loader) {
      case "ellipsis":
        return this.renderEllipsisLoader();
      case "spinner":
      default:
        return this.renderSpinnerLoader();
    }
  }

  renderEllipsisLoader() {
    return html`
      <style>
        ${ChameleonLoaderEllipsisStyle}
      </style>

      <div class="ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    `;
  }

  renderSpinnerLoader() {
    return html`
      <style>
        ${ChameleonLoaderSpinnerStyle}
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
