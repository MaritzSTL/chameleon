import { LitElement, html, svg } from "lit-element";
import { ChameleonAlertStyle } from "./ChameleonAlertStyle";

export default class ChameleonAlert extends LitElement {
  /**
   * Styles
   */
  static styles = [ChameleonAlertStyle];

  /**
   * Template
   */
  render() {
    return html`
      <span class="icon">${this.alertIcon}</span>
      <span class="message"><slot></slot></span>
      <span class="closebtn" @click="${this.handleClose}">
        ${this.closeIcon}
      </span>
    `;
  }

  handleClose() {
    this.remove();
  }

  get alertIcon() {
    return svg`
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          class="feather feather-alert-circle">
            <circle cx="12" cy="12" r="10">
            </circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
    `;
  }

  get closeIcon() {
    return svg`
      <svg xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        class="feather feather-x">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    `;
  }
}
