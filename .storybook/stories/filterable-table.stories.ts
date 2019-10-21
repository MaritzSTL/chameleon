import { storiesOf } from "@storybook/polymer";
import { withKnobs } from "@storybook/addon-knobs";
import { html } from "lit-element";

import "../../packages/filterable-table/src/chameleon-filterable-table";

const stories = storiesOf("Filterable Table", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

stories.add(
  "Filterable Table",
  () => {
    return html`
      <chameleon-filterable-table
        .columns=${columns}
        .rows=${rows}
        .pageSize=${pageSize}
        .totalNumPages=${totalNumPages}
        .currentPage=${currentPage}
        .totalItems=${totalItems}
        @filterChange=${filterChange}
      ></chameleon-filterable-table>
    `;
  },
  { info: { inline: true } }
);

const filterChange = () => {
  console.log("filterChange");
};

const columns = [
  {
    header: "Column 1",
    row: (row: any) => {
      return html`
        <span>hello 2</span>
      `;
      return html`
        ${row.field1}
      `;
    },
    detailsRow: (detailsRow: any, row: any) => {
      return html`
        ${detailsRow.detailField1}
      `;
    }
  },
  {
    header: "Column 2",
    row: (row: any) => {
      return html`
        ${row.field2}
      `;
    },
    detailsRow: (detailsRow: any, row: any) => {
      return html`
        ${row.detailField2}
      `;
    }
  },
  {
    header: "Column 3",
    row: (row: any) => {
      return html`
        ${row.field3}
      `;
    },
    detailsRow: (detailsRow: any, row: any) => {
      return html`
        ${row.detailField3}
      `;
    }
  },
  {
    header: "Column 4",
    row: (row: any) => {
      return html`
        ${row.field4}
      `;
    },
    detailsRow: (detailsRow: any, row: any) => {
      return html`
        ${row.detailField4}
      `;
    }
  }
];

const rows = [
  {
    field1: "Field 1",
    field2: "Field 2",
    field3: "Field 3",
    field4: "Field 4",
    showDetails: true,
    details: [
      {
        detailsField1: "detailsField 1",
        detailsField2: "detailsField 2",
        detailsField3: "detailsField 3",
        detailsField4: "detailsField 4"
      }
    ]
  },
  {
    field1: "Field 1",
    field2: "Field 2",
    field3: "Field 3",
    field4: "Field 4",
    showDetails: true,
    details: [
      {
        detailsField1: "detailsField 1",
        detailsField2: "detailsField 2",
        detailsField3: "detailsField 3",
        detailsField4: "detailsField 4"
      }
    ]
  },
  {
    field1: "Field 1",
    field2: "Field 2",
    field3: "Field 3",
    field4: "Field 4",
    showDetails: true,
    details: [
      {
        detailsField1: "detailsField 1",
        detailsField2: "detailsField 2",
        detailsField3: "detailsField 3",
        detailsField4: "detailsField 4"
      }
    ]
  },
  {
    field1: "Field 1",
    field2: "Field 2",
    field3: "Field 3",
    field4: "Field 4",
    showDetails: true,
    details: [
      {
        detailsField1: "detailsField 1",
        detailsField2: "detailsField 2",
        detailsField3: "detailsField 3",
        detailsField4: "detailsField 4"
      }
    ]
  }
];

const pageSize = 6;

const totalNumPages = 1;

const currentPage = 1;

const totalItems = 4;
