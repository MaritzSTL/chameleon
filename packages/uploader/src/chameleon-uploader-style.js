import { css } from "lit-element";

export default css`
  :host {
    display: inline-block;
    color: var(--color-gray-darkest, #6c737a);
  }

  :host([drag-active]) {
    background-color: var(--color-gray-lightest, #e1e3e4);
    border-style: solid;
  }

  chameleon-button {
    --color-primary: var(--color-gray-darkest, #6c737a);
  }

  label {
    display: block;
    font-size: var(--font-size-label, 0.875rem);
    margin-bottom: 10px;
  }

  .drop-zone {
    align-items: center;
    border: 1px dashed var(--color-gray-dark, #9fa4a8);
    border-radius: var(--border-radius, 0.5rem);
    display: inline-flex;
    flex-direction: column;
    padding: 35px 50px;
  }

  .drop-zone > .label {
    margin-bottom: 15px;
  }

  .bold {
    font-weight: bold;
  }

  svg {
    margin-bottom: 20px;
  }
`;
