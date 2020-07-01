# Chameleon Table

```js script
import { html } from "@open-wc/demoing-storybook";
import "./chameleon-table.js";

const columns = [
  {
    header: "Column 1",
    row: (row) => html` ${row.field1} `,
  },
  {
    header: "Column 2",
    row: (row) => html` ${row.field2} `,
  },
  {
    header: "Column 3",
    row: (row) => html` ${row.field3} `,
  },
  {
    header: "Column 4",
    headerClass: "right",
    columnClass: "right",
    row: (row) => html` ${row.field4} `,
  },
];

const columnsWithDetailFields = [
  {
    header: "Column 1",
    row: (row) => html` ${row.field1} `,
    detailsRow: () => "",
  },
  {
    header: "Column 2",
    row: (row) => html` ${row.field2} `,
    detailsRow: (detailsRow) => html` ${detailsRow.detailsField2} `,
  },
  {
    header: "Column 3",
    row: (row) => html` ${row.field3} `,
    detailsRow: (detailsRow) => html` ${detailsRow.detailsField3} `,
  },
  {
    header: "Column 4",
    row: (row) => html` ${row.field4} `,
    detailsRow: (detailsRow) => html` ${detailsRow.detailsField4} `,
  },
];

const columnsWithFilters = [
  {
    header: "Column 1",
    row: (row) => html` ${row.field1} `,
  },
  {
    header: "Column 2",
    row: (row) => html` ${row.field2} `,
    filter: {
      name: "column2",
    },
    sortable: true,
  },
  {
    header: "Column 3",
    row: (row) => html` ${row.field3} `,
    filter: {
      name: "filterName_column3",
    },
    searchable: true,
  },
  {
    header: "Column 4",
    row: (row) => html` ${row.field4} `,
    filter: {
      name: "filterName_column4",
      items: [
        {
          value: "filter1",
          label: "Filter 1",
        },
        {
          value: "filter2",
          label: "Filter 2",
        },
        {
          value: "filter3",
          label: "Filter 3",
        },
      ],
    },
    searchable: true,
    sortable: true,
  },
];

const rows = [
  {
    field1: "Row 1 - Field 1",
    field2: "Row 1 - Field 2",
    field3: "Row 1 - Field 3",
    field4: "Row 1 - Field 4",
    showDetails: false,
    details: [
      {
        detailsField2: "Details Row 1 - Field 2",
        detailsField3: "Details Row 1 - Field 3",
        detailsField4: "Details Row 1 - Field 4",
      },
    ],
  },
  {
    field1: "Row 2 - Field 1",
    field2: "Row 2 - Field 2",
    field3: "Row 2 - Field 3",
    field4: "Row 2 - Field 4",
    showDetails: true,
    details: [
      {
        detailsField2: "Details Row 1 - Field 2",
        detailsField3: "Details Row 1 - Field 3",
        detailsField4: "Details Row 1 - Field 4",
      },
      {
        detailsField2: "Details Row 2 - Field 2",
        detailsField3: "Details Row 2 - Field 3",
        detailsField4: "Details Row 2 - Field 4",
      },
      {
        detailsField2: "Details Row 3 - Field 2",
        detailsField3: "Details Row 3 - Field 3",
        detailsField4: "Details Row 3 - Field 4",
      },
    ],
  },
  {
    field1: "Row 3 - Field 1",
    field2: "Row 3 - Field 2",
    field3: "Row 3 - Field 3",
    field4: "Row 3 - Field 4",
    showDetails: true,
    details: [],
  },
  {
    field1: "Row 4 - Field 1",
    field2: "Row 4 - Field 2",
    field3: "Row 4 - Field 3",
    field4: "Row 4 - Field 4",
    showDetails: true,
    details: [
      {
        detailsField2: "Details Row 1 - Field 2",
        detailsField3: "Details Row 1 - Field 3",
        detailsField4: "Details Row 1 - Field 4",
      },
      {
        detailsField2: "Details Row 2 - Field 2",
        detailsField3: "Details Row 2 - Field 3",
        detailsField4: "Details Row 2 - Field 4",
      },
      {
        detailsField2: "Details Row 3 - Field 2",
        detailsField3: "Details Row 3 - Field 3",
        detailsField4: "Details Row 3 - Field 4",
      },
      {
        detailsField2: "Details Row 4 - Field 2",
        detailsField3: "Details Row 4 - Field 3",
        detailsField4: "Details Row 4 - Field 4",
      },
    ],
  },
  {
    field1: "Row 5 - Field 1",
    field2: "Row 5 - Field 2",
    field3: "Row 5 - Field 3",
    field4: "Row 5 - Field 4",
  },
  {
    field1: "Row 6 - Field 1",
    field2: "Row 6 - Field 2",
    field3: "Row 6 - Field 3",
    field4: "Row 6 - Field 4",
  },
  {
    field1: "Row 7 - Field 1",
    field2: "Row 7 - Field 2",
    field3: "Row 7 - Field 3",
    field4: "Row 7 - Field 4",
  },
];

const pageSize = 6;

const currentPage = 1;

const totalItems = 7;

export default {
  title: "Components|Data and Visualizations/Table",
  component: "chameleon-table",
  options: { selectedPanel: "storybookjs/docs/panel" },
};
```

## Properties

| Property Name    | Type(s) | Default Value               | Description                                                 |
| ---------------- | ------- | --------------------------- | ----------------------------------------------------------- |
| `columns`        | Array   | `[]`                        | An array of TemplateResults to display in the table headers |
| `rows`           | Array   | `[]`                        | An array of TemplateResults to display in the table         |
| `highlightRow`   | Number  | `null`                      | The table's highlighted row                                 |
| `filters`        | Object  | `{}`                        | The table's filters                                         |
| `sort`           | Object  | `orderBy: "", order: "ASC"` | The table's sort object                                     |
| `pageSize`       | Number  | `10`                        | The total number of pages in the table                      |
| `totalItems`     | Number  | `0`                         | The total items in the table                                |
| `currentPage`    | Number  | `1`                         | The current page of the table                               |
| `hidePagination` | Boolean | `false`                     | When true, hides the table's pagination                     |

## Examples

### Default

```js preview-story
export const Default = () => html`
  <chameleon-table
    .columns=${columns}
    .rows=${rows}
    .pageSize=${pageSize}
    .currentPage=${currentPage}
    .totalItems=${totalItems}
  ></chameleon-table>
`;
```

### Detail Rows

```js preview-story
export const DetailRows = () => html`
  <chameleon-table
    .columns=${columnsWithDetailFields}
    .rows=${rows}
    .pageSize=${pageSize}
    .currentPage=${currentPage}
    .totalItems=${totalItems}
  ></chameleon-table>
`;
```

### Filters

```js preview-story
export const Filters = () => html`
  <chameleon-table
    .columns=${columnsWithFilters}
    .rows=${rows}
    .pageSize=${pageSize}
    .currentPage=${currentPage}
    .totalItems=${totalItems}
  ></chameleon-table>
`;
```
