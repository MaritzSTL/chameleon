import { LitElement, html, property } from "lit-element";
import { ChameleonToastStyle } from "./ChameleonToastStyle.js";

export class ChameleonToast extends LitElement {
  /**
   * Lifecycle Methods
   */
  updated(changedProperties) {
    if (changedProperties.has("backgroundColor")) {
      this.style.backgroundColor = this.backgroundColor ?? "";
    }
  }

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
  backgroundColor = null;

  /**
   * Styles
   */
  static styles = [ChameleonToastStyle];

  /**
   * Template
   */
  render() {
    return html`
      <div class="toast-text" style="color: ${this.color};">
        <slot name="toast-text">
          This website uses cookies to remember you and improve your experience.
          By using our site, you accept our use of cookies.
        </slot>
      </div>
      <a class="close-icon" @click="${this.closeToast}">
        <slot name="close-icon">x</slot>
      </a>
    `;
  }

  closeToast() {
    this.showCloseable = false;

    this.dispatchEvent(
      new CustomEvent("close-toast", {
        bubbles: true,
        composed: true,
      })
    );
  }
}
