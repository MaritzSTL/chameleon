import { TemplateResult, SVGTemplateResult } from "lit-html";

export type SelectableOption = {
  value: string;
  selected?: boolean;
  label?: string;
  preLabel?: TemplateResult | SVGTemplateResult | string;
  subLabel?: TemplateResult | SVGTemplateResult | string;
  postLabel?: TemplateResult | SVGTemplateResult | string;
};
