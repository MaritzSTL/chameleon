import {
  LitElement,
  TemplateResult,
  customElement,
  property,
  html,
  svg,
  SVGTemplateResult
} from "lit-element";
import { nothing } from "lit-html";
import { repeat } from "lit-html/directives/repeat";
import { SelectableOption } from "@chameleon-ds/select/types";
import style from "./chameleon-timezone-style";
import "@chameleon-ds/select/src/chameleon-select";
import { default as timezoneData } from "../data/timezones.json";

@customElement("chameleon-timezone")
export default class ChameleonTimezone extends LitElement {
  /**
   * Properties
   */
  @property({ type: Boolean, reflect: true }) readonly = false;
  @property({ type: Boolean, reflect: true }) required = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) autovalidate = false;
  @property({ type: String }) timezoneLabel = "";
  @property({ type: String }) timezoneSubLabel = "";
  @property({ type: Array }) timezones = timezoneData;
  @property({ type: String }) _timezoneValue = this.localTimezone;
  @property({ type: Array }) errors = [];

  /**
   * Styles
   */
  static styles = [style];
  /**
   * Template
   * @return {TemplateResult}
   */
  render(): TemplateResult {
    return html`
      <div class="datetime-inputs">
        <div>
          ${this.timezoneLabelText}
          <chameleon-select
            name="timezone"
            .options="${this.timezoneOptions}"
            .value="${this.value}"
            ?searchable="${true}"
            @chameleon.select.input="${this.handleInput}"
          ></chameleon-select>
          ${this.timezoneSubLabelText} ${this.errorText}
        </div>
      </div>
    `;
  }

  /**
   * Gets the timezone value
   */
  get value(): string {
    return this._timezoneValue;
  }

  /**
   * Sets the value of the date time pickers
   * @param {string} value - The timezone value to set
   */
  set value(value: string) {
    if (!value) return;
    this._timezoneValue = value;
  }

  get timezoneOptions(): Array<SelectableOption> {
    return this.timezones.map((timezone: string) => {
      return {
        value: timezone,
        label: timezone
      } as SelectableOption;
    });
  }

  /**
   * timezone label text
   */
  get timezoneLabelText(): TemplateResult | object {
    return this.timezoneLabel !== ""
      ? html`
          <label class="label">${this.timezoneLabel}</label>
        `
      : nothing;
  }

  /**
   * timezone sublabel text
   */
  get timezoneSubLabelText(): TemplateResult | object {
    return this.timezoneSubLabel !== ""
      ? html`
          <label class="label">${this.timezoneSubLabel}</label>
        `
      : nothing;
  }

  /**
   * The user's local browser time zone
   */
  get localTimezone(): string {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  /**
   * Sets the value of the time zone
   * @param {string} value - The timezone value to set
   */
  set timezone(value: string) {
    if (!value) return;
    this._timezoneValue = value;
  }

  /**
   * Gets the value of the time zone
   */
  get timezone(): string {
    return this._timezoneValue;
  }

  /**
   * Error text
   */
  get errorText(): TemplateResult | object {
    return this.errors.length > 0
      ? html`
          ${repeat(
            this.errors,
            (error: string) => html`
              <p class="mdc-text-field-error-text">
                ${this.errorIcon} ${error}
              </p>
            `
          )}
        `
      : nothing;
  }

  handleInput(e: CustomEvent): void {
    const value = e.detail.value;
    e.stopPropagation();
    this._timezoneValue = value;

    this.dispatchEvent(
      new CustomEvent("chameleon.timezone.input", {
        detail: {
          value
        },
        bubbles: true,
        composed: true
      })
    );
  }

  get errorIcon(): SVGTemplateResult {
    return svg`
      <svg xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round" 
      class="feather feather-alert-triangle">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z">
      </path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17">
      </line>
      </svg>
  `;
  }
}
