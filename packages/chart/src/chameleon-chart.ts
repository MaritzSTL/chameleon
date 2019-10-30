import {
  LitElement,
  TemplateResult,
  customElement,
  property,
  html,
  svg,
  SVGTemplateResult
} from "lit-element";
import style from "./chameleon-chart-style";
import { nothing } from "lit-html";

type CartesianCoordinates = {
  x: number;
  y: number;
};

@customElement("chameleon-chart")
export default class ChameleonChart extends LitElement {
  /**
   * Properties
   */
  @property({ type: String })
  type = "";

  /**
   * Styles
   */
  static styles = [style];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      ${this.chart}
    `;
  }

  get chart(): SVGTemplateResult | object {
    switch (this.type) {
      case "arc":
        return this.arc;
      default:
        return nothing;
    }
  }

  get arc(): SVGTemplateResult {
    return svg`
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" height="100px" width="100px">
        <path fill="transparent" stroke="#c4c7ca" stroke-width="10px" stroke-linecap="round" d="${this._describeArc(
          50,
          50,
          45,
          -120,
          120
        )}" />
        <path fill="transparent" stroke="#00870a" stroke-width="10px" stroke-linecap="round" d="${this._describeArc(
          50,
          50,
          45,
          -120,
          0
        )}" />
      </svg>
    `;
  }

  private _polarToCartesian(
    centerX: number,
    centerY: number,
    radius: number,
    angleInDegrees: number
  ): CartesianCoordinates {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians)
    };
  }

  private _describeArc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number
  ): string {
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
      end.y
    ].join(" ");

    return d;
  }
}
