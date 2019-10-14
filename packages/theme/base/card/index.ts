import { css } from "lit-element";

export default css`
  :host {
    background-color: var(--color-surface);
    display: inline-block;
    max-width: 344px;
    padding: 16px;
  }

  :host([accentColor]) {
    border-top: 7px solid var(--color-primary);
  }

  :host([outline]) {
    border: 1px solid var(--color-gray-lightest);
  }

  :host([rounded]) {
    border-radius: var(--border-radius);
  }
`;
