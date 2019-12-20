import { storiesOf } from "@storybook/polymer";
import { withKnobs, boolean, text, number } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "@chameleon-ds/textarea/src/chameleon-textarea";

const stories = storiesOf("Textarea", module);

stories.addDecorator(withKnobs);

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
    const nonresizeable = boolean("non-resizeable", false);
    const value = text("Value", "");

    return html`
      <chameleon-textarea
        ?disabled="${disabled}"
        .placeholder="${placeholder}"
        .value=${value}
        .label="${label}"
        .validationMessage="${error}"
        .minlength="${minlength}"
        .maxlength="${maxlength}"
        .rows="${rows}"
        .cols="${cols}"
        .nonresizeable="${nonresizeable}"
      ></chameleon-textarea>
    `;
  },
  { info: { inline: true } }
);
