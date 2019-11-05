import { css } from "lit-element";

export default css`
  :host {
    display: inline-block;
    padding: 20px;
    border-radius: var(--border-radius-input, 0.313rem);
    background-color: var(--color-error-lightest, #fef0d1);
    color: var(--color-error, #bc1c16);
  }

  .closebtn {
    margin: 0px 0px 0px 15px;
    color: var(--color-error, #bc1c16);
    cursor: pointer;
    transition: 0.3s;
  }

  .closebtn:hover {
    color: black;
  }

  .icon {
    margin: 0px 15px 0px 0px;
    height: 24px;
  }

  .message: {
    font-size: var(--font-size-input, 0.938rem);
  }
`;
