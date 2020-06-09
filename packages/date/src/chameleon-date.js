import { LitElement, property, html, svg } from "lit-element";
import { repeat } from "lit-html/directives/repeat";
import { classMap } from "lit-html/directives/class-map";
import { nothing } from "lit-html/lib/part";
import style from "./chameleon-date-style";
import "@chameleon-ds/input";
import "@chameleon-ds/button";

export default class ChameleonDate extends LitElement {
  /**
   * Lifecycle Methods
   */
  firstUpdated() {
    if (this.value === "") {
      this.date = new Date();
    } else {
      this.touched = true;
      this.requestUpdate();
    }
    this.renderedDate = this.date;

    document.addEventListener("click", this.closeOverlay.bind(this));
  }

  updated(changedProperties) {
    if (
      changedProperties.has("value") &&
      this.value !== undefined &&
      this.value !== ""
    ) {
      this.renderedDate = this.stringToDate(this.value);
    }
  }

  disconnectedCallback() {
    document.removeEventListener("click", this.closeOverlay.bind(this));
  }

  /**
   * Properties
   */
  @property({ type: String })
  name = "cha-date";

  @property({ type: Boolean })
  active = false;

  @property({ type: Object })
  renderedDate = null;

  @property({ type: String })
  placeholder = "";

  @property({ type: String })
  label = "";

  @property({ type: Boolean, reflect: true })
  readonly = false;

  @property({ type: String })
  value = "";

  @property({ type: String, reflect: true })
  min = null;

  @property({ type: String, reflect: true })
  max = null;

  // A Boolean which, if true, indicates that the input must have a value before the form can be submitted
  @property({ type: Boolean, reflect: true })
  required = false;

  @property({ type: Boolean, reflect: true })
  canDelete = true;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  // The external error message
  @property({ type: String })
  validationMessage = "";

  //Invalid boolean to allow validity access from higher level form errors
  @property({ type: Boolean, reflect: true })
  invalid = false;

  @property({ type: String })
  overlayRenderMode = "month";

  // TODO: make these configurable properties/i18n
  startDay = 0;
  weekDayValues = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  monthValues = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  touched = false;

  /**
   * Styles
   */
  static styles = [style];

  /**
   * Template
   */
  render() {
    return html`
      <chameleon-input
        name="${this.name}"
        type="text"
        readonly
        .placeholder="${this.placeholder}"
        .label="${this.label}"
        .value="${this.renderedDateValue}"
        ?required="${this.required}"
        ?invalid="${this.invalid}"
        ?disabled="${this.disabled}"
        .validationMessage="${this.validationMessage}"
        @focus="${this.toggleActive}"
        >${!this.value || !this.value.length || !this.touched || !this.canDelete
          ? this.calendarIcon
          : nothing}</chameleon-input
      >
      ${this.active
        ? html`
            <div class="overlay ${this.overlayRenderMode}">${this.overlay}</div>
          `
        : this.canDelete &&
          this.value &&
          this.value.length &&
          this.touched &&
          !this.readonly
        ? html`<chameleon-button
            theme="text"
            class="delete"
            @click="${this.delete}"
            >${this.closeIcon}
          </chameleon-button>`
        : nothing}
    `;
  }

  delete() {
    if (this.value?.length) this.value = "";
    this.setDate(null);
  }

  get date() {
    if (this.value && this.value !== "") return this.stringToDate(this.value);
    return undefined;
  }

  set date(value) {
    if (value) this.value = this.dateToString(value);
  }

  get overlay() {
    switch (this.overlayRenderMode) {
      case "year":
        return html`
          <header>
            <chameleon-button theme="text" icon-only @click="${this.prevYear}"
              >${this.prevIcon}</chameleon-button
            >
            <h3>
              ${this.renderedDate?.getFullYear()}
            </h3>
            <chameleon-button theme="text" icon-only @click="${this.nextYear}"
              >${this.nextIcon}</chameleon-button
            >
          </header>
          <div class="date-grid">
            ${repeat(
              this.monthValues,
              (month, i) =>
                html`
                  <div
                    class="month"
                    .value="${{
                      month: i,
                      year: this.renderedDate?.getFullYear(),
                    }}"
                    @click="${this.setMonth}"
                  >
                    ${month}
                  </div>
                `
            )}
          </div>
        `;
      case "month":
      default:
        return html`
          <header>
            <chameleon-button theme="text" icon-only @click="${this.prevMonth}"
              >${this.prevIcon}</chameleon-button
            >
            <h3 @click="${this.toggleOverlayView}">
              ${this.renderedDate?.toLocaleString("default", {
                month: "long",
              })}
              ${this.renderedDate?.getFullYear()}
            </h3>
            <chameleon-button theme="text" icon-only @click="${this.nextMonth}"
              >${this.nextIcon}</chameleon-button
            >
          </header>
          ${this.dayOfWeek} ${this.dateGrid}
        `;
    }
  }

  get dayOfWeek() {
    const days = [];

    for (let i = 0; i < 7; i++) {
      const pointer = (i + this.startDay) % 7;
      days.push(this.weekDayValues[pointer]);
    }

    return html`
      <div class="day-of-week">
        ${repeat(days, (day) => html` <div>${day}</div> `)}
      </div>
    `;
  }

  get dateGrid() {
    const currentDate = new Date();
    const minDate = this.min ? this.stringToDate(this.min).getTime() : -1;
    const maxDate = this.max ? this.stringToDate(this.max).getTime() : Infinity;

    return this.days
      ? html`
          <div class="date-grid offset-${this.days[0].getDay()}">
            ${repeat(
              this.days,
              (day) => html`
                <div
                  class="${classMap({
                    active:
                      day.getDate() == this.date?.getDate() &&
                      day.getMonth() == this.date?.getMonth() &&
                      day.getFullYear() == this.date?.getFullYear(),
                    current:
                      day.getDate() == currentDate.getDate() &&
                      day.getMonth() == currentDate.getMonth() &&
                      day.getFullYear() == currentDate.getFullYear(),
                  })}"
                  .value="${day}"
                  ?disabled="${day.getTime() < minDate ||
                  day.getTime() > maxDate}"
                  @click="${this.setDate}"
                >
                  ${day.getDate()}
                </div>
              `
            )}
          </div>
        `
      : nothing;
  }

  get days() {
    const year = this.renderedDate?.getFullYear();
    const month = this.renderedDate?.getMonth();

    if (year !== undefined && month !== undefined)
      return new Array(31)
        .fill(null)
        .map((_v, i) => new Date(year, month, i + 1))
        .filter((v) => v.getMonth() === month);

    return undefined;
  }

  get renderedDateValue() {
    return this.touched
      ? this.date?.toLocaleDateString(undefined, {
          month: "long",
          day: "numeric",
          year: "numeric",
        }) ?? ""
      : "";
  }

  get closeIcon() {
    return svg`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 18"><path fill="gray" d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg>`;
  }

  get calendarIcon() {
    return svg`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar" slot="icon-right"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`;
  }

  get prevIcon() {
    const slots = Array.from(this.querySelectorAll("[slot]"));
    const prevIcon = slots.find((slot) => slot.slot === "prev-icon");

    if (prevIcon === undefined)
      return svg`<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line></svg>`;
    else return html` <slot name="prev-icon"></slot> `;
  }

  get nextIcon() {
    const slots = Array.from(this.querySelectorAll("[slot]"));
    const nextIcon = slots.find((slot) => slot.slot === "next-icon");

    if (nextIcon === undefined)
      return svg`<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>`;
    else return html` <slot name="next-icon"></slot> `;
  }

  toggleActive() {
    if (!(this.readonly || this.disabled)) this.active = true;
  }

  prevMonth() {
    const date = this.renderedDate;
    date.setMonth(date.getMonth() - 1);

    this.renderedDate = new Date(date);
  }

  nextMonth() {
    const date = this.renderedDate;
    date.setMonth(date.getMonth() + 1);

    this.renderedDate = new Date(date);
  }

  prevYear() {
    const date = this.renderedDate;
    date.setFullYear(date.getFullYear() - 1);

    this.renderedDate = new Date(date);
  }

  nextYear() {
    const date = this.renderedDate;
    date.setFullYear(date.getFullYear() + 1);

    this.renderedDate = new Date(date);
  }

  async setDate(e) {
    this.touched = true;
    if (e?.target) {
      const date = e.target.value;
      this.date = date;
      this.active = false;
      this.requestUpdate();
      await this.updateComplete;
    }
    this.dispatchEvent(
      new CustomEvent("chameleon.date.input", {
        bubbles: true,
        composed: true,
        detail: {
          value: this.value,
        },
      })
    );
  }

  setMonth(e) {
    this.touched = true;
    const month = e.target.value.month;
    const year = e.target.value.year;
    const date = new Date();
    date.setFullYear(year);
    date.setMonth(month);
    this.renderedDate = date;
    this.overlayRenderMode = "month";
  }

  dateToString(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}-${month}-${day}`;
  }

  stringToDate(date) {
    const [year, month, day] = date.split("-");

    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  }

  closeOverlay(e) {
    const targets = e.composedPath().map((eventTarget) => eventTarget.tagName);

    if (!targets.includes("CHAMELEON-DATE")) {
      this.active = false;
      this.overlayRenderMode = "month";
    }
  }

  toggleOverlayView() {
    switch (this.overlayRenderMode) {
      case "month":
        this.overlayRenderMode = "year";
        break;
      default:
        this.overlayRenderMode = "month";
    }
  }
}

if (!window.customElements.get("chameleon-date"))
  window.customElements.define("chameleon-date", ChameleonDate);
