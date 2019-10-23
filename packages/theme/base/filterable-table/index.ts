import { css } from "lit-element";

export default css`
  :host {
    --th-and-td-text-align: left;

    --row-hover-color: var(--color-surface);
    --row-highlight-color: var(--color-primary-light);

    background-color: var(--color-background);
    display: block;
    font-family: var(--font-family);
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
  }

  table th,
  table td {
    color: var(--color-black);
    line-height: 1.4;
    text-align: var(--th-and-td-text-align, initial);
    width: var(--filterable-table-column-width, initial);
  }

  table th {
    border-bottom: 3px solid var(--color-secondary);
    font-size: var(--font-size-label);
    padding: 1rem 0.5rem;
    vertical-align: top;
  }

  table td {
    border-bottom: 1px solid var(--color-gray-light);
    border-top: 1px solid var(--color-gray-light);
    font-size: var(--font-size-input);
    padding: 1.5rem 0.5rem;
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
    border-bottom: 1px solid var(--color-gray-light);
  }

  table tr.active,
  tbody:hover tr {
    background-color: var(--row-hover-color);
    transition: background-color 0.25s ease;
  }

  tr.highlight-row {
    background-color: var(--row-highlight-color);
  }

  table th .header-container {
    display: grid;
    grid-auto-rows: 1fr;
  }

  table th .header-container > * {
  }

  table th .column-header {
    display: flex;
    align-items: center;
  }

  table th .sort-container {
    display: flex;
    justify-content: space-between;
  }

  table th .sort-icons {
    padding-right: 0.7rem;
  }

  table th .sort-icons .icon-container {
    height: 1rem;
  }

  table th .sort-icons .icon-container svg {
    height: 1rem;
    width: 1rem;
  }

  table th .search-input {
    width: 100%;
  }
`;
