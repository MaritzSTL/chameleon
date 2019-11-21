import { css } from "lit-element";

export default css`
  :host {
    background-color: var(--color-surface, #ffffff);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
  }

  :host([outline]) {
    border: 1px solid var(--color-gray-lightest, #e1e3e4);
  }

  :host([rounded]) {
    border-radius: var(--border-radius, 0.5rem);
  }

  :host([complication]) {
    padding-top: 35px;
    position: relative;
  }

  .complication {
    background-color: var(--color-secondary, #69c9b9);
    border-radius: var(--border-radius, 0.5rem) 0 var(--border-radius, 0.5rem) 0;
    font-size: var(--font-size-label, 0.875rem);
    padding: 4px 16px;
    color: var(--color-surface, #ffffff);
    position: absolute;
    top: 0;
    left: 0;
  }
`;
