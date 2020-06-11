import { LitElement, html, property } from "lit-element";
import { nothing } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import style from "./chameleon-button-style.js";
import "@chameleon-ds/loader";

export default class ChameleonButton extends LitElement {
  /**
   * Properties
   */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean, reflect: true })
  loading = false;

  @property({ type: String, reflect: true })
  theme = "primary";

  // Element has a left icon
  @property({ type: Boolean, reflect: true })
  "icon-left" = false;

  // Element has a right icon
  @property({ type: Boolean, reflect: true })
  "icon-right" = false;

  // Element has a icon only
  @property({ type: Boolean, reflect: true })
  "icon-only" = false;

  // Element has an href
  @property({ type: String, reflect: true })
  href = null;

  // Element should honor the target
  @property({ type: String, reflect: true })
  target = "_top";

  /**
   * Styles
   */
  static styles = [style];

  /**
   * Template
   */
  render() {
    return html`
      ${this.href && !this.disabled
        ? html`
            <a href=${this.href} target=${this.target} rel=${this.getRel()}>
              ${this.renderButton()}
            </a>
          `
        : html` ${this.renderButton()} `}
    `;
  }

  renderButton() {
    return html`
      <button
        class=${classMap({ [this.theme]: true })}
        ?disabled=${this.disabled || this.loading}
      >
        ${this.loading
          ? html`
              <slot name="icon-loading">
                <chameleon-loader></chameleon-loader>
              </slot>
            `
          : nothing}
        <slot name="icon-left"></slot>
        <slot></slot>
        <slot name="icon-right"></slot>
        <slot name="icon-only"></slot>
      </button>
    `;
  }

  getRel() {
    return this.target === "_blank" ? `noopener noreferrer` : ``;
  }
}

if (!window.customElements.get("chameleon-button"))
  window.customElements.define("chameleon-button", ChameleonButton);
