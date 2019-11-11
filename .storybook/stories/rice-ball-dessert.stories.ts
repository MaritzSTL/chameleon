import { storiesOf } from "@storybook/polymer";
import { withKnobs, text } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "@chameleon-ds/rice-ball-dessert/src/chameleon-rice-ball-dessert";

const stories = storiesOf("Rice Ball Dessert", module);

stories.addDecorator(withKnobs);

stories.add(
  "Basic",
  () => {
    const ballColor = text("Ball Color", "");
    return html`
      <chameleon-rice-ball-dessert
        riceBallColor=${ballColor}
      ></chameleon-rice-ball-dessert>
    `;
  },
  { info: { inline: true } }
);
