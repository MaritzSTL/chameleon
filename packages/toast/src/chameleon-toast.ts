import { LitElement, TemplateResult, customElement, html } from "lit-element";
import base from "@chameleon-ds/theme/base";
import style from "@chameleon-ds/theme/base/toast";

@customElement("chameleon-toast")
export default class ChameleonToast extends LitElement {
  /**
   * Properties
   */

  /**
   * Styles
   */
  static styles = [base, style];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <button @click="${this.myFunction}">Show Snackbar</button>
      <div id="snackbar">Some text some message..</div>
    `;
  }
  myFunction(): void {
    // Get the snackbar DIV
    const x = this.shadowRoot.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function() {
      x.className = x.className.replace("show", "");
    }, 3000);
  }
}
