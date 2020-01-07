import { css } from "lit-element";

export default css`
  :host {
    width: 320px;
    max-width: 33vw;
    visibility: hidden;
    transition: visibility 0.5s;
    background-color: var(--color-surface, #ffffff);
  }

  :host([sheetopened]) {
    visibility: visible;
  }

  #sheet-wrapper {
    position: fixed;
    z-index: 999;
    background-color: inherit;
    overflow: auto;
    top: 0;
    bottom: 0;
    right: 0;
    height: 100vh;
    box-sizing: border-box;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    width: inherit;
    max-width: inherit;
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  :host([sheetopened]) #sheet-wrapper {
    transform: none;
  }

  .head-container {
    position: relative;
    padding: 20px;
  }

  .header {
    font-family: var(--font-family, sans-serif);
    color: var(--color-primary, #2c6fb7);
    font-size: var(--font-size-title, 1.4rem);
    font-weight: 400;
    margin-top: 0;
  }

  .sub-header {
    display: block;
    font-family: var(--font-family, sans-serif);
    color: var(--color-primary, #2c6fb7);
    font-size: 1rem;
    font-weight: 400;
    margin: 16px 20px 0 20px;
  }

  .close-icon {
    display: flex;
    cursor: pointer;
    margin: 0;
    position: absolute;
    top: 14px;
    right: 14px;
  }

  ::slotted(p) {
    color: var(--color-gray-darkest, #6c737a);
  }

  ::slotted([slot="details"]) {
    font-size: var(--font-size-subtitle, 0.938rem);
  }

  ::slotted([slot="actions"]) {
    border-top: solid 2px #e1e3e4;
    border-bottom: solid 2px #e1e3e4;
    padding: 20px;
    font-size: var(--font-size-subtitle, 0.938rem);
  }

  ::slotted([slot="content"]) {
    padding: 0 20px;
    font-size: var(--font-size-label, 0.875rem);
  }
`;
