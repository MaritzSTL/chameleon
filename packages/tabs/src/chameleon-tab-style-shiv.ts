import { css } from "lit-element";

export default css`
  ::slotted(chameleon-tab) {
    color: var(--color-gray-light);
  }

  ::slotted(chameleon-tab:hover) {
    color: var(--color-secondary);
  }

  ::slotted([active]) {
    color: var(--color-secondary);
  }
`;
