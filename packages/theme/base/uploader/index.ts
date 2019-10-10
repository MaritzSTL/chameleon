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
    border: 1px solid var(--gray-light, #c4c7ca);
    padding: 10px 40px;
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
    width: 100%;
    height: 100%;
  }

  .image-preview-container {
    margin-top: 5px;
    width: 200px;
    height: 100px;
  }

  #uploader {
    border-radius: 5px;
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
