import { storiesOf } from "@storybook/polymer";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { eventDetails } from "../utils";
import { TemplateResult, html } from "lit-element";
import { nothing } from "lit-html";

import { Row } from "@chameleon-ds/table/types";
import "@chameleon-ds/table/src/chameleon-table";

const stories = storiesOf("Table", module);

stories.addDecorator(withKnobs);

stories.add(
  "Basic",
  () => {
    const hidePagination = boolean("Hide Pagination", false);

    return html`
      <chameleon-table
        .columns=${columns}
        .rows=${rows}
        .pageSize=${pageSize}
        .currentPage=${currentPage}
        .totalItems=${totalItems}
        ?hidePagination=${hidePagination}
        @chameleon.table.change=${eventDetails.action("chameleon.table.change")}
      ></chameleon-table>
    `;
  },
  { info: { inline: true } }
);

stories.add(
  "Details Rows",
  () => {
    const hidePagination = boolean("Hide Pagination", false);

    return html`
      <chameleon-table
        .columns=${columnsWithDetailFields}
        .rows=${rows}
        .pageSize=${pageSize}
        .currentPage=${currentPage}
        .totalItems=${totalItems}
        ?hidePagination=${hidePagination}
        @chameleon.table.change=${eventDetails.action("chameleon.table.change")}
      ></chameleon-table>
    `;
  },
  { info: { inline: true } }
);

stories.add(
  "Filters",
  () => {
    const hidePagination = boolean("Hide Pagination", false);

    return html`
      <chameleon-table
        .columns=${columnsWithFilters}
        .rows=${rows}
        .pageSize=${pageSize}
        .currentPage=${currentPage}
        .totalItems=${totalItems}
        ?hidePagination=${hidePagination}
        @chameleon.table.change=${eventDetails.action("chameleon.table.change")}
      ></chameleon-table>
    `;
  },
  { info: { inline: true } }
);

const columns = [
  {
    header: "Column 1",
    row: (row: Row): TemplateResult =>
      html`
        ${row.field1}
      `
  },
  {
    header: "Column 2",
    row: (row: Row): TemplateResult =>
      html`
        ${row.field2}
      `
  },
  {
    header: "Column 3",
    row: (row: Row): TemplateResult =>
      html`
        ${row.field3}
      `
  },
  {
    header: "Column 4",
    row: (row: Row): TemplateResult =>
      html`
        ${row.field4}
      `
  }
];

const columnsWithDetailFields = [
  {
    header: "Column 1",
    row: (row: Row): TemplateResult =>
      html`
        ${row.field1}
      `,
    detailsRow: () => nothing
  },
  {
    header: "Column 2",
    row: (row: Row): TemplateResult =>
      html`
        ${row.field2}
      `,
    detailsRow: (detailsRow: Row): TemplateResult =>
      html`
        ${detailsRow.detailsField2}
      `
  },
  {
    header: "Column 3",
    row: (row: Row): TemplateResult =>
      html`
        ${row.field3}
      `,
    detailsRow: (detailsRow: Row): TemplateResult =>
      html`
        ${detailsRow.detailsField3}
      `
  },
  {
    header: "Column 4",
    row: (row: Row): TemplateResult =>
      html`
        ${row.field4}
      `,
    detailsRow: (detailsRow: Row): TemplateResult =>
      html`
        ${detailsRow.detailsField4}
      `
  }
];

const columnsWithFilters = [
  {
    header: "Column 1",
    row: (row: Row): TemplateResult =>
      html`
        ${row.field1}
      `
  },
  {
    header: "Column 2",
    row: (row: Row): TemplateResult =>
      html`
        ${row.field2}
      `,
    filter: {
      name: "column2"
    },
    sortable: true
  },
  {
    header: "Column 3",
    row: (row: Row): TemplateResult =>
      html`
        ${row.field3}
      `,
    filter: {
      name: "filterName_column3"
    },
    searchable: true
  },
  {
    header: "Column 4",
    row: (row: Row): TemplateResult =>
      html`
        ${row.field4}
      `,
    filter: {
      name: "filterName_column4",
      items: [
        {
          value: "filter1",
          label: "Filter 1"
        },
        {
          value: "filter2",
          label: "Filter 2"
        },
        {
          value: "filter3",
          label: "Filter 3"
        }
      ]
    },
    searchable: true,
    sortable: true
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
        detailsField2: "Details Row 1 - Field 2",
        detailsField3: "Details Row 1 - Field 3",
        detailsField4: "Details Row 1 - Field 4"
      },
      {
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
        detailsField2: "Details Row 1 - Field 2",
        detailsField3: "Details Row 1 - Field 3",
        detailsField4: "Details Row 1 - Field 4"
      },
      {
        detailsField2: "Details Row 2 - Field 2",
        detailsField3: "Details Row 2 - Field 3",
        detailsField4: "Details Row 2 - Field 4"
      },
      {
        detailsField2: "Details Row 3 - Field 2",
        detailsField3: "Details Row 3 - Field 3",
        detailsField4: "Details Row 3 - Field 4"
      },
      {
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
