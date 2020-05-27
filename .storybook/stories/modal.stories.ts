import { storiesOf } from "@storybook/polymer";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { eventDetails } from "../utils";
import { html, svg } from "lit-html";
import "../../packages/modal/src/chameleon-modal";
import "@chameleon-ds/input/src/chameleon-input";
import "@chameleon-ds/button/src/chameleon-button";

const stories = storiesOf("Modal", module);

stories.addDecorator(withKnobs);

const closeIcon = svg`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
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
        <chameleon-button
          theme="text"
          slot="left-button"
          @click="${() => console.log("toggled!")}"
        >
          ${closeIcon} Close
        </chameleon-button>
        <chameleon-button
          theme="primary"
          slot="right-button"
          @click="${() => console.log("continued!")}"
        >
          Continue
        </chameleon-button>
      </chameleon-modal>
    `;
  },
  { info: { inline: true } }
);
