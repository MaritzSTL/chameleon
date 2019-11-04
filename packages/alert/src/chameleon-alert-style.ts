import { css } from "lit-element";

export default css`
  .alert {
    border-radius: 18px;
    width: 400px;
    padding: 20px;
    background-color: #e32636;
    color: white;
    margin-bottom: 15px;
  }

  .closebtn {
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 25px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
  }

  .closebtn:hover {
    color: black;
  }

  .icon {
    margin-right: 15px;
    height: 24px;
    cursor: pointer;
  }

  .message: {
    font-size: 20px;
  }
`;
