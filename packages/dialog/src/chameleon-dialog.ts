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
import "../../button/src/chameleon-button";
import "../../card/src/chameleon-card";

@customElement("chameleon-dialog")
export default class ChameleonDialog extends LitElement {
  /**
   * Properties
   */
  @property({ type: Boolean, reflect: true })
  opened = false;

  @property({ type: String, reflect: true })
  theme = "primary";

  // Card has an icon
  @property({ type: Boolean, reflect: true })
  "default-icon" = false;

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
          opened: !this.opened,
          closed: this.opened
        })}"
      >
        <chameleon-card>
          <div class="dialog">
            <slot name="default-icon"></slot>
            <slot name="title"></slot>
            <slot></slot>
            <slot name="actions"></slot>
          </div>
        </div>
      </chameleon-card>
    `;
  }
}
