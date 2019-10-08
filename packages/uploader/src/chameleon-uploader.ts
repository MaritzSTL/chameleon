import {
  LitElement,
  TemplateResult,
  customElement,
  property,
  html
} from "lit-element";
import base from "@chameleon-ds/theme/base";
import style from "@chameleon-ds/theme/base/uploader";

@customElement("chameleon-uploader")
export default class ChameleonUploader extends LitElement {
  /**
   * Styles
   */
  static styles = [base, style];

  /**
   * Properties
   */
  @property({ type: String })
  label = "";

  @property({ type: Number })
  maxFileSize = 1024; // size in bytes

  @property({ type: Array })
  acceptedFileTypes = ["image/gif", "image/jpeg", "image/png"];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <div id="uploader" class="upload-container">
        <div class="file-container">
          <label class="upload-label">${this.label}</label>
          <label class="file-label">
            <input
              id="file"
              name="files[]"
              type="file"
              class="file-input"
              accept="image/*"
              @change="${($event: any) =>
                this.onInputChange($event.target.files)}"
            />

            <span class="file-control"></span>
          </label>
          <div class="image-preview-container">
            <div id="image-preview"></div>
          </div>
        </div>
      </div>
      <slot></slot>
    `;
  }

  onInputChange(files: FileList) {
    if (files.length === 1) {
      const selectedFile = files[0];

      if (!this.__checkFileSize(selectedFile.size)) {
        console.error(`File must not exeed ${this.maxFileSize}`);
        return false;
      } else if (!this.__checkFileType(selectedFile.type)) {
        console.error("This file type is not allowed");
        return false;
      }

      this.__handleFileUpload(selectedFile);
    } else {
      console.error(
        files.length === 0 ? "No file was uploaded" : "Only one file at a time"
      );
      return false;
    }
  }

  __handleFileUpload(file) {
    const reader = new FileReader();

    reader.onloadstart = () => {
      console.log("Initiating upload...");
    };

    reader.onload = () => {
      const imagePreviewContainer: HTMLElement = this.shadowRoot.querySelector(
        "#image-preview"
      );
      imagePreviewContainer.style.backgroundImage = `url(${reader.result})`;

      // TODO(nodza): Emit an event to indicate upload successfully complete
    };

    reader.onloadend = () => {
      console.log("Mission accomplished");
    };

    reader.onerror = err => {
      console.error("Uhh. What had happened was...", err);
    };
    reader.readAsDataURL(file);
  }

  __checkFileSize(size: number): boolean {
    return size / this.maxFileSize / this.maxFileSize <= this.maxFileSize;
  }

  __checkFileType(type: string): boolean {
    return type && this.acceptedFileTypes.includes(type);
  }
}
