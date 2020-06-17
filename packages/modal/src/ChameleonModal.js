import { LitElement, html, property } from "lit-element";
import { nothing, svg } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import { ChameleonModalStyle } from "./ChameleonModalStyle.js";
import "@chameleon-ds/card/chameleon-card";
import "@chameleon-ds/button/chameleon-button";

export class ChameleonModal extends LitElement {
  /**
   * Properties
   */
  @property({ type: Boolean, reflect: true })
  open = false;

  // Card has a close icon
  @property({ type: Boolean, reflect: true })
  dismissible = false;

  @property({ type: Boolean, reflect: true })
  fullScreen = false;

  /**
   * Styles
   */
  static styles = [ChameleonModalStyle];

  /**
   * Template
   */
  render() {
    return html`
      <div
        class="${classMap({
          overlay: true,
          open: this.open,
          close: !this.open,
        })}"
      >
        <chameleon-card class="${this.fullScreen ? "full-screen" : ""}">
          <div class="header">
            <slot name="title"></slot>
            ${this.dismissible
              ? html`
                  <chameleon-button
                    theme="text"
                    class="close-icon"
                    icon-only
                    @click="${this._togglemodal}"
                  >
                    ${this.closeIcon}
                  </chameleon-button>
                `
              : nothing}
          </div>
          <div class="body">
            <slot name="body"> </slot>
          </div>
          <div class="footer">
            <slot name="left-button"></slot>
            <slot name="right-button"></slot>
          </div>
        </chameleon-card>
      </div>
    `;
  }

  _togglemodal() {
    this.open = !this.open;
    const e = new CustomEvent("toggle-modal", {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(e);
  }

  get closeIcon() {
    const slots = Array.from(this.querySelectorAll("[slot]"));
    const closeIcon = slots.find((slot) => slot.slot === "close-icon");

    if (closeIcon === undefined)
      return svg`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
    else return html` <slot name="close-icon"></slot> `;
  }
}
