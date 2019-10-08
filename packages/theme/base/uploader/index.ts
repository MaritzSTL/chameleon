import { css } from "lit-element";

export default css`
  :host {
    background-color: var(--color-surface);
    display: inline-block;
    max-width: 344px;
    padding: 16px;
  }

  .upload-container {
    min-height: 266px;
    width: 296px;
    margin: 0 auto;
  }

  .image-preview {
    overflow: hidden;
  }

  #image-preview {
    width: 300px;
    height: 300px;
  }

  #uploader {
    background-color: var(--surface-color, #ffffff);
    border-radius: 5px;
    border: 1px dashed var(--gray-light, #c4c7ca);
  }
`;
