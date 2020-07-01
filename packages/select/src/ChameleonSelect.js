import { LitElement, html, property, svg } from "lit-element";
import { repeat } from "lit-html/directives/repeat";
import { classMap } from "lit-html/directives/class-map";
import { nothing } from "lit-html";
import { ChameleonSelectStyle } from "./ChameleonSelectStyle.js";

export class ChameleonSelect extends LitElement {
  firstUpdated() {
    document.addEventListener("click", this.closeOptionsList.bind(this));
  }

  disconnectedCallback() {
    document.removeEventListener("click", this.closeOptionsList.bind(this));
  }

  /**
   * Styles
   */
  static styles = [ChameleonSelectStyle];

  /**
   * Properties
   */
  @property({ type: Array })
  options = [];

  @property({ type: String })
  name = "cha-multiselect";

  @property({ type: Array })
  filteredOptions = [];

  @property({ type: Object })
  selectedOption = {};

  @property({ type: String })
  placeholder = "";

  @property({ type: Boolean, reflect: true })
  active = false;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean, reflect: true })
  readonly = false;

  @property({ type: Boolean, reflect: true })
  searchable = false;

  // The select's label
  @property({ type: String })
  label = "";

  @property({ type: Boolean })
  invalid = false;

  @property({ type: Boolean, reflect: true })
  loading = false;

  @property({ type: String })
  validationMessage = "";

  /**
   * Template
   */
  render() {
    return html`
      ${this.labelText}
      <div
        class="container ${classMap({
          active: this.active,
          invalid: this.invalid,
        })}"
        @click="${this.activateSelections}"
      >
        <div class="tags">
          ${this.renderedSelectedOption}
        </div>
        ${this.loading
          ? html`
              <chameleon-loader loader="spinner" size="24px"></chameleon-loader>
            `
          : this.selectCaret}
        ${this.optionsList}
      </div>
      ${this.errorText}
    `;
  }

  /**
   * The true canonical value of the selector
   * @return {string}
   */
  get value() {
    return this.selectedOption.value;
  }

  /**
   * Sets the canonical value of the selector
   */
  set value(value) {
    const found = this.options.find((option) => value === option.value);
    if (found === undefined)
      throw new Error("Value not found within the options array!");
    else this.selectedOption = { ...found };
  }

  /**
   * Returns the caret that is rendered as part of the dropdown
   * @return {TemplateResult}
   */
  get selectCaret() {
    return this.active ? this.caretUp : this.caretDown;
  }

  get warningIcon() {
    return svg`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-search"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
  `;
  }

  get errorText() {
    if (this.validationMessage !== "") {
      return html`
        <span class="error" id="${this.name}-error"
          >${this.warningIcon} ${this.validationMessage}</span
        >
      `;
    } else return nothing;
  }

  /**
   * Returns a list of rendered options that can be selected
   * @return {TemplateResult | object}
   */
  get optionsList() {
    return this.active
      ? html`
          <div class="options">
            <ul class="options__list">
              ${repeat(
                this.filteredOptions.length > 0
                  ? this.filteredOptions
                  : this.options,
                (option) => html`
                  <li
                    class="options__option"
                    data-value="${option.value}"
                    aria-roledescription="$1"
                    label="${option?.preLabel +
                    " " +
                    option?.label +
                    " " +
                    option?.subLabel +
                    " " +
                    option?.postLabel}"
                    @click="${this.addSelection}"
                  >
                    ${option.preLabel
                      ? html`
                          <div class="options__option-preLabel">
                            ${option.preLabel}
                          </div>
                        `
                      : nothing}
                    <div class="options__option-group">
                      <span class="options__option-label">${option.label}</span>
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
                  </li>
                `
              )}
            </ul>
          </div>
        `
      : nothing;
  }

  /**
   * Returns the rendered selected options
   * @return {TemplateResult}
   */
  get renderedSelectedOption() {
    if (this.selectedOption.value !== undefined && !this.active) {
      const option = this.selectedOption;
      return html`
        <div class="options__option view-only">
          ${option.preLabel
            ? html`
                <div class="options__option-preLabel">
                  ${option.preLabel}
                </div>
              `
            : nothing}
          <div class="options__option-group">
            <span class="options__option-label">${option.label}</span>
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
        </div>
      `;
    } else {
      // Search Bar
      return this.active && this.searchable
        ? html`
            <input
              type="text"
              autocomplete="off"
              autocorrect="off"
              autocapitalize="off"
              placeholder="Type to filter..."
              @input="${this.handleSearch}"
            />
          `
        : html` <span class="placeholder">${this.placeholder}</span> `;
    }
  }

  get labelText() {
    if (this.label !== "") {
      return html`
        <label
          class="label-container
        ${classMap({ invalid: this.invalid })}"
          for="${this.name}"
          >${this.label}</label
        >
      `;
    } else return nothing;
  }

  get caretDown() {
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

  get caretUp() {
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

  /**
   * Sets the component status to active rendering a list of selections
   */
  async activateSelections() {
    if (!this.disabled) {
      this.active = true;

      if (this.searchable) {
        // Wait until the render completes to focus input, otherwise it will be undefined
        await this.updateComplete;
        this.shadowRoot.querySelector("input").focus();
      }
    }
  }

  /**
   * Adds the clicked selection to the selected options
   * @param {Event} e - Click event on a SelectionTarget
   */
  addSelection(e) {
    const parents = e.composedPath();
    const parent = parents.find((el) => el.hasAttribute("data-value"));
    const value = parent.dataset.value;
    const selection = this.options.find((option) => option.value === value);

    this.filteredOptions = [];
    e.stopPropagation();

    this.selectedOption = selection;

    // Dispatch a change event
    this.dispatchEvent(
      new CustomEvent("chameleon.select.input", {
        detail: {
          value: this.value,
          selectedOption: this.selectedOption,
        },
        bubbles: true,
        composed: true,
      })
    );
    this.active = false;
  }

  /**
   * Clears the selected options
   */
  clearSelections() {
    this.selectedOption = {};
  }

  /**
   * Handles search whenever any text is typed into the search field
   * @param {InputEvent} e - Event target that contains the search query
   */
  handleSearch(e) {
    const query = e.target.value.toLowerCase();
    this.filteredOptions = this.options.filter((option) => {
      return option.label.toLowerCase().includes(query);
    });
  }

  /**
   * Closes the selector when a user clicks anywhere except for inside
   * @param {MouseEvent} e - Click event
   */
  closeOptionsList(e) {
    const targets = e.composedPath().map((eventTarget) => eventTarget.tagName);

    if (!targets.includes("CHAMELEON-SELECT")) {
      this.active = false;
    }
  }
}
