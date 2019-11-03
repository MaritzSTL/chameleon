import { TemplateResult } from "lit-html";

export type SelectableOption = {
  value: string;
  label: string;
  subLabel: string;
  preLabel: TemplateResult | string;
  postLabel: TemplateResult | string;
};

export type SelectionTarget = EventTarget & {
  hasAttribute(name: string): Element;
  getAttribute(name: string): string;
  dataset: {
    value: string;
  };
};
