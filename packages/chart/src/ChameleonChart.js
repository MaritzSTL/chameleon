import { LitElement, property, html, svg } from "lit-element";
import { ChameleonChartStyle } from "./ChameleonChartStyle.js";
import { nothing } from "lit-html";

export class ChameleonChart extends LitElement {
  /**
   * Properties
   */
  @property({ type: String })
  type = "";

  /*The color of the chart*/

  @property({ type: String, reflect: true })
  color = "#00870a";

  /* percentage to be displayed in the donut chart */
  @property({ type: Number })
  percentage = 0;

  /* value to show in the the label */
  @property({ type: String })
  label = "0";

  /* value to show in the the subLabel */
  @property({ type: String })
  subLabel = "";

  /**
   * Styles
   */
  static styles = [ChameleonChartStyle];

  /**
   * Template
   */
  render() {
    return html`
      ${this.chart}
      <div class="labels">
        <label style="color:${this.color}">${this.label}</label>
        <label>${this.subLabel}</label>
      </div>
    `;
  }

  get chart() {
    switch (this.type) {
      case "arc":
        return this.arc;
      default:
        return nothing;
    }
  }

  get arc() {
    return svg`
      <svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" height="100%" width="100%">
        <path fill="transparent" stroke="#c4c7ca" stroke-width="10px" stroke-linecap="round" d="${this._describeArc(
          50,
          50,
          45,
          -120,
          120
        )}" />
        <path fill="transparent" stroke="${
          this.color
        }" stroke-width="10px" stroke-linecap="round" d="${this._describeArc(
      50,
      50,
      45,
      -120,
      this._percentageToDegrees(this.percentage)
    )}" />
      </svg>
    `;
  }

  _polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  }

  _percentageToDegrees(percentage) {
    const degrees = (percentage / 100) * 240 - 120;

    return degrees;
  }

  _describeArc(x, y, radius, startAngle, endAngle) {
    const start = this._polarToCartesian(x, y, radius, endAngle);
    const end = this._polarToCartesian(x, y, radius, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    const d = [
      "M",
      start.x,
      start.y,
      "A",
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
    ].join(" ");

    return d;
  }
}
