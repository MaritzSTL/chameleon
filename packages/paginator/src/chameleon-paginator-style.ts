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

  .page a {
    color: var(--color-primary, #2c6fb7);
  }

  .separator {
    cursor: auto;
    margin: 14px;
  }

  .current,
  .page:not(.separator):hover {
    color: var(--color-surface, #ffffff);
    margin: 0 4px;
  }

  a {
    text-decoration: none;
  }

  .current span,
  .page a:not(.separator):hover {
    align-items: center;
    background-color: var(--color-primary, #2c6fb7);
    color: var(--color-surface, #ffffff);
    border-radius: 50%;
    display: inline-flex;
    height: 36px;
    justify-content: center;
    width: 36px;
  }

  .placeholder {
    width: 68px;
  }
`;
