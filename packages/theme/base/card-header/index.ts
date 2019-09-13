import { css } from "lit-element";

export default css`
  :host {
    display: block;
    margin-bottom: 11px;
  }

  h3,
  h2 {
    overflow: hidden;
    margin: 0;
    text-overflow: ellipsis;
  }

  h3 {
    color: var(--color-secondary-dark);
    font-size: var(--font-size-subtitle);
    line-height: 21px;
    white-space: nowrap;
  }

  h2 {
    font-size: var(--font-size-title);
    line-height: 27px;
    max-height: 52px;
  }
`;
