import { css } from "lit-element";

export default css`
  .opened {
    display: flex;
  }
  .closed {
    display: none;
  }
  .dialog {
    flex-direction: column;
    border: 2px outset black;
    padding: 1em;
    margin: 1em;
  }
  .buttons {
    display: flex;
    flex-direction: row;
  }
  .accept {
    justify-content: space-around;
    align-content: space-around;
  }
  .cancel {
    justify-content: space-around;
    align-content: space-around;
  }
`;
