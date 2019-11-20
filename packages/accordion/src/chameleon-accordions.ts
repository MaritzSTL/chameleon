import {
  LitElement,
  TemplateResult,
  customElement,
  property,
  html
} from "lit-element";
import style from "./chameleon-accordions-style";

@customElement("chameleon-accordions")
export default class ChameleonAccordions extends LitElement {
  constructor() {
    super();
    this.addEventListener("expanded-changed", this._handleExpandedChanged);
  }

  /**
   * Lifecycle Methods
   */
  firstUpdated() {
    const accordions = Array.from(this.querySelectorAll("chameleon-accordion"));

    if (accordions.length <= 0)
      throw new Error(
        "<chameleon-accordions> must have at least one <chameleon-accordion> element"
      );

    accordions.forEach((accordion, i) =>
      accordion.setAttribute("data-index", i.toString())
    );
  }

  /**
   * Properties
   */
  @property({ type: Number })
  expandedIndex = -1;

  /**
   * Styles
   */
  static styles = [style];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }

  _handleExpandedChanged(e: any): void {
    e.preventDefault();
    this.expandedIndex = parseInt(e.detail.value);

    const accordions = Array.from(this.querySelectorAll("chameleon-accordion"));

    accordions.forEach((accordion, i) => {
      if (i === this.expandedIndex && accordion.hasAttribute("expanded")) {
        accordion.removeAttribute("expanded");
        return;
      }
      accordion.removeAttribute("expanded");
      if (accordion.hasAttribute("expanded")) return;
      if (i === this.expandedIndex) accordion.setAttribute("expanded", "true");
    });
  }
}
