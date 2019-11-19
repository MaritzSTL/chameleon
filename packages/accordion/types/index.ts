import { TemplateResult } from "lit-html";

export type Item = {
  header: string;
  panel: TemplateResult | string;
  itemExpandedIndex: number;
  itemExpanded: boolean;
};

export type Items = Item[];
