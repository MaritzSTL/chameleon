import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property
} from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import base from "@chameleon-ds/theme/base";
import style from "@chameleon-ds/theme/base/dialog";
import "../../card/src/chameleon-card";

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
}
