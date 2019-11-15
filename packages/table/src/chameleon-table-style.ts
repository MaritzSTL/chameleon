import { css } from "lit-element";

export default css`
  :host {
    --th-and-td-text-align: left;

    --row-hover-color: var(--color-surface, #ffffff);
    --row-highlight-color: var(--color-primary-light, #679dea);

    display: block;
    font-family: var(--font-family, sans-serif);
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
  }

  table th,
  table td {
    color: var(--color-black, #252a33);
    line-height: 1.4;
    text-align: var(--th-and-td-text-align, initial);
    width: var(--table-column-width, initial);
  }

  table th {
    border-bottom: 3px solid var(--color-secondary, #69c9b9);
    font-size: var(--font-size-table-header, 1rem);
    padding: 1rem 0.5rem;
    vertical-align: top;
  }

  table td {
    border-bottom: 1px solid var(--color-gray-light, #c4c7ca);
    border-top: 1px solid var(--color-gray-light, #c4c7ca);
    font-size: var(--font-size-table-content, 0.875rem);
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
    border-bottom: 1px solid var(--color-gray-light, #c4c7ca);
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
    align-items: center;
    display: grid;
    grid-auto-rows: 2em 1fr;
    width: 100%;
  }

  table th .column-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  table th .sort-icons {
    margin-right: 0.5rem;
    opacity: 0.5;
  }

  table th .sort-icons .icon-container {
    color: var(--color-primary-light, #679dea);
    cursor: pointer;
    height: 1rem;
    opacity: 0.5;
    transition: all 0.1s ease;
  }

  table th .sort-icons .icon-container.active,
  table th .sort-icons .icon-container:hover {
    color: var(--color-primary, #2c6fb7);
    opacity: 1;
    transition: all 0.2s ease;
  }

  table th .sort-icons .icon-container svg {
    height: 1rem;
    width: 1rem;
  }

  table th .filter,
  table th .search {
    display: flex;
    margin-top: 0.5rem;
  }

  chameleon-paginator {
    display: flex;
    justify-content: center;
  }
`;
