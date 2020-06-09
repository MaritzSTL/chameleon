import { css } from "lit-element";

export default css`
  :host {
    box-sizing: border-box;
    --loader-color: var(--color-primary, #2c6fb7);
  }

  :host * {
    box-sizing: border-box;
  }
`;
