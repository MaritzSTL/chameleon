import { css } from "lit-element";

export default css`
  :host {
    display: block;
  }

  header {
    display: flex;
    justify-content: space-around;
    box-shadow: inset 0 -1px 0 0 rgba(26, 57, 96, 0.1);
  }

  .tab {
    align-items: center;
    box-sizing: border-box;
    color: var(--color-secondary);
    display: flex;
    flex-grow: 1;
    font-size: 1.125em;
    padding: 8px 12px;
    box-shadow: inset 0 -2px 0 0 var(--color-secondary);
    border-bottom: solid 1px var(--color-secondary);
    justify-content: center;
    height: 65px;
  }

  .tab:hover {
    cursor: pointer;
  }
`;
