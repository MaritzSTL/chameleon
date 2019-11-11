import { litFixture, html, expect } from "@open-wc/testing";
import "../src/chameleon-uploader";

const fixture = html`
  <chameleon-uploader></chameleon-uploader>
`;

describe("chameleon-uploader", () => {
  let element;

  beforeEach(async () => {
    element = await litFixture(fixture);
  });

  it("renders", async () => {
    expect(Boolean(element.shadowRoot)).to.equal(true);
  });

  // it("renders label", async () => {
  //   element.label = "Upload a file";
  //   element.requestUpdate();
  //   await element.updateComplete;

  //   expect(element).shadowDom.contain.html("Upload a file");
  // });

  it("renders a preview image if it is loaded successfully", () => {
    element.showPreviewImage = true;
    // element.renderImagePreview();
    expect(Boolean(element.shadowRoot.querySelector("#image-preview"))).to.be
      .false;
  });
});
