import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property
} from "lit-element";
import style from "./chameleon-loader-style";
import materializeLoaderStyle from "./materialize-loader-style";

@customElement("chameleon-loader")
export default class ChameleonLoader extends LitElement {
  /**
   * Styles
   */
  static styles = [style, materializeLoaderStyle];

  @property({ type: String, reflect: true })
  loader = "spinner";

  /**
   * Template
   */
  render(): TemplateResult {
    switch (this.loader) {
      case "ellipsis":
        return this.renderEllipsisLoader();
      case "spinner":
      default:
        return this.renderSpinnerLoader();
    }
  }

  renderEllipsisLoader(): TemplateResult {
    return html`
      <div class="ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    `;
  }

  renderSpinnerLoader(): TemplateResult {
    return html`
      <div class="spinner preloader-wrapper active">
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
