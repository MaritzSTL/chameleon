import { css } from "lit-element";

export default css`
  :host {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .cha-uploader {
    box-sizing: border-box;
  }

  .upload-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f8;
    border: 0.0625rem solid var(--gray-light, #c4c7ca);
    padding: 0.625rem 2.5rem;
  }

  .upload-label {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .upload-icon {
    margin-right: 0.3125rem;
  }

  #image-preview {
    position: relative;
  }

  #image-preview svg {
    height: 25px;
    width: 25px;
    background-color: rgba(0, 0, 0, 0.5);
    color: var(--color-gray-lightest, #e1e3e4);
    border-radius: 50%;
    padding: 2px;
  }

  #remove-button {
    cursor: pointer;
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;
  }

  .image-preview-container {
    margin-top: 0.3125rem;
  }

  #uploader {
    border-radius: 0.3125rem;
    align-items: flex-end;
  }

  .upload-label {
    margin: 0 auto;
  }

  chameleon-button {
    --button-padding: 0.3125rem;
  }

  input[type="file"] {
    display: none;
  }

  :host([drag-active]) .upload-container {
    border: dashed 2px var(--color-gray-lightest, #e1e3e4);
    color: var(--color-gray-darkest, #6c737a);
  }
`;
