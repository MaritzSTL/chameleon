import { css } from "lit-element";

export default css`
  :host {
    position: fixed;
    display: inline-block;
    height: 100%;
    right: 0;
    min-width: 320px;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  }
  :host([sheetOpened]) {
    transform: translateX(0);
  }
  .header {
    color: var(--color-primary);
    display: inline;
    font-size: 24px;
    font-weight: 400;
  }
  .sub-header {
    color: var(--color-primary);
  }
  .close-icon {
    display: inline-block;
    cursor: pointer;
    float: right;
  }
  p {
    color: var(--color-gray-darkest);
  }
`;
