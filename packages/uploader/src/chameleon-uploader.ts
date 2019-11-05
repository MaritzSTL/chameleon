import {
  LitElement,
  TemplateResult,
  customElement,
  property,
  html
} from "lit-element";
import { nothing } from "lit-html";
import base from "@chameleon-ds/theme/base";
import style from "./chameleon-uploader-style";
import "@chameleon-ds/button/src/chameleon-button";

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

  @property({ type: String })
  fileName = "";

  @property({ type: Number })
  maxFileSize = 1024; // size in bytes

  @property({ type: Array })
  acceptedFileTypes = ["image/gif", "image/jpeg", "image/png"];

  @property({ type: ArrayBuffer })
  img;

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      <div class="cha-uploader">
        <div
          id="#drop-zone"
          class="upload-container"
          @drop="${(e: any) => {
            this.dropHandler(e);
          }}"
          @dragover="${(e: any) => {
            this.dragOverHandler(e);
          }}"
          @dragend="${(e: any) => {
            this.dragEndHandler(e);
          }}"
        >
          <label class="upload-label">
            ${this.fileName
              ? html`
                  ${this.fileName}
                  <chameleon-button
                    id="remove-button"
                    theme="text"
                    @click="${this.removeFile}"
                  >
                    <span class="upload-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-trash-2"
                      >
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path
                          d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                        ></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                      </svg>
                    </span>
                  </chameleon-button>
                `
              : html`
                  <span class="upload-icon">
                    <svg
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
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                  </span>
                  ${this.label}
                  <chameleon-button
                    id="file-button"
                    theme="text"
                    @click="${this.onGetFile}"
                    >Browse Files</chameleon-button
                  >
                `}
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
            />

            <span class="file-control"></span>
          </label>
        </div>
        <div class="image-preview-container">
          <div id="image-preview">
            ${this.img
              ? html`
                  <img src="${this.img}" />
                `
              : nothing}
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
        // TODO: Add chameleon-alert message
        console.error("This file type is not allowed");
        return false;
      }

      this.__handleFileUpload(selectedFile);
      this.fileName = selectedFile.name;
    } else {
      // TODO: Add chameleon-alert message
      console.error(
        files.length === 0 ? "No file was uploaded" : "Only one file at a time"
      );
      return false;
    }
  }

  onGetFile() {
    this.shadowRoot!.getElementById("file").click();
  }

  removeFile() {
    // TODO(nodza): Handle delete button
    console.log("File removed");
  }

  dropHandler(ev: any) {
    console.log("File(s) dropped");

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();

    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (var i = 0; i < ev.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (ev.dataTransfer.items[i].kind === "file") {
          var file = ev.dataTransfer.items[i].getAsFile();
          this.__handleFileUpload(file);
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (var i = 0; i < ev.dataTransfer.files.length; i++) {
        this.fileName = ev.dataTransfer.files[i].name;
      }
    }
  }

  dragStartHandler(ev: any) {
    console.log("Drag started");
    ev.dataTransfer.setData("text", ev.target.id);
  }

  dragOverHandler(ev: any) {
    // console.log("File(s) in drop zone");

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }

  dragEndHandler(ev: any) {
    console.log("Drag ended");
    ev.dataTransfer.setData("text", ev.target.id);
  }

  __handleFileUpload(file: File) {
    const reader = new FileReader();

    reader.onloadstart = () => {
      console.log("Initiating upload...");
    };

    reader.onload = () => {
      this.img = reader.result;
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
