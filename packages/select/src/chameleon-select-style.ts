import { css } from "lit-element";

export default css`
  :host {
    font-family: var(--font-family, sans-serif);
    display: block;
    box-sizing: border-box;
    position: relative;
  }

  :host * {
    box-sizing: border-box;
  }

  :host([disabled]) .container {
    cursor: not-allowed;
  }

  :host([disabled]) svg {
    color: var(--color-gray-light, #c4c7ca);
  }

  :host([disabled]) .options__option-selected {
    color: var(--color-gray-light, #c4c7ca);
  }

  .container {
    align-items: center;
    background: var(--color-surface, #ffffff);
    border: 1px solid var(--border-color, #9fa4a8);
    border-radius: var(--border-radius, 5px);
    cursor: pointer;
    min-height: 2.5rem;
    display: flex;
    position: relative;
  }

  .tags {
    padding: var(--select-padding, 0.438rem 0.5rem);
    width: 100%;
  }

  .search__input {
    border: 1px solid var(--color-gray-light, #c4c7ca);
    border-radius: 5px;
    font-size: var(--font-size-input, 0.938rem);
    padding: 10px;
    width: 100%;
  }

  .placeholder {
    color: var(--color-gray-darkest, #6c737a);
    font-family: var(--font-family, Arial);
    font-size: var(--font-size-label, 0.938rem);
  }

  .options {
    background-color: var(--color-surface, #ffffff);
    border-radius: var(--border-radius-input, 0.313rem);
    box-shadow: 0 5px 12px 0 rgba(31, 40, 91, 0.2),
      0 2px 6px -1px rgba(31, 40, 91, 0.12), 0 1px 4px 0 rgba(31, 40, 91, 0.14);
    left: 0;
    max-height: 175px;
    overflow-x: hidden;
    overflow-y: scroll;
    position: absolute;
    top: calc(100% + 13px);
    width: 100%;
    z-index: 1;
  }

  .options__list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .options__option {
    align-items: center;
    cursor: pointer;
    display: flex;
    padding: 0.5rem 1rem;
  }

  .options__option:hover {
    background-color: rgba(44, 111, 183, 0.26);
  }

  .options__option:not(:last-of-type) {
    border-bottom: 1px solid var(--color-gray-lightest, #e1e3e4);
  }

  .options__option-preLabel {
    margin-right: 10px;
  }

  .options__option-preLabel img,
  svg {
    border-radius: 50%;
    height: 34px;
    vertical-align: top;
    width: 34px;
  }

  .options__option-group span {
    display: block;
  }

  .options__option-label {
    color: var(--color-black, #252a33);
    font-size: var(--font-size-input, 0.938rem);
    font-weight: bold;
    letter-spacing: 0.016rem;
    line-height: 21px;
  }

  .options__option-subLabel {
    color: var(--color-gray-darkest, #6c737a);
    font-size: var(--font-size-input, 0.938rem);
    letter-spacing: 0.016rem;
    line-height: 21px;
  }

  .options__option-postLabel {
    align-self: flex-start;
    color: var(--color-gray-darkest, #6c737a);
    display: block;
    font-size: 0.75rem;
    margin-left: auto;
  }

  .label-container {
    color: var(--color-gray-darkest, #6c737a);
    font-size: var(--font-size-label, 0.875rem);
    margin-bottom: 10px;
  }

  svg {
    height: 16px;
  }

  input {
    align-self: stretch;
    border: none;
    color: var(--color-gray-darkest, #6c737a);
    font-family: var(--font-family, Arial);
    flex-grow: 1;
    font-size: var(--font-size-label, 0.938rem);
    height: 23px;
    padding: 0;
  }

  input::placeholder {
    color: var(--color-gray-darkest, #6c737a);
  }

  input::-webkit-input-placeholder {
    color: var(--color-gray-darkest, #6c737a);
  }

  input::-moz-placeholder {
    color: var(--color-gray-darkest, #6c737a);
  }

  input:-ms-input-placeholder {
    color: var(--color-gray-darkest, #6c737a);
  }

  input:focus {
    outline: none;
  }
`;
