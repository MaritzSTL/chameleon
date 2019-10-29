import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property
} from "lit-element";
import style from "./chameleon-card-image-style";

@customElement("chameleon-card-image")
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
  render(): TemplateResult {
    return html`
      <img src="${this.src}" alt="${this.alt}" />
    `;
  }
}
