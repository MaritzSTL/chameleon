import { storiesOf } from "@storybook/polymer";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { eventDetails } from "../utils";
import { html } from "lit-html";
import "@chameleon-ds/sheet/src/chameleon-sheet";

const stories = storiesOf("Sheet", module);

stories.addDecorator(withKnobs);

stories.addParameters({
  backgrounds: [
    { name: "gray", value: "#f5f5f8", default: true },
    { name: "black", value: "#252a33" }
  ]
});

stories.add(
  "Sheet",
  () => {
    const header = text("Label", "Missouri");
    const subHeader = text("Sub Label", "Tour Guide");
    const sheetOpened = boolean("Open", false);

    return html`
      <chameleon-sheet
        header="${header}"
        subHeader="${subHeader}"
        ?sheetOpened="${sheetOpened}"
        @chameleon.sheet.toggle=${eventDetails.action("chameleon.sheet.toggle")}
      >
        <section slot="details">
          <p>City: Saint Louis</p>
          <p>Parks: Forest Park</p>
        </section>
        <section slot="content">
          <p>Food: Blue Ocean Sushi</p>
          <p>Art: Saint Louis Art Gallery</p>
        </section>
        <section slot="actions">
          <p>Hockey: Blues</p>
          <p>Baseball: Cards</p>
          <p>Famous People: Nelly</p>
        </section></chameleon-sheet
      >
    `;
  },
  { info: { inline: true } }
);
