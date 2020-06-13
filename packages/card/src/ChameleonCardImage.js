import { LitElement, html, property } from "lit-element";
import { ChameleonCardImageStyle } from "./ChameleonCardImageStyle.js";

export class ChameleonCardImage extends LitElement {
  /**
   * Properties
   */

  // The image's source URL
  @property({ type: String })
  src = "";

  // The image's alt text
  @property({ type: String })
  alt = "";

  /**
   * Styles
   */
  static styles = [ChameleonCardImageStyle];

  /**
   * Template
   */
  render() {
    return this.src !== ""
      ? html`<img src="${this.src}" alt="${this.alt}" />`
      : html`<div class="placeholder"></div>`;
  }
}
