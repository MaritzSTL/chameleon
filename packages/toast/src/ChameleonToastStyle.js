import { css } from "lit-element";

export const ChameleonToastStyle = css`
  :host {
    align-items: center;
    animation: fadeout 0.5s forwards;
    background-color: var(--color-black, #252a33);
    border-radius: var(--border-radius, 0.5rem);
    bottom: 30px;
    box-sizing: border-box;
    left: 30px;
    color: var(--color-surface, #ffffff);
    display: flex;
    font-size: var(--font-size-label, 0.875rem);
    justify-content: space-between;
    line-height: 1.125rem;
    padding: 16px 24px;
    position: fixed;
    width: 456px;
  }

  :host([showcloseable]) {
    visibility: visible;
    animation: fadein 0.5s;
  }

  .toast-text {
    margin-right: 10px;
  }

  .close-icon {
    display: flex;
  }

  ::slotted([slot="close-icon"]) {
    cursor: pointer;
    height: 20px;
    width: 20px;
    border-radius: 50%;
  }

  @media only screen and (max-width: 768px) {
    :host {
      bottom: 10px;
      left: 10px;
      width: calc(100vw - 20px);
    }

    @keyframes fadein {
      from {
        bottom: 0;
        opacity: 0;
      }
      to {
        bottom: 10px;
        opacity: 1;
      }
    }

    @keyframes fadeout {
      from {
        bottom: 10px;
        opacity: 1;
      }
      to {
        bottom: 0;
        opacity: 0;
      }
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
`;
