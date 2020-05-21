import { storiesOf } from "@storybook/polymer";
import { withKnobs } from "@storybook/addon-knobs";
import { eventDetails } from "../utils";
import { html } from "lit-html";
import "@chameleon-ds/tabs/src/index";

const stories = storiesOf("Tabs", module);

stories.addDecorator(withKnobs);

stories.add(
  "Tabs",
  () => {
    return html`
      <chameleon-tabs
        selected="0"
        id="someid"
        @chameleon.tabs.selected-changed=${eventDetails.action(
          "chameleon.tabs.selected-changed"
        )}
      >
        <chameleon-tab>
          Tab One
        </chameleon-tab>
        <chameleon-tab>
          Tab Two
        </chameleon-tab>
        <chameleon-tab>
          Tab Three
        </chameleon-tab>
      </chameleon-tabs>
    `;
  },
  { info: { inline: true } }
);
