import { css } from "lit-element";

export default css`
  :host {
    display: inline-flex;
    flex-direction: column;
  }

  input {
    border: 1px solid var(--color-gray-light);
    border-radius: var(--border-radius-input);
    box-sizing: border-box;
    font-size: var(--font-size-input);
    max-width: 100%;
    padding: var(--input-padding);
  }

  label {
    color: var(--color-gray-darkest);
    font-size: var(--font-size-label);
    margin-bottom: 10px;
  }

  .error {
    color: var(--color-error);
    font-size: var(--font-size-label);
    margin-top: 3px;
  }

  .input-wrapper {
    position: relative;
  }

  .input-wrapper.icon-left input {
    padding-left: 45px;
  }

  .input-wrapper.icon-right input {
    padding-right: 45px;
  }

  // We currently only support svg icons
  svg {
    width: 100%;
    height: 100%;
    color: var(--color-gray-darkest);
  }

  ::slotted(*) {
    color: var(--color-gray-darkest);
    height: 18px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: auto;
  }

  ::slotted([slot="icon-left"]) {
    left: 13px;
  }

  ::slotted([slot="icon-right"]) {
    right: 13px;
  }
`;
