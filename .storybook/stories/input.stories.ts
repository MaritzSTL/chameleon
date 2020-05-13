import { storiesOf } from "@storybook/polymer";
import {
  withKnobs,
  boolean,
  radios,
  text,
  number,
} from "@storybook/addon-knobs";
import { eventDetails } from "../utils";
import { html, svg } from "lit-html";
import "@chameleon-ds/input/src/chameleon-input";

const stories = storiesOf("Input", module);

stories.addDecorator(withKnobs);

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
    const name = text("Name", "input-form-name");
    const disabled = boolean("Disabled", false);
    const readonly = boolean("Read Only", false);
    const toggleable = boolean("Toggleable password visibility", false);
    const label = text("Label", "");
    const invalid = boolean("Invalid", false);

    const error = text("Error", "");
    const placeholder = text("Placeholder", "Text...");
    const required = boolean("Required", false);
    const step = number("Step", 0.01);
    const noStepper = boolean(
      "Hide increment arrows/disable incrementing",
      false
    );
    const typeOptions = {
      Text: "text",
      Password: "password",
      Email: "email",
      Number: "number",
      Search: "search",
      Tel: "tel",
      Url: "url",
    };
    const defaultThemeValue = "text";
    const typeSelection = radios("Type", typeOptions, defaultThemeValue);

    return html`
      <chameleon-input
        name="${name}"
        ?required="${required}"
        ?disabled="${disabled}"
        ?readonly="${readonly}"
        ?invalid="${invalid}"
        ?noStepper="${noStepper}"
        ?toggleable="${toggleable}"
        .type="${typeSelection}"
        .placeholder="${placeholder}"
        .label="${label}"
        .validationMessage="${error}"
        .step="${step}"
        @chameleon.input.input=${eventDetails.action("chameleon.input.input")}
      ></chameleon-input>
    `;
  },
  { info: { inline: true } }
);

stories.add(
  "Icon Left",
  () => {
    const name = text("Name", "input-form-name");
    const disabled = boolean("Disabled", false);
    const readonly = boolean("Read Only", false);
    const toggleable = boolean("Toggleable password visibility", false);
    const invalid = boolean("Invalid", false);
    const label = text("Label", "");
    const error = text("Error", "");
    const placeholder = text("Placeholder", "Text...");
    const required = boolean("Required", false);
    const step = number("Step", 0.01);
    const noStepper = boolean(
      "Hide increment arrows/disable incrementing",
      false
    );
    const typeOptions = {
      Text: "text",
      Password: "password",
      Email: "email",
      Number: "number",
      Search: "search",
      Tel: "tel",
      Url: "url",
    };
    const defaultThemeValue = "text";
    const typeSelection = radios("Type", typeOptions, defaultThemeValue);

    return html`
      <chameleon-input
        name="${name}"
        ?required="${required}"
        ?disabled="${disabled}"
        ?readonly="${readonly}"
        ?invalid="${invalid}"
        ?noStepper="${noStepper}"
        ?toggleable="${toggleable}"
        icon-left
        .type="${typeSelection}"
        .placeholder="${placeholder}"
        .label="${label}"
        .validationMessage="${error}"
        .step="${step}"
        @chameleon.input.input=${eventDetails.action("chameleon.input.input")}
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
    const name = text("Name", "input-form-name");
    const disabled = boolean("Disabled", false);
    const readonly = boolean("Read Only", false);
    const toggleable = boolean("Toggleable password visibility", false);
    const label = text("Label", "");
    const error = text("Error", "");
    const invalid = boolean("Invalid", false);
    const placeholder = text("Placeholder", "Text...");
    const required = boolean("Required", false);
    const step = number("Step", 0.01);
    const noStepper = boolean(
      "Hide increment arrows/disable incrementing",
      false
    );
    const typeOptions = {
      Text: "text",
      Password: "password",
      Email: "email",
      Number: "number",
      Search: "search",
      Tel: "tel",
      Url: "url",
    };
    const defaultThemeValue = "text";
    const typeSelection = radios("Type", typeOptions, defaultThemeValue);

    return html`
      <chameleon-input
        name="${name}"
        ?required="${required}"
        ?disabled="${disabled}"
        ?noStepper="${noStepper}"
        ?invalid="${invalid}"
        ?readonly="${readonly}"
        ?toggleable="${toggleable}"
        icon-right
        .type="${typeSelection}"
        .placeholder="${placeholder}"
        .label="${label}"
        .validationMessage="${error}"
        .step="${step}"
        @chameleon.input.input=${eventDetails.action("chameleon.input.input")}
      >
        ${searchIcon("icon-right")}
      </chameleon-input>
    `;
  },
  { info: { inline: true } }
);
