import { css } from "lit-element";

export const ChameleonCardImageStyle = css`
  :host {
    display: inline-block;
  }

  img {
    border-radius: var(--border-radius, 0.5rem);
    vertical-align: top;
    width: 100%;
  }

  .placeholder {
    background-image: linear-gradient(
      to top,
      var(--color-primary-dark, #004587),
      var(--color-primary-light, #679dea)
    );
    border-radius: var(--border-radius, 0.5rem);
    min-height: 100px;
  }
`;
