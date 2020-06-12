import { css } from "lit-element";

export const ChameleonChipStyle = css`
  :host {
    align-items: center;
    background-color: var(--color-primary, #2c6fb7);
    border-radius: 1.25rem;
    color: var(--color-surface, #ffffff);
    display: inline-flex;
    flex-direction: row;
    font-size: var(--font-size-input, 0.938rem);
    line-height: 1.125rem;
    padding: 4px 11px;
    transition: background-color 0.3s ease;
  }

  :host([closeable]:hover) {
    background-color: var(--color-primary-dark, #004587);
  }

  span {
    display: flex;
    cursor: pointer;
  }

  svg {
    padding-left: 10px;
    height: 13px;
  }
`;
