import { css } from "lit-element";

export default css`
  :host {
    box-shadow: inset 0 -1px 0 0 rgba(26, 57, 96, 0.1);
    display: flex;
    justify-content: space-around;
  }

  ::slotted(chameleon-tab) {
    align-items: center;
    box-sizing: border-box;
    color: var(--color-secondary);
    display: flex;
    flex-grow: 1;
    font-size: 1.125em;
    height: 65px;
    justify-content: center;
    padding: 8px 12px;
  }

  ::slotted(chameleon-tab:hover) {
    cursor: pointer;
  }

  ::slotted([active]) {
    border-bottom: solid 1px var(--color-secondary);
    box-shadow: inset 0 -2px 0 0 var(--color-secondary);
  }
`;
