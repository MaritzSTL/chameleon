import { storiesOf } from "@storybook/polymer";
import { withKnobs } from "@storybook/addon-knobs";
import { eventDetails } from "../utils";
import { html } from "lit-html";
import "@chameleon-ds/accordion/src/chameleon-accordion";

const stories = storiesOf("Accordion", module);

stories.addDecorator(withKnobs);

const storyAccordionItems = [
  {
    header: "What is love?",
    panel: "Baby don't hurt me"
  },
  {
    header: "Who are you?",
    panel: "Who who"
  },
  {
    header: "Why do birds suddenly appear every time you are near?",
    panel: "Just like me, they long to be close to you"
  }
];

stories.add(
  "Accordion",
  () => {
    return html`
      <chameleon-accordion
        .accordionItems="${storyAccordionItems}"
        @chameleon.select=${eventDetails.action("chameleon.select")}
      ></chameleon-accordion>
    `;
  },
  { info: { inline: true }, options: { enableShortcuts: false } }
);
