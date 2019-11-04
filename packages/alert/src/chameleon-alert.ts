import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property,
  svg,
  SVGTemplateResult
} from "lit-element";
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
  @property({ type: String })
  message = "this is a good alert box I built";

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <div class="alert">
        <span class="icon">${this.alertIcon}</span>
        <span
          class="closebtn"
          onclick="this.parentElement.style.display='none';"
          >&times;</span
        >
        <span class="message">${this.message}</span>
      </div>
    `;
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
