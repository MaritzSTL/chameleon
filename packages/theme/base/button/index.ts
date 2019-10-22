import { css } from "lit-element";

export default css`
  :host {
    display: inline;
  }

  :host([full-width]) button {
    width: 100%;
  }

  button[disabled] {
    background-color: var(--color-gray-lightest);
    border-color: var(--color-gray-lightest);
    color: var(--color-gray-darkest);
    pointer-events: none;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
    border-radius: var(--border-radius-input);
    color: var(--color-surface);
    cursor: pointer;
    font-size: var(--font-size-paragraph-medium);
    font-family: inherit;
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
    align-self: center;
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

  ::slotted([slot="icon-left"]) {
    margin-right: 0.1875rem;
  }

  ::slotted([slot="icon-right"]) {
    margin-left: 0.1875rem;
  }

  ::slotted([slot="icon-only"]) {
    padding: 0.1875rem;
  }
`;
