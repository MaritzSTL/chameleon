import { css } from "lit-element";

export default css`
  :host {
    display: inline;
  }

  :host([full-width]) {
    flex: 1;
  }

  :host([full-width]) a,
  :host([full-width]) button {
    flex: 1;
    width: 100%;
  }

  a {
    display: inline-block;
    text-decoration: none;
  }

  button[disabled] {
    background-color: var(--color-gray-lightest, #e1e3e4);
    border-color: var(--color-gray-lightest, #e1e3e4);
    color: var(--color-gray-darkest, #6c737a);
    pointer-events: none;
  }

  button {
    align-items: center;
    background-color: var(--color-primary, #2c6fb7);
    border-radius: var(--border-radius-input, 0.313rem);
    border: 1px solid var(--color-primary, #2c6fb7);
    color: var(--color-surface, #ffffff);
    cursor: pointer;
    display: flex;
    font-family: var(--font-family, sans-serif);
    font-weight: var(--font-weight, normal);
    font-size: var(--font-size-paragraph-medium, 0.938rem);
    justify-content: center;
    letter-spacing: var(--font-letter-spacing, 0.018rem);
    padding: var(--button-padding, 0.75rem 1.375rem);
    position: relative;
    transition: all 150ms linear;
    height: var(--button-height, 40px);
  }

  button:hover {
    background-color: var(--color-primary-dark, #004587);
    border-color: var(--color-primary-dark, #004587);
  }

  .secondary {
    background-color: var(--color-surface, #ffffff);
    color: var(--color-primary, #2c6fb7);
  }

  .secondary:hover {
    color: var(--color-surface, #ffffff);
  }

  .text {
    background-color: transparent;
    border-color: transparent;
    color: var(--color-primary, #2c6fb7);
    text-decoration: underline;
    align-self: center;
  }

  .text:hover {
    background-color: transparent;
    border-color: transparent;
    color: var(--color-primary-dark, #004587);
  }

  button[disabled].text {
    background-color: transparent;
    border-color: transparent;
  }

  ::slotted([slot="icon-left"]) {
    margin-right: 0.1875rem;
  }

  ::slotted([slot="icon-right"]) {
    margin-left: 0.1875rem;
  }

  ::slotted([slot="icon-only"]) {
    padding: 0.1875rem;
  }

  slot[name="icon-loading"] > * {
    height: calc(100% - 1rem);
    margin: 0.5rem 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  /* If the loading icon is rendered, hide the rest of the button content */
  slot[name="icon-loading"] ~ * {
    visibility: hidden;
  }
`;
