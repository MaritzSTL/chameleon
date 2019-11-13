import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property
} from "lit-element";
import { nothing } from "lit-html";
import style from "./chameleon-accordion-style";
import { AccordionItem } from "../types";

@customElement("chameleon-accordion")
export default class ChameleonAccordion extends LitElement {
  /**
   * Styles
   */
  static styles = [style];

  /**
   * Properties
   */
  // the index of the currently opened item
  @property({ type: Number, reflect: true })
  itemExpanded = null;

  // An array of the items to be included in the accordion
  @property({ type: Array })
  accordionItems = <Array<AccordionItem>>[];

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
          item =>
            html`
              <div
                class="header"
                id="header${this.index}"
                role="button"
                aria-expanded=${item.panelExpanded}
                @click="toggle"
              >
                ${item.header}
                <slot name="icon"></slot>
              </div>
              <div class="panel" id="panel${this.index}">
                ${item.panel}
              </div>
            `
        )
      : nothing;
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
