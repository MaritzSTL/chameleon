import { LitElement, TemplateResult, customElement, html } from "lit-element";
import base from "@chameleon-ds/theme/base";
import style from "./chameleon-spinner-style";
import { materializeLoaderStyle } from "./materialize-loader-style";

@customElement("chameleon-spinner")
export default class ChameleonSpinner extends LitElement {
  /**
   * Properties
   */

  /**
   * Styles
   */
  static styles = [materializeLoaderStyle, base, style];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <div class="preloader-wrapper active">
        <div class="spinner-layer">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div>
          <div class="gap-patch">
            <div class="circle"></div>
          </div>
          <div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    `;
  }
}
