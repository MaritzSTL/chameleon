import { LitElement, html } from "lit-element";
import style from "./chameleon-card-footer-style";

export default class ChameleonCardFooter extends LitElement {
  /**
   * Styles
   */
  static styles = [style];

  /**
   * Template
   */
  render() {
    return html`<slot></slot>`;
  }
}

if (!window.customElements.get("chameleon-card-footer"))
  window.customElements.define("chameleon-card-footer", ChameleonCardFooter);
