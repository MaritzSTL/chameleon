import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property,
  svg,
  SVGTemplateResult
} from "lit-element";
import { nothing } from "lit-html";
import style from "./chameleon-accordion-style";
import { AccordionItem } from "../types";
import { classMap } from "lit-html/directives/class-map";

@customElement("chameleon-accordion")
export default class ChameleonAccordion extends LitElement {
  /**
   * Styles
   */
  static styles = [style];

  /**
   * Properties
   */

  // An array of the items to be included in the accordion
  @property({ type: Array })
  accordionItems = <Array<AccordionItem>>[];

  // todo - have option to toggle all panels open

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <div class="accordion-container">
        ${this._accordionItems}
      </div>
    `;
  }

  get _accordionItems(): TemplateResult | object {
    return this.accordionItems.length > 0
      ? this.accordionItems.map(
          (item, index) =>
            html`
              <div
                class="header"
                id="header${index}"
                role="button"
                aria-expanded=${item.itemExpanded}
                @click="toggle"
              >
                ${item.header} ${this.expandIcon}
              </div>
              <div
                class="${classMap({
                  panel: true,
                  expanded: item.itemExpanded,
                  collapsed: !item.itemExpanded
                })}"
                id="panel${index}"
              >
                ${item.panel}
              </div>
            `
        )
      : nothing;
  }

  get expandIcon(): SVGTemplateResult {
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
  }
  // updated(changedProperties: PropertyValues) {
  //   if (changedProperties.has("accentColor") && this.accentColor !== "")
  //     this.style.borderTop = `7px solid ${this.accentColor}`;

  //   if (
  //     changedProperties.has("accentColor") &&
  //     this.accentColor === "" &&
  //     this.accentColor !== undefined
  //   ) {
  //     this.style.borderTop = `7px solid var(--color-primary)`;
  //   }
  // }
}
