import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property
} from "lit-element";
import { nothing } from "lit-html";
import style from "./chameleon-switch-style";

@customElement("chameleon-switch")
export default class ChameleonSwitch extends LitElement {
  /**
   * Properties
   */

  // The switch's label
  @property({ type: String })
  label = "";

  // A Boolean which, if true, indicates that the switch is selected
  @property({ type: Boolean, reflect: true })
  checked = false;

  // A Boolean attribute which, if true, indicates that the switch cannot be edited
  @property({ type: Boolean, reflect: true })
  readonly = false;

  // The switch's current value
  @property({ type: String })
  value = "";

  /**
   * Styles
   */
  static styles = [style];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <div class="switch">
        <input type="radio" ?checked="${this.checked}" value="${this.value}" />
        <span class="slider"></span>
      </div>
      ${this.labelText}
    `;
  }

  get labelText(): string | object {
    if (this.label !== "") return this.label;
    else return nothing;
  }
}
