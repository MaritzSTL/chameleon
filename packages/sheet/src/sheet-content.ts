import { LitElement, html, svg, css, property } from "lit-element";

export class SheetContent extends LitElement {
  protected static _defaultCloseIcon = svg`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;

  static get styles() {
    return [
      css`
        @keyframes sheet-slide {
          10% {
            transform: translateX(90%);
          }
          20% {
            transform: translateX(80%);
          }
          30% {
            transform: translateX(70%);
          }
          40% {
            transform: translateX(60%);
          }
          50% {
            transform: translateX(50%);
          }
          60% {
            transform: translateX(40%);
          }
          70% {
            transform: translateX(30%);
          }
          80% {
            transform: translateX(20%);
          }
          90% {
            transform: translateX(10%);
          }
          100% {
            transform: translateX(0);
          }
        }

        :host {
          height: 100%;
          background-color: #ffffff;
          transform: translateX(100%);
          -webkit-animation: sheet-slide 0.3s forwards;
          animation: sheet-slide 0.3s forwards;
        }

        .close-icon {
          display: flex;
          cursor: pointer;
          margin: 0;
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 10;
        }
      `,
    ];
  }
  @property({ type: Boolean, reflect: true }) dismissable = true;
  @property({ type: String, reflect: true }) width = "320px";

  close() {
    this.dispatchEvent(new Event("close-overlay", { bubbles: true }));
  }

  get defaultCloseIcon() {
    return html`
      <span class="close-icon" @click="${this.close}" aria-role="button">
        ${SheetContent._defaultCloseIcon}
      </span>
    `;
  }

  render() {
    return html`
      <style id="dynamicWidth">
        :host {
          width: ${this.width};
        }
      </style>
      ${this.dismissable ? this.defaultCloseIcon : ""}
      <slot> </slot>
    `;
  }
}

if (!window.customElements.get("sheet-content")) {
  customElements.define("sheet-content", SheetContent);
}
