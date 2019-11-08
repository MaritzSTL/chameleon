import { storiesOf } from "@storybook/polymer";
import { withKnobs, text } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "@chameleon-ds/chip/src/chameleon-chip";

const stories = storiesOf("Chip", module);

stories.addDecorator(withKnobs);

stories.add(
  "Chip",
  () => {
    const valueText = text("Value", "Salty");

    return html`
      <chameleon-chip>${valueText}</chameleon-chip>
    `;
  },
  { info: { inline: true } }
);

stories.add(
  "With Icon",
  () => {
    const valueText = text("Value", "Crunchy");
    document.addEventListener("remove-chip", e =>
      console.log("Chameleon Chip Close Event: ", (<CustomEvent>e).detail.value)
    );

    return html`
      <chameleon-chip .value="${valueText}" closeable
        >${valueText}</chameleon-chip
      >
    `;
  },
  { info: { inline: true } }
);
