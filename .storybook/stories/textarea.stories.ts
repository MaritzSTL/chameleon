import { storiesOf } from "@storybook/polymer";
import { withKnobs, boolean, text, number } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "../../packages/textarea/src/chameleon-textarea";

const stories = storiesOf("Textarea", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

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
    const nonresizeable = boolean("resizeable", false);

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
        .nonresizeable="${nonresizeable}"
      ></chameleon-textarea>
    `;
  },
  { info: { inline: true } }
);
