import { css } from "lit-element";

export default css`
  :host {
    align-items: center;
    cursor: pointer;
    display: inline-flex;
    font-size: var(--font-size-input, 0.938rem);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: top;
  }

  input {
    cursor: pointer;
    display: none;
  }

  .checkmark {
    background-color: transparent;
    border: 2px solid var(--color-gray-lightest, #e1e3e4);
    border-radius: 3px;
    box-sizing: border-box;
    display: inline-block;
    height: 20px;
    margin-right: 10px;
    position: relative;
    width: 20px;
  }

  /* .horizontal-line {
    border: 10px solid green;
    border-radius: 5px;
  } */

  :host:hover input ~ .checkmark {
    background-color: var(--color-surface, #ffffff);
  }

  input:checked ~ .checkmark {
    background-color: var(--color-primary, #2c6fb7);
    border: none;
  }

  .checkmark:after {
    border-bottom: 2px solid var(--color-surface, #ffffff);
    border-right: 2px solid var(--color-surface, #ffffff);
    content: "";
    display: none;
    height: 13px;
    margin-left: 7px;
    margin-top: 1px;
    transform: rotate(45deg);
    width: 4px;
  }

  input:checked ~ .checkmark::after {
    display: inline-block;
  }

  :host([disabled]) {
    pointer-events: none;
  }

  :host([disabled="true"]) input:checked ~ .checkmark {
    background-color: var(--color-gray-lightest, #e1e3e4);
  }

  :host([disabled="true"]) .checkmark {
    position: relative;
  }

  :host([disabled="true"]) .checkmark:after {
    border: none;
    background-color: var(--color-surface, #ffffff);
    height: 2px;
    width: 12px;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
