import { LitElement, TemplateResult, customElement, html } from "lit-element";
import base from "@chameleon-ds/theme/base";
import style from "@chameleon-ds/theme/base/card-footer";

@customElement("chameleon-card-footer")
export default class ChameleonCardFooter extends LitElement {
  /**
   * Styles
   */
  static styles = [base, style];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }
}
