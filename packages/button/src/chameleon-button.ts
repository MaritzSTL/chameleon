import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property
} from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import base from "@chameleon-ds/theme/base";
import style from "@chameleon-ds/theme/base/button";

@customElement("chameleon-button")
export default class ChameleonButton extends LitElement {
  /**
   * Properties
   */
  @property({ type: Boolean, reflect: true })
  disabled = false;
  @property({ type: String, reflect: true })
  theme = "primary";

  /**
   * Styles
   */
  static styles = [base, style];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <button
        class="${classMap({ [this.theme]: true })}"
        ?disabled="${this.disabled}"
      >
        <slot></slot>
      </button>
    `;
  }
}
