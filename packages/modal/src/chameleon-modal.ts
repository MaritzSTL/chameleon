import { LitElement, TemplateResult, html, property } from "lit-element";
import { nothing, svg, SVGTemplateResult } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import style from "./chameleon-modal-style";
import "@chameleon-ds/card";
import "@chameleon-ds/button";

export default class Chameleonmodal extends LitElement {
  /**
   * Properties
   */
  @property({ type: Boolean, reflect: true })
  open = false;

  // Card has an icon
  @property({ type: Boolean, reflect: true })
  "icon" = false;

  // Card has a close icon
  @property({ type: Boolean, reflect: true })
  "dismissible" = false;

  // Card has a close icon
  @property({ type: Boolean, reflect: true })
  "canGoBack" = false;

  @property({ type: Boolean, reflect: true })
  "fullScreen" = false;

  /**
   * Styles
   */
  static styles = [style];

  /**
   * Template
   */
  render(): TemplateResult {
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
          ${
            this.dismissible
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
              : nothing
          }
        </div>
        <hr/>
        <div class="body">
            <slot></slot>
        </div>
            <div class="footer">
            <chameleon-button
                    theme="text"
                    class="close-bottom"
                    @click="${this._togglemodal}"
                  >
                  Close
                    ${this.closeIcon}
                  </chameleon-button>
                  <chameleon-button
                    theme="primary"
                    class="continue"
                    @click="${this._handleContinue}"
                  >
                  Continue
                  </chameleon-button>
            </div>
          </div>
      </chameleon-card>
    `;
  }

  _togglemodal(): void {
    this.open = !this.open;
    const e = new CustomEvent("toggle-modal", {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(e);
  }

  _handleContinue(): void {
    this.open = !this.open;
    const e = new CustomEvent("chameleon.modal.continue", {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(e);
  }

  _goBack(): void {
    const e = new CustomEvent("go-back", {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(e);
  }

  get closeIcon(): SVGTemplateResult | TemplateResult {
    const slots = Array.from(this.querySelectorAll("[slot]"));
    const closeIcon = slots.find((slot) => slot.slot === "close-icon");

    if (closeIcon === undefined)
      return svg`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
    else return html` <slot name="close-icon"></slot> `;
  }
}

if (!window.customElements.get("chameleon-modal"))
  window.customElements.define("chameleon-modal", Chameleonmodal);
