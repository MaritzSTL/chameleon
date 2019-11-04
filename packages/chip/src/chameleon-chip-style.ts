import { css } from "lit-element";

export default css`
  :host {
    background-color: var(--color-primary, #2c6fb7);
    border-radius: 0.75em;
    display: inline-block;
    transition: background-color 0.3s ease;
  }

  :host([closeable]:hover) {
    background-color: var(--color-primary-dark, #004587);
    cursor: pointer;
  }

  span {
    align-items: center;
    color: var(--color-surface, #ffffff);
    display: flex;
    flex-direction: row;
    font-size: var(--font-size-input, 0.938rem);
    padding: 3px 14px;
  }

  svg {
    padding-left: 10px;
  }
`;
