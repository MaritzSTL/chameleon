import { css } from "lit-element";

export default css`
  :host {
    font-family: var(--font-family);
  }

  .component-wrapper {
    display: inline-flex;
    flex-direction: column;
  }

  input {
    border: 1px solid var(--color-gray-light);
    border-radius: var(--border-radius-input);
    box-sizing: border-box;
    font-size: var(--font-size-input);
    font-family: var(--font-family);
    max-width: 100%;
    padding: var(--input-padding);
    width: 100%;
  }

  .invalid input {
    border-color: var(--color-error);
  }

  .component-wrapper:hover:not(.invalid) input:not([disabled]),
  .component-wrapper:active:not(.invalid) input:not([disabled]) {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }

  label {
    color: var(--color-gray-darkest);
    font-size: var(--font-size-label);
    margin-bottom: 10px;
  }

  label.invalid {
    color: var(--color-error);
  }

  :host:not([disabled]) .component-wrapper:hover label:not(.invalid),
  :host:not([disabled]) .component-wrapper:active label:not(.invalid) {
    color: var(--color-primary);
  }

  .error {
    color: var(--color-error);
    font-size: var(--font-size-label);
    margin-top: 3px;
    display: flex;
    align-items: center;
  }

  .error svg {
    padding-right: 0.5rem;
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

  .invalid ::slotted(svg) {
    color: var(--color-error);
  }

  ::slotted([slot="icon-left"]) {
    left: 13px;
  }

  ::slotted([slot="icon-right"]) {
    right: 13px;
  }
`;
