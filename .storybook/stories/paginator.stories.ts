import { storiesOf } from "@storybook/polymer";
import { withKnobs, number } from "@storybook/addon-knobs";
import { eventDetails } from "../utils";
import { html } from "lit-html";
import "@chameleon-ds/paginator/src/chameleon-paginator";

const stories = storiesOf("Paginator", module);

stories.addDecorator(withKnobs);

stories.add(
  "Paginator",
  () => {
    const totalItems = number("Total Items", 100);
    const pageSize = number("Page Size", 10);

    return html`
      <chameleon-paginator
        totalItems="${totalItems ? totalItems : 0}"
        pageSize="${pageSize ? pageSize : 0}"
        @page-change=${eventDetails.action("page-change")}
      ></chameleon-paginator>
    `;
  },
  { info: { inline: true } }
);
