import { storiesOf } from "@storybook/polymer";
import { withKnobs, number } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "../../packages/paginator/src/chameleon-paginator";

const stories = storiesOf("Paginator", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

stories.add(
  "Paginator",
  () => {
    const totalItems = number("Total Items", 100);
    const pageSize = number("Page Size", 10);

    return html`
      <chameleon-paginator
        totalItems="${totalItems ? totalItems : 0}"
        pageSize="${pageSize}"
      ></chameleon-paginator>
    `;
  },
  { info: { inline: true } }
);
