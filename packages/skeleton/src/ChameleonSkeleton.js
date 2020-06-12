import { LitElement, html, property, svg } from "lit-element";
import { ChameleonSkeletonStyle } from "./ChameleonSkeletonStyle.js";

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

  @property({ type: Number, reflect: true })
  cHeight = 50;

  /**
   * Styles
   */
  static styles = [ChameleonSkeletonStyle];

  /**
   * Template
   */
  render() {
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
        ${this.theme === "primary"
          ? svg`
        <rect
          class="rectangle"
          height="100%"
          width="100%"
          x="0"
          y="0"
          rx="10"
          ry="10"
        />
      `
          : this.theme === "secondary"
          ? svg`
    <circle class="circle" cx="${this.circleRadius}" cy="${this.circleRadius}" r="${this.circleRadius}"/>`
          : ``}
      </svg>
    `;
  }
  get circleRadius() {
    return this.cHeight * 0.5;
  }
}
