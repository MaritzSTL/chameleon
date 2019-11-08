import { storiesOf } from "@storybook/polymer";
import { withKnobs } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "@chameleon-ds/tabs/src/index";

const stories = storiesOf("Tabs", module);

stories.addDecorator(withKnobs);

stories.add(
  "Tabs",
  () => {
    return html`
      <chameleon-tabs selected="0">
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
