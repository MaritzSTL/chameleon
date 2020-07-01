import { LitElement, property, svg, html, query } from "lit-element";
import { classMap } from "lit-html/directives/class-map.js";
import { ChameleonAccordionStyle } from "./ChameleonAccordionStyle.js";

const uid = () => Math.random().toString(36).substr(2, 10);

export class ChameleonAccordion extends LitElement {
  /**
   * Styles
   */
  static styles = [ChameleonAccordionStyle];

  /**
   * Properties
   */
  @property({ type: Boolean, reflect: true })
  expanded = false;

  @property({ type: Boolean })
  caret = true;

  @property({ type: String })
  accentColor = null;

  @property({ type: String, reflect: true }) uid = "";

  // Whether or not this accordion is connected to a grouping <chameleon-accordions>
  @property({ type: Boolean })
  __connected = false;

  @query(".header") header;

  constructor() {
    super();
    this.uid = uid();
  }

  connectedCallback() {
    super.connectedCallback();
    const event = new CustomEvent("accordion-connected", {
      composed: true,
      bubbles: true,
      detail: {
        connected: false,
      },
    });

    this.dispatchEvent(event);

    // chameleon-accordions will update event if it connects
    this.__connected = event.detail.connected;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    const event = new CustomEvent("accordion-disconnected", {
      composed: true,
      bubbles: true,
    });
    this.dispatchEvent(event);
  }

  updated(changedProperties) {
    if (changedProperties.has("accentColor") && this.accentColor)
      this.shadowRoot.querySelector(
        ".header"
      ).style.borderLeft = `5px solid ${this.accentColor}`;

    if (
      changedProperties.has("accentColor") &&
      this.accentColor === "" &&
      this.accentColor !== undefined
    ) {
      this.shadowRoot.querySelector(
        ".header"
      ).style.borderLeft = `7px solid var(--color-primary, #2c6fb7)`;
    }

    if (changedProperties.has("expanded")) {
      this.__dispatchExpandedChangedEvent();
    }
  }

  __dispatchToggleEvent() {
    this.dispatchEvent(
      new CustomEvent("toggle-accordion", {
        bubbles: true,
        composed: true,
      })
    );
  }

  __dispatchExpandedChangedEvent() {
    this.dispatchEvent(new CustomEvent("expanded-changed"));
  }

  handleToggle() {
    this.__connected
      ? this.__dispatchToggleEvent()
      : (this.expanded = !this.expanded);
  }

  get toggleIconSlot() {
    return this.querySelector("[slot='toggle-icon']");
  }

  get defaultToggleIcon() {
    return svg`<svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    `;
  }

  get toggleIcon() {
    // Return custom-slotted icon with svg default if not present
    return this.toggleIconSlot
      ? html`<slot name="toggle-icon"></slot>`
      : this.defaultToggleIcon;
  }

  /**
   * Template
   */
  render() {
    return html`
      <div @click="${this.handleToggle}" class="header">
        <div class="header-toggle">
          ${this.caret
            ? html`<span
                class="${classMap({
                  "toggle-icon": true,
                  rotate: this.expanded,
                })}"
                >${this.toggleIcon}
              </span>`
            : ""}
          <slot name="header"></slot>
        </div>
        <slot name="subheader"></slot>
      </div>
      <div class="panel ${this.expanded ? "expanded" : "collapsed"}">
        <slot name="panel"></slot>
      </div>
    `;
  }
}
