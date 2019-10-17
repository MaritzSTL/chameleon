import {
  LitElement,
  TemplateResult,
  customElement,
  property,
  html,
  svg,
  SVGTemplateResult
} from "lit-element";
import base from "@chameleon-ds/theme/base";
import style from "@chameleon-ds/theme/base/paginator";
import "@chameleon-ds/button";

@customElement("chameleon-paginator")
export default class ChameleonPaginator extends LitElement {
  /**
   * Properties
   */
  @property({ type: Number })
  totalItems;

  @property({ type: Number })
  pageSize;

  @property({ type: Number })
  currentPage = 1;

  @property({ type: Number })
  maxLength = 7;

  @property({ type: String })
  separator = "...";

  /**
   * Styles
   */
  static styles = [base, style];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <chameleon-button theme="text" @click="${this._previous}"
        >${this.iconLeftCircle}</chameleon-button
      >
      <ul class="pages">
        ${this.pages.map(page => {
          // debugger;
          if (page === this.currentPage) {
            return html`
              <li
                class="page current"
                data-page="${page}"
                @click="${this._goToPage}"
              >
                <span>${page}</span>
              </li>
            `;
          } else if (page !== this.separator) {
            return html`
              <li class="page" data-page="${page}" @click="${this._goToPage}">
                <span>${page}</span>
              </li>
            `;
          } else {
            return html`
              <li class="page separator"><span>${page}</span></li>
            `;
          }
        })}
      </ul>
      <chameleon-button theme="text" @click="${this._next}"
        >${this.iconRightCircle}</chameleon-button
      >
    `;
  }

  get iconLeftCircle(): SVGTemplateResult {
    return svg`<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line></svg>`;
  }

  get iconRightCircle(): SVGTemplateResult {
    return svg`<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>`;
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  get pages(): Array<number | string> {
    const result = [];
    const midPoint = Math.round(this.maxLength / 2);

    // Clamp to valid range
    this.currentPage = Math.max(1, Math.min(this.currentPage, this.totalPages));

    if (this.totalPages <= this.maxLength) {
      for (let i = 1; i <= this.totalPages; i++) {
        result.push(i);
      }
    } else if (
      this.currentPage < midPoint &&
      this.currentPage < this.maxLength
    ) {
      // 1 [2] 3 4 5 ... 8  //this.maxLength 7, this.totalPages 8, midPoint 4
      const highestNum = Math.max(midPoint, this.maxLength - 1);

      for (let i = 1; i < highestNum; i++) {
        result.push(i);
      }

      result.push(this.separator);
      result.push(this.totalPages);
    } else if (this.currentPage > this.totalPages - this.maxLength + 3) {
      // 1 ... 4 [5] 6 7 8
      result.push(1);
      result.push(this.separator);

      const offset = 3; // 1 + this.separator + 0 based offset
      const first = this.totalPages - this.maxLength + offset;

      for (let i = first; i <= this.totalPages; i++) {
        result.push(i);
      }
    } else {
      // 1 ... 3 [4] 5 ... 9
      result.push(1);
      result.push(this.separator);

      const midPages = this.maxLength - 4; // start, end, + 2 separators
      const first = this.currentPage - Math.ceil(midPages / 2) + 1; // 0 based

      for (let i = 0; i < midPages; i++) {
        result.push(first + i);
      }

      result.push(this.separator);
      result.push(this.totalPages);
    }

    return result;
  }

  _previous(): void {
    this.currentPage--;
    this.dispatchChange();
  }

  _next(): void {
    this.currentPage++;
    this.dispatchChange();
  }

  _goToPage(e: MouseEvent): void {
    this.currentPage = parseInt(
      (<HTMLElement>(<HTMLElement>e.target).closest("[data-page]")).dataset.page
    );
    this.dispatchChange();
  }

  private dispatchChange(): void {
    this.dispatchEvent(
      new CustomEvent("page-change", {
        detail: {
          currentPage: this.currentPage
        },
        composed: true,
        bubbles: true
      })
    );
  }
}
