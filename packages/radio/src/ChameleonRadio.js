import { LitElement, html, property } from "lit-element";
import { nothing } from "lit-html";
import { ChameleonRadioStyle } from "./ChameleonRadioStyle.js";

export class ChameleonRadio extends LitElement {
  /**
   * Properties
   */

  // The radio's label
  @property({ type: String })
  label = "";

  @property({ type: String })
  name = "cha-radio";

  // A Boolean which, if true, indicates that the radio is selected
  @property({ type: Boolean, reflect: true })
  checked = false;

  // The radio's current value
  @property({ type: String })
  value = "";

  // A Boolean to disable radio button
  @property({ type: Boolean, reflect: true })
  disabled = false;

  // A Boolean attribute which, if true, indicates that the radio button cannot be edited
  @property({ type: Boolean, reflect: true })
  readonly = false;

  //Invalid boolean to allow validity access from higher level form errors
  @property({ type: Boolean, reflect: true })
  invalid = false;

  /**
   * Styles
   */
  static styles = [ChameleonRadioStyle];

  /**
   * Template
   */
  render() {
    return html`
      <input
        type="radio"
        name="${this.name}"
        ?checked="${this.checked}"
        value="${this.value}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        ?aria-invalid="${this.invalid}"
        aria-describedby="${this.name}-error"
      />
      <span class="checkmark ${this.disabled ? "disabled" : ""}"></span>
      ${this.labelText}
    `;
  }

  get labelText() {
    if (this.label !== "") return this.label;
    else return nothing;
  }
}
