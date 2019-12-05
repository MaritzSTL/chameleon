import { css } from "lit-element";

export default css`
  .open {
    display: flex;
  }
  .close {
    display: none;
  }
  .dialog {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    padding: 0.5em;
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
    box-shadow: 0 5px 12px 0 rgba(44, 111, 183, 0.2),
      0 2px 6px -1px rgba(44, 111, 183, 0.12),
      0 1px 4px 0 rgba(44, 111, 183, 0.14);
    margin: auto;
    background-color: #ffffff;
    width: 300px;
    padding: 48px;
    animation-name: dialogopen;
    animation-duration: 1s;
  }

  .full-screen {
    border-radius: unset;
    position: relative;
    width: 100%;
    margin-bottom: 0;
    margin-top: 0;
  }

  .actions {
    display: flex;
    flex-direction: column;
    align-self: stretch;
    margin-top: 1.5em;
  }

  .close-icon {
    display: flex;
    cursor: pointer;
    position: absolute;
    margin: 0;
    top: 25px;
    right: 25px;
  }

  .back-icon {
    display: flex;
    cursor: pointer;
    position: absolute;
    margin: 0;
    top: 25px;
    left: 25px;
  }

  svg {
    width: 100%;
    height: 100%;
    color: var(--color-gray-darkest);
  }

  :slotted(*) {
    color: var(--color-gray-darkest);
    height: 1.125em;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: auto;
  }

  ::slotted([slot="icon"]) {
    color: var(--color-secondary-dark);
    height: 2.625em;
  }

  ::slotted([slot="title"]) {
    color: var(--color-primary);
    font-size: 2em;
    font-weight: 300;
    letter-spacing: 0.016em;
    margin: 1em 0;
  }

  ::slotted([slot="accept-action"]) {
    margin-top: 1em;
  }

  ::slotted([slot="decline-action"]) {
    margin-top: 1em;
  }

  @keyframes dialogopen {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
