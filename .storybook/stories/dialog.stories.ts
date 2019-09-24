import { storiesOf } from "@storybook/polymer";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "../../packages/dialog/src/chameleon-dialog";

const stories = storiesOf("Dialog", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

stories.add(
  "Basic",
  () => {
    // let dialogVisible = false;
    let dialogVisible = boolean("Open", true);
    const toggleDialog = () => {
      dialogVisible = !dialogVisible;
    };

    const closeDialog = () => {
      dialogVisible = false;
    };

    return html`
      <h1>Yolo!</h1>
      <chameleon-dialog
        ?opened="${!dialogVisible}"
        @dialog.accept="${() => console.log("Ok")}"
        @dialog.cancel="${() => console.log("Cancel")}"
      >
        <h2>Icon</h2>
        <h1 class="dialog-title">Title</h1>
        <p class="dialog-body">This is a dialog</p>
      </chameleon-dialog>
      <!-- <button @click="${toggleDialog}">
        Open
      </button> -->
    `;
  },
  { info: { inline: true } }
);
