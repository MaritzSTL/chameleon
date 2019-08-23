import { storiesOf } from "@storybook/polymer";
import {
  withKnobs,
  boolean,
  radios,
  text,
  number
} from "@storybook/addon-knobs";
import { html } from "lit-html";
import "../../packages/button/src/chameleon-button";
import "../../packages/input/src/chameleon-input";
import "../../packages/textarea/src/chameleon-textarea";
import "../../packages/card/src/chameleon-card";
import "../../packages/radio/src/chameleon-radio";
import "../../packages/switch/src/chameleon-switch";

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
      <chameleon-button ?disabled="${disabled}" theme="${theme}"
        >Button</chameleon-button
      >
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
      <chameleon-input
        ?disabled="${disabled}"
        .type="${typeSelection}"
        .placeholder="${placeholder}"
        .label="${label}"
        .validationMessage="${error}"
      ></chameleon-input>
      <h3>Field / Icon Left</h3>
      <chameleon-input
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
      </chameleon-input>
      <h3>Field / Icon Right</h3>
      <chameleon-input
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
      </chameleon-input>
    `;
  },
  { info: { inline: true } }
);

stories.add(
  "Textarea",
  () => {
    const disabled = boolean("Disabled", false);
    const label = text("Label", "");
    const error = text("Error", "");
    const placeholder = text("Placeholder", "Text...");
    const minlength = number("minlength", 0);
    const maxlength = number("maxlength", 500);
    const rows = number("Rows", 2);
    const cols = number("Columns", 20);

    return html`
      <chameleon-textarea
        ?disabled="${disabled}"
        .placeholder="${placeholder}"
        .label="${label}"
        .validationMessage="${error}"
        .minlength="${minlength}"
        .maxlength="${maxlength}"
        .rows="${rows}"
        .cols="${cols}"
      ></chameleon-textarea>
    `;
  },
  { info: { inline: true } }
);

stories.add(
  "Card",
  () => {
    return html`
      <chameleon-card>
        <h3>Card</h3>
        <p>Here is some sample content for the card</p>
      </chameleon-card>
    `;
  },
  { info: { inline: true } }
);

stories.add(
  "Radio",
  () => {
    const label = text("Label", "");
    const checked = boolean("Checked", true);

    return html`
      <chameleon-radio
        label="${label}"
        name="test"
        ?checked="${checked}"
      ></chameleon-radio>
    `;
  },
  { info: { inline: true } }
);

stories.add(
  "Switch",
  () => {
    const label = text("Label", "");
    const checked = boolean("Checked", true);

    return html`
      <chameleon-switch
        label="${label}"
        name="test"
        ?checked="${checked}"
      ></chameleon-switch>
    `;
  },
  { info: { inline: true } }
);
