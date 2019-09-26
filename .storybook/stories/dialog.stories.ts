import { storiesOf } from "@storybook/polymer";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { html, svg } from "lit-html";
import "../../packages/dialog/src/chameleon-dialog";

const stories = storiesOf("Dialog", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

const defaultIcon = slot => svg`
  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-triangle" slot="${slot}"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12" y2="17"></line></svg>
`;

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
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <h1>Yolo!</h1>
      <chameleon-dialog ?opened="${!dialogVisible}">
        ${defaultIcon("icon")}
        <h1 slot="title">Title</h1>
        We’re sorry but your session has expired. You will need to log back in
        to continue.
        <div slot="accept-action">
          <chameleon-button
            full-width
            theme="primary"
            @click="${() => console.log("Accept")}"
            >Okay</chameleon-button
          >
        </div>
        <div slot="decline-action">
          <chameleon-button
            full-width
            theme="secondary"
            @click="${() => console.log("Cancel")}"
            >Cancel</chameleon-button
          >
        </div>
      </chameleon-dialog>
    `;
  },
  { info: { inline: true } }
);
