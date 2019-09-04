import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property
} from "lit-element";
import { nothing } from "lit-html";
import base from "@chameleon-ds/theme/base";
import style from "@chameleon-ds/theme/base/radio";

@customElement("chameleon-radio")
export default class ChameleonRadio extends LitElement {
  /**
   * Properties
   */

  // The radio's label
  @property({ type: String })
  label = "";

  // A Boolean which, if true, indicates that the radio is selected
  @property({ type: Boolean, reflect: true })
  checked = false;

  // The radio's current value
  @property({ type: String })
  value = "";

  // A Boolean to disable radio button
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /**
   * Styles
   */
  static styles = [base, style];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <input
        type="radio"
        ?checked="${this.checked}"
        value="${this.value}"
        ?disabled="${this.disabled}"
      />
      <span class="checkmark ${this.disabled ? "disabled" : ""}"></span>
      ${this.labelText}
    `;
  }

  get labelText(): string | object {
    if (this.label !== "") return this.label;
    else return nothing;
  }
}
