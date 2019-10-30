import { css } from "lit-element";

export default css`
  :host {
    display: flex;
  }

  :host(chameleon-alert) {
    padding: 0.75rem 1.25rem;
    margin: 1rem 0 1rem 0;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    line-height: 1.5;
    font-size: 16px;
    font-weight: 400;
  }

  :host(chameleon-alert[success]) {
    border: 1px solid rgba(6, 132, 63, 0.8);
    background-color: rgba(6, 132, 63, 0.1);
    color: rgba(6, 132, 63, 1);
  }

  .fa-times {
    height: 24px;
    cursor: pointer;
  }
`;
