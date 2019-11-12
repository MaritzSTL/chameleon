import { TemplateResult } from "lit-html";

export type AccordionItem = {
  header: string;
  icon: string;
  panel: TemplateResult | string;
  panelExpanded: Boolean;
  index: Number;
};

export type SelectionTarget = EventTarget & {
  hasAttribute(name: string): Element;
  getAttribute(name: string): string;
  dataset: {
    value: string;
  };
};
