import {
  LitElement,
  TemplateResult,
  customElement,
  html,
  property
} from "lit-element";
import { nothing } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import { repeat } from "lit-html/directives/repeat";
import style from "./chameleon-multiselect-style";
import { SelectableOption, SelectionTarget } from "../types";
import "@chameleon-ds/chip/src/chameleon-chip";
import "@chameleon-ds/loader/src/chameleon-loader";

@customElement("chameleon-multiselect")
export default class ChameleonMultiselect extends LitElement {
  constructor() {
    super();
    this.addEventListener("remove-chip", <EventListener>this.handleChipClose);
    document.addEventListener("click", <EventListener>this.closeOptionsList);
    document.addEventListener("chameleon-multiselect.close", () => {
      this.active = false;
    });
  }

  /**
   * Lifecycle Methods
   */
  disconnectedCallback() {
    this.removeEventListener(
      "remove-chip",
      <EventListener>this.handleChipClose
    );
    document.removeEventListener("click", <EventListener>this.closeOptionsList);
    document.removeEventListener("chameleon-multiselect.close", () => {
      this.active = false;
    });
  }

  /**
   * Properties
   */
  // An array of the possible options to be selected
  @property({ type: Array, reflect: true })
  options = <Array<SelectableOption>>[];

  // An array of filtered options
  @property({ type: Array, reflect: true })
  filteredOptions = <Array<SelectableOption>>[];

  // An array of the selected options
  @property({ type: Array })
  selectedOptions = <Array<SelectableOption>>[];

  // A Boolean attribute which, if present, displays the filtered options
  @property({ type: Boolean, reflect: true })
  active = false;

  // A Boolean attribute which is present if the input should be disabled
  @property({ type: Boolean, reflect: true })
  disabled = false;

  // A Boolean which, if true, indicates that the input is valid
  @property({ type: Boolean, reflect: true })
  valid = true;

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

  /**
   * Styles
   */
  static styles = [style];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      ${this.getLabel}
      <div class="multiselect-box">
        <div
          class="tags ${classMap({
            "tags-active": this.selectedOptions.length > 0
          })}"
        >
          ${this.renderedSelectedOptions}
          <input
            name="multiselect-input"
            class="multiselect-input ${classMap({
              "tags-active": this.selectedOptions.length > 0
            })}"
            type="text"
            placeholder="${this.renderedOptions.length > 0 || this.instantSearch
              ? this.placeholder
              : ""}"
            @focus="${this.setActive}"
            @input="${this.handleSearch}"
          />
        </div>
        ${this.optionsList}
        ${this.loading
          ? html`
              <chameleon-loader loader="spinner" size="24px"></chameleon-loader>
            `
          : html`
              <slot name="icon"></slot>
            `}
      </div>
    `;
  }

  /**
   * The true canonical value of the selector
   * @return {Array<string>}
   */
  get value(): Array<SelectableOption["value"]> {
    return this.selectedOptions.map(option => option.value);
  }

  get getLabel(): string | object {
    if (this.label !== "")
      return html`
        <label>${this.label}</label>
      `;
    else return nothing;
  }

  /**
   * Sets the canonical value of the selector
   */
  set value(values: Array<SelectableOption["value"]>) {
    const selectedOptions = <Array<SelectableOption>>[];
    values.forEach(value => {
      const option = this.options.find(option => option.value === value);
      if (option) selectedOptions.push(option as SelectableOption);
      else throw new Error(`${value} doesn't exist within the options array`);
    });

    this.selectedOptions = [...selectedOptions];
  }

  /**
   * Returns a list of rendered options that can be selected
   * @return {TemplateResult}
   */
  get optionsList(): TemplateResult | object {
    return this.active
      ? html`
          <div class="options">
            <ul class="options__list">
              ${repeat(
                this.filteredOptions.length > 0
                  ? this.filteredOptions
                  : this.renderedOptions,
                (option: SelectableOption) => html`
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
  get renderedSelectedOptions(): TemplateResult | object {
    return this.selectedOptions.length > 0
      ? this.selectedOptions.map(
          option => html`
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
  get renderedOptions(): Array<SelectableOption> {
    return this.options.filter(option => {
      return !this.selectedOptions.some(selectedOption => {
        return option.value === selectedOption.value;
      });
    });
  }

  setActive(): void {
    this.active = true;
  }

  toggleActive(): void {
    this.active = !this.active;
  }

  /**
   * Adds the clicked selection to the selected options
   * @param {MouseEvent} e - Click event on a SelectionTarget
   */
  addSelection(e: MouseEvent): void {
    const parents = e.composedPath() as Array<SelectionTarget>;
    const parent = parents.find(el => el.hasAttribute("data-value"));
    const value = parent!.dataset.value;
    const selection = this.options.find(option => option.value === value);

    this.filteredOptions = [];
    this.shadowRoot!.querySelector("input")!.value = "";
    e.stopPropagation();

    if (selection) {
      this.selectedOptions = [...this.selectedOptions, selection];
    }

    this.dispatchChangeEvent();

    this.toggleActive();
  }

  /**
   * Handles search whenever any text is typed into the search field
   * @param {InputEvent} e - Event target that contains the search query
   */
  handleSearch(e: InputEvent): void {
    const query = (e.target! as HTMLInputElement).value.toLowerCase();
    if (this.instantSearch) {
      this.instantSearchValue = query;
      this.dispatchSearchEvent();
    } else
      this.filteredOptions = this.renderedOptions.filter(option => {
        return option.label.toLowerCase().includes(query);
      });
  }

  private handleChipClose(e: CustomEvent): void {
    // TODO: I feel like there's a way to make this more performant
    this.selectedOptions = [
      ...this.selectedOptions.filter(option => option.value !== e.detail.value)
    ];

    this.dispatchChangeEvent();
  }

  private closeOptionsList(e: CustomEvent): void {
    if (
      e.composedPath &&
      e.composedPath()[0] &&
      (<HTMLElement>e.composedPath()[0]).classList
    ) {
      const classes = Array.from((<HTMLElement>e.composedPath()[0]).classList);

      if (classes.includes("multiselect-input")) {
        // Early return if the selector isn't open yet
        e.stopPropagation();
        return;
      } else {
        // Close selector if click is anywhere but inside the selector
        this.dispatchEvent(new CustomEvent("chameleon-multiselect.close"));
      }
    }
  }

  private dispatchChangeEvent(): void {
    this.dispatchEvent(
      new CustomEvent("chameleon.select", {
        detail: {
          value: this.value,
          selectedOptions: this.selectedOptions
        },
        bubbles: true,
        composed: true
      })
    );
  }

  private dispatchSearchEvent(): void {
    this.dispatchEvent(
      new CustomEvent("chameleon.search", {
        detail: {
          value: this.instantSearchValue
        },
        bubbles: true,
        composed: true
      })
    );
  }
}
