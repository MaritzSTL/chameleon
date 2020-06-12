import { LitElement, property, html, svg } from "lit-element";
import { nothing } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import { repeat } from "lit-html/directives/repeat";
import { ChameleonTimezoneStyle } from "./ChameleonTimezoneStyle.js";
import "@chameleon-ds/select/chameleon-select";
import timezoneData from "../data/timezones.js";

export default class ChameleonTimezone extends LitElement {
  /**
   * Properties
   */
  @property({ type: Boolean, reflect: true }) required = false;
  @property({ type: Boolean, reflect: true }) invalid = false;
  @property({ type: Boolean, reflect: true }) readonly = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) autovalidate = false;
  @property({ type: String }) name = "cha-timezone";
  @property({ type: String }) timezoneLabel = "";
  @property({ type: String }) timezoneSubLabel = "";
  @property({ type: Array }) timezones = timezoneData;
  @property({ type: String }) _timezoneValue = this.localTimezone;
  @property({ type: Array }) errors = [];

  /**
   * Styles
   */
  static styles = [ChameleonTimezoneStyle];

  /**
   * Template
   */
  render() {
    return html`
      <div
        class="datetime-inputs
        ${classMap({
          invalid: this.invalid,
        })}"
      >
        <div>
          ${this.timezoneLabelText}
          <chameleon-select
            .name="${name}"
            .options="${this.timezoneOptions}"
            .value="${this.value}"
            ?invalid="${this.invalid}"
            ?readonly="${this.readonly}"
            ?disabled="${this.disabled}"
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
  get value() {
    return this._timezoneValue;
  }

  /**
   * Sets the value of the date time pickers
   * @param {string} value - The timezone value to set
   */
  set value(value) {
    if (!value) return;
    this._timezoneValue = value;
  }

  get timezoneOptions() {
    return this.timezones.map((timezone) => {
      return {
        value: timezone,
        label: timezone,
      };
    });
  }

  /**
   * timezone label text
   */
  get timezoneLabelText() {
    return this.timezoneLabel !== ""
      ? html` <label class="label">${this.timezoneLabel}</label> `
      : nothing;
  }

  /**
   * timezone sublabel text
   */
  get timezoneSubLabelText() {
    return this.timezoneSubLabel !== ""
      ? html` <label class="label">${this.timezoneSubLabel}</label> `
      : nothing;
  }

  /**
   * The user's local browser time zone
   */
  get localTimezone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  /**
   * Sets the value of the time zone
   * @param {string} value - The timezone value to set
   */
  set timezone(value) {
    if (!value) return;
    this._timezoneValue = value;
  }

  /**
   * Gets the value of the time zone
   */
  get timezone() {
    return this._timezoneValue;
  }

  /**
   * Error text
   */
  get errorText() {
    return this.errors.length > 0
      ? html`
          ${repeat(
            this.errors,
            (error) => html`
              <p class="mdc-text-field-error-text" id="${this.name}-error">
                ${this.errorIcon} ${error}
              </p>
            `
          )}
        `
      : nothing;
  }

  handleInput(e) {
    const value = e.detail.value;
    e.stopPropagation();
    this._timezoneValue = value;

    this.dispatchEvent(
      new CustomEvent("chameleon.timezone.input", {
        detail: {
          value,
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  get errorIcon() {
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
