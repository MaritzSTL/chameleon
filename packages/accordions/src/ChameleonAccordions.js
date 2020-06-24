import { LitElement, property, html } from "lit-element";
import { ChameleonAccordionsStyle } from "./ChameleonAccordionsStyle.js";

export class ChameleonAccordions extends LitElement {
  /**
   * Lifecycle Methods
   */
  constructor() {
    super();
    this.addEventListener("accordion-connected", this._registerAccordion);
    this.addEventListener("toggle-accordion", this._handleToggle);
    this.addEventListener("accordion-disconnected", this._unregisterAccordion);
  }
  /**
   * Properties
   */
  @property({ type: Array }) accordions = [];

  /**
   * Styles
   */
  static styles = [ChameleonAccordionsStyle];

  /**
   * Template
   */
  render() {
    return html`<slot></slot>`;
  }

  _registerAccordion(e) {
    this.accordions = [...this.accordions, e.target];
    e.detail.connected = true;
    e.preventDefault();
  }

  _unregisterAccordion(e) {
    this.accordions = [
      ...this.accordions.filter((accordion) => accordion.uid !== e.target.uid),
    ];
    e.preventDefault();
  }

  _handleToggle(e) {
    const accordionToToggle = this.accordions.find(
      (accordion) => accordion.uid === e.target.uid
    );
    accordionToToggle.expanded = !accordionToToggle.expanded;

    // if opening one, close all others
    if (accordionToToggle.expanded) {
      this.accordions
        .filter((accordion) => accordion !== accordionToToggle)
        .forEach((accordion) => (accordion.expanded = false));
    }
  }
}
