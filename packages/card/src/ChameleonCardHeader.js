import { LitElement, html, property } from "lit-element";
import { nothing } from "lit-html";
import { ChameleonCardHeaderStyle } from "./ChameleonCardHeaderStyle.js";

export default class ChameleonCardHeader extends LitElement {
  /**
   * Styles
   */
  static styles = [ChameleonCardHeaderStyle];

  /**
   * Properties
   */
  @property({ type: String })
  title = "";

  @property({ type: String })
  subtitle = "";

  /**
   * Template
   */
  render() {
    return html`
      ${this.subtitle !== "" ? html`<h3>${this.subtitle}</h3>` : nothing}
      ${this.title !== "" ? html`<h2>${this.title}</h2>` : nothing}
    `;
  }
}
