import { storiesOf } from "@storybook/polymer";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "@chameleon-ds/card/src/chameleon-card";
import "@chameleon-ds/card-header/src/chameleon-card-header";
import "@chameleon-ds/card-image/src/chameleon-card-image";
import "@chameleon-ds/card-footer/src/chameleon-card-footer";
import "@chameleon-ds/button/src/chameleon-button";

const stories = storiesOf("Card", module);

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
  "Basic",
  () => {
    const subtitleText = text("Subtitle", "Destination");
    const titleText = text("Title", "St. Louis, MO");

    return html`
      <style>
        chameleon-card {
          max-width: 400px;
        }
      </style>
      <chameleon-card>
        <chameleon-card-header
          title="${titleText}"
          subtitle="${subtitleText}"
        ></chameleon-card-header>
        <p>Here is some sample content for the card</p>
      </chameleon-card>
    `;
  },
  { info: { inline: true } }
);

stories.add(
  "Outline",
  () => {
    return html`
      <style>
        chameleon-card {
          max-width: 400px;
        }
      </style>
      <chameleon-card outline>
        <h3>Card</h3>
        <p>Here is some sample content for the card</p>
      </chameleon-card>
    `;
  },
  { info: { inline: true } }
);

stories.add(
  "Image",
  () => {
    const subtitleText = text("Subtitle", "Destination");
    const titleText = text("Title", "St. Louis, MO");
    const imageSrc = text(
      "Image Source",
      "https://images.unsplash.com/photo-1474644746397-786f431dc663?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80"
    );
    const altText = text("ALT Text", "St. Louis Landscape");

    return html`
      <style>
        chameleon-card {
          max-width: 400px;
        }
      </style>
      <chameleon-card rounded>
        <chameleon-card-header
          title="${titleText}"
          subtitle="${subtitleText}"
        ></chameleon-card-header>
        <chameleon-card-image
          src="${imageSrc}"
          alt="${altText}"
        ></chameleon-card-image>
        <p>
          Sample text…Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
          turpis.
        </p>
      </chameleon-card>
    `;
  },

  { info: { inline: true } }
);

stories.add(
  "Border",
  () => {
    const subtitleText = text("Subtitle", "Destination");
    const titleText = text("Title", "St. Louis, MO");
    const rounded = boolean("Rounded", true);
    const accentColorSelected = text("Top Border", "green");

    return html`
      <style>
        chameleon-card {
          max-width: 400px;
        }
      </style>
      <chameleon-card
        ?rounded="${rounded}"
        accentColor="${accentColorSelected}"
      >
        <chameleon-card-header
          title="${titleText}"
          subtitle="${subtitleText}"
        ></chameleon-card-header>
        <p>Here is some sample content for the card</p>
      </chameleon-card>
    `;
  },
  { info: { inline: true } }
);

stories.add(
  "Footer",
  () => {
    const subtitleText = text("Subtitle", "Destination");
    const titleText = text("Title", "St. Louis, MO");

    return html`
      <style>
        chameleon-card {
          max-width: 400px;
        }
      </style>
      <chameleon-card>
        <chameleon-card-header
          title="${titleText}"
          subtitle="${subtitleText}"
        ></chameleon-card-header>
        <p>Here is some sample content for the card</p>
        <chameleon-card-footer>
          <chameleon-button theme="secondary">Button</chameleon-button>
        </chameleon-card-footer>
      </chameleon-card>
    `;
  },
  { info: { inline: true } }
);
