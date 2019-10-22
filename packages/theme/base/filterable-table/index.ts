import { css } from "lit-element";

export default css`
  :host {
    --th-and-td-text-align: left;
    --thead-th-vert-align: bottom;

    display: block;
    font-family: var(--font-family);
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
  }

  table th {
    border-bottom: 3px solid var(--color-secondary);
    font-size: var(--font-size-label);
    padding: 0.5rem;
    vertical-align: var(--thead-th-vert-align, initial);
  }

  table td {
    border-bottom: 1px solid var(--color-gray-light);
    border-top: 1px solid var(--color-gray-light);
    font-size: var(--font-size-input);
    padding: 1.5rem 0.5rem;
  }

  table th,
  table td {
    color: var(--color-black);
    line-height: 1.4;
    text-align: var(--th-and-td-text-align, initial);
    width: var(--filterable-table-column-width, initial);
  }

  table th:first-child,
  table td:first-child {
    @media (min-width: 480px) {
      padding-left: 1rem;
    }
  }

  table th:last-child,
  table td:last-child {
    @media (min-width: 480px) {
      padding-right: 1rem;
    }
  }

  table tr.details-row td {
    border: 0;
  }

  table tr:last-child td,
  table tr.details-row:last-child td {
    border-bottom: 1px solid var(--gray-light, #c4c7ca);
  }

  tr.active,
  tbody:hover tr {
    background-color: var(--surface-color, #ffffff);
    transition: background-color 0.25s ease;

    &.highlight-row {
      background-color: var(--primary-color-light);
    }
  }
`;
