import { TemplateResult } from "lit-html";

export type AccordionItem = {
  header: string;
  panel: TemplateResult | string;
  itemExpandedIndex: number;
  itemExpanded: boolean;
};
