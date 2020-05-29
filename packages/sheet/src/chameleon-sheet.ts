import {
  LitElement,
  TemplateResult,
  PropertyValues,
  html,
  property,
} from "lit-element";
import { svg, SVGTemplateResult } from "lit-html";
import style from "./chameleon-sheet-style";
import "@chameleon-ds/button";

export default class ChameleonSheet extends LitElement {
  private static _defaultCloseIcon: SVGTemplateResult = svg`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;

  /**
   * Properties
   */

  // Boolean for open/closed sheet
  @property({ type: Boolean, reflect: true }) opened = false;
  @property({ type: String, reflect: true }) width = "320px";
  @property({ type: String, reflect: true }) sheetId = "";

  /**
   * Styles
   */
  static styles = [style];

  // createRenderRoot(): ShadowRoot {
  //   // Default behavior to play nice with Storybook when inside an iframe
  //   if (
  //     window.self !== window.top &&
  //     window.hasOwnProperty("__STORYBOOK_ADDONS")
  //   ) {
  //     return this.attachShadow({ mode: "open" });
  //   }

  //   // Place on document body so this is a "top-level" element.
  //   const mount = document.createElement("span");
  //   mount.setAttribute("sheet-mount", "unset");
  //   document.body.appendChild(mount);
  //   return this.attachShadow({ mode: "open" });
  // }

  constructor() {
    super();
    this.sheetId = String(Date.now());
  }

  firstUpdated() {
    document.body
      .querySelector("[sheet-mount='unset']")
      ?.setAttribute("sheet-mount", this.sheetId);
  }

  updated(changedProperties: PropertyValues): void {
    if (changedProperties.has("opened")) {
      this.dispatchEvent(
        new CustomEvent("sheetchange", {
          bubbles: true,
          composed: true,
        })
      );
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    const mount = document.body.querySelector(
      `[sheet-mount='${this.sheetId}']`
    );
    if (mount) {
      mount.parentElement?.removeChild(mount);
    }
  }

  open(): void {
    if (this.opened !== true) this.opened = true;
  }

  close(): void {
    if (this.opened !== false) this.opened = false;
  }

  /**
   * Closes sheet when any element with `data-sheet-close` inside
   * this sheet is clicked (includes all slotted content).
   *
   * @param e ClickEvent
   */
  _dataBehaviorClose(e: Event): void {
    let path = e.composedPath();
    for (let i = 0, l = path.length; i < l; i++) {
      let target = path[i];
      if (
        target instanceof HTMLElement &&
        target?.dataset?.hasOwnProperty("sheetClose")
      ) {
        this.close();
        e.stopPropagation();
        break;
      }
    }
  }

  /**
   * Template
   */
  render(): TemplateResult {
    // Please keep style tag here so we can have per-instance styling
    return html`
      <style>
        :host {
          width: ${this.width};
        }
      </style>
      <article @click="${this._dataBehaviorClose}">
        <slot name="close-icon">
          <chameleon-button
            class="close-icon"
            icon-only
            theme="text"
            data-sheet-close
            aria-role="button"
            >${ChameleonSheet._defaultCloseIcon}</chameleon-button
          >
        </slot>

        <slot></slot>
      </article>
    `;
  }
}

if (!window.customElements.get("chameleon-sheet"))
  window.customElements.define("chameleon-sheet", ChameleonSheet);
