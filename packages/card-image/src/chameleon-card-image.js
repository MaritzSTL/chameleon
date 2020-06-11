import { LitElement, html, property } from "lit-element";
import style from "./chameleon-card-image-style.js";

export default class ChameleonCardImage extends LitElement {
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
  static styles = [style];

  /**
   * Template
   */
  render() {
    return this.src !== ""
      ? html`<img src="${this.src}" alt="${this.alt}" />`
      : html`<div class="placeholder"></div>`;
  }
}

if (!window.customElements.get("chameleon-card-image"))
  window.customElements.define("chameleon-card-image", ChameleonCardImage);
