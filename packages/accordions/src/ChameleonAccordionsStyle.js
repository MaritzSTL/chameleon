import { css } from "lit-element";

export const ChameleonAccordionsStyle = css`
  :host {
    display: block;
    width: var(--accordion-width, 100%);
    font-family: var(--font-family, sans-serif);
  }

  ::slotted(chameleon-accordion:not(:last-of-type)) {
    margin-bottom: 25px;
  }
`;
