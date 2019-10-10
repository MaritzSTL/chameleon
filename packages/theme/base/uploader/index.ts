import { css } from "lit-element";

export default css`
  .cha-uploader {
    display: flex;
  }

  .upload-container {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: stretch;
    align-items: center;
    min-height: 75px;
    width: 500px;
    background-color: #f5f5f8;
    border: 1px dashed var(--gray-light, #c4c7ca);
    padding: 10px 40px;
    text-align: center;
    align-items: center;
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

  ::slotted(chameleon-button) {
    padding: 0;
  }
`;
