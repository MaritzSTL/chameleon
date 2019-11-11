import {
  LitElement,
  TemplateResult,
  customElement,
  property,
  html,
  svg,
  SVGTemplateResult
} from "lit-element";
import { repeat } from "lit-html/directives/repeat";
import { nothing } from "lit-html/lib/part";
import style from "./chameleon-date-style";
import "@chameleon-ds/input/src/chameleon-input";
import "@chameleon-ds/button/src/chameleon-button";

@customElement("chameleon-date")
export default class ChameleonDate extends LitElement {
  /**
   * Properties
   */
  // TODO: Configure a start day
  // Day of the week to start the calendar on
  // Ex: Sunday = 0, Monday = 1, etc.
  // @property({ type: Number })
  // startDay = 0;

  @property({ type: Boolean })
  active = false;

  @property({ type: Object })
  date = new Date();

  @property({ type: String })
  placeholder = "";

  @property({ type: String })
  label = "";

  private startDay = 0;
  private weekDayValues = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

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
        @focus="${this.toggleActive}"
        >${this.calendarIcon}</chameleon-input
      >
      ${this.active ? this.overlay : nothing}
    `;
  }

  get overlay(): TemplateResult {
    return html`
      <div class="overlay">
        <h3>
          ${this.date.toLocaleString("default", { month: "long" })}
          ${this.date.getFullYear()}
        </h3>
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
    return html`
      <div class="date-grid offset-${this.days[0].getDay() + 1}">
        ${repeat(
          this.days,
          day =>
            html`
              <chameleon-button theme="text">${day.getDate()}</chameleon-button>
            `
        )}
      </div>
    `;
  }

  get days() {
    const year = this.date.getFullYear();
    const month = this.date.getMonth();

    return new Array(31)
      .fill(null)
      .map((_v, i) => new Date(year, month, i + 1))
      .filter(v => v.getMonth() === month);
  }

  get calendarIcon(): SVGTemplateResult {
    return svg`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar" slot="icon-right"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`;
  }

  toggleActive(): void {
    this.active = true;
  }
}
