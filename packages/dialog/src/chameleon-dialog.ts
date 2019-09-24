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

@customElement("chameleon-dialog")
export default class ChameleonDialog extends LitElement {
  /**
   * Properties
   */
  @property({ type: Boolean, reflect: true })
  opened = false;
  @property({ type: String, reflect: true })
  theme = "primary";

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
          dialog: true,
          opened: !this.opened,
          closed: this.opened
        })}"
      >
        <h1 class="title ">Title</h1>
        <p class="content">This is a dialog</p>
        <div class="buttons">
          <button
            class="accept"
            @click="${() =>
              this.dispatchEvent(new CustomEvent("dialog.accept"))}"
          >
            Ok
          </button>
          <button
            class="cancel"
            @click="${() =>
              this.dispatchEvent(new CustomEvent("dialog.cancel"))}"
          >
            Cancel
          </button>
        </div>
      </div>
    `;
  }
}
