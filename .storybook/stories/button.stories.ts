import { storiesOf } from "@storybook/polymer";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { html } from "lit-html";
import "../../packages/button/src/chameleon-button";

const stories = storiesOf("Button", module);

// Typecasting this as "any" is a quick workaround. Please come back
// to this and make these types compatible.
stories.addDecorator(withKnobs as any);

const arrowIcon = slot => svg`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right" slot="${slot}"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
`;

const plusIcon = slot => svg`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus" slot="${slot}"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
`;

stories.add(
  "Primary",
  () => {
    const disabled = boolean("Disabled", false);
    const fullWidth = boolean("Full Width", false);

    return html`
      <chameleon-button
        ?disabled="${disabled}"
        theme="primary"
        ?full-width="${fullWidth}"
        >Button</chameleon-button
      >
    `;
  },
  { info: { inline: true } }
);

stories.add(
  "Secondary",
  () => {
    const disabled = boolean("Disabled", false);
    const fullWidth = boolean("Full Width", false);

    return html`
      <chameleon-button
        ?disabled="${disabled}"
        theme="secondary"
        ?full-width="${fullWidth}"
        >Button</chameleon-button
      >
    `;
  },
  { info: { inline: true } }
);

stories.add(
  "Text",
  () => {
    const disabled = boolean("Disabled", false);
    const fullWidth = boolean("Full Width", false);

    return html`
      <chameleon-button
        ?disabled="${disabled}"
        theme="text"
        ?full-width="${fullWidth}"
        >Button</chameleon-button
      >
    `;
  },
  { info: { inline: true } }
);

stories.add(
  "Text with Icon",
  () => {
    const disabled = boolean("Disabled", false);
    const fullWidth = boolean("Full Width", false);

    return html`
      <chameleon-button
        ?disabled="${disabled}"
        theme="text"
        ?full-width="${fullWidth}"
        icon-left
        >${plusIcon("icon-left")}Add</chameleon-button
      >
    `;
  },
  { info: { inline: true } }
);

stories.add(
  "Icon Only",
  () => {
    const disabled = boolean("Disabled", false);

    return html`
      <chameleon-button ?disabled="${disabled}" icon-only theme="text"
        >${arrowIcon("icon-only")}</chameleon-button
      >
    `;
  },
  { info: { inline: true } }
);
