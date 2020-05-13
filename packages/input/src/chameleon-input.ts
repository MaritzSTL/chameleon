import { LitElement, TemplateResult, html, property } from "lit-element";
import { nothing, svg, SVGTemplateResult } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import style from "./chameleon-input-style";

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

  // The input's form name
  @property({ type: String })
  name = "cha-input";

  // A Boolean which, if present, makes the input take focus when the form is presented
  @property({ type: Boolean, reflect: true })
  autofocus = false;

  // A Boolean attribute which is present if the input should be disabled
  @property({ type: Boolean, reflect: true })
  disabled = false;

  // A Boolean attribute which, if true, indicates that the input with number type will not display increment arrows
  @property({ type: Boolean, reflect: true })
  noStepper = false;

  // The input's number interval (available in type="number")
  @property({ type: Number, reflect: true })
  step = null;

  // A Boolean attribute which, if true, indicates that the input cannot be edited
  @property({ type: Boolean, reflect: true })
  readonly = false;

  // A Boolean which, if true, indicates that the input must have a value before the form can be submitted
  @property({ type: Boolean, reflect: true })
  required = false;

  // A Boolean which, if present and the input type is 'password', allows visibility of password characters to be toggled
  @property({ type: Boolean, reflect: true })
  toggleable = false;

  // A Boolean which, if true, indicates that the input field has had a blur event
  @property({ type: Boolean, reflect: true })
  touched = false;

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

  // The input's max length (availabile in all types expect type="number")
  @property({ type: Number, reflect: true })
  maxLength = null;

  // The input's label
  @property({ type: String })
  label = "";

  //Invalid boolean to allow validity access from higher level form errors
  @property({ type: Boolean, reflect: true })
  invalid = false;

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
  static styles = [style];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <div
        class="
        ${classMap({
          "component-wrapper": true,
          invalid: this._invalidState,
          disabled: this.disabled,
          "no-stepper": this.noStepper,
        })}"
      >
        <div
          class="${classMap({
            "label-row": true,
            "split-row": this.toggleable,
          })}"
        >
          ${this.labelText}${this.toggleText}
        </div>

        <div
          class="
          ${classMap({
            "input-wrapper": true,
            "icon-left": this["icon-left"],
            "icon-right": this["icon-right"],
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
      case "number":
        return html`
          <input
            .name="${this.name}"
            .type="${this.type}"
            .placeholder="${this.placeholder}"
            .value="${this.value}"
            .step="${this.step}"
            .min="${this.min}"
            .max="${this.max}"
            ?autocomplete="${this.autocomplete}"
            ?autofocus="${this.autofocus}"
            ?required="${this.required}"
            ?disabled="${this.disabled}"
            ?readonly="${this.readonly}"
            ?aria-invalid="${this._invalidState}"
            aria-describedby="${this.name}-error"
            @input="${this._handleInput}"
            @blur="${this._handleBlur}"
            @invalid="${this._handleInvalid}"
            @keydown="${this._acceptInput}"
          />
        `;
      case "text":
      default:
        return html`
          <input
            .name="${this.name}"
            .type="${this.type}"
            .placeholder="${this.placeholder}"
            .value="${this.value}"
            maxlength="${this.maxLength}"
            ?autocomplete="${this.autocomplete}"
            ?autofocus="${this.autofocus}"
            ?required="${this.required}"
            ?readonly="${this.readonly}"
            ?disabled="${this.disabled}"
            ?aria-invalid="${this._invalidState}"
            aria-describedby="${this.name}-error"
            @input="${this._handleInput}"
            @blur="${this._handleBlur}"
            @invalid="${this._handleInvalid}"
            @keydown="${this._acceptInput}"
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
          for="${this.name}"
          class="${classMap({ invalid: this._invalidState })}"
          >${this.label}</label
        >
      `;
    } else return nothing;
  }

  get toggleText(): TemplateResult | object {
    if (this.toggleable) {
      return html`
        <span @click="${this._toggleType}">
          ${this.type == "password" ? this.eyeIcon : this.eyeOffIcon}
          ${this.type == "password" ? "Show" : "Hide"}
        </span>
      `;
    } else return nothing;
  }

  _toggleType(): void {
    if (this.type == "password") {
      this.type = "text";
    } else {
      this.type = "password";
    }
  }

  get errorText(): TemplateResult | object {
    if (this.validationMessage !== "") {
      return html`
        <span class="error" id="${this.name}-error"
          >${this.warningIcon} ${this.validationMessage}</span
        >
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
    if (
      this.invalid ||
      this.validationMessage.length > 0 ||
      (this.touched && !this.checkValidity())
    ) {
      return true;
    } else return false;
  }

  _checkRequired(): void {
    if (this.required && this.value.length === 0) {
      if (this._el !== null) {
        this._el.setAttribute("required", "");
      }
    }
  }

  _handleInput(e: any): void {
    this.value = e.target.value;
    this._checkRequired();

    this.dispatchEvent(
      new CustomEvent("chameleon.input.input", {
        detail: {
          value: this.value,
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  _handleBlur(): void {
    this._checkRequired();
    const elementValid = this.checkValidity();
    if (elementValid) this.validationMessage = "";
    this.touched = true;
  }

  _handleInvalid(): void {
    this.validationMessage =
      this._el !== null ? this._el.validationMessage : "";
  }

  _acceptInput(e: any): boolean {
    if (this.noStepper && (e.which === 38 || e.which === 40)) {
      e.preventDefault();
      return false;
    } else return true;
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

  get eyeIcon(): SVGTemplateResult {
    return svg`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    `;
  }

  get eyeOffIcon(): SVGTemplateResult {
    return svg`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    `;
  }
}

if (!window.customElements.get("chameleon-input"))
  window.customElements.define("chameleon-input", ChameleonInput);
