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
  }

  :host([sheetopened]) {
    transform: translateX(0);
  }

  .head-container {
    position: relative;
    padding: 20px;
  }

  .header {
    font-family: var(--font-family);
    color: var(--color-primary);
    font-size: var(--font-size-title);
    font-weight: 400;
    margin-top: 0;
  }

  .sub-header {
    display: block;
    font-family: var(--font-family);
    color: var(--color-primary);
    font-size: 1rem;
    font-weight: 400;
    margin: 16px 20px 0 20px;
  }

  .close-icon {
    display: flex;
    cursor: pointer;
    margin: 20px 20px 0 0;
    position: absolute;
    top: 0;
    right: 0;
  }

  ::slotted(p) {
    color: var(--color-gray-darkest);
  }

  ::slotted([slot="details"]) {
    font-size: var(--font-size-subtitle);
  }

  ::slotted([slot="actions"]) {
    border-top: solid 2px #e1e3e4;
    border-bottom: solid 2px #e1e3e4;
    padding: 20px;
    font-size: var(--font-size-subtitle);
  }

  ::slotted([slot="content"]) {
    padding: 0 20px;
    font-size: var(--font-size-label);
  }
`;
