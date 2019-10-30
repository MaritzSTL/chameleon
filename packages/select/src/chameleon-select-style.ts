import { css } from "lit-element";

export default css`
  :host {
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
    color: var(--chameleon-select-color-gray, #c4c7ca);
  }

  :host([disabled]) .options__option-selected {
    color: var(--chameleon-select-color-gray, #c4c7ca);
  }

  .container {
    background: var(--chameleon-select-background-color, #ffffff);
    border: 1px solid var(--chameleon-select-border-color, #e8e8e8);
    border-radius: var(--chameleon-select-border-radius, 5px);
    cursor: pointer;
    min-height: 40px;
  }

  .container.active {
    border-bottom: none;
    border-radius: var(--chameleon-select-border-radius, 5px)
      var(--chameleon-select-border-radius, 5px) 0 0;
  }

  .tags {
    padding: var(--chameleon-select-container-padding, 15px);
    padding-right: 40px;
  }

  .select {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 0;
    width: 40px;
  }

  .container.active .select {
    height: 50px;
  }

  .search {
    padding: var(--chameleon-select-container-padding, 15px);
  }

  .search__input {
    border: 1px solid var(--chameleon-select-color-gray, #c4c7ca);
    border-radius: 5px;
    font-size: 15px;
    padding: 10px;
    width: 100%;
  }

  .svg-inline--fa {
    height: 15px;
  }

  .placeholder {
    color: var(--chameleon-select-color-gray-dark, #6c737a);
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
    border: 1px solid var(--chameleon-select-border-color, #e8e8e8);
    border-top: none;
    border-radius: 0px 0px var(--chameleon-select-border-radius, 5px)
      var(--chameleon-select-border-radius, 5px);
  }

  .options__list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .options__option {
    align-items: center;
    display: flex;
    padding: var(--chameleon-select-container-padding, 15px);
  }

  .options__option .svg-inline--fa,
  .options__option-selected .svg-inline--fa {
    height: 25px;
    color: var(--chameleon-select-color-primary, #2c6fb7);
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
    color: var(--gray-darkest, #6c737a);
    font-size: 14px;
    margin: 5px 0;
  }

  .options__option-label.bold {
    font-weight: bold;
  }

  .options__option:hover {
    background-color: var(--chameleon-select-color-primary, #2c6fb7);
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
    color: var(--gray-darkest, #6c737a);
    font-size: 12px;
    display: block;
  }
`;
