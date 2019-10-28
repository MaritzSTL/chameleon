/* !
 * Materialize v1.0.0 (http://materializecss.com)
 * Copyright 2014-2017 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
import { css } from "lit-element";

export const materializeLoaderStyle = css`
  /*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */
  /* Document
   ========================================================================== */
  /**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in
 *    IE on Windows Phone and in iOS.
 */
  .preloader-wrapper {
    line-height: 1.15;
    /* 1 */
    -ms-text-size-adjust: 100%;
    /* 2 */
    -webkit-text-size-adjust: 100%;
    /* 2 */
    margin: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  /*********************
  Transition Classes
**********************/

  @-webkit-keyframes indeterminate {
    0% {
      left: -35%;
      right: 100%;
    }
    60% {
      left: 100%;
      right: -90%;
    }
    100% {
      left: 100%;
      right: -90%;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -35%;
      right: 100%;
    }
    60% {
      left: 100%;
      right: -90%;
    }
    100% {
      left: 100%;
      right: -90%;
    }
  }

  @-webkit-keyframes indeterminate-short {
    0% {
      left: -200%;
      right: 100%;
    }
    60% {
      left: 107%;
      right: -8%;
    }
    100% {
      left: 107%;
      right: -8%;
    }
  }

  @keyframes indeterminate-short {
    0% {
      left: -200%;
      right: 100%;
    }
    60% {
      left: 107%;
      right: -8%;
    }
    100% {
      left: 107%;
      right: -8%;
    }
  }

  .left {
    float: left !important;
  }

  .right {
    float: right !important;
  }

  .circle {
    border-radius: 50%;
  }

  /*
    @license
    Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
  /**************************/
  /* STYLES FOR THE SPINNER */
  /**************************/
  /*
 * Constants:
 *      STROKEWIDTH = 3px
 *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)
 *      ARCTIME     = 1333ms (time it takes to expand and contract arc)
 *      ARCSTARTROT = 216 degrees (how much the start location of the arc
 *                                should rotate each time, 216 gives us a
 *                                5 pointed star shape (it's 360/5 * 3).
 *                                For a 7 pointed star, we might do
 *                                360/7 * 3 = 154.286)
 *      CONTAINERWIDTH = 28px
 *      SHRINK_TIME = 400ms
 */
  .preloader-wrapper {
    display: inline-block;
    position: relative;
    width: 21px;
    height: 21px;
  }

  .preloader-wrapper.active {
    /* duration: 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */
    -webkit-animation: container-rotate 1568ms linear infinite;
    animation: container-rotate 1568ms linear infinite;
  }

  @-webkit-keyframes container-rotate {
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes container-rotate {
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .spinner-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-color: var(--primary-color, #2c6fb7);
  }

  /**
 * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):
 *
 * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't
 * guarantee that the animation will start _exactly_ after that value. So we avoid using
 * animation-delay and instead set custom keyframes for each color (as redundant as it
 * seems).
 *
 * We write out each animation in full (instead of separating animation-name,
 * animation-duration, etc.) because under the polyfill, Safari does not recognize those
 * specific properties properly, treats them as -webkit-animation, and overrides the
 * other animation rules. See https://github.com/Polymer/platform/issues/53.
 */

  .active .spinner-layer {
    /* durations: 4 * ARCTIME */
    opacity: 1;
    -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1)
      infinite both;
    animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite
      both;
  }

  @-webkit-keyframes fill-unfill-rotate {
    12.5% {
      -webkit-transform: rotate(135deg);
    }
    /* 0.5 * ARCSIZE */
    25% {
      -webkit-transform: rotate(270deg);
    }
    /* 1   * ARCSIZE */
    37.5% {
      -webkit-transform: rotate(405deg);
    }
    /* 1.5 * ARCSIZE */
    50% {
      -webkit-transform: rotate(540deg);
    }
    /* 2   * ARCSIZE */
    62.5% {
      -webkit-transform: rotate(675deg);
    }
    /* 2.5 * ARCSIZE */
    75% {
      -webkit-transform: rotate(810deg);
    }
    /* 3   * ARCSIZE */
    87.5% {
      -webkit-transform: rotate(945deg);
    }
    /* 3.5 * ARCSIZE */
    to {
      -webkit-transform: rotate(1080deg);
    }
    /* 4   * ARCSIZE */
  }

  @keyframes fill-unfill-rotate {
    12.5% {
      -webkit-transform: rotate(135deg);
      transform: rotate(135deg);
    }
    /* 0.5 * ARCSIZE */
    25% {
      -webkit-transform: rotate(270deg);
      transform: rotate(270deg);
    }
    /* 1   * ARCSIZE */
    37.5% {
      -webkit-transform: rotate(405deg);
      transform: rotate(405deg);
    }
    /* 1.5 * ARCSIZE */
    50% {
      -webkit-transform: rotate(540deg);
      transform: rotate(540deg);
    }
    /* 2   * ARCSIZE */
    62.5% {
      -webkit-transform: rotate(675deg);
      transform: rotate(675deg);
    }
    /* 2.5 * ARCSIZE */
    75% {
      -webkit-transform: rotate(810deg);
      transform: rotate(810deg);
    }
    /* 3   * ARCSIZE */
    87.5% {
      -webkit-transform: rotate(945deg);
      transform: rotate(945deg);
    }
    /* 3.5 * ARCSIZE */
    to {
      -webkit-transform: rotate(1080deg);
      transform: rotate(1080deg);
    }
    /* 4   * ARCSIZE */
  }

  /**
 * Patch the gap that appear between the two adjacent div.circle-clipper while the
 * spinner is rotating (appears on Chrome 38, Safari 7.1, and IE 11).
 */
  .gap-patch {
    position: absolute;
    top: 0;
    left: 45%;
    width: 10%;
    height: 100%;
    overflow: hidden;
    border-color: var(--primary-color, #2c6fb7);
  }

  .gap-patch .circle {
    width: 1000%;
    left: -450%;
  }

  .circle-clipper {
    display: inline-block;
    position: relative;
    width: 50%;
    height: 100%;
    overflow: hidden;
    border-color: var(--primary-color, #2c6fb7);
  }

  .circle-clipper .circle {
    width: 200%;
    height: 100%;
    border-width: 2px;
    /* STROKEWIDTH */
    border-style: solid;
    border-bottom-color: transparent !important;
    border-color: #2c6fb7;
    border-radius: 50%;
    -webkit-animation: none;
    animation: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
  }

  .circle-clipper.left .circle {
    left: 0;
    border-right-color: transparent !important;
    -webkit-transform: rotate(129deg);
    transform: rotate(129deg);
  }

  .circle-clipper.right .circle {
    left: -100%;
    border-left-color: transparent !important;
    -webkit-transform: rotate(-129deg);
    transform: rotate(-129deg);
  }

  .active .circle-clipper.left .circle {
    /* duration: ARCTIME */
    -webkit-animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite
      both;
    animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
  }

  .active .circle-clipper.right .circle {
    /* duration: ARCTIME */
    -webkit-animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite
      both;
    animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
  }

  @-webkit-keyframes left-spin {
    from {
      -webkit-transform: rotate(130deg);
    }
    50% {
      -webkit-transform: rotate(-5deg);
    }
    to {
      -webkit-transform: rotate(130deg);
    }
  }

  @keyframes left-spin {
    from {
      -webkit-transform: rotate(130deg);
      transform: rotate(130deg);
    }
    50% {
      -webkit-transform: rotate(-5deg);
      transform: rotate(-5deg);
    }
    to {
      -webkit-transform: rotate(130deg);
      transform: rotate(130deg);
    }
  }

  @-webkit-keyframes right-spin {
    from {
      -webkit-transform: rotate(-130deg);
    }
    50% {
      -webkit-transform: rotate(5deg);
    }
    to {
      -webkit-transform: rotate(-130deg);
    }
  }

  @keyframes right-spin {
    from {
      -webkit-transform: rotate(-130deg);
      transform: rotate(-130deg);
    }
    50% {
      -webkit-transform: rotate(5deg);
      transform: rotate(5deg);
    }
    to {
      -webkit-transform: rotate(-130deg);
      transform: rotate(-130deg);
    }
  }

  #spinnerContainer.cooldown {
    /* duration: SHRINK_TIME */
    -webkit-animation: container-rotate 1568ms linear infinite,
      fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);
    animation: container-rotate 1568ms linear infinite,
      fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  @-webkit-keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
