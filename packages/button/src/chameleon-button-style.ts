import { css } from "lit-element";

export default css`
  :host {
    --button-border-color: var(--color-primary, #2c6fb7);
    --button-hover-color: var(--color-primary-dark, #004587);
    --button-hover-text-color: var(--color-surface, #ffffff);
    --button-text-color: var(--color-primary, #2c6fb7);
    display: inline-flex;
    height: var(--button-height, 40px);
  }

  :host([full-width]) {
    width: 100%;
  }

  :host([full-width]) a,
  :host([full-width]) button {
    width: 100%;
  }

  :host([icon-only]),
  :host([theme="text"]) {
    --button-height: auto;
  }

  :host([icon-only]) button,
  :host([icon-left]) button,
  :host([icon-right]) button {
    padding: 0;
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
    border: 1px solid var(--button-border-color);
    color: var(--color-surface, #ffffff);
    cursor: pointer;
    display: flex;
    font-family: var(--font-family, sans-serif);
    font-weight: var(--font-weight, 600);
    font-size: var(--font-size-paragraph-medium, 0.938rem);
    justify-content: center;
    letter-spacing: var(--font-letter-spacing, 0.018rem);
    line-height: 1;
    padding: var(--button-padding, 0.75rem 1.375rem);
    position: relative;
    transition: background-color 150ms linear, color 150ms linear,
      border 150ms linear;
    height: 100%;
    width: 100%;
  }

  button:hover {
    background-color: var(--button-hover-color);
    border-color: var(--button-hover-color);
  }

  .secondary {
    background-color: unset;
    color: var(--button-text-color);
  }

  .secondary:hover {
    color: var(--button-hover-text-color);
  }

  .text {
    background-color: transparent;
    color: var(--color-primary, #2c6fb7);
    text-decoration: underline;
    align-self: center;
    padding: 0;
    border: none;
  }

  .text:hover {
    background-color: transparent;
    color: var(--color-primary-dark, #004587);
  }

  button[disabled].text {
    background-color: transparent;
  }

  ::slotted([slot="icon-left"]) {
    margin-right: 0.1875rem;
  }

  ::slotted([slot="icon-right"]) {
    margin-left: 0.1875rem;
  }

  ::slotted(svg) {
    height: 1.5rem;
    width: 1.5rem;
  }

  slot[name="icon-loading"] > * {
    height: calc(100% - 1rem);
    margin: 0.5rem 0;
    position: absolute;
    top: 0;
    width: 25%;
  }

  /* If the loading icon is rendered, hide the rest of the button content */
  slot[name="icon-loading"] ~ * {
    visibility: hidden;
  }
`;
