import {
  LitElement,
  TemplateResult,
  property,
  html,
  PropertyValues,
} from "lit-element";
import style from "./chameleon-tabs-style";

export default class ChameleonTabs extends LitElement {
  constructor() {
    super();
    this.addEventListener(
      "chameleon.tabs.selected-changed",
      this._handleSelectedChanged
    );
  }

  /**
   * Lifecycle Methods
   */
  firstUpdated() {
    // Index tabs
    const tabs = Array.from(this.querySelectorAll("chameleon-tab"));
    if (tabs.length <= 0)
      throw new Error(
        "<chameleon-tabs> must have at least one <chameleon-tab> element"
      );
    tabs.forEach((tab, i) => tab.setAttribute("data-index", i.toString()));

    // If <chameleon-tabs> has an id, allow the selected tab index to
    // be set using query params: ?tabs_<ID>=1
    if (this.id) {
      const params = new URLSearchParams(window.location.search);
      if (params.has(`tabs_${this.id}`)) {
        const index = parseInt(params.get(`tabs_${this.id}`)!);
        this.selected = index <= tabs.length - 1 ? index : 0;
      }
    }
  }

  updated(changedProperties: PropertyValues) {
    if (changedProperties.has("selected")) {
      const tabs = Array.from(this.querySelectorAll("chameleon-tab"));

      tabs.forEach((tab, i) => {
        tab.removeAttribute("active");
        if (i === this.selected) tab.setAttribute("active", "true");
      });
    }
  }

  /**
   * Properties
   */
  @property({ type: Number, reflect: true })
  selected = 0;

  /**
   * Styles
   */
  static styles = [style];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`<slot></slot>`;
  }

  _handleSelectedChanged(e: any): void {
    e.preventDefault();
    this.selected = parseInt(e.detail.value);
  }
}

if (!window.customElements.get("chameleon-tabs"))
  window.customElements.define("chameleon-tabs", ChameleonTabs);
