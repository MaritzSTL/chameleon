import { storiesOf } from "@storybook/polymer";
import { withKnobs } from "@storybook/addon-knobs";
import { TemplateResult, html } from "lit-element";

import "../../packages/filterable-table/src/chameleon-filterable-table";

const stories = storiesOf("Filterable Table", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

stories.add(
  "Basic",
  () => {
    return html`
      <chameleon-filterable-table
        .columns=${columns}
        .rows=${rows}
        .pageSize=${pageSize}
        .currentPage=${currentPage}
        .totalItems=${totalItems}
      ></chameleon-filterable-table>
    `;
  },
  { info: { inline: true } }
);

stories.add(
  "Details Rows",
  () => {
    return html`
      <chameleon-filterable-table
        .columns=${columnsWithDetailFields}
        .rows=${rows}
        .pageSize=${pageSize}
        .currentPage=${currentPage}
        .totalItems=${totalItems}
      ></chameleon-filterable-table>
    `;
  },
  { info: { inline: true } }
);

stories.add(
  "Filters",
  () => {
    return html`
      <chameleon-filterable-table
        .columns=${columnsWithFilters}
        .rows=${rows}
        .pageSize=${pageSize}
        .currentPage=${currentPage}
        .totalItems=${totalItems}
      ></chameleon-filterable-table>
    `;
  },
  { info: { inline: true } }
);

const columns = [
  {
    header: "Column 1",
    row: (row: any): TemplateResult =>
      html`
        ${row.field1}
      `
  },
  {
    header: "Column 2",
    row: (row: any): TemplateResult =>
      html`
        ${row.field2}
      `
  },
  {
    header: "Column 3",
    row: (row: any): TemplateResult =>
      html`
        ${row.field3}
      `
  },
  {
    header: "Column 4",
    row: (row: any): TemplateResult =>
      html`
        ${row.field4}
      `
  }
];

const columnsWithDetailFields = [
  {
    header: "Column 1",
    row: (row: any): TemplateResult =>
      html`
        ${row.field1}
      `,
    detailsRow: (detailsRow: any): TemplateResult =>
      html`
        ${detailsRow.detailsField1}
      `
  },
  {
    header: "Column 2",
    row: (row: any): TemplateResult =>
      html`
        ${row.field2}
      `,
    detailsRow: (detailsRow: any): TemplateResult =>
      html`
        ${detailsRow.detailsField2}
      `
  },
  {
    header: "Column 3",
    row: (row: any): TemplateResult =>
      html`
        ${row.field3}
      `,
    detailsRow: (detailsRow: any): TemplateResult =>
      html`
        ${detailsRow.detailsField3}
      `
  },
  {
    header: "Column 4",
    row: (row: any): TemplateResult =>
      html`
        ${row.field4}
      `,
    detailsRow: (detailsRow: any): TemplateResult =>
      html`
        ${detailsRow.detailsField4}
      `
  }
];

const columnsWithFilters = [
  {
    header: "Column 1",
    row: (row: any): TemplateResult =>
      html`
        ${row.field1}
      `
  },
  {
    header: "Column 2",
    filter: {
      name: "column2"
    },
    sortable: true,
    row: (row: any): TemplateResult =>
      html`
        ${row.field2}
      `
  },
  {
    header: "Column 3",
    filter: {
      name: "column3"
    },
    searchable: true,
    row: (row: any): TemplateResult =>
      html`
        ${row.field3}
      `
  },
  {
    header: "Column 4",
    filter: {
      name: "column4",
      items: ["filter1", "filter2", "filter3"]
    },
    searchable: true,
    sortable: true,
    row: (row: any): TemplateResult =>
      html`
        ${row.field4}
      `
  }
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
        detailsField1: "Details Row 1 - Field 1",
        detailsField2: "Details Row 1 - Field 2",
        detailsField3: "Details Row 1 - Field 3",
        detailsField4: "Details Row 1 - Field 4"
      }
    ]
  },
  {
    field1: "Row 2 - Field 1",
    field2: "Row 2 - Field 2",
    field3: "Row 2 - Field 3",
    field4: "Row 2 - Field 4",
    showDetails: true,
    details: [
      {
        detailsField1: "Details Row 1 - Field 1",
        detailsField2: "Details Row 1 - Field 2",
        detailsField3: "Details Row 1 - Field 3",
        detailsField4: "Details Row 1 - Field 4"
      },
      {
        detailsField1: "Details Row 2 - Field 1",
        detailsField2: "Details Row 2 - Field 2",
        detailsField3: "Details Row 2 - Field 3",
        detailsField4: "Details Row 2 - Field 4"
      }
    ]
  },
  {
    field1: "Row 3 - Field 1",
    field2: "Row 3 - Field 2",
    field3: "Row 3 - Field 3",
    field4: "Row 3 - Field 4",
    showDetails: true,
    details: []
  },
  {
    field1: "Row 4 - Field 1",
    field2: "Row 4 - Field 2",
    field3: "Row 4 - Field 3",
    field4: "Row 4 - Field 4",
    showDetails: true,
    details: [
      {
        detailsField1: "Details Row 1 - Field 1",
        detailsField2: "Details Row 1 - Field 2",
        detailsField3: "Details Row 1 - Field 3",
        detailsField4: "Details Row 1 - Field 4"
      },
      {
        detailsField1: "Details Row 2 - Field 1",
        detailsField2: "Details Row 2 - Field 2",
        detailsField3: "Details Row 2 - Field 3",
        detailsField4: "Details Row 2 - Field 4"
      },
      {
        detailsField1: "Details Row 3 - Field 1",
        detailsField2: "Details Row 3 - Field 2",
        detailsField3: "Details Row 3 - Field 3",
        detailsField4: "Details Row 3 - Field 4"
      },
      {
        detailsField1: "Details Row 4 - Field 1",
        detailsField2: "Details Row 4 - Field 2",
        detailsField3: "Details Row 4 - Field 3",
        detailsField4: "Details Row 4 - Field 4"
      }
    ]
  }
];

const pageSize = 6;

const currentPage = 1;

const totalItems = 4;
