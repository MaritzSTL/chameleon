import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property
} from "lit-element";
import base from "@chameleon-ds/theme/base";
import style from "@chameleon-ds/theme/base/sheet";

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
  __sheetOpened = true;

  /**
   * Styles
   */
  static styles = [base, style];

  /**
   * Template
   */
  render(): TemplateResult {
    const itemCategory = this.subHeader
      ? html`
          <div class="item-category">
            <p class="p-small gray-darkest">${this.subHeader}</p>
          </div>
        `
      : "";
    return html`
      <div
        class="side-nav-wrapper
        ${this.__sheetOpened ? "" : "collapsed"}"
      >
        <div class="side-menu">
          <div class="sheet-header">
            <div class="item-name-container">
              <div class="item-name">
                <h3 class="admin">${this.header}</h3>
              </div>
              <div class="close-icon" @click="${this._closeSheet}"></div>
            </div>
            ${itemCategory}
            <slot name="details"></slot>
          </div>
          <slot name="actions"></slot>
          <slot name="content"></slot>
        </div>
      </div>
    `;
  }

  _openSheet(): void {
    this.__sheetOpened = true;
  }

  _closeSheet(): void {
    this.__sheetOpened = false;
    const e = new CustomEvent("mtz.closesheet", {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(e);
  }
}
