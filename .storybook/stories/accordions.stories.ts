import { storiesOf } from "@storybook/polymer";
import { withKnobs } from "@storybook/addon-knobs";
import { eventDetails } from "../utils";
import { html } from "lit-html";
import "@chameleon-ds/accordions/src/index";

const stories = storiesOf("accordions", module);

stories.addDecorator(withKnobs);

stories.add(
  "accordions",
  () => {
    return html`
      <chameleon-accordions
        style="--accordion-width: 400px;"
        @expanded-changed=${eventDetails.action("expanded-changed")}
      >
        <chameleon-accordion>
          <h3 slot="header">Who are you?</h3>
          <div slot="panel">Who, who</div>
        </chameleon-accordion>
        <chameleon-accordion>
          <h3 slot="header">What is love?</h3>
          <div slot="panel">Baby don't hurt me</div>
        </chameleon-accordion>
        <chameleon-accordion>
          <h3 slot="header">
            Why do birds suddenly appear every time you are near?
          </h3>
          <div slot="panel">Just like me, they long to be close to you</div>
        </chameleon-accordion>
      </chameleon-accordions>
    `;
  },
  { info: { inline: true } }
);
