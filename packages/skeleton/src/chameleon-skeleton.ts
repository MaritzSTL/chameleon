import { LitElement, TemplateResult, html, property } from "lit-element";
import style from "./chameleon-skeleton-style";

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
  static styles = [style];

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

if (!window.customElements.get("chameleon-skeleton"))
  window.customElements.define("chameleon-skeleton", ChameleonSkeleton);
