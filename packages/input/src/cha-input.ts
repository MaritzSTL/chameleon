import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property
} from "lit-element";
import { nothing } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import base from "@cha/theme/base";
import style from "@cha/theme/base/input";

@customElement("cha-input")
export default class ChaInput extends LitElement {
  /**
   * Properties
   */
  // A string indicating the type of autocomplete functionality, if any, to allow on the input
  @property({ type: Boolean, reflect: true })
  autocomplete = false;

  // A Boolean which, if present, makes the input take focus when the form is presented
  @property({ type: Boolean, reflect: true })
  autofocus = false;

  // A Boolean attribute which is present if the input should be disabled
  @property({ type: Boolean, reflect: true })
  disabled = false;

  // A Boolean attribute which, if true, indicates that the input cannot be edited
  @property({ type: Boolean, reflect: true })
  readonly = false;

  // A Boolean which, if true, indicates that the input must have a value before the form can be submitted
  @property({ type: Boolean, reflect: true })
  required = false;

  // A string indicating which input type the <input> element represents
  @property({ type: String, reflect: true })
  type = "text";

  @property({ type: String, reflect: true })
  placeholder = "";

  // The input's current value
  @property({ type: String })
  value = "";

  // The input's label
  @property({ type: String })
  label = "";

  // The input's error message
  @property({ type: String })
  validationMessage = "";

  // Element has a left icon
  @property({ type: Boolean, reflect: true })
  "icon-left" = false;

  // Element has a right icon
  @property({ type: Boolean, reflect: true })
  "icon-right" = false;

  /**
   * Styles
   */
  static styles = [base, style];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      ${this.labelText}
      <div
        class="${classMap({
          "input-wrapper": true,
          "icon-left": this["icon-left"],
          "icon-right": this["icon-right"]
        })}"
      >
        <slot name="icon-left"></slot>
        <input
          name="cha-input"
          .type="${this.type}"
          .placeholder="${this.placeholder}"
          .value="${this.value}"
          ?autocomplete="${this.autocomplete}"
          ?autofocus="${this.autofocus}"
          ?disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          ?required="${this.required}"
          @blur="${this._handleBlur}"
          @invalid="${this._handleInvalid}"
        />
        <slot name="icon-right"></slot>
      </div>
      ${this.errorText}
    `;
  }

  get _el(): HTMLInputElement | null {
    if (this.shadowRoot !== null) {
      return this.shadowRoot.querySelector("input");
    } else return null;
  }

  get labelText(): TemplateResult | object {
    if (this.label !== "") {
      return html`
        <label for="cha-input">${this.label}</label>
      `;
    } else return nothing;
  }

  get errorText(): TemplateResult | object {
    if (this.validationMessage !== "") {
      return html`
        <span class="error">${this.validationMessage}</span>
      `;
    } else return nothing;
  }

  get validity(): ValidityState | undefined {
    if (this._el !== null) return this._el.validity;
    else return undefined;
  }

  get willValidate(): boolean {
    if (this._el !== null) return this._el.willValidate;
    else return false;
  }

  checkValidity(): boolean {
    if (this._el !== null) return this._el.checkValidity();
    else return false;
  }

  _handleBlur(): void {
    this.checkValidity();
  }

  _handleInvalid(): void {
    this.validationMessage =
      this._el !== null ? this._el.validationMessage : "";
  }
}
