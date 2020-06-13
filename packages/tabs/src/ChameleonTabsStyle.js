import { css } from "lit-element";

export const ChameleonTabsStyle = css`
  :host {
    box-shadow: inset 0 -1px 0 0 rgba(26, 57, 96, 0.1);
    display: flex;
    justify-content: space-around;
  }

  ::slotted(chameleon-tab) {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    font-size: 1.125em;
    height: 65px;
    justify-content: center;
    padding: 8px 12px;
    color: var(--color-gray-light, #c4c7ca);
  }

  ::slotted(chameleon-tab:hover) {
    cursor: pointer;
    color: var(--color-secondary, #69c9b9);
  }

  ::slotted([active]) {
    border-bottom: solid 1px var(--color-secondary, #69c9b9);
    box-shadow: inset 0 -2px 0 0 var(--color-secondary, #69c9b9);
    color: var(--color-secondary, #69c9b9);
  }
`;
