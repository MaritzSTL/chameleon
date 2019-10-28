import { TemplateResult } from "lit-html";

export type SelectableOption = {
  value: string;
  label: string;
  subLabel: string;
  preLabel: TemplateResult | string;
  postLabel: TemplateResult | string;
  startDateLabel: TemplateResult | string;
  endDateLabel: TemplateResult | string;
};

export type SelectionTarget = EventTarget & {
  getAttribute(arg0: string);
  hasAttribute(arg0: string);
  textContent: string;
};
