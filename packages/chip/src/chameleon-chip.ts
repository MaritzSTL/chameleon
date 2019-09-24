import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property
} from "lit-element";
import { nothing } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import base from "@chameleon-ds/theme/base";
import style from "@chameleon-ds/theme/base/chip";

@customElement("chameleon-chip")
export default class ChameleonChip extends LitElement {
  /**
   * Properties
   */

  // A Boolean which, if true, indicates that the chip is closeable
  // @property({ type: Boolean, reflect: true })
  // closeable = false;

  /**
   * Styles
   */
  static styles = [base, style];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <div>
        <span>
          <slot></slot>
        </span>
      </div>
    `;
  }
}
