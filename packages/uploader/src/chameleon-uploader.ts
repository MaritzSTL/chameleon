import {
  LitElement,
  TemplateResult,
  customElement,
  property,
  html
} from "lit-element";
import { nothing, SVGTemplateResult, svg } from "lit-html";
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
  img = {} as ArrayBuffer;

  @property({ type: Boolean })
  showPreviewImage = false;

  /**
   * Template
   */
  render(): TemplateResult {
    return html`
      ${this.showPreviewImage
        ? html`
            ${this.renderImagePreview()}
          `
        : html`
            ${this.renderDragZone()}
          `}
    `;
  }

  onInputChange(files: FileList): void {
    if (files.length === 1) {
      const selectedFile = files[0];

      if (!this.__checkFileSize(selectedFile.size)) {
        console.error(`File must not exeed ${this.maxFileSize}`);
      } else if (!this.__checkFileType(selectedFile.type)) {
        // TODO: Add chameleon-alert message
        console.error("This file type is not allowed");
      }

      this.__handleFileUpload(selectedFile);
      this.fileName = selectedFile.name;
      this.showPreviewImage = true;
    } else {
      // TODO: Add chameleon-alert message
      this.showPreviewImage = false;
      console.error(
        files.length === 0 ? "No file was uploaded" : "Only one file at a time"
      );
    }
  }

  onGetFile() {
    this.shadowRoot!.getElementById("file")!.click();
  }

  removeFile() {
    this.showPreviewImage = false;
    this.img = {} as ArrayBuffer;
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
      this.img = reader.result as ArrayBuffer;
      this.showPreviewImage = true;
      // TODO(nodza): Emit an event to indicate upload successfully complete
    };

    reader.onloadend = () => {
      this.showPreviewImage = true;
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
    return this.acceptedFileTypes.includes(type);
  }

  get removeIcon(): SVGTemplateResult | TemplateResult {
    return svg`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
  }

  renderImagePreview() {
    return html`
      <div class="image-preview-container">
        <div id="image-preview">
          <chameleon-button
            id="remove-button"
            icon-only
            theme="text"
            @click="${this.removeFile}"
            >${this.removeIcon}</chameleon-button
          >
          ${this.showPreviewImage
            ? html`
                <img src="${this.img}" />
              `
            : nothing}
        </div>
      </div>
    `;
  }

  renderDragZone() {
    return html`
      <div class="cha-uploader">
        <div
          id="#drop-zone"
          class="upload-container"
          @drop="${this.dropHandler}"
          @dragover="${this.dragOverHandler}"
          @dragend="${this.dragEndHandler}"
        >
          <label class="upload-label">
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
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </span>
            ${this.label}
            <chameleon-button
              id="file-button"
              theme="text"
              @click="${this.onGetFile}"
              >Open File Selector</chameleon-button
            >
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
      </div>
      <slot></slot>
    `;
  }
}
