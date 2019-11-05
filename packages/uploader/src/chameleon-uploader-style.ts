import { css } from "lit-element";

export default css`
  :host {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .cha-uploader {
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
    overflow: hidden;
  }

  .image-preview-container {
    margin-top: 0.3125rem;
  }

  #uploader {
    border-radius: 0.3125rem;
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
`;
