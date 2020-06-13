import { css } from "lit-element";

export const ChameleonDateStyle = css`
  :host {
    display: block;
    max-width: 301px;
    position: relative;
    width: 301px;
  }

  .delete {
    position: absolute;
    right: 0.5rem;
    top: 2.25rem;
  }

  .overlay {
    background-color: var(--color-surface, #ffffff);
    border-radius: var(--border-radius-input, 0.313rem);
    box-shadow: 0 5px 12px 0 rgba(31, 40, 91, 0.2),
      0 2px 6px -1px rgba(31, 40, 91, 0.12), 0 1px 4px 0 rgba(31, 40, 91, 0.14);
    box-sizing: border-box;
    color: var(--color-gray-darkest, #6c737a);
    left: 0;
    padding: var(--input-padding, 0.625rem 0.5rem);
    position: absolute;
    top: calc(100% + 13px);
    width: 100%;
    z-index: 1;
  }

  .overlay h3 {
    font-size: var(--font-size-table-header, 1rem);
  }

  .overlay.month h3 {
    cursor: pointer;
  }

  .overlay header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .overlay.year header {
    justify-content: space-around;
  }

  .overlay header svg {
    color: var(--color-gray-darkest, #6c737a);
    height: 25px;
  }

  .overlay.year .month {
    align-items: center;
    cursor: pointer;
    display: flex;
    height: 50px;
    justify-content: center;
  }

  chameleon-input {
    width: 100%;
    position: relative;
  }

  .day-of-week,
  .date-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    --button-padding: 0;
  }

  .day-of-week {
    margin-bottom: 5px;
    text-align: center;
  }

  .date-grid {
    font-weight: bold;
    grid-gap: 1px;
  }

  .overlay.year .date-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .date-grid.offset-0 div:first-child {
    grid-column: 1;
  }

  .date-grid.offset-1 div:first-child {
    grid-column: 2;
  }

  .date-grid.offset-2 div:first-child {
    grid-column: 3;
  }

  .date-grid.offset-3 div:first-child {
    grid-column: 4;
  }

  .date-grid.offset-4 div:first-child {
    grid-column: 5;
  }

  .date-grid.offset-5 div:first-child {
    grid-column: 6;
  }

  .date-grid.offset-6 div:first-child {
    grid-column: 7;
  }

  .date-grid div {
    align-items: center;
    box-shadow: 0 0 0 1px var(--color-gray-dark, #9fa4a8);
    color: var(--color-gray-darkest, #6c737a);
    display: flex;
    height: calc(285px / 7);
    justify-content: center;
  }

  .date-grid div:hover {
    background-color: var(--color-gray-lightest, #e1e3e4);
    cursor: pointer;
  }

  .date-grid div[disabled] {
    background-color: var(--color-gray-lightest, #e1e3e4);
    pointer-events: none;
  }

  .date-grid div.active {
    background-color: var(--color-secondary-dark, #349889);
    color: var(--color-surface, #ffffff);
  }

  .date-grid div.current:not(.active) {
    color: var(--color-secondary, #69c9b9);
  }
`;
