import { css } from "lit-element";

export default css`
  /* The toast - position it at the bottom and in the middle of the screen */
  #toast {
    visibility: hidden; /* Hidden by default. Visible on click */
    min-width: 375px; /* Set a default minimum width */
    width: 456px; /* Set a default max width */
    background-color: #333; /* Black background color */
    color: #f5f5f8; /* off white text color */
    text-align: left; /* left-aligned text */
    border-radius: 10px; /* Rounded borders */
    padding: 1rem; /* Padding */
    position: fixed; /* Sit on top of the screen */
    z-index: 1; /* Add a z-index if needed */
    bottom: 30px; /* 30px from the bottom */
    font-size: 14px;
    line-height: 18px;
    display: flex;
    justify-content: space-between;
  }

  .toast-text {
    margin: 0 5px;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    #toast {
      bottom: 70px;
      width: 90%;
      min-width: 320px;
      max-width: 350px;
    }
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    #toast {
      bottom: 70px;
      width: 90%;
      min-width: 375px;
      max-width: 375px;
    }
  }

  /* Show the toast */
  #toast.show-closeable {
    visibility: visible; /* Show the toast */
    /* Add animation: Take 0.5 seconds to fade in the toast.*/
    -webkit-animation: fadein 0.5s;
    animation: fadein 0.5s;
  }

  /* Hide the toast */
  #toast.hide-closeable {
    visibility: visible;
    -webkit-animation: fadeout 0.5s forwards;
    animation: fadeout 0.5s forwards;
    /* Show the toast */
    /* Add animation: Take 0.5 seconds to fade out the toast. */
  }

  .closed-icon {
    align-self: center;
    display: flex;
  }

  ::slotted(*) {
    height: 20px;
    width: 20px;
    border-radius: 50%;
  }

  /* Animations to fade the toast in */
  @-webkit-keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }

  @keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }
  /* Animations to fade the toast out */
  @-webkit-keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }

  @keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }

  @media (max-width: 420px) {
    @-webkit-keyframes fadeout {
      from {
        bottom: 70px;
        opacity: 1;
      }
      to {
        bottom: 0;
        opacity: 0;
      }
    }
    @keyframes fadeout {
      from {
        bottom: 70px;
        opacity: 1;
      }
      to {
        bottom: 0;
        opacity: 0;
      }
    }
  }
`;
