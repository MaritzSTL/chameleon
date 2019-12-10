import { storiesOf } from "@storybook/polymer";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { eventDetails } from "../utils";
import { html, svg } from "lit-html";
import "../../packages/dialog/src/chameleon-dialog";

const stories = storiesOf("Dialog", module);

stories.addDecorator(withKnobs);

const defaultIcon = (slot: any) => svg`
  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-triangle" slot="${slot}"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12" y2="17"></line></svg>
`;

stories.add(
  "Basic",
  () => {
    const dialogVisible = boolean("Open", true);
    const dismissible = boolean("Dismissible", true);
    const canGoBack = boolean("Can Go Back", false);
    const fullScreen = boolean("Full Screen", false);

    return html`
      <chameleon-dialog
        ?open="${dialogVisible}"
        ?dismissible="${dismissible}"
        ?canGoBack="${canGoBack}"
        ?fullScreen="${fullScreen}"
        @toggle-dialog=${eventDetails.action("toggle-dialog")}
      >
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
