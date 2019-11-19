import { css } from "lit-element";

export default css`
  :host {
    display: block;
  }
  :host([hidden]) {
    display: none !important;
  }
  .header {
    display: flex;
    justify-content: space-between;
  }
  ::slotted([slot="panel"]) {
    display: none;
  }
  :host([expanded]) ::slotted([slot="panel"]) {
    display: block;
  }
`;
