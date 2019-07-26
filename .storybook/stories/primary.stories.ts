import { storiesOf } from "@storybook/polymer";
import { withKnobs, boolean, radios, text } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "../../packages/button/src/cha-button";
import "../../packages/input/src/cha-input";

const stories = storiesOf("Chameleon", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

stories.add(
  "Button",
  () => {
    const disabled = boolean("Disabled", false);
    const themeLabel = "Theme";
    const themeOptions = {
      Primary: "primary",
      Secondary: "secondary",
      Text: "text"
    };
    const defaultThemeValue = "primary";
    const theme = radios(themeLabel, themeOptions, defaultThemeValue);

    return html`
      <cha-button ?disabled="${disabled}" theme="${theme}">Button</cha-button>
    `;
  },
  { info: { inline: true } }
);

stories.add(
  "Input",
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
      <h3>Field / Basic</h3>
      <cha-input
        ?disabled="${disabled}"
        .type="${typeSelection}"
        .placeholder="${placeholder}"
        .label="${label}"
        .validationMessage="${error}"
      ></cha-input>
      <h3>Field / Icon Left</h3>
      <cha-input
        ?disabled="${disabled}"
        icon-left
        .type="${typeSelection}"
        .placeholder="${placeholder}"
        .label="${label}"
        .validationMessage="${error}"
      >
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
          slot="icon-left"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </cha-input>
      <h3>Field / Icon Right</h3>
      <cha-input
        ?disabled="${disabled}"
        icon-right
        .type="${typeSelection}"
        .placeholder="${placeholder}"
        .label="${label}"
        .validationMessage="${error}"
      >
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
          slot="icon-right"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </cha-input>
    `;
  },
  { info: { inline: true } }
);
