import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property
} from "lit-element";
import base from "@chameleon-ds/theme/base";
import style from "@chameleon-ds/theme/base/loader";

@customElement("chameleon-loader")
export default class ChameleonLoader extends LitElement {
  /**
   * Styles
   */
  static styles = [base, style];

  @property({ type: String, reflect: true })
  loader = "ellipsis";

  /**
   * Template
   */
  render(): TemplateResult {
    return html``;
  }

  renderEllipsisLoader(): TemplateResult {
    return html`
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    `;
  }

  renderSpinnerLoader(): TemplateResult {
    return html``;
  }
}
