import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property
} from "lit-element";
import { nothing } from "lit-html";
import style from "./chameleon-textarea-style";

@customElement("chameleon-textarea")
export default class ChameleonTextarea extends LitElement {
  /**
   * Properties
   */
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
  render(): TemplateResult {
    return html`
      ${this.labelText}
      <textarea
        name="cha-textarea"
        ?autocomplete="${this.autocomplete}"
        ?autofocus="${this.autofocus}"
        cols="${this.cols}"
        ?disabled="${this.disabled}"
        maxlength="${this.maxlength}"
        minlength="${this.minlength}"
        placeholder="${this.placeholder}"
        ?readonly="${this.readonly}"
        ?required="${this.required}"
        rows="${this.rows}"
        spellcheck="${this.spellcheck}"
        ?nonresizeable="${this.nonresizeable}"
        @blur="${this._handleBlur}"
        @invalid="${this._handleInvalid}"
        @input="${this._handleInput}"
      ></textarea>
      ${this.errorText}
    `;
  }

  get _el(): HTMLTextAreaElement | null {
    if (this.shadowRoot !== null) {
      return this.shadowRoot.querySelector("textarea");
    } else return null;
  }

  get labelText(): TemplateResult | object {
    if (this.label !== "") {
      return html`
        <label for="cha-textarea">${this.label}</label>
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

  private _handleBlur(): void {
    this.checkValidity();
  }

  private _handleInvalid(): void {
    this.validationMessage =
      this._el !== null ? this._el.validationMessage : "";
  }

  private _handleInput(e: InputEvent): void {
    this.value = (<HTMLTextAreaElement>e.target)!.value;
  }
}
