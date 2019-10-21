import { storiesOf } from "@storybook/polymer";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { html, svg } from "lit-html";
import "../../packages/sheet/src/chameleon-sheet";

const stories = storiesOf("Sheet", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

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
      >
        <section slot="details">
          <p>City: Saint Louis</p>
          <p>Sports: Cards</p>
          <p>Parks: Forest Park</p>
        </section>
        <section slot="content">
          <p>state: MO</p>
        </section>
        <section slot="actions">
          <p>sports: Cardnials</p>
        </section></chameleon-sheet
      >
    `;
  },
  { info: { inline: true } }
);
