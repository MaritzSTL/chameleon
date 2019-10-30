import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property,
  svg,
  SVGTemplateResult
} from "lit-element";
import { nothing } from "lit-html";
import style from "./chameleon-alert-style";

@customElement("chameleon-alert")
export default class ChameleonAlert extends LitElement {
  /**
   * Styles
   */
  static styles = [style];

  /**
   * Properties
   */
  @property({ type: Boolean, reflect: true })
  dismissable = true;

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <slot name="message"></slot>
      ${this.dismissable
        ? html`
            <div class="icon-wrapper layout_column flex justify_content-center">
              <span @click="${this.handleClose}">
                ${this.alertIcon}
              </span>
            </div>
          `
        : nothing}
    `;
  }

  handleClose(): void {
    this.dispatchEvent(new CustomEvent("close"));
  }

  get alertIcon(): SVGTemplateResult {
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
}
