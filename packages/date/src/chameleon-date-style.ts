import { css } from "lit-element";

export default css`
  :host {
    display: block;
    max-width: 301px;
    position: relative;
    width: 301px;
  }

  .overlay {
    left: 0;
    position: absolute;
    top: calc(100% + 13px);
    width: 100%;
  }

  chameleon-input {
    width: 100%;
  }

  .day-of-week,
  .date-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    --button-padding: 0;
  }

  .date-grid {
    grid-template-rows: repeat(5, calc(301px / 7));
  }

  .date-grid.offset-1 chameleon-button:first-child {
    grid-column: 1;
  }

  .date-grid.offset-2 chameleon-button:first-child {
    grid-column: 2;
  }

  .date-grid.offset-3 chameleon-button:first-child {
    grid-column: 3;
  }

  .date-grid.offset-4 chameleon-button:first-child {
    grid-column: 4;
  }

  .date-grid.offset-5 chameleon-button:first-child {
    grid-column: 5;
  }

  .date-grid.offset-6 chameleon-button:first-child {
    grid-column: 6;
  }

  .date-grid.offset-7 chameleon-button:first-child {
    grid-column: 7;
  }

  .date-grid chameleon-button {
    --border-radius-input: 0;
    --color-primary: var(--color-gray-light, #c4c7ca);
    --color-primary-dark: var(--color-gray-dark, #9fa4a8);
    display: flex;
    justify-content: center;
    box-sizing: border-box;
  }

  .date-grid chameleon-button {
    border-left: 1px solid var(--color-gray-light, #c4c7ca);
    border-top: 1px solid var(--color-gray-light, #c4c7ca);
  }
`;
