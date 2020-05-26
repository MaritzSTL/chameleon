import { storiesOf } from "@storybook/polymer";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { eventDetails } from "../utils";
import { html, svg } from "lit-html";
import "../../packages/modal/src/chameleon-modal";
import "@chameleon-ds/input/src/chameleon-input";

const stories = storiesOf("Modal", module);

stories.addDecorator(withKnobs);

const defaultIcon = (slot: any) => svg`
  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-triangle" slot="${slot}"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12" y2="17"></line></svg>
`;

stories.add(
  "Basic",
  () => {
    const modalVisible = boolean("Open", true);
    const dismissible = boolean("Dismissible", true);
    const fullScreen = boolean("Full Screen", false);

    return html`
      <chameleon-modal
        ?open="${modalVisible}"
        ?dismissible="${dismissible}"
        ?fullScreen="${fullScreen}"
        @toggle-modal=${eventDetails.action("toggle-modal")}
      >
        ${defaultIcon("icon")}
        <h1 slot="title">Title</h1>
        <div slot="body">
          <chameleon-input
            .placeholder="${`Chocolate`}"
            .label="${`Favorite ice cream`}"
          >
          </chameleon-input>
          <chameleon-input
            .placeholder="${`Coffee`}"
            .label="${`Favorite drink`}"
          >
          </chameleon-input>
          <chameleon-input
            .placeholder="${`Pizza`}"
            .label="${`Favorite food`}"
          >
          </chameleon-input>
          <chameleon-input
            .placeholder="${`Peppers`}"
            .label="${`Favorite vegetable`}"
          >
          </chameleon-input>
          <chameleon-input
            .placeholder="${`Oranges`}"
            .label="${`Favorite fruit`}"
          >
          </chameleon-input>
        </div>
      </chameleon-modal>
    `;
  },
  { info: { inline: true } }
);
