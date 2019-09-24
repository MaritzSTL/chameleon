import { css } from "lit-element";

export default css`
  .opened {
    display: flex;
  }
  .closed {
    display: none;
  }
  .dialog {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    height: 360px;
    padding: 48px;
  }

  .buttons {
    display: flex;
    flex-direction: row;
  }
  chameleon-button {
    margin-right: 0.5em;
  }
`;
