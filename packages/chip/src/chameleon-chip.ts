import {
  LitElement,
  TemplateResult,
  property,
  html,
  svg,
  SVGTemplateResult
} from "lit-element";
import { nothing } from "lit-html";
import style from "./chameleon-chip-style";

export default class ChameleonChip extends LitElement {
  /**
   * Properties
   */
  @property({ type: Boolean, reflect: true })
  closeable = false;

  @property({ type: String })
  _value = "";

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
      ${this.closeable
        ? html`
            <span @click="${this._remove}">${this.removeIcon}</span>
          `
        : nothing}
    `;
  }

  _remove() {
    const e = new CustomEvent("remove-chip", {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    });

    this.dispatchEvent(e);
  }

  get removeIcon(): SVGTemplateResult {
    return svg`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
  }

  get value(): string {
    if (this._value !== "") {
      return this._value;
    } else {
      return this.innerText;
    }
  }

  set value(value: string) {
    this._value = value;
  }
}

if (!window.customElements.get("chameleon-chip"))
  window.customElements.define("chameleon-chip", ChameleonChip);
