import {
  LitElement,
  TemplateResult,
  customElement,
  property,
  html
} from "lit-element";
import { nothing } from "lit-html";
import base from "@chameleon-ds/theme/base";
import style from "@chameleon-ds/theme/base/tabs";

@customElement("chameleon-tabs")
export default class ChameleonTabs extends LitElement {
  /**
   * Lifecycle Methods
   */
  firstUpdated() {
    const tabs = Array.from(this.querySelectorAll("chameleon-tab"));

    if (!this.selectedTab && tabs)
      this.selectedTab = (<HTMLElement>tabs[0]).dataset.name;
  }

  /**
   * Properties
   */
  @property({ type: String, reflect: true })
  initial;

  @property({ type: String })
  selectedTab;

  /**
   * Styles
   */
  static styles = [base, style];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <header>${this.tabs}</header>
      ${this.selected}
    `;
  }

  get tabs(): Array<TemplateResult> {
    const tabs = Array.from(this.querySelectorAll("chameleon-tab"));

    if (tabs.length <= 0)
      throw new Error(
        "<chameleon-tabs> must have at least one <chameleon-tab> element"
      );

    return tabs.map(tab => {
      const tabName = tab.getAttribute("name");

      return html`
        <div class="tab" data-name="${tabName}" @click="${this.toggleTab}">
          ${tabName}
        </div>
      `;
    });
  }

  get selected(): TemplateResult | object {
    const tabs = Array.from(this.querySelectorAll("chameleon-tab"));

    if (tabs.length <= 0) return nothing;

    const selected = tabs.find(
      tab => tab.getAttribute("name") === this.selectedTab
    );

    return selected ? selected : tabs[0];
  }

  toggleTab(e: MouseEvent): void {
    this.selectedTab = (<HTMLElement>e.target).dataset.name;
  }
}
