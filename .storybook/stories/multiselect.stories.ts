import { storiesOf } from "@storybook/polymer";
import { withKnobs, boolean, radios, text } from "@storybook/addon-knobs";
import { html, svg } from "lit-html";
import "../../packages/multiselect/src/chameleon-multiselect";

const stories = storiesOf("Multiselect", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

const searchIcon = (slot: string) => svg`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-search"
    slot="${slot}"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
`;

stories.add(
  "Basic",
  () => {
    const disabled = boolean("Disabled", false);
    const label = text("Label", "");

    return html`
      <chameleon-multiselect
        ?disabled="${disabled}"
        .label="${label}"
      ></chameleon-multiselect>
    `;
  },
  { info: { inline: true } }
);
