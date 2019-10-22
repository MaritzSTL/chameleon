import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property
} from "lit-element";
import base from "@chameleon-ds/theme/base";
import style from "@chameleon-ds/theme/base/toast";

@customElement("chameleon-toast")
export default class ChameleonToast extends LitElement {
  /**
   * Properties
   */

  // The font color of the toast
  @property({ type: String })
  color = "";

  // A Boolean which, if true, the toast is visible
  @property({ type: Boolean, reflect: true })
  showCloseable = true;

  // The background color of the toast
  @property({ type: String })
  backgroundColor = "";

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
        id="toast"
        class="${this.showCloseable ? "show-closeable" : ""}"
        style="background-color: ${this.backgroundColor}"
      >
        <div class="toast-text" style="color: ${this.color};">
          <slot name="toast-text">
            This website uses cookies to remember you and improve your
            experience. By using our site, you accept our use of cookies.
          </slot>
        </div>
        <a class="closed-icon" @click="${this.closeToast}">
          <slot name="closed-icon">x</slot>
        </a>
      </div>
    `;
  }

  closeToast() {
    const x = this.shadowRoot.getElementById("toast");
    x.className = x.className.replace("show-closeable", "");
    this.dispatchEvent(
      new CustomEvent("close-toast", {
        bubbles: true,
        composed: true
      })
    );
  }
}
