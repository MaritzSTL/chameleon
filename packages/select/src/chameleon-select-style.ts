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

  :host([disabled]) .svg-inline--fa {
    color: var(--color-gray-light, #c4c7ca);
  }

  :host([disabled]) .options__option-selected {
    color: var(--color-gray-light, #c4c7ca);
  }

  .container {
    background: var(--color-surface, #ffffff);
    border: 1px solid var(--color-gray-light, #c4c7ca);
    border-radius: var(--border-radius, 5px);
    cursor: pointer;
    min-height: 40px;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .container.active {
    border-bottom: none;
    border-radius: var(--border-radius, 5px) var(--border-radius, 5px) 0 0;
  }

  .tags {
    padding: var(--input-padding, 15px);
    padding-right: 40px;
  }

  .select {
    align-items: center;
    display: flex;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 30%;
    width: 40px;
  }

  .container.active .select {
    height: 50px;
  }

  .search {
    padding: var(--input-padding, 15px);
  }

  .search__input {
    border: 1px solid var(--color-gray-light, #c4c7ca);
    border-radius: 5px;
    font-size: var(--font-size-input, 0.938rem);
    padding: 10px;
    width: 100%;
  }

  .svg-inline--fa {
    height: 15px;
  }

  .placeholder {
    color: var(--color-gray-light-dark, #6c737a);
  }

  .options {
    background-color: #ffffff;
    max-height: 200px;
    overflow-y: scroll;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 10;
  }

  .container.active .options {
    border: 1px solid var(--color-gray-light, #c4c7ca);
    border-top: none;
    border-radius: 0px 0px var(--border-radius, 5px) var(--border-radius, 5px);
  }

  .options__list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .options__option {
    align-items: center;
    display: flex;
    padding: var(--input-padding, 15px);
  }

  .options__option .svg-inline--fa,
  .options__option-selected .svg-inline--fa {
    height: 25px;
    color: var(--color-primary, #2c6fb7);
  }

  .options__option:hover .svg-inline--fa {
    color: #ffffff;
  }

  .options__option-selected {
    align-items: center;
    display: flex;
  }

  .options__option-labels {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin: 0 10px;
  }

  .options__option-label,
  .options__option-subLabel {
    display: block;
  }

  .options__option:hover .options__option-label,
  .options__option:hover .options__option-subLabel {
    color: #ffffff;
  }

  .options__option-subLabel {
    display: inline;
    color: var(--color-gray-darkest, #6c737a);
    font-size: var(--font-size-input, 0.938rem);
    margin: 5px 0;
  }

  .options__option-label.bold {
    font-weight: bold;
  }

  .options__option:hover {
    background-color: var(--color-primary, #2c6fb7);
    color: #ffffff;
  }

  .options__option-postLabel {
    display: inline;
  }

  .options_dates {
    display: flex;
    flex-direction: row;
    margin-right: 30px;
  }

  .options__option-startDateLabel {
    margin-bottom: 10px;
  }

  .options__option-startDateLabel,
  .options__option-endDateLabel {
    color: var(--color-gray-darkest, #6c737a);
    font-size: var(--font-size-input, 0.938rem);
    display: block;
  }

  .label-container {
    color: var(--color-gray-darkest, #6c737a);
    font-size: var(--font-size-label, 0.875rem);
    margin-bottom: 10px;
  }
`;
