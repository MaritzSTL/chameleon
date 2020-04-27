import { litFixture, html, expect } from "@open-wc/testing";
import sinon from "sinon";
import { TemplateResult } from "lit-element";
import { Row } from "@chameleon-ds/table/types";
import "../src/chameleon-table";

const columns = [
  {
    header: "Column 1",
    filter: {
      name: "someFilter"
    },
    searchable: true,
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
    headerClass: "right",
    columnClass: "right",
    row: (row: Row): TemplateResult =>
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
        detailsField2: "Details Row 2 - Field 2",
        detailsField3: "Details Row 2 - Field 3",
        detailsField4: "Details Row 2 - Field 4"
      }
    ]
  }
];

const fixture = html`
  <chameleon-table
    .rows="${rows}"
    .columns="${columns}"
    .pageSize="${6}"
    .currentPage="${1}"
    .totalItems="${12}"
  ></chameleon-table>
`;

describe("chameleon-table", () => {
  let element;

  beforeEach(async () => {
    element = await litFixture(fixture);
  });

  it("renders", () => {
    expect(Boolean(element.shadowRoot)).to.equal(true);
  });

  it("doesn't render pagination if .hidePagination is true", async () => {
    element.hidePagination = true;
    element.requestUpdate();
    await element.updateComplete;

    expect(element).shadowDom.to.equalSnapshot();
  });

  describe("icons", () => {
    it("renders chevronUpIcon", async () => {
      const icon = await litFixture(element.chevronUpIcon);

      expect(icon).lightDom.to.equalSnapshot();
    });

    it("renders chevronDownIcon", async () => {
      const icon = await litFixture(element.chevronDownIcon);

      expect(icon).lightDom.to.equalSnapshot();
    });
  });

  it("renderColumnSort", async () => {
    const fixture = await litFixture(
      element.renderColumnSort({
        header: "Column 1",
        sortable: true,
        row: (row: Row): TemplateResult =>
          html`
            ${row.field1}
          `
      })
    );

    expect(fixture).to.equalSnapshot();
  });

  it("renderColumnSort returns nothing if column.sortable is not set", async () => {
    const fixture = await litFixture(
      element.renderColumnSort({
        header: "Column 1",
        row: (row: Row): TemplateResult =>
          html`
            ${row.field1}
          `
      })
    );

    expect(fixture).to.be.undefined;
  });

  it("renderColumnSort calls handleSort", async () => {
    const spy = sinon.stub(element, "handleSort");
    const fixture = await litFixture(
      element.renderColumnSort({
        header: "Column 1",
        sortable: true,
        row: (row: Row): TemplateResult =>
          html`
            ${row.field1}
          `
      })
    );

    (fixture.querySelector(".sort-ascending") as HTMLElement).click();
    (fixture.querySelector(".sort-descending") as HTMLElement).click();

    expect(spy).to.be.calledTwice;
  });

  it("sortActiveClass", async () => {
    expect(element.sortActiveClass()).to.equal("");
    element.sort = { orderBy: "asdf", order: "ASC" };
    expect(
      element.sortActiveClass({ filter: { name: "asdf" } }, "ASC")
    ).to.equal("active");
  });

  describe("handleFilterChange", () => {
    it("sets filter", () => {
      const stub = sinon.stub(element, "dispatchChangeEvent");
      element.handleFilterChange("asdf", { filter: { name: "asdf" } });

      expect(element.filters["asdf"]).to.equal("asdf");
      expect(stub).to.be.called;
    });

    it("doesn't dispatch event if column.filter.name isn't set", () => {
      const stub = sinon.stub(element, "dispatchChangeEvent");
      element.handleFilterChange();

      expect(stub).to.not.be.called;
    });
  });

  it("handleSort", () => {
    const stub = sinon.stub(element, "dispatchChangeEvent");
    element.handleSort({ filter: { name: "asdf" } }, {});

    expect(element.sort).to.eql({ order: {}, orderBy: "asdf" });
    expect(stub).to.be.called;

    element.handleSort(null, {});

    expect(element.sort).to.eql({ order: {}, orderBy: "" });
  });

  it("handlePageChange", () => {
    const stub = sinon.stub(element, "dispatchChangeEvent");
    element.handlePageChange({ detail: { currentPage: 5 } });

    expect(element.currentPage).to.equal(5);
    expect(stub).to.be.called;
  });

  it("dispatches change event", () => {
    const stub = sinon.stub(element, "dispatchEvent");
    element.dispatchChangeEvent();

    expect(stub).to.be.calledWith(new CustomEvent("chameleon.table.change"));
  });
});
