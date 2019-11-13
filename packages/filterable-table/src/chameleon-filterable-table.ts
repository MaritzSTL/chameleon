import {
  LitElement,
  TemplateResult,
  customElement,
  property,
  html
} from "lit-element";
import { svg, nothing } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";

import "@chameleon-ds/multiselect/src/chameleon-multiselect";
import "@chameleon-ds/paginator/src/chameleon-paginator";

import style from "./chameleon-filterable-table-style";
import {
  Column,
  Columns,
  Row,
  Rows,
  Filters,
  ChangeCustomEvent
} from "../types";

@customElement("chameleon-filterable-table")
export default class ChameleonFilterableTable extends LitElement {
  /**
   * Properties
   */
  @property({ type: Array })
  columns = [] as Columns;

  @property({ type: Array })
  rows = [] as Rows;

  @property({ type: Number })
  highlightRow = null;

  @property({ type: Object })
  filters = {} as Filters;

  @property({ type: Number })
  currentPage = 1;

  /**
   * Styles
   */
  static styles = [style];

  /**
   * Template
   */
  render(): TemplateResult {
    console.log("columns");
    console.log(this.columns);
    console.log("rows");
    console.log(this.rows);
    return html`
      <table>
        <thead>
          <tr>
            ${this.columns.map(
              column => html`
                <th>
                  <div class="header-container">
                    ${this.renderColumnHeader(column)}
                  </div>
                </th>
              `
            )}
          </tr>
        </thead>

        ${this.rows.map(
          (row: Row, index: number): TemplateResult => {
            return html`
              <tbody>
                <tr
                  class=${classMap(this.rowClassMap(row, index))}
                  data-row=${index}
                >
                  ${this.columns.map(
                    (column: Column) =>
                      html`
                        <td>
                          ${column.row(row)}
                        </td>
                      `
                  )}
                </tr>

                ${row.details && row.showDetails
                  ? row.details.map(
                      (detailsRow: Row, index: number): TemplateResult => {
                        return html`
                          <tr
                            class="details-row ${classMap(
                              this.rowClassMap(row, index)
                            )}"
                            data-row=${index}
                          >
                            ${this.columns.map((column: Column) =>
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
                      }
                    )
                  : nothing}
              </tbody>
            `;
          }
        )}
      </table>

      <chameleon-paginator
        totalItems=${100}
        pageSize=${6}
        @page-change=${this.handlePageChange}
      ></chameleon-paginator>
    `;
  }

  rowClassMap(row: Row, index: number): any {
    return {
      "highlight-row": index === this.highlightRow,
      "show-details": row.showDetails
    };
  }

  renderColumnHeader(column: Column): TemplateResult {
    return column.filter && column.filter.name
      ? column.filter.items
        ? html`
            <div class="column-header">
              ${column.header} ${this.renderColumnSort(column)}
            </div>

            <chameleon-multiselect
              class="filter"
              .label="${`this is the label`}"
              .placeholder="${`Filter by`}"
              .options=${column.filter.items}
              @chameleon.select=${(e: CustomEvent) =>
                this.handleFilterChange(e.detail.value, column)}
            ></chameleon-multiselect>
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
                  placeholder="Search"
                  name=${column.filter.name}
                  @chameleon.input.input=${(e: CustomEvent) =>
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

  renderColumnSort(column: Column) {
    return column.sortable
      ? html`
          <div class="sort-container">
            <div
              class="sort-icons"
              @click=${(e: CustomEvent) => this.handleSort(e, column)}
            >
              <div class="icon-container">
                ${this.chevronUpIcon}
              </div>

              <div class="icon-container">
                ${this.chevronDownIcon}
              </div>
            </div>
          </div>
        `
      : nothing;
  }

  private handleFilterChange(filterValue: string, column: Column) {
    if (column.filter && column.filter.name) {
      this.filters[column.filter.name] = filterValue;

      this.dispatchChangeEvent();
    }
  }

  private handleSort(e: CustomEvent, column: Column): void {
    console.log(e);
    console.log(column);
    // this.dispatchChangeEvent();
  }

  private handlePageChange(e: CustomEvent): void {
    this.currentPage = e.detail.currentPage;

    this.dispatchChangeEvent();
  }

  private dispatchChangeEvent(): void {
    const eventDetail: ChangeCustomEvent = {
      detail: {
        filters: this.filters,
        page: this.currentPage
      },
      bubbles: true,
      composed: true
    };

    this.dispatchEvent(
      new CustomEvent("chameleon.filterable-table.change", eventDetail)
    );
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
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-chevron-up"
      >
        <polyline points="18 15 12 9 6 15"></polyline>
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
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-chevron-down"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    `;
  }
}
