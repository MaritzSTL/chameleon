import { LitElement, TemplateResult, customElement, html } from "lit-element";
import style from "./chameleon-chip-style";

@customElement("chameleon-chip")
export default class ChameleonChip extends LitElement {
  /**
   * Properties
   */

  // TODO(Nodza): Make chip closeable https://github.com/MaritzSTL/chameleon/issues/81
  // A Boolean which, if true, indicates that the chip is closeable
  // @property({ type: Boolean, reflect: true })
  // closeable = false;

  /**
   * Styles
   */
  static styles = [style];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <span>
        <slot></slot>
      </span>
    `;
  }
}
