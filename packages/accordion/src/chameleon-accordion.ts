import {
  LitElement,
  TemplateResult,
  customElement,
  property,
  svg,
  SVGTemplateResult,
  html
} from "lit-element";
import style from "./chameleon-accordion-style";
import "@chameleon-ds/button/src/chameleon-button";

@customElement("chameleon-accordion")
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

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <div class="header">
        <slot name="header"></slot>
        <chameleon-button
          class="toggle-icon ${this.expanded ? "rotated" : ""}"
          icon-only
          theme="text"
          @click="${this.handleToggle}"
          >${this.toggleIcon}</chameleon-button
        >
      </div>
      <div class="panel ${this.expanded ? "expanded" : "collapsed"}">
        <slot name="panel"></slot>
      </div>
    `;
  }

  handleToggle(): void {
    console.log("clicked");
    this.dispatchEvent(
      new CustomEvent("expanded-changed", {
        detail: {
          value: this.dataset.index
        },
        bubbles: true,
        composed: true
      })
    );
  }

  get toggleIcon(): SVGTemplateResult | TemplateResult {
    const slots = Array.from(this.querySelectorAll("[slot]"));
    const toggleIcon = slots.find(slot => slot.slot === "toggle-icon");

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
    else
      return html`
        <slot name="toggle-icon"></slot>
      `;
  }
}
