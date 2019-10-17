import { css } from "lit-element";

export default css`
  :host {
    align-items: center;
    display: flex;
  }

  .pages {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .page {
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    margin: 18px;
  }

  .separator {
    cursor: auto;
  }

  .current,
  .page:not(.separator):hover {
    color: var(--color-surface);
    margin: 0 4px;
  }

  .current span,
  .page:not(.separator):hover {
    align-items: center;
    background-color: var(--color-primary);
    border-radius: 50%;
    display: inline-flex;
    height: 36px;
    justify-content: center;
    width: 36px;
  }
`;
