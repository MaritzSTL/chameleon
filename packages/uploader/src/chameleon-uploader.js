import { LitElement, property, html } from "lit-element";
import { svg } from "lit-html";
import style from "./chameleon-uploader-style";
import "@chameleon-ds/button/src/chameleon-button";

export default class ChameleonUploader extends LitElement {
  /**
   * Styles
   */
  static styles = [style];

  /**
   * Properties
   */
  @property({ type: String })
  label = "";

  @property({ type: String })
  mode = "single";

  $ = null;

  uploadIcon = svg`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
  `;

  /**
   * Lifecycle Methods
   */
  firstUpdated() {
    this.$ = this.shadowRoot.querySelector("input");

    this.addEventListener("dragover", this.onDragover);
    this.addEventListener("dragleave", this.onDragleave);
    this.addEventListener("drop", this.onDrop);
  }

  /**
   * Template
   */
  render() {
    return html`
      <label>${this.label}</label>
      <div class="drop-zone">
        <slot name="upload-icon">
          ${this.uploadIcon}
        </slot>
        <span class="label bold">Drag and drop files here</span>
        <span class="label">or</span>
        <slot name="add-button" @click="${this.onAddFilesClick}">
          <chameleon-button theme="text">Browse</chameleon-button>
        </slot>
        <input
          type="file"
          accept="image/*,video/*,.pdf,.doc,.docx"
          hidden
          ?multiple="${this.mode === "multiple"}"
          @input="${this.onInput}"
        />
      </div>
    `;
  }

  // uploadFile(file: File) {
  //   const start = Date.now();
  //   const xhr = new XMLHttpRequest();
  //   let stalledId, last;
  //   xhr.upload.onprogress = (e: any) => {
  //     clearTimeout(stalledId);

  //     last = Date.now();
  //     const elapsed = (last - start) / 1000;
  //     const loaded = e.loaded,
  //       total = e.total,
  //       progress = ~~((loaded / total) * 100); // ~~ operator is faster substitute for Math.floor()
  //     Object.assign(file, { loaded });
  //     Object.assign(file, { progress });
  //     Object.assign(file, { indeterminate: loaded <= 0 || loaded >= total });
  //   };
  // }

  onAddFilesClick = () => {
    this.$?.click();
  };

  onDragover = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.setAttribute("drag-active", "");
  };

  onDragleave = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.removeAttribute("drag-active");
  };

  onDrop = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (e.dataTransfer?.items) {
      for (var i = 0; i < e.dataTransfer.items.length; i++) {
        const file = e.dataTransfer.items[i].getAsFile();
        console.log("file: ", file);
      }
    } else if (e.dataTransfer?.files) {
      for (let i = 0; i < e.dataTransfer.files.length; i++) {
        const file = e.dataTransfer.files[i];
        console.log("file: ", file);
      }
    }
  };

  onInput = (e) => {
    const files = e.target.files;
    console.log("file: ", files);
  };
}

if (!window.customElements.get("chameleon-uploader"))
  window.customElements.define("chameleon-uploader", ChameleonUploader);
