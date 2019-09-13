import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property
} from "lit-element";
import base from "@chameleon-ds/theme/base";
import style from "@chameleon-ds/theme/base/card-image";

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
  static styles = [base, style];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <img src="${this.src}" alt="${this.alt}" />
    `;
  }
}
