import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property
} from "lit-element";
import { nothing } from "lit-html";
import base from "@chameleon-ds/theme/base";
import style from "@chameleon-ds/theme/base/card-header";

@customElement("chameleon-card-header")
export default class ChameleonCardHeader extends LitElement {
  /**
   * Styles
   */
  static styles = [base, style];

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
  render(): TemplateResult {
    return html`
      ${this.subtitle !== ""
        ? html`
            <h3>${this.subtitle}</h3>
          `
        : nothing}
      ${this.title !== ""
        ? html`
            <h2>${this.title}</h2>
          `
        : nothing}
    `;
  }
}
