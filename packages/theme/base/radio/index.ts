import { css } from "lit-element";

export default css`
  :host {
    align-items: center;
    cursor: pointer;
    display: inline-flex;
    font-size: var(--font-size-input);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  input {
    cursor: pointer;
    display: none;
  }

  input[disabled] {
    cursor: auto;
  }

  .checkmark {
    background-color: var(--color-surface);
    border: 2px solid var(--color-gray-lightest);
    border-radius: 50%;
    box-sizing: border-box;
    display: inline-block;
    height: 20px;
    margin-right: 10px;
    position: relative;
    width: 20px;
  }

  :host:hover input ~ .checkmark {
    background-color: var(--color-surface);
  }

  input:checked ~ .checkmark {
    background-color: var(--color-primary);
    border: none;
  }

  input:checked ~ .checkmark.disabled {
    background-color: var(--color-gray-lightest);
    cursor: auto;
  }

  .checkmark:after {
    content: "";
    display: none;
    position: absolute;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    background: var(--color-surface);
    border-radius: 50%;
    height: 8px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
  }
`;
