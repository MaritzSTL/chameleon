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
    grid-column-gap: 1rem;
    grid-template-columns: repeat(20, 1fr);
    width: 100%;
  }
  .header {
    border-bottom: 1px var(--color-gray-light, #c4c7ca) solid;
    padding: 30px 0;
    margin: 0 0 20px 0;
  }
  .footer {
    margin: 40px 0 30px 0;
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
    padding: 0px !important;
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

  .close-icon {
    cursor: pointer;
    grid-column: 18 / span 2;
  }

  ::slotted([slot="right-button"]) {
    cursor: pointer;
    grid-column: 16 / span 4;
  }

  svg {
    height: 24px;
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
    grid-column: 2 / span 1;
    margin: 0;
  }

  ::slotted([slot="body"]) {
    background-color: #f5f5f8;
    padding: 20px 0 40px;
    margin: 0 30px;
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
