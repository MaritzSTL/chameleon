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
    align-items: baseline;
  }
  /* ::slotted([slot="panel"]) {
    transform: translateY(100%);
    transition: transform 0.3s ease-in-out;
  } */
  /* :host([expanded]) ::slotted([slot="panel"]) {
    transform: translateX(0);
  } */
  .panel.collapsed {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
  }
  .panel.expanded {
    max-height: 100%;
  }
`;
