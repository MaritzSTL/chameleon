import { storiesOf } from "@storybook/polymer";
import { withKnobs, boolean, radios, text } from "@storybook/addon-knobs";
import { svg } from "lit-html";
import { html } from "lit-element";
import "../../packages/input/src/chameleon-input";

const stories = storiesOf("Input", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

const searchIcon = slot => svg`
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
    const error = text("Error", "");
    const placeholder = text("Placeholder", "Text...");
    const typeOptions = {
      Text: "text",
      Password: "password",
      Email: "email",
      Number: "number",
      Search: "search",
      Tel: "tel",
      Url: "url"
    };
    const defaultThemeValue = "text";
    const typeSelection = radios("Type", typeOptions, defaultThemeValue);

    return html`
      <chameleon-input
        ?disabled="${disabled}"
        .type="${typeSelection}"
        .placeholder="${placeholder}"
        .label="${label}"
        .validationMessage="${error}"
      ></chameleon-input>
    `;
  },
  { info: { inline: true } }
);

stories.add(
  "Icon Left",
  () => {
    const disabled = boolean("Disabled", false);
    const label = text("Label", "");
    const error = text("Error", "");
    const placeholder = text("Placeholder", "Text...");
    const typeOptions = {
      Text: "text",
      Password: "password",
      Email: "email",
      Number: "number",
      Search: "search",
      Tel: "tel",
      Url: "url"
    };
    const defaultThemeValue = "text";
    const typeSelection = radios("Type", typeOptions, defaultThemeValue);

    return html`
      <chameleon-input
        ?disabled="${disabled}"
        icon-left
        .type="${typeSelection}"
        .placeholder="${placeholder}"
        .label="${label}"
        .validationMessage="${error}"
      >
        ${searchIcon("icon-left")}
      </chameleon-input>
    `;
  },
  { info: { inline: true } }
);

stories.add(
  "Icon Right",
  () => {
    const disabled = boolean("Disabled", false);
    const label = text("Label", "");
    const error = text("Error", "");
    const placeholder = text("Placeholder", "Text...");
    const typeOptions = {
      Text: "text",
      Password: "password",
      Email: "email",
      Number: "number",
      Search: "search",
      Tel: "tel",
      Url: "url"
    };
    const defaultThemeValue = "text";
    const typeSelection = radios("Type", typeOptions, defaultThemeValue);

    return html`
      <chameleon-input
        ?disabled="${disabled}"
        icon-right
        .type="${typeSelection}"
        .placeholder="${placeholder}"
        .label="${label}"
        .validationMessage="${error}"
      >
        ${searchIcon("icon-right")}
      </chameleon-input>
    `;
  },
  { info: { inline: true } }
);
