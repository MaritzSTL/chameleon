import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property
} from "lit-element";
import { nothing, svg, SVGTemplateResult } from "lit-html";
import style from "./chameleon-sheet-style";
import "@chameleon-ds/button/src/chameleon-button";

@customElement("chameleon-sheet")
export default class ChameleonSheet extends LitElement {
  constructor() {
    super();
    document.body.appendChild(this);
  }

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

  // The sheet object
  @property({ type: Object })
  sheetEl: any;

  /**
   * Styles
   */
  static styles = [style];

  disconnectedCallback(): void {
    document.body.removeChild(this);
  }

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
          @click="${this._toggleSheet}"
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

  _toggleSheet(): void {
    this.sheetOpened = !this.sheetOpened;
    const e = new CustomEvent("toggle-sheet", {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(e);
  }

  // get sheet(): HTMLElement {
  //   const sheet = document.createElement("chameleon-sheet");
  //   sheet.style.top = "172px";
  //   sheet.style.maxWidth = "620px";

  //   return sheet;
  // }

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
