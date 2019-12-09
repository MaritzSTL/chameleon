import {
  LitElement,
  TemplateResult,
  customElement,
  property,
  html
} from "lit-element";
import { nothing, SVGTemplateResult, svg } from "lit-html";
import style from "./chameleon-uploader-style";
import "@chameleon-ds/button/src/chameleon-button";

@customElement("chameleon-uploader")
export default class ChameleonUploader extends LitElement {
  /**
   * Styles
   */
  static styles = [style];

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

  renderImagePreview() {
    return html`
      <div class="image-preview-container">
        <div id="image-preview">
          <chameleon-button
            id="remove-button"
            icon-only
            theme="text"
            @click="${this.onRemoveFile}"
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
          id="drop-zone"
          class="upload-container"
          @drop="${this.dropHandler}"
          @dragover="${this.dragOverHandler}"
          @dragleave="${this.dragLeaveHandler}"
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

  onInputChange(files: FileList): void {
    if (files.length === 1) {
      const selectedFile = files[0];
      const approvedFileType = this.__checkFileType(selectedFile.type);

      if (!this.__checkFileSize(selectedFile.size)) {
        this.dispatchErrorMessage(`File must not exeed ${this.maxFileSize}`);
      } else if (!this.__checkFileType(selectedFile.type)) {
        this.dispatchErrorMessage("This file type is not allowed");
      }

      if (approvedFileType) {
        this.__handleFileUpload(selectedFile);
        this.fileName = selectedFile.name;
        this.showPreviewImage = true;
      } else {
        this.showPreviewImage = false;
      }
    } else {
      const errorMessage =
        files.length === 0 ? "No file was uploaded" : "Only one file at a time";
      this.dispatchErrorMessage(errorMessage);
      this.showPreviewImage = false;
      console.error(errorMessage);
    }
  }

  onGetFile() {
    this.shadowRoot!.getElementById("file")!.click();
  }

  onRemoveFile() {
    this.showPreviewImage = false;
    this.img = {} as ArrayBuffer;
    this.removeAttribute("drag-active");
  }

  dropHandler(ev: any) {
    ev.preventDefault();

    if (ev.dataTransfer.items) {
      for (var i = 0; i < ev.dataTransfer.items.length; i++) {
        if (ev.dataTransfer.items[i].kind === "file") {
          var file = ev.dataTransfer.items[i].getAsFile();
          this.__handleFileUpload(file);
        }
      }
    } else {
      for (var i = 0; i < ev.dataTransfer.files.length; i++) {
        this.fileName = ev.dataTransfer.files[i].name;
      }
    }
  }

  dragStartHandler(ev: any) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  dragOverHandler(ev: any) {
    ev.preventDefault();
    this.setAttribute("drag-active", "");
  }

  dragLeaveHandler(ev: any) {
    ev.preventDefault();
    this.removeAttribute("drag-active");
  }

  dragEndHandler(ev: any) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  __handleFileUpload(file: File) {
    const reader = new FileReader();

    reader.onloadstart = () => {
      this.dispatchEvent(
        new CustomEvent("load-initiated", {
          bubbles: true,
          composed: true
        })
      );
    };

    reader.onload = () => {
      this.img = reader.result as ArrayBuffer;
    };

    reader.onloadend = () => {
      this.showPreviewImage = true;
      this.dispatchEvent(
        new CustomEvent("load-ended", {
          detail: {
            fileName: this.fileName
          },
          bubbles: true,
          composed: true
        })
      );
    };

    reader.onerror = err => {
      console.error("File load error!", err);
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

  private dispatchErrorMessage(message: string): void {
    this.dispatchEvent(
      new CustomEvent("chameleon.uploader.error", {
        detail: {
          errorMessage: message
        },
        composed: true,
        bubbles: true
      })
    );
  }
}
