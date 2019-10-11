import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property
} from "lit-element";
import base from "@chameleon-ds/theme/base";
import style from "@chameleon-ds/theme/base/skeleton";

@customElement("chameleon-skeleton")
export default class ChameleonSkeleton extends LitElement {
  /**
   * Properties
   */
  @property({ type: Boolean, reflect: true })
  disabled = false;
  @property({ type: String, reflect: true })
  theme = "primary";
  @property({ type: String, reflect: true })
  height = "100%";
  @property({ type: String, reflect: true })
  width = "100%";

  /**
   * Styles
   */
  static styles = [base, style];

  /**
   * Template
   */
  render(): TemplateResult {
    //TODO: add linear gradient animation
    /*
      <defs>
        <mask id="animation">
          <rect x="0" y="0" width="${this.width}" height="${this.height}" rx="10" ry="10" fill="url(#shine)"/>
        </mask>
      </defs>
    */
    return html`
      <svg height="${this.height}" width="${this.width}">
        <rect
          class="rectangle"
          height="100%"
          width="100%"
          x="0"
          y="0"
          rx="10"
          ry="10"
        />
      </svg>
    `;
  }
}
