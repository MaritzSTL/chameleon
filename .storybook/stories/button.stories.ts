import { storiesOf } from "@storybook/polymer";
import { html } from "lit-html";
import "../../packages/button/src/cha-button";

const stories = storiesOf("Button", module);

stories.add(
  "Button",
  () =>
    html`
      <cha-button>Button</cha-button>
    `,
  { info: { inline: true } }
);
