import {
  LitElement,
  TemplateResult,
  customElement,
  property,
  html,
  svg,
  SVGTemplateResult,
  PropertyValues
} from "lit-element";
import { repeat } from "lit-html/directives/repeat";
import { classMap } from "lit-html/directives/class-map";
import { nothing } from "lit-html/lib/part";
import style from "./chameleon-date-style";
import "@chameleon-ds/input/src/chameleon-input";
import "@chameleon-ds/button/src/chameleon-button";

type DateSelectTarget = EventTarget & {
  value: Date;
};

@customElement("chameleon-date")
export default class ChameleonDate extends LitElement {
  constructor() {
    super();

    document.addEventListener("click", this.closeOverlay as EventListener);
  }

  /**
   * Lifecycle Methods
   */
  updated(changedProperties: PropertyValues) {
    if (this.touched) {
      if (changedProperties.has("value")) {
        this.date = this.stringToDate(this.value);
      }

      if (changedProperties.has("date")) {
        this.value = this.dateToString(this.date);
      }
    }
  }

  disconnectedCallback() {
    document.removeEventListener("click", this.closeOverlay as EventListener);
  }

  /**
   * Properties
   */
  @property({ type: Boolean })
  active = false;

  @property({ type: Object })
  date = new Date();

  @property({ type: Object })
  renderedDate = this.date;

  @property({ type: String })
  placeholder = "";

  @property({ type: String })
  label = "";

  @property({ type: String })
  value = "";

  @property({ type: String, reflect: true })
  min = null;

  @property({ type: String, reflect: true })
  max = null;

  // TODO: make these configurable properties
  private startDay = 0;
  private weekDayValues = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  private touched = false;

  /**
   * Styles
   */
  static styles = [style];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <chameleon-input
        type="text"
        .placeholder="${this.placeholder}"
        .label="${this.label}"
        .value="${this.renderedDateValue}"
        @focus="${this.toggleActive}"
        >${this.calendarIcon}</chameleon-input
      >
      ${this.active ? this.overlay : nothing}
    `;
  }

  get overlay(): TemplateResult {
    return html`
      <div class="overlay">
        <header>
          <chameleon-button theme="text" icon-only @click="${this.prevMonth}"
            >${this.prevIcon}</chameleon-button
          >
          <h3>
            ${this.renderedDate.toLocaleString("default", { month: "long" })}
            ${this.renderedDate.getFullYear()}
          </h3>
          <chameleon-button theme="text" icon-only @click="${this.nextMonth}"
            >${this.nextIcon}</chameleon-button
          >
        </header>
        ${this.dayOfWeek} ${this.dateGrid}
      </div>
    `;
  }

  get dayOfWeek(): TemplateResult {
    const days = <Array<string>>[];

    for (let i = 0; i < 7; i++) {
      const pointer = (i + this.startDay) % 7;
      days.push(this.weekDayValues[pointer]);
    }

    return html`
      <div class="day-of-week">
        ${repeat(
          days,
          day =>
            html`
              <div>${day}</div>
            `
        )}
      </div>
    `;
  }

  get dateGrid(): TemplateResult {
    const currentDate = new Date();
    const minDate = this.min ? this.stringToDate(this.min || "").getTime() : -1;
    const maxDate = this.max
      ? this.stringToDate(this.max || "").getTime()
      : Infinity;

    return html`
      <div class="date-grid offset-${this.days[0].getDay()}">
        ${repeat(
          this.days,
          day =>
            html`
              <chameleon-button
                theme="secondary"
                class="${classMap({
                  active:
                    day.getDate() == this.date.getDate() &&
                    day.getMonth() == this.date.getMonth() &&
                    day.getFullYear() == this.date.getFullYear(),
                  current:
                    day.getDate() == currentDate.getDate() &&
                    day.getMonth() == currentDate.getMonth() &&
                    day.getFullYear() == currentDate.getFullYear()
                })}"
                .value="${day}"
                ?disabled="${day.getTime() < minDate ||
                  day.getTime() > maxDate}"
                @click="${this.setDate}"
              >
                ${day.getDate()}
              </chameleon-button>
            `
        )}
      </div>
    `;
  }

  get days() {
    const year = this.renderedDate.getFullYear();
    const month = this.renderedDate.getMonth();

    return new Array(31)
      .fill(null)
      .map((_v, i) => new Date(year, month, i + 1))
      .filter(v => v.getMonth() === month);
  }

  get renderedDateValue(): string {
    return this.touched
      ? this.date.toLocaleDateString(undefined, {
          month: "long",
          day: "numeric",
          year: "numeric"
        })
      : "";
  }

  get calendarIcon(): SVGTemplateResult {
    return svg`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar" slot="icon-right"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`;
  }

  get prevIcon(): SVGTemplateResult | TemplateResult {
    const slots = Array.from(this.querySelectorAll("[slot]"));
    const prevIcon = slots.find(slot => slot.slot === "prev-icon");

    if (prevIcon === undefined)
      return svg`<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line></svg>`;
    else
      return html`
        <slot name="prev-icon"></slot>
      `;
  }

  get nextIcon(): SVGTemplateResult {
    const slots = Array.from(this.querySelectorAll("[slot]"));
    const nextIcon = slots.find(slot => slot.slot === "next-icon");

    if (nextIcon === undefined)
      return svg`<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>`;
    else
      return html`
        <slot name="next-icon"></slot>
      `;
  }

  toggleActive(): void {
    this.active = true;
  }

  prevMonth(): void {
    const date = this.renderedDate;
    date.setMonth(date.getMonth() - 1);

    this.renderedDate = new Date(date);
  }

  nextMonth(): void {
    const date = this.renderedDate;
    date.setMonth(date.getMonth() + 1);

    this.renderedDate = new Date(date);
  }

  private setDate(e: MouseEvent): void {
    this.touched = true;
    const date = (<DateSelectTarget>e.target)!.value;
    this.date = date;
    this.active = false;
  }

  private dateToString(date: Date): string {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}-${month}-${day}`;
  }

  private stringToDate(date: string): Date {
    const [year, month, day] = date.split("-");

    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  }

  private closeOverlay(e: CustomEvent): void {
    const targets = e
      .composedPath()
      .map(eventTarget => (eventTarget as Element).tagName);

    if (!targets.includes("CHAMELEON-DATE"))
      Array.from(document.querySelectorAll("chameleon-date")).forEach(
        datePicker => ((datePicker as ChameleonDate).active = false)
      );
  }
}
