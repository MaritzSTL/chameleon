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
export default class Chameleonaccordion extends LitElement {
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
      <div>
        ${this._accordionItems}
      </div>
    `;
  }

  get _accordionItems(): Array<AccordionItem> {
    return this.accordionItems.length > 0
      ? this.accordionItems.map(
          item =>
            html`
              <div
                class="header"
                id="header${item.index}"
                role="button"
                aria-expanded=${item.panelExpanded}
                @click="toggle"
              >
                <slot name="header"></slot>
                <slot name="icon"></slot>
              </div>
              <div class="panel" id="panel${item.index}">
                <slot name="panel"></slot>
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
