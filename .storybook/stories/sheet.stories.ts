import { storiesOf } from "@storybook/polymer";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "../../packages/sheet/src/chameleon-sheet";

const stories = storiesOf("Sheet", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

stories.add(
  "Sheet",
  () => {
    const header = text("Label", "");
    const subHeader = text("Sub Label", "");
    let __sheetOpened = boolean("Open", true);

    return html`
      <chameleon-sheet
        header="${header}"
        subHeader="${subHeader}"
        ?__sheetOpened="${__sheetOpened}"
      ></chameleon-sheet>
    `;
  },
  { info: { inline: true } }
);
