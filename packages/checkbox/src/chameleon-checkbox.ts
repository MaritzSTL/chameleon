import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property
} from "lit-element";
import { nothing } from "lit-html";
import style from "./chameleon-checkbox-style";

@customElement("chameleon-checkbox")
export default class ChameleonCheckbox extends LitElement {
  /**
   * Properties
   */

  // The checkbox's label
  @property({ type: String })
  label = "";

  // A Boolean which, if true, indicates that the checkbox is selected
  @property({ type: Boolean, reflect: true })
  checked = false;

  // The checkbox's current value
  @property({ type: String })
  value = "";

  // A Boolean attribute which, if true, indicates that the checkbox cannot be edited
  @property({ type: Boolean, reflect: true })
  readonly = false;

  //This checkbox's enabled/disabled status
  @property({ type: Boolean })
  disabled = false;

  /**
   * Styles
   */
  static styles = [style];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <input type="checkbox" ?checked="${this.checked}" value="${this.value}" />
      <span class="checkmark"></span>
      ${this.labelText}
    `;
  }

  get labelText(): string | object {
    if (this.label !== "") return this.label;
    else return nothing;
  }
}
