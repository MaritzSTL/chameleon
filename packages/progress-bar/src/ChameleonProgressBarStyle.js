import { css } from "lit-element";

export const ChameleonProgressBarStyle = css`
  :host {
    display: inline-flex;
  }

  .progress-bar-container {
    width: 100%;
  }

  .background {
    height: 12px;
    position: relative;
    background-color: rgba(44, 111, 183, 0.05);
    padding: 4px 6px;
    border-radius: 3px;
  }

  .progress-bar {
    height: 12px;
    background-color: rgba(44, 111, 183, 1);
    border-radius: 3px;
  }

  label {
    font-family: var(--font-family, sans-serif);
    font-size: var(--font-size-label, 0.875rem);
  }

  .total-item-label {
    font-weight: bold;
    color: rgba(44, 111, 183, 1);
  }
`;
