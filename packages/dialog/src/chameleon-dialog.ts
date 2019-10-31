import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property
} from "lit-element";
import { nothing, svg, SVGTemplateResult } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import base from "@chameleon-ds/theme/base";
import style from "./chameleon-dialog-style";
import "../../card/src/chameleon-card";
import "@chameleon-ds/button/src/chameleon-button";

@customElement("chameleon-dialog")
export default class ChameleonDialog extends LitElement {
  /**
   * Properties
   */
  @property({ type: Boolean, reflect: true })
  open = true;

  // Card has an icon
  @property({ type: Boolean, reflect: true })
  "icon" = false;

  // Card has a close icon
  @property({ type: Boolean, reflect: true })
  "dismissible" = false;

  /**
   * Styles
   */
  static styles = [base, style];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <div
        class="${classMap({
          overlay: true,
          open: this.open,
          close: !this.open
        })}"
      >
        <chameleon-card>
          <div class="dialog">
          ${
            this.dismissible
              ? html`
                  <chameleon-button
                    theme="text"
                    class="close-icon"
                    icon-only
                    @click="${this._toggleDialog}"
                  >
                    ${this.closeIcon}
                  </chameleon-button>
                `
              : nothing
          }
          
        </div>
            <slot name="icon"></slot>
            <slot name="title"></slot>
            <slot></slot>
            <div class="actions">
              <slot name="accept-action"></slot>
              <slot name="decline-action"></slot>
            </div>
          </div>
        </div>
      </chameleon-card>
    `;
  }

  _toggleDialog(): void {
    this.open = !this.open;
    const e = new CustomEvent("toggle-dialog", {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(e);
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
