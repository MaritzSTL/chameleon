import { css } from "lit-element";

export default css`
  :host {
    align-items: center;
    display: grid;
    grid-template-rows: 1fr 1fr;
  }

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
    padding: var(--multiselect-padding, 0.5rem);
  }

  .mdc-text-field-error-text {
    color: var(--color-error-light, #fef0d1);
  }

  .label {
    color: var(--color-gray-darkest, #6c737a);
    display: grid;
    font-weight: 500;
    font-size: 14px;
    margin: 7px 0;
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
