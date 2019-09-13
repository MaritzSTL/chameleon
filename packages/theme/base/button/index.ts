import { css } from "lit-element";

export default css`
  :host {
    display: inline;
  }

  button[disabled] {
    background-color: var(--color-gray-lightest);
    border-color: var(--color-gray-lightest);
    color: var(--color-gray-darkest);
  }

  button {
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
    border-radius: var(--border-radius-input);
    color: var(--color-surface);
    cursor: pointer;
    font-size: var(--font-size-paragraph-medium);
    letter-spacing: var(--font-letter-spacing);
    padding: var(--button-padding);
    transition: all 150ms linear;
  }

  button:hover {
    background-color: var(--color-primary-dark);
    border-color: var(--color-primary-dark);
  }

  .secondary {
    background-color: var(--color-surface);
    color: var(--color-primary);
  }

  .secondary:hover {
    color: var(--color-surface);
  }

  .text {
    background-color: transparent;
    border-color: transparent;
    color: var(--color-primary);
    text-decoration: underline;
  }

  .text:hover {
    background-color: transparent;
    border-color: transparent;
    color: var(--color-primary-dark);
  }

  button[disabled].text {
    background-color: transparent;
    border-color: transparent;
  }
`;
