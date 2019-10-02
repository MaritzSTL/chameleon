import { css } from "lit-element";

export default css`
  header {
    padding: 0 5em;
  }

  .hero {
    display: flex;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    min-height: 400px;
    width: 100%;
  }

  .hero-subtitle {
    font-size: var(--font-size-title);
  }

  .hero-text {
    font-size: var(--font-size-paragraph-medium);
  }

  .surface-color {
    color: var(--color-surface);
  }
`;
