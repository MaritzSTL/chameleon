import { storiesOf } from "@storybook/polymer";
import { withKnobs, text } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "../../packages/rice-ball-dessert/src/chameleon-rice-ball-dessert";

const stories = storiesOf("Rice Ball Dessert", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

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
