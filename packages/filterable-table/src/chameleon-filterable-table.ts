import {
  LitElement,
  TemplateResult,
  customElement,
  property,
  html
} from "lit-element";
import { svg, nothing } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { isEqual } from "lodash";

import "@chameleon-ds/multiselect/src/chameleon-multiselect";
import "@chameleon-ds/paginator/src/chameleon-paginator";

import style from "./chameleon-filterable-table-style";

@customElement("chameleon-filterable-table")
export default class ChameleonFilterableTable extends LitElement {
  constructor() {
    super();
  }

  /**
   * Lifecycle Methods
   */
  firstUpdated() {}

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
  params = {};

  /**
   * Styles
   */
  static styles = [style];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <table>
        <thead>
          <tr>
            ${this.columns.map(
              column => html`
                <th>
                  <div class="header-container">
                    ${this.getColumnHeader(column)}
                  </div>
                </th>
              `
            )}
          </tr>
        </thead>

        ${this.rows.map(
          (row: any, index: number): TemplateResult => {
            return html`
              <tbody>
                <tr
                  class=${classMap(this.rowClassMap(row, index))}
                  data-row=${index}
                >
                  ${this.columns.map(
                    (column: any) =>
                      html`
                        <td>
                          ${column.row(row)}
                        </td>
                      `
                  )}
                </tr>

                ${row.details && row.showDetails
                  ? row.details.map(
                      (detailsRow: any, index: number): TemplateResult => {
                        return html`
                          <tr
                            class="details-row ${classMap(
                              this.rowClassMap(row, index)
                            )}"
                            data-row=${index}
                          >
                            ${this.columns.map((column: any) =>
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
      ></chameleon-paginator>
    `;
  }

  rowClassMap(item: any, index: number): any {
    return {
      "highlight-row": index === this.highlightRow,
      "show-details": item.showDetails
    };
  }

  getColumnHeader(column: any): TemplateResult {
    return column.filter && column.filter.name
      ? column.filter.items
        ? html`
            <div class="sort-container">
              <span class="column-header">
                ${column.header}
              </span>

              ${this.getColumnSort(column)}
            </div>
            <chameleon-multiselect></chameleon-multiselect>
            <!-- <chameleon-filterable-search
              .items=""
              .placeholder="${column.filterableSearchPlaceholder}"
              .name="${column.filter.name}"
              @selection-changed="${this.handleSelectionChanged}"
            ></chameleon-filterable-search> -->
          `
        : html`
            <div class="sort-container">
              <span class="column-header">
                ${column.header}
              </span>

              ${this.getColumnSort(column)}
            </div>

            ${column.searchable &&
              html`
                <chameleon-input
                  class="search-input"
                  outlined
                  placeholder="Search"
                  name=${column.filter.name}
                  @input=${this.handleFilterInput}
                ></chameleon-input>
              `}
          `
      : html`
          <span>
            ${column.header}
          </span>
        `;
  }

  getColumnSort(column: any) {
    return column.sortable
      ? html`
          <div
            class="sort-icons"
            @click=${(e: any) => this.handleSortClick(e, column)}
          >
            <div class="icon-container">
              ${this.chevronUpIcon()}
            </div>

            <div class="icon-container">
              ${this.chevronDownIcon()}
            </div>
          </div>
        `
      : nothing;
  }

  getSelectableItems() {}

  handleSelectionChanged() {}

  handleFilterInput(e: CustomEvent) {
    if (!isEqual(this.params, e.detail.params)) {
      this.params = JSON.parse(JSON.stringify(e.detail.params));

      // const currentPage = e.detail.paginationOnly
      //   ? e.detail.params.pagination.currentPage
      //   : 1;

      // This is where we fetch more results with the updated filter
    }
  }

  handleSortClick(e: any, column: any) {
    console.log(e, column);
  }

  chevronUpIcon() {
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

  chevronDownIcon() {
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
