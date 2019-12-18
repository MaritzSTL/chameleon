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
import moment from "moment-timezone";
import "@chameleon-ds/select/src/chameleon-select";
import { SelectableOption } from "@chameleon-ds/select/types";
import style from "./chameleon-timezone-style";

@customElement("chameleon-timezone")
export default class ChameleonTimezone extends LitElement {
  firstUpdated() {
    // If a timeZone value isn't supplied, default to user's local time
    if (this._timeZoneValue === "") this._timeZoneValue = this.localtimeZone;

    // this.addEventListener("input", this.setValidationMessage);
  }
  /**
   * Properties
   */
  @property({ type: Boolean, reflect: true }) readonly = false;
  @property({ type: Boolean, reflect: true }) required = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) autovalidate = false;
  @property({ type: String }) timeZoneLabel = "";
  @property({ type: String }) timeZoneSubLabel = "";
  @property({ type: Array }) timeZones = moment.tz.names();
  @property({ type: String }) _timeZoneValue = "";
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
          ${this.timeZoneLabelText}
          <chameleon-select
            name="timeZone"
            .options="${this.timeZoneOptions}"
            .value="${this._timeZoneValue}"
            ?searchable="${true}"
            @chameleon.select="${this.handleInput}"
          ></chameleon-select>
          ${this.timeZoneSubLabelText} ${this.errorText}
        </div>
      </div>
    `;
  }

  /**
   * Gets the timezone value
   */
  get value(): string {
    return moment.tz(this.timeZone).toISOString(true);
  }

  /**
   * Sets the value of the date time pickers
   * @param {string} value - The timezone value to set
   */
  set value(value: string) {
    if (!value) return;
  }

  get timeZoneOptions(): Array<SelectableOption> {
    return this.timeZones.map((timezone: string) => {
      return {
        value: timezone,
        label: timezone
      };
    });
  }

  /**
   * timeZone label text
   */
  get timeZoneLabelText(): TemplateResult | object {
    return this.timeZoneLabel !== ""
      ? html`
          <label class="label">${this.timeZoneLabel}</label>
        `
      : nothing;
  }

  /**
   * timeZone sublabel text
   */
  get timeZoneSubLabelText(): TemplateResult | object {
    return this.timeZoneSubLabel !== ""
      ? html`
          <label class="label">${this.timeZoneSubLabel}</label>
        `
      : nothing;
  }

  /**
   * The user's local browser time zone
   */
  get localtimeZone(): string {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  /**
   * Sets the value of the time zone
   * @param {string} value - The timezone value to set
   */
  set timeZone(value: string) {
    if (!value) return;
    this._timeZoneValue = value;
  }

  /**
   * Gets the value of the time zone
   */
  get timeZone(): string {
    return this._timeZoneValue;
  }

  /**
   * Error text
   */
  get errorText(): TemplateResult | object {
    return this.errors.length > 0
      ? html`
          ${repeat(
            this.errors,
            error => html`
              <p class="mdc-text-field-error-text">
                ${this.errorIcon} ${error}
              </p>
            `
          )}
        `
      : nothing;
  }

  handleInput(e: any): void {
    const value = e.target.value;
    this._timeZoneValue = value;
    this.dispatchEvent(new Event("blur"));
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
