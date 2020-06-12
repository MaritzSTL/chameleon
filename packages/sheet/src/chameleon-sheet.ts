import { OverlayMixin } from "@lion/overlays";
import { LitElement, html, property } from "lit-element";

export class ChameleonSheet extends OverlayMixin(LitElement) {
  __toggle!: () => void;

  @property({ type: Boolean }) trapsKeyboardFocus = true;
  @property({ type: Boolean }) hasBackdrop = true;
  @property({ type: Boolean }) hidesOnOutsideClick = true;
  @property({ type: Boolean }) hidesOnEsc = true;
  @property({ type: Boolean }) preventsScroll = true;

  // eslint-disable-next-line class-methods-use-this
  _defineOverlayConfig() {
    return {
      placementMode: "global",
      viewportConfig: {
        placement: "right",
      },
      handleAccessibility: true,
      hasBackdrop: this.hasBackdrop,
      hidesOnEsc: this.hidesOnEsc,
      hidesOnOutsideClick: this.hidesOnOutsideClick,
      preventsScroll: this.preventsScroll,
      trapsKeyboardFocus: this.trapsKeyboardFocus,
    };
  }

  _setupOpenCloseListeners() {
    super._setupOpenCloseListeners();
    this.__toggle = () => {
      this.opened = !this.opened;
    };

    if (this._overlayInvokerNode) {
      this._overlayInvokerNode.addEventListener("click", this.__toggle);
    }
  }

  _teardownOpenCloseListeners() {
    super._teardownOpenCloseListeners();

    if (this._overlayInvokerNode) {
      this._overlayInvokerNode.removeEventListener("click", this.__toggle);
    }
  }

  render() {
    return html`
      <slot name="invoker"></slot>
      <slot name="_overlay-shadow-outlet"></slot>
      <div id="overlay-content-node-wrapper">
        <slot name="content"></slot>
      </div>
    `;
  }
}

if (!window.customElements.get("chameleon-sheet")) {
  customElements.define("chameleon-sheet", ChameleonSheet as any);
}
