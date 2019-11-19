import { TemplateResult } from "lit-element";

export type Columns = Column[];

export type Column = {
  header: string;
  row: (row: Row) => TemplateResult;
  detailsRow?: (detailsRow: Row, row: Row) => TemplateResult;
  filter?: {
    name?: string;
    items?: FilterItems;
    placeholder?: string;
  };
  sortable?: boolean;
  searchable?: boolean;
};

export type Rows = Row[];

export type Row = {
  showDetails?: boolean;
  details?: Row[];
} & {
  [key: string]: string | string[];
};

export type FilterItems = FilterItem[];

export type FilterItem = {
  value: string;
  label: string;
};

export type Filters = {
  [key: string]: string | string[];
};

export type Sort = {
  orderBy: string;
  order: Order;
};

export type Order = "ASC" | "DESC";

export type ChangeCustomEvent = {
  detail: {
    filters: Filters;
    sort: Sort;
    page: number;
  };
  bubbles: true;
  composed: true;
};
