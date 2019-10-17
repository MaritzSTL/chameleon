import { css } from "lit-element";

export default css`
  @media (min-width: 768px) {
    .side-nav-wrapper.collapsed {
      display: block !important;
    }
  }

  .side-nav-wrapper.collapsed {
    display: none;
  }

  .side-nav-wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    right: 0;
    z-index: 999;
    overflow-y: auto; // padding: 0 20px;
    background-color: var(--surface-color);
    transition: max-width 0.3s ease-out;
    transform: translateZ(0);
    will-change: transform; // trigger GPU for performance

    &:before {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 8px 6px 8px;
      position: absolute;
      top: -6px;
      z-index: 1;
      left: 74px;
    }
    @include gt-sm() {
      max-width: var(--sheet-max-width, 315px);
      padding: 0 0 0 0;
      &:before {
        display: none;
      }
      &.collapsed {
        max-width: 0px;
      }
    }
  }

  .side-nav-wrapper::-webkit-scrollbar {
    display: none;
  }

  .sheet-header {
    padding-top: var(--sheet-padding-top, 34px);
    padding-left: var(--sheet-padding-left, 14px);
    padding-bottom: var(--sheet-padding-bottom, 10px);
    border-bottom: 1px solid var(--gray-light);
  }

  .item-name-container {
    display: flex;
  }

  .item-name {
    width: 90%;
    h3 {
      color: var(--sheet-header-color, var(--secondary-color));
    }
  }

  .item-category {
    padding-bottom: 15px;
  }

  .close-icon {
    cursor: pointer;
    .svg-inline--fa {
      height: 16px;
      color: var(--gray-darkest);
    }
  }

  .loader-container {
    text-align: center;
    padding-top: var(--sheet-padding-top, 34px);
  }

  .pad-top {
    padding-top: var(--sheet-padding-top, 34px);
  }
`;
