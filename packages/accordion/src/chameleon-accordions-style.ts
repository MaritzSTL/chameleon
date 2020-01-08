import { css } from "lit-element";

export default css`
  :host {
    display: block;
    width: var(--accordion-width, 100%);
    font-family: var(--font-family, sans-serif);
  }

  :host([hidden]) {
    display: none !important;
  }
`;
