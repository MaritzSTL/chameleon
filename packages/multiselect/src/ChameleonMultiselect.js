import { LitElement, html, property } from "lit-element";
import { nothing, svg } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import { repeat } from "lit-html/directives/repeat";
import { ChameleonMultiselectStyle } from "./ChameleonMultiselectStyle.js";
import "@chameleon-ds/chip/chameleon-chip";
import "@chameleon-ds/loader/chameleon-loader";

export class ChameleonMultiselect extends LitElement {
  /**
   * Lifecycle Methods
   */
  firstUpdated() {
    this.addEventListener("remove-chip", this.handleChipClose);
    document.addEventListener("click", this.closeOptionsList.bind(this));
  }

  disconnectedCallback() {
    this.removeEventListener("remove-chip", this.handleChipClose);
    document.removeEventListener("click", this.closeOptionsList.bind(this));
  }

  /**
   * Properties
   */
  @property({ type: String })
  name = "cha-multiselect";

  // An array of the possible options to be selected
  @property({ type: Array, reflect: true })
  options = [];

  // An array of filtered options
  @property({ type: Array, reflect: true })
  filteredOptions = [];

  // An array of the selected options
  @property({ type: Array })
  selectedOptions = [];

  // A Boolean attribute which, if present, displays the filtered options
  @property({ type: Boolean, reflect: true })
  active = false;

  // A Boolean attribute which is present if the input should be disabled
  @property({ type: Boolean, reflect: true })
  disabled = false;

  // A Boolean attribute which, if true, indicates that the multiselect cannot be edited
  @property({ type: Boolean, reflect: true })
  readonly = false;

  // A Boolean attribute which, if true, indicates the input is required
  @property({ type: Boolean, reflect: true })
  required = false;

  // A Boolean which, if true, indicates that the input is valid
  @property({ type: Boolean, reflect: true })
  invalid = false;

  // The input's label
  @property({ type: String })
  label = "";

  // The input's placeholder text
  @property({ type: String })
  placeholder = "";

  @property({ type: Boolean, reflect: true })
  instantSearch = false;

  @property({ type: String })
  instantSearchValue = "";

  @property({ type: Boolean, reflect: true })
  loading = false;

  @property({ type: String })
  validationMessage = "";

  /**
   * Styles
   */
  static styles = [ChameleonMultiselectStyle];

  /**
   * Template
   */
  render() {
    return html`
      ${this.getLabel}
      <div
        class="${classMap({
          "multiselect-box": true,
          invalid: this.invalid || this.validationMessage.length > 0,
        })}"
      >
        <div
          class="tags ${classMap({
            "tags-active": this.selectedOptions.length > 0,
          })}"
        >
          ${this.renderedSelectedOptions}
          <input
            .name="${this.name}"
            class="multiselect-input
            ${classMap({
              "tags-active": this.selectedOptions.length > 0,
            })}"
            type="text"
            placeholder="${this.active
              ? "Type to filter..."
              : this.placeholder}"
            ?aria-invalid="${this.invalid}"
            aria-describedby="${this.name}-error"
            ?readonly="${this.readonly}"
            ?required="${this.required}"
            ?disabled="${this.disabled}"
            @focus="${this.setActive}"
            @input="${this.handleSearch}"
          />
        </div>
        ${this.optionsList}
        ${this.loading
          ? html`
              <chameleon-loader loader="spinner" size="24px"></chameleon-loader>
            `
          : html` <slot name="icon"></slot> `}
      </div>
      ${this.errorText}
    `;
  }

  /**
   * The true canonical value of the selector
   * @return {Array<string>}
   */
  get value() {
    return this.selectedOptions.map((option) => option.value);
  }

  get getLabel() {
    if (this.label !== "")
      return html`
        <label
          class="${classMap({
            invalid: this.invalid || this.validationMessage.length > 0,
          })}"
          for="${this.name}"
          >${this.label}</label
        >
      `;
    else return nothing;
  }

  /**
   * Sets the canonical value of the selector
   */
  set value(values) {
    const selectedOptions = [];
    values.forEach((value) => {
      const option = this.options.find((option) => option.value === value);
      if (option) selectedOptions.push(option);
      else throw new Error(`${value} doesn't exist within the options array`);
    });

    this.selectedOptions = [...selectedOptions];
  }

  /**
   * Returns a list of rendered options that can be selected
   * @return {TemplateResult}
   */
  get optionsList() {
    return this.active
      ? html`
          <div class="options">
            <ul class="options__list">
              ${repeat(
                this.filteredOptions.length > 0
                  ? this.filteredOptions
                  : this.renderedOptions,
                (option) => html`
                  <li
                    class="options__option"
                    data-value="${option.value}"
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
   * @return {TemplateResult | object}
   */
  get renderedSelectedOptions() {
    return this.selectedOptions.length > 0
      ? this.selectedOptions.map(
          (option) => html`
            <chameleon-chip .value="${option.value}" closeable
              >${option.label}</chameleon-chip
            >
          `
        )
      : nothing;
  }

  /**
   * An array of the possible options to be selected, minus what's
   * already been selected
   * @return {Array<SelectableOption>}
   */
  get renderedOptions() {
    return this.options.filter((option) => {
      return !this.selectedOptions.some((selectedOption) => {
        return option.value === selectedOption.value;
      });
    });
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

  setActive() {
    this.active = true;
  }

  toggleActive() {
    this.active = !this.active;
  }

  /**
   * Adds the clicked selection to the selected options
   * @param {MouseEvent} e - Click event on a SelectionTarget
   */
  addSelection(e) {
    const parents = e.composedPath();
    const parent = parents.find((el) => el.hasAttribute("data-value"));
    const value = parent.dataset.value;
    const selection = this.options.find((option) => option.value === value);

    this.filteredOptions = [];
    this.shadowRoot.querySelector("input").value = "";
    e.stopPropagation();

    this.selectedOptions = [...this.selectedOptions, selection];

    this.dispatchChangeEvent();

    this.toggleActive();
  }

  /**
   * Handles search whenever any text is typed into the search field
   * @param {InputEvent} e - Event target that contains the search query
   */
  handleSearch(e) {
    const query = e.target.value.toLowerCase();
    if (this.instantSearch) {
      this.instantSearchValue = query;
      this.dispatchSearchEvent();
    } else
      this.filteredOptions = this.renderedOptions.filter((option) => {
        return option.label.toLowerCase().includes(query);
      });
  }

  handleChipClose(e) {
    // TODO: I feel like there's a way to make this more performant
    this.selectedOptions = [
      ...this.selectedOptions.filter(
        (option) => option.value !== e.detail.value
      ),
    ];

    this.dispatchChangeEvent();
  }

  closeOptionsList(e) {
    const targets = e.composedPath().map((eventTarget) => eventTarget.tagName);

    if (!targets.includes("CHAMELEON-MULTISELECT")) {
      this.active = false;
    }
  }

  dispatchChangeEvent() {
    this.dispatchEvent(
      new CustomEvent("chameleon.select", {
        detail: {
          value: this.value,
          selectedOptions: this.selectedOptions,
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  dispatchSearchEvent() {
    this.dispatchEvent(
      new CustomEvent("chameleon.search", {
        detail: {
          value: this.instantSearchValue,
        },
        bubbles: true,
        composed: true,
      })
    );
  }
}
