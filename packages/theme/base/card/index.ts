import { css } from "lit-element";

export default css`
  :host {
    background-color: var(--color-surface);
    display: inline-block;
    max-width: 344px;
    padding: 10px;
  }

  :host([outline]) {
    border: 1px solid var(--color-gray-lightest);
  }
`;
