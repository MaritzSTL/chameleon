import { storiesOf } from "@storybook/polymer";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "@chameleon-ds/sheet/src/chameleon-sheet";

const stories = storiesOf("Sheet", module);

stories.addDecorator(withKnobs);

stories.addParameters({
  backgrounds: [
    { name: "gray", value: "#f5f5f8", default: true },
    { name: "black", value: "#252a33" },
  ],
});

stories.add(
  "Sheet",
  () => {
    // const header = text("Label", "Missouri");
    // const subHeader = text("Sub Label", "Tour Guide");
    const opened = boolean("Open", false);
    const width = text("Width", "320px");
    const content = text("Content", "Anything you want! :D");

    return html`
      <chameleon-sheet width="${width}" ?opened="${opened}">
        ${content}
        <section>
          <p>City: Saint Louis</p>
          <p>Parks: Forest Park</p>
        </section>
        <section>
          <p>Food: Blue Ocean Sushi</p>
          <p>Art: Saint Louis Art Gallery</p>
        </section>
        <section>
          <p>Hockey: Blues</p>
          <p>Baseball: Cards</p>
          <p>Famous People: Nelly</p>
        </section>
      </chameleon-sheet>
    `;
  },
  { info: { inline: true } }
);
