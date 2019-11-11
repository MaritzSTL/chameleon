import { css } from "lit-element";

export default css`
  :host {
    display: block;
    position: relative;
  }

  .overlay {
    position: absolute;
    top: calc(100% + 13px);
    left: 0;
  }

  chameleon-input:focus + .overlay {
  }

  .day-of-week,
  .date-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
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
`;
