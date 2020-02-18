import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property
} from "lit-element";
import { nothing, svg, SVGTemplateResult, render } from "lit-html";
import style from "./chameleon-sheet-style";
import "@chameleon-ds/button/src/chameleon-button";

@customElement("chameleon-sheet")
export default class ChameleonSheet extends LitElement {
  /**
   * Properties
   */
  // The sheet header
  @property({ type: String })
  header = "";

  // The sheet subheader
  @property({ type: String })
  subHeader = "";

  // Boolean for open/closed sheet
  @property({ type: Boolean, reflect: true })
  sheetOpened = false;

  /**
   * Styles
   */
  static styles = [style];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <header class="head-container">
        <chameleon-button
          class="close-icon"
          icon-only
          theme="text"
          @click="${this.close}"
          >${this.closeIcon}</chameleon-button
        >

        <h3 class="header">${this.header}</h3>

        <slot name="details"></slot>
      </header>

      <slot name="actions"></slot>
      ${this.subHeader
        ? html`
            <span class="sub-header">${this.subHeader}</span>
          `
        : nothing}
      <slot name="content"></slot>
    `;
  }

  open(): void {
    if (this.sheetOpened !== true) this.sheetOpened = true;
  }

  close(): void {
    if (this.sheetOpened !== false) this.sheetOpened = false;
  }

  updateSlot(slotName: string, content: TemplateResult): void {
    const slot = this.querySelector(`[slot="${slotName}"]`);

    if (slot) {
      render(content, slot);
    }
  }

  get closeIcon(): SVGTemplateResult | TemplateResult {
    const slots = Array.from(this.querySelectorAll("[slot]"));
    const closeIcon = slots.find(slot => slot.slot === "close-icon");

    if (closeIcon === undefined)
      return svg`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
    else
      return html`
        <slot name="close-icon"></slot>
      `;
  }
}
