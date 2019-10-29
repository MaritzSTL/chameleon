import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property
} from "lit-element";
import { nothing, svg, SVGTemplateResult } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import style from "./chameleon-input-style";

@customElement("chameleon-input")
export default class ChameleonInput extends LitElement {
  /**
   * Lifecycle Methods
   */
  firstUpdated() {
    // TODO(ryuhhnn): This isn't the best strategy for hydrating in the
    // correct error state. Come back to this to come up with better solution.
    this.requestUpdate();
  }

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

  // The input's min value (available in type="number")
  @property({ type: Number, reflect: true })
  min = null;

  // The input's max value (available in type="number")
  @property({ type: Number, reflect: true })
  max = null;

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
      <div
        class="
      ${classMap({
          "component-wrapper": true,
          invalid: this._invalidState
        })}"
      >
        ${this.labelText}
        <div
          class="
        ${classMap({
            "input-wrapper": true,
            "icon-left": this["icon-left"],
            "icon-right": this["icon-right"]
          })}"
        >
          <slot name="icon-left"></slot>
          ${this._inputEl}
          <slot name="icon-right"></slot>
        </div>
        ${this.errorText}
      </div>
    `;
  }

  get _inputEl(): TemplateResult {
    switch (this.type) {
      case "text":
        return html`
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
            @input="${this._handleInput}"
            @blur="${this._handleBlur}"
            @invalid="${this._handleInvalid}"
          />
        `;
      case "number":
        return html`
          <input
            name="cha-input"
            .type="${this.type}"
            .placeholder="${this.placeholder}"
            .value="${this.value}"
            .min="${this.min}"
            .max="${this.max}"
            ?autocomplete="${this.autocomplete}"
            ?autofocus="${this.autofocus}"
            ?disabled="${this.disabled}"
            ?readonly="${this.readonly}"
            ?required="${this.required}"
            @input="${this._handleInput}"
            @blur="${this._handleBlur}"
            @invalid="${this._handleInvalid}"
          />
        `;
      default:
        return html`
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
            @input="${this._handleInput}"
            @blur="${this._handleBlur}"
            @invalid="${this._handleInvalid}"
          />
        `;
    }
  }

  get _el(): HTMLInputElement | null {
    if (this.shadowRoot !== null) {
      return this.shadowRoot.querySelector("input");
    } else return null;
  }

  get labelText(): TemplateResult | object {
    if (this.label !== "") {
      return html`
        <label
          for="cha-input"
          class="${classMap({ invalid: this._invalidState })}"
          >${this.label}</label
        >
      `;
    } else return nothing;
  }

  get errorText(): TemplateResult | object {
    if (this.validationMessage !== "") {
      return html`
        <span class="error">${this.warningIcon} ${this.validationMessage}</span>
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

  get _invalidState(): boolean {
    if (this._el !== null) {
      if (!this.checkValidity() || this.validationMessage.length > 0) {
        return true;
      } else return false;
    } else {
      return true;
    }
  }

  _handleInput(e: any): void {
    // e must have a value of `any` right now because of: https://stackoverflow.com/a/57331338/3713527
    this.value = e.target.value;
  }

  _handleBlur(): void {
    const elementValid = this.checkValidity();
    if (elementValid) this.validationMessage = "";
  }

  _handleInvalid(): void {
    this.validationMessage =
      this._el !== null ? this._el.validationMessage : "";
  }

  get warningIcon(): SVGTemplateResult {
    return svg`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-search"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
  `;
  }
}
