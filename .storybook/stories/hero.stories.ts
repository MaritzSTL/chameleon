import { storiesOf } from "@storybook/polymer";
import { withKnobs, text } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "../../packages/hero/src/chameleon-hero";

const stories = storiesOf("Hero", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

stories.addParameters({
  backgrounds: [
    { name: "gray", value: "#f5f5f8", default: true },
    { name: "black", value: "#252a33" }
  ]
});

stories.add(
  "Gradient",
  () => {
    const title = text("Title", "St. Louis, MO");
    const subtitle = text("Subtitle", "Destination");

    return html`
      <chameleon-hero
        title="${title}"
        subTitle="${subtitle}"
        backgroundImageUrl="https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      >
        Thshshhshshshs
      </chameleon-hero>
    `;
  },
  { info: { inline: true } }
);
