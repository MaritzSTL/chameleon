/* !
 * Materialize v1.0.0 (http://materializecss.com)
 * Copyright 2014-2017 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
import { css } from "lit-element";

export const ChameleonLoaderSpinnerStyle = css`
  /* SVG styles. */
  svg {
    animation: 2s linear infinite svg-animation;
  }

  /* SVG animation. */
  @keyframes svg-animation {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }

  /* Circle styles. */
  circle {
    animation: 1.4s ease-in-out infinite both circle-animation;
    display: block;
    fill: transparent;
    stroke: var(--loader-color, #2c6fb7);
    stroke-linecap: round;
    stroke-dasharray: 283;
    stroke-dashoffset: 280;
    stroke-width: 10px;
    transform-origin: 50% 50%;
  }

  /* Circle animation. */
  @keyframes circle-animation {
    0%,
    25% {
      stroke-dashoffset: 280;
      transform: rotate(0);
    }

    50%,
    75% {
      stroke-dashoffset: 75;
      transform: rotate(45deg);
    }

    100% {
      stroke-dashoffset: 280;
      transform: rotate(360deg);
    }
  }
`;
