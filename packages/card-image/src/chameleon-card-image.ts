import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property,
  PropertyValues
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
  style: any;

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <img src="${this.src}" alt="${this.alt}" />
    `;
  }
  updated(changedProperties: PropertyValues) {
  if (
    changedProperties.has("src") && 
   this.src === "" &&
   this.src !== undefined
    ) {
    this.style.backgroundColor = "green"
   }

}
