import { css } from "lit-element";

export default css`
  :host {
    display: inline;
  }

  button {
    background-color: var(--color-primary);
    border: none;
    border-radius: var(--border-radius);
    color: var(--color-surface);
    font-size: var(--font-size-paragraph-medium);
    letter-spacing: var(--font-letter-spacing);
    padding: var(--button-padding);
  }
`;
