import { css } from "lit-element";

export const ChameleonTextareaStyle = css`
  :host {
    display: inline-flex;
    flex-direction: column;
    font-family: var(--font-family, sans-serif);
  }

  textarea {
    border: 1px solid var(--color-gray-light, #c4c7ca);
    border-radius: var(--border-radius-input, 0.313rem);
    font-family: inherit;
    font-size: var(--font-size-input, 0.938rem);
    padding: var(--textarea-padding, 0.438rem 0.813rem);
  }

  textarea[nonresizeable] {
    resize: none;
  }

  label {
    color: var(--color-gray-darkest, #6c737a);
    font-size: var(--font-size-label, 0.875rem);
    margin-bottom: 10px;
  }

  .error {
    color: var(--color-error, #bc1c16);
    font-size: var(--font-size-label, 0.875rem);
    margin-top: 3px;
  }
  :host([invalid]) textarea,
  textarea.invalid {
    border-color: var(--color-error, #bc1c16);
  }
`;
