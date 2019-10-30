import { LitElement, TemplateResult, customElement, html } from "lit-element";
import style from "./chameleon-card-footer-style";

@customElement("chameleon-card-footer")
export default class ChameleonCardFooter extends LitElement {
  /**
   * Styles
   */
  static styles = [style];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }
}
