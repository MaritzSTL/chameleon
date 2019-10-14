import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property
} from "lit-element";
import base from "@chameleon-ds/theme/base";
import style from "@chameleon-ds/theme/base/card";

@customElement("chameleon-card")
export default class ChameleonCard extends LitElement {
  /**
   * Styles
   */
  static styles = [base, style];

  /**
   * Properties
   */
  @property({ type: String })
  accentColor = "";

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }
}
