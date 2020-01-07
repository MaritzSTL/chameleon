import { css } from "lit-element";

export default css`
  :host {
    font-family: var(--font-family, Arial);
  }

  label {
    display: block;
    color: var(--label-color, #6c737a);
    font-size: var(--label-font-size, 0.875rem);
    line-height: var(--label-line-height, 1.125rem);
    letter-spacing: var(--label-letter-spacing, 0);
    margin-bottom: 0.5rem;
  }

  .multiselect-box {
    align-items: center;
    display: flex;
    background-color: var(--color-surface, #ffffff);
    border: 1px solid var(--border-color, #9fa4a8);
    border-radius: var(--border-radius-input, 0.313rem);
    box-sizing: border-box;
    min-height: 2.5rem;
    padding: var(--select-padding, 0.438rem 0.5rem);
    position: relative;
  }

  :host([disabled]) {
    pointer-events: none;
  }

  :host([disabled]) chameleon-chip {
    background-color: var(--color-gray-light, #c4c7ca);
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .tags.tags-active {
    margin-bottom: -7px;
  }

  .tags chameleon-chip {
    white-space: nowrap;
    margin-bottom: 7px;
    margin-right: 7px;
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

  input.tags-active {
    margin-bottom: 7px;
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

  ::slotted(svg) {
    color: var(--color-gray-darkest, #6c737a);
    height: 16px;
  }

  chameleon-loader {
    height: 24px;
    width: 24px;
  }
  :host(:hover),
  :host(:active) {
    --label-color: var(--label-hover-color, #2c6fb7);
    --border-color: var(--border-hover-color, #2c6fb7);
  }
`;
