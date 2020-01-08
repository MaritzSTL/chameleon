import { css } from "lit-element";

export default css`
  :host {
    display: inline-block;
    max-width: 130px;
  }

  .labels {
    text-align: center;
  }

  label {
    display: block;
    color: var(--color-gray-dark, #9fa4a8);
    font-size: 0.75rem;
  }
`;
