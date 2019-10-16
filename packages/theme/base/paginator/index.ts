import { css } from "lit-element";

export default css`
  :host {
    align-items: center;
    display: flex;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 13px;
  }

  .current {
    position: relative;
    color: var(--color-surface);
  }

  .current:after {
    content: "";
    display: block;
    height: 36px;
    width: 36px;
    background-color: var(--color-primary);
    position: absolute;
    top: -18px;
    left: -18px;
    z-index: -1;
    border-radius: 50%;
  }
`;
