import { css } from "lit-element";

export default css`
  :host {
    display: inline-block;
  }

  img {
    border-radius: var(--border-radius, 0.5rem);
    vertical-align: top;
    width: 100%;
  }
  :host([noImage]) {
    backgroundimage: linear-gradient(
      to top,
      var(--color-primary-dark, #004587),
      var(--color-primary-light, #679dea)
    );
    borderradius: var(--border-radius, 0.5rem);
    height: 100px;
  }
`;
