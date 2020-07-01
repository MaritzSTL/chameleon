import { css } from "lit-element";

export const ChameleonTimezoneStyle = css`
  :host([readonly]),
  :host([disabled]) {
    pointer-events: none;
  }

  :host([disabled]) * {
    background-color: #f5f5f8;
  }

  input {
    border: 1px solid #e8e8e8);
    border-radius: var(--border-radius-input, 5px);
    font-family: inherit;
    font-size: 16px;
    padding: var(--select-padding, 0.438rem 0.5rem);
  }

  .mdc-text-field-error-text {
    color: var(--color-error-light, #fef0d1);
  }

  .label {
    color: var(--color-gray-darkest, #6c737a);
    font-family: var(--font-family, sans-serif);
    font-size: var(--font-size-label, 0.875rem);
    display: grid;
    font-weight: 500;
    font-size: 14px;
    margin: 7px 0;
  }
  
  .datetime-inputs.invalid .label{
    color: var(--color-error, #bc1c16);
  }

  @media screen and (max-width: 768px) {
    .inputSpacing {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }

  @media screen and (max-width: 375px) {
    .inputSpacing {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }
  }
`;
