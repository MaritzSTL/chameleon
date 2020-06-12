import { LitElement, html } from "lit-element";
import { ChameleonCardFooterStyle } from "./ChameleonCardFooterStyle.js";

export default class ChameleonCardFooter extends LitElement {
  /**
   * Styles
   */
  static styles = [ChameleonCardFooterStyle];

  /**
   * Template
   */
  render() {
    return html`<slot></slot>`;
  }
}
