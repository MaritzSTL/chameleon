import { LitElement, TemplateResult, customElement, html } from "lit-element";
import style from "./chameleon-loader-style";

@customElement("chameleon-loader")
export default class ChameleonLoader extends LitElement {
  /**
   * Styles
   */
  static styles = [style];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <div class="ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    `;
  }
}
