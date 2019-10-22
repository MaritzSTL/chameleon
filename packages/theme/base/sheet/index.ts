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
    background-color: var(--color-surface);
    padding: 18px;
  }
  :host([sheetOpened]) {
    transform: translateX(0);
    padding: 18px;
  }
  .header {
    font-family: Lato;
    color: var(--color-primary);
    font-size: 24px;
    font-weight: 400;
  }
  .sub-header {
    display: block;
    font-family: Lato;
    color: var(--color-gray-darkest);
    font-size: 20px;
    font-weight: 400;
    margin-top: 20px;
  }
  .close-icon {
    display: inline-block;
    cursor: pointer;
    float: right;
    margin-right: 5px;
  }
  ::slotted(*) {
    color: var(--color-gray-darkest);
  }
  ::slotted([slot="actions"]) {
    border-top: solid 2px #e1e3e4;
    border-bottom: solid 2px #e1e3e4;
  }
`;
