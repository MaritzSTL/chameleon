import { LitElement, property, svg, html } from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import style from "./chameleon-accordion-style.js";

export default class ChameleonAccordion extends LitElement {
  /**
   * Styles
   */
  static styles = [style];

  /**
   * Properties
   */
  @property({ type: Boolean, reflect: true })
  expanded = false;

  @property({ type: Boolean })
  caret = true;

  @property({ type: String })
  accentColor = null;

  /**
   * Template
   */
  render() {
    return html`
      <div @click="${this.handleToggle}" class="header">
        <div class="header-toggle">
          ${this.caret
            ? html`<span
                class="${classMap({
                  "toggle-icon": true,
                  rotate: this.expanded,
                })}"
                >${this.toggleIcon}
              </span>`
            : ""}
          <slot name="header"></slot>
        </div>
        <slot name="subheader"></slot>
      </div>
      <div class="panel ${this.expanded ? "expanded" : "collapsed"}">
        <slot name="panel"></slot>
      </div>
    `;
  }

  updated(changedProperties) {
    if (changedProperties.has("accentColor") && this.accentColor)
      this.shadowRoot.querySelector(
        ".header"
      ).style.borderLeft = `5px solid ${this.accentColor}`;

    if (
      changedProperties.has("accentColor") &&
      this.accentColor === "" &&
      this.accentColor !== undefined
    ) {
      this.shadowRoot.querySelector(
        ".header"
      ).style.borderLeft = `7px solid var(--color-primary)`;
    }
  }

  handleToggle() {
    this.dispatchEvent(
      new CustomEvent("chameleon.accordions.expanded-changed", {
        detail: {
          value: this.dataset.index,
          expanded: this.expanded,
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  get toggleIcon() {
    const slots = Array.from(this.querySelectorAll("[slot]"));
    const toggleIcon = slots.find((slot) => slot.slot === "toggle-icon");

    if (toggleIcon === undefined)
      return svg`
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      `;
    else return html`<slot name="toggle-icon"></slot>`;
  }
}

if (!window.customElements.get("chameleon-accordion"))
  window.customElements.define("chameleon-accordion", ChameleonAccordion);
