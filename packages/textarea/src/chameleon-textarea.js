import { LitElement, html, property } from "lit-element";
import { nothing } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import style from "./chameleon-textarea-style";

export default class ChameleonTextarea extends LitElement {
  /**
   * Properties
   */
  @property({ type: String })
  name = "cha-textarea";

  // A string indicating the type of autocomplete functionality, if any, to allow on the input
  @property({ type: Boolean, reflect: true })
  autocomplete = false;

  // A Boolean which, if present, makes the textarea take focus when the form is presented
  @property({ type: Boolean, reflect: true })
  autofocus = false;

  // The visible width of the text control, in average character widths.
  // If it is specified, it must be a positive integer. If it is not specified,
  // the default value is 20.
  @property({ type: Number, reflect: true })
  cols = 20;

  // A Boolean attribute which is present if the textarea should be disabled
  @property({ type: Boolean, reflect: true })
  disabled = false;

  // The maximum number of characters (unicode code points) that the user can enter. If this value isn't specified, the user can enter an unlimited number of characters.
  @property({ type: Number, reflect: true })
  maxlength = null;

  // The minimum number of characters (unicode code points) required that the user should enter.
  @property({ type: Number, reflect: true })
  minlength = null;

  // A hint to the user of what can be entered in the control. Carriage returns or line-feeds within the placeholder text must be treated as line breaks when rendering the hint.
  @property({ type: String, reflect: true })
  placeholder = "";

  // A Boolean attribute which, if true, indicates that the textarea cannot be edited
  @property({ type: Boolean, reflect: true })
  readonly = false;

  // A Boolean which, if true, indicates that the textarea must have a value before the form can be submitted
  @property({ type: Boolean, reflect: true })
  required = false;

  // The number of visible text lines for the control.
  @property({ type: Number, reflect: true })
  rows = 2;

  // Specifies whether the <textarea> is subject to spell checking by the underlying browser/OS.
  @property({ type: Boolean, reflect: true })
  spellcheck = false;

  // The textarea's current value
  @property({ type: String })
  value = "";

  // The textarea's label
  @property({ type: String })
  label = "";

  //Invalid boolean to allow validity access from higher level form errors
  @property({ type: Boolean, reflect: true })
  invalid = false;

  // The textarea's error message
  @property({ type: String })
  validationMessage = "";

  // Prevents users from manualy changing the size of the textarea
  @property({ type: Boolean })
  nonresizeable = false;

  /**
   * Styles
   */
  static styles = [style];

  /**
   * Template
   */
  render() {
    return html`
      ${this.labelText}
      <textarea
        name="${this.name}"
        class="${classMap({
          invalid: this._invalidState,
        })}"
        ?autocomplete="${this.autocomplete}"
        ?autofocus="${this.autofocus}"
        cols="${this.cols}"
        ?disabled="${this.disabled}"
        maxlength="${this.maxlength}"
        minlength="${this.minlength}"
        placeholder="${this.placeholder}"
        ?readonly="${this.readonly}"
        ?required="${this.required}"
        ?aria-invalid="${this._invalidState}"
        aria-describedby="${this.name}-error"
        rows="${this.rows}"
        spellcheck="${this.spellcheck}"
        ?nonresizeable="${this.nonresizeable}"
        @blur="${this._handleBlur}"
        @invalid="${this._handleInvalid}"
        @input="${this._handleInput}"
      >
        ${this.value}
      </textarea
      >
      ${this.errorText}
    `;
  }

  firstUpdated() {
    // TODO(ryuhhnn): This isn't the best strategy for hydrating in the
    // correct error state. Come back to this to come up with better solution.
    this.requestUpdate();
  }

  get _el() {
    if (this.shadowRoot !== null) {
      return this.shadowRoot.querySelector("textarea");
    } else return null;
  }

  get labelText() {
    if (this.label !== "") {
      return html` <label for="cha-textarea">${this.label}</label> `;
    } else return nothing;
  }

  get errorText() {
    if (this.validationMessage !== "") {
      return html`
        <span class="error" id="${this.name}-error"
          >${this.validationMessage}</span
        >
      `;
    } else return nothing;
  }

  get validity() {
    if (this._el !== null) return this._el.validity;
    else return undefined;
  }

  get willValidate() {
    if (this._el !== null) return this._el.willValidate;
    else return false;
  }

  checkValidity() {
    if (this._el !== null) return this._el.checkValidity();
    else return false;
  }

  get _invalidState() {
    if (
      this.invalid ||
      this.validationMessage.length > 0 ||
      !this.checkValidity()
    ) {
      return true;
    } else return false;
  }

  _handleBlur() {
    this.checkValidity();
  }

  _handleInvalid() {
    this.validationMessage =
      this._el !== null ? this._el.validationMessage : "";
  }

  _handleInput(e) {
    this.value = e.target.value;
  }
}

if (!window.customElements.get("chameleon-textarea"))
  window.customElements.define("chameleon-textarea", ChameleonTextarea);
