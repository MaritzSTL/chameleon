import { css } from "lit-element";

export default css`
  :host {
    background-color: var(--color-primary);
    border-radius: 12px;
    display: inline-block;
    transition: background-color 0.3s ease;
  }

  :host([closeable]:hover) {
    background-color: var(--color-primary-dark);
    cursor: pointer;
  }

  span {
    align-items: center;
    color: var(--color-surface);
    display: flex;
    flex-direction: row;
    font-size: var(--font-size-input);
    padding: 3px 14px;
  }

  ::slotted(svg) {
    padding-left: 10px;
    height: 12px;
    width: auto;
  }
`;
