import { storiesOf } from "@storybook/polymer";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "@chameleon-ds/toast/src/chameleon-toast";

const stories = storiesOf("Toast", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

stories.add(
  "Toast",
  () => {
    const color = text("Color", "");
    const backgroundColor = text("Background Color", "");
    const showCloseable = boolean("Show", true);
    const imageUrl = text(
      "Image Url",
      "https://media.istockphoto.com/photos/chocolate-chip-cookie-isolated-picture-id517109442?k=6&m=517109442&s=612x612&w=0&h=NvQ5y8ENWZvpr84vEFWmxUgV2rCgtOGEsjJXa3IYsZ4="
    );
    const toastText = text(
      "Text",
      "This website uses cookies to remember you and improve your experience. By using our site, you accept our use of cookies."
    );
    return html`
      <chameleon-toast
        color="${color}"
        backgroundColor="${backgroundColor}"
        ?showCloseable="${showCloseable}"
      >
        <span slot="toast-text">${toastText}</span>
        <img slot="closed-icon" src="${imageUrl}" />
      </chameleon-toast>
    `;
  },
  { info: { inline: true } }
);
