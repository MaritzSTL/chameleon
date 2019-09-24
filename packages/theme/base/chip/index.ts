import { css } from "lit-element";

export default css`
  :host {
    display: inline-block;
  }
  div {
    margin-bottom: 6px;
    margin-right: 3px;
    display: inline-block;
    border-radius: 12px;
    background-color: var(--primary-color, #2c6fb7);
  }
  div span {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    padding: 3px 14px;
    font-size: 14px;
    font-family: var(--app-body-font), Arial;
    font-weight: normal;
    color: var(--surface-color, #fff);
  }
  div span svg {
    padding-left: 10px;
    height: 12px;
  }
  .closeable:hover {
    animation: chip-hover 0.3s ease;
    animation-fill-mode: forwards;
  }
  @keyframes chip-hover {
    0% {
      background-color: var(--primary-color, #2c6fb7);
    }
    100% {
      background-color: var(--primary-color-dark, #004587);
    }
  }
  .closeable i {
    cursor: pointer;
  }
`;
