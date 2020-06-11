import { LitElement, property, html } from "lit-element";
import { svg, nothing } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import style from "./chameleon-table-style.js";
import "@chameleon-ds/input";
import "@chameleon-ds/multiselect";
import "@chameleon-ds/paginator";

export default class ChameleonTable extends LitElement {
  /**
   * Properties
   */
  @property({ type: Array })
  columns = [];

  @property({ type: Array })
  rows = [];

  @property({ type: Number })
  highlightRow = null;

  @property({ type: Object })
  filters = {};

  @property({ type: Object })
  sort = {
    orderBy: "",
    order: "ASC",
  };

  @property({ type: Number })
  pageSize = 10;

  @property({ type: Number })
  totalItems = 0;

  @property({ type: Number })
  currentPage = 1;

  @property({ type: Boolean })
  hidePagination = false;

  /**
   * Styles
   */
  static styles = [style];

  /**
   * Template
   */
  render() {
    return html`
      <table>
        <thead>
          <tr>
            ${this.columns.map(
              (column) => html`
                <th class=${column.headerClass ?? ""}>
                  <div class="header-container">
                    ${this.renderColumnHeader(column)}
                  </div>
                </th>
              `
            )}
          </tr>
        </thead>

        ${this.rows.map((row, index) => {
          return html`
            <tbody>
              <tr
                class=${classMap({
                  "highlight-row": index === this.highlightRow,
                  "show-details": row.showDetails || false,
                })}
                data-row=${index}
              >
                ${this.columns.map(
                  (column) =>
                    html`
                      <td class=${column.columnClass ?? ""}>
                        ${column.row(row)}
                      </td>
                    `
                )}
              </tr>

              ${row.details && row.showDetails
                ? row.details.map((detailsRow, index) => {
                    return html`
                      <tr
                        class="details-row ${classMap({
                          "highlight-row": index === this.highlightRow,
                          "show-details": row.showDetails || false,
                        })}"
                        data-row=${index}
                      >
                        ${this.columns.map((column) =>
                          column.detailsRow
                            ? html`
                                <td>
                                  ${column.detailsRow(detailsRow, row)}
                                </td>
                              `
                            : nothing
                        )}
                      </tr>
                    `;
                  })
                : nothing}
            </tbody>
          `;
        })}
      </table>

      ${this.hidePagination || this.totalItems <= this.pageSize
        ? nothing
        : html`
            <chameleon-paginator
              totalItems=${this.totalItems}
              pageSize=${this.pageSize}
              currentPage=${this.currentPage}
              @page-change=${this.handlePageChange}
            ></chameleon-paginator>
          `}
    `;
  }

  renderColumnHeader(column) {
    return column?.filter?.name
      ? column.filter.items
        ? html`
            <div class="column-header">
              ${column.header} ${this.renderColumnSort(column)}
            </div>

            <chameleon-multiselect
              class="filter"
              .placeholder="${column.filter.placeholder ?? "Filter by"}"
              .options=${column.filter.items}
              @chameleon.select=${(e) =>
                this.handleFilterChange(e.detail.value, column)}
            >
              ${this.chevronDownIcon}
            </chameleon-multiselect>
          `
        : html`
            <div class="column-header">
              ${column.header} ${this.renderColumnSort(column)}
            </div>

            ${column.searchable &&
            html`
              <chameleon-input
                class="search"
                outlined
                .placeholder="${column.filter.placeholder ?? "Search"}"
                name=${column.filter.name}
                @chameleon.input.input=${(e) =>
                  this.handleFilterChange(e.detail.value, column)}
              ></chameleon-input>
            `}
          `
      : html`
          <div class="column-header">
            ${column.header}
          </div>
        `;
  }

  renderColumnSort(column) {
    return column.sortable
      ? html`
          <div class="sort-icons">
            <div
              class="
              icon-container
              sort-ascending
              ${this.sortActiveClass(column, "ASC")}
              "
              @click=${() => this.handleSort(column, "ASC")}
            >
              ${this.chevronUpIcon}
            </div>

            <div
              class="
              icon-container
              sort-descending
              ${this.sortActiveClass(column, "DESC")}
              "
              @click=${() => this.handleSort(column, "DESC")}
            >
              ${this.chevronDownIcon}
            </div>
          </div>
        `
      : nothing;
  }

  sortActiveClass(column, order) {
    return column?.filter?.name &&
      this.sort.orderBy === column.filter.name &&
      this.sort.order === order
      ? "active"
      : "";
  }

  handleFilterChange(filterValue, column) {
    if (column?.filter?.name) {
      this.filters[column.filter.name] = filterValue;
      this.dispatchChangeEvent();
    }
  }

  handleSort(column, order) {
    this.sort = {
      order: order,
      orderBy: column?.filter?.name || "",
    };

    this.dispatchChangeEvent();
    this.requestUpdate();
  }

  handlePageChange(e) {
    this.currentPage = e.detail.currentPage;

    this.dispatchChangeEvent();
  }

  dispatchChangeEvent() {
    const eventDetail = {
      detail: {
        filters: this.filters,
        sort: this.sort,
        page: this.currentPage,
      },
      bubbles: true,
      composed: true,
    };

    this.dispatchEvent(new CustomEvent("chameleon.table.change", eventDetail));
  }

  get chevronUpIcon() {
    return svg`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-chevron-up"
      >
        <polyline points="4 18 12 10 20 18"></polyline>
      </svg>
    `;
  }

  get chevronDownIcon() {
    return svg`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-chevron-down"
        slot="icon"
      >
        <polyline points="4 6 12 14 20 6"></polyline>
      </svg>
    `;
  }
}

if (!window.customElements.get("chameleon-table"))
  window.customElements.define("chameleon-table", ChameleonTable);
