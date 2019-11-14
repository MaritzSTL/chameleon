import { css } from "lit-element";

export default css`
  :host {
    display: block;
    width: var(--accordion-width, 100%);
    font-family: var(--font-family);
  }
  :host([hidden]) {
    display: none !important;
  }
  .header {
    display: flex;
    justify-content: space-between;
  }
  .expanded {
    display: block;
  }
  .collapsed {
    display: none;
  }
`;
