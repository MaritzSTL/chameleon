import { storiesOf } from "@storybook/polymer";
import { withKnobs, text } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "../../packages/hero/src/chameleon-hero";

const stories = storiesOf("Hero", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

stories.add(
  "CSS Gradient",
  () => {
    const title = text("Title", "St. Louis, MO");
    const subtitle = text("Subtitle", "Destination");
    const heroText = text(
      "Text",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Viverra adipiscing at in tellus integer feugiat."
    );

    return html`
      <chameleon-hero
        title="${title}"
        subTitle="${subtitle}"
        heroText="${heroText}"
      >
      </chameleon-hero>
    `;
  },
  { info: { inline: true } }
);

stories.add(
  "Background Image",
  () => {
    const title = text("Title", "Washington, DC");
    const subtitle = text("Subtitle", "Destination");
    const heroText = text(
      "Text",
      "Cursus eget nunc scelerisque viverra mauris in. Tellus integer feugiat scelerisque varius. Nisl purus in mollis nunc sed id. Risus viverra adipiscing at in tellus."
    );
    const imageUrl = text("Image URL", "https://picsum.photos/id/122/2100/856");

    return html`
      <chameleon-hero
        title="${title}"
        subTitle="${subtitle}"
        heroText="${heroText}"
        backgroundImageUrl="${imageUrl}"
      >
      </chameleon-hero>
    `;
  },
  { info: { inline: true } }
);
