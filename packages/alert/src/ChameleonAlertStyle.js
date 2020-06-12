import { css } from "lit-element";

export const ChameleonAlertStyle = css`
  :host {
    align-items: center;
    background-color: var(--color-error-lightest, #f1d1d0);
    border: 1px solid var(--color-error, #bc1c16);
    border-radius: var(--border-radius-input, 0.313rem);
    color: var(--color-error, #bc1c16);
    display: inline-flex;
    padding: 14px 10px;
  }

  .closebtn {
    color: var(--color-error, #bc1c16);
    cursor: pointer;
    display: flex;
    margin: 0px 0px 0px 15px;
  }

  .icon {
    height: 24px;
    margin: 0px 15px 0px 0px;
  }

  .message {
    font-size: var(--font-size-input, 0.938rem);
    font-weight: 600;
  }
`;
