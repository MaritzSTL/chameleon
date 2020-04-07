import { LitElement, TemplateResult, html, property } from "lit-element";
import style from "./chameleon-progress-bar-style";

export default class ChameleonProgressBar extends LitElement {
  /**
   * Properties
   */
  @property({ type: Number, reflect: true })
  percent = undefined;

  @property({ type: Number, reflect: true })
  total = 0;

  @property({ type: Number, reflect: true })
  completed = 0;

  @property({ type: String, reflect: true })
  label = "";

  /**
   * Styles
   */
  static styles = [style];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <div>
        <div class="background">
          <div
            class="progress-bar"
            style="width:${this.percent !== undefined
              ? this.percent
              : this.completed > 0
              ? (this.completed / this.total) * 100
              : 0}%"
          ></div>
        </div>
        <label class="total-item-label">
          ${this.total > 0 ? this.completed : ""}
        </label>
        <label>
          ${this.total > 0
            ? " of " + this.total + " " + this.label
            : this.label}
        </label>
      </div>
    `;
  }
}

if (!window.customElements.get("chameleon-progress-bar"))
  window.customElements.define("chameleon-progress-bar", ChameleonProgressBar);
