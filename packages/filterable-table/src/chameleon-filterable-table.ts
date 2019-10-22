import {
  LitElement,
  TemplateResult,
  customElement,
  property,
  html
} from "lit-element";
import { nothing } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";

import base from "@chameleon-ds/theme/base";
import style from "@chameleon-ds/theme/base/filterable-table";

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
  highlightRow: null;

  /**
   * Styles
   */
  static styles = [base, style];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <table>
        <thead>
        </thead>
          <tr>
            ${this.columns.map(
              column => html`
                <th>
                  ${this.getColumnHeader(column)}
                </th>
              `
            )}
          </tr>
        </thead>

        <tbody>
          ${this.rows.map(
            (row: any, index: number): TemplateResult => {
              return html`
                <tr
                  class=${classMap(this.rowClassMap(row, index))}
                  data-row=${index}
                >
                  ${this.columns.map(
                    column =>
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
                            ${this.columns.map(
                              column =>
                                html`
                                  <td>
                                    ${column.detailsRow(detailsRow, row)}
                                  </td>
                                `
                            )}
                          </tr>
                        `;
                      }
                    )
                  : nothing}
              `;
            }
          )}
        </tbody>
      </table>
    `;
  }

  getColumnHeader(column: any) {
    return html`
      <span>${column.header}</span>
    `;
  }

  getColumnSort(column: any) {
    return html`
      <span class="fa-stack fa-1x"></span>
    `;
  }

  rowClassMap(item: any, index: number): any {
    return {
      "highlight-row": index === this.highlightRow,
      "show-details": item.showDetails
    };
  }
}
