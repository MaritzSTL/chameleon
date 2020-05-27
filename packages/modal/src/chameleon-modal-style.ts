import { css } from "lit-element";

export default css`
  .open {
    display: flex;
  }
  .close {
    display: none;
  }
  .header,
  .footer {
    display: grid;
    max-height: 80px;
    grid-template-rows: auto;
    grid-column-gap: 1.25rem;
    grid-row-gap: 1.5rem;
    grid-template-columns: repeat(10, 1fr);
    width: 100%;
  }
  .header {
    padding-bottom: 30px;
  }
  .footer {
    margin-top: 40px;
  }

  hr {
    width: 110%;
    margin: 0 0 20px -31px;
    color: var(--color-gray-lightest, #e1e3e4);
  }

  .overlay {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
  }

  chameleon-card {
    flex-direction: column;
    border-top: solid var(--color-secondary) 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    box-shadow: 0 8px 16px 0 rgba(12, 0, 51, 0.1);
    margin: auto;
    background-color: #ffffff;
    width: 600px;
    padding: 30px;
    animation-name: modalopen;
    animation-duration: 1s;
  }

  .full-screen {
    border-radius: unset;
    position: relative;
    width: 100%;
    margin-bottom: 0;
    margin-top: 0;
  }

  .close-icon,
  ::slotted([slot="right-button"]) {
    cursor: pointer;
    grid-column: col 10 / span 2;
  }

  svg {
    width: 100%;
    height: 100%;
    color: var(--color-gray-darkest);
  }

  ::slotted([slot="title"]),
  ::slotted([slot="left-button"]) {
    color: var(--color-primary-dark, #004587);
    height: 19px;
    font-family: Lato;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.17;
    letter-spacing: normal;
    grid-column: span 3;
    margin: 0;
  }

  ::slotted([slot="body"]) {
    padding: 20px 20px 40px 20px;
    background-color: #f5f5f8;
    margin: 0;
  }

  @keyframes modalopen {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
