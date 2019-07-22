import { storiesOf } from "@storybook/polymer";
import { withKnobs, boolean, radios } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "../../packages/button/src/cha-button";

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
