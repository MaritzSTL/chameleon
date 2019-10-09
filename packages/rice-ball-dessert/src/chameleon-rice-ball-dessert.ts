import {
  LitElement,
  css,
  TemplateResult,
  customElement,
  html
} from "lit-element";
import { styles as riceBallStyles } from "./chameleon-rice-ball-dessert-styles";

@customElement("chameleon-rice-ball-dessert")
export default class ChameleonCard extends LitElement {
  /**
   * Styles
   */
  static styles = [riceBallStyles];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <div class="bowl">
        <div class="back"></div>
        <div class="spoon">
          <div class="scoop"></div>
        </div>
        <div class="contents">
          <div class="syrup"></div>
          <div class="riceball uno">
            <div class="face"></div>
          </div>
          <div class="riceball dos">
            <div class="face"></div>
          </div>
          <div class="riceball tres">
            <div class="face"></div>
          </div>
        </div>
      </div>
    `;
  }
}
