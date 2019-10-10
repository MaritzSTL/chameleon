import {
  LitElement,
  TemplateResult,
  customElement,
  property,
  html
} from "lit-element";
import base from "@chameleon-ds/theme/base";
import style from "@chameleon-ds/theme/base/uploader";
import "../../button/src/chameleon-button";

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
  label = "Drag & Drop your file or";

  @property({ type: Number })
  maxFileSize = 1024; // size in bytes

  @property({ type: Array })
  acceptedFileTypes = ["image/gif", "image/jpeg", "image/png"];

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <div class="cha-uploader">
        <div class="upload-container">
          <span class="upload-icon"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-image"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline></svg
          ></span>
          <label class="upload-label">
            ${this.label}
            <chameleon-button theme="text">Browse Files</chameleon-button>
          </label>

          <label class="file-label">
            <input
              id="file"
              name="files[]"
              type="file"
              class="file-input"
              accept="image/*"
              @change="${($event: any) =>
                this.onInputChange($event.target.files)}"
              style="display:none"
            />

            <span class="file-control"></span>
          </label>
        </div>
        <div class="image-preview-container">
          <div id="image-preview"></div>
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
