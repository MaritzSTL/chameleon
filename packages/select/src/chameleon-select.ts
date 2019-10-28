import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property,
  svg,
  SVGTemplateResult
} from "lit-element";
import { repeat } from "lit-html/directives/repeat";
import { classMap } from "lit-html/directives/class-map";
import { nothing } from "lit-html";
import base from "@chameleon-ds/theme/base";
import style from "@chameleon-ds/theme/base/select";
import { SelectableOption, SelectionTarget } from "../types";
import { InputEvent, ClassList } from "@maritz/mtz-types";

@customElement("chameleon-select")
export default class ChameleonSelect extends LitElement {
  constructor() {
    super();
    document.addEventListener("click", this.closeOptionsList);
    document.addEventListener("chameleon-select.close", () => {
      this.active = false;
    });
  }

  /**
   * Lifecycle Events
   */
  firstUpdated(changedProperties): void {
    super.firstUpdated(changedProperties);
    if (this._value !== undefined) this.setSelection(this._value);
  }

  updated(changedProperties) {
    if (changedProperties.has("_value")) {
      this.setSelection(this._value);
    }

    if (changedProperties.has("options")) {
      // Set selected option to current value
      if (this.options.find(option => option.value === this._value)) {
        this.setSelection(this._value);
      }
      // Set selected option if any have selected: true
      // takes precedence over existing value
      this.options.forEach(option => {
        if (option.selected && option.selected === true) {
          this.setSelection(option);
        }
      });
    }
  }

  disconnectedCallback() {
    document.removeEventListener("click", this.closeOptionsList);
    document.removeEventListener("chameleon-select.close", () => {
      this.active = false;
    });
  }

  /**
   * Styles
   */
  static styles = [style, base];

  /**
   * Properties
   */
  @property({ type: Array }) options;
  @property({ type: Array }) filteredOptions = [];
  @property({ type: Array }) selectedOptions = [];
  @property({ type: String }) _value;
  @property({ type: Boolean }) active = false;
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) searchable = false;
  @property({ type: Boolean }) valid = true;

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <div
        class="${classMap({
          "chameleon-select": true,
          container: true,
          active: this.active
        })}"
        @click="${this.activateSelections}"
      >
        <div class="chameleon-select tags">
          ${this.renderedSelectedOptions}
        </div>
        <div class="chameleon-select select">
          ${this.selectCaret}
        </div>
        ${this.searchBar} ${this.optionsList}
      </div>
    `;
  }

  /**
   * The true canonical value of the selector
   * @return {Array<string> | string}
   */
  get value(): Array<string> | string {
    if (this.selectedOptions.length <= 1) {
      if (typeof this.selectedOptions[0] === "string") {
        // If the options are string values
        return this.selectedOptions[0];
      } else if (typeof this.selectedOptions[0] === "object") {
        // If the options are object values
        return this.selectedOptions[0].value;
      }
    } else if (this.selectedOptions.length > 1) {
      // Multiple select
    } else {
      return "";
    }
  }

  /**
   * Sets the canonical value of the selector
   */
  set value(value: Array<string> | string) {
    this._value = value;
  }

  /**
   * Returns the caret that is rendered as part of the dropdown
   * @return {TemplateResult}
   */
  get selectCaret(): TemplateResult {
    if (this.active === false) return this.carrotDown;
    if (this.active === true) return this.carrotUp;
    return this.carrotDown;
  }

  /**
   * Returns a list of rendered options that can be selected
   * @return {TemplateResult | Object}
   */
  get optionsList(): TemplateResult | Object {
    if (this.active === true) {
      if (typeof this.options[0] === "string") {
        // If the options are string values
        return html`
          <div class="chameleon-select options">
            <ul class="options__list">
              ${repeat(
                this.filteredOptions.length > 0
                  ? this.filteredOptions
                  : this.options,
                (option: SelectableOption) => html`
                  <li
                    class="options__option"
                    value="${option}"
                    @click="${this.addSelection}"
                  >
                    ${option}
                  </li>
                `
              )}
            </ul>
          </div>
        `;
      } else if (typeof this.options[0] === "object") {
        // If the options are object values
        return html`
          <div class="chameleon-select options">
            <ul class="options__list">
              ${repeat(
                this.filteredOptions.length > 0
                  ? this.filteredOptions
                  : this.options,
                (option: SelectableOption) => html`
                  <li
                    class="options__option"
                    value="${option.value}"
                    @click="${this.addSelection}"
                  >
                    ${option.preLabel ? option.preLabel : nothing}
                    <div class="options__option-labels">
                      <div class="options__option-group">
                        <span
                          class="options__option-label ${option.subLabel
                            ? "bold"
                            : ""}"
                          >${option.label}</span
                        >
                        ${option.subLabel
                          ? html`
                              <span class="options__option-subLabel">
                                ${option.subLabel}
                              </span>
                            `
                          : nothing}
                      </div>
                      ${option.postLabel
                        ? html`
                            <span class="options__option-postLabel">
                              ${option.postLabel}</span
                            >
                          `
                        : nothing}
                      ${option.startDateLabel || option.endDateLabel
                        ? html`
                            <div class="option_dates">
                              ${option.startDateLabel
                                ? html`
                                    <span
                                      class="options__option-startDateLabel"
                                    >
                                      Start Date: ${option.startDateLabel}</span
                                    >
                                  `
                                : nothing}
                              ${option.endDateLabel
                                ? html`
                                    <span class="options__option-endDateLabel">
                                      End Date: ${option.endDateLabel}</span
                                    >
                                  `
                                : nothing}
                            </div>
                          `
                        : nothing}
                    </div>
                  </li>
                `
              )}
            </ul>
          </div>
        `;
      }
    } else {
      return nothing;
    }
  }

  /**
   * Returns the rendered selected options
   * @return {TemplateResult}
   */
  get renderedSelectedOptions(): TemplateResult {
    if (this.selectedOptions.length > 0) {
      if (typeof this.selectedOptions[0] === "string") {
        // If the options are string values
        return html`
          <span class="chameleon-select options__option-selected">
            ${this.selectedOptions[0]}
          </span>
        `;
      } else if (typeof this.selectedOptions[0] === "object") {
        // If the options are object values
        const option = this.selectedOptions[0];
        return html`
          <span class="chameleon-select options__option-selected">
            ${option.preLabel ? option.preLabel : nothing}
            <div class="options__option-labels">
              <div class="options__option-group">
                <span
                  class="options__option-label ${option.subLabel ? "bold" : ""}"
                  >${option.label}</span
                >
                ${option.subLabel
                  ? html`
                      <span class="options__option-subLabel">
                        ${option.subLabel}
                      </span>
                    `
                  : nothing}
              </div>
              ${option.postLabel
                ? html`
                    <span class="options__option-postLabel">
                      ${option.postLabel}</span
                    >
                  `
                : nothing}
              ${option.startDateLabel || option.endDateLabel
                ? html`
                    <div class="option_dates">
                      ${option.startDateLabel
                        ? html`
                            <span class="options__option-startDateLabel">
                              Start Date: ${option.startDateLabel}</span
                            >
                          `
                        : nothing}
                      ${option.endDateLabel
                        ? html`
                            <span class="options__option-endDateLabel">
                              End Date: ${option.endDateLabel}</span
                            >
                          `
                        : nothing}
                    </div>
                  `
                : nothing}
            </div>
          </span>
        `;
      }
    } else {
      return html`
        <span class="chameleon-select placeholder">Select an option...</span>
      `;
    }
  }

  /**
   * Returns the rendered search bar if the searchable is equal to true
   * @return {TemplateResult | Object}
   */
  get searchBar(): TemplateResult | Object {
    if (this.active && this.searchable) {
      return html`
        <div class="chameleon-select search">
          <input
            class="chameleon-select search__input"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="true"
            type="text"
            @input="${this.handleSearch}"
          />
        </div>
      `;
    } else {
      return nothing;
    }
  }

  /**
   * Sets the component status to active rendering a list of selections
   */
  activateSelections(): void {
    if (!this.disabled) this.active = true;
  }

  /**
   * Adds the clicked selection to the selected options
   * @param {Event} e - Click event on a SelectionTarget
   */
  addSelection(e: Event): void {
    let value = (e
      .composedPath()
      .find((e: SelectionTarget) =>
        e.hasAttribute("value")
      ) as SelectionTarget).getAttribute("value");
    if (typeof this.options[0] === "object")
      value = this.options.find(
        option => String(option.value) === String(value)
      );
    this.filteredOptions = [];
    // We don't want this event to bubble up to chameleon-select otherwise
    // it will reopen the optionsList
    e.stopPropagation();
    this.selectedOptions = [value];

    // Dispatch a change event
    this.dispatchEvent(
      new CustomEvent("mtz.select", {
        detail: {
          value: this.value
        },
        bubbles: true,
        composed: true
      })
    );
    this.active = false;
  }

  /**
   * Directly sets the canonical value of the selector
   * @param {Array<string> | string} value - The canonical value to be set
   */
  setSelection(value: string | SelectableOption) {
    if (value === "" || value === undefined) return; // Early return if no value or empty value
    if (typeof this.options[0] === "string") {
      // If the options are string values
      const found = this.options.find(option => value === option);
      if (found === undefined)
        throw new Error("Value not found within the options array!");
      else this.selectedOptions = [found];
    } else if (typeof this.options[0] === "object") {
      // If the options are object values
      const found = this.options.find(
        option =>
          (value as SelectableOption).value === option.value ||
          (value as SelectableOption) === option.value
      );
      if (found === undefined)
        throw new Error("Value not found within the options array!");
      else this.selectedOptions = [found];
    }
  }

  /**
   * Clears the selected options
   */
  clearSelections(): void {
    this.selectedOptions = [];
  }

  /**
   * Handles search whenever any text is typed into the search field
   * @param {InputEvent} e - Event target that contains the search query
   */
  handleSearch(e: InputEvent): void {
    const query = e.target.value.toLowerCase();
    if (typeof this.options[0] === "string") {
      // If the options are string values
      this.filteredOptions = this.options.filter(option => {
        return option.toLowerCase().includes(query);
      });
    } else if (typeof this.options[0] === "object") {
      // If the options are object values
      this.filteredOptions = this.options.filter(option => {
        return option.label.toLowerCase().includes(query);
      });
    }
  }

  /**
   * Closes the selector when a user clicks anywhere except for inside
   * @param {Event} e - Click event
   */
  closeOptionsList(e: Event): void {
    if (
      e.composedPath &&
      e.composedPath()[0] &&
      (e.composedPath()[0] as ClassList).classList
    ) {
      const classes = Array.from((e.composedPath()[0] as ClassList).classList);

      if (classes.includes("chameleon-select") && !classes.includes("active")) {
        // Early return if the selector isn't open yet
        e.stopPropagation();
        return;
      } else if (!classes.includes("chameleon-select")) {
        // Close selector if click is anywhere but inside the selector
        this.dispatchEvent(new CustomEvent("chameleon-select.close"));
      }
    }
  }

  get carrotDown(): SVGTemplateResult {
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
      class="feather feather-chevron-down">
      <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
  `;
  }

  get carrotUp(): SVGTemplateResult {
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
      class="feather feather-chevron-up">
      <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
  `;
  }
}
