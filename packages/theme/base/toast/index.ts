import { css } from "lit-element";

export default css`
  /* The toast - position it at the bottom and in the middle of the screen */
  #toast {
    visibility: hidden; /* Hidden by default. Visible on click */
    min-width: 28%; /* Set a default minimum width */
    max-width: 28%; /* Set a default max width */
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

  @media (max-width: 768px) {
    #toast {
      min-width: 90%;
      max-width: 90%;
    }
  }

  /* Show the toast when clicking on a button (class added with JavaScript) */
  #toast.show-closeable {
    visibility: visible; /* Show the toast */
    /* Add animation: Take 0.5 seconds to fade in the toast.*/
    -webkit-animation: fadein 0.5s;
    animation: fadein 0.5s;
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
`;
