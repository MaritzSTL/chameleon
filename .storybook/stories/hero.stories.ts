import { storiesOf } from "@storybook/polymer";
import { withKnobs, text, number, boolean } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "@chameleon-ds/hero/src/chameleon-hero";

const stories = storiesOf("Hero", module);

stories.addDecorator(withKnobs);

stories.add(
  "CSS Gradient",
  () => {
    const title = text("Title", "St. Louis, MO");
    const subtitle = text("Subtitle", "Destination");
    const heroText = text(
      "Text",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Viverra adipiscing at in tellus integer feugiat."
    );
    const gradientColors = text("Hex Colors", "#B72126, #14264B");
    const heroType = "gradient";
    const loading = boolean("Loading", false);

    return html`
      <chameleon-hero
        title="${title}"
        subTitle="${subtitle}"
        heroText="${heroText}"
        gradient="${gradientColors}"
        type="${heroType}"
        ?loading="${loading}"
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
    const heroType = "image";
    const loading = boolean("Loading", false);

    return html`
      <chameleon-hero
        title="${title}"
        subTitle="${subtitle}"
        heroText="${heroText}"
        imageUrl="${imageUrl}"
        type="${heroType}"
        ?loading="${loading}"
      >
      </chameleon-hero>
    `;
  },
  { info: { inline: true } }
);

stories.add(
  "Image Gradient",
  () => {
    const title = text("Title", "New York, NY");
    const subtitle = text("Subtitle", "Destination");
    const heroText = text(
      "Text",
      "Cursus eget nunc scelerisque viverra mauris in. Tellus integer feugiat scelerisque varius. Nisl purus in mollis nunc sed id. Risus viverra adipiscing at in tellus."
    );
    const imageUrl = text("Image URL", "https://picsum.photos/id/703/2100/856");
    const heroType = "imageGradient";
    const gradientColors = text("Hex Colors", "#B72126, #14264B");
    const gradientAlpha = number("Gradient Alpha", 0.5);
    const loading = boolean("Loading", false);

    return html`
      <chameleon-hero
        title="${title}"
        subTitle="${subtitle}"
        heroText="${heroText}"
        imageUrl="${imageUrl}"
        type="${heroType}"
        gradient="${gradientColors}"
        gradientAlpha="${gradientAlpha}"
        ?loading="${loading}"
      >
      </chameleon-hero>
    `;
  },
  { info: { inline: true } }
);
