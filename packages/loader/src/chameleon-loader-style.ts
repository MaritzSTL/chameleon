import { css } from "lit-element";

export default css`
  .ellipsis {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }

  .ellipsis div {
    position: absolute;
    top: 27px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: var(--loader-color, #2c6fb7);
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  .ellipsis div:nth-child(1) {
    left: 6px;
    animation: ellipsis1 0.6s infinite;
  }

  .ellipsis div:nth-child(2) {
    left: 6px;
    animation: ellipsis2 0.6s infinite;
  }

  .ellipsis div:nth-child(3) {
    left: 26px;
    animation: ellipsis2 0.6s infinite;
  }

  .ellipsis div:nth-child(4) {
    left: 45px;
    animation: ellipsis3 0.6s infinite;
  }

  @keyframes ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }

  @keyframes ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(19px, 0);
    }
  }
`;
